import {playExplorationSound,playInterfaceSound} from './explore-sound.mjs';

export function installStudioArrival({onEnter}){
 const layer=document.createElement('div');layer.className='studio-arrival';layer.hidden=true;layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-labelledby','studio-arrival-title');
 layer.innerHTML='<div class="arrival-orbit" aria-hidden="true"><i></i><i></i><i></i></div><div class="arrival-content"><span class="arrival-eyebrow">FROM DISCOVERY TO CREATION / 从所见，到表达</span><h2 id="studio-arrival-title">把一路所见，<br>交给自己的双手。</h2><p>读过石的纹理，见过手艺的取舍。<br>这一回，让一抹天然纹色，成为你的作品。</p><div class="arrival-photos"><figure><img src="./assets/photos/agate-bands.webp" alt="玛瑙的天然条带"><figcaption>观纹<span>看见材料的可能</span></figcaption></figure><figure><img src="./assets/backgrounds/craft.webp" alt="玛瑙雕刻工艺实景"><figcaption>识艺<span>理解手艺的取舍</span></figcaption></figure><figure><img src="./assets/photos/agate-moss-pendant.webp" alt="完整的苔藓玛瑙佩饰"><figcaption>成器<span>留下自己的表达</span></figcaption></figure></div><div class="arrival-stone" aria-hidden="true"><img src="./assets/photos/agate-bands.webp" alt=""></div></div><a class="arrival-credit" href="./assets/photos/local-credits.json" target="_blank" rel="noopener">实拍图片出处 ↗</a><button type="button" class="arrival-skip">直接进入创作 <span>→</span></button>';
 document.body.append(layer);const motion=matchMedia('(prefers-reduced-motion: reduce)'),root=document.documentElement;let current=null;
 const focusStudio=()=>{const heading=document.querySelector('#studio .page-heading h1');heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});};
 function land(run){if(run.landed)return;run.landed=true;onEnter();const previous=location.href;history.pushState(null,'','#studio');const event=new HashChangeEvent('hashchange',{oldURL:previous,newURL:location.href});Object.defineProperty(event,'agateStudioArrival',{value:true});window.dispatchEvent(event);}
 function finish(run,{enter=true}={}){
  if(current!==run)return;current=null;clearTimeout(run.timer);for(const a of run.animations)a.cancel();run.stopSound?.();
  if(enter)land(run);for(const [element,inert]of run.inert)element.inert=inert;
  layer.hidden=true;layer.removeAttribute('style');layer.dataset.phase='idle';root.classList.remove('studio-crossing');
  if(enter)focusStudio();else if(run.focus?.isConnected)run.focus.focus({preventScroll:true});
 }
 function animate(run,el,frames,options){if(!el.animate)return Promise.resolve();const a=el.animate(frames,{fill:'both',...options});run.animations.push(a);return a.finished.catch(()=>{});}
 async function begin(){
  if(current||!location.hash.startsWith('#learn/')||document.querySelector('dialog[open]'))return;
  const run={landed:false,focus:document.activeElement,animations:[],inert:[],timer:0,stopSound:null};current=run;root.classList.add('studio-crossing');
  if(motion.matches){playInterfaceSound('navigate');finish(run);return;}
  run.stopSound=playExplorationSound();for(const el of document.querySelectorAll('body>main,body>.header,body>footer,.home-screen-nav')){run.inert.push([el,el.inert]);el.inert=true;}
  layer.hidden=false;layer.dataset.phase='gathering';layer.querySelector('.arrival-skip').focus({preventScroll:true});run.timer=setTimeout(()=>finish(run),4200);
  const compact=innerWidth<600,photos=[...layer.querySelectorAll('.arrival-photos figure')],stone=layer.querySelector('.arrival-stone');
  animate(run,layer,[{opacity:0},{opacity:1}],{duration:380,easing:'ease-out'});
  animate(run,layer.querySelector('h2'),[{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:150,easing:'ease-out'});
  await Promise.all(photos.map((photo,i)=>animate(run,photo,[{opacity:0,transform:`translateY(42px) rotate(${(i-1)*5}deg)`},{opacity:1,transform:'translateY(0) rotate(0deg)'}],{duration:750,delay:200+i*120,easing:'cubic-bezier(.2,.7,.2,1)'})));
  if(current!==run)return;layer.dataset.phase='forming';
  await Promise.all(photos.map((photo,i)=>animate(run,photo,[{opacity:1,transform:'translate(0,0) scale(1)'},{opacity:0,transform:`translate(${(1-i)*(compact?65:145)}px,0) scale(.65)`}],{duration:600,easing:'ease-in-out'})).concat(animate(run,stone,[{opacity:0,transform:'translate(-50%,-50%) scale(.5)'},{opacity:1,transform:'translate(-50%,-50%) scale(1)'}],{duration:700,easing:'ease-out'})));
  if(current!==run)return;land(run);layer.dataset.phase='arriving';
  animate(run,stone,[{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:'translate(-50%,-50%) scale(1.5)',opacity:0}],{duration:compact?550:700,easing:'ease-in'});
  await animate(run,layer,[{opacity:1},{opacity:0}],{duration:compact?650:850,delay:180,easing:'ease-in-out'});if(current===run)finish(run);
 }
 layer.querySelector('.arrival-skip').onclick=()=>{if(current)finish(current);};
 document.addEventListener('keydown',e=>{if(!current)return;if(e.key==='Escape'){e.preventDefault();finish(current);}else if(e.key==='Tab'){e.preventDefault();const choices=[...layer.querySelectorAll('a[href],button')],i=choices.indexOf(document.activeElement);choices[(i+(e.shiftKey?-1:1)+choices.length)%choices.length].focus();}else if(['PageUp','PageDown','Home','End','ArrowUp','ArrowDown',' '].includes(e.key)&&e.target!==layer.querySelector('.arrival-skip'))e.preventDefault();},{capture:true});
 const blockScroll=e=>{if(current)e.preventDefault();};window.addEventListener('wheel',blockScroll,{capture:true,passive:false});window.addEventListener('touchmove',blockScroll,{capture:true,passive:false});
 window.addEventListener('hashchange',e=>{if(current&&!e.agateStudioArrival)finish(current,{enter:false});});
 document.addEventListener('visibilitychange',()=>{if(current&&document.hidden)finish(current);});motion.addEventListener('change',()=>{if(current&&motion.matches)finish(current);});
 return{begin,get running(){return !!current;}};
}
