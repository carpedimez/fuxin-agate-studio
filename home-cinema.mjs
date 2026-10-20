import media from './assets/home-film/playback.json';
const hero=document.querySelector('#home-film');let background=document.querySelector('#home-film-video');
const toggle=document.querySelector('#home-film-toggle'),status=document.querySelector('#home-film-status'),progress=document.querySelector('#home-film-progress');
const motion=matchMedia('(prefers-reduced-motion: reduce)'),header=document.querySelector('.header');
new ResizeObserver(()=>hero.style.setProperty('--film-header-height',`${header.getBoundingClientRect().height}px`)).observe(header);
const sourceUrl=media.sourceUrl;
const dialog=document.createElement('dialog');dialog.className='home-film-dialog';dialog.id='home-film-dialog';dialog.setAttribute('aria-labelledby','home-full-film-title');
dialog.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-hq-1080.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 ${Math.round(media.story4k.duration)} 秒 · 保留原声<br>原片《阜新玛瑙——刀刃上的大地瑰宝》<br>辽宁发布 / 辽宁卫视《黑土地》 · 省政府网站发布</p><a href="${sourceUrl}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;
document.body.append(dialog);
const film=dialog.querySelector('video'),filmStatus=dialog.querySelector('#home-full-film-status');
let releaseMusic=null,filmEpoch=0;
const gate=document.querySelector('#entry-gate'),gateStatus=document.querySelector('#entry-status'),gateBar=document.querySelector('#entry-progress'),gateFill=document.querySelector('#entry-progress-fill'),gatePercent=document.querySelector('#entry-percent'),gateQuality=document.querySelector('#entry-quality'),gateHelp=document.querySelector('#entry-help'),gateActions=document.querySelector('#entry-actions'),retry=document.querySelector('#entry-retry'),skip=document.querySelector('#entry-skip');
const root=document.documentElement,inertBefore=new Map();
const onHome=()=>!location.hash||location.hash==='#home';
const canRun=()=>onHome()&&inView&&!document.hidden&&!dialog.open&&!userPaused;
let selectedQuality='1080p',rendition=null,loadEpoch=0,playEpoch=0,controller=null,preparing=false,hasData=false,ready=false,inView=true,userPaused=false,awaitingTap=false,gateEpoch=0,helpTimer,entryTimer,stallTimer;
let entryRevealed=!root.classList.contains('film-entering'),revealing=false,pendingSeek=media.initialTime||0;
const qualityLabel=()=>'1080P 高清';
const choose=()=>media.quality1080;
let cursor=-.5;
const chapters=media.loopSegments.map(segment=>{const time=Math.max(0,cursor);cursor+=segment.duration-media.crossfadeSeconds;return {time,chapter:segment.chapter};});
function bufferedAhead(){
 const t=background.currentTime;
 for(let i=0;i<background.buffered.length;i++)if(t>=background.buffered.start(i)-.05&&t<=background.buffered.end(i)+.05)return Math.max(0,background.buffered.end(i)-t);
 return 0;
}
function updateUI(){
 const playing=ready&&!background.paused;
 toggle.setAttribute('aria-pressed',String(playing));toggle.textContent=playing?'Ⅱ 暂停影像':awaitingTap?'▷ 点击播放':'▷ 播放影像';
 hero.dataset.filmState=preparing?'preparing':playing?'playing':ready?'paused':'poster';
 status.textContent=preparing?'正在准备开场画面…':ready?`${qualityLabel()} · ${playing?'连续实景':'影像已暂停'}`:'实景封面 · 点击播放连续影像';
}
function gateProgress(percent,message){
 const value=Math.max(0,Math.min(100,Math.round(percent)));
 gateFill.style.width=`${value}%`;gatePercent.textContent=`${value}%`;gateBar.setAttribute('aria-valuenow',String(value));
 if(message)gateStatus.textContent=message;
}
window.addEventListener('agate:film-progress',event=>{const d=event.detail;if(!entryRevealed&&!revealing&&(d.kind==='opening'||window.agateFilmLoader.state.kind==='full'))gateProgress(d.received/d.total*94,'正在准备高清开场');});
function showGate(){
 if(entryRevealed||revealing)return;
 gateEpoch++;gate.classList.remove('leaving');gate.hidden=false;root.classList.add('film-entering');gate.dataset.state='preparing';
 gateHelp.hidden=true;gateActions.hidden=true;retry.textContent='重新准备';skip.disabled=false;
 gateQuality.textContent='先让高清开场就绪，再走进阜新';gateProgress(0,'正在点亮第一帧');
 document.querySelectorAll('body>.header,body>main,body>footer,.home-screen-nav').forEach(el=>{if(!inertBefore.has(el))inertBefore.set(el,el.inert);el.inert=true;});
 gate.setAttribute('tabindex','-1');gate.focus({preventScroll:true});
 if(!entryTimer)entryTimer=setTimeout(()=>{entryTimer=0;reveal('slow-network');},media.entranceMaxWaitMs);
 clearTimeout(helpTimer);helpTimer=setTimeout(()=>{if(entryRevealed)return;gateHelp.hidden=false;gateHelp.textContent='开场仍在准备，也可以直接进入浏览。';gateActions.hidden=false;},2500);
}
function reveal(reason){
 if(entryRevealed||revealing)return;
 clearTimeout(helpTimer);clearTimeout(entryTimer);entryTimer=0;revealing=true;const token=++gateEpoch;
 gate.dataset.state=reason;gateProgress(100,reason==='playing'?'画面就绪，正在入境':'正在入境');gate.classList.add('leaving');
 setTimeout(()=>{
  if(token!==gateEpoch)return;
  entryRevealed=true;revealing=false;root.classList.remove('film-entering');gate.classList.remove('leaving');gate.hidden=true;
  inertBefore.forEach((wasInert,el)=>{el.inert=wasInert;});inertBefore.clear();
  window.dispatchEvent(new CustomEvent('agate:entry-ready',{detail:{reason,quality:selectedQuality}}));
  if(onHome()){const title=document.querySelector('#home-film-title');title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
 },motion.matches?0:250);
}
function gateFailure(message,tap=false){
 awaitingTap=tap;updateUI();status.textContent=tap?'轻点播放，开启实景影像':'实景封面 · 轻点播放可重试';
 if(entryRevealed||revealing)return;
 gate.dataset.state=tap?'awaiting-play':'error';gateStatus.textContent=message;gateHelp.textContent=tap?'影像已准备好，点击播放或直接进入。':'可以重新准备，也可以直接进入浏览。';gateHelp.hidden=false;gateActions.hidden=false;retry.textContent=tap?'进入并播放':'重新准备';skip.disabled=false;
}
// A small validated local clip prevents network stalls during playback.
function waitForPlayable(signal,token){
 return new Promise((resolve,reject)=>{
  const events=['loadedmetadata','loadeddata','canplay','progress','seeked','timeupdate'];let sought=false;
  const cleanup=()=>{clearTimeout(timeout);events.forEach(n=>background.removeEventListener(n,check));background.removeEventListener('error',failed);signal.removeEventListener('abort',aborted);};
  const aborted=()=>{cleanup();reject(new DOMException('Cancelled','AbortError'));};
  const failed=()=>{cleanup();reject(new DOMException('Video unavailable','NotSupportedError'));};
  const check=()=>{
   if(token!==loadEpoch){aborted();return;}
   if(background.readyState>=1&&!sought){sought=true;const target=Math.min(pendingSeek,Math.max(0,background.duration-.1));pendingSeek=0;if(target>0&&Math.abs(background.currentTime-target)>.1)background.currentTime=target;}
   const ahead=bufferedAhead(),target=Math.min(media.startupBufferSeconds,Math.max(.05,background.duration-background.currentTime));
   hero.dataset.bufferedAhead=ahead.toFixed(2);
   if(!entryRevealed&&!revealing)gateProgress(98,'正在唤醒流畅画面');
   const alreadyPlaying=!background.paused&&background.currentTime>0;
   if(sought&&!background.seeking&&background.readyState>=2&&(ahead>=target-.04||alreadyPlaying)){cleanup();resolve();}
  };
  const timeout=setTimeout(()=>{cleanup();reject(new Error('Opening buffer timed out'));},45000);
  events.forEach(n=>background.addEventListener(n,check));background.addEventListener('error',failed);signal.addEventListener('abort',aborted,{once:true});check();
 });
}
function decodedFrame(signal){
 return new Promise((resolve,reject)=>{
  let callback;const start=background.currentTime;
  const cleanup=()=>{clearTimeout(timer);if(callback!==undefined)background.cancelVideoFrameCallback?.(callback);signal.removeEventListener('abort',aborted);};
  const aborted=()=>{cleanup();reject(new DOMException('Cancelled','AbortError'));};
  const timer=setTimeout(()=>{cleanup();if(background.videoWidth>0&&background.readyState>=2&&!background.paused&&background.currentTime>start)resolve();else reject(new Error('First video frame not ready'));},3000);
  signal.addEventListener('abort',aborted,{once:true});
  if(background.requestVideoFrameCallback)callback=background.requestVideoFrameCallback(()=>{cleanup();resolve();});
 });
}
async function startAndReveal(token){
 background.muted=true;background.defaultMuted=true;
 await background.play();await decodedFrame(controller.signal);
 if(token!==loadEpoch)return;
 ready=true;preparing=false;awaitingTap=false;hero.dataset.firstFrame='true';hero.dataset.videoQuality=selectedQuality;hero.dataset.rendition=String(rendition.height);hero.dataset.entryBufferedSeconds=bufferedAhead().toFixed(2);hero.dataset.entryVideoSeconds=String(background.currentTime);hero.classList.add('video-ready');updateUI();reveal('playing');
 if(!canRun())pauseBackground();else ensureFull();
}
async function prepare(key=selectedQuality,force=false){
 const token=++loadEpoch;playEpoch++;controller?.abort();controller=new AbortController();clearTimeout(stallTimer);selectedQuality='1080p';rendition=choose();ready=false;hasData=false;preparing=true;awaitingTap=false;userPaused=false;
 hero.dataset.firstFrame='false';hero.dataset.playbackMode='layered-hq-1080p';showGate();updateUI();
 try{
  const complete=await window.agateFilmLoader.load(force);if(token!==loadEpoch)return;
  hero.dataset.downloadComplete=String(complete.complete);hero.dataset.downloadBytes=String(complete.received);hero.dataset.cacheSource=complete.source;hero.dataset.filmTier=complete.kind;rendition=complete.item;
  background.muted=true;background.defaultMuted=true;background.preload='auto';background.loop=true;
  if(background.src!==complete.url){background.pause();hero.classList.remove('video-ready');background.src=complete.url;background.load();}
  await waitForPlayable(controller.signal,token);if(token!==loadEpoch)return;
  hasData=true;await startAndReveal(token);
 }catch(error){
  if(token!==loadEpoch||error.name==='AbortError')return;
  preparing=false;updateUI();
  if(error.name==='NotAllowedError'){gateFailure('开场画面已准备好',true);return;}
  gateFailure('实景影像暂未准备完成');
 }
}
function pauseBackground(){playEpoch++;hero.querySelectorAll('.home-film-video').forEach(v=>v.pause());clearTimeout(stallTimer);updateUI();}
async function resumeBackground(){
 if(!ready||!canRun())return;
 const token=++playEpoch;
 try{await background.play();if(token!==playEpoch)return;if(!canRun()){background.pause();return;}updateUI();ensureFull();}catch{updateUI();status.textContent='点击播放影像，继续观看';}
}
function sync(){if(preparing)return;if(ready&&canRun()){resumeBackground();maybePromote();}else pauseBackground();}
let fullData=null,fullTask=null,promotion=null,pendingChapterTime=null,fullRetry;
async function ensureFull(){
 if(hero.dataset.filmTier==='full')return;
 if(fullData){maybePromote();return;}
 if(fullTask)return fullTask;
 fullTask=window.agateFilmLoader.loadFull().then(data=>{fullData=data;hero.dataset.fullCached='true';hero.dataset.fullBytes=String(data.received);maybePromote();}).catch(()=>{hero.dataset.fullCached='retry';clearTimeout(fullRetry);fullRetry=setTimeout(()=>{if(canRun())ensureFull();},15000);}).finally(()=>{fullTask=null;});return fullTask;
}
async function maybePromote(){
 if(!fullData||promotion||!ready||!canRun()||hero.dataset.filmTier==='full')return;
 const previous=background,epoch=loadEpoch,next=document.createElement('video');
 next.className='home-film-video';next.id='home-film-upgrade';next.setAttribute('aria-hidden','true');next.muted=true;next.defaultMuted=true;next.loop=true;next.playsInline=true;next.preload='auto';next.style.opacity='0';next.style.transition='opacity .55s ease';hero.append(next);
 promotion=(async()=>{
  try{
   await new Promise((resolve,reject)=>{const done=()=>{clearTimeout(timer);resolve();};const timer=setTimeout(()=>reject(Error('Upgrade decode timed out')),10000);next.addEventListener('loadedmetadata',done,{once:true});next.addEventListener('error',()=>{clearTimeout(timer);reject(Error('Upgrade unavailable'));},{once:true});next.src=fullData.url;next.load();});
   next.currentTime=Math.min(pendingChapterTime??media.opening1080.mainTime,next.duration-.1);
   await next.play();
   await new Promise((resolve,reject)=>{let callback;const timer=setTimeout(()=>{if(callback!==undefined)next.cancelVideoFrameCallback?.(callback);reject(Error('Upgrade frame unavailable'));},3000);if(next.requestVideoFrameCallback)callback=next.requestVideoFrameCallback(()=>{clearTimeout(timer);resolve();});else next.addEventListener('timeupdate',()=>{clearTimeout(timer);resolve();},{once:true});});
   if(epoch!==loadEpoch||background!==previous||!canRun())return;
   previous.id='home-film-opening-video';next.id='home-film-video';next.removeAttribute('aria-hidden');background=next;bindVideo(next);
   hero.dataset.filmTier='full';hero.dataset.cacheSource=fullData.source;hero.dataset.downloadBytes=String(fullData.received);pendingChapterTime=null;
   next.getBoundingClientRect();next.style.opacity='1';updateUI();
   await new Promise(resolve=>setTimeout(resolve,600));previous.pause();previous.remove();
  }catch{hero.dataset.upgradeState='deferred';}
  finally{if(background!==next){next.pause();next.remove();}promotion=null;}
 })();return promotion;
}
window.agateEntrance={
 retry(){if(awaitingTap&&hasData){preparing=true;gateActions.hidden=true;startAndReveal(loadEpoch).catch(()=>{preparing=false;gateFailure('轻点播放，开启实景影像',true);});}else prepare(selectedQuality,true);},
 // Entering early never aborts the stream: the real video appears when ready.
 skip(){reveal('skipped');}
};
toggle.onclick=()=>{if(awaitingTap&&hasData){window.agateEntrance.retry();return;}if(!ready){prepare(selectedQuality,true);return;}if(!background.paused){userPaused=true;pauseBackground();}else{userPaused=false;resumeBackground();}};
hero.querySelectorAll('[data-film-chapter]').forEach(button=>button.onclick=()=>{
 const first=chapters.find(c=>c.chapter===Number(button.dataset.filmChapter));if(!first)return;
 if(!ready){pendingChapterTime=first.time;prepare(selectedQuality);return;}if(hero.dataset.filmTier!=='full'){pendingChapterTime=first.time;status.textContent='正在准备主题镜头 · 高清开场继续播放';ensureFull();maybePromote();return;}background.currentTime=first.time;
});
function bindVideo(video){
 video.addEventListener('timeupdate',()=>{
  if(video!==background)return;
  const t=video.currentTime,chapter=hero.dataset.filmTier==='opening'?1:[...chapters].reverse().find(c=>t>=c.time)?.chapter||0;
  hero.querySelectorAll('[data-film-chapter]').forEach(button=>button.classList.toggle('active',Number(button.dataset.filmChapter)===chapter));
  progress.style.width=Number.isFinite(video.duration)?`${t/video.duration*100}%`:'0%';
 });
 video.addEventListener('playing',()=>{if(video===background){clearTimeout(stallTimer);updateUI();}});
 video.addEventListener('pause',()=>{if(video===background)updateUI();});
}
bindVideo(background);
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.12}).observe(hero);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dialog.open)film.pause();sync();});
window.addEventListener('hashchange',()=>{
 if(dialog.open)dialog.close();
 if(!onHome()){
  if(preparing){loadEpoch++;controller?.abort();preparing=false;}reveal('route');pauseBackground();
 }else if(!ready&&!motion.matches)prepare(selectedQuality);else sync();
});
motion.addEventListener('change',()=>{
 if(motion.matches){userPaused=true;if(preparing){loadEpoch++;controller?.abort();preparing=false;}pauseBackground();reveal('reduced-motion');}else if(!ready&&onHome())prepare(selectedQuality);else sync();
});
gate.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const buttons=[...gate.querySelectorAll('button:not(:disabled)')].filter(b=>!b.closest('[hidden]'));if(!buttons.length){event.preventDefault();return;}
 const index=buttons.indexOf(document.activeElement),next=event.shiftKey?(index<=0?buttons.length-1:index-1):(index+1)%buttons.length;event.preventDefault();buttons[next].focus();
});
function showFilm(){
 if(dialog.open)return;
 filmEpoch++;pauseBackground();releaseMusic=window.agateMusic?.suspendForFilm?.()||null;
 filmStatus.textContent='正在准备玛瑙主题片…';dialog.showModal();
 const path=`./assets/home-film/${media.storyHd.file}`;
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
rendition=choose();updateUI();
if(onHome()){
 if(motion.matches){userPaused=true;showGate();hero.querySelector('.home-film-poster').decode().catch(()=>{}).finally(()=>{status.textContent='减少动态效果已启用 · 可手动播放';reveal('reduced-motion');});}
 else prepare(selectedQuality);
}
