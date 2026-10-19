import {sources} from './data.mjs';
import {journeyPlaces as places,journeyPresets as presets,craftObservations,journeyQuiz as questions,journeySeasons as seasons,ruralConnections as connections} from './journey-data.mjs';

const paths={hall:'M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18',craft:'M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4',market:'M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0',water:'M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3',pagoda:'M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4',eye:'M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8',leaf:'M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5',village:'M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2'};
const icon=(name,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.leaf}"/></svg>`;
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const asset=name=>`./assets/journey-v2/${name}.webp`;
const read=(key,fallback)=>{try{const value=JSON.parse(localStorage.getItem(key));return value??fallback;}catch{return fallback;}};
const byId=id=>places.find(p=>p.id===id);
const sourceFor=id=>sources.find(s=>s.id===id);
const bounded=(v,min,max,fallback)=>Number.isFinite(Number(v))?Math.round(Math.min(max,Math.max(min,Number(v)))):fallback;

export function initJourney({toast,download}){
 const root=document.querySelector('#journey'),$=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
 const draftKey='agate-journey-draft-v1',learningKey='agate-journey-learning-v1';
 const raw=read(draftKey,{}),storedDraft=raw&&typeof raw==='object'?raw:{};
 const known=new Set();
 let draft={profile:presets.some(p=>p.id===storedDraft.profile)?storedDraft.profile:'craft',stops:[],date:typeof storedDraft.date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(storedDraft.date)?storedDraft.date:'',people:bounded(storedDraft.people,1,30,2),season:Object.hasOwn(seasons,storedDraft.season)?storedDraft.season:['winter','spring','summer','autumn'][Math.floor((new Date().getMonth()+1)%12/3)],customized:storedDraft.customized===true,planId:typeof storedDraft.planId==='string'?storedDraft.planId:null};
 if(Array.isArray(storedDraft.stops))for(const row of storedDraft.stops){if(row&&byId(row.id)&&!known.has(row.id)){known.add(row.id);draft.stops.push({id:row.id,minutes:bounded(row.minutes,10,180,byId(row.id).minutes)});}}
 if(!Array.isArray(storedDraft.stops))draft.stops=presets[0].stops.map(id=>({id,minutes:byId(id).minutes}));
 const rawLearning=read(learningKey,{}),savedLearning=rawLearning&&typeof rawLearning==='object'?rawLearning:{};
 const learning={observed:savedLearning.observed===true,quizDone:savedLearning.quizDone===true,routePrepared:savedLearning.routePrepared===true,question:typeof savedLearning.question==='string'?savedLearning.question.slice(0,120):'',questionSaved:savedLearning.questionSaved===true,checks:{}};
 for(const key of ['open','reception','content','travel'])learning.checks[key]=savedLearning.checks?.[key]===true;
 let selectedPlace='welcome',selectedCraft=0,quizIndex=0,answers=Array(questions.length).fill(null),selectedConnection=0,role='visitor';
 function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
 function persist(){write(draftKey,draft);write(learningKey,learning);}
 function status(message){$('#journey-plan-status').textContent=message;}
 const profile=()=>presets.find(p=>p.id===draft.profile);
 const routeTitle=()=>profile().title+(draft.customized?' · 自选调整':'');
 const total=()=>draft.stops.reduce((sum,row)=>sum+row.minutes,0);
 const completed=()=>[learning.observed,learning.quizDone,learning.routePrepared&&draft.stops.length>0,learning.questionSaved&&learning.question.trim().length>0];
 function mapMarkup(){
  return `<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([x,y])=>`<path d="M${x} ${y-15}l-9 23h18Z"/><path d="M${x} ${y+8}v9"/>`).join('')}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+places.map(p=>`<button class="journey-map-node" data-place="${p.id}" style="--node-x:${p.x}%;--node-y:${p.y}%" aria-pressed="${p.id===selectedPlace}" aria-label="探索${p.name}">${icon(p.icon)}<span>${p.short}</span><b class="journey-node-order"></b></button>`).join('');
 }
 $('#journey-map').innerHTML=mapMarkup();
 function updateMap(){
  $$('[data-place]').forEach(b=>{const index=draft.stops.findIndex(row=>row.id===b.dataset.place);b.classList.toggle('in-plan',index>=0);b.setAttribute('aria-pressed',String(b.dataset.place===selectedPlace));b.querySelector('.journey-node-order').textContent=index>=0?index+1:'';});
  $('#journey-map-route').setAttribute('d',draft.stops.map((row,i)=>{const p=byId(row.id);return`${i?'L':'M'}${p.x*9},${p.y*5.5}`;}).join(' '));
 }
 function selectPlace(id){
  const p=byId(id);if(!p)return;selectedPlace=id;const source=sourceFor(p.source),included=draft.stops.some(row=>row.id===id);
  $('#journey-place-detail').innerHTML=`<div class="journey-detail-image"><img src="${asset(p.image)}" width="600" height="337" loading="lazy" alt="AI${p.image==='craft'?'手艺':p.image==='water'?'乡野水岸':'玛瑙文旅'}情境示意，非${escapeHtml(p.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${p.type} / ${p.tag}</p><h3>${p.name}</h3><p>${p.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${p.observe}</p></div><p class="journey-place-prepare">${p.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${included?'disabled':''}>${included?'已在我的行程 ✓':'加入我的行程 ＋'}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${p.fact}</p><a href="${source.url}" target="_blank" rel="noopener">${source.publisher} ↗</a></details></div>`;
  $('#journey-add-this').onclick=()=>addStop(id);updateMap();
 }
 $$('[data-place]').forEach(b=>b.onclick=()=>selectPlace(b.dataset.place));
 function renderPresets(){
  $('#journey-presets').innerHTML=presets.map((p,i)=>`<button data-journey-preset="${p.id}" aria-pressed="${p.id===draft.profile}"><span class="journey-preset-index">0${i+1}</span><span><strong>${p.title}</strong><small>${p.subtitle}</small></span><b>↗</b></button>`).join('');
  $$('[data-journey-preset]').forEach(b=>b.onclick=()=>{draft.profile=b.dataset.journeyPreset;draft.stops=profile().stops.map(id=>({id,minutes:byId(id).minutes}));draft.customized=false;learning.routePrepared=true;changed('已按这份灵感整理路线，可继续增减与调整。');renderPresets();});
 }
 function changed(message='行程草稿已更新。'){
  renderRoute();selectPlace(selectedPlace);renderPassport();persist();status(message);
 }
 function addStop(id){if(!byId(id)||draft.stops.some(row=>row.id===id))return;draft.stops.push({id,minutes:byId(id).minutes});draft.customized=true;learning.routePrepared=true;changed(`已将“${byId(id).short}”加入行程。`);}
 function renderRoute(){
  $('#journey-route-title').textContent=routeTitle();$('#journey-route-description').textContent=profile().description;$('#journey-stop-total').textContent=`${draft.stops.length} 站`;
  $('#journey-route-list').innerHTML=draft.stops.length?draft.stops.map((row,i)=>{const p=byId(row.id);const values=[10,20,25,30,35,40,45,60,90,120,180,row.minutes].sort((a,b)=>a-b).filter((n,i,a)=>a.indexOf(n)===i);return `<article class="journey-route-item"><span class="journey-route-number">0${i+1}</span><div class="journey-route-item-copy"><span>${p.type}</span><h4>${p.name}</h4><p>${p.observe}</p><label>现场停留 <select data-route-minutes="${p.id}" aria-label="${p.name}现场停留分钟">${values.map(n=>`<option value="${n}" ${n===row.minutes?'selected':''}>${n} 分钟</option>`).join('')}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${p.id}" data-direction="-1" aria-label="上移${p.name}" ${i===0?'disabled':''}>↑</button><button data-route-move="${p.id}" data-direction="1" aria-label="下移${p.name}" ${i===draft.stops.length-1?'disabled':''}>↓</button><button data-route-remove="${p.id}" aria-label="移除${p.name}">×</button></div></article>`;}).join(''):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>';
  $('#journey-add-stops').innerHTML=places.map(p=>{const added=draft.stops.some(row=>row.id===p.id);return `<button data-route-add="${p.id}" ${added?'disabled':''}>${icon(p.icon)}${p.short}<span>${added?'✓':'＋'}</span></button>`;}).join('');
  $$('[data-route-add]').forEach(b=>b.onclick=()=>addStop(b.dataset.routeAdd));
  $$('[data-route-remove]').forEach(b=>b.onclick=()=>{draft.stops=draft.stops.filter(row=>row.id!==b.dataset.routeRemove);draft.customized=true;changed('已移除一站，可随时重新加入。');});
  $$('[data-route-move]').forEach(b=>b.onclick=()=>{const from=draft.stops.findIndex(row=>row.id===b.dataset.routeMove),to=from+Number(b.dataset.direction);if(to<0||to>=draft.stops.length)return;[draft.stops[from],draft.stops[to]]=[draft.stops[to],draft.stops[from]];draft.customized=true;changed('已调整路线顺序。');$(`[data-route-move="${b.dataset.routeMove}"][data-direction="${b.dataset.direction}"]`)?.focus({preventScroll:true});});
  $$('[data-route-minutes]').forEach(el=>el.onchange=()=>{const row=draft.stops.find(row=>row.id===el.dataset.routeMinutes);if(row)row.minutes=bounded(el.value,10,180,row.minutes);draft.customized=true;changed('已更新现场停留安排。');});
  $('#journey-total-minutes').textContent=total();$('#journey-summary-people').textContent=`${draft.people} 人同行`;$('#journey-summary-date').textContent=draft.date||'日期待定';
  for(const id of ['#plan-trip','#journey-export','#journey-copy'])$(id).disabled=!draft.stops.length;
  $('#plan-trip').innerHTML=draft.planId?'更新我的行程 <span>✓</span>':'保存到我的作品 <span>＋</span>';updateMap();
 }
 $('#journey-date').value=draft.date;$('#journey-people').value=draft.people;
 $('#journey-date').onchange=e=>{draft.date=e.target.value;persist();renderRoute();};
 $('#journey-people').onchange=e=>{draft.people=bounded(e.target.value,1,30,2);e.target.value=draft.people;persist();renderRoute();};
 function renderSeason(){const s=seasons[draft.season];$('#journey-season-note').innerHTML=`<span>${s.icon}</span><div><strong>${s.name}</strong><p>${s.text}</p></div>`;$$('[data-journey-season]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.journeySeason===draft.season)));}
 $$('[data-journey-season]').forEach(b=>b.onclick=()=>{draft.season=b.dataset.journeySeason;renderSeason();persist();});
 function tripText(){return ['石里有境 · 十家子研学构想',routeTitle(),`日期：${draft.date||'待定'} / 同行：${draft.people} 人`,`现场观察安排：${total()} 分钟（不含交通、用餐与等候）`,'',...draft.stops.map((row,i)=>`${i+1}. ${byId(row.id).name} · ${row.minutes} 分钟\n   观察：${byId(row.id).observe}`),'',learning.question.trim()?`想问工匠：${learning.question.trim()}`:'',`季节灵感：${seasons[draft.season].name}`,`线上准备：${completed().filter(Boolean).length} / 4`,'','这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。',`小镇资料：${sourceFor('town').url}`,`工艺与研学资料：${sourceFor('rural').url}`].filter(x=>x!==null).join('\n');}
 $('#plan-trip').onclick=()=>{
  if(!draft.stops.length)return;const previous=read('agate-plans-v1',[]),rows=Array.isArray(previous)?previous:[];const id=draft.planId||crypto.randomUUID(),index=rows.findIndex(row=>row?.id===id);
  const record={id,version:2,date:draft.date||'日期待定',interest:profile().interest,note:`${routeTitle()} · ${draft.people}人\n${draft.stops.map(row=>byId(row.id).name).join(' → ')}\n现场观察 ${total()} 分钟，不含交通与用餐。${learning.question.trim()?'\n想问工匠：'+learning.question.trim():''}`,route:draft.stops.map(row=>({...row,name:byId(row.id).name})),people:draft.people,season:draft.season,question:learning.question.trim(),updatedAt:new Date().toISOString()};
  if(index>=0)rows[index]=record;else rows.unshift(record);
  if(!write('agate-plans-v1',rows.slice(0,50))){toast('浏览器未能保存，请先导出研学手册。');return;}
  draft.planId=id;learning.routePrepared=true;changed('行程已保存，可在“我的作品”查看。');toast('已保存研学行程，尚未产生预约。');
 };
 $('#journey-copy').onclick=async()=>{const text=tripText();try{await navigator.clipboard.writeText(text);toast('行程文字已复制。');}catch{download(new Blob([text],{type:'text/plain;charset=utf-8'}),'十家子研学行程.txt');toast('已导出行程文字。');}};
 function selectCraft(index){
  selectedCraft=index;const c=craftObservations[index];$('#craft-detail').innerHTML=`<p class="eyebrow">OBSERVATION / 0${index+1}</p><h3>${c.title}</h3><p>${c.text}</p>`;$('#journey-craft-question').textContent=c.question;$$('[data-journey-craft]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.journeyCraft)===index)));
 }
 $('#craft-tabs').innerHTML=craftObservations.map((c,i)=>`<button data-journey-craft="${i}" aria-pressed="${i===0}"><b>0${i+1}</b>${c.label}</button>`).join('');$$('[data-journey-craft]').forEach(b=>b.onclick=()=>selectCraft(Number(b.dataset.journeyCraft)));
 $('#journey-record-observation').onclick=()=>{learning.observed=!learning.observed;if(learning.observed&&!learning.question.trim()){$('#journey-question').placeholder=craftObservations[selectedCraft].question;}persist();renderPassport();toast(learning.observed?'已把这条观察收进线上研学准备。':'已取消这项观察记录。');};
 function renderPassport(){
  const flags=completed(),count=flags.filter(Boolean).length;$('#journey-passport-count').innerHTML=`${count}<small>/ 4</small>`;$('#journey-passport-circle').style.strokeDashoffset=String(2*Math.PI*51*(1-count/4));
  const tasks=[['观纹','记录一条手艺观察','journey-craft'],['识艺','完成一轮工艺问答','journey-passport'],['入乡','整理自己的行程','journey-plan'],['问艺','留一个想问的问题','journey-passport']];
  $('#journey-passport-tasks').innerHTML=tasks.map(([stamp,label,target],i)=>`<button data-task-target="${target}" data-task-index="${i}" class="${flags[i]?'complete':''}"><span>${stamp}</span><div><strong>${label}</strong><small>${flags[i]?'已收进线上准备':'等你来发现'}</small></div><b>${flags[i]?'✓':'↗'}</b></button>`).join('');
  $$('[data-task-target]').forEach(b=>b.onclick=()=>{scrollTo(b.dataset.taskTarget);if(b.dataset.taskIndex==='3')$('#journey-question').focus({preventScroll:true});});
  $('#journey-record-observation').setAttribute('aria-pressed',String(learning.observed));$('#journey-record-observation').textContent=learning.observed?'这条观察已记录 ✓':'记下这条观察 ＋';
 }
 function renderQuiz(){
  $('#journey-quiz-count').textContent=quizIndex<questions.length?`${quizIndex+1} / ${questions.length}`:'本轮已完成';
  if(quizIndex===questions.length){const score=answers.filter((a,i)=>a===questions[i].correct).length;$('#journey-quiz').innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${score} / ${questions.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`;$('#journey-quiz-restart').onclick=()=>{quizIndex=0;answers=Array(questions.length).fill(null);renderQuiz();};return;}
  const q=questions[quizIndex],answered=answers[quizIndex]!==null,source=sourceFor(q.source);
  $('#journey-quiz').innerHTML=`<h3>${q.question}</h3><div class="journey-quiz-answers">${q.answers.map((answer,i)=>`<button data-quiz-answer="${i}" class="${answered&&i===q.correct?'correct':answered&&i===answers[quizIndex]?'chosen':''}" ${answered?'disabled':''}><span>${String.fromCharCode(65+i)}</span>${answer}${answered&&i===q.correct?'<b>✓</b>':''}</button>`).join('')}</div>${answered?`<div class="journey-quiz-feedback"><strong>${answers[quizIndex]===q.correct?'你抓住了关键。':'再看一眼这个线索。'}</strong><p>${q.explanation}</p><a href="${source.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${quizIndex===questions.length-1?'收进手册':'下一题'} →</button></div>`:''}`;
  $$('[data-quiz-answer]').forEach(b=>b.onclick=()=>{answers[quizIndex]=Number(b.dataset.quizAnswer);renderQuiz();});
  if(answered)$('#journey-quiz-next').onclick=()=>{quizIndex++;if(quizIndex===questions.length){learning.quizDone=true;persist();renderPassport();}renderQuiz();};
 }
 $('#journey-question').value=learning.question;$('#journey-question-length').textContent=[...learning.question].length;
 $('#journey-question').oninput=e=>{learning.question=e.target.value.slice(0,120);learning.questionSaved=false;$('#journey-question-length').textContent=[...learning.question].length;persist();renderPassport();};
 $('#journey-question-save').onclick=()=>{if(!learning.question.trim()){toast('先写下一个想了解的问题。');$('#journey-question').focus();return;}learning.questionSaved=true;persist();renderPassport();toast('问题已收进手册，也会随行程导出。');};
 $$('[data-journey-check]').forEach(input=>{input.checked=learning.checks[input.dataset.journeyCheck];input.onchange=()=>{learning.checks[input.dataset.journeyCheck]=input.checked;persist();};});
 function renderConnections(){
  $('#journey-connections').innerHTML=connections.map((c,i)=>`<button data-connection="${i}" aria-pressed="${i===selectedConnection}">${icon(c.icon)}<span><small>0${i+1} / ${c.label}</small><strong>${c.title}</strong></span><b>→</b></button>`).join('');
  $$('[data-connection]').forEach(b=>b.onclick=()=>{selectedConnection=Number(b.dataset.connection);renderConnections();});const c=connections[selectedConnection];$('#journey-connection-label').textContent=c.label;$('#journey-connection-title').textContent=c.title;$('#journey-connection-copy').textContent=c.text;$('#journey-role-copy').textContent=c[role];
 }
 $$('[data-journey-role]').forEach(b=>b.onclick=()=>{role=b.dataset.journeyRole;$$('[data-journey-role]').forEach(v=>v.setAttribute('aria-pressed',String(v===b)));$('#journey-role-copy').textContent=connections[selectedConnection][role];});
 function scrollTo(id){document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});}
 $$('[data-journey-scroll]').forEach(b=>b.onclick=()=>scrollTo(b.dataset.journeyScroll));
 if('IntersectionObserver'in window){const activeObserver=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){$$('.journey-subnav [data-journey-scroll]').forEach(b=>b.classList.toggle('active',b.dataset.journeyScroll===entry.target.id));}},{rootMargin:'-70px 0px -55% 0px',threshold:0});$$('.journey-chapter').forEach(section=>activeObserver.observe(section));
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){root.classList.add('journey-anim-ready');const reveal=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('revealed');reveal.unobserve(entry.target);}},{threshold:.06});$$('[data-journey-reveal]').forEach(el=>reveal.observe(el));}}
 async function exportPass(){
  if(!draft.stops.length)return;const button=$('#journey-export');button.disabled=true;const old=button.textContent;button.textContent='正在整理手册…';
  try{
   learning.routePrepared=true;persist();renderPassport();await document.fonts.ready;const image=new Image();image.src=asset('hero');let imageReady=true;try{await image.decode();}catch{imageReady=false;}
   const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=1180+draft.stops.length*155+(learning.question.trim()?150:0);const ctx=canvas.getContext('2d'),W=canvas.width,H=canvas.height;
   const font=(size,weight=400)=>`${weight} ${size}px "Microsoft YaHei","PingFang SC",sans-serif`;
   const text=(s,x,y,size,color='#382b21',weight=400)=>{ctx.fillStyle=color;ctx.font=font(size,weight);ctx.fillText(s,x,y);};
   function wrap(s,x,y,width,size,lineHeight,color='#6c5842'){ctx.font=font(size);ctx.fillStyle=color;let line='',yy=y;for(const char of [...s]){if(ctx.measureText(line+char).width>width&&line){ctx.fillText(line,x,yy);line=char;yy+=lineHeight;}else line+=char;}if(line)ctx.fillText(line,x,yy);return yy+lineHeight;}
   ctx.fillStyle='#f1e7d4';ctx.fillRect(0,0,W,H);ctx.fillStyle='#281b11';ctx.fillRect(0,0,W,390);
   if(imageReady){const iw=image.width,ih=image.height,scale=Math.max(W/iw,390/ih);ctx.save();ctx.beginPath();ctx.rect(0,0,W,390);ctx.clip();ctx.drawImage(image,(W-iw*scale)/2,(390-ih*scale)/2,iw*scale,ih*scale);ctx.restore();}
   const gradient=ctx.createLinearGradient(0,0,W,0);gradient.addColorStop(0,'#171009ed');gradient.addColorStop(.8,'#17100920');ctx.fillStyle=gradient;ctx.fillRect(0,0,W,390);
   text('石里有境 / FIELD PASSPORT',65,79,20,'#d5b580');text('循艺入乡',65,160,58,'#f3e2c2');text('我的十家子研学手册',68,216,28,'#e0c6a0');text(routeTitle(),68,295,24,'#d6b078');text('AI 文旅情境示意',960,367,14,'#f4debb');
   text('日期  '+(draft.date||'待定'),65,458,22);text('同行  '+draft.people+' 人',500,458,22);text('线上准备  '+completed().filter(Boolean).length+' / 4',835,458,22);
   ctx.strokeStyle='#b29b762f';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(65,491);ctx.lineTo(1135,491);ctx.stroke();
   text('把好奇，串成自己的路线。',65,551,33,'#46321f');text('现场观察 '+total()+' 分钟 · 不含交通、用餐与等候',65,596,19,'#8a7151');
   let y=667;
   for(let i=0;i<draft.stops.length;i++){const row=draft.stops[i],p=byId(row.id);ctx.fillStyle='#dcc59f';ctx.beginPath();ctx.arc(91,y+8,26,0,Math.PI*2);ctx.fill();text(String(i+1).padStart(2,'0'),73,y+17,24,'#604321');if(i<draft.stops.length-1){ctx.strokeStyle='#c7ab7e';ctx.beginPath();ctx.moveTo(91,y+41);ctx.lineTo(91,y+123);ctx.stroke();}text(p.name,145,y+13,28,'#3b2d20');text(row.minutes+' 分钟',975,y+13,21,'#90704a');wrap(p.observe,145,y+56,920,20,32);y+=155;}
   if(learning.question.trim()){ctx.fillStyle='#e5d6bb';ctx.fillRect(65,y-8,1070,142);text('如果遇见工匠，我想问',89,y+28,18,'#937346');wrap(learning.question.trim(),89,y+68,1018,22,32,'#513c26');y+=175;}
   text(seasons[draft.season].name+' · 带着颜色去发现',65,y+35,24,'#61492e');wrap(seasons[draft.season].text,65,y+78,1070,19,30);y+=165;
   const labels={open:'开放与时间',reception:'人数与接待',content:'讲解与体验',travel:'费用与交通'};text('出发前的确认清单',65,y,23,'#60462b');let x=65;for(const [key,label]of Object.entries(labels)){text((learning.checks[key]?'☑ ':'□ ')+label,x,y+43,17,'#8c7456');x+=274;}
   ctx.strokeStyle='#b29b7650';ctx.beginPath();ctx.moveTo(65,H-173);ctx.lineTo(1135,H-173);ctx.stroke();wrap('公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。',65,H-129,1070,16,26,'#917d60');text('资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局',65,H-67,15,'#917d60');text('carpedimez.github.io/fuxin-agate-studio/#journey',65,H-34,15,'#917d60');
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('export');download(blob,'十家子研学手册.png');learning.routePrepared=true;persist();renderPassport();toast('研学手册已导出，路线与问题都在里面。');
  }catch{toast('暂未能生成图片，可先复制行程文字。');}finally{button.disabled=!draft.stops.length;button.textContent=old;}
 }
 $('#journey-export').onclick=exportPass;
 selectPlace(selectedPlace);renderPresets();renderRoute();renderSeason();selectCraft(0);renderQuiz();renderPassport();renderConnections();
 return {exportPass,addStop,selectPlace};
}
