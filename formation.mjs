import {createFormationCinema} from './formation-cinema.mjs';
const steps=[
 {short:'岩石留空',title:'一块石的故事，始于一处空隙。',copy:'在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。',caption:'岩石中的空隙，为后来的矿物生长提供空间。',key:'空间'},
 {short:'富硅流体',title:'水，把形成玛瑙的物质带来。',copy:'含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。',caption:'富硅流体进入空隙，带来形成二氧化硅矿物的物质。',key:'物质'},
 {short:'结晶成纹',title:'细小的差异，长成层层纹理。',copy:'在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。',caption:'以常见同心层纹为例：结构与成分的差异，带来可见层次。',key:'纹色'},
 {short:'因色构形',title:'自然留下纹色，构思从你开始。',copy:'天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。',caption:'从“石如何形成”，走到“我想把它做成什么”。',key:'构思'}
];
const art=steps.map((_,i)=>`./assets/formation-v2/stage-0${i+1}.webp`);
const observations=['沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。','沿着裂隙看：进入腔体的水，与湿润表面上的折射。','沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。','沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。'];
const english=['A PLACE TO BEGIN','WATER BRINGS SILICA','LAYERS TAKE SHAPE','FROM STONE TO CREATION'];
const home=document.createElement('section');home.className='formation-teaser';home.setAttribute('aria-labelledby','formation-teaser-title');
home.innerHTML=`<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>`;
document.querySelector('#agate-gallery').before(home);
const dialog=document.createElement('dialog');dialog.id='formation-dialog';dialog.className='formation-dialog';dialog.setAttribute('aria-labelledby','formation-title');
dialog.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${art.map((src,i)=>`<img src="${src}" data-art-stage="${i}" loading="lazy" decoding="async" alt="" class="${i===0?'visible':''}">`).join('')}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${steps.map((s,i)=>`<button data-formation-step="${i}" aria-pressed="${i===0}"><img src="./assets/formation-v2/stage-0${i+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${i+1}</b>${s.short}</span><i></i></button>`).join('')}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;
document.body.append(dialog);
const $=s=>dialog.querySelector(s),seenKey='agate-formation-intro-v2';
let step=-1,progress=0,timer=null,seenInSession=false,cinema=null,startedAt=0,baseSeconds=0,detail=false,bright=false;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function stop(){clearTimeout(timer);timer=null;dialog.classList.remove('formation-running');$('#formation-play').setAttribute('aria-pressed','false');$('#formation-play').textContent='▷ 自动演示';cinema?.setPlaying(false);}
function tick(){
 const seconds=baseSeconds+(performance.now()-startedAt)/1000;
 if(seconds>=36){renderProgress(3);stop();return;}
 const chapter=Math.min(3,Math.floor(seconds/9)),within=seconds%9,t=Math.max(0,Math.min(1,(within-6)/3));
 renderProgress(Math.min(3,chapter+t*t*(3-2*t)));timer=setTimeout(tick,80);
}
function play(){stop();if(progress>=3)renderProgress(0);const fraction=progress%1;baseSeconds=Math.floor(progress)*9+(fraction?6+3*(.5-Math.sin(Math.asin(1-2*fraction)/3)):0);startedAt=performance.now();dialog.classList.add('formation-running');$('#formation-play').setAttribute('aria-pressed','true');$('#formation-play').textContent='Ⅱ 暂停演示';cinema?.setPlaying(true);timer=setTimeout(tick,80);}
function renderProgress(value,instant=false){
 progress=Math.max(0,Math.min(3,value));const next=Math.round(progress),s=steps[next];cinema?.setProgress(progress,instant);
 const lower=Math.floor(progress),blend=progress-lower;
 dialog.querySelectorAll('[data-art-stage]').forEach(img=>{const i=Number(img.dataset.artStage);img.style.opacity=i===lower?String(1-blend):i===lower+1?String(blend):'0';});
 $('#formation-progress').value=Math.round(progress*1000);$('#formation-progress-label').value=`0${next+1} / 04`;
 if(next===step)return;step=next;$('.formation-visual').dataset.phase=step;$('.formation-cinema').style.backgroundImage=`url("./assets/formation-v2/stage-0${step+1}-thumb.webp")`;
 $('#formation-chapter-en').textContent=`0${step+1} / ${english[step]}`;$('#formation-stage-label').textContent=`0${step+1} / ${s.key}`;$('#formation-number').textContent=`0${step+1}`;$('#formation-title').textContent=s.title;$('#formation-copy').textContent=s.copy;$('#formation-caption').textContent=s.caption;$('#formation-observation').textContent=observations[step];
 dialog.querySelectorAll('[data-formation-step]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.formationStep)===step)));
 $('#formation-previous').disabled=step===0;$('#formation-next').innerHTML=step===3?'选石创作 <span>↗</span>':'继续看 <span>→</span>';
}
function remember(){seenInSession=true;try{localStorage.setItem(seenKey,'1');}catch{}}
function finish(){remember();dialog.close();if(location.hash!=='#studio')location.hash='studio';}
function setDetail(value){detail=value;$('.formation-visual').classList.toggle('formation-detail',detail);$('#formation-detail').setAttribute('aria-pressed',String(detail));$('#formation-detail').textContent=detail?'− 还原全貌':'＋ 微距细看';cinema?.setDetail(detail);}
function open(){
 if(dialog.open)return;$('.formation-notes').open=false;dialog.classList.remove('formation-focused');$('#formation-focus').setAttribute('aria-pressed','false');$('#formation-focus').textContent='⤢ 大画面';setDetail(false);
 dialog.showModal();dialog.scrollTop=0;
 if(!cinema)cinema=createFormationCinema($('.formation-cinema'),art);
 cinema?.setActive(true);renderProgress(0,true);if(!reducedMotion.matches)play();
}
export function considerFormationIntro(){requestAnimationFrame(()=>{let seen=seenInSession;try{seen=seen||localStorage.getItem(seenKey)==='1';}catch{}if(!seen&&!document.querySelector('#studio').hidden&&!document.querySelector('dialog[open]'))open();});}
home.querySelector('.formation-open').onclick=open;
const replay=document.createElement('button');replay.className='demo-button formation-replay';replay.textContent='玛瑙怎么形成？';replay.onclick=open;document.querySelector('#studio .heading-actions').prepend(replay);
dialog.querySelectorAll('[data-formation-step]').forEach(b=>b.onclick=()=>{stop();renderProgress(Number(b.dataset.formationStep));});
$('#formation-progress').oninput=e=>{stop();renderProgress(Number(e.target.value)/1000,true);};
$('#formation-next').onclick=()=>{stop();if(step===3)finish();else renderProgress(step+1);};$('#formation-previous').onclick=()=>{stop();renderProgress(Math.max(0,step-1));};
$('#formation-play').onclick=()=>timer?stop():play();$('#formation-skip').onclick=finish;$('#formation-close').onclick=()=>dialog.close();
$('#formation-detail').onclick=()=>setDetail(!detail);
$('#formation-light').onclick=()=>{bright=!bright;$('.formation-visual').classList.toggle('formation-bright',bright);$('#formation-light').setAttribute('aria-pressed',String(bright));cinema?.setLight(bright);};
$('#formation-focus').onclick=()=>{const focused=dialog.classList.toggle('formation-focused');$('#formation-focus').setAttribute('aria-pressed',String(focused));$('#formation-focus').textContent=focused?'⤡ 返回图文':'⤢ 大画面';};
dialog.addEventListener('close',()=>{stop();cinema?.setActive(false);remember();});dialog.addEventListener('cancel',stop);
dialog.addEventListener('keydown',e=>{if(e.target.type==='range')return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();stop();renderProgress(Math.min(3,Math.max(0,step+(e.key==='ArrowRight'?1:-1))));}});
$('.formation-notes').addEventListener('toggle',()=>{if($('.formation-notes').open)stop();});
dialog.querySelectorAll('[data-art-stage]').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;}));
document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();cinema?.setActive(false);}else if(dialog.open)cinema?.setActive(true);});
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();});
renderProgress(0);
