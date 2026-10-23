import {fieldActivities,fieldPhotos,fieldFocus,fieldDetailViews} from './field-learning-data.mjs';
import {escapeDiscovery as esc,getDiscovery,saveDiscovery,describeDiscovery} from './discovery-store.mjs';
import {assessOrder,renderOrderResult,orderCardState} from './order-feedback.mjs';
const credit=id=>`<a href="${fieldPhotos[id].url}" target="_blank" rel="noopener">${esc(fieldPhotos[id].name)} · ${esc(fieldPhotos[id].credit)} ↗</a>`;
const photoButton=id=>`<button type="button" class="field-photo-choice" data-field-photo="${id}" aria-pressed="false"><img src="${fieldPhotos[id].src}" alt="${esc(fieldPhotos[id].name)}" loading="lazy"><span>${esc(fieldPhotos[id].name)}</span></button>`;
export function renderFieldLearning(clue){
 const a=fieldActivities[clue],photoTag=a.type==='crop'?'div':'button';return`<section class="story-section field-learning" id="field-learning" data-field-clue="${clue}" data-field-type="${a.type}" data-story-reveal aria-labelledby="field-title"><header class="field-heading"><div><span>亲手试一试 / FIELD LAB</span><h2 id="field-title">${a.title}</h2></div><p>${a.lead}</p></header><div class="field-workbench"><div class="field-media">
 ${a.type==='order'?'<div class="field-order-list" aria-label="调整观察顺序"></div>':a.type==='connect'?`<div class="field-connections">${a.photos.map(photoButton).join('')}</div>`:`${a.photos.length>1?`<div class="field-specimens" aria-label="切换比较实物">${a.photos.map((id,i)=>`<button data-field-specimen="${id}" aria-pressed="${i===0}">${fieldPhotos[id].name}</button>`).join('')}</div>`:''}<${photoTag} ${a.type==='crop'?'role="img"':'type="button"'} class="field-photo-action" aria-label="${a.type==='crop'?'原料中的取形位置':'在实拍上选择观察位置；方向键移动，回车确认'}"><span class="field-photo-surface"><img data-field-image src="${fieldPhotos[a.photos[0]].src}" alt="${esc(fieldPhotos[a.photos[0]].name)}"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"></svg></span></${photoTag}><p class="field-photo-credit">${credit(a.photos[0])}</p>`}

 </div><div class="field-actions"><span class="field-task-label">${{point:'找一个具体位置',crop:'你想保留什么？',connect:'你想了解哪一个问题？',order:'让每一步都有依据',palette:'三个位置，一组配色'}[a.type]}</span>${a.type==='crop'?'<div class="field-crop-preview"><canvas width="360" height="360" aria-label="当前取形留下的实物纹理"></canvas><div><span>这次留下的纹色</span><p data-field-crop-label>选择一个位置，比较取形。</p></div></div>':''}<div class="field-options" role="group" aria-label="选择观察任务"></div>
 ${a.type==='point'?'<figure class="field-linked-detail"><div class="field-detail-heading"><span>实拍细部</span><strong data-field-detail-name></strong></div><button type="button" class="field-detail-pick" data-field-detail-pick aria-label="在放大的实拍细部中选择位置"><canvas width="600" height="375" role="img" aria-label="当前观察区域的实拍放大"></canvas></button><figcaption data-field-detail-caption></figcaption></figure><button type="button" class="field-hint" data-field-hint aria-pressed="false">聚焦全图中的这一处</button>':''}
 ${a.type==='connect'?'<figure class="field-linked-detail field-scene-detail"><div class="field-detail-heading"><span>跟着问题看现场</span><strong data-field-detail-name></strong></div><img data-field-scene-image alt=""><figcaption data-field-detail-caption></figcaption><p class="field-photo-credit" data-field-scene-credit></p></figure>':''}
 ${a.type==='order'?'<div class="field-order-result" data-field-order-result role="status" aria-live="polite" aria-atomic="true"></div><button type="button" class="story-button" data-field-check>检查当前顺序 <span>→</span></button>':''}
 ${a.type==='palette'?'<div class="field-palette"></div><label class="field-main-label">让哪一种成为主色？<select data-field-main aria-label="配色的主色" disabled><option value="0">第 1 色</option><option value="1">第 2 色</option><option value="2">第 3 色</option></select></label><div class="field-color-balance" aria-label="六三一配色面积"></div><p class="field-balance-caption"></p>':''}
 <div class="field-feedback" aria-live="polite"><strong>从你的选择开始</strong><p>操作后的细节与反馈会留在这里。</p></div><div class="field-reason" hidden><label for="field-own-reason">为什么想留下它？<span>选填</span></label><div class="field-reason-chips">${a.reasons.map((reason,i)=>`<button type="button" data-field-reason="${i}" aria-pressed="false">${reason}</button>`).join('')}</div><input id="field-own-reason" maxlength="160" placeholder="也可以写下自己的理由"></div>
 <div class="field-save-row"><output data-field-status role="status"></output><button type="button" data-field-retry hidden>重试保存</button></div></div></div></section>`;
}

export function bindFieldLearning(article,clue){
 const root=article.querySelector('[data-field-clue]');if(!root)return()=>{};
 const a=fieldActivities[clue],saved=getDiscovery(clue),controller=new AbortController(),$=s=>root.querySelector(s),$$=s=>[...root.querySelectorAll(s)];
 const state={photo:saved?.photo||a.photos[0],target:saved?.target||null,point:saved?.point||null,choice:saved?.choice||null,pairs:[...(saved?.pairs||[])],question:0,order:saved?.order||['carve','look','finish','design'],colors:structuredClone(saved?.colors||[]),main:saved?.main||0,slot:0,reason:saved?.reason||'',hint:false,cursor:saved?.point||[.5,.5],keyboard:false};
 let draft=saved,dragged=null,pixelSource=null,reasonTimer=null,detailBounds=null,orderChecked=!!saved,orderConfirmed=!!saved;const image=$('[data-field-image]'),photoAction=$('.field-photo-action'),svg=$('.field-photo-surface svg');
 const listen=(el,type,fn)=>el?.addEventListener(type,fn,{signal:controller.signal});
 function feedback(title,copy,trade=''){const box=$('.field-feedback');box.innerHTML=`<strong>${esc(title)}</strong><p>${esc(copy)}</p>${trade?`<div class="field-trade"><span>同时舍去了什么</span><p>${esc(trade)}</p></div>`:''}`;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)box.animate?.([{opacity:.4},{opacity:1}],{duration:220});}
 function renderReason(){const box=$('.field-reason');box.hidden=!draft;$('#field-own-reason').value=state.reason;for(const b of $$('[data-field-reason]'))b.setAttribute('aria-pressed',String(a.reasons[+b.dataset.fieldReason]===state.reason));}
 function commit(row){draft={...row,clue,reason:state.reason,createdAt:saved?.createdAt};const result=saveDiscovery(draft);$('[data-field-status]').textContent=result.ok?(result.first?'✓ 发现卡已放入研学手册':'✓ 已更新这张发现卡'):result.message;$('[data-field-retry]').hidden=result.ok;renderReason();}
 function paintMarks(){
  if(!svg)return;let marks='';
  if(a.type==='point'){
   const t=a.targets[state.photo].find(t=>t.id===state.target)||a.targets[state.photo][0];
   $('[data-field-hint]').textContent=state.hint?'还原完整照片':'聚焦全图中的这一处';
   if(state.hint)marks+=`<defs><mask id="field-focus-${clue}" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect width="100" height="100" fill="white"/><ellipse cx="${t.x*100}" cy="${t.y*100}" rx="${t.rx*100}" ry="${t.ry*100}" fill="black"/></mask></defs><rect width="100" height="100" fill="#10181b" opacity=".46" mask="url(#field-focus-${clue})"/>`;
   marks+=`<ellipse class="field-target-area" cx="${t.x*100}" cy="${t.y*100}" rx="${t.rx*100}" ry="${t.ry*100}"/>`;
   if(state.point)marks+=`<circle class="field-mark" cx="${state.point[0]*100}" cy="${state.point[1]*100}" r="2.2"/>`;
   if(state.keyboard)marks+=`<path class="field-cursor" d="M${state.cursor[0]*100-3} ${state.cursor[1]*100}h6 M${state.cursor[0]*100} ${state.cursor[1]*100-3}v6"/>`;
  }else if(a.type==='crop'&&state.choice&&image?.naturalWidth){const c=a.choices.find(c=>c.id===state.choice),r=c.r*image.naturalHeight;marks=`<ellipse class="field-crop-outline" cx="${c.x*100}" cy="${c.y*100}" rx="${r/image.naturalWidth*100}" ry="${c.r*100}"/>`;}
  else if(a.type==='palette')marks=state.colors.map((c,i)=>`<g><circle class="field-mark" cx="${c.point[0]*100}" cy="${c.point[1]*100}" r="2.8"/><text x="${c.point[0]*100}" y="${c.point[1]*100+1}">${i+1}</text></g>`).join('');
  if(a.type==='palette'&&state.keyboard)marks+=`<path class="field-cursor" d="M${state.cursor[0]*100-3} ${state.cursor[1]*100}h6 M${state.cursor[0]*100} ${state.cursor[1]*100-3}v6"/>`;svg.innerHTML=marks;
 }
 function animateDetail(){if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const el=$('.field-linked-detail');el?.getAnimations().forEach(a=>a.cancel());el?.animate([{opacity:.5,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});}}
 function drawDetail(){
  if(a.type!=='point')return;
  const canvas=$('.field-detail-pick canvas'),ctx=canvas.getContext('2d'),button=$('[data-field-detail-pick]');
  ctx.clearRect(0,0,canvas.width,canvas.height);detailBounds=null;
  const ready=image.complete&&image.naturalWidth>0&&image.getAttribute('src')===fieldPhotos[state.photo].src;
  button.disabled=!ready;button.setAttribute('aria-busy',String(!ready));if(!ready)return;
  const t=a.targets[state.photo].find(t=>t.id===state.target),view=fieldDetailViews[state.photo][t.id],W=image.naturalWidth,H=image.naturalHeight,aspect=canvas.width/canvas.height;
  let width=view.width*W,height=width/aspect;
  const fit=Math.min(1,W/width,H/height);width*=fit;height*=fit;
  const x=Math.max(0,Math.min(W-width,(view.x??t.x)*W-width/2)),y=Math.max(0,Math.min(H-height,(view.y??t.y)*H-height/2));
  detailBounds={x:x/W,y:y/H,width:width/W,height:height/H};
  ctx.drawImage(image,x,y,width,height,0,0,canvas.width,canvas.height);
  if(state.point){const px=(state.point[0]*W-x)/width*canvas.width,py=(state.point[1]*H-y)/height*canvas.height;ctx.beginPath();ctx.arc(px,py,10,0,Math.PI*2);ctx.fillStyle='#fff9da';ctx.fill();ctx.lineWidth=3;ctx.strokeStyle='#75422c';ctx.stroke();}
  canvas.setAttribute('aria-label',`${fieldPhotos[state.photo].name}：${t.label}的原图局部${state.point?'，已标记所选位置':''}`);
 }
 function showDetail({explain=true,motion=true}={}){
  if(a.type!=='point')return;const t=a.targets[state.photo].find(t=>t.id===state.target),f=fieldFocus[state.photo][t.id];
  $('[data-field-detail-name]').textContent=t.label;$('[data-field-detail-caption]').textContent=f.question;
  if(image.complete&&!image.naturalWidth){photoAction.disabled=true;feedback('照片暂时未能载入','可以切换另一张实物照片，或稍后重新打开这条线索。');}else if(explain)feedback(f.title,f.copy);drawDetail();paintMarks();if(motion)animateDetail();
 }
 function showScene({motion=true}={}){
  if(a.type!=='connect')return;const q=a.questions[state.question],p=fieldPhotos[q.photo],img=$('[data-field-scene-image]');
  img.src=p.src;img.alt=p.name;$('.field-scene-detail').dataset.photoReady=String(img.complete&&img.naturalWidth>0);$('[data-field-detail-name]').textContent=q.answer;
  $('[data-field-detail-caption]').textContent=q.label;$('[data-field-scene-credit]').innerHTML=credit(q.photo);
  $$('[data-field-photo]').forEach(b=>b.dataset.suggested=String(b.dataset.fieldPhoto===q.photo));
  feedback(q.label,q.feedback);if(motion)animateDetail();
 }
 function drawCrop(){
  if(a.type!=='crop')return;const canvas=$('.field-crop-preview canvas'),ctx=canvas.getContext('2d');ctx.clearRect(0,0,360,360);
  if(!image?.complete||!image.naturalWidth||!state.choice)return;const c=a.choices.find(c=>c.id===state.choice),r=c.r*image.naturalHeight;
  ctx.save();ctx.beginPath();ctx.arc(180,180,156,0,Math.PI*2);ctx.clip();ctx.drawImage(image,c.x*image.naturalWidth-r,c.y*image.naturalHeight-r,r*2,r*2,24,24,312,312);ctx.restore();$('[data-field-crop-label]').textContent=c.label;paintMarks();
 }
 function options(){
  const box=$('.field-options');
  if(a.type==='point'){
   const targets=a.targets[state.photo];if(!targets.some(t=>t.id===state.target))state.target=targets[0].id;
   box.innerHTML=targets.map(t=>`<button type="button" data-field-target="${t.id}" aria-pressed="${state.target===t.id}">${t.label}</button>`).join('');
  }else if(a.type==='crop')box.innerHTML=a.choices.map(c=>`<button type="button" data-field-crop="${c.id}" aria-pressed="${state.choice===c.id}">${c.label}</button>`).join('');
  else if(a.type==='connect')box.innerHTML=a.questions.map((q,i)=>`<button type="button" data-field-question="${i}" aria-pressed="${state.question===i}"><b>${state.pairs.includes(q.id)?'✓':String(i+1).padStart(2,'0')}</b>${q.label}</button>`).join('');
  else if(a.type==='order')box.innerHTML='<p class="field-order-question">先从材料出发，还是先进入雕琢？比较相邻两步之间的关系。</p>';
  else box.innerHTML='<p>在照片上点击取色。选中色卡后，可以替换那个位置的颜色。</p>';
 }
 function orderList(focusId=null,direction=null){
  const list=$('.field-order-list');list.innerHTML=state.order.map((id,i)=>{const s=a.steps.find(s=>s.id===id),status=orderCardState(id,i,state.order,a.steps,orderChecked);return`<article draggable="true" tabindex="0" data-field-order="${id}" data-order-state="${status.kind}" aria-label="第 ${i+1} 步：${s.label}"><div><img draggable="false" src="${fieldPhotos[s.photo].src}" alt="${s.label}的观察参考实拍"><span>0${i+1}</span></div><strong>${s.label}</strong><p class="field-order-card-status">${esc(status.label)}</p><nav aria-label="移动${s.label}"><button data-field-move="-1" ${i===0?'disabled':''} aria-label="把${s.label}向前移">← 向前</button><button data-field-move="1" ${i===3?'disabled':''} aria-label="把${s.label}向后移">向后 →</button></nav><small>${esc(fieldPhotos[s.photo].credit)}</small></article>`;}).join('');
  if(focusId){const card=list.querySelector(`[data-field-order="${focusId}"]`),button=card.querySelector(`[data-field-move="${direction}"]:not(:disabled)`);(button||card).focus({preventScroll:true});}
 }
 function orderResult({pulse=false}={}){
  const r=assessOrder(state.order,a.steps),box=$('[data-field-order-result]');box.dataset.state=!orderChecked?'pending':r.correct?'correct':'adjust';
  box.innerHTML=renderOrderResult(state.order,a.steps,{checked:orderChecked,confirmed:orderConfirmed});
  $('[data-field-check]').innerHTML=r.correct?(orderConfirmed?'再检查一次 <span>↻</span>':'确认这条观察思路 <span>✓</span>'):'检查当前顺序 <span>→</span>';
  box.classList.remove('is-pulsing');if(pulse&&!matchMedia('(prefers-reduced-motion: reduce)').matches){void box.offsetWidth;box.classList.add('is-pulsing');}
 }
 function orderChanged(focusId=null,direction=null){
  orderChecked=true;orderConfirmed=false;orderList(focusId,direction);orderResult({pulse:true});$('[data-field-status]').textContent='当前顺序尚未确认';
  const r=assessOrder(state.order,a.steps);feedback(r.correct?'四步已连贯，再确认一次':`接下来，调整第 ${r.first+1} 步`,r.correct?'确认后，会更新这条线索的发现卡。':r.expected.why);
 }
 function palette(){
  $('.field-palette').innerHTML=[0,1,2].map(i=>`<button type="button" data-field-slot="${i}" aria-pressed="${state.slot===i}" style="--field-swatch:${state.colors[i]?.hex||'#e4dfd2'}"><span></span><strong>第 ${i+1} 色</strong><small>${state.colors[i]?.hex||'待取色'}</small></button>`).join('');
  $('[data-field-main]').disabled=state.colors.length<3;$('[data-field-main]').value=state.main;$('.field-color-balance').innerHTML=state.colors.map((c,i)=>`<i style="background:${c.hex};flex:${i===state.main?6:i===(state.main+1)%3?3:1}"><span>${i===state.main?'主色 · 60%':''}</span></i>`).join('');$('.field-balance-caption').textContent=state.colors.length===3?`第 ${state.main+1} 色 60% · 第 ${(state.main+1)%3+1} 色 30% · 第 ${(state.main+2)%3+1} 色 10%`:'';paintMarks();
 }
 function switchPhoto(id){state.photo=id;state.point=null;state.hint=false;state.keyboard=false;pixelSource=null;photoAction.disabled=false;image.src=fieldPhotos[id].src;image.alt=fieldPhotos[id].name;$('.field-photo-credit').innerHTML=credit(id);$$('[data-field-specimen]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.fieldSpecimen===id)));$('[data-field-hint]')?.setAttribute('aria-pressed','false');options();const t=a.targets[id].find(t=>t.id===state.target);state.cursor=[t.x,t.y];showDetail();}
 function confirmPoint(p){
  const t=a.targets[state.photo].find(t=>t.id===state.target),distance=((p[0]-t.x)/t.rx)**2+((p[1]-t.y)/t.ry)**2;
  if(distance>1.7){feedback('再靠近这个细节看看',`这次要找的是“${t.label}”。对照全图的观察框，也可以直接在放大细部中选择。`);return;}
  state.point=p;state.hint=false;$('[data-field-hint]').setAttribute('aria-pressed','false');paintMarks();drawDetail();feedback(t.label,t.feedback);commit({photo:state.photo,target:t.id,point:p});
 }
 function pick(e){
  if(a.type==='crop'||!image?.complete||!image.naturalWidth)return;
  const r=image.getBoundingClientRect(),p=e.detail===0?[...state.cursor]:[Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))];state.cursor=p;state.keyboard=e.detail===0;
  if(a.type==='point'){
   confirmPoint(p);
  }else{
   try{if(!pixelSource){const c=document.createElement('canvas');c.width=image.naturalWidth;c.height=image.naturalHeight;pixelSource=c.getContext('2d',{willReadFrequently:true});pixelSource.drawImage(image,0,0);}
    const x=Math.max(0,Math.min(image.naturalWidth-1,Math.round(p[0]*(image.naturalWidth-1)))),y=Math.max(0,Math.min(image.naturalHeight-1,Math.round(p[1]*(image.naturalHeight-1)))),data=pixelSource.getImageData(x,y,1,1).data,hex='#'+[...data.slice(0,3)].map(v=>v.toString(16).padStart(2,'0')).join('');
    const slot=Math.min(state.slot,state.colors.length);state.colors[slot]={hex,point:p};if(state.colors.length<3)state.slot=state.colors.length;palette();
    if(state.colors.length===3){feedback('同样三种颜色，主次可以不同','试着更换主色，看面积变化如何改变整组配色的印象。');commit({colors:state.colors,main:state.main});}else feedback(`已从实景采下 ${state.colors.length} 色`,'继续在水面、天空或岸线寻找不同的颜色。');
   }catch{feedback('这次还没取到颜色','照片暂时未能读取，可以稍后再试。');}
  }
 }
 listen(root,'click',e=>{
  const b=e.target.closest('button');if(!b||!root.contains(b))return;
  if(b.hasAttribute('data-field-target')){state.target=b.dataset.fieldTarget;state.point=null;state.hint=false;state.keyboard=false;const t=a.targets[state.photo].find(t=>t.id===state.target);state.cursor=[t.x,t.y];options();showDetail();$('[data-field-hint]').setAttribute('aria-pressed','false');$('.field-options').querySelector(`[data-field-target="${state.target}"]`).focus({preventScroll:true});}
  else if(b.hasAttribute('data-field-specimen'))switchPhoto(b.dataset.fieldSpecimen);
  else if(b.hasAttribute('data-field-hint')){state.hint=!state.hint;b.setAttribute('aria-pressed',String(state.hint));paintMarks();}
  else if(b.hasAttribute('data-field-crop')){state.choice=b.dataset.fieldCrop;options();drawCrop();const c=a.choices.find(c=>c.id===state.choice);feedback(c.label,c.gain,c.trade);commit({choice:c.id});$('.field-options').querySelector(`[data-field-crop="${c.id}"]`).focus({preventScroll:true});}
  else if(b.hasAttribute('data-field-question')){state.question=+b.dataset.fieldQuestion;options();$$('[data-field-photo]').forEach(p=>p.setAttribute('aria-pressed','false'));showScene();$('.field-options').querySelector(`[data-field-question="${state.question}"]`).focus({preventScroll:true});}
  else if(b.hasAttribute('data-field-photo')){const q=a.questions[state.question],id=b.dataset.fieldPhoto;$$('[data-field-photo]').forEach(p=>p.setAttribute('aria-pressed',String(p===b)));if(id!==q.photo){feedback('这里也能继续了解',`这处实景更适合看${fieldPhotos[id].name}。如果想回答“${q.label}”，再比较一下${q.answer}。`);return;}state.pairs=[...new Set([...state.pairs,q.id])];options();feedback(q.answer,q.feedback);commit({pairs:state.pairs});}
  else if(b.hasAttribute('data-field-move')){const id=b.closest('[data-field-order]').dataset.fieldOrder,i=state.order.indexOf(id),j=i+Number(b.dataset.fieldMove);if(j<0||j>3)return;[state.order[i],state.order[j]]=[state.order[j],state.order[i]];orderChanged(e.detail===0?id:null,b.dataset.fieldMove);}
  else if(b.hasAttribute('data-field-fix')){const r=assessOrder(state.order,a.steps);if(r.correct)return;state.order.splice(r.first,0,state.order.splice(r.from,1)[0]);orderChanged(e.detail===0?r.expected.id:null,'-1');}
  else if(b.hasAttribute('data-field-check')){orderChecked=true;const r=assessOrder(state.order,a.steps);orderConfirmed=r.correct;orderList();orderResult({pulse:true});document.dispatchEvent(new CustomEvent('agate-feedback',{detail:{kind:r.correct?'correct':'adjust'}}));if(!r.correct){feedback(`先看第 ${r.first+1} 步的依据`,r.expected.why);return;}feedback('从观料到成器，依据连起来了',a.steps.map(s=>s.why).join(''));commit({order:state.order});}
  else if(b.hasAttribute('data-field-slot')){state.slot=+b.dataset.fieldSlot;palette();$('.field-palette').querySelector(`[data-field-slot="${state.slot}"]`).focus({preventScroll:true});}
  else if(b.hasAttribute('data-field-reason')){state.reason=a.reasons[+b.dataset.fieldReason];if(draft)commit(draft);}
  else if(b.hasAttribute('data-field-retry')&&draft)commit(draft);
 });
 listen(photoAction,'click',pick);
 listen($('[data-field-detail-pick]'),'click',e=>{if(!detailBounds||!image.complete||!image.naturalWidth)return;const rect=$('.field-detail-pick canvas').getBoundingClientRect(),p=e.detail===0?[...state.cursor]:[detailBounds.x+(e.clientX-rect.left)/rect.width*detailBounds.width,detailBounds.y+(e.clientY-rect.top)/rect.height*detailBounds.height];state.cursor=p;state.keyboard=e.detail===0;confirmPoint(p);});
 listen(photoAction,'keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)||a.type==='crop')return;e.preventDefault();state.keyboard=true;const delta={ArrowLeft:[-.02,0],ArrowRight:[.02,0],ArrowUp:[0,-.02],ArrowDown:[0,.02]}[e.key];state.cursor=state.cursor.map((n,i)=>Math.max(0,Math.min(1,n+delta[i])));paintMarks();});
 listen(image,'load',()=>{if(controller.signal.aborted)return;photoAction.disabled=false;pixelSource=null;paintMarks();drawCrop();drawDetail();});
 listen(image,'error',()=>{photoAction.disabled=true;drawDetail();feedback('照片暂时未能载入','可以切换另一张实物照片，或稍后重新打开这条线索。');});
 listen($('[data-field-scene-image]'),'load',()=>$('.field-scene-detail').dataset.photoReady='true');
 listen($('[data-field-scene-image]'),'error',()=>{$('.field-scene-detail').dataset.photoReady='false';feedback('照片暂时未能载入','可以切换另一个问题，或稍后重新打开这条线索。');});
 listen($('[data-field-main]'),'change',e=>{state.main=+e.target.value;palette();if(state.colors.length===3)commit({colors:state.colors,main:state.main});});
 listen($('#field-own-reason'),'input',e=>{state.reason=e.target.value.slice(0,160);clearTimeout(reasonTimer);reasonTimer=setTimeout(()=>{if(draft)commit(draft);},400);});
 listen($('#field-own-reason'),'change',e=>{clearTimeout(reasonTimer);state.reason=e.target.value.slice(0,160);if(draft)commit(draft);});
 listen($('.field-order-list'),'dragstart',e=>{const card=e.target.closest('[data-field-order]');if(!card||e.target.closest('button')){e.preventDefault();return;}dragged=card.dataset.fieldOrder;e.dataTransfer.setData('text/plain',dragged);e.dataTransfer.effectAllowed='move';card.classList.add('field-dragging');});
 listen($('.field-order-list'),'dragover',e=>{if(dragged)e.preventDefault();});
 listen($('.field-order-list'),'drop',e=>{e.preventDefault();const card=e.target.closest('[data-field-order]'),from=state.order.indexOf(dragged),to=state.order.indexOf(card?.dataset.fieldOrder);if(from<0||to<0)return;state.order.splice(to,0,state.order.splice(from,1)[0]);dragged=null;orderChanged();});
 listen($('.field-order-list'),'dragend',()=>{dragged=null;$$('.field-dragging').forEach(el=>el.classList.remove('field-dragging'));});
 options();if(a.type==='order'){orderList();orderResult();}if(a.type==='palette')palette();if(a.type==='crop'){photoAction.tabIndex=-1;photoAction.setAttribute('aria-label','原料中的取形位置');drawCrop();}
 if(saved){const d=describeDiscovery(saved);feedback(d.title,d.feedback,d.trade);$('[data-field-status]').textContent='✓ 已恢复这张发现卡';if(image){image.src=fieldPhotos[state.photo].src;image.alt=fieldPhotos[state.photo].name;}if($('.field-photo-credit'))$('.field-photo-credit').innerHTML=credit(state.photo);$$('[data-field-specimen]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.fieldSpecimen===state.photo)));}
 if(a.type==='point'){const t=a.targets[state.photo].find(t=>t.id===state.target);if(!saved)state.cursor=[t.x,t.y];showDetail({explain:!saved,motion:false});}
 if(a.type==='connect')showScene({motion:false});renderReason();paintMarks();
 if(a.type==='order'){
  const result=$('[data-field-order-result]'),check=$('[data-field-check]'),resultHome=document.createComment('order result home'),checkHome=document.createComment('order check home'),dock=document.createElement('div'),mobile=matchMedia('(max-width:750px)');
  result.before(resultHome);check.before(checkHome);dock.className='field-order-mobile-dock';$('.field-media').prepend(dock);
  const layout=()=>{if(mobile.matches)dock.append(result,check);else{resultHome.after(result);checkHome.after(check);}};listen(mobile,'change',layout);layout();
 }
 return()=>{clearTimeout(reasonTimer);if(draft&&state.reason!==draft.reason)commit(draft);controller.abort();};
}
