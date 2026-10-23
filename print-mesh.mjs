import {ShapeUtils,Vector2} from './vendor/three.module.js';

const KEY_BASE=1048576,MAX_FACES=400000,MAX_VERTICES=200000;
const pause=()=>new Promise(resolve=>setTimeout(resolve,0));
const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
const key=(a,b)=>Math.min(a,b)*KEY_BASE+Math.max(a,b);
const finite=v=>Number.isFinite(v);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function fail(message){throw new Error(message);}
function cancelled(signal){if(signal?.aborted)throw new DOMException('已取消生成','AbortError');}

export function cleanPrintOutline(input){
 if(!Array.isArray(input)||input.length<3||input.length>1000)fail('轮廓需要至少三个点，请回到构形调整。');
 let points=[];
 for(const p of input){
  if(!Array.isArray(p)||p.length<2||!finite(p[0])||!finite(p[1])||Math.max(Math.abs(p[0]),Math.abs(p[1]))>2)fail('轮廓数据无效，请重新选择外形。');
  if(!points.length||Math.hypot(p[0]-points.at(-1)[0],p[1]-points.at(-1)[1])>1e-8)points.push([p[0],p[1]]);
 }
 if(points.length>1&&Math.hypot(points[0][0]-points.at(-1)[0],points[0][1]-points.at(-1)[1])<1e-8)points.pop();
 let changed=true;
 while(changed&&points.length>3){
  changed=false;
  for(let i=0;i<points.length;i++){
   const a=points[(i+points.length-1)%points.length],b=points[i],c=points[(i+1)%points.length];
   if(Math.abs(cross(a,b,c))<1e-11&&(b[0]-a[0])*(b[0]-c[0])+(b[1]-a[1])*(b[1]-c[1])<=0){points.splice(i,1);changed=true;break;}
  }
 }
 if(points.length<3)fail('轮廓没有足够的面积，请重新构形。');
 const on=(a,b,p)=>Math.abs(cross(a,b,p))<1e-10&&p[0]>=Math.min(a[0],b[0])-1e-10&&p[0]<=Math.max(a[0],b[0])+1e-10&&p[1]>=Math.min(a[1],b[1])-1e-10&&p[1]<=Math.max(a[1],b[1])+1e-10;
 for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){
  if(j===i+1||(i===0&&j===points.length-1))continue;
  const a=points[i],b=points[(i+1)%points.length],c=points[j],d=points[(j+1)%points.length];
  if((cross(a,b,c)*cross(a,b,d)<0&&cross(c,d,a)*cross(c,d,b)<0)||on(a,b,c)||on(a,b,d)||on(c,d,a)||on(c,d,b))fail('手绘轮廓存在交叉或重叠，请回到构形修正后再打印。');
 }
 const area=points.reduce((sum,a,i)=>{const b=points[(i+1)%points.length];return sum+a[0]*b[1]-a[1]*b[0];},0)/2;
 if(Math.abs(area)<.002)fail('轮廓过窄，请选择面积更完整的外形。');
 return points;
}

export function printSettings(outline,{size=50,thickness=4,depth=.6,pitch=.4}={}){
 if(![size,thickness,depth,pitch].every(finite)||size<20||size>100||thickness<2||thickness>12||depth<0||depth>Math.min(1.2,thickness-1.2)||pitch<.15||pitch>.8)fail('打印参数超出范围，请检查尺寸、厚度和刻线深度。');
 const xs=outline.map(p=>p[0]),ys=outline.map(p=>p[1]);
 const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),span=Math.max(maxX-minX,maxY-minY);
 if(!finite(span)||span<.01)fail('作品轮廓过小，请重新构形。');
 return {size,thickness,depth,pitch,scale:size/span,cx:(minX+maxX)/2,cy:(minY+maxY)/2,width:(maxX-minX)*size/span,height:(maxY-minY)*size/span,bevel:Math.min(.35,thickness*.12)};
}

