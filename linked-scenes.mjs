const film='https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml';
const assets={
 bands:{src:'./assets/photos/agate-bands.webp',alt:'红褐色玛瑙切片与浅色条带',credit:'Hannes Grobe · CC BY-SA 2.5 · 公开标本，未标产地',url:'https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg'},
 crystal:{src:'./assets/photos/agate-crystal.webp',alt:'橙褐色条带环绕浅色结晶与空腔的玛瑙切片',credit:'Hannes Grobe · CC BY-SA 2.5 · 公开标本，未标产地',url:'https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg'},
 nodule:{src:'./assets/photos/agate-nodule.webp',alt:'玛瑙结核标本的外缘与内部纹理',credit:'James St. John · CC BY 2.0 · 公开标本，非阜新产地证明',url:'https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg'},
 moss:{src:'./assets/photos/agate-moss-pendant.webp',alt:'银色吊扣与圆形苔藓玛瑙佩饰',credit:'Hannes Grobe · CC BY-SA 4.0 · 公开佩饰，未标产地',url:'https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg'},
 cup:{src:'./assets/photos/agate-libation-cup.webp',alt:'乳白与褐色玛瑙双耳杯',credit:'CMA / Gary Kirchenbauer · CC0 · 清代馆藏 1920.425，非阜新制作证明',url:'https://www.clevelandart.org/art/1920.425'},
 craft:{src:'./assets/backgrounds/craft.webp',alt:'匠人手持工具雕琢玛瑙的实景截帧',credit:'辽宁发布 / 辽宁卫视《黑土地》· 阜新专题截帧，非本站合作工坊',url:film},
 carving:{src:'./assets/backgrounds/carving.webp',alt:'玛瑙透雕作品中曲折的枝蔓与花朵细部',credit:'辽宁发布 / 辽宁卫视《黑土地》· 阜新专题雕件实景',url:film},
 vessels:{src:'./assets/backgrounds/vessels.webp',alt:'配有底座的玛瑙巧色雕件实景',credit:'辽宁发布 / 辽宁卫视《黑土地》· 阜新专题作品实景',url:film},
 market:{src:'./assets/entry-guide/market.webp',alt:'阜新玛瑙市集内的展示与交流场景',credit:'辽宁发布 / 辽宁卫视《黑土地》· 市集实景，非会客厅现场或指定商户',url:film}
};
export const sceneSets={
 welcome:[
  {title:'先看一块石，留下了什么。',copy:'沿着浅色边界读一圈：先指出材料的特征，再带着依据听作品的讲述。',tag:'看材料 / 色层与边界',photos:['bands'],effect:'bands',labels:['色面','浅色边界'],note:'描线是观察辅助，不是材料成分或产地鉴定。'},
  {title:'从一道转折，读懂一次取舍。',copy:'把目光放到工具与材料相遇的地方，问清这个方向怎样回应已有的纹色。',tag:'看手艺 / 经验与选择',photos:['craft'],effect:'tool',labels:['看支撑','看转折'],note:'实景中的观察标记为本项目叠加，不代表原作者的设计说明。'},
  {title:'从一件作品，看见一群人。',copy:'从制作走到展示与使用，一件器物把工匠、经营者和到访者联系起来。',tag:'看地方 / 作品与生活',photos:['market'],effect:'connections',labels:['作品','制作','展示','使用'],note:'用市集实景理解地方联系，不作为会客厅现场照片。'}
 ],
 stone:[
  {title:'把明暗，读成清楚的边界。',copy:'先区分大面积色块与细窄条带，再找出你能具体描述的一处变化。',tag:'颜色边界 / 由面到线',photos:['bands'],effect:'bands',labels:['主色面','浅色层'],note:'照片只支持可见外观的观察。'},
  {title:'跟着纹带，慢慢走一圈。',copy:'留意线条的弯折、靠近与中断，把位置记下来，而不急着解释所有成因。',tag:'纹带方向 / 追踪曲线',photos:['nodule'],effect:'flow',labels:['弯折','走向'],note:'轨迹为阅读引导，不是标本的微观结构图。'},
  {title:'把内外层次，分别看清。',copy:'对照外缘条带与内部结晶，保留关于空腔的疑问，再回到形成过程查找依据。',tag:'晶体空腔 / 内外对照',photos:['crystal'],effect:'cavity',labels:['细密条带','内部层次'],note:'观察框为示意，不能据此推断所有玛瑙的内部结构。'}
 ],
 market:[
  {title:'把两片色，放在一起看。',copy:'先比较深浅与色块位置，再解释哪个地方建立了第一眼的视觉重心。',tag:'比颜色 / 公开切片对照',photos:['bands','crystal'],effect:'compare',labels:['看色面','看深浅'],note:'两件公开标本仅作视觉对照，不是指定市场商品。'},
  {title:'把目光，停在连接与转折。',copy:'从杯身走向双耳，比较连续的曲面与明确的刻纹如何共同建立层次。',tag:'比细节 / 馆藏实物细读',photos:['cup'],effect:'detail',labels:['双耳衔接','轮廓转折'],note:'此处观察清代馆藏器物的可见细部，不作实物状态与价格判断。'},
  {title:'随身的一件，与案头的一件。',copy:'用佩饰和杯形器对照形制：用途的提问，会改变我们关注的尺寸、重心与连接。',tag:'比用途 / 不同形制对照',photos:['moss','cup'],effect:'usage',labels:['佩饰：看连接','杯形器：看重心'],note:'这是设计情境的比较，不推断馆藏器物的实际使用记录。'}
 ],
 pagoda:[
  {title:'先沿外缘，走一圈。',copy:'轮廓帮助你建立整体印象；图中描线只示意观察方法，不补写真实古迹的形制。',tag:'看轮廓 / 从整体开始',photos:[],effect:'outline',labels:['看展开','看收拢'],note:'本项目原创建筑意象 · 非闾州塔实景、测绘或复原图。'},
  {title:'让重复，显出节奏。',copy:'一层层看相邻部分的重复与变化，感受秩序；层次的示意不能用于判断年代与结构。',tag:'看层次 / 重复与变化',photos:[],effect:'layers',labels:['重复','变化'],note:'意象中的层级仅服务构图练习，不对应闾州塔层数。'},
  {title:'把空隙，也放进画面。',copy:'建筑与天空、树木之间的留白，同样影响轮廓是否清楚、画面是否拥挤。',tag:'看留白 / 物与环境',photos:[],effect:'space',labels:['天空留白','周围空隙'],note:'本项目原创建筑意象 · 观察周围关系，不作为遗迹现场记录。'}
 ],
 craft:[
  {title:'先读纹色，再谈表达。',copy:'看大面积色面与浅色边界，找到这块材料里最想保留的一个特征。',tag:'01 / 观纹色',photos:['bands'],effect:'bands',labels:['观察色层','保留特点'],note:'公开标本用于说明观料方法，非镜头中雕件的原料。'},
  {title:'让轮廓，回应天然的走向。',copy:'构形辅助线让你比较取势；真实作品的方案仍需结合材料和工匠经验判断。',tag:'02 / 看构思',photos:['vessels'],effect:'shape',labels:['取势','留色'],note:'辅助轮廓为本项目的观察示意，不是原作者设计稿。'},
  {title:'从轮廓，走向细部层次。',copy:'沿着透雕作品的枝蔓与转折看：哪些地方被强调，哪些空隙让形更容易辨认？',tag:'03 / 识雕琢',photos:['carving'],effect:'engrave',labels:['看转折','读细部'],note:'观察线不代表实际刀路，也不是工具操作指导。'},
  {title:'一件作品，由形、纹与光共同完成。',copy:'回到带配座的完整雕件，看纹色、表面与观看重心怎样相互配合。',tag:'04 / 赏润饰',photos:['vessels'],effect:'polish',labels:['看光泽','看配座'],note:'光带为观看提示，不模拟真实抛光过程或改变原图色彩。'}
 ]
};

