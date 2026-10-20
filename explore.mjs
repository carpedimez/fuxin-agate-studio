import {goToHomePanel} from './page-snap.mjs';

const root=document.documentElement,button=document.querySelector('#begin-exploration');
const overview=document.querySelector('#home-overview'),heading=document.querySelector('#home-overview-title');
const layer=document.createElement('div');layer.className='explore-portal';layer.hidden=true;layer.setAttribute('aria-hidden','true');
layer.innerHTML='<div class="portal-grain"></div><div class="portal-contours"><i></i><i></i><i></i><i></i></div><div class="portal-words"><small>FOLLOW THE PATTERN</small><span>循纹而行<span>入境成艺</span></span><i></i></div>';
document.body.append(layer);
const motion=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
let current=null,frame=0,lastPointer=null;
const home=()=>!location.hash||location.hash==='#home';
function focusGuide(){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
function resetPointer(){button.style.setProperty('--magnet-x','0px');button.style.setProperty('--magnet-y','0px');button.style.setProperty('--light-x','50%');button.style.setProperty('--light-y','50%');}
button.addEventListener('pointermove',event=>{
 if(!fine.matches||motion.matches||current)return;
 lastPointer={x:event.clientX,y:event.clientY};if(frame)return;
 frame=requestAnimationFrame(()=>{frame=0;if(!lastPointer||current)return;const r=button.getBoundingClientRect(),x=lastPointer.x-r.left,y=lastPointer.y-r.top;button.style.setProperty('--magnet-x',`${(x/r.width-.5)*9}px`);button.style.setProperty('--magnet-y',`${(y/r.height-.5)*7}px`);button.style.setProperty('--light-x',`${x/r.width*100}%`);button.style.setProperty('--light-y',`${y/r.height*100}%`);});
});
button.addEventListener('pointerleave',()=>{lastPointer=null;resetPointer();});

function finish(run,{land=true,focus=true}={}){
 if(current!==run)return;
 current=null;clearTimeout(run.timer);run.animations.forEach(animation=>animation.cancel());
 if(land&&home())goToHomePanel(1,{instant:true});
 root.classList.remove('explore-crossing');layer.hidden=true;layer.removeAttribute('style');button.classList.remove('engaged');button.disabled=false;button.removeAttribute('aria-busy');
 run.inert.forEach(([element,previous])=>element.inert=previous);resetPointer();
 button.dataset.exploreState='idle';
 if(home()&&land){overview.dataset.exploreArrival='true';if(focus)focusGuide();}
}
function animate(run,element,keyframes,options){const animation=element.animate(keyframes,{fill:'both',...options});run.animations.push(animation);return animation.finished.catch(()=>{});}
async function begin(){
 if(current||!home()||root.classList.contains('film-entering')||document.querySelector('dialog[open]'))return;
 if(motion.matches){goToHomePanel(1,{instant:true});overview.dataset.exploreArrival='true';focusGuide();return;}
 const r=button.querySelector('.explore-stone').getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 const radius=Math.ceil(Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y)))+8;
 const run={animations:[],inert:[],timer:0};current=run;
 button.disabled=true;button.setAttribute('aria-busy','true');button.classList.add('engaged');button.dataset.exploreState='crossing';
 document.querySelectorAll('body>.header,body>main,body>footer,.home-screen-nav').forEach(element=>{run.inert.push([element,element.inert]);element.inert=true;});
 root.classList.add('explore-crossing');layer.hidden=false;layer.style.setProperty('--portal-x',`${x}px`);layer.style.setProperty('--portal-y',`${y}px`);
 // A bounded fallback restores scrolling and controls even if an animation is interrupted.
 run.timer=setTimeout(()=>finish(run),1800);
 const fast=innerWidth<560,duration=fast?430:520,center=layer.querySelector('.portal-words');
 animate(run,layer.querySelector('.portal-contours'),[{transform:'translate(-50%,-50%) scale(.12)',opacity:.2},{transform:'translate(-50%,-50%) scale(1.15)',opacity:.8}],{duration:950,easing:'cubic-bezier(.15,.6,.25,1)'});
 animate(run,center,[{opacity:0,transform:'translateY(17px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,delay:230,easing:'ease-out'});
 await animate(run,layer,[{clipPath:`circle(0px at ${x}px ${y}px)`,opacity:1},{clipPath:`circle(${radius}px at ${x}px ${y}px)`,opacity:1}],{duration,easing:'cubic-bezier(.65,0,.2,1)'});
 if(current!==run)return;
 goToHomePanel(1,{instant:true});button.dataset.exploreState='revealing';
 const contents=[overview.querySelector('.overview-heading'),...overview.querySelectorAll('.home-entry-card'),overview.querySelector('.overview-footer')];
 contents.forEach((element,index)=>animate(run,element,[{opacity:0,transform:'translateY(34px)'},{opacity:1,transform:'translateY(0)'}],{duration:fast?360:480,delay:(fast?40:80)+index*(fast?42:45),easing:'cubic-bezier(.2,.75,.25,1)'}));
 await new Promise(resolve=>setTimeout(resolve,fast?130:210));if(current!==run)return;
 await animate(run,layer,[{opacity:1},{opacity:0}],{duration:fast?370:430,easing:'cubic-bezier(.25,.5,.3,1)'});
 if(current!==run)return;
 // Let the last card finish before removing its animation effect.
 await new Promise(resolve=>setTimeout(resolve,160));finish(run);
}
button.addEventListener('click',begin);
document.addEventListener('keydown',event=>{if(!current)return;if(event.key==='Escape'){event.preventDefault();finish(current);}else if(['Tab',' ','PageDown','PageUp','Home','End','ArrowUp','ArrowDown'].includes(event.key)){event.preventDefault();}},{capture:true});
const stopScroll=event=>{if(current)event.preventDefault();};
window.addEventListener('wheel',stopScroll,{passive:false,capture:true});window.addEventListener('touchmove',stopScroll,{passive:false,capture:true});
window.addEventListener('hashchange',()=>{if(current)finish(current,{land:false,focus:false});});
window.addEventListener('resize',()=>{if(current)finish(current);});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&current)finish(current,{focus:false});});
motion.addEventListener('change',()=>{if(current)finish(current);resetPointer();});

// Arrival animations also apply when the guide is reached by scrolling.
new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting))overview.classList.add('guide-visible');},{threshold:.08}).observe(overview);
