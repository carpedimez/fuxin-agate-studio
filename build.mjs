import {build,transform} from 'esbuild';
import {readFile,writeFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const {version}=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
await build({
 absWorkingDir:root,
 stdin:{contents:"import './app.mjs'; import './music.mjs'; import './mineral.mjs';",resolveDir:root,sourcefile:'site-entry.mjs'},
 bundle:true,format:'esm',platform:'browser',target:'es2022',minify:true,splitting:false,
 outfile:path.join(root,'site.bundle.js'),legalComments:'eof',charset:'utf8',
 plugins:[{name:'local-three',setup(builder){
  builder.onResolve({filter:/^three$/},()=>({path:path.join(root,'vendor/three.module.js')}));
  builder.onResolve({filter:/^three\/addons\/controls\/OrbitControls\.js$/},()=>({path:path.join(root,'vendor/OrbitControls.js')}));
 }}]
});
const cssFiles=['styles.css','experience.css','expansion.css','playground.css','music.css','mineral.css','gallery.css'];
const css=(await Promise.all(cssFiles.map(name=>readFile(path.join(root,name),'utf8')))).join('\n');
const compiled=await transform(css,{loader:'css',minify:true,target:'es2022',legalComments:'eof'});
await writeFile(path.join(root,'site.bundle.css'),compiled.code);
let html=await readFile(path.join(root,'index.source.html'),'utf8');
html=html.replace(/<link rel="stylesheet"[^>]*>/g,'').replace(/<script type="importmap">[\s\S]*?<\/script>/g,'');
html=html.replace('</head>',`<link rel="stylesheet" href="./site.bundle.css?v=${encodeURIComponent(version)}"></head>`);
html=html.replace(/<script type="module" src="\.\/(?:app|music|mineral)\.mjs"><\/script>/g,'');
html=html.replace('</body>',`<script type="module" src="./site.bundle.js?v=${encodeURIComponent(version)}"></script></body>`);
await writeFile(path.join(root,'index.html'),html);
console.log(JSON.stringify({jsBytes:(await stat(path.join(root,'site.bundle.js'))).size,cssBytes:(await stat(path.join(root,'site.bundle.css'))).size,criticalScripts:1,stylesheets:1}));