// Conforming refinement shares every split edge. Both surfaces and the side
// wall then use the same boundary vertices, so engraving cannot open a seam.
export async function buildPrintMesh(input,options={},sampleGroove=()=>0,{signal,onProgress=()=>{}}={}){
 const outline=cleanPrintOutline(input),settings=printSettings(outline,options);
 const {scale,cx,cy,pitch,thickness,depth,bevel}=settings;
 let verts=outline.map(([x,y])=>[(x-cx)*scale,-(y-cy)*scale]);
 const perimeter=verts.map(p=>[...p]);
 let faces=ShapeUtils.triangulateShape(verts.map(([x,y])=>new Vector2(x,y)),[]).flat();
 if(faces.length<3)fail('无法生成这个轮廓的实体，请重新构形。');
 for(let i=0;i<faces.length;i+=3)if(cross(verts[faces[i]],verts[faces[i+1]],verts[faces[i+2]])<0)[faces[i+1],faces[i+2]]=[faces[i+2],faces[i+1]];
 for(let pass=0;pass<14;pass++){
  cancelled(signal);const mids=new Map(),next=[];let split=false;
  const midpoint=(a,b)=>{
   const id=key(a,b);if(mids.has(id))return mids.get(id);
   const va=verts[a],vb=verts[b];
   if(Math.hypot(va[0]-vb[0],va[1]-vb[1])<=pitch)return -1;
   if(verts.length>=MAX_VERTICES)fail('模型细节过密，请缩小打印尺寸后再试。');
   const v=verts.length;verts.push([(va[0]+vb[0])/2,(va[1]+vb[1])/2]);mids.set(id,v);return v;
  };
  for(let i=0;i<faces.length;i+=3){
   const v=[faces[i],faces[i+1],faces[i+2]],m=[midpoint(v[0],v[1]),midpoint(v[1],v[2]),midpoint(v[2],v[0])],count=m.filter(n=>n>=0).length;
   if(!count)next.push(...v);
   else if(count===3)next.push(v[0],m[0],m[2],m[0],v[1],m[1],m[2],m[1],v[2],m[0],m[1],m[2]);
   else if(count===1){const k=m.findIndex(n=>n>=0),a=v[k],b=v[(k+1)%3],c=v[(k+2)%3],ab=m[k];next.push(a,ab,c,ab,b,c);}
   else{const k=m.findIndex((n,j)=>n>=0&&m[(j+1)%3]>=0),a=v[k],b=v[(k+1)%3],c=v[(k+2)%3],ab=m[k],bc=m[(k+1)%3];next.push(b,bc,ab,a,ab,c,ab,bc,c);}
   split ||= count>0;
   if(next.length/3>MAX_FACES)fail('模型细节过密，请缩小打印尺寸后再试。');
   if(i&&i%24576===0){cancelled(signal);await pause();}
  }
  faces=next;onProgress(Math.min(.65,.08+pass*.07));await pause();
  if(!split)break;
  if(pass===13)fail('轮廓细节无法收敛，请简化手绘外形后再试。');
 }
 // Ear clipping may omit collinear source vertices. Compact before validation.
 const remap=new Map(),used=[];
 for(let i=0;i<faces.length;i++){const old=faces[i];if(!remap.has(old)){remap.set(old,used.length);used.push(verts[old]);}faces[i]=remap.get(old);}
 verts=used;
 const n=verts.length,positions=new Float32Array(n*6),edges=new Map();let minimum=Infinity,maximum=-Infinity;
 for(let i=0;i<n;i++){
  const [x,y]=verts[i];let distance=bevel;
  for(let j=0;j<perimeter.length;j++){
   const a=perimeter[j],b=perimeter[(j+1)%perimeter.length],dx=b[0]-a[0],dy=b[1]-a[1],t=clamp(((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy),0,1);
   distance=Math.min(distance,Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy));
  }
  const sampled=sampleGroove(x/scale+cx,cy-y/scale);
  if(!finite(sampled))fail('刻线数据无效，请重新生成。');
  const z=Math.max(1.2,thickness-bevel*(1-distance/bevel)-depth*clamp(sampled,0,1));
  positions.set([x,y,z],i*3);positions.set([x,y,0],(n+i)*3);minimum=Math.min(minimum,z);maximum=Math.max(maximum,z);
  if(i&&i%4096===0){cancelled(signal);onProgress(.65+.18*i/n);await pause();}
 }
 for(let i=0;i<faces.length;i+=3)for(const [a,b] of [[faces[i],faces[i+1]],[faces[i+1],faces[i+2]],[faces[i+2],faces[i]]]){const k=key(a,b),edge=edges.get(k);if(edge)edge.count++;else edges.set(k,{a,b,count:1});}
 const indices=[];
 for(let i=0;i<faces.length;i+=3){const [a,b,c]=faces.slice(i,i+3);indices.push(a,b,c,a+n,c+n,b+n);}
 for(const {a,b,count}of edges.values()){
  if(count===1)indices.push(a+n,b+n,b,b,a,a+n);
  else if(count!==2)fail('模型存在重叠面，请调整轮廓。');
 }
 const mesh={positions,indices:Uint32Array.from(indices),settings,minimumThickness:minimum,dimensions:[settings.width,settings.height,maximum],triangleCount:indices.length/3};
 onProgress(.9);await pause();cancelled(signal);mesh.validation=validatePrintMesh(mesh);onProgress(1);return mesh;
}

