import {fieldActivities,fieldPhotos} from './field-learning-data.mjs';
const key='agate-field-discoveries-v1';
export const escapeDiscovery=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const point=p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&n>=0&&n<=1);
const text=v=>typeof v==='string'?v.replace(/[\u0000-\u0008\u000b-\u001f]/g,'').slice(0,160):'';
export function normalizeDiscovery(input){
 if(!input||typeof input!=='object'||typeof input.clue!=='string'||!Object.hasOwn(fieldActivities,input.clue))return null;const a=fieldActivities[input.clue];
 const row={clue:input.clue,reason:text(input.reason),createdAt:typeof input.createdAt==='string'&&Number.isFinite(Date.parse(input.createdAt))?input.createdAt:new Date().toISOString(),updatedAt:typeof input.updatedAt==='string'&&Number.isFinite(Date.parse(input.updatedAt))?input.updatedAt:new Date().toISOString()};
 if(a.type==='point'){
  if(!a.photos.includes(input.photo))return null;const target=a.targets[input.photo].find(t=>t.id===input.target);if(!target||!point(input.point))return null;
  if(((input.point[0]-target.x)/target.rx)**2+((input.point[1]-target.y)/target.ry)**2>1.7)return null;
  Object.assign(row,{photo:input.photo,target:target.id,point:[...input.point]});
 }else if(a.type==='crop'){
  if(!a.choices.some(c=>c.id===input.choice))return null;Object.assign(row,{photo:'bands',choice:input.choice});
 }else if(a.type==='connect'){
  if(!Array.isArray(input.pairs))return null;row.pairs=[...new Set(input.pairs.filter(id=>a.questions.some(q=>q.id===id)))];if(!row.pairs.length)return null;row.photo=a.questions.find(q=>q.id===row.pairs.at(-1)).photo;
 }else if(a.type==='order'){
  if(!Array.isArray(input.order)||!a.steps.every((s,i)=>input.order[i]===s.id)||input.order.length!==4)return null;Object.assign(row,{photo:'craft',order:[...input.order]});
 }else{
  if(!Array.isArray(input.colors)||input.colors.length!==3||input.colors.some(c=>!c||!/^#[0-9a-f]{6}$/i.test(c.hex)||!point(c.point)))return null;
  Object.assign(row,{photo:'water',colors:input.colors.map(c=>({hex:c.hex.toLowerCase(),point:[...c.point]})),main:Number.isInteger(input.main)&&input.main>=0&&input.main<3?input.main:0});
 }
 return row;
}
export function readDiscoveries(){try{const data=JSON.parse(localStorage.getItem(key));if(data?.version!==1||!Array.isArray(data.rows))return[];const seen=new Set();return data.rows.slice(0,30).map(normalizeDiscovery).filter(r=>r&&!seen.has(r.clue)&&seen.add(r.clue));}catch{return[];}}
export function getDiscovery(clue){return readDiscoveries().find(r=>r.clue===clue)||null;}
export function saveDiscovery(input){
 const row=normalizeDiscovery(input);if(!row)return{ok:false,message:'请先完成一次照片观察或选择。'};
 const rows=readDiscoveries(),old=rows.find(r=>r.clue===row.clue);row.createdAt=old?.createdAt||row.createdAt;row.updatedAt=new Date().toISOString();
 try{localStorage.setItem(key,JSON.stringify({version:1,rows:[row,...rows.filter(r=>r.clue!==row.clue)]}));}catch{return{ok:false,message:'发现尚未保存，浏览器空间可能不足。可以重试，或先下载已有手册。'};}
 document.dispatchEvent(new CustomEvent('agate-discoveries-change',{detail:{clue:row.clue,operation:'save'}}));
 if(!old)document.dispatchEvent(new CustomEvent('agate-feedback',{detail:{kind:'success'}}));
 return{ok:true,row,first:!old};
}
export function removeDiscovery(clue){try{localStorage.setItem(key,JSON.stringify({version:1,rows:readDiscoveries().filter(r=>r.clue!==clue)}));document.dispatchEvent(new CustomEvent('agate-discoveries-change',{detail:{clue,operation:'remove'}}));return true;}catch{return false;}}
export function describeDiscovery(row){
 const a=fieldActivities[row.clue];let title='',action='',feedback='',trade='';
 if(a.type==='point'){const t=a.targets[row.photo].find(t=>t.id===row.target);title=t.label;action=`我在${fieldPhotos[row.photo].name}上指出了“${t.label}”。`;feedback=t.feedback;}
 else if(a.type==='crop'){const c=a.choices.find(c=>c.id===row.choice);title=c.label;action=`我把同一块材料的取形位置放在“${c.label}”。`;feedback=c.gain;trade=c.trade;}
 else if(a.type==='connect'){title=`连接了 ${row.pairs.length} 处观察现场`;action=row.pairs.map(id=>{const q=a.questions.find(q=>q.id===id);return`${q.label} → ${q.answer}`;}).join('；');feedback='从材料的特征追问到制作的判断，再到展示与使用，作品把不同的现场联系起来。';}
 else if(a.type==='order'){title='从观料到成器的顺序';action=a.steps.map(s=>s.label).join(' → ');feedback='材料为构思提供依据，构思帮助安排雕琢，润饰再把纹色与整体表达带到观看中。实际工艺会随作品调整。';}
 else{title='从湖景采下的三种颜色';action=`我从实景的三个位置取色，并让第 ${row.main+1} 色成为主色。`;feedback='主色占六成，另外两色分别占三成和一成。面积变化会改变同一组颜色的整体印象。';}
 return{title,action,feedback,trade,photo:fieldPhotos[row.photo],activity:a};
}
export function discoveryMarks(row){
 const a=fieldActivities[row.clue];
 if(a.type==='point')return`<circle cx="${row.point[0]*100}" cy="${row.point[1]*100}" r="2.3"/>`;
 if(a.type==='palette')return row.colors.map((c,i)=>`<g><circle cx="${c.point[0]*100}" cy="${c.point[1]*100}" r="2.5"/><text x="${c.point[0]*100}" y="${c.point[1]*100+.8}">${i+1}</text></g>`).join('');
 if(a.type==='crop'){const c=a.choices.find(c=>c.id===row.choice);return`<ellipse cx="${c.x*100}" cy="${c.y*100}" rx="${c.r*1481/1800*100}" ry="${c.r*100}"/>`;}
 return'';
}
export function discoveryPicture(row){const p=fieldPhotos[row.photo];return`<figure class="discovery-picture"><img src="${p.src}" alt="${escapeDiscovery(p.name)}" loading="lazy"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${discoveryMarks(row)}</svg></figure>`;}
export async function discoveryImage(row){
 const image=new Image();image.src=fieldPhotos[row.photo].src;await image.decode();const k=Math.min(1,900/Math.max(image.naturalWidth,image.naturalHeight)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*k));canvas.height=Math.max(1,Math.round(image.naturalHeight*k));const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0,canvas.width,canvas.height);
 const marks=row.colors?.map((c,i)=>({point:c.point,label:String(i+1)}))||(row.point?[{point:row.point,label:''}]:[]);
 for(const m of marks){const x=m.point[0]*canvas.width,y=m.point[1]*canvas.height;ctx.beginPath();ctx.arc(x,y,12,0,Math.PI*2);ctx.fillStyle='#fff9df';ctx.fill();ctx.strokeStyle='#843f27';ctx.lineWidth=3;ctx.stroke();if(m.label){ctx.fillStyle='#593323';ctx.font='bold 15px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(m.label,x,y);}}
 if(row.choice){const c=fieldActivities.color.choices.find(c=>c.id===row.choice);ctx.beginPath();ctx.arc(c.x*canvas.width,c.y*canvas.height,c.r*canvas.height,0,Math.PI*2);ctx.strokeStyle='#fff7d6';ctx.lineWidth=5;ctx.shadowColor='#402716';ctx.shadowBlur=4;ctx.stroke();}
 return canvas.toDataURL('image/jpeg',.88);
}
