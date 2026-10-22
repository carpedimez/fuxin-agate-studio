import {atlasNodes} from './atlas-data.mjs';
export const atlasIcons={stone:'M7 3 16 4 22 13 17 22 6 21 2 12Zm4 4 5 1 3 6-4 5-6-2-2-6Z',color:'M12 2C5 2 2 7 2 12s4 10 9 10c4 0 1-5 4-5h3c6-1 5-15-6-15ZM7 8h.1M13 6h.1M18 10h.1M7 14h.1',hall:'M2 10 12 3l10 7M5 10v11h14V10M9 21v-6h6v6M3 22h18',craft:'m3 21 3-8L17 2l5 5-11 11-8 3Zm4-9 5 5M15 4l5 5',market:'M3 10h18l-2-6H5l-2 6ZM4 10v11h16V10M8 21v-7h8v7M3 10q2 5 5 0 4 5 8 0 3 5 5 0',water:'M2 10q3-4 6 0t6 0t8 0M2 17q3-4 6 0t6 0t8 0M12 2v4',pagoda:'M12 1v3M7 5h10M5 9h14M3 14h18M1 20h22M8 5v4m8-4v4M6 9v5m12-5v5M4 14v6m16-6v6M9 20v3m6-3v3'};
export const atlasIcon=(name,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="${atlasIcons[name]||atlasIcons.stone}"/></svg>`;
const trace=points=>points.map((n,i)=>`${i?'L':'M'}${n.x} ${n.y}`).join(' ');
export const atlasRoutes=[
 {id:'craft',name:'识石知艺',purpose:'读懂纹色与雕琢的关系',color:'#b64e25',stops:['stone','color','welcome','studio'],summary:'识石 → 赏色 → 会客厅 → 匠手'},
 {id:'land',name:'循艺入乡',purpose:'认识手艺背后的乡土生活',color:'#176e75',stops:['welcome','studio','market','water','pagoda'],summary:'会客厅 → 匠手 → 市集 → 水岸 → 乡史'}
];
export function routeArtwork(id){
 const route=atlasRoutes.find(r=>r.id===id)||atlasRoutes[0],points=route.stops.map(id=>atlasNodes.find(n=>n.id===id));
 return {path:trace(points),arrows:points.slice(1).map((n,i)=>{const a=points[i],x=a.x+(n.x-a.x)*.58,y=a.y+(n.y-a.y)*.58,angle=Math.atan2(n.y-a.y,n.x-a.x)*180/Math.PI;return `<path class="atlas-route-arrow" transform="translate(${x} ${y}) rotate(${angle})" d="M-8-7 2 0-8 7"/>`;}).join('')};
}
export function atlasArtwork(){
 const {path,arrows}=routeArtwork('craft');
 return `<img class="atlas-painted" src="./assets/atlas/fuxin-landscape-clean.png" width="1536" height="1024" alt="山水手绘文化导览底图" draggable="false"><svg class="atlas-art" viewBox="0 0 1000 650" aria-hidden="true"><path class="atlas-route-casing atlas-guidance-casing" d="${path}"/><path id="atlas-guidance-path" class="atlas-line atlas-guide-line" d="${path}"/><g class="atlas-route-arrows">${arrows}</g></svg>`;
}
