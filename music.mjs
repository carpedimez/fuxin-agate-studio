const root=document.createElement('div');
root.className='ambient-player';
root.innerHTML=`<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>`;
document.querySelector('.header').append(root);
const $=s=>root.querySelector(s),audio=document.createElement('audio');
audio.id='background-music';audio.src='./assets/background-we-never.mp3';audio.preload='none';audio.loop=true;document.body.append(audio);
const readVolume=()=>{try{const v=JSON.parse(localStorage.getItem('agate-music-volume'));return typeof v==='number'&&Number.isFinite(v)?Math.max(0,Math.min(1,v)):.25;}catch{return .25;}};
audio.volume=readVolume();let attempting=false,lastVolume=audio.volume||.25,requestId=0,audioTask=null,objectUrl=null,autoArmed=true,mediaHeld=false;
async function prepareAudio(){if(objectUrl)return;if(!audioTask)audioTask=fetch(new URL('./assets/background-we-never.mp3',import.meta.url)).then(r=>{if(!r.ok)throw Error('Audio unavailable');return r.blob();}).then(blob=>{objectUrl=URL.createObjectURL(blob);audio.src=objectUrl;}).catch(e=>{audioTask=null;throw e;});await audioTask;}
function volumeUI(){$('#music-volume').value=Math.round(audio.volume*100);$('#music-volume-value').value=Math.round(audio.volume*100)+'%';const muted=audio.muted||audio.volume===0;$('#music-mute').setAttribute('aria-pressed',String(muted));$('#music-mute').setAttribute('aria-label',muted?'取消静音':'静音');$('#music-mute').textContent=muted?'×':'♪';}
const time=n=>Number.isFinite(n)?Math.floor(n/60)+':'+String(Math.floor(n%60)).padStart(2,'0'):'0:00';
function playbackUI(){const playing=!audio.paused;root.classList.toggle('playing',playing);$('#music-toggle').setAttribute('aria-pressed',String(playing));$('#music-toggle').setAttribute('aria-label',playing?'暂停背景音乐':'播放背景音乐');$('#music-label').textContent=playing?'音乐播放中':'开启音乐';}
function disarmAuto(){
 autoArmed=false;
 document.removeEventListener('click',onFirstInteraction,true);
 document.removeEventListener('touchend',onFirstInteraction,true);
 document.removeEventListener('keydown',onFirstInteraction,true);
}
async function startMusic(){
 if(mediaHeld||attempting||!audio.paused)return;
 const id=++requestId;attempting=true;
 $('#music-label').textContent='正在加载';$('#music-status').textContent='正在准备音乐…';
 try{
  // A prepared track calls play() inside the gesture, without awaiting a fetch.
  if(!objectUrl)await prepareAudio();
  if(id!==requestId)return;
  if(audio.error)audio.load();
  await audio.play();
  if(id===requestId){disarmAuto();root.dataset.autoplay='playing';$('#music-status').textContent='正在循环播放，可随时暂停。';}
 }catch(e){
  if(id!==requestId)return;
  playbackUI();
  if(e.name==='NotAllowedError'){
   root.dataset.autoplay='waiting';
   $('#music-label').textContent=autoArmed?'轻触开启':'开启音乐';
   $('#music-status').textContent=autoArmed?'轻触页面，音乐便随创作开始。':'音乐已准备好，请轻点音符播放。';
  }else{
   root.dataset.autoplay='unavailable';
   $('#music-status').textContent='暂时未能播放，请点击音符重试。';
  }
 }finally{if(id===requestId)attempting=false;}
}
function toggle(){
 disarmAuto();
 if(mediaHeld)return;
 if(attempting||!audio.paused){
  requestId++;attempting=false;audio.pause();playbackUI();root.dataset.autoplay='paused';
  $('#music-status').textContent='音乐已暂停，轻点音符继续。';
 }else startMusic();
}
function onFirstInteraction(event){
 if(!autoArmed||!event.isTrusted||root.contains(event.target))return;
 if(event.type==='keydown'&&(!['Enter',' '].includes(event.key)||event.ctrlKey||event.altKey||event.metaKey))return;
 startMusic();
}
document.addEventListener('click',onFirstInteraction,true);
document.addEventListener('touchend',onFirstInteraction,{capture:true,passive:true});
document.addEventListener('keydown',onFirstInteraction,true);
$('#music-toggle').onclick=toggle;
function setPanel(open){$('#music-panel').hidden=!open;$('#music-settings').setAttribute('aria-expanded',String(open));}
$('#music-settings').onclick=()=>setPanel($('#music-panel').hidden);
document.addEventListener('pointerdown',e=>{if(!root.contains(e.target))setPanel(false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#music-panel').hidden){setPanel(false);$('#music-settings').focus();}});
$('#music-volume').oninput=e=>{audio.volume=Number(e.target.value)/100;if(audio.volume>0)lastVolume=audio.volume;audio.muted=false;try{localStorage.setItem('agate-music-volume',JSON.stringify(audio.volume));}catch{}volumeUI();};
$('#music-mute').onclick=()=>{if(audio.muted||audio.volume===0){audio.muted=false;if(audio.volume===0){audio.volume=lastVolume;try{localStorage.setItem('agate-music-volume',JSON.stringify(audio.volume));}catch{}}}else{lastVolume=audio.volume;audio.muted=true;}volumeUI();};
$('#music-seek').oninput=e=>{if(Number.isFinite(audio.duration)&&audio.duration>0)audio.currentTime=Number(e.target.value)/1000*audio.duration;};
audio.addEventListener('play',playbackUI);audio.addEventListener('pause',()=>{playbackUI();$('#music-status').textContent='音乐已暂停，轻点音符继续。';});
audio.addEventListener('playing',()=>{disarmAuto();root.dataset.autoplay='playing';$('#music-label').textContent='音乐播放中';$('#music-status').textContent='正在循环播放，可随时暂停。';});
audio.addEventListener('waiting',()=>{if(!audio.paused){$('#music-label').textContent='正在缓冲';$('#music-status').textContent='音乐正在缓冲…';}});
audio.addEventListener('loadedmetadata',()=>{$('#music-duration').textContent=time(audio.duration);$('#music-seek').disabled=!Number.isFinite(audio.duration);});
audio.addEventListener('timeupdate',()=>{$('#music-current').textContent=time(audio.currentTime);if(Number.isFinite(audio.duration)&&audio.duration>0)$('#music-seek').value=Math.round(audio.currentTime/audio.duration*1000);});
audio.addEventListener('volumechange',volumeUI);
audio.addEventListener('error',()=>{$('#music-status').textContent='音乐暂不可用，请点击音符重试。';playbackUI();});
fetch('./assets/music.json').then(r=>{if(!r.ok)throw Error();return r.json();}).then(meta=>{$('#music-title').textContent=meta.title;$('#music-artist').textContent=meta.artist;$('#music-toggle').title=meta.title+' · '+meta.artist;}).catch(()=>{$('#music-title').textContent='用户指定背景音乐';});
function suspendForFilm(){
 const resumeWanted=!audio.paused||attempting;
 mediaHeld=true;requestId++;attempting=false;disarmAuto();audio.pause();playbackUI();
 $('#music-label').textContent='观影中';$('#music-status').textContent='宣传片播放期间，背景音乐暂时暂停。';
 let released=false;
 return ()=>{if(released)return;released=true;mediaHeld=false;playbackUI();if(resumeWanted)startMusic();};
}
volumeUI();window.agateMusic={audio,toggle,suspendForFilm};startMusic();