function tower(effect){
 const tiers=[{x:410,y:143,w:180,h:55},{x:385,y:235,w:230,h:62},{x:355,y:337,w:290,h:70},{x:320,y:452,w:360,h:82}];
 return `<svg class="scene-tower scene-tower-${effect}" viewBox="0 0 1000 680" role="img" aria-label="用于观察${effect==='outline'?'轮廓':effect==='layers'?'层次':'周围留白'}的原创建筑意象，非闾州塔实景或复原图"><defs><linearGradient id="tower-paper-${effect}" x2="1" y2="1"><stop stop-color="#eae4ff"/><stop offset="1" stop-color="#fef5df"/></linearGradient><linearGradient id="tower-body-${effect}" x2="1" y2="0"><stop stop-color="#716693"/><stop offset=".48" stop-color="#b0a6c5"/><stop offset="1" stop-color="#79708f"/></linearGradient><pattern id="tower-grid-${effect}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#9a89b5" stroke-opacity=".15"/></pattern></defs><rect width="1000" height="680" fill="url(#tower-paper-${effect})"/><rect width="1000" height="680" fill="url(#tower-grid-${effect})"/><circle class="scene-sky-space" cx="690" cy="210" r="138" fill="#fff9dc" opacity=".7"/><path d="M0 563Q160 446 312 559T680 543T1000 560V680H0Z" fill="#b4b5bd" opacity=".2"/><path d="M0 604Q190 511 388 595T770 586T1000 605V680H0Z" fill="#817a96" opacity=".2"/><g class="scene-tower-building"><path d="M500 73V126M484 104H516M490 89H510" fill="none" stroke="#9a7959" stroke-width="6" stroke-linecap="round"/>
 ${tiers.map((t,i)=>`<g class="scene-tier" style="--tier:${i}"><path d="M${t.x} ${t.y}h${t.w}v${t.h}h-${t.w}Z" fill="url(#tower-body-${effect})"/><path d="M${t.x-25} ${t.y+9}Q${t.x+15} ${t.y-5} 500 ${t.y-33}Q${t.x+t.w-15} ${t.y-5} ${t.x+t.w+25} ${t.y+9}Z" fill="#554c70" stroke="#d5bd8e" stroke-width="3"/><path class="scene-tier-glint" d="M${t.x-25} ${t.y+9}Q500 ${t.y-4} ${t.x+t.w+25} ${t.y+9}" fill="none" stroke="#f6dfa6" stroke-width="6"/><path d="M${t.x+25} ${t.y+17}v${t.h-27}M${t.x+t.w-25} ${t.y+17}v${t.h-27}" stroke="#d7c5aa" stroke-width="5"/><path d="M480 ${t.y+t.h}v-${t.h-18}q20-16 40 0v${t.h-18}" fill="#4f4963" stroke="#bda8a5" stroke-width="2"/></g>`).join('')}
 <path d="M305 544H695V563H305ZM280 563H720V582H280Z" fill="#615875" stroke="#ddc696" stroke-width="3"/></g><path class="scene-tower-trace" pathLength="1" d="M500 74V110L590 152H612L590 162V198L615 244H640L615 254V297L645 346H675L645 356V407L680 461H710L680 471V534L720 563V582H280V563L320 534V471L290 461H320L355 407V356L325 346H355L385 297V254L360 244H385L410 198V162L388 152H410L500 110" fill="none" stroke="#f3d395" stroke-width="5" stroke-linejoin="round"/>
 <g class="scene-negative-space" fill="none" stroke="#b8a3d9" stroke-width="3" stroke-dasharray="8 8"><ellipse cx="220" cy="320" rx="118" ry="164"/><ellipse cx="797" cy="330" rx="103" ry="164"/></g><path d="M100 600l60-160 59 160M800 600l55-153 53 153" fill="#6d8275" opacity=".45"/><path d="M160 472v143M855 478v137" stroke="#8a7b70" stroke-width="4"/><path d="M100 630H900" stroke="#948395" stroke-width="1"/></svg>`;
}
function overlay(effect){
 const paths={bands:'M375 388C343 265 558 265 624 415Q510 401 375 388',flow:'M170 460C160 120 750 100 810 420Q630 540 270 490',tool:'M505 290Q580 237 690 307M535 347Q606 365 662 325',shape:'M275 450Q177 315 327 220Q362 110 501 172Q636 90 740 277Q880 427 685 477Q441 565 275 450Z',engrave:'M220 505C260 430 305 250 465 230S600 180 800 125',polish:'M190 225Q490 130 820 228',detail:'M225 350Q196 274 245 230M735 360Q792 287 753 229',cavity:'M290 210Q500 125 700 260T605 482Q385 540 250 370Z'};
 const line=paths[effect]?`<path class="scene-ink-path" pathLength="1" d="${paths[effect]}"/>`:'';
 if(effect==='connections')return `<svg class="scene-overlay" viewBox="0 0 1000 680" aria-hidden="true"><g class="scene-connect"><path class="scene-ink-path" pathLength="1" d="M150 270Q350 90 515 265T850 260"/>${[150,385,615,850].map((x,i)=>`<g style="--tier:${i}"><circle cx="${x}" cy="${i%2?213:270}" r="24"/><circle cx="${x}" cy="${i%2?213:270}" r="7"/></g>`).join('')}</g></svg>`;
 if(effect==='compare'||effect==='usage')return `<svg class="scene-overlay" viewBox="0 0 1000 680" aria-hidden="true"><path class="scene-split-line" d="M500 65V585"/><g class="scene-comparison"><path class="scene-ink-path" pathLength="1" d="M373 595H628M405 582l-15 13 15 13M596 582l15 13-15 13"/></g></svg>`;
 return `<svg class="scene-overlay" viewBox="0 0 1000 680" aria-hidden="true">${line}${effect==='tool'||effect==='detail'?'<circle class="scene-focus-ring" cx="610" cy="315" r="83"/><path d="M610 215V235M610 395V415M510 315H530M690 315H710" class="scene-focus-mark"/>':''}${effect==='cavity'?'<ellipse class="scene-focus-ring" cx="505" cy="345" rx="130" ry="112"/>':''}${effect==='polish'?'<path class="scene-glow-band" d="M240 90L660 520"/>':''}</svg>`;
}
function renderFrame(scene){return `<div class="scene-layer" data-scene-effect="${scene.effect}"><div class="scene-canvas ${scene.photos.length===2?'scene-paired':''}">${scene.photos.length?scene.photos.map(key=>`<div class="scene-photo"><img src="${assets[key].src}" alt="${assets[key].alt}" decoding="async"><span class="scene-image-fallback" hidden>图片暂不可用，仍可阅读观察提示。</span></div>`).join(''):tower(scene.effect)}${scene.photos.length?overlay(scene.effect):''}<div class="scene-labels">${scene.labels.map((label,i)=>`<span style="--tier:${i}">${label}</span>`).join('')}</div></div></div>`;}


