import media from './assets/home-film/playback.json';
const make=(kind,item)=>({kind,item,received:0,total:item.bytes,complete:false,source:'network',url:null,task:null});
const opening=make('opening',media.opening1080),full=make('full',media.quality1080);let entry=opening;
const key=s=>new URL(`./assets/home-film/${s.item.file}`,document.baseURI).href;
const notify=s=>window.dispatchEvent(new CustomEvent('agate:film-progress',{detail:{kind:s.kind,received:s.received,total:s.total,complete:s.complete,source:s.source}}));
async function storage(){try{return await caches.open('agate-hq1080-v1');}catch{return null;}}
function complete(s,blob,source){s.received=blob.size;s.complete=true;s.source=source;if(s.url)URL.revokeObjectURL(s.url);s.url=URL.createObjectURL(blob);notify(s);return s;}
async function cached(s,cache){if(s.url)return s;if(!cache)return null;try{const hit=await cache.match(key(s));if(hit){const b=await hit.blob();if(b.size===s.item.bytes)return complete(s,b,'disk-cache');await cache.delete(key(s));}}catch{}return null;}
async function download(s,force=false){
 if(s.url&&!force)return s;if(s.task)return s.task;
 s.task=(async()=>{
  const cache=await storage();if(!force){const hit=await cached(s,cache);if(hit)return hit;}
  s.received=0;s.complete=false;s.source='network';notify(s);
  const abort=new AbortController();let timer;const reset=()=>{clearTimeout(timer);timer=setTimeout(()=>abort.abort(),30000);};let blob;
  try{reset();const response=await fetch(key(s),{priority:s.kind==='opening'?'high':'low',signal:abort.signal});if(!response.ok)throw Error('Video unavailable');
   if(response.body){const reader=response.body.getReader(),chunks=[];while(true){const {done,value}=await reader.read();if(done)break;chunks.push(value);s.received+=value.byteLength;reset();notify(s);}blob=new Blob(chunks,{type:'video/mp4'});}else blob=await response.blob();
   if(blob.size!==s.item.bytes)throw Error('Incomplete video');
  }finally{clearTimeout(timer);}
  if(cache)cache.put(key(s),new Response(blob,{headers:{'Content-Type':'video/mp4'}})).catch(()=>{});
  return complete(s,blob,'network');
 })();try{return await s.task;}finally{s.task=null;}
}
async function load(force=false){
 if(entry.url&&!force)return entry;
 if(!force){const hit=await cached(full,await storage());if(hit){entry=full;return full;}}
 entry=opening;return download(opening,force);
}
window.agateFilmLoader={get state(){return entry},get fullState(){return full},load,loadFull:()=>download(full)};
if((!location.hash||location.hash==='#home')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)load().catch(()=>{});
