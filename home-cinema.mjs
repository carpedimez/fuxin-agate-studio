import media from './assets/home-film/playback.json';
const hero=document.querySelector('#home-film'),background=document.querySelector('#home-film-video');
const toggle=document.querySelector('#home-film-toggle'),status=document.querySelector('#home-film-status'),progress=document.querySelector('#home-film-progress'),qualitySelect=document.querySelector('#home-film-quality');
const motion=matchMedia('(prefers-reduced-motion: reduce)'),header=document.querySelector('.header');
new ResizeObserver(()=>hero.style.setProperty('--film-header-height',`${header.getBoundingClientRect().height}px`)).observe(header);
const sourceUrl=media.sourceUrl;
const dialog=document.createElement('dialog');dialog.className='home-film-dialog';dialog.id='home-film-dialog';dialog.setAttribute('aria-labelledby','home-full-film-title');
dialog.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-clean-4k.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 ${Math.round(media.story4k.duration)} 秒 · 保留原声<br>原片《阜新玛瑙——刀刃上的大地瑰宝》<br>辽宁发布 / 辽宁卫视《黑土地》 · 省政府网站发布</p><a href="${sourceUrl}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;
document.body.append(dialog);
const film=dialog.querySelector('video'),filmStatus=dialog.querySelector('#home-full-film-status');
let releaseMusic=null,filmEpoch=0;
const gate=document.querySelector('#entry-gate'),gateStatus=document.querySelector('#entry-status'),gateBar=document.querySelector('#entry-progress'),gateFill=document.querySelector('#entry-progress-fill'),gatePercent=document.querySelector('#entry-percent'),gateQuality=document.querySelector('#entry-quality'),gateHelp=document.querySelector('#entry-help'),gateActions=document.querySelector('#entry-actions'),retry=document.querySelector('#entry-retry'),skip=document.querySelector('#entry-skip');
const root=document.documentElement,cache=new Map(),inertBefore=new Map();
let selectedQuality='4k',loadEpoch=0,playEpoch=0,controller=null,preparing=false,hasData=false,ready=false,inView=true,userPaused=false,awaitingTap=false,gateEpoch=0,helpTimer,pendingSeek=media.initialTime||0;
const onHome=()=>!location.hash||location.hash==='#home';
const canRun=()=>onHome()&&inView&&!document.hidden&&!dialog.open&&!userPaused;
const variants=Object.fromEntries(media.variants.map(v=>[v.width===3840?'4k':'hd',v]));
const qualityLabel=key=>key==='4k'?'4K 增强影像':'流畅高清影像';
let cursor=-.5;
const chapters=media.loopSegments.map(segment=>{const time=Math.max(0,cursor);cursor+=segment.duration-media.crossfadeSeconds;return {time,chapter:segment.chapter};});
function updateUI(){
 const playing=ready&&!background.paused;
 toggle.setAttribute('aria-pressed',String(playing));toggle.textContent=playing?'Ⅱ 暂停影像':'▷ 播放影像';
 hero.dataset.filmState=preparing?'preparing':playing?'playing':ready?'paused':'poster';
 status.textContent=ready?`${qualityLabel(selectedQuality)} · ${playing?'连续实景':'影像已暂停'}`:'实景封面 · 点击播放连续影像';
}
function gateProgress(percent,message){
 const value=Math.max(0,Math.min(100,Math.round(percent)));
 gateFill.style.width=`${value}%`;gatePercent.textContent=`${value}%`;gateBar.setAttribute('aria-valuenow',String(value));
 if(message)gateStatus.textContent=message;
}
function showGate(){
 gateEpoch++;gate.classList.remove('leaving');gate.hidden=false;root.classList.add('film-entering');gate.dataset.state='preparing';
 gateHelp.hidden=true;gateActions.hidden=true;retry.textContent='重新准备';skip.disabled=false;
 gateQuality.textContent=qualityLabel(selectedQuality);gateProgress(0,'正在准备实景影像');
 document.querySelectorAll('body>.header,body>main,body>footer,.home-screen-nav').forEach(el=>{if(!inertBefore.has(el))inertBefore.set(el,el.inert);el.inert=true;});
 gate.setAttribute('tabindex','-1');gate.focus({preventScroll:true});
 clearTimeout(helpTimer);helpTimer=setTimeout(()=>{gateHelp.hidden=false;gateHelp.textContent='这次准备稍久，可以继续等待，也可以先进入。';gateActions.hidden=false;},15000);
}
function reveal(reason){
 clearTimeout(helpTimer);const token=++gateEpoch;
 gate.dataset.state=reason;gateProgress(100,reason==='playing'?'画面就绪，正在入境':'准备就绪，正在入境');gate.classList.add('leaving');
 setTimeout(()=>{
  if(token!==gateEpoch)return;
  root.classList.remove('film-entering');gate.classList.remove('leaving');gate.hidden=true;
  inertBefore.forEach((wasInert,el)=>{el.inert=wasInert;});inertBefore.clear();
  window.dispatchEvent(new CustomEvent('agate:entry-ready',{detail:{reason,quality:selectedQuality}}));
  if(onHome()){const title=document.querySelector('#home-film-title');title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
 },motion.matches?0:550);
}
function gateFailure(message,tap=false){
 clearTimeout(helpTimer);awaitingTap=tap;gate.dataset.state=tap?'awaiting-play':'error';gateStatus.textContent=message;gateHelp.textContent=tap?'影像已经准备好，点击即可入境。':'可以重新准备，也可以先进入，稍后再播放。';gateHelp.hidden=false;gateActions.hidden=false;retry.textContent=tap?'进入并播放':'重新准备';skip.disabled=false;
}
async function fetchComplete(key,signal,token){
 if(cache.has(key)){const complete=cache.get(key);hero.dataset.downloadBytes=String(complete.bytes);hero.dataset.downloadComplete='true';gateProgress(94,'影像已备妥，正在准备画面');return complete;}
 const item=variants[key];
 const response=await fetch(new URL(`./assets/home-film/${item.file}`,document.baseURI),{signal});
 if(!response.ok)throw new Error('Video response unavailable');
 const expected=Number(response.headers.get('Content-Length'))||item.bytes;
 const reader=response.body?.getReader();let received=0,chunks=[],stall;
 const resetStall=()=>{clearTimeout(stall);stall=setTimeout(()=>controller?.abort('stalled'),25000);};
 try{
  resetStall();
  if(reader){
   while(true){const {done,value}=await reader.read();if(done)break;if(token!==loadEpoch)throw new DOMException('Cancelled','AbortError');chunks.push(value);received+=value.byteLength;resetStall();hero.dataset.downloadBytes=String(received);gateProgress(expected?received/expected*94:0,'正在准备实景影像');}
  }else{const data=await response.arrayBuffer();chunks=[data];received=data.byteLength;}
 }finally{clearTimeout(stall);}
 if(received!==item.bytes)throw new Error('Incomplete video transfer');
 const blob=new Blob(chunks,{type:'video/mp4'}),url=URL.createObjectURL(blob),result={url,bytes:received};cache.set(key,result);hero.dataset.downloadComplete='true';gateProgress(94,'影像已备妥，正在准备画面');return result;
}
function decodedFrame(){
 return new Promise((resolve,reject)=>{
  let callback;const start=background.currentTime;
  const timer=setTimeout(()=>{
   if(callback!==undefined)background.cancelVideoFrameCallback?.(callback);
   if(background.videoWidth>0&&background.readyState>=2&&!background.paused&&background.currentTime>start)resolve();else reject(new Error('First video frame not ready'));
  },2500);
  if(background.requestVideoFrameCallback)callback=background.requestVideoFrameCallback(()=>{clearTimeout(timer);resolve();});
 });
}
async function startAndReveal(token){
 background.muted=true;background.defaultMuted=true;
 await background.play();await decodedFrame();
 if(token!==loadEpoch)return;
 ready=true;preparing=false;awaitingTap=false;hero.dataset.firstFrame='true';hero.dataset.videoQuality=selectedQuality;hero.classList.add('video-ready');gateProgress(100,'画面就绪，正在入境');updateUI();reveal('playing');
}
async function prepare(key=selectedQuality){
 const token=++loadEpoch;playEpoch++;controller?.abort('superseded');controller=new AbortController();selectedQuality=key;qualitySelect.value=key;ready=false;hasData=false;preparing=true;awaitingTap=false;userPaused=false;background.pause();hero.dataset.downloadComplete='false';hero.dataset.firstFrame='false';showGate();updateUI();
 try{
  const complete=await fetchComplete(key,controller.signal,token);if(token!==loadEpoch)return;
  background.src=complete.url;background.preload='auto';background.load();
  await new Promise((resolve,reject)=>{
   const cleanup=()=>{clearTimeout(timeout);background.removeEventListener('loadedmetadata',loaded);background.removeEventListener('error',failed);};
   const loaded=()=>{cleanup();resolve();},failed=()=>{cleanup();reject(new DOMException('Video decoding unavailable','NotSupportedError'));};
   const timeout=setTimeout(()=>{cleanup();reject(new Error('Video decode timed out'));},15000);
   if(background.readyState>=1){cleanup();resolve();return;}
   background.addEventListener('loadedmetadata',loaded,{once:true});background.addEventListener('error',failed,{once:true});
  });
  if(token!==loadEpoch)return;
  hasData=true;background.currentTime=Math.min(pendingSeek,Math.max(0,background.duration-.1));pendingSeek=0;gateProgress(98,'正在唤醒第一帧画面');await startAndReveal(token);
 }catch(error){
  if(token!==loadEpoch)return;
  preparing=false;updateUI();
  if(error.name==='NotAllowedError'){gateFailure('实景影像已准备好',true);return;}
  if(key==='4k'&&error.name==='NotSupportedError'){pendingSeek=background.currentTime||0;prepare('hd');return;}
  gateFailure('实景影像暂未准备完成');
 }
}
function pauseBackground(){playEpoch++;background.pause();updateUI();}
async function resumeBackground(){
 if(!ready||!canRun())return;
 const token=++playEpoch;
 try{await background.play();if(token!==playEpoch)return;if(!canRun()){background.pause();return;}updateUI();}catch{updateUI();status.textContent='点击播放影像，继续观看';}
}
function sync(){
 if(preparing)return;
 if(ready&&canRun())resumeBackground();else pauseBackground();
}
window.agateEntrance={
 retry(){if(awaitingTap&&hasData){preparing=true;gateActions.hidden=true;startAndReveal(loadEpoch).catch(()=>{preparing=false;gateFailure('点击入境，开始播放实景',true);});}else prepare(selectedQuality);},
 skip(){loadEpoch++;playEpoch++;controller?.abort('skipped');preparing=false;ready=false;awaitingTap=false;userPaused=true;background.pause();updateUI();reveal('skipped');}
};
toggle.onclick=()=>{if(!ready){prepare(selectedQuality);return;}if(!background.paused){userPaused=true;pauseBackground();}else{userPaused=false;resumeBackground();}};
qualitySelect.onchange=()=>{pendingSeek=background.currentTime||0;try{localStorage.setItem('agate-film-quality-v1',qualitySelect.value);}catch{}prepare(qualitySelect.value);};
hero.querySelectorAll('[data-film-chapter]').forEach(button=>button.onclick=()=>{
 const first=chapters.find(c=>c.chapter===Number(button.dataset.filmChapter));if(!first)return;
 if(!ready){pendingSeek=first.time;prepare(selectedQuality);return;}background.currentTime=first.time;
});
background.addEventListener('timeupdate',()=>{
 const t=background.currentTime,chapter=[...chapters].reverse().find(c=>t>=c.time)?.chapter||0;
 hero.querySelectorAll('[data-film-chapter]').forEach(button=>button.classList.toggle('active',Number(button.dataset.filmChapter)===chapter));
 progress.style.width=Number.isFinite(background.duration)?`${t/background.duration*100}%`:'0%';
});
background.addEventListener('playing',updateUI);background.addEventListener('pause',updateUI);
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.12}).observe(hero);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dialog.open)film.pause();sync();});
window.addEventListener('hashchange',()=>{
 if(dialog.open)dialog.close();
 if(!onHome()){
  if(preparing||root.classList.contains('film-entering')){loadEpoch++;controller?.abort('route');preparing=false;reveal('route');}pauseBackground();
 }else if(!ready&&!motion.matches)prepare(selectedQuality);else sync();
});
motion.addEventListener('change',()=>{if(motion.matches){userPaused=true;pauseBackground();}else sync();});
gate.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const buttons=[...gate.querySelectorAll('button:not(:disabled)')].filter(b=>!b.closest('[hidden]'));if(!buttons.length){event.preventDefault();return;}
 const index=buttons.indexOf(document.activeElement),next=event.shiftKey?(index<=0?buttons.length-1:index-1):(index+1)%buttons.length;event.preventDefault();buttons[next].focus();
});
function showFilm(){
 if(dialog.open)return;
 filmEpoch++;pauseBackground();releaseMusic=window.agateMusic?.suspendForFilm?.()||null;
 filmStatus.textContent='正在准备玛瑙主题片…';dialog.showModal();
 const path=selectedQuality==='4k'?`./assets/home-film/${media.story4k.file}`:`./assets/home-film/${media.storyHd.file}`;
 if(film.getAttribute('src')!==path){film.src=path;film.load();}
 film.currentTime=0;film.muted=false;film.volume=1;
 const token=filmEpoch;
 film.play().then(()=>{if(token!==filmEpoch)return;if(!dialog.open){film.pause();return;}filmStatus.textContent='';}).catch(error=>{if(token!==filmEpoch||!dialog.open)return;filmStatus.textContent=error.name==='NotAllowedError'?'请点击播放键开启原声。':'主题片暂未载入，可通过下方来源观看原片。';});
}
document.querySelector('#home-film-watch').onclick=showFilm;
document.querySelector('#home-film-close').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{filmEpoch++;film.pause();releaseMusic?.();releaseMusic=null;sync();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
film.addEventListener('playing',()=>{if(!dialog.open)film.pause();else filmStatus.textContent='';});
film.addEventListener('error',()=>{filmStatus.textContent='主题片暂未载入，可通过下方来源观看原片。';});
film.addEventListener('ended',()=>{filmStatus.textContent='主题片已结束，可重播或关闭继续创作。';});
try{const saved=localStorage.getItem('agate-film-quality-v1');selectedQuality=saved in variants?saved:innerWidth<1000||navigator.connection?.saveData?'hd':'4k';}catch{selectedQuality=innerWidth<1000?'hd':'4k';}
qualitySelect.value=selectedQuality;updateUI();
if(onHome()){
 if(motion.matches){userPaused=true;showGate();hero.querySelector('.home-film-poster').decode().catch(()=>{}).finally(()=>{status.textContent='减少动态效果已启用 · 可手动播放';reveal('reduced-motion');});}
 else prepare(selectedQuality);
}
