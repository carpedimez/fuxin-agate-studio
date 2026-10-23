import {createCraftTexture,createGrooveNormal,drawFinished,traceShape} from './craft.mjs';
import {motifOutline} from './core.mjs';
import {materialPreview} from './material-preview.mjs';
import {createPrintExport} from './print-export.mjs';

const steps=[
 {word:'先观\n纹色',title:'选一块喜欢的石',action:'点击左侧原料，观察它的天然条带。',tips:['可以换一块原料，或导入自己的照片。','选好后，点击下方“开始构形”。'],tools:['inspiration']},
 {word:'选色\n构形',title:'把喜欢的纹色放进外形里',action:'拖动轮廓挑选纹理；也可在左侧选颜色，再点“自动寻找所选颜色”。',tips:['左侧选择外形；滚轮调整大小，Shift＋滚轮旋转。','系统只调整取形位置，保留原石本来的颜色。'],tools:['comparison']},
 {word:'落笔\n成艺',title:'在作品上留下一笔',action:'直接在作品上按住并拖动，刻出自己的线条。',tips:['先用“添一组筋线”试试，也可添加纹样、落款。','画布上方可切换擦线；支持撤销与重做。'],tools:['patterns','lettering']},
 {word:'予石\n以光',title:'给它一点光，准备入展',action:'拖动作品查看侧面，调整光泽、厚度与搭配。',tips:['在左侧为作品起名，尝试挂件或展台。','完成后进入作品展厅，赏玩、回看并带走成果。'],tools:['styling']}
];
const creditFor=sample=>sample==='bands'?'原料：Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg · 衍生图 CC BY-SA 2.5':sample==='nodule'?'原料：James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg':sample==='custom'?'原料：用户导入图片':'原料：程序化教学样本';
const referencesFor=sample=>sample==='bands'?[['原始照片与作者','https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg'],['图片及衍生图许可 CC BY-SA 2.5','https://creativecommons.org/licenses/by-sa/2.5/']]:sample==='nodule'?[['原始照片与作者','https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg'],['图片许可 CC BY 2.0','https://creativecommons.org/licenses/by/2.0/']]:[];
const makeCanvas=(w,h)=>Object.assign(document.createElement('canvas'),{width:w,height:h});
const imageFrom=async src=>{const i=new Image();i.src=src;await i.decode();return i;};
const nextFrame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const safeName=text=>(text||'我的玛瑙作品').replace(/[<>:"/\\|?*\u0000-\u001f]/g,'').slice(0,60)||'我的玛瑙作品';

export function createWorkshop(api){
 const {$,$$,state,experience,toast,download}=api,studio=$('#studio');
 studio.classList.add('workbench');
 $('#studio .page-heading').prepend($('#studio>.module-guide-back'));
 const material=$('#studio .material-panel'),design=$('#studio .design-panel');
 const shape=$('.shape-controls'),engrave=$('.engrave-controls'),finish=$('.finish-controls');
 material.append(shape,engrave,finish);
 const advanced=document.createElement('details');advanced.className='work-advanced';advanced.innerHTML='<summary>精细调整选色范围</summary>';
 const color=$('.color-picker');
 for(const node of [color.querySelector('.check'),$('#reanalyze'),$('.brush-tools'),$('#reset-mask'),$('#analysis-status'),$('#pick-color')])advanced.append(node);
 color.querySelectorAll(':scope>.hint').forEach(node=>node.remove());
 color.querySelector('.panel-heading h2').textContent='选择想保留的颜色';
 color.querySelector('.panel-heading').after(Object.assign(document.createElement('p'),{className:'work-color-help',textContent:'选一个色块，自动寻找取形位置。只移动轮廓，保留原石本色。'}));
 color.append(Object.assign(document.createElement('p'),{id:'work-color-state',className:'work-color-state'}),$('#optimize'));
 $('#motif').after(color);shape.append(advanced);
 $('#optimize').innerHTML='自动寻找所选颜色 <span>↗</span>';$('#optimize').title='自动调整轮廓位置，尽量保留所选颜色，不改变原料本色';
 const lock=$('#lock-scale').closest('label');advanced.prepend(lock);
 for(const option of $('#motif').options)option.textContent=({fruit:'果实形',leaf:'叶片形',mountain:'山峰形',drop:'水滴形',round:'圆牌形',heart:'心形',custom:'我的手绘轮廓'})[option.value]||option.textContent;
 const stepLabel=$('.craft-stepper button[data-craft-step="1"] span');stepLabel.firstChild.textContent='选色构形';
 $('.shape-controls .panel-heading h2').textContent='选择外形与取色位置';

 const penSettings=document.createElement('details');penSettings.className='work-advanced';penSettings.innerHTML='<summary>更多笔触：直线、镜像与深浅</summary>';
 const penGroup=$('.engrave-controls .feature-group');penGroup.before($('#preset-lines'),penSettings);penSettings.append(penGroup);
 $('.engrave-controls .step-description').textContent='在作品上按住拖动即可刻线。也可先添筋线，或用上方工具添加纹样与文字。';
 const metrics=document.createElement('details');metrics.className='work-advanced';metrics.innerHTML='<summary>查看构图指标与依据</summary>';
 for(const el of [$('.metrics'),$('#layout-explanation'),$('.method-details')])metrics.append(el);shape.append(metrics);
 finish.prepend($('.work-title'));
 design.classList.add('work-guide');
 design.insertAdjacentHTML('afterbegin','<div class="work-guide-content"><p class="eyebrow" id="work-guide-index"></p><h2 id="work-guide-word"></h2><strong id="work-guide-title"></strong><p id="work-guide-action"></p><ol id="work-guide-tips"></ol><button id="work-demo-button" class="work-demo-button">▷ 看这个动作</button><div id="work-context-tools"></div><p id="work-feedback" role="status" aria-live="polite">选好原料，就可以开始了。</p></div>');
 const slots=$('#work-context-tools');
 const toolRack=document.createElement('section');toolRack.id='work-tool-rack';toolRack.setAttribute('aria-labelledby','work-tools-title');toolRack.innerHTML='<h2 id="work-tools-title">本步工具</h2>';
 toolRack.append(slots);material.prepend(toolRack);
 const posterEntry=$('#open-poster');posterEntry.remove();
 for(const key of ['inspiration','comparison','patterns','lettering','styling'])slots.append($('#open-'+key));
 for(const [key,title,description] of [['inspiration','套用灵感参考','选一种构思，再自行修改'],['comparison','比较创作方案','暂存不同构图，放在一起看'],['patterns','添加纹样','选图案，拖动摆放后刻入'],['lettering','刻字落款','输入文字，拖动确定位置'],['styling','文创搭配','切换挂绳、展台与背景']]){const button=$('#open-'+key),span=button.querySelector('span');span.firstChild.textContent=title;span.querySelector('small').textContent=description;}
 $('.playground').remove();
 $('#canvas-stage').insertAdjacentHTML('beforeend','<div id="work-demo" hidden><canvas id="work-demo-canvas" width="840" height="600"></canvas><span id="work-demo-caption"></span><button type="button" id="work-demo-close" aria-label="关闭操作示范">×</button></div>');
 $('#work-demo-close').onclick=stopTutorial;
 $('#play-demo').textContent='▷ 看本步操作';$('#play-demo').onclick=tutorial;$('#work-demo-button').onclick=tutorial;
 // A single primary action stays in the bottom navigation.
 $('#start-shaping').hidden=true;$('#export-finished').hidden=true;$('#save-finished').hidden=true;$('#capture-3d').hidden=true;
 state.presentation={...state.presentation,backdrop:'paper'};api.playground.sync();

 let timeline=[],captureTimer=0,lastHash='',demoFrame=0,demoEpoch=0,replayTimer=0,recording=null,galleryMode='three',gallerySceneReady=false;
 const guided=new Set();
 const gallery=document.createElement('dialog');gallery.id='work-gallery';gallery.className='work-gallery';gallery.setAttribute('aria-labelledby','gallery-title');
 gallery.innerHTML=`<header class="gallery-heading"><div><small>YOUR WORK · YOUR STORY / 作品展厅</small><h2 id="gallery-title">我的玛瑙作品</h2></div><button id="gallery-close" class="work-outline">← 继续创作</button></header>
 <div class="gallery-layout"><section class="gallery-main"><div class="gallery-tabs" role="tablist" aria-label="作品欣赏方式"><button data-gallery-mode="three" role="tab">立体赏玩</button><button data-gallery-mode="compare" role="tab">原石对照</button><button data-gallery-mode="replay" role="tab">创作回看</button></div>
 <div class="gallery-stage"><div id="gallery-three"></div><canvas id="gallery-flat" width="1000" height="760" hidden aria-label="原石对照与实际创作快照"></canvas><span id="gallery-stage-label">拖动旋转 · 滚轮缩放</span></div>
 <div id="gallery-three-tools" class="gallery-controls"><button data-gallery-view="front">正面</button><button data-gallery-view="side">侧面</button><button data-gallery-view="back">背面</button><button id="gallery-spin" aria-pressed="false">▷ 自动旋转</button><label>背景 <select id="gallery-background"><option value="paper">暖纸展厅</option><option value="ink">墨色工坊</option><option value="night">夜色藏蓝</option></select></label><label>光照 <select id="gallery-light"><option value="left">光从左侧照来</option><option value="right">光从右侧照来</option></select></label></div>
 <div id="gallery-compare-tools" class="gallery-controls" hidden><span>只看成器</span><input id="gallery-compare" type="range" min="0" max="100" value="50" aria-label="原石与成器对照分界"><span>只看原料</span><small>移动分界线：画面左边看原料，右边看成器</small></div>
 <div id="gallery-replay-tools" class="gallery-controls" hidden><button id="gallery-replay-toggle" aria-pressed="false">▷ 播放回看</button><input id="gallery-replay-position" type="range" min="0" max="0" value="0" aria-label="实际创作快照进度"><span id="gallery-replay-label"></span></div>
 <p id="gallery-credit" class="gallery-credit"></p></section>
 <aside class="gallery-exports"><p class="eyebrow">TAKE IT WITH YOU</p><h3>让想法，<br><span>走出屏幕。</span></h3><p>保存数字方案，或导出模型制作实体样件。</p>
 <button id="gallery-save">✓ 更新我的作品<small>入展自动保存 · 修改后可更新同一记录</small></button><button id="gallery-project">↗ 完整创作方案<small>JSON · 原料、轮廓、刻线与实际快照</small></button><button id="gallery-offline">↗ 可交互作品页<small>独立 HTML · 离线转动、对照与回看</small></button><button id="gallery-video">▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small></button><button id="gallery-screenshot">↗ 保存当前 3D 视角<small>PNG · 包含当前搭配与来源</small></button><div class="gallery-paper-exports"><button id="gallery-card">方案卡 PNG</button></div><p id="gallery-status" role="status" aria-live="polite">先转动欣赏，也可以回到创作继续修改。</p></aside></div>`;
 document.body.append(gallery);$('.gallery-paper-exports').append(posterEntry);
 createPrintExport({state,download,gallery});
 $('#open-poster').innerHTML='纪念海报 PNG';
 const previewHome=document.createComment('studio 3D preview');$('#preview-scene').before(previewHome);
 $('#gallery-close').onclick=()=>gallery.close();gallery.addEventListener('cancel',()=>finishRecording(true));
 gallery.addEventListener('close',()=>{stopReplay();finishRecording(true);experience.getScene()?.setAuto(false);$('#spin-piece').setAttribute('aria-pressed','false');$('#spin-piece').textContent='▷ 自动环绕欣赏';$('#gallery-spin').setAttribute('aria-pressed','false');$('#gallery-spin').textContent='▷ 自动旋转';previewHome.after($('#preview-scene'));experience.setView(state.step===3?'preview':state.step===2?'carved':'color');gallerySceneReady=false;$('#next-step').focus({preventScroll:true});});
 $('#gallery-save').onclick=api.saveDesign;$('#gallery-card').onclick=api.exportCard;
 $('#gallery-project').onclick=()=>{capture('保存方案');const project={...api.projectData(),workshopTimeline:timeline.map(({hash,...item})=>item),attribution:creditFor(state.sample),references:referencesFor(state.sample)};download(new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),safeName(state.workTitle)+'-完整方案.json');status('完整方案已导出，可在“导入方案”恢复继续编辑。');};
 $('#gallery-offline').onclick=exportOffline;
 $('#gallery-screenshot').onclick=async()=>{try{await setGalleryMode('three');const scene=experience.getScene();if(!scene)throw Error('三维暂不可用，请先导出方案卡。');const image=await imageFrom(scene.capture()),c=makeCanvas(image.width,image.height+90),ctx=c.getContext('2d');ctx.fillStyle='#f5edde';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(image,0,0);ctx.fillStyle='#4e3a2b';ctx.font='16px sans-serif';ctx.fillText(state.workTitle||'石里有境 · 我的作品',18,image.height+27);ctx.font='11px sans-serif';ctx.fillText(creditFor(state.sample),18,image.height+52,c.width-36);ctx.fillText('数字创意与工艺外观示意 · 非真实加工结果',18,image.height+73);c.toBlob(b=>{if(b)download(b,safeName(state.workTitle)+'-3D视角.png');});}catch(e){status(e.message);}};
 $('#gallery-video').onclick=()=>recording?finishRecording(true):recordVideo();
 $$('[data-gallery-mode]').forEach(button=>button.onclick=()=>setGalleryMode(button.dataset.galleryMode));
 $$('[data-gallery-view]').forEach(button=>button.onclick=()=>{experience.getScene()?.setOrientation(button.dataset.galleryView);$('#gallery-spin').setAttribute('aria-pressed','false');$('#gallery-spin').textContent='▷ 自动旋转';});
 $('#gallery-spin').onclick=()=>{const scene=experience.getScene();if(!scene)return;const enabled=!scene.controls.autoRotate;scene.setAuto(enabled);$('#gallery-spin').setAttribute('aria-pressed',String(enabled));$('#gallery-spin').textContent=enabled?'Ⅱ 暂停旋转':'▷ 自动旋转';};
 $('#gallery-background').onchange=async e=>{state.presentation.backdrop=e.target.value;api.playground.sync();await experience.updatePreview();capture('切换展厅氛围');};
 $('#gallery-light').onchange=async e=>{state.light=e.target.value;$$('[data-light]').forEach(b=>b.classList.toggle('selected',b.dataset.light===state.light));await experience.updatePreview();capture('调整灯光');};
 $('#gallery-compare').oninput=paintComparison;
 $('#gallery-replay-position').oninput=()=>{stopReplay();paintReplay();};$('#gallery-replay-toggle').onclick=()=>replayTimer?stopReplay():playReplay();
 $('#next-step').onclick=()=>state.step===3?openGallery():experience.setStep(state.step+1);

 function status(text){$('#gallery-status').textContent=text;}
 function sync(){
  const n=state.step,s=steps[n];studio.dataset.workStep=String(n);
  $('#play-demo').textContent='▷ 看本步操作';
  $('#save-design').hidden=n!==3;
  if(!guided.has(n)){guided.add(n);const target=$(['#sample-list','#design-canvas','#design-canvas','#polish'][n]);target.classList.add('work-cue');setTimeout(()=>target.classList.remove('work-cue'),2500);}
  $('#work-guide-index').textContent=`0${n+1} / ${['READ THE STONE','CREATE WITH COLOR','LEAVE YOUR MARK','BRING IT TO LIGHT'][n]}`;
  $('#work-guide-word').replaceChildren(...s.word.split('\n').map(word=>Object.assign(document.createElement('span'),{textContent:word})));
  $('#work-guide-title').textContent=s.title;$('#work-guide-action').textContent=s.action;$('#work-guide-tips').replaceChildren(...s.tips.map(text=>Object.assign(document.createElement('li'),{textContent:text})));
  for(const key of ['inspiration','comparison','patterns','lettering','styling'])$('#open-'+key).hidden=!s.tools.includes(key);
  slots.classList.toggle('two-tools',s.tools.length===2);$('#work-tools-title').textContent=['灵感参考','构图辅助工具','刻线辅助工具','作品搭配工具'][n];
  $('#step-goal').textContent=s.title;$('#step-tip').textContent=s.action;
  $('#caption-text').textContent=['先观察纹色，选好后开始构形。','轮廓和取形预览会随操作实时更新。','刻线与落款会同步保留在三维作品中。','作品已进入三维预览，完成后可进入展厅。'][n];
  if(n===3)$('#next-step').innerHTML='进入作品展厅 <span>↗</span>';
  if(n===1)$('#next-step').innerHTML='确认取色位置，去刻线 <span>→</span>';
  $('#work-feedback').textContent=['当前原料：'+$('#canvas-sample-name').textContent,'拖动轮廓，右下角查看实时取形。',state.strokes.length?`已留下 ${state.strokes.length} 道刻线，可继续添加或撤销。`:'试着在作品上拖动，或先添一组筋线。','完成后进入展厅，可以保存作品或导出3D打印文件。'][n];
  // Restrict preview modes to the current task, while preserving their handlers.
  $('#view-color').hidden=n>=2;$('#view-carved').hidden=n===0||n===3;$('#view-preview').hidden=n!==3;
  $('#toggle-overlay').hidden=n!==1;
  const active=location.hash==='#studio';document.documentElement.classList.toggle('workbench-active',active);
 }
 document.addEventListener('agate-craft-step',()=>{stopTutorial();sync();scheduleCapture('进入'+steps[state.step].title);});
 document.addEventListener('agate-craft-change',()=>{if(state.step===2)$('#work-feedback').textContent=state.strokes.length?`已留下 ${state.strokes.length} 道刻线，可撤销、擦除或继续添加。`:'试着在作品上拖动，或先添一组筋线。';scheduleCapture('调整'+['原料','构形','刻线','润色'][state.step]);});
 document.addEventListener('agate-craft-reset',()=>{clearTimeout(captureTimer);timeline=[];lastHash='';sync();scheduleCapture('选定原料');});
 studio.addEventListener('change',()=>scheduleCapture('调整'+['原料','构形','刻线','润色'][state.step]));
 studio.addEventListener('pointerup',e=>{if(e.target.closest('#canvas-stage')){scheduleCapture(state.step===2?'留下刻线':'调整取形');if(state.step===1)$('#work-feedback').textContent='取形位置已更新，看看右下角的成器效果。';}});
 studio.addEventListener('click',e=>{if(e.target.closest('#next-step,.craft-stepper'))capture('确认'+['原料','构形','刻线','润色'][state.step]);},{capture:true});
 window.addEventListener('hashchange',()=>{sync();stopTutorial();if(location.hash!=='#studio'&&gallery.open)gallery.close();});
 const headerObserver=new ResizeObserver(()=>document.documentElement.style.setProperty('--work-header',Math.ceil($('.header').getBoundingClientRect().height)+'px'));headerObserver.observe($('.header'));
 $('#design-canvas').addEventListener('pointerdown',stopTutorial,{capture:true});
 sync();

 function scheduleCapture(reason){clearTimeout(captureTimer);captureTimer=setTimeout(()=>capture(reason),650);}
 function capture(reason){
  if(!state.image||!state.analysis)return;
  const hash=JSON.stringify([state.sample,state.kind,state.pose,state.selectedColor,state.strokes,state.inscription,state.polish,state.thickness,state.presentation,state.workTitle,state.light]);
  if(hash===lastHash)return;lastHash=hash;
  const c=makeCanvas(480,360),ctx=c.getContext('2d');ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,480,360);
  if(state.step===0){const image=materialPreview(state),k=Math.min(430/image.width,310/image.height);ctx.drawImage(image,(480-image.width*k)/2,(360-image.height*k)/2,image.width*k,image.height*k);}else drawFinished(ctx,480,360,state,{background:false,padding:.12});
  timeline.push({label:reason,step:state.step,time:new Date().toISOString(),image:c.toDataURL('image/jpeg',.72),hash});
  if(timeline.length>24)timeline.splice(1,1);
 }
 async function openGallery(){
  if(!state.image||!state.analysis){toast('请先选一块原料。');return;}
  stopTutorial();capture('完成作品');const saved=api.saveDesign({automatic:true});$('#gallery-title').textContent=state.workTitle||'石里有境 · 我的玛瑙作品';$('#gallery-credit').textContent=creditFor(state.sample)+' · 数字工艺外观示意';$('#gallery-background').value=state.presentation.backdrop;$('#gallery-light').value=state.light;
  gallery.showModal();$('#gallery-three').append($('#preview-scene'));$('#gallery-replay-position').max=Math.max(0,timeline.length-1);$('#gallery-replay-position').value='0';await setGalleryMode('three');status(saved?'已自动保存到“我的作品”；再次入展会更新这件作品。':'未能保存到浏览器，请先下载完整方案保留作品。');
 }
 async function setGalleryMode(mode){
  if(recording)return;stopReplay();galleryMode=mode;
  $$('[data-gallery-mode]').forEach(b=>{const selected=b.dataset.galleryMode===mode;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});
  $('#gallery-three').hidden=mode!=='three';$('#gallery-flat').hidden=mode==='three';for(const id of ['three','compare','replay'])$('#gallery-'+id+'-tools').hidden=id!==mode;
  if(mode==='three'){
   experience.setView('preview');await experience.updatePreview();await nextFrame();experience.getScene()?.resize();gallerySceneReady=!!experience.getScene();$('#gallery-stage-label').textContent=gallerySceneReady?'拖动旋转 · 滚轮缩放':'三维暂不可用，当前显示成器图；仍可对照、回看或下载方案';
   if(!gallerySceneReady){$('#gallery-three').hidden=true;$('#gallery-flat').hidden=false;const c=$('#gallery-flat'),ctx=c.getContext('2d');ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,c.width,c.height);drawFinished(ctx,c.width,c.height,state,{background:false});}
   for(const selector of ['#gallery-spin','#gallery-screenshot','#gallery-video','[data-gallery-view="front"]','[data-gallery-view="side"]','[data-gallery-view="back"]'])$(selector).disabled=!gallerySceneReady;
  }else if(mode==='compare')paintComparison();else paintReplay();
 }
 // Tabs support both pointer input and the standard keyboard arrow pattern.
 $('.gallery-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const ids=['three','compare','replay'],i=ids.indexOf(galleryMode),next=e.key==='Home'?0:e.key==='End'?2:(i+(e.key==='ArrowRight'?1:2))%3;setGalleryMode(ids[next]);$(`[data-gallery-mode="${ids[next]}"]`).focus();});
 function fitImage(ctx,img,w,h){const k=Math.min((w-100)/img.width,(h-100)/img.height);ctx.drawImage(img,(w-img.width*k)/2,(h-img.height*k)/2,img.width*k,img.height*k);}
 function paintComparison(){const c=$('#gallery-flat'),ctx=c.getContext('2d'),w=c.width,h=c.height,x=w*Number($('#gallery-compare').value)/100;ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,w,h);drawFinished(ctx,w,h,state,{background:false,padding:.13});ctx.save();ctx.beginPath();ctx.rect(0,0,x,h);ctx.clip();ctx.fillStyle='#e4d4b9';ctx.fillRect(0,0,w,h);fitImage(ctx,materialPreview(state),w,h);ctx.restore();ctx.strokeStyle='#a2573c';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();$('#gallery-stage-label').textContent='左：整块原料 / 右：本次取形与刻线 · 非同位置透视对齐';}
 let replayPaint=0;
 async function paintReplay(){const token=++replayPaint,index=Number($('#gallery-replay-position').value),item=timeline[index];if(!item)return;let image;try{image=await imageFrom(item.image);}catch{if(token===replayPaint)status('这张快照未能读取，可以选择其他快照，或继续欣赏作品。');return;}if(token!==replayPaint)return;const c=$('#gallery-flat'),ctx=c.getContext('2d');ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,c.width,c.height);fitImage(ctx,image,c.width,c.height);$('#gallery-replay-label').textContent=`${index+1} / ${timeline.length}`;$('#gallery-stage-label').textContent=item.label+' · '+new Date(item.time).toLocaleTimeString('zh-CN');}
 function stopReplay(){clearInterval(replayTimer);replayTimer=0;$('#gallery-replay-toggle').textContent='▷ 播放回看';$('#gallery-replay-toggle').setAttribute('aria-pressed','false');}
 function playReplay(){if(!timeline.length)return;if(Number($('#gallery-replay-position').value)>=timeline.length-1)$('#gallery-replay-position').value='0';paintReplay();$('#gallery-replay-toggle').textContent='Ⅱ 暂停回看';$('#gallery-replay-toggle').setAttribute('aria-pressed','true');replayTimer=setInterval(()=>{const next=Number($('#gallery-replay-position').value)+1;if(next>=timeline.length){stopReplay();return;}$('#gallery-replay-position').value=String(next);paintReplay();},1200);}
 function stopTutorial(){demoEpoch++;cancelAnimationFrame(demoFrame);$('#work-demo').hidden=true;}
 function tutorial(){
  if(!state.image)return;stopTutorial();const token=demoEpoch,n=state.step,layer=$('#work-demo'),c=$('#work-demo-canvas'),ctx=c.getContext('2d'),start=performance.now();layer.hidden=false;$('#work-demo-caption').textContent=['操作示范：左侧选择原料，观察天然纹色','操作示范：拖动轮廓，挑选想保留的颜色','操作示范：按住拖动，在作品上留下一笔','操作示范：调整光泽，再拖动作品查看厚度'][n];
  const draft={...state,pose:{...state.pose},strokes:structuredClone(state.strokes)},reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const frame=now=>{if(token!==demoEpoch)return;const t=Math.min(1,(now-start)/4000),a=reduced?.6:(Math.sin(t*Math.PI*2)*.5+.5);ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,840,600);
   if(n<=1){fitImage(ctx,materialPreview(state),840,600);if(n===1){ctx.save();ctx.translate(330+a*160,300);ctx.scale(140,140);traceShape(ctx,state.kind);ctx.fillStyle='#fff4cf2a';ctx.fill();ctx.strokeStyle='#9e4936';ctx.lineWidth=.03;ctx.stroke();ctx.restore();}ctx.fillStyle='#fff7e8';ctx.beginPath();ctx.arc(330+a*160,n===0?210+a*70:300,12,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#9e4936';ctx.lineWidth=3;ctx.stroke();}
   else{if(n===2)draft.strokes=[...state.strokes,{width:.023,depth:.6,points:Array.from({length:Math.max(2,Math.round(t*40))},(_,i)=>[-.5+i*.025,Math.sin(i*.08)*.15])}];else draft.polish=.2+a*.7;drawFinished(ctx,840,600,draft,{background:false,padding:.14});}
   if(!reduced&&t<1)demoFrame=requestAnimationFrame(frame);else if(!reduced)setTimeout(()=>{if(token===demoEpoch)stopTutorial();},800);
  };frame(start);
 }
 async function exportOffline(){
  const button=$('#gallery-offline');button.disabled=true;status('正在封装当前作品与离线欣赏程序…');
  try{capture('保存作品页');const viewerUrl=new URL('./viewer.bundle.js',import.meta.url);viewerUrl.search=new URL(import.meta.url).search;const response=await fetch(viewerUrl);if(!response.ok)throw Error('离线欣赏程序暂时未能读取，请稍后重试。');const script=await response.text();
   const source=makeCanvas(720,540),ctx=source.getContext('2d');ctx.fillStyle='#eee2cd';ctx.fillRect(0,0,720,540);fitImage(ctx,materialPreview(state),720,540);
   const finished=makeCanvas(900,700);finished.getContext('2d').fillStyle='#eee2cd';finished.getContext('2d').fillRect(0,0,900,700);drawFinished(finished.getContext('2d'),900,700,state,{background:false});
   const data={title:state.workTitle||'石里有境 · 我的作品',credit:creditFor(state.sample),references:referencesFor(state.sample),kind:state.kind,outline:motifOutline(state.kind),texture:createCraftTexture(state,{size:768}).toDataURL(),normal:createGrooveNormal(state.strokes,384,state.inscription).toDataURL(),polish:state.polish,light:state.light,thickness:state.thickness,presentation:{...state.presentation},source:source.toDataURL('image/jpeg',.82),finished:finished.toDataURL(),timeline:timeline.map(({hash,...row})=>row),project:api.projectData()};
   const json=JSON.stringify(data).replace(/</g,'\\u003c'),code=script.replace(/<\/script/gi,'<\\/script');
   const html='<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>石里有境 · 离线作品</title></head><body><script type="application/json" id="work-data">'+json+'</script><script>'+code+'</script></body></html>';
   download(new Blob([html],{type:'text/html;charset=utf-8'}),safeName(state.workTitle)+'-可交互作品.html');status('作品页已下载：离线打开即可转动、对照、回看，素材署名已保留。');
  }catch(e){status(e.message||'作品页导出失败，请重试。');}finally{button.disabled=false;}
 }
 function finishRecording(cancel=false){if(!recording)return;recording.cancelled=cancel;cancelAnimationFrame(recording.frame);if(recording.recorder.state!=='inactive')recording.recorder.stop();}
 async function recordVideo(){
  try{
   if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream)throw Error('当前浏览器不支持短片录制，可使用3D截图或离线作品页。');
   const mime=['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm','video/mp4'].find(t=>MediaRecorder.isTypeSupported(t));if(!mime)throw Error('当前浏览器没有可用的录制格式，可使用3D截图或离线作品页。');
   await setGalleryMode('three');const scene=experience.getScene();if(!scene)throw Error('三维暂不可用，无法录制旋转短片。');
   const canvas=makeCanvas(1280,720),ctx=canvas.getContext('2d'),stream=canvas.captureStream(24),recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:5500000}),rotation=scene.stone.rotation.clone(),auto=scene.controls.autoRotate,chunks=[];
   const run={recorder,stream,scene,rotation,auto,frame:0,cancelled:false};recording=run;scene.setAuto(false);scene.controls.enabled=false;
   gallery.querySelectorAll('button,input,select').forEach(el=>{if(el.id!=='gallery-video'&&el.id!=='gallery-close'){el.dataset.recordDisabled=String(el.disabled);el.disabled=true;}});
   $('#gallery-video').innerHTML='× 取消录制<small>正在生成当前作品的旋转短片</small>';
   recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
   recorder.onstop=()=>{cancelAnimationFrame(run.frame);stream.getTracks().forEach(t=>t.stop());scene.stone.rotation.copy(rotation);scene.setAuto(gallery.open?auto:false);scene.controls.enabled=true;recording=null;gallery.querySelectorAll('[data-record-disabled]').forEach(el=>{el.disabled=el.dataset.recordDisabled==='true';delete el.dataset.recordDisabled;});$('#gallery-video').innerHTML='▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small>';if(!run.cancelled&&chunks.length){download(new Blob(chunks,{type:mime}),safeName(state.workTitle)+'-旋转短片.'+(mime.includes('mp4')?'mp4':'webm'));status('旋转短片已保存，分辨率 1280×720。');}else status('已取消录制，作品保持不变。');};
   recorder.onerror=()=>{run.cancelled=true;finishRecording(true);status('录制未完成，可以重试或导出截图。');};
   const started=performance.now();recorder.start(250);
   const frame=now=>{if(recording!==run)return;if(document.hidden||!gallery.open){finishRecording(true);return;}const t=Math.min(1,(now-started)/6000);scene.stone.rotation.y=rotation.y+t*Math.PI*2;scene.render();ctx.fillStyle='#f5edde';ctx.fillRect(0,0,1280,720);ctx.fillStyle='#4d3829';ctx.font='bold 28px sans-serif';ctx.fillText(state.workTitle||'石里有境 · 我的玛瑙作品',34,46,1150);const source=scene.renderer.domElement,k=Math.min(1212/source.width,560/source.height),w=source.width*k,h=source.height*k;ctx.drawImage(source,(1280-w)/2,72+(560-h)/2,w,h);ctx.font='15px sans-serif';ctx.fillText(creditFor(state.sample),34,674,1212);ctx.font='13px sans-serif';ctx.fillText('石里有境 / 阜新玛瑙文化数字创作 · 数字工艺外观示意',34,702);status(`正在录制旋转短片 ${Math.min(6,Math.floor(t*6))} / 6 秒，请保持此窗口打开。`);if(t>=1)finishRecording(false);else run.frame=requestAnimationFrame(frame);};frame(started);
  }catch(e){status(e.message||'录制暂不可用，请重试。');}
 }
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stopReplay();if(recording)finishRecording(true);}});
 return{openGallery,capture,sync,get timeline(){return timeline.map(({hash,...row})=>row);},restoreTimeline(rows){timeline=Array.isArray(rows)?rows.filter(x=>typeof x?.image==='string'&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(x.image)&&x.image.length<200000&&typeof x.label==='string'&&x.label.length<80&&typeof x.time==='string').slice(-24).map(x=>({image:x.image,label:x.label,time:x.time,step:Number(x.step)||0})):[];lastHash='';}};
}
