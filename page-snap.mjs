// Native snapping remains the fallback. The spring only enhances explicit
// wheel, keyboard and mouse-drag navigation outside the interactive tools.
const root=document.documentElement,header=document.querySelector('.header');
const groups={
 home:{label:'首页体验导览',panels:['#home-film','#home-overview'],titles:['实景开场','体验导览']},
 learn:{label:'观石识艺章节导航',panels:['.home-stone-study','.formation-teaser','#agate-gallery','#home-story'],titles:['读懂纹色','石的来历','实物图鉴','非遗手艺']}
};
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
Object.values(groups).forEach(group=>{group.panels=group.panels.map(selector=>document.querySelector(selector));group.panels.forEach((panel,i)=>{panel.classList.add('home-snap-panel');panel.dataset.snapPanel=String(i);});});
let panels=[],titles=[];
const nav=document.createElement('nav');nav.className='home-screen-nav';document.body.append(nav);
const interactive='a,button,input,select,textarea,label,canvas,video,dialog,[contenteditable="true"],[role="slider"],.photo-viewport';
let animation=0,drag=null,lastActive=-1,scrollFrame=0,scrollTimer,wheelTotal=0,wheelTime=0,gestureBusy=false,entryAnimation=null;
const activeGroup=()=>groups[location.hash.slice(1)||'home'];
const isPaged=()=>!!activeGroup();
const blocked=()=>!isPaged()||root.classList.contains('film-entering')||!!document.querySelector('dialog[open]');
const headerHeight=()=>header.getBoundingClientRect().height;
const available=()=>innerHeight-headerHeight();
const maximum=()=>Math.max(0,document.documentElement.scrollHeight-innerHeight);
const topFor=panel=>Math.max(0,Math.min(maximum(),scrollY+panel.getBoundingClientRect().top-headerHeight()));
function targets(){return [...panels.map(topFor),maximum()];}
function panelAt(y=scrollY){
 let current=0;const positions=panels.map(topFor);
 positions.forEach((position,i)=>{if(y>=position-3)current=i;});return current;
}
function measure(){root.style.setProperty('--snap-header-height',`${headerHeight()}px`);}
new ResizeObserver(measure).observe(header);measure();
function cancelSpring(){if(animation)cancelAnimationFrame(animation);animation=0;root.classList.remove('snap-in-motion');}
function updateActive(animate=false){
 if(!isPaged())return;
 const current=panelAt(scrollY+Math.min(available()*.35,150));
 nav.querySelectorAll('[data-screen]').forEach((button,i)=>{if(i===current)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
 if(current!==lastActive){
  if(animate&&!reduce.matches){
   const content=panels[current].querySelector('.home-film-content,.hero-copy,.formation-teaser-copy,.photo-section-heading')||panels[current].firstElementChild;
   entryAnimation?.cancel();entryAnimation=content?.animate([{transform:'translateY(12px)',opacity:.75},{transform:'translateY(-2px)',opacity:1,offset:.75},{transform:'translateY(0)',opacity:1}],{duration:520,easing:'cubic-bezier(.2,.75,.25,1)'});
  }
  lastActive=current;
 }
}
function springTo(destination){
 cancelSpring();destination=Math.max(0,Math.min(maximum(),destination));
 if(reduce.matches||Math.abs(destination-scrollY)<1){window.scrollTo({top:destination,behavior:'instant'});updateActive();return;}
 root.classList.add('snap-in-motion');let y=scrollY,velocity=0,previous=performance.now(),started=previous;
 function tick(now){
  if(blocked()){cancelSpring();return;}
  const dt=Math.min((now-previous)/1000,.028);previous=now;
  velocity+=(200*(destination-y)-22*velocity)*dt;y+=velocity*dt;
  window.scrollTo({top:Math.max(0,Math.min(maximum(),y)),behavior:'instant'});
  if((Math.abs(destination-y)<.5&&Math.abs(velocity)<4)||now-started>1500){
   window.scrollTo({top:destination,behavior:'instant'});animation=0;root.classList.remove('snap-in-motion');updateActive(true);return;
  }
  animation=requestAnimationFrame(tick);
 }
 animation=requestAnimationFrame(tick);
}
function canReadInside(direction){
 const index=panelAt(),panel=panels[index],start=topFor(panel),end=start+panel.getBoundingClientRect().height-available();
 if(end-start<6)return false;
 return direction>0?scrollY<end-3:scrollY>start+3;
}
function adjacent(direction){
 const positions=targets();
 return direction>0?positions.find(p=>p>scrollY+4)??maximum():[...positions].reverse().find(p=>p<scrollY-4)??0;
}
function navigate(direction){if(blocked()||canReadInside(direction))return false;springTo(adjacent(direction));return true;}
nav.addEventListener('click',event=>{const button=event.target.closest('[data-screen]');if(button&&!blocked())springTo(topFor(panels[Number(button.dataset.screen)]));});
document.addEventListener('click',event=>{const button=event.target.closest('[data-panel-link]');if(button&&!blocked()){const panel=panels[Number(button.dataset.panelLink)];if(panel)springTo(topFor(panel));}});
window.addEventListener('wheel',event=>{
 if(blocked()||event.ctrlKey||event.metaKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||event.target.closest(interactive))return;
 const direction=Math.sign(event.deltaY);if(!direction)return;
 const now=performance.now(),gap=now-wheelTime;wheelTime=now;
 if(animation||(gestureBusy&&gap<180)){event.preventDefault();return;}
 if(gap>=180){gestureBusy=false;wheelTotal=0;}
 if(canReadInside(direction))return;
 event.preventDefault();
 if(wheelTotal&&Math.sign(wheelTotal)!==direction)wheelTotal=0;
 wheelTotal+=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?available():1);
 if(Math.abs(wheelTotal)>=28){gestureBusy=true;wheelTotal=0;navigate(direction);}
},{passive:false});
document.addEventListener('keydown',event=>{
 if(blocked()||event.defaultPrevented||event.ctrlKey||event.altKey||event.metaKey||event.target.closest(interactive))return;
 const direction=['PageDown','ArrowDown',' '].includes(event.key)?(event.shiftKey?-1:1):['PageUp','ArrowUp'].includes(event.key)?-1:0;
 if(event.key==='Home'||event.key==='End'){event.preventDefault();springTo(event.key==='Home'?0:maximum());return;}
 if(direction&&navigate(direction))event.preventDefault();
});
document.addEventListener('pointerdown',event=>{
 if(blocked()||event.pointerType!=='mouse'||event.button!==0||event.ctrlKey||event.metaKey||event.target.closest(interactive+',h1,h2,h3,p,small,strong'))return;
 const panel=event.target.closest('.home-snap-panel');if(!panel)return;
 cancelSpring();drag={id:event.pointerId,panel,startY:event.clientY,startX:event.clientX,scroll:scrollY,at:panelAt(),previousY:event.clientY,previousTime:performance.now(),velocity:0,active:false};
});
document.addEventListener('pointermove',event=>{
 if(!drag||event.pointerId!==drag.id)return;
 const dy=drag.startY-event.clientY,dx=drag.startX-event.clientX;
 if(!drag.active){
  if(Math.abs(dx)>Math.abs(dy)+8){drag=null;return;}
  if(Math.abs(dy)<7)return;
  drag.active=true;root.classList.add('snap-dragging');drag.panel.setPointerCapture(event.pointerId);
 }
 event.preventDefault();const now=performance.now();drag.velocity=(drag.previousY-event.clientY)/Math.max(1,now-drag.previousTime);drag.previousY=event.clientY;drag.previousTime=now;
 window.scrollTo({top:Math.max(0,Math.min(maximum(),drag.scroll+dy)),behavior:'instant'});
});
function finishDrag(event){
 if(!drag||event.pointerId!==drag.id)return;
 const ending=drag;drag=null;
 if(ending.active){
  const dy=ending.startY-event.clientY,direction=Math.sign(dy),positions=targets(),start=topFor(panels[ending.at]),end=start+panels[ending.at].getBoundingClientRect().height-available();
  const inside=end-start>6&&scrollY>=start&&scrollY<=end;
  let target;
  if(inside)target=scrollY;
  else if(Math.abs(dy)>Math.min(85,available()*.12)||(performance.now()-ending.previousTime<100&&Math.abs(ending.velocity)>.35))target=positions[Math.max(0,Math.min(positions.length-1,ending.at+direction))];
  else target=positions.reduce((best,p)=>Math.abs(p-scrollY)<Math.abs(best-scrollY)?p:best,positions[0]);
  springTo(target);root.classList.remove('snap-dragging');
  if(ending.panel.hasPointerCapture(event.pointerId))ending.panel.releasePointerCapture(event.pointerId);
 }
}
document.addEventListener('pointerup',finishDrag);document.addEventListener('pointercancel',finishDrag);
window.addEventListener('scroll',()=>{
 if(!isPaged())return;
 if(!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;updateActive();});
 clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{if(!animation&&!drag)updateActive(true);},130);
},{passive:true});
window.addEventListener('resize',()=>{measure();updateActive();});
function refresh(){
 cancelSpring();drag=null;wheelTotal=0;wheelTime=0;gestureBusy=false;entryAnimation?.cancel();root.classList.remove('snap-dragging');const group=activeGroup();panels=group?.panels||[];titles=group?.titles||[];root.classList.toggle('snap-home',!!group);nav.hidden=!group;lastActive=-1;
 if(group){nav.setAttribute('aria-label',group.label);nav.innerHTML=titles.map((title,i)=>`<button data-screen="${i}" aria-label="第${i+1}屏：${title}"><i aria-hidden="true"></i><span>${String(i+1).padStart(2,'0')} / ${title}</span></button>`).join('')+'<small aria-hidden="true">SCROLL / DRAG</small>';}else nav.replaceChildren();
 if(isPaged())requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:'instant'});updateActive();});
}
window.addEventListener('hashchange',refresh);refresh();

// Start secondary photography after the video entrance has released its bandwidth.
function loadOverviewImages(){
 if((location.hash&&location.hash!=='#home')||root.classList.contains('film-entering'))return;
 document.querySelectorAll('#home-overview img[data-entry-src]').forEach(img=>{img.src=img.dataset.entrySrc;delete img.dataset.entrySrc;});
}
window.addEventListener('agate:entry-ready',loadOverviewImages,{once:true});
window.addEventListener('hashchange',loadOverviewImages);loadOverviewImages();
