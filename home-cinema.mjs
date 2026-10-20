const hero=document.querySelector('#home-film');
const slides=[...hero.querySelectorAll('.home-backdrop')];
const toggle=document.querySelector('#home-film-toggle');
const status=document.querySelector('#home-film-status');
const progress=document.querySelector('#home-film-progress');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const header=document.querySelector('.header');
new ResizeObserver(()=>hero.style.setProperty('--film-header-height',`${header.getBoundingClientRect().height}px`)).observe(header);
const sourceUrl='https://ln.cri.cn/2025-12-30/a1722ea1-33f5-4c40-8dad-1179ce4bb0bc.html';
const interval=6500;
let index=0,userPaused=false,manualAuto=false,inView=true,timer=null,deadline=0,remaining=interval,progressAnimation=null,changeToken=0;
const dialog=document.createElement('dialog');dialog.className='home-film-dialog';dialog.id='home-film-dialog';dialog.setAttribute('aria-labelledby','home-full-film-title');
dialog.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 34 秒 · 保留原声<br>原片《看见阜新：从文明摇篮到生态新城》<br>影像：阜新市委宣传部 / 发布：国际在线</p><a href="${sourceUrl}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;
document.body.append(dialog);
const film=dialog.querySelector('video'),filmStatus=dialog.querySelector('#home-full-film-status');
let releaseMusic=null,filmEpoch=0;
const onHome=()=>!location.hash||location.hash==='#home';
const allowed=()=>onHome()&&inView&&!document.hidden&&!dialog.open&&!userPaused&&(manualAuto||(!motion.matches&&!navigator.connection?.saveData));
function updateButton(){
 const cycling=timer!==null;
 toggle.setAttribute('aria-pressed',String(cycling));toggle.textContent=cycling?'Ⅱ 暂停轮播':'▷ 自动轮播';
 hero.dataset.slideshow=cycling?'playing':'paused';
 status.textContent=`${String(index+1).padStart(2,'0')} / 04 · ${slides[index].dataset.slideCaption}${userPaused?' · 已暂停':''}`;
}
function stopSlides(){
 if(timer!==null){clearTimeout(timer);timer=null;remaining=Math.max(50,deadline-performance.now());}
 progressAnimation?.pause();updateButton();
}
function startSlides(){
 if(timer!==null||!allowed()){updateButton();return;}
 deadline=performance.now()+remaining;
 const percent=(interval-remaining)/interval*100;
 progressAnimation?.cancel();
 progressAnimation=progress.animate([{width:`${percent}%`},{width:'100%'}],{duration:remaining,easing:'linear',fill:'forwards'});
 timer=setTimeout(()=>{timer=null;remaining=interval;showSlide((index+1)%slides.length);},remaining);
 updateButton();
}
async function loadSlide(slide){
 if(!slide.getAttribute('src'))slide.src=slide.dataset.src;
 await slide.decode();
}
async function showSlide(next){
 const token=++changeToken;stopSlides();remaining=interval;
 const slide=slides[(next+slides.length)%slides.length];
 try{await loadSlide(slide);}catch{
  if(token!==changeToken)return;
  userPaused=true;updateButton();status.textContent='背景照片暂未载入 · 已保留实景封面';return;
 }
 if(token!==changeToken)return;
 index=slides.indexOf(slide);hero.dataset.slide=String(index);
 slides.forEach((el,i)=>el.classList.toggle('active',i===index));
 hero.querySelectorAll('[data-home-slide]').forEach(el=>el.setAttribute('aria-pressed',String(Number(el.dataset.homeSlide)===index)));
 hero.querySelectorAll('[data-film-chapter]').forEach(el=>el.classList.toggle('active',Number(el.dataset.filmChapter)===Number(slide.dataset.slideChapter)));
 progressAnimation?.cancel();progress.style.width='0%';sync();
}
function sync(){if(allowed())startSlides();else stopSlides();}
function preload(){if(onHome())slides.forEach(slide=>loadSlide(slide).catch(()=>{}));}
hero.querySelectorAll('[data-home-slide]').forEach(el=>el.onclick=()=>showSlide(Number(el.dataset.homeSlide)));
hero.querySelectorAll('[data-film-chapter]').forEach(el=>el.onclick=()=>showSlide(slides.findIndex(s=>s.dataset.slideChapter===el.dataset.filmChapter)));
document.querySelector('#home-slide-prev').onclick=()=>showSlide(index-1);
document.querySelector('#home-slide-next').onclick=()=>showSlide(index+1);
document.querySelector('.home-slide-picker').addEventListener('keydown',e=>{
 if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();showSlide(index+(e.key==='ArrowRight'?1:-1));}
});
toggle.onclick=()=>{if(timer!==null){userPaused=true;stopSlides();}else{userPaused=false;manualAuto=true;startSlides();}};
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.12}).observe(hero);
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();preload();sync();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&dialog.open)film.pause();sync();});
motion.addEventListener('change',()=>{manualAuto=false;sync();});
function showFilm(){
 if(dialog.open)return;
 filmEpoch++;stopSlides();releaseMusic=window.agateMusic?.suspendForFilm?.()||null;
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

preload();startSlides();
