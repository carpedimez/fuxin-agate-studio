// Original stone chime and air swell, synthesized locally after a user gesture.
// No sample download, external player or autoplay dependency is required.
const preference='agate-explore-sound-muted-v1';
let muted=false,context=null,analyser=null,active=null,plays=0,generation=0;
let effectActive=null,effectGeneration=0,effectPlays=0,lastEffect=null,lastRequest=-Infinity,lastPriority=0;
const bound=new WeakSet();let musicBound=false;
try{muted=localStorage.getItem(preference)==='true';}catch{}
const controls=()=>document.querySelectorAll('[data-explore-sound],[data-interaction-sound]');
function paint(){controls().forEach(button=>{button.setAttribute('aria-pressed',String(!muted));button.setAttribute('aria-label',muted?'开启交互音效':'关闭交互音效');button.innerHTML=`<span aria-hidden="true">${muted?'♩':'♪'}</span> ${button.hasAttribute('data-interaction-sound')?(muted?'已关闭':'已开启'):'音效'+(muted?'已关':'已开')}`;});}
function audioAllowed(){const music=window.agateMusic;return !muted&&!document.hidden&&!music?.audio?.muted&&music?.audio?.volume!==0&&!music?.mediaHeld;}
function ensureAudio(){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return false;context||=new Audio();if(!analyser){analyser=context.createAnalyser();analyser.fftSize=1024;analyser.connect(context.destination);}return true;}

// Short mineral-toned gestures: a tap, a paired selection, an opening and a saved result.
const effectNotes={tap:[[0,760,.085,.38]],select:[[0,620,.10,.32],[.045,830,.13,.24]],navigate:[[0,523,.15,.30],[.065,784,.19,.23]],success:[[0,660,.18,.30],[.085,880,.21,.24],[.17,1100,.29,.19]]};
export function scheduleInterfaceSound(audio,destination,kind='tap'){
 const notes=effectNotes[kind]||effectNotes.tap,now=audio.currentTime+.008,bus=audio.createGain(),nodes=[];let stopped=false;
 bus.gain.value=.11;bus.connect(destination);
 for(const [delay,frequency,duration,level] of notes){
  for(const [ratio,weight]of [[1,1],[2.37,.12]]){
   const tone=audio.createOscillator(),envelope=audio.createGain(),start=now+delay;
   tone.type='sine';tone.frequency.setValueAtTime(frequency*ratio,start);tone.frequency.exponentialRampToValueAtTime(frequency*ratio*.97,start+duration);
   envelope.gain.setValueAtTime(.00001,start);envelope.gain.exponentialRampToValueAtTime(level*weight,start+.005);envelope.gain.exponentialRampToValueAtTime(.00001,start+duration);
   tone.connect(envelope);envelope.connect(bus);tone.start(start);tone.stop(start+duration+.015);nodes.push(tone,envelope);
  }
 }
 const duration=Math.max(...notes.map(([at,,length])=>at+length))+.04;
 const clean=()=>{for(const node of nodes)try{node.disconnect();}catch{}try{bus.disconnect();}catch{}};
 let timer=setTimeout(clean,(duration+.1)*1000);
 return {duration,stop(){if(stopped)return;stopped=true;clearTimeout(timer);const t=audio.currentTime;bus.gain.cancelScheduledValues(t);bus.gain.setTargetAtTime(0,t,.008);for(const node of nodes)if(node.stop)try{node.stop(t+.04);}catch{}timer=setTimeout(clean,70);}};
}
export function playInterfaceSound(kind='tap'){
 if(!audioAllowed())return;
 const priority=kind==='success'?3:kind==='navigate'?2:1,now=performance.now();
 if(now-lastRequest<(lastPriority===3?220:65)&&priority<=lastPriority)return;
 lastRequest=now;lastPriority=priority;const token=++effectGeneration;
 try{
  if(!ensureAudio())return;
  const start=()=>{if(token!==effectGeneration||!audioAllowed()||context.state!=='running')return;effectActive?.stop();effectActive=scheduleInterfaceSound(context,analyser,kind);effectPlays++;lastEffect=kind;};
  if(context.state==='running')start();else context.resume().then(start).catch(()=>{});
 }catch{/* Controls still work if a device cannot play audio. */}
}

