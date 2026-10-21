// Visual identities only; the sourced educational content remains in atlas-stories.
export const storyThemes={
 stone:{accent:'#bc491b',label:'地质观察室',word:'GEOLOGY / MATERIAL & TIME',motif:'crystal'},
 color:{accent:'#8037a5',label:'天然的调色盘',word:'CHROMATIC / A NATURAL GALLERY',motif:'spectrum'},
 welcome:{accent:'#0b7773',label:'玛瑙小镇来信',word:'POSTCARD / PEOPLE & PLACE',motif:'postcard'},
 studio:{accent:'#ab421f',label:'匠心放映间',word:'CINEMA / THE MAKING OF CRAFT',motif:'cinema'},
 market:{accent:'#b43e58',label:'玛瑙生活集',word:'COLLAGE / MATERIAL TO EVERYDAY',motif:'collage'},
 water:{accent:'#096e91',label:'水色采集站',word:'RIPPLE / COLORS IN THE LANDSCAPE',motif:'ripple'},
 pagoda:{accent:'#5446a6',label:'乡土时光册',word:'ARCHIVE / LINES THROUGH TIME',motif:'archive'}
};
const motifs={
 crystal:'<g fill="none"><path d="M360 25 690 95 835 290 640 495 350 410 265 205Z"/><path d="m360 25 35 155 295-85-85 175 230 20-290 55 95 150-245-315-45 230 195-65-280-140 340 65Z"/><ellipse cx="560" cy="270" rx="375" ry="140" transform="rotate(-23 560 270)"/></g>',
 spectrum:'<g fill="none"><circle cx="660" cy="240" r="190"/><circle cx="660" cy="240" r="230"/><circle cx="660" cy="240" r="270"/><path d="M50 430C250 110 390 580 640 300S900 10 1100 200"/></g>',
 postcard:'<g fill="none"><path d="M50 350 160 265 270 350V475H50ZM360 200 470 115 580 200V380H360ZM690 300l110-85 110 85v175H690Z"/><path d="M15 500Q300 370 525 460T1100 420M150 265v-85m20 0h-40M470 115V30m20 0h-40M800 215v-90m20 0h-40"/></g>',
 cinema:'<g fill="none"><rect x="310" y="85" width="660" height="355" rx="5"/><path d="M330 105h620v315H330ZM25 45h1060M25 480h1060"/><path d="m535 170 125 90-125 90Z"/></g>',
 collage:'<g fill="none"><rect x="380" y="35" width="225" height="300" rx="8" transform="rotate(-17 380 35)"/><rect x="780" y="180" width="200" height="285" rx="8" transform="rotate(12 780 180)"/><path d="m230 440 80-190 70 210m-120-70 95-5M640 30v95m-45-45 95-5"/><circle cx="670" cy="385" r="100"/></g>',
 ripple:'<g fill="none"><ellipse cx="650" cy="300" rx="170" ry="100"/><ellipse cx="650" cy="300" rx="240" ry="150"/><ellipse cx="650" cy="300" rx="320" ry="200"/><path d="M0 480Q170 375 340 460T680 460 1100 430M0 510Q170 405 340 490T680 490 1100 460"/></g>',
 archive:'<g fill="none"><path d="M675 30v55m-55 0h110m-140 60h170m-195 65h220m-255 70h290m-325 75h360m-405 80h450M620 85v60m110-60v60m-140 0v65m170-65v65m-195 0v70m220-70v70m-255 0v75m290-75v75m-325 0v80m360-80v80"/><path d="M50 50h1000M50 160h1000M50 270h1000M50 380h1000M200 0v520m200-520v520m200-520v520m200-520v520" opacity=".25"/></g>'
};
export function storyHeroArt(id){const t=storyThemes[id];return `<div class="story-scene-art" aria-hidden="true"><svg viewBox="0 0 1100 520" preserveAspectRatio="xMidYMid slice">${motifs[t.motif]}</svg></div><div class="story-theme-sign" aria-hidden="true"><span>${t.word}</span><strong>${t.label}</strong></div>`;}