export function validatePrintMesh({positions,indices}){
 const edges=new Map(),vertices=new Set();let volume=0,minZ=Infinity,maxZ=-Infinity;
 if(positions.length%3||indices.length%3||!indices.length)fail('打印模型的数据不完整。');
 const point=i=>[positions[i*3],positions[i*3+1],positions[i*3+2]];
 for(let i=0;i<positions.length;i++){if(!finite(positions[i]))fail('打印模型包含无效坐标。');if(i%3===2){minZ=Math.min(minZ,positions[i]);maxZ=Math.max(maxZ,positions[i]);}}
 for(let i=0;i<indices.length;i+=3){
  const ids=[indices[i],indices[i+1],indices[i+2]];
  if(ids.some(v=>v>=positions.length/3)||new Set(ids).size!==3)fail('打印模型包含无效面。');
  const [a,b,c]=ids.map(point),ab=b.map((v,j)=>v-a[j]),ac=c.map((v,j)=>v-a[j]);
  const normal=[ab[1]*ac[2]-ab[2]*ac[1],ab[2]*ac[0]-ab[0]*ac[2],ab[0]*ac[1]-ab[1]*ac[0]];
  if(Math.hypot(...normal)<1e-10)fail('轮廓含有过于细小的面，请简化后再试。');
  volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])+a[1]*(b[2]*c[0]-b[0]*c[2])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
  for(const v of ids)vertices.add(v);
  for(const [a,b]of [[ids[0],ids[1]],[ids[1],ids[2]],[ids[2],ids[0]]]){const k=key(a,b),r=edges.get(k)||{count:0,direction:0};r.count++;r.direction+=a<b?1:-1;edges.set(k,r);}
 }
 if([...edges.values()].some(e=>e.count!==2||e.direction!==0))fail('实体尚未闭合，请重新生成后再下载。');
 const euler=vertices.size-edges.size+indices.length/3;
 if(euler!==2||volume<=0||minZ!==0||maxZ<1.2)fail('实体校验未通过，请调整外形后再试。');
 return {watertight:true,windingConsistent:true,euler,volume,units:'mm'};
}

export function binarySTL(mesh){
 const {positions,indices}=mesh,count=indices.length/3,buffer=new ArrayBuffer(84+count*50),view=new DataView(buffer);
 const header=new TextEncoder().encode('Stone Within | printable body | coordinate unit: mm | no color or texture');
 new Uint8Array(buffer,0,80).set(header.subarray(0,80));view.setUint32(80,count,true);
 let offset=84;
 for(let i=0;i<indices.length;i+=3){
  const a=indices[i]*3,b=indices[i+1]*3,c=indices[i+2]*3,ux=positions[b]-positions[a],uy=positions[b+1]-positions[a+1],uz=positions[b+2]-positions[a+2],vx=positions[c]-positions[a],vy=positions[c+1]-positions[a+1],vz=positions[c+2]-positions[a+2];
  let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const length=Math.hypot(nx,ny,nz);nx/=length;ny/=length;nz/=length;
  for(const value of [nx,ny,nz,...positions.subarray(a,a+3),...positions.subarray(b,b+3),...positions.subarray(c,c+3)]){view.setFloat32(offset,value,true);offset+=4;}
  view.setUint16(offset,0,true);offset+=2;
 }
 return buffer;
}