export function scheduleStoneSound(audio,destination,{brief=false,volume=.15}={}){
 const now=audio.currentTime+.012,bus=audio.createGain(),nodes=[];let stopped=false;
 bus.gain.value=volume;bus.connect(destination);
 const note=(at,frequency,length,amplitude)=>{
  [1,2.37,4.91].forEach((ratio,index)=>{
   const oscillator=audio.createOscillator(),envelope=audio.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(frequency*ratio,now+at);oscillator.frequency.exponentialRampToValueAtTime(frequency*ratio*.998,now+at+length);
   const peak=amplitude*[1,.2,.065][index];envelope.gain.setValueAtTime(.00001,now+at);envelope.gain.exponentialRampToValueAtTime(peak,now+at+.008);envelope.gain.exponentialRampToValueAtTime(.00001,now+at+length);
   oscillator.connect(envelope);envelope.connect(bus);oscillator.start(now+at);oscillator.stop(now+at+length+.04);nodes.push(oscillator,envelope);
  });
 };
 note(0,660,brief?.5:1.1,.58);
 if(!brief){
  // A quiet, filtered breeze carries the expanding stone outline.
  const length=Math.ceil(audio.sampleRate*1.35),buffer=audio.createBuffer(1,length,audio.sampleRate),data=buffer.getChannelData(0);let seed=8153,last=0;
  for(let i=0;i<length;i++){seed=(seed*16807)%2147483647;last=(last+.075*(seed/1073741823.5-1))/1.075;data[i]=Math.max(-1,Math.min(1,last))*.12;}
  const air=audio.createBufferSource(),filter=audio.createBiquadFilter(),envelope=audio.createGain();air.buffer=buffer;filter.type='bandpass';filter.Q.value=.55;filter.frequency.setValueAtTime(700,now+.12);filter.frequency.exponentialRampToValueAtTime(2100,now+1.1);
  envelope.gain.setValueAtTime(.00001,now+.12);envelope.gain.linearRampToValueAtTime(.17,now+.7);envelope.gain.exponentialRampToValueAtTime(.00001,now+1.42);air.connect(filter);filter.connect(envelope);envelope.connect(bus);air.start(now+.12);air.stop(now+1.5);nodes.push(air,filter,envelope);
  note(1.18,880,1.35,.29);note(1.68,990,1.28,.23);note(2.15,1320,1.1,.16);
 }
 const duration=brief?.65:3.45;
 const cleanup=()=>{nodes.forEach(node=>{try{node.disconnect();}catch{}});bus.disconnect();};
 let timer=setTimeout(cleanup,(duration+.1)*1000);
 return {duration,stop(){if(stopped)return;stopped=true;clearTimeout(timer);const t=audio.currentTime;bus.gain.cancelScheduledValues(t);bus.gain.setTargetAtTime(0,t,.018);nodes.forEach(node=>{if(node.stop)try{node.stop(t+.08);}catch{}});timer=setTimeout(cleanup,110);}};
}

export function playExplorationSound({brief=false}={}){
 const token=++generation;active?.stop();active=null;
 if(!audioAllowed())return ()=>{};
 try{
  if(!ensureAudio())return ()=>{};
  const start=()=>{if(token!==generation||!audioAllowed()||context.state!=='running')return;active=scheduleStoneSound(context,analyser,{brief,volume:.12});plays++;};
  if(context.state==='running')start();else context.resume().then(start).catch(()=>{});
 }catch{/* The visual experience remains usable when audio is unavailable. */}
 return ()=>{if(token!==generation)return;generation++;active?.stop();active=null;};
}
function stopAll(){generation++;effectGeneration++;active?.stop();active=null;effectActive?.stop();effectActive=null;}
function toggle(){muted=!muted;try{localStorage.setItem(preference,String(muted));}catch{}if(muted)stopAll();paint();if(!muted)playInterfaceSound('select');}
export function bindSoundControls(){
 controls().forEach(button=>{if(!bound.has(button)){button.addEventListener('click',toggle);bound.add(button);}});paint();
 if(!musicBound&&window.agateMusic){musicBound=true;window.agateMusic.audio.addEventListener('volumechange',()=>{const music=window.agateMusic.audio;if(music.muted||music.volume===0)stopAll();});}
}
bindSoundControls();
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAll();});
document.addEventListener('agate-media-start',stopAll);
window.addEventListener('hashchange',event=>{if(event.agateExploration)return;generation++;active?.stop();active=null;});
window.agateSound={getState(){let rms=0;if(analyser){const values=new Float32Array(analyser.fftSize);analyser.getFloatTimeDomainData(values);rms=Math.sqrt(values.reduce((sum,n)=>sum+n*n,0)/values.length);}return{muted,contextState:context?.state||'uncreated',plays,effectPlays,lastEffect,rms};}};
