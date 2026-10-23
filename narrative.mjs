import {sources} from './data.mjs';
import {readingThreads,fieldNotes} from './narrative-data.mjs';
import {updateRuralScene,ruralStepPhotos} from './rural-scenes.mjs';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderThread(id){const t=readingThreads[id];return `<aside class="reading-thread"><span>这一站，接着前面看</span><p>${t.before}</p></aside>`;}
export function renderFieldNotes(id){const n=fieldNotes[id];return n?`<aside class="field-notes"><header><span>再看深一层 / FIELD NOTES</span><h3>${n.title}</h3></header><div>${n.items.map(([t,p],i)=>`<article><span>0${i+1}</span><h4>${t}</h4><p>${p}</p></article>`).join('')}</div>${id==='pagoda'?`<footer class="field-history"><strong>把石头，放回地方的时间里</strong><p>阜新玛瑙雕的非遗项目资料提到，清河门辽墓曾出土玛瑙管珠项链等器物。这为理解材料与地方生活的历史联系提供了另一条线索。它与闾州塔分属不同地点，不能互相替代年代、形制或出土信息；认识乡史，需要让每个故事都有自己的依据。</p><a href="https://www.ihchina.cn/project_details/14006/" target="_blank" rel="noopener">国家级非遗项目资料 · 阅读原文 ↗</a></footer>`:''}</aside>`:'';}
export function renderNotePrompts(id){return `<div class="story-note-prompts"><span>可以从这两个角度写起</span>${readingThreads[id].prompts.map(t=>`<p>${t}</p>`).join('')}</div>`;}
export function renderTakeaway(id){const t=readingThreads[id];return `<aside class="story-takeaway"><div><span>这一站，带走什么</span><p>${t.takeaway}</p></div><div><span>${id==='pagoda'?'带着理解，回到地图':'下一站，继续追问'}</span><p>${t.next}</p></div></aside>`;}
export function updateRuralContent(page,c,role){
 const $=s=>page.querySelector(s),r=c[role],source=sources.find(s=>s.id===c.source);
 $('#journey-connection-label').textContent=c.label;$('#journey-connection-title').textContent=c.title;$('#journey-connection-copy').textContent=c.text;
 $('#journey-connection-steps').innerHTML=ruralStepPhotos(c.id,c.steps);
 if(page.querySelector('.journey-rural-banner')?.dataset.connection!==c.id)updateRuralScene(page,c.id);
 $('#journey-connection-fact').innerHTML=`<span>地方资料中的依据</span><p>${c.fact}</p><a href="${source.url}" target="_blank" rel="noopener">${esc(source.publisher)} · 阅读原文 ↗</a>`;
 $('#journey-role-copy').textContent=r.lead;$('#journey-role-actions').innerHTML=r.actions.map(t=>`<li>${t}</li>`).join('');$('#journey-role-result').textContent=r.result;
}
