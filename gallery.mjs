const photos=[
 {id:'bands',title:'层纹之间，自有山河',category:'specimen',tag:'纹理标本',file:'agate-bands',alt:'玛瑙切片的层叠条带与色彩实拍',note:'沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。',origin:'公开玛瑙切片标本 · 来源未标产地',author:'Hannes Grobe',license:'CC BY-SA 2.5',licenseUrl:'https://creativecommons.org/licenses/by-sa/2.5/',source:'https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg'},
 {id:'libation',title:'一盏温润，双耳生姿',category:'vessel',tag:'馆藏器物',file:'agate-libation-cup',alt:'清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳',note:'看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。',origin:'中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425',author:'Cleveland Museum of Art / Gary Kirchenbauer',license:'CC0 1.0',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/',source:'https://www.clevelandart.org/art/1920.425'},
 {id:'moss',title:'把一片绿意，佩在身上',category:'jewelry',tag:'实物佩饰',file:'agate-moss-pendant',alt:'带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理',note:'圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。',origin:'苔藓玛瑙吊坠 · 来源未标产地',author:'Hannes Grobe',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',source:'https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg'},
 {id:'crystal',title:'光透过石，层次便醒来',category:'specimen',tag:'纹理标本',file:'agate-crystal',alt:'透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞',note:'外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。',origin:'透光玛瑙切片标本 · 来源未标产地',author:'Hannes Grobe',license:'CC BY-SA 2.5',licenseUrl:'https://creativecommons.org/licenses/by-sa/2.5/',source:'https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg'},
 {id:'carnelian',title:'赤色成杯，雕出一朵花',category:'vessel',tag:'馆藏器物',file:'agate-carnelian-cup',alt:'中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍',note:'花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。',origin:'中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882',author:'The Metropolitan Museum of Art',license:'CC0 1.0 / Public Domain',licenseUrl:'https://creativecommons.org/publicdomain/zero/1.0/',source:'https://www.metmuseum.org/art/collection/search/44144'},
 {id:'nodule',title:'从一块原石，读起',category:'specimen',tag:'纹理标本',file:'agate-nodule',alt:'玛瑙结核标本的外缘与内部纹理实拍',note:'外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。',origin:'公开玛瑙结核标本 · 非阜新原料产地证明',author:'James St. John',license:'CC BY 2.0',licenseUrl:'https://creativecommons.org/licenses/by/2.0/',source:'https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg'}
];
const gallery=document.querySelector('#agate-gallery');
const grid=gallery.querySelector('.photo-grid');
const dialog=document.createElement('dialog');
dialog.id='photo-dialog';dialog.className='photo-dialog';dialog.setAttribute('aria-labelledby','photo-title');
dialog.innerHTML=`<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>`;
document.body.append(dialog);
const $=s=>dialog.querySelector(s);
let activeFilter='all',selected=0;
const visiblePhotos=()=>photos.filter(p=>activeFilter==='all'||p.category===activeFilter);
function setZoom(zoomed){
 dialog.classList.toggle('photo-zoomed',zoomed);$('#photo-zoom').setAttribute('aria-pressed',String(zoomed));$('#photo-zoom').textContent=zoomed?'还原全貌 −':'放大细节 ＋';
 $('.photo-viewport').scrollTo(0,0);
}
function showPhoto(index){
 const items=visiblePhotos();selected=(index+items.length)%items.length;const p=items[selected];
 setZoom(false);$('#photo-large').src=`./assets/photos/${p.file}.webp`;$('#photo-large').alt=p.alt;
 $('#photo-title').textContent=p.title;$('#photo-tag').textContent=p.tag;$('#photo-note').textContent=p.note;$('#photo-origin').textContent=p.origin;
 $('#photo-credit').textContent=`摄影 / 图像提供：${p.author} · ${p.license}`;$('#photo-source').href=p.source;$('#photo-license').href=p.licenseUrl;
 $('#photo-counter').textContent=`${String(selected+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;
 $('#photo-prev').disabled=$('#photo-next').disabled=items.length<2;
}
function render(){
 const items=visiblePhotos();
 grid.innerHTML=items.map((p,i)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${i}" aria-label="放大查看：${p.title}"><span class="photo-frame"><img src="./assets/photos/${p.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${p.alt}"><span class="photo-category">${p.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(photos.indexOf(p)+1).padStart(2,'0')}</span><span><strong>${p.title}</strong><small>${p.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join('');
 gallery.querySelector('#photo-result-count').textContent=`${items.length} 件实物`;
 grid.querySelectorAll('[data-photo-index]').forEach(button=>button.onclick=()=>{showPhoto(Number(button.dataset.photoIndex));dialog.showModal();});
}
gallery.querySelectorAll('[data-photo-filter]').forEach(button=>button.onclick=()=>{
 activeFilter=button.dataset.photoFilter;
 gallery.querySelectorAll('[data-photo-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();
});
$('#photo-close').onclick=()=>dialog.close();$('#photo-prev').onclick=()=>showPhoto(selected-1);$('#photo-next').onclick=()=>showPhoto(selected+1);
$('#photo-zoom').onclick=()=>setZoom(!dialog.classList.contains('photo-zoomed'));
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showPhoto(selected+(event.key==='ArrowLeft'?-1:1));}});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();});
document.querySelector('#gallery-jump').onclick=()=>gallery.scrollIntoView({behavior:'smooth'});
render();
