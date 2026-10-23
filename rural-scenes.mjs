import {fieldPhotos} from './field-learning-data.mjs';
const town={src:'./assets/photos/shijiazi-town.webp',name:'十家子玛瑙特色小镇航拍',credit:'阜新县人民政府办公室',url:'https://www.fmx.gov.cn/content/2026/1100158.html'};
const craft={...fieldPhotos.craft,src:'./assets/backgrounds/craft.webp'};
const scenes={
 culture:{photo:fieldPhotos.vessels,title:'从一件作品，\n读懂一门手艺。',copy:'先看被保留的纹色，再追问造型的依据。让一件具体作品成为理解材料与匠人判断的入口。',steps:[fieldPhotos.bands,fieldPhotos.craft,fieldPhotos.vessels]},
 experience:{photo:craft,title:'带着问题来，\n听懂一次取舍。',copy:'把材料上的观察带到工艺现场。看工具与作品怎样相遇，也听清每一步为什么这样选择。',steps:[fieldPhotos.bands,craft,fieldPhotos.carving]},
 creation:{photo:fieldPhotos.moss,title:'让一抹纹色，\n走进日常生活。',copy:'从佩戴到陈设，使用情境改变了观察重点。把纹色、轮廓与连接放在一起，理解设计怎样回应生活。',steps:[fieldPhotos.moss,fieldPhotos.bands,fieldPhotos.market]},
 local:{photo:town,title:'手艺在石上，\n生活在乡间。',copy:'从制作到展示、交流与地方服务，一件作品连接不同的劳动。认识分工，再讨论怎样共同参与。',steps:[fieldPhotos.craft,fieldPhotos.market,town]}
};
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const ruralThumbnail=id=>scenes[id].photo;
export function ruralStepPhotos(id,steps){return steps.map(([title,copy],i)=>{const p=scenes[id].steps[i];return`<li><a class="rural-step-photo" href="${p.url}" target="_blank" rel="noopener" aria-label="${safe(p.name+' · '+p.credit+' · 图片来源')}"><img src="${p.src}" alt="${safe(p.name)}" loading="lazy"><b>0${i+1}</b></a><div><h4>${safe(title)}</h4><p>${safe(copy)}</p><a class="rural-step-credit" href="${p.url}" target="_blank" rel="noopener">${safe(p.credit)} ↗</a></div></li>`;}).join('');}
const versions=new WeakMap();
export function updateRuralScene(page,id){
 const banner=page.querySelector('.journey-rural-banner');if(!banner)return;
 const s=scenes[id],img=banner.querySelector(':scope>img'),copy=banner.querySelector(':scope>div'),key=(versions.get(banner)||0)+1;versions.set(banner,key);
 banner.dataset.connection=id;banner.dataset.photoState='loading';banner.setAttribute('aria-busy','true');
 copy.querySelector('h2').textContent=s.title;copy.querySelector('p:not(.eyebrow)').textContent=s.copy;
 let credit=copy.querySelector('small a');if(!credit){copy.querySelector('small').replaceChildren();credit=document.createElement('a');credit.target='_blank';credit.rel='noopener';copy.querySelector('small').append(credit);}credit.href=s.photo.url;credit.textContent=`${s.photo.name} · ${s.photo.credit} ↗`;
 img.alt=s.photo.name;img.src=s.photo.src;
 const finish=ok=>{if(versions.get(banner)!==key||!banner.isConnected)return;banner.dataset.photoState=ok?'ready':'error';banner.setAttribute('aria-busy','false');if(ok&&!matchMedia('(prefers-reduced-motion: reduce)').matches){img.getAnimations().forEach(a=>a.cancel());img.animate([{opacity:.25},{opacity:1}],{duration:340,easing:'ease-out'});}};
 img.decode().then(()=>finish(true)).catch(()=>finish(false));
}
