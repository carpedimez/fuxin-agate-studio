const hero=document.querySelector('#home-film');
const video=document.querySelector('#home-film-video');
const toggle=document.querySelector('#home-film-toggle');
const status=document.querySelector('#home-film-status');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const header=document.querySelector('.header');
new ResizeObserver(()=>hero.style.setProperty('--film-header-height',`${header.getBoundingClientRect().height}px`)).observe(header);
const sourceUrl='https://ln.cri.cn/2025-12-30/a1722ea1-33f5-4c40-8dad-1179ce4bb0bc.html';
let userPaused=false,requested=false,inView=true,failed=false,loadTimer,playEpoch=0;
const dialog=document.createElement('dialog');dialog.className='home-film-dialog';dialog.id='home-film-dialog';dialog.setAttribute('aria-labelledby','home-full-film-title');
dialog.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 34 秒 · 保留原声<br>原片《看见阜新：从文明摇篮到生态新城》<br>影像：阜新市委宣传部 / 发布：国际在线</p><a href="${sourceUrl}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;
document.body.append(dialog);
const film=dialog.querySelector('video'),filmStatus=dialog.querySelector('#home-full-film-status');
let releaseMusic=null,filmEpoch=0;
const onHome=()=>!location.hash||location.hash==='#home';
const allowed=()=>onHome()&&inView&&!document.hidden&&!dialog.open&&!userPaused&&!failed;
function updateButton(){
 const playing=!video.paused;
 toggle.setAttribute('aria-pressed',String(playing));toggle.textContent=playing?'Ⅱ 暂停实景':'▷ 播放实景';
}
function pauseHero(){playEpoch++;video.pause();updateButton();}
function fallback(message){
 failed=true;pauseHero();clearTimeout(loadTimer);hero.classList.remove('video-ready');hero.dataset.filmState='fallback';status.textContent=message;
}
async function playHero(manual=false){
 if(!allowed())return;
 if(!manual&&!requested&&(motion.matches||navigator.connection?.saveData)){
  status.textContent='当前显示实景封面 · 可手动播放短片';return;
 }
 if(!requested){
  requested=true;video.muted=true;video.defaultMuted=true;video.src='./assets/home-film/agate-loop.mp4';video.load();
  hero.dataset.filmState='loading';status.textContent='实景短片正在准备 · 可随时进入创作';
  loadTimer=setTimeout(()=>{if(video.readyState<2)fallback('当前显示实景封面 · 点击播放可重试');},12000);
 }
 const epoch=++playEpoch;
 try{
  await video.play();
  if(epoch!==playEpoch)return;
  if(!allowed()){video.pause();return;}
  clearTimeout(loadTimer);hero.classList.add('video-ready');hero.dataset.filmState='playing';status.textContent='玛瑙 · 手艺 · 乡土水岸 / 静音实景精选';updateButton();
 }catch(e){
  if(epoch!==playEpoch)return;
  if(e.name==='AbortError')return;
  if(e.name==='NotAllowedError'){
   clearTimeout(loadTimer);status.textContent='当前显示实景封面 · 点击播放实景短片';updateButton();
  }else fallback('实景短片暂未载入 · 封面与创作入口仍可使用');
 }
}
toggle.onclick=()=>{
 if(!video.paused){userPaused=true;pauseHero();status.textContent='实景已暂停 · 随时可以继续';}
 else {userPaused=false;if(failed){failed=false;requested=false;video.removeAttribute('src');}playHero(true);}
};
video.addEventListener('error',()=>{if(requested)fallback('实景短片暂未载入 · 封面与创作入口仍可使用');});
video.addEventListener('playing',()=>{if(!allowed()){pauseHero();return;}clearTimeout(loadTimer);hero.classList.add('video-ready');updateButton();});
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',()=>{
 const t=video.currentTime,chapter=t<1.7?0:t<8.7?1:2;
 document.querySelectorAll('[data-film-chapter]').forEach(el=>el.classList.toggle('active',Number(el.dataset.filmChapter)===chapter));
 document.querySelector('#home-film-progress').style.width=Number.isFinite(video.duration)&&video.duration>0?`${t/video.duration*100}%`:'0%';
});
function sync(){if(allowed())playHero();else pauseHero();}
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.12}).observe(hero);
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();sync();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(dialog.open)film.pause();pauseHero();}else sync();});
motion.addEventListener('change',()=>{if(motion.matches){userPaused=true;pauseHero();status.textContent='减少动态效果已启用 · 可手动播放';}else sync();});
function showFilm(){
 if(dialog.open)return;
 filmEpoch++;pauseHero();releaseMusic=window.agateMusic?.suspendForFilm?.()||null;
 filmStatus.textContent='正在准备玛瑙主题片…';dialog.showModal();
 if(!film.getAttribute('src')){film.src='./assets/home-film/agate-story.mp4';film.load();}
 film.currentTime=0;film.muted=false;film.volume=1;
 const epoch=filmEpoch;
 film.play().then(()=>{if(epoch!==filmEpoch)return;if(!dialog.open){film.pause();return;}filmStatus.textContent='';}).catch(e=>{
  if(epoch!==filmEpoch||!dialog.open)return;
  filmStatus.textContent=e.name==='NotAllowedError'?'请点击画面上的播放键，开启原声观看。':e.name==='AbortError'?'点击播放键继续观看。':'暂未载入，可点击下方来源观看原片。';
 });
}
document.querySelector('#home-film-watch').onclick=showFilm;
dialog.querySelector('#home-film-close').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>{filmEpoch++;film.pause();releaseMusic?.();releaseMusic=null;sync();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
film.addEventListener('playing',()=>{if(!dialog.open){film.pause();return;}filmStatus.textContent='';});
film.addEventListener('error',()=>{filmStatus.textContent='主题片暂未载入，可点击下方来源观看原片。';});
film.addEventListener('ended',()=>{filmStatus.textContent='主题片已结束 · 可重播，或关闭继续创作。';});
updateButton();
if('requestIdleCallback' in window)requestIdleCallback(()=>playHero(),{timeout:1200});else setTimeout(()=>playHero(),250);
