import media from './assets/home-film/playback.json';
const item=media.smooth1080,url=new URL(`./assets/home-film/${item.file}`,document.baseURI).href;
const state={received:0,total:item.bytes,complete:false,source:'network',url:null};let task=null;
const notify=()=>window.dispatchEvent(new CustomEvent('agate:film-progress',{detail:{...state}}));
async function download(force=false){
 if(state.url&&!force)return state;
 if(task)return task;
 task=(async()=>{
  state.received=0;state.complete=false;state.source='network';notify();
  let cache;try{cache=await caches.open('agate-smooth1080-v1');}catch{}
  if(cache&&!force){try{const hit=await cache.match(url);if(hit){const blob=await hit.blob();if(blob.size===item.bytes){state.source='disk-cache';state.received=blob.size;state.complete=true;state.url=URL.createObjectURL(blob);notify();return state;}await cache.delete(url);}}catch{}}
  const abort=new AbortController();let timer;const reset=()=>{clearTimeout(timer);timer=setTimeout(()=>abort.abort(),25000);};
  let blob;
  try{
   reset();const response=await fetch(url,{priority:'high',signal:abort.signal});if(!response.ok)throw Error('Video unavailable');
   if(response.body){const reader=response.body.getReader(),chunks=[];while(true){const {done,value}=await reader.read();if(done)break;chunks.push(value);state.received+=value.byteLength;reset();notify();}blob=new Blob(chunks,{type:'video/mp4'});}else{blob=await response.blob();state.received=blob.size;}
   if(blob.size!==item.bytes)throw Error('Incomplete video');
  }finally{clearTimeout(timer);}
  if(cache)cache.put(url,new Response(blob,{headers:{'Content-Type':'video/mp4'}})).catch(()=>{});
  if(state.url)URL.revokeObjectURL(state.url);state.url=URL.createObjectURL(blob);state.complete=true;notify();return state;
 })();
 try{return await task;}finally{task=null;}
}
window.agateFilmLoader={state,load:download};
if((!location.hash||location.hash==='#home')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)download().catch(()=>{});
