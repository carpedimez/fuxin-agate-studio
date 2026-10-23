import test from 'node:test';
import assert from 'node:assert/strict';
import {motifOutline} from '../core.mjs';
import {buildPrintMesh,binarySTL,cleanPrintOutline,validatePrintMesh} from '../print-mesh.mjs';

// Independent STL reader audits welded float coordinates rather than trusting
// the generator's indices or its own validation result.
function auditSTL(buffer){
 const d=new DataView(buffer),count=d.getUint32(80,true),edges=new Map(),points=new Map();let volume=0;
 assert.equal(buffer.byteLength,84+count*50);
 const xyz=[];let lowest=Infinity,highest=-Infinity;
 for(let t=0;t<count;t++){
  const p=[];
  for(let v=0;v<3;v++){
   const a=Array.from({length:3},(_,i)=>d.getFloat32(84+t*50+12+v*12+i*4,true));assert.ok(a.every(Number.isFinite));
   const id=a.map(n=>Object.is(n,-0)?0:n).join(',');if(!points.has(id))points.set(id,points.size);p.push({a,id:points.get(id)});
   lowest=Math.min(lowest,a[2]);highest=Math.max(highest,a[2]);xyz.push(a);
  }
  assert.equal(new Set(p.map(x=>x.id)).size,3);
  const [a,b,c]=p.map(x=>x.a);
  volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])+a[1]*(b[2]*c[0]-b[0]*c[2])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
  for(const [i,j]of [[0,1],[1,2],[2,0]]){const a=p[i].id,b=p[j].id,k=[Math.min(a,b),Math.max(a,b)].join(':');const e=edges.get(k)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(k,e);}
 }
 assert.ok([...edges.values()].every(([n,sign])=>n===2&&sign===0));assert.equal(points.size-edges.size+count,2);assert.ok(volume>0);assert.equal(lowest,0);
 return {volume,highest,xyz};
}

for(const kind of ['mountain','leaf','fruit','round','drop','heart'])test(`${kind}: enclosed millimetre STL with consistent outward winding`,async()=>{
 const mesh=await buildPrintMesh(motifOutline(kind),{size:30,thickness:3,depth:.6,pitch:.4},(x,y)=>Math.abs(x-.2)<.04&&y<.4?.8:0);
 const audit=auditSTL(binarySTL(mesh)),bounds=audit.xyz.reduce((r,p)=>[Math.min(r[0],p[0]),Math.max(r[1],p[0]),Math.min(r[2],p[1]),Math.max(r[3],p[1])],[Infinity,-Infinity,Infinity,-Infinity]);
 assert.ok(Math.abs(Math.max(bounds[1]-bounds[0],bounds[3]-bounds[2])-30)<.00001);
 assert.ok(Math.abs(audit.volume-mesh.validation.volume)<.0001);
 assert.ok(mesh.minimumThickness>=1.2&&audit.highest<=3.00001);
});

test('engraving changes real surface height and removes volume without opening the solid',async()=>{
 const outline=[[-1,-1],[1,-1],[1,1],[-1,1]],options={size:20,thickness:2,depth:.8,pitch:.4};
 const plain=await buildPrintMesh(outline,options),carved=await buildPrintMesh(outline,options,()=>1);
 assert.ok(plain.validation.volume>carved.validation.volume+200);assert.ok(carved.minimumThickness>=1.2);auditSTL(binarySTL(carved));
});

test('closed/repeated and collinear hand outlines are cleaned, concavity is retained',async()=>{
 const outline=[[-1,1],[-1,0],[-1,-1],[0,-1],[0,0],[1,0],[1,1],[-1,1],[-1,1]];
 assert.equal(cleanPrintOutline(outline).length,6);
 const mesh=await buildPrintMesh(outline,{size:20,thickness:3,pitch:.5});auditSTL(binarySTL(mesh));
});

test('self crossings, non-finite points and invalid dimensions fail before download',async()=>{
 assert.throws(()=>cleanPrintOutline([[-1,-1],[1,1],[-1,1],[1,-1]]),/交叉/);
 assert.throws(()=>cleanPrintOutline([[0,0],[1,0],[NaN,1]]),/无效/);
 await assert.rejects(buildPrintMesh(motifOutline('round'),{size:0}),/参数/);
 await assert.rejects(buildPrintMesh(motifOutline('round'),{thickness:2,depth:1.2}),/参数/);
});

test('cancelled or broken meshes cannot be reported as valid',async()=>{
 const abort=new AbortController();abort.abort();await assert.rejects(buildPrintMesh(motifOutline('leaf'),{},()=>0,{signal:abort.signal}),e=>e.name==='AbortError');
 const mesh=await buildPrintMesh(motifOutline('mountain'),{size:20,pitch:.5});
 assert.throws(()=>validatePrintMesh({...mesh,indices:mesh.indices.slice(3)}),/闭合/);
});

test('largest supported print has bounded detail density and valid geometry',async()=>{
 const mesh=await buildPrintMesh(motifOutline('round'),{size:100,thickness:12,depth:1.2,pitch:100/150});
 assert.equal(mesh.settings.size,100);assert.ok(mesh.triangleCount<800000);assert.ok(mesh.validation.watertight);
});
