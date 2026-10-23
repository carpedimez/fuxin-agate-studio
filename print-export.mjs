import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {motifOutline} from './core.mjs';
import {buildPrintMesh,binarySTL,cleanPrintOutline,printSettings} from './print-mesh.mjs';

const safeName=text=>(text||'我的作品').replace(/[<>:"/\\|?*\u0000-\u001f]/g,'').slice(0,50)||'我的作品';
const mm=value=>Number(value.toFixed(1)).toString();

function grooveSampler(snapshot,settings,lineWidth){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;
 const ctx=canvas.getContext('2d',{willReadFrequently:true}),k=canvas.width/2;
 ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.lineCap='round';ctx.lineJoin='round';
 for(const stroke of snapshot.strokes){
  if(!stroke.points?.length)continue;
  const shade=Math.round(255*(1-Math.max(0,Math.min(1,stroke.depth??.6))));
  ctx.strokeStyle=`rgb(${shade} ${shade} ${shade})`;ctx.lineWidth=Math.max(stroke.width*settings.scale,lineWidth)/settings.scale*k;
  ctx.beginPath();stroke.points.forEach(([x,y],i)=>i?ctx.lineTo((x+1)*k,(y+1)*k):ctx.moveTo((x+1)*k,(y+1)*k));
  if(stroke.points.length===1){const [x,y]=stroke.points[0];ctx.lineTo((x+1)*k+.01,(y+1)*k);}ctx.stroke();
 }
 const p=snapshot.inscription;
 if(p?.text){
  const fontSize=p.size*k;ctx.save();ctx.translate((p.x+1)*k,(p.y+1)*k);ctx.rotate(p.angle*Math.PI/180);
  ctx.font=`${fontSize}px ${p.font==='sans'?'Microsoft YaHei,sans-serif':'SimSun,serif'}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=ctx.strokeStyle='#555';ctx.lineWidth=.25/settings.scale*k;
  const chars=p.vertical?Array.from(p.text):[p.text];chars.forEach((ch,i)=>{const y=p.vertical?(i-(chars.length-1)/2)*fontSize*1.15:0;ctx.strokeText(ch,0,y);ctx.fillText(ch,0,y);});ctx.restore();
 }
 const data=ctx.getImageData(0,0,canvas.width,canvas.height).data,n=canvas.width;
 return (x,y)=>{
  const u=Math.max(0,Math.min(n-1,(x+1)*k)),v=Math.max(0,Math.min(n-1,(y+1)*k)),ix=Math.floor(u),iy=Math.floor(v),fx=u-ix,fy=v-iy;
  const get=(a,b)=>1-data[(Math.min(n-1,b)*n+Math.min(n-1,a))*4]/255;
  return (get(ix,iy)*(1-fx)+get(ix+1,iy)*fx)*(1-fy)+(get(ix,iy+1)*(1-fx)+get(ix+1,iy+1)*fx)*fy;
 };
}

function printPreview(container){
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor('#e7e8df');renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;container.append(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,2000);camera.up.set(0,0,1);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.enablePan=false;
 scene.add(new THREE.AmbientLight(0xfff8eb,.8));
 const light=new THREE.DirectionalLight(0xfff1d8,3);light.position.set(-90,-50,80);scene.add(light);
 const fill=new THREE.DirectionalLight(0xd8e5ed,.8);fill.position.set(80,30,70);scene.add(fill);
 const material=new THREE.MeshStandardMaterial({color:0xb4ae9c,roughness:.75,metalness:0});let mesh=null,disposed=false;
 const render=()=>{if(!disposed&&!document.hidden)renderer.render(scene,camera);};controls.addEventListener('change',render);
 const resize=()=>{const r=container.getBoundingClientRect();if(r.width<1||r.height<1)return;renderer.setSize(r.width,r.height);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();render();};
 const observer=new ResizeObserver(resize);observer.observe(container);
 document.addEventListener('visibilitychange',render);resize();
 return {
  set(model){
   if(mesh){scene.remove(mesh);mesh.geometry.dispose();}
   const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(model.positions,3));geometry.setIndex(new THREE.BufferAttribute(model.indices,1));geometry.computeVertexNormals();
   mesh=new THREE.Mesh(geometry,material);scene.add(mesh);const size=model.settings.size,z=model.dimensions[2]/2;controls.target.set(0,0,z);camera.position.set(size*.25,-size*1.45,size*1.7+z);controls.minDistance=size*.65;controls.maxDistance=size*5;camera.lookAt(controls.target);controls.update();renderer.render(scene,camera);
  },
  view(side=false){if(!mesh)return;const size=mesh.geometry.boundingSphere?.radius*2||60,z=controls.target.z;camera.position.set(side?size*1.8:0,side?-size*.15:0,side?z+size*.12:z+size*1.9);camera.lookAt(controls.target);controls.update();},
  dispose(){disposed=true;observer.disconnect();document.removeEventListener('visibilitychange',render);controls.removeEventListener('change',render);controls.dispose();mesh?.geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();}
 };
}

export function createPrintExport({state,download,gallery}){
 const button=document.createElement('button');button.id='gallery-print';button.type='button';button.innerHTML='↗ 3D打印文件<small>STL · 自定尺寸 · 保留立体刻线</small>';
 gallery.querySelector('#gallery-project').after(button);
 const dialog=document.createElement('dialog');dialog.id='print-dialog';dialog.className='print-dialog';dialog.setAttribute('aria-labelledby','print-title');
 dialog.innerHTML=`<header class="print-heading"><div><p class="eyebrow">FROM IDEA TO OBJECT / 从想法到实物</p><h2 id="print-title">把想法，握在手里。</h2><p>调整实物尺寸，带走可供切片的作品本体。</p></div><button type="button" id="print-close" aria-label="关闭3D打印设置">×</button></header>
 <div class="print-layout"><section class="print-visual"><div id="print-preview" aria-label="打印实体预览，可拖动旋转"></div><div class="print-view-tools"><button type="button" id="print-front">看正面</button><button type="button" id="print-side">看厚度</button><span id="print-dimensions"></span></div></section>
 <section class="print-controls" aria-label="实物尺寸与刻线"><p class="print-work-title" id="print-work-name"></p>
 <div class="print-input-row"><label for="print-size">最长边 <span>mm</span><input id="print-size" type="number" min="20" max="100" step="1" value="50" required></label><label for="print-thickness">厚度 <span>mm</span><input id="print-thickness" type="number" min="2" max="12" step="0.1" value="4" required></label></div>
 <label class="print-check"><input id="print-details" type="checkbox" checked>保留刻线与落款</label>
 <div class="print-input-row"><label for="print-depth">刻线最大深度 <span>mm</span><input id="print-depth" type="number" min="0" max="1.2" step="0.1" value="0.6" required></label><label for="print-quality">细节精度<select id="print-quality"><option value="standard">标准</option><option value="fine">精细</option></select></label></div>
 <p id="print-detail-scale" class="print-detail-scale"></p><div class="print-progress" aria-hidden="true"><i id="print-progress-fill"></i></div><p id="print-status" class="print-status" role="status" aria-live="polite"></p>
 <button type="button" id="print-download" class="primary" disabled>下载 STL 文件 <span aria-hidden="true">↗</span></button>
 <p class="print-material-note">文件按毫米建模。STL保留形状，不含玛瑙纹色、挂绳或展台；实际打印需在切片软件中选择设备与材料。</p>
 </section></div>`;
 document.body.append(dialog);const $=id=>dialog.querySelector('#'+id);
 let snapshot=null,current=null,preview=null,controller=null,epoch=0,timer=0,previousFocus=null;
 const status=(text,kind='busy')=>{$('print-status').textContent=text;$('print-status').dataset.kind=kind;};
 const invalidate=()=>{epoch++;clearTimeout(timer);controller?.abort();controller=null;current=null;$('print-download').disabled=true;$('print-progress-fill').style.width='0%';};
 function parameters(){
  for(const id of ['print-size','print-thickness','print-depth'])if(!$(id).checkValidity())throw new Error('请按输入框范围填写尺寸与深度。');
  const size=Number($('print-size').value),thickness=Number($('print-thickness').value),fine=$('print-quality').value==='fine',pitch=Math.max(fine ? .25 : .4,size/(fine?190:150));
  const depth=$('print-details').checked?Number($('print-depth').value):0;
  return {size,thickness,depth,pitch,lineWidth:Math.max(fine ? .6 : .8,pitch*2.2)};
 }
 async function generate(token){
  if(!dialog.open||token!==epoch)return;
  controller=new AbortController();const signal=controller.signal;
  try{
   const options=parameters(),outline=cleanPrintOutline(snapshot.outline),settings=printSettings(outline,options);
   $('print-detail-scale').textContent=$('print-details').checked?`细刻线按至少 ${Number(options.lineWidth.toFixed(2))} mm 展开，请在预览中检查小字与细节。`:'只生成外形与厚度。';
   status('正在生成实体与刻线…');await document.fonts.ready;
   const sampler=options.depth?grooveSampler(snapshot,settings,options.lineWidth):()=>0;
   const mesh=await buildPrintMesh(outline,options,sampler,{signal,onProgress:v=>{if(token===epoch)$('print-progress-fill').style.width=Math.round(v*100)+'%';}});
   if(token!==epoch||!dialog.open)return;
   let unavailable=false;
   if(!preview){try{preview=printPreview($('print-preview'));}catch{unavailable=true;}}
   if(preview)preview.set(mesh);
   current=mesh;$('print-download').disabled=false;
   $('print-dimensions').textContent=mesh.dimensions.map(mm).join(' × ')+' mm';
   status(`${unavailable?'三维预览暂不可用；':''}实体已封闭 · 最薄处 ${mm(mesh.minimumThickness)} mm`,'ready');
  }catch(error){
   if(token!==epoch||error.name==='AbortError')return;
   current=null;$('print-download').disabled=true;status(error.message||'生成未完成，请调整参数后重试。','error');
  }
 }
 function schedule(){
  invalidate();const hasDetails=$('print-details').checked;
  $('print-depth').disabled=!hasDetails;
  const thickness=Number($('print-thickness').value),maximum=Math.round(Math.max(0,Math.min(1.2,thickness-1.2))*10)/10;
  $('print-depth').max=String(maximum);
  if(Number($('print-depth').value)>maximum)$('print-depth').value=String(maximum);
  $('print-dimensions').textContent='';status('正在更新打印模型…');const token=epoch;timer=setTimeout(()=>generate(token),250);
 }
 button.onclick=()=>{
  if(!state.image)return;
  previousFocus=document.activeElement;
  snapshot={outline:motifOutline(state.kind).map(p=>[...p]),strokes:structuredClone(state.strokes||[]),inscription:structuredClone(state.inscription||null),title:state.workTitle||'我的玛瑙作品'};
  $('print-work-name').textContent=snapshot.title;
  let span=2;
  try{const outline=cleanPrintOutline(snapshot.outline),xs=outline.map(p=>p[0]),ys=outline.map(p=>p[1]);span=Math.max(Math.max(...xs)-Math.min(...xs),Math.max(...ys)-Math.min(...ys));}catch{/* The generation panel presents the recoverable outline error. */}
  $('print-thickness').value=String(Math.round(Math.max(2,Math.min(12,(state.thickness+.14)/(span*1.4+.11)*50))*10)/10);
  dialog.showModal();dialog.scrollTop=0;schedule();
 };
 for(const id of ['print-size','print-thickness','print-depth','print-details','print-quality'])$(id).addEventListener('input',schedule);
 $('print-close').onclick=()=>dialog.close();$('print-front').onclick=()=>preview?.view(false);$('print-side').onclick=()=>preview?.view(true);
 $('print-download').onclick=()=>{
  if(!current)return;
  const model=current,token=epoch;status('正在打包 STL 文件…');$('print-download').disabled=true;
  setTimeout(()=>{
   if(token!==epoch||!dialog.open)return;
   try{const bytes=binarySTL(model),name=safeName(snapshot.title)+'-'+model.dimensions.map(mm).join('x')+'mm.stl';download(new Blob([bytes],{type:'model/stl'}),name);status('STL已导出 · 在切片软件中按毫米导入。','ready');document.dispatchEvent(new CustomEvent('agate-feedback',{detail:{kind:'success'}}));}
   catch(error){status(error.message||'导出未完成，请重试。','error');}
   finally{if(token===epoch)$('print-download').disabled=false;}
  },30);
 };
 dialog.addEventListener('close',()=>{invalidate();preview?.dispose();preview=null;$('print-dimensions').textContent='';previousFocus?.focus({preventScroll:true});});
 gallery.addEventListener('close',()=>{if(dialog.open)dialog.close();});
 return {dialog};
}
