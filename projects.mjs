import {normalizeOutline} from './outline.mjs';
export const kinds=['fruit','leaf','mountain','drop','round','heart','custom'];
export function validateProject(input){
 const p=structuredClone(input),bad=()=>{throw Error('方案文件不完整或参数超出范围，请使用本工坊导出的方案。');};
 if(!p||p.format!=='agate-project'||![3,4].includes(p.version)||!kinds.includes(p.kind)||!['procedural','bands','nodule','custom'].includes(p.sample))bad();
 for(const [key,min,max]of [['x',.03,.97],['y',.03,.97],['scale',.08,.42],['angle',-180,180]])if(!Number.isFinite(p.pose?.[key])||p.pose[key]<min||p.pose[key]>max)bad();
 if(p.kind==='custom')p.outline=normalizeOutline(p.outline);
 if(!Number.isInteger(p.color)||p.color<0||p.color>4||!Number.isFinite(p.polish)||p.polish<0||p.polish>1||!['left','right'].includes(p.light)||!Number.isFinite(p.thickness)||p.thickness<.08||p.thickness>.65)bad();
 if(typeof p.removeBackground!=='boolean'||!Array.isArray(p.target)||p.target.length>40000||p.target.length<100||!Number.isInteger(p.targetWidth)||!Number.isInteger(p.targetHeight)||p.targetWidth<1||p.targetHeight<1||p.targetWidth>200||p.targetHeight>200||p.targetWidth*p.targetHeight!==p.target.length||p.target.some(n=>n!==0&&n!==1))bad();
 if(!Array.isArray(p.strokes)||p.strokes.length>1000)bad();let total=0;
 for(const s of p.strokes){if(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>10000)bad();total+=s.points.length;for(const pt of s.points)if(!Array.isArray(pt)||pt.length!==2||pt.some(n=>!Number.isFinite(n)||Math.abs(n)>1.1))bad();}if(total>100000)bad();
 if(p.sample==='custom'&&(typeof p.sourceImage!=='string'||p.sourceImage.length>2500000||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(p.sourceImage)))bad();
 if(p.inscription!=null){const t=p.inscription;if(typeof t.text!=='string'||Array.from(t.text).length>8||/[\u0000-\u001f]/.test(t.text)||!['serif','sans'].includes(t.font)||typeof t.vertical!=='boolean')bad();for(const [key,min,max]of [['x',-.85,.85],['y',-.85,.85],['size',.08,.35],['angle',-180,180]])if(!Number.isFinite(t[key])||t[key]<min||t[key]>max)bad();}else p.inscription=null;
 if(p.presentation!=null){if(!['stone','pendant','stand'].includes(p.presentation.style)||!['ink','paper','night'].includes(p.presentation.backdrop)||!['cinnabar','ink','jade'].includes(p.presentation.cord))bad();}else p.presentation={style:'stone',backdrop:'ink',cord:'cinnabar'};
 if(p.workTitle!=null&&(typeof p.workTitle!=='string'||Array.from(p.workTitle).length>24||/[\u0000-\u001f]/.test(p.workTitle)))bad();p.workTitle=p.workTitle||'';
 if(p.inspiration!=null&&(typeof p.inspiration.id!=='string'||p.inspiration.id.length>40||typeof p.inspiration.title!=='string'||p.inspiration.title.length>80))bad();
 return p;
}
