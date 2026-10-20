import {playExplorationSound} from './explore-sound.mjs';
import {prepareGuide,revealGuide,completeGuide} from './guide-reveal.mjs';

const root=document.documentElement,button=document.querySelector('#begin-exploration');
const overview=document.querySelector('#home-overview'),heading=document.querySelector('#home-overview-title');
const layer=document.createElement('div');layer.className='explore-portal';layer.hidden=true;layer.setAttribute('aria-hidden','true');
layer.innerHTML='<div class="portal-grain"></div><div class="portal-contours"><i></i><i></i><i></i><i></i></div><div class="portal-words"><small>FOLLOW THE PATTERN</small><span>循纹而行<span>入境成艺</span></span><i></i></div>';
document.body.append(layer);
const motion=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
let current=null,frame=0,lastPointer=null;
const home=()=>!location.hash||location.hash==='#home';
const guide=()=>location.hash==='#guide';
function goToGuide(){
 if(guide()){window.scrollTo({top:0,behavior:'instant'});return;}
 const previous=location.href;history.pushState(null,'','#guide');
 // This synchronous route event preserves the running sound and portal while
 // all route consumers update together. Browser Back still uses native events.
 const event=new HashChangeEvent('hashchange',{oldURL:previous,newURL:location.href});Object.defineProperty(event,'agateExploration',{value:true});window.dispatchEvent(event);
}
function focusGuide(){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
function resetPointer(){button.style.setProperty('--magnet-x','0px');button.style.setProperty('--magnet-y','0px');button.style.setProperty('--light-x','50%');button.style.setProperty('--light-y','50%');}
button.addEventListener('pointermove',event=>{
 if(!fine.matches||motion.matches||current)return;
 lastPointer={x:event.clientX,y:event.clientY};if(frame)return;
 frame=requestAnimationFrame(()=>{frame=0;if(!lastPointer||current)return;const r=button.getBoundingClientRect(),x=lastPointer.x-r.left,y=lastPointer.y-r.top;button.style.setProperty('--magnet-x',`${(x/r.width-.5)*9}px`);button.style.setProperty('--magnet-y',`${(y/r.height-.5)*7}px`);button.style.setProperty('--light-x',`${x/r.width*100}%`);button.style.setProperty('--light-y',`${y/r.height*100}%`);});
});
button.addEventListener('pointerleave',()=>{lastPointer=null;resetPointer();});

function finish(run,{land=true,focus=true,skip=false}={}){
 if(current!==run)return;
 current=null;clearTimeout(run.timer);if(skip||!land){run.stopSound?.();completeGuide();}run.animations.forEach(animation=>animation.cancel());
 if(land&&!guide()){prepareGuide();goToGuide();if(skip)completeGuide();else revealGuide();}
 root.classList.remove('explore-crossing');layer.hidden=true;layer.removeAttribute('style');button.classList.remove('engaged');button.disabled=false;button.removeAttribute('aria-busy');
 run.inert.forEach(([element,previous])=>element.inert=previous);resetPointer();
 button.dataset.exploreState='idle';
 if(guide()&&land){overview.dataset.exploreArrival='true';if(focus)focusGuide();}
}
function animate(run,element,keyframes,options){const animation=element.animate(keyframes,{fill:'both',...options});run.animations.push(animation);return animation.finished.catch(()=>{});}
async function begin(){
 if(current||!home()||root.classList.contains('film-entering')||document.querySelector('dialog[open]'))return;
 if(motion.matches){playExplorationSound({brief:true});goToGuide();completeGuide();overview.dataset.exploreArrival='true';focusGuide();return;}
 const r=button.querySelector('.explore-stone').getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 const radius=Math.ceil(Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y)))+8;
 const run={animations:[],inert:[],timer:0,stopSound:playExplorationSound()};current=run;
 button.disabled=true;button.setAttribute('aria-busy','true');button.classList.add('engaged');button.dataset.exploreState='crossing';
 document.querySelectorAll('body>.header,body>main,body>footer,.home-screen-nav').forEach(element=>{run.inert.push([element,element.inert]);element.inert=true;});
 root.classList.add('explore-crossing');layer.hidden=false;layer.style.setProperty('--portal-x',`${x}px`);layer.style.setProperty('--portal-y',`${y}px`);
 // A bounded fallback restores scrolling and controls even if an animation is interrupted.
 run.timer=setTimeout(()=>finish(run,{skip:true}),3700);
 const fast=innerWidth<560,duration=fast?760:880,center=layer.querySelector('.portal-words');
 animate(run,layer.querySelector('.portal-contours'),[{transform:'translate(-50%,-50%) scale(.12)',opacity:.2},{transform:'translate(-50%,-50%) scale(1.15)',opacity:.8}],{duration:2100,easing:'cubic-bezier(.15,.6,.25,1)'});
 animate(run,center,[{opacity:0,transform:'translateY(17px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,delay:360,easing:'ease-out'});
 await animate(run,layer,[{clipPath:`circle(0px at ${x}px ${y}px)`,opacity:1},{clipPath:`circle(${radius}px at ${x}px ${y}px)`,opacity:1}],{duration,easing:'cubic-bezier(.65,0,.2,1)'});
 if(current!==run)return;
 prepareGuide();goToGuide();button.dataset.exploreState='revealing';
 await new Promise(resolve=>setTimeout(resolve,fast?470:620));if(current!==run)return;
 revealGuide();
 await animate(run,layer,[{opacity:1},{opacity:0}],{duration:fast?850:1000,easing:'cubic-bezier(.25,.5,.3,1)'});
 if(current!==run)return;finish(run);
}
button.addEventListener('click',begin);
document.addEventListener('keydown',event=>{if(!current)return;if(event.key==='Escape'){event.preventDefault();finish(current,{skip:true});}else if(['Tab',' ','PageDown','PageUp','Home','End','ArrowUp','ArrowDown'].includes(event.key)){event.preventDefault();}},{capture:true});
const stopScroll=event=>{if(current)event.preventDefault();};
window.addEventListener('wheel',stopScroll,{passive:false,capture:true});window.addEventListener('touchmove',stopScroll,{passive:false,capture:true});
window.addEventListener('hashchange',event=>{if(event.agateExploration)return;if(current)finish(current,{land:false,focus:false});});
window.addEventListener('resize',()=>{if(current)finish(current,{skip:true});});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&current)finish(current,{focus:false,skip:true});});
motion.addEventListener('change',()=>{if(current)finish(current);resetPointer();});
