const overview=document.querySelector('#home-overview'),replay=document.querySelector('#guide-replay');
const cards=[...overview.querySelectorAll('.home-entry-card')];
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let animations=[],timers=[],epoch=0,started=false,seen=new Set(),playing=false;
function cancel(){epoch++;animations.forEach(animation=>animation.cancel());animations=[];timers.forEach(clearTimeout);timers=[];}
function run(element,delay=0,{distance=20,duration=650}={}){
 if(!element)return;
 const animation=element.animate([{opacity:0,transform:`translateY(${distance}px)`},{opacity:1,transform:'translateY(0)'}],{duration,delay,fill:'backwards',easing:'cubic-bezier(.2,.7,.25,1)'});animations.push(animation);
}
function unlockCard(card){card.classList.remove('guide-card-pending','guide-card-entering');}
function showCard(card,delay=0){
 if(seen.has(card))return;seen.add(card);card.classList.remove('guide-card-pending');card.classList.add('guide-card-entering');
 run(card,delay,{distance:32,duration:760});
 const photo=card.querySelector('.entry-card-photo');
 const imageAnimation=photo.animate([{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)'}],{duration:850,delay:delay+90,fill:'backwards',easing:'cubic-bezier(.2,.65,.25,1)'});animations.push(imageAnimation);
 ['.entry-card-kicker','h3','p','.entry-card-result','.entry-card-link'].forEach((selector,i)=>run(card.querySelector(selector),delay+200+i*95,{distance:12,duration:500}));
 const token=epoch;timers.push(setTimeout(()=>{if(epoch===token)unlockCard(card);},delay));
}
function visible(card){const r=card.getBoundingClientRect(),h=document.querySelector('.header').getBoundingClientRect().height;return r.top<innerHeight-20&&r.bottom>h+20;}
function label(){replay.textContent=playing?'直接显示全部 ↘':'重看导览动画 ↻';replay.setAttribute('aria-label',playing?'跳过导览展开动画，直接显示全部内容':'重新播放导览展开动画');}
export function completeGuide(){cancel();cards.forEach(unlockCard);overview.classList.remove('guide-preparing');overview.classList.add('guide-visible');seen=new Set(cards);playing=false;label();}
export function prepareGuide(){cancel();started=true;playing=true;seen=new Set();overview.classList.add('guide-preparing');cards.forEach(card=>{card.classList.remove('guide-card-entering');card.classList.add('guide-card-pending');});label();}
export function revealGuide(){
 if(reduce.matches){completeGuide();return;}
 if(!playing)prepareGuide();overview.classList.remove('guide-preparing');overview.classList.add('guide-visible');
 run(overview.querySelector('.overview-heading .eyebrow'),40,{distance:12,duration:580});
 run(overview.querySelector('#home-overview-title'),210,{distance:25,duration:850});
 run(overview.querySelector('.overview-intro'),540,{distance:18,duration:750});
 run(overview.querySelector('.guide-replay-row'),760,{distance:10,duration:550});
 cards.filter(visible).forEach((card,index)=>showCard(card,1050+index*360));
 run(overview.querySelector('.overview-footer'),2150,{distance:16,duration:650});
 const token=epoch;timers.push(setTimeout(()=>{if(epoch===token){playing=false;label();}},3700));
}
// Each offscreen mobile card unfolds when it enters the viewport.
const observer=new IntersectionObserver(entries=>{
 if(!started||overview.classList.contains('guide-preparing')||reduce.matches)return;
 entries.filter(entry=>entry.isIntersecting).forEach(entry=>showCard(entry.target,90));
},{threshold:.12});cards.forEach(card=>observer.observe(card));
replay.onclick=()=>{if(playing)completeGuide();else{prepareGuide();revealGuide();}};
function routeChanged(event){
 if(event?.agateExploration)return;
 if(location.hash==='#guide'){prepareGuide();requestAnimationFrame(()=>{if(location.hash==='#guide')revealGuide();});}else completeGuide();
}
window.addEventListener('hashchange',routeChanged);
if(location.hash==='#guide')routeChanged();
reduce.addEventListener('change',()=>{if(reduce.matches)completeGuide();});
// Focusing a card never leaves its controls hidden behind an unfinished reveal.
overview.addEventListener('focusin',event=>{const card=event.target.closest('.home-entry-card');if(!card)return;seen.add(card);animations.forEach(animation=>{const target=animation.effect?.target;if(target===card||card.contains(target))try{animation.finish();}catch{}});unlockCard(card);});
