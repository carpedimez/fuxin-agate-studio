const steps=[
 {short:'岩石留空',title:'一块石的故事，始于一处空隙。',copy:'在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。',caption:'岩石中的空隙，为后来的矿物生长提供空间。',key:'空间'},
 {short:'富硅流体',title:'水，把形成玛瑙的物质带来。',copy:'含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。',caption:'富硅流体进入空隙，带来形成二氧化硅矿物的物质。',key:'物质'},
 {short:'结晶成纹',title:'细小的差异，长成层层纹理。',copy:'在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。',caption:'以常见同心层纹为例：结构与成分的差异，带来可见层次。',key:'纹色'},
 {short:'因色构形',title:'自然留下纹色，构思从你开始。',copy:'天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。',caption:'从“石如何形成”，走到“我想把它做成什么”。',key:'构思'}
];
function outline(cx,cy,rx,ry){
 const points=Array.from({length:96},(_,i)=>{const a=i/96*Math.PI*2,r=1+.055*Math.sin(3*a+.4)+.035*Math.cos(7*a);return[cx+Math.cos(a)*rx*r,cy+Math.sin(a)*ry*r];});
 return points.map((p,i)=>`${i?'L':'M'}${p.map(n=>n.toFixed(1)).join(',')}`).join(' ')+'Z';
}
const cavity=outline(360,255,186,143);
function diagram(id,mini=false){
 const colors=['#8a4b2b','#c69258','#ead3a1','#b45a30','#6f3024','#d6a365','#f2dfb9','#9d452d','#dca45c','#813c28','#e4c99c','#b36f43'];
 return `<svg viewBox="0 0 720 500" role="img" aria-label="玛瑙常见形成路径的概念剖面图，随讲述展示空隙、富硅流体、层纹与创作轮廓"><defs><radialGradient id="${id}-rock"><stop stop-color="#75513b"/><stop offset="1" stop-color="#35271f"/></radialGradient><linearGradient id="${id}-water" x2="0" y2="1"><stop stop-color="#a1c4b4" stop-opacity=".12"/><stop offset="1" stop-color="#7bada3" stop-opacity=".65"/></linearGradient><clipPath id="${id}-clip"><path d="${cavity}"/></clipPath></defs><g class="formation-host"><path d="M75 135L152 61 287 75 400 48 527 87 638 163 663 307 604 408 469 448 317 426 186 446 70 342 48 234Z" fill="url(#${id}-rock)" stroke="#bb8a5c" stroke-opacity=".35"/><path d="M75 135L162 148 176 113M638 163L579 188 555 160M604 408L545 375 568 340M70 342L127 322 143 354M287 75L300 105" fill="none" stroke="#bf936f" stroke-opacity=".2" stroke-width="2"/></g><path d="${cavity}" fill="#17130f" stroke="#b17d4c" stroke-opacity=".65" stroke-width="2"/><g class="formation-water" clip-path="url(#${id}-clip)"><path d="M120 190Q230 180 320 200T520 190T680 200V460H120Z" fill="url(#${id}-water)"/><path d="M140 199Q230 185 320 200T520 190" fill="none" stroke="#b8d8c8" stroke-opacity=".4" stroke-width="1.5"/></g><path class="formation-channel" d="M28 235Q96 229 140 238T210 241" fill="none" stroke="#9ac8b6" stroke-width="3"/><g class="formation-bands">${colors.map((color,i)=>`<path class="formation-band" style="--band:${i}" d="${outline(360,255,186-i*12.7,143-i*9.2)}" fill="${color}"/>`).join('')}<path d="${outline(360,255,31,30)}" fill="#e8d7bd"/><path d="M340 260L348 240 357 248 368 228 377 248 389 251 374 265 381 275 358 281Z" fill="#f5ead4" opacity=".65"/></g><g class="formation-motif" fill="none" stroke="#fce2ad"><path d="M249 317C245 210 350 134 472 149C477 264 382 352 249 317Z" stroke-width="2.5"/><path d="M249 317Q331 235 453 166M319 253L311 208M352 225L399 228M290 282L341 291" stroke-width="1.5"/><path d="M236 339L256 314" stroke-width="3"/></g>${mini?'':'<g class="formation-measure" fill="none" stroke="#e5c28b" stroke-opacity=".25"><path d="M90 467H630M90 462V472M630 462V472"/><circle cx="360" cy="255" r="215" stroke-dasharray="2 9"/></g>'}</svg>`;
}
const home=document.createElement('section');home.className='formation-teaser';home.setAttribute('aria-labelledby','formation-teaser-title');
home.innerHTML=`<div class="formation-mini" data-phase="2" aria-hidden="true">${diagram('formation-mini',true)}</div><div class="formation-teaser-copy"><p class="eyebrow">BEFORE THE CRAFT / 石的来历</p><h2 id="formation-teaser-title">动手之前，<br>先读懂石里的时间。</h2><p>从岩石空隙，到层层纹色，再到手中的作品。<br>用一段简短图解，认识玛瑙的常见形成过程。</p><button class="text-button formation-open">看玛瑙如何形成 <span>↗</span></button></div><div class="formation-teaser-trail" aria-hidden="true"><span>留空</span><i>→</i><span>入硅</span><i>→</i><span>成纹</span><i>→</i><span>构形</span></div>`;
document.querySelector('#agate-gallery').before(home);
const dialog=document.createElement('dialog');dialog.id='formation-dialog';dialog.className='formation-dialog';dialog.setAttribute('aria-labelledby','formation-title');
dialog.innerHTML=`<div class="formation-topbar"><span>石的来历 <small> / 从地质到手艺</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成图解">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><p class="formation-visual-tag">一块玛瑙的来历 <span id="formation-stage-label">01 / 空间</span></p>${diagram('formation-main')}<p id="formation-caption"></p><small class="formation-scale-note">概念剖面示意 · 非真实地质时间与比例</small></div><div class="formation-story"><p class="eyebrow">BEFORE YOUR FIRST CREATION</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${steps.map((s,i)=>`<button data-formation-step="${i}" aria-pressed="${i===0}"><b>0${i+1}</b><span>${s.short}</span></button>`).join('')}</div><div class="formation-actions"><button id="formation-previous" class="text-button">← 上一步</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div><div class="formation-player"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><span>约半分钟 · 可随时跳过</span></div></div></div><details class="formation-notes"><summary>关于这段形成示意与资料出处</summary><p>这里讲述常见的火山岩空隙充填路径。玛瑙也存在其他地质成因；条带可受结晶、自组织与杂质分布等过程影响，不能把每一条纹都等同于一次进水。示意不代表某件阜新原石的成因鉴定，也不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;
document.body.append(dialog);
const $=s=>dialog.querySelector(s),seenKey='agate-formation-intro-v1';
let step=0,timer=null,seenInSession=false;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function stop(){clearTimeout(timer);timer=null;dialog.classList.remove('formation-running');$('#formation-play').setAttribute('aria-pressed','false');$('#formation-play').textContent='▷ 自动演示';}
function advance(){if(step<steps.length-1){render(step+1);timer=setTimeout(advance,8000);}else stop();}
function play(){stop();if(step===steps.length-1)render(0);dialog.classList.add('formation-running');$('#formation-play').setAttribute('aria-pressed','true');$('#formation-play').textContent='Ⅱ 暂停演示';timer=setTimeout(advance,8000);}
function render(next){
 step=next;const s=steps[step];$('.formation-visual').dataset.phase=step;
 $('#formation-stage-label').textContent=`0${step+1} / ${s.key}`;$('#formation-number').textContent=`0${step+1}`;$('#formation-title').textContent=s.title;$('#formation-copy').textContent=s.copy;$('#formation-caption').textContent=s.caption;
 dialog.querySelectorAll('[data-formation-step]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.formationStep)===step)));
 $('#formation-previous').disabled=step===0;$('#formation-next').innerHTML=step===3?'选一块石，开始创作 <span>↗</span>':'继续看 <span>→</span>';
}
function remember(){seenInSession=true;try{localStorage.setItem(seenKey,'1');}catch{}}
function finish(){remember();dialog.close();if(location.hash!=='#studio')location.hash='studio';}
function open(){if(dialog.open)return;$('.formation-notes').open=false;render(0);dialog.showModal();if(!reducedMotion.matches)play();}
export function considerFormationIntro(){
 requestAnimationFrame(()=>{let seen=seenInSession;try{seen=seen||localStorage.getItem(seenKey)==='1';}catch{}
  if(!seen&&!document.querySelector('#studio').hidden&&!document.querySelector('dialog[open]'))open();
 });
}
home.querySelector('.formation-open').onclick=open;
const replay=document.createElement('button');replay.className='demo-button formation-replay';replay.textContent='玛瑙怎么形成？';replay.onclick=open;document.querySelector('#studio .heading-actions').prepend(replay);
dialog.querySelectorAll('[data-formation-step]').forEach(b=>b.onclick=()=>{stop();render(Number(b.dataset.formationStep));});
$('#formation-next').onclick=()=>{stop();if(step===3)finish();else render(step+1);};$('#formation-previous').onclick=()=>{stop();render(Math.max(0,step-1));};
$('#formation-play').onclick=()=>timer?stop():play();$('#formation-skip').onclick=finish;$('#formation-close').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{stop();remember();});dialog.addEventListener('cancel',stop);
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();stop();render(Math.min(3,Math.max(0,step+(e.key==='ArrowRight'?1:-1))));}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();});
render(0);
