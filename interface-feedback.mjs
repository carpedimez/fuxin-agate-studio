import {bindSoundControls,playInterfaceSound} from './explore-sound.mjs';

bindSoundControls();
const motion=matchMedia('(prefers-reduced-motion: reduce)'),rings=new Set();
const layer=document.createElement('div');layer.className='interface-feedback-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
const navigation='.header nav a,.module-guide-back,.guide-home-link,.story-back,[data-story-next],[data-story-open],[data-note-open],.entry-card-link';
const selection='[aria-pressed],[aria-selected],[role=tab],[data-sample],[data-color],[data-craft-step],[data-atlas-route],[data-atlas-node],.atlas-node-list button,.story-lens-tabs button,.craft-tabs button,.question-chips button';
let lastPulse=-Infinity;
function pulse(button,event){
 if(motion.matches||!Element.prototype.animate||!button.isConnected||performance.now()-lastPulse<65)return;
 const r=button.getBoundingClientRect();if(!r.width||!r.height)return;lastPulse=performance.now();
 while(rings.size>=4){const first=rings.values().next().value;first.animation.cancel();first.element.remove();rings.delete(first);}
 const element=document.createElement('i');element.className='interface-pulse';element.setAttribute('aria-hidden','true');
 const x=event.detail?Math.max(r.left,Math.min(r.right,event.clientX)):r.left+r.width/2,y=event.detail?Math.max(r.top,Math.min(r.bottom,event.clientY)):r.top+r.height/2;
 const style=getComputedStyle(button);element.style.left=x+'px';element.style.top=y+'px';element.style.setProperty('--pulse-color',style.getPropertyValue('--work-ink').trim()||style.getPropertyValue('--story-color').trim()||'#b16b3e');layer.append(element);
 const animation=element.animate([{opacity:.65,transform:'translate(-50%,-50%) scale(.4)'},{opacity:0,transform:'translate(-50%,-50%) scale(2.4)'}],{duration:340,easing:'cubic-bezier(.16,.65,.3,1)'}),item={element,animation};rings.add(item);
 animation.finished.catch(()=>{}).finally(()=>{element.remove();rings.delete(item);});
}
document.addEventListener('click',event=>{
 if(!event.isTrusted||event.detail>1||!(event.target instanceof Element))return;
 const button=event.target.closest('button,a[href],summary,input[type=checkbox],input[type=radio],[role=button]');
 if(!button||button.matches(':disabled,[aria-disabled=true]')||button.closest('[inert]')||button.matches('[data-explore-sound],[data-interaction-sound],[data-story-create],#begin-exploration')||button.closest('.entry-gate'))return;
 const kind=button.matches(navigation)?'navigate':button.matches(selection)||button.matches('input,summary')?'select':'tap';
 pulse(button,event);queueMicrotask(()=>playInterfaceSound(kind));
},{capture:true});
document.addEventListener('change',event=>{if(event.isTrusted&&event.target instanceof Element&&event.target.matches('select,input[type=range]'))playInterfaceSound('select');},{capture:true});
document.addEventListener('agate-feedback',event=>{if(['success','adjust','correct'].includes(event.detail?.kind))playInterfaceSound(event.detail.kind);});
const clearPulses=()=>{for(const {element,animation}of rings){animation.cancel();element.remove();}rings.clear();};
motion.addEventListener('change',event=>{if(event.matches)clearPulses();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearPulses();});