export function createLinkedScene(kind){
 const scenes=sceneSets[kind];if(!scenes)return null;
 const element=document.createElement('figure');element.className='linked-scene';element.dataset.sceneKind=kind;
 element.innerHTML='<div class="scene-toolbar"><span>图文联动 / 观察视窗</span><button type="button" class="scene-replay" aria-label="重播当前观察效果">↻ 重看效果</button></div><div class="scene-stage"></div><figcaption><div class="scene-caption-head"><span class="scene-kicker"></span><output class="scene-count"></output></div><h2></h2><p class="scene-copy"></p><p class="scene-note"></p><div class="scene-credits"></div><div class="scene-progress"><i></i></div></figcaption><output class="scene-status" role="status"></output>';
 const $=s=>element.querySelector(s),motion=matchMedia('(prefers-reduced-motion: reduce)');
 let generation=0,current=0,dead=false,observer=null;const animations=new Set(),timers=new Set(),pending=new Set();
 const stopAnimations=()=>{for(const a of animations)a.cancel();animations.clear();};
 const play=(el,frames,options)=>{if(motion.matches)return;const a=el.animate(frames,options);animations.add(a);a.finished.catch(()=>{}).finally(()=>animations.delete(a));return a;};
 const decode=img=>new Promise(resolve=>{const timer=setTimeout(done,4500);timers.add(timer);pending.add(done);function done(){pending.delete(done);clearTimeout(timer);timers.delete(timer);if(img.complete&&!img.naturalWidth){img.hidden=true;img.nextElementSibling.hidden=false;}resolve();}img.addEventListener('error',done,{once:true});img.decode().then(done,done);});
 async function select(index,{initial=false}={}){
  if(dead||!scenes[index])return;stopAnimations();current=index;const token=++generation,scene=scenes[index];element.dataset.sceneRequested=String(index);element.setAttribute('aria-busy','true');$('.scene-status').textContent=initial?'':'正在准备对应画面…';
  const holder=document.createElement('div');holder.innerHTML=renderFrame(scene);const frame=holder.firstElementChild;
  const ready=Promise.all([...frame.querySelectorAll('img')].map(decode));if(!initial)await ready;
  if(dead||token!==generation)return;const stage=$('.scene-stage');const old=[...stage.children];stage.append(frame);
  $('.scene-kicker').textContent=scene.tag;$('.scene-count').value=`${String(index+1).padStart(2,'0')} / ${String(scenes.length).padStart(2,'0')}`;$('h2').textContent=scene.title;$('.scene-copy').textContent=scene.copy;$('.scene-note').textContent=scene.note;
  $('.scene-credits').innerHTML=scene.photos.map(key=>`<a href="${assets[key].url}" target="_blank" rel="noopener">${assets[key].credit} ↗</a>`).join('');$('.scene-progress i').style.width=`${(index+1)/scenes.length*100}%`;
  element.dataset.sceneIndex=String(index);element.dataset.sceneEffect=scene.effect;element.setAttribute('aria-busy','false');$('.scene-status').textContent=initial?'':`画面已切换：${scene.tag}`;
  if(!initial&&!motion.matches){play(frame,[{opacity:.3,clipPath:'inset(0 18% 0 0)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],{duration:520,easing:'cubic-bezier(.2,.7,.2,1)'});play($('figcaption'),[{opacity:.45,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:360,easing:'ease-out'});}
  for(const el of old){const a=play(el,[{opacity:1},{opacity:0}],{duration:300,fill:'forwards'});if(a)a.finished.then(()=>el.remove(),()=>el.remove());else el.remove();}
 }
 $('.scene-replay').onclick=()=>select(current);
 const motionChanged=()=>{if(motion.matches)stopAnimations();};motion.addEventListener('change',motionChanged);
 select(0,{initial:true});
 observer=new IntersectionObserver(entries=>{if(dead||!entries.some(e=>e.isIntersecting))return;observer.disconnect();for(const key of new Set(scenes.flatMap(s=>s.photos))){const img=new Image();img.src=assets[key].src;img.decode().catch(()=>{});}},{rootMargin:'250px'});observer.observe(element);
 return {element,select,animateText:el=>{el.getAnimations().forEach(a=>a.cancel());play(el,[{opacity:.4,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:360,easing:'ease-out'});},destroy:()=>{dead=true;generation++;observer.disconnect();stopAnimations();for(const done of pending)done();for(const t of timers)clearTimeout(t);timers.clear();motion.removeEventListener('change',motionChanged);$('.scene-replay').onclick=null;}};
}

export function responsiveSceneControls(parent,controls){
 const marker=document.createComment('original scene controls');controls.before(marker);const mobile=matchMedia('(max-width:750px)');
 function move(){if(mobile.matches){parent.prepend(controls);controls.classList.add('scene-mobile-tabs');}else{marker.before(controls);controls.classList.remove('scene-mobile-tabs');}}
 mobile.addEventListener('change',move);move();return()=>{mobile.removeEventListener('change',move);marker.before(controls);marker.remove();controls.classList.remove('scene-mobile-tabs');};
}
