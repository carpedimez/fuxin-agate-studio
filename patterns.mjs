export const patternLibrary=[
 {id:'blossom',name:'五瓣花',caption:'给纹色添一朵小花'},
 {id:'cloud',name:'流云',caption:'把弧线连成一片云'},
 {id:'waves',name:'水波',caption:'三重涟漪，疏密有致'},
 {id:'bamboo',name:'竹影',caption:'细枝与叶，顺势而生'},
 {id:'stars',name:'星芒',caption:'一点星光，几何点缀'},
 {id:'sunrise',name:'朝阳',caption:'从山线里升起的光'},
 {id:'fan',name:'折扇',caption:'展开一面自己的小景'},
 {id:'ridge',name:'叠嶂',caption:'三道山线，留一点远意'}
];
export function patternLines(id){
 const lines=[],add=p=>lines.push(p),curve=(fn,n=48)=>Array.from({length:n+1},(_,i)=>fn(i/n));
 if(id==='blossom'){for(let k=0;k<5;k++){const a=k*Math.PI*2/5;add(curve(t=>{const q=t*Math.PI*2,r=.28+.25*Math.cos(q);return[Math.cos(a)*r-Math.sin(a)*Math.sin(q)*.17,Math.sin(a)*r+Math.cos(a)*Math.sin(q)*.17];}));}add(curve(t=>[Math.cos(t*Math.PI*2)*.08,Math.sin(t*Math.PI*2)*.08]));}
 else if(id==='cloud'){add(curve(t=>{const a=t*Math.PI*2,r=.45+.08*Math.cos(a*5);return[Math.cos(a)*r*1.3,Math.sin(a)*r*.65];},96));add(curve(t=>[-.48+t*.96,.18+Math.sin(t*Math.PI*2)*.06]));}
 else if(id==='waves'){for(let k=0;k<3;k++)add(curve(t=>[-.7+t*1.4,(k-1)*.23+Math.sin(t*Math.PI*3)*.09]));}
 else if(id==='bamboo'){add([[-.07,.65],[.03,-.65]]);for(let k=0;k<3;k++){const y=-.4+k*.35;add([[-.10,y],[.10,y]]);for(const side of [-1,1]){add([[0,y],[side*.48,y-.24],[side*.22,y-.04],[0,y]]);}}}
 else if(id==='stars'){for(const [cx,cy,r]of [[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])add(Array.from({length:9},(_,i)=>{const a=i/8*Math.PI*2-Math.PI/2,s=i%2?r*.24:r;return[cx+Math.cos(a)*s,cy+Math.sin(a)*s];}));}
 else if(id==='sunrise'){add(curve(t=>[Math.cos(Math.PI+t*Math.PI)*.30,-.02+Math.sin(Math.PI+t*Math.PI)*.30],32));add([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let k=0;k<7;k++){const a=Math.PI+k/6*Math.PI;add([[Math.cos(a)*.4,Math.sin(a)*.4],[Math.cos(a)*.53,Math.sin(a)*.53]]);}add([[-.58,.35],[.58,.35]]);}
 else if(id==='fan'){add(curve(t=>[Math.cos(Math.PI*1.12+t*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+t*Math.PI*.76)*.88]));for(let k=0;k<=8;k++){const a=Math.PI*1.12+k/8*Math.PI*.76;add([[0,.5],[Math.cos(a)*.72,.5+Math.sin(a)*.88]]);}}
 else if(id==='ridge'){for(let j=0;j<3;j++)add([[-.7,.2+j*.18],[-.35,-.4+j*.18],[-.1,-.08+j*.18],[.28,-.5+j*.18],[.7,.2+j*.18]]);}
 else throw Error('未知纹样');return lines;
}
export function transformPattern(id,{x=0,y=0,scale=.75,angle=0}={},width=.018,depth=.6){const a=angle*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return patternLines(id).map(points=>({width,depth,points:points.map(([u,v])=>[x+(u*c-v*s)*scale,y+(u*s+v*c)*scale])}));}
// Split at the outline; the saved strokes contain only visible, bounded points.
export function clipStrokes(strokes,inside){const result=[];for(const stroke of strokes){let run=[];const flush=()=>{if(run.length>1)result.push({...stroke,points:run});run=[];};for(const point of stroke.points){if(point.every(n=>Math.abs(n)<=1)&&inside(...point))run.push(point);else flush();}flush();}return result;}
