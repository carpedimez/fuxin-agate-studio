// Validate a simple closed polygon before feeding the sampler and triangulator.
export function normalizeOutline(points){
 if(!Array.isArray(points)||points.length<5||points.length>2000)throw Error('请画出至少五个点的完整外形。');
 const clean=[];for(const p of points){if(!Array.isArray(p)||p.length!==2||!p.every(n=>Number.isFinite(n)&&Math.abs(n)<100))throw Error('轮廓坐标无效。');if(!clean.length||Math.hypot(p[0]-clean.at(-1)[0],p[1]-clean.at(-1)[1])>.015)clean.push([...p]);}
 if(clean.length>5&&Math.hypot(clean[0][0]-clean.at(-1)[0],clean[0][1]-clean.at(-1)[1])<.06)clean.pop();
 // Reduce input uniformly to keep geometry and source layout responsive.
 const out=clean.filter((_,i)=>i%Math.max(1,Math.ceil(clean.length/160))===0);if(out.length<5)throw Error('轮廓太小，请画大一些。');
 const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
 const on=(a,b,p)=>Math.abs(cross(a,b,p))<1e-8&&p[0]>=Math.min(a[0],b[0])-1e-8&&p[0]<=Math.max(a[0],b[0])+1e-8&&p[1]>=Math.min(a[1],b[1])-1e-8&&p[1]<=Math.max(a[1],b[1])+1e-8;
 for(let i=0;i<out.length;i++)for(let j=i+2;j<out.length;j++){if(i===0&&j===out.length-1)continue;const a=out[i],b=out[(i+1)%out.length],c=out[j],d=out[(j+1)%out.length];if((cross(a,b,c)*cross(a,b,d)<0&&cross(c,d,a)*cross(c,d,b)<0)||on(a,b,c)||on(a,b,d)||on(c,d,a)||on(c,d,b))throw Error('线条有交叉或重叠，请画一个不交叉的闭合外形。');}
 const xs=out.map(p=>p[0]),ys=out.map(p=>p[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),span=Math.max(maxX-minX,maxY-minY);
 let area=0;out.forEach((p,i)=>{const q=out[(i+1)%out.length];area+=p[0]*q[1]-q[0]*p[1];});if(span<.15||Math.abs(area)<span*span*.08)throw Error('轮廓面积太小，请画一个有宽度的外形。');
 return out.map(([x,y])=>[(x-(minX+maxX)/2)/span*1.8,(y-(minY+maxY)/2)/span*1.8]);
}
