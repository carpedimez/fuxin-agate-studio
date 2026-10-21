// Image-based interpretation: observations are distinguished from design associations.
const lenses=[
 {id:'color',name:'主色',verb:'寻找重心',x:48,y:32,color:'#a73426',title:'先看红色怎样占据画面',fact:'这张切片照片里，红褐色区域占据较大面积；橙红、深红之间，又有细窄的浅色条带分隔。',meaning:'大面积色块容易建立第一眼的印象。构思时，可以先决定保留哪一片完整的色面，再安排细节，避免每个地方都同样用力。',question:'如果让所有色块都成为主角，目光还会在哪里停留？',detail:'红褐色面与橙红条带',path:'M25 34 Q46 14 76 36',reading:'由大到小，看见主次'},
 {id:'space',name:'浅色',verb:'读懂留白',x:37,y:51,color:'#807159',title:'浅色不是“还没用上的地方”',fact:'靠近中心的一圈浅色窄带，把深红区域勾出清楚的边界；浅色与深色互相衬托，而不是彼此独立。',meaning:'这里借用构图中的“留白”来理解浅色带：给密集的红色一个停顿，也让轮廓更容易被读到。它不是空洞，更不等于要把材料挖去。',question:'如果遮住这圈浅色，内外两片红色还会像现在这样分明吗？',detail:'中央浅色条带与深红边界',path:'M35 57 C31 39 57 39 65 61 Q51 59 35 57',reading:'由深到浅，看见呼吸'},
 {id:'flow',name:'纹势',verb:'跟随走向',x:75,y:64,color:'#376c68',title:'让形状顺着纹路生长',fact:'下方多条弧线向右侧靠拢，形成转折与收束；同一圈条带的宽窄，也随着位置发生变化。',meaning:'顺着它看，可以联想到水流、叶脉或山的轮廓。联想的价值在于回应眼前材料；如果换一块石，构思也应随之改变。',question:'你的联想是由哪一处转折引出的？能在照片上指出来吗？',detail:'右侧条带的收束与转折',path:'M26 66 Q51 77 76 64 Q83 58 87 66',reading:'由线到形，看见方向'}
];
const choices=[
 {id:'band',label:'保留浅色弧线',sub:'让深浅之间有停顿',result:'你选择让浅色成为结构。它能把相邻的红色区分开，也让视线沿着边界移动。',trade:'若轮廓裁得太紧，弧线可能被切断；先看完整的线，再考虑形。',summary:'我想保留中央的浅色弧线，让深浅之间有清楚的停顿。'},
 {id:'field',label:'保留完整红色面',sub:'先建立稳定的重心',result:'你选择先保留色面的完整。大面积红褐色能形成集中的视觉印象，细节可以退后一步。',trade:'如果把所有层次都压成同一片红色，条带的变化会变弱；重心之外，也需要陪衬。',summary:'我想保留完整的红褐色面，让它先建立视觉重心。'},
 {id:'turn',label:'保留纹路的转折',sub:'让走向带出形的联想',result:'你选择让纹路引导目光。右侧的收束与转折，可以成为理解形状的起点。',trade:'如果先套一个固定图案，可能错过原有走向；先指出依据，再给联想起名字。',summary:'我想保留右侧纹路的收束与转折，让形的联想有材料依据。'}
];
const links={palace:'https://www.dpm.org.cn/collection/jade/230107.html',heritage:'https://www.ihchina.cn/project_details/14006/',museum:'https://www.clevelandart.org/art/1920.425'};

export function renderAppreciation(){return `<section class="story-section appreciation" data-story-reveal aria-labelledby="app-title">
 <header class="app-heading"><div><span class="app-eyebrow">01 / THE ART OF SEEING · 巧色赏析台</span><h2 id="app-title">看见天成，<em>读懂匠心。</em></h2></div><p>好看的颜色只是开始。试着找到一处值得保留的细节，再说清楚：<strong>它为什么重要。</strong></p></header>
 <div class="app-definition"><span>先懂一个词<br><b>俏色 / 巧作</b></span><p>利用材料本身的不同颜色来构思和雕琢，让石色与造型相互成全。欣赏它，既要看雕出了什么，也要看<strong>原来的颜色被怎样留下。</strong></p><a href="${links.palace}" target="_blank" rel="noopener">故宫博物院 · 术语与实例 ↗</a></div>
 <div class="app-study" data-app-study>
  <div class="app-study-bar"><span>观察标本 <b>001</b></span><p>点选观察角度，照片上的标记与细读同步变化。</p><output data-app-progress>已观察 1 / 3</output></div>
  <div class="app-workbench">
   <div class="app-specimen"><div class="app-photo-controls"><span>玛瑙切片 · 实物摄影</span><button data-app-guides aria-pressed="true">隐藏观察标记</button></div>
    <div class="app-image-wrap"><img src="./assets/photos/agate-bands.webp" width="1800" height="1481" alt="红褐色玛瑙切片，浅色条带环绕中央区域，并向右侧收束" loading="lazy">
     <svg class="app-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path data-app-trace></path></svg>
     ${lenses.map((l,i)=>`<button class="app-hotspot" style="left:${l.x}%;top:${l.y}%" data-app-point="${i}" aria-label="观察${l.name}：${l.verb}" aria-pressed="${i===0}"><span>0${i+1}</span></button>`).join('')}
    </div><div class="app-image-caption"><span>先整体，再局部；先描述，再联想。</span><button data-app-read>查看当前细读 ↓</button></div>
    <p class="app-credit">Hannes Grobe · <a href="https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg" target="_blank" rel="noopener">原图</a> · <a href="https://creativecommons.org/licenses/by-sa/2.5/" target="_blank" rel="noopener">CC BY-SA 2.5</a> · 公开标本，未标产地</p>
   </div>
   <div class="app-reading"><div class="app-lenses" role="group" aria-label="切片观察角度">${lenses.map((l,i)=>`<button data-app-lens="${i}" aria-pressed="${i===0}"><small>0${i+1}</small><strong>${l.name}</strong><span>${l.verb}</span></button>`).join('')}</div>
    <div class="app-reading-panel" aria-live="polite" aria-atomic="true"></div>
   </div>
  </div>
 </div>
 <div class="app-case" data-story-reveal><div class="app-case-photo"><img src="./assets/photos/agate-libation-cup.webp" width="1800" height="1309" alt="清代玛瑙双耳杯：乳白杯身、褐黄色纹理与兽形双耳" loading="lazy"><span class="app-case-badge">馆藏对照 / 002</span><div class="app-case-caption">玛瑙双耳杯 <span>清 · 1644—1911</span></div></div>
  <div class="app-case-reading"><span class="app-eyebrow">FROM STONE TO OBJECT / 把观察带到器物中</span><h3>纹色有天性，<br>器物有分寸。</h3><p>这件杯子把自然纹理与人工轮廓放在了一起。看杯身，也看双耳：两种线条如何共处？</p><div class="app-case-angles" role="group" aria-label="馆藏观察角度"><button data-app-case="0" aria-pressed="true">看纹色</button><button data-app-case="1" aria-pressed="false">看造型</button></div><div class="app-case-answer" aria-live="polite"></div><p class="app-case-source">克利夫兰艺术博物馆 · 1920.425<br>图像：CMA / Gary Kirchenbauer · CC0<br><a href="${links.museum}" target="_blank" rel="noopener">馆藏档案与开放图像 ↗</a></p></div>
 </div>
 <aside class="app-context" data-story-reveal><span>从馆藏，回望阜新</span><h3>一门手艺的价值，<em>也在于理解每块材料的不同。</em></h3><p>阜新玛瑙雕的国家级非遗项目资料，将天然色彩、条带花纹与雕刻工艺联系在一起。从这里看懂一处色层，再去看匠人的选料与设计，便更容易理解：一件作品的形成，也包含“留下什么”的判断。</p><div><a href="${links.heritage}" target="_blank" rel="noopener">阜新玛瑙雕 · 国家级非遗项目资料 ↗</a><span>上方馆藏作为审美对照，并非阜新产地或工艺归属证明。</span></div></aside>
 <div class="app-practice" data-story-reveal><header><span class="app-eyebrow">YOUR READING / 留下自己的眼光</span><h3>如果只留一处，<em>你会留下什么？</em></h3><p>回到刚才的切片。选一个你最在意的细节，看看它带来的取舍，再写下你的理由。</p></header><div class="app-choices" role="group" aria-label="你想保留的切片细节">${choices.map((c,i)=>`<button data-app-choice="${c.id}" aria-pressed="false"><b>0${i+1}</b><strong>${c.label}</strong><span>${c.sub}</span><i aria-hidden="true">↗</i></button>`).join('')}</div><div class="app-choice-result" aria-live="polite"><span>你的赏析，由一个具体细节开始。</span></div><label class="app-reflection-label" for="app-reflection">再补一句自己的理由 <span>最多 240 字</span></label><textarea id="app-reflection" maxlength="240" rows="3" placeholder="例如：这圈浅色像一道边界，让里面的红色更安静……"></textarea><div class="app-save-row"><p>没有唯一答案。让“我觉得好看”，多一份可以指给别人看的依据。</p><button data-app-save disabled>追加到观察笔记并保存 <span>＋</span></button></div><output class="app-save-status" role="status">选好一处细节后，就可以保存你的赏析。笔记保存在当前浏览器。</output></div>
 <footer class="app-method-note">阅读说明：切片细读与馆藏赏析为本项目的视觉观察；构思联想不代表原作者意图。照片颜色受拍摄与屏幕影响，不能据此判断成分、天然色处理或产地。</footer>
 </section>`;}

export function bindAppreciation(root,{saved={},onCommit}){
 const host=root.querySelector('.appreciation');if(!host)return null;
 const $=s=>host.querySelector(s),$$=s=>[...host.querySelectorAll(s)];
 const controller=new AbortController();const listen=(el,fn)=>el.addEventListener('click',fn,{signal:controller.signal});
 let lens=Number.isInteger(saved.lens)&&saved.lens>=0&&saved.lens<3?saved.lens:0;
 const seen=new Set(Array.isArray(saved.seen)?saved.seen.filter(n=>Number.isInteger(n)&&n>=0&&n<3):[]);
 let choice=choices.some(c=>c.id===saved.choice)?saved.choice:null;
 let noteText=typeof saved.noteText==='string'?saved.noteText.slice(0,1200):'';
 $('#app-reflection').value=typeof saved.reflection==='string'?saved.reflection.slice(0,240):'';
 function detail(){const crop=$('.app-detail-crop');if(!crop)return;const l=lenses[lens],w=$('.app-image-wrap').clientWidth*3,h=w*1481/1800;crop.style.backgroundSize=`${w}px auto`;crop.style.backgroundPosition=`${(w*l.x/100-crop.clientWidth/2)/(w-crop.clientWidth)*100}% ${(h*l.y/100-crop.clientHeight/2)/(h-crop.clientHeight)*100}%`;}
 function select(i){lens=i;seen.add(i);const l=lenses[i];host.style.setProperty('--app-accent',l.color);
  $$('[data-app-lens],[data-app-point]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.appLens??b.dataset.appPoint)===i)));
  $('[data-app-trace]').setAttribute('d',l.path);$('[data-app-progress]').textContent=`已观察 ${seen.size} / 3`;
  $('.app-reading-panel').innerHTML=`<h3>${l.title}</h3><div class="app-detail"><div class="app-detail-crop" role="img" aria-label="局部细节：${l.detail}"></div><span><small>局部放大 × 3</small><strong>${l.detail}</strong></span></div><dl><div><dt>看见什么</dt><dd>${l.fact}</dd></div><div><dt>为什么值得看</dt><dd>${l.meaning}</dd></div></dl><div class="app-question"><span>再想一步</span><p>${l.question}</p></div><p class="app-reading-key">${l.reading}</p>`;detail();
 }
 for(const b of $$('[data-app-lens],[data-app-point]'))listen(b,()=>select(Number(b.dataset.appLens??b.dataset.appPoint)));
 listen($('[data-app-read]'),()=>$('.app-reading').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
 listen($('[data-app-guides]'),e=>{const b=e.currentTarget,show=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(show));b.textContent=show?'隐藏观察标记':'显示观察标记';$('.app-image-wrap').classList.toggle('app-guides-hidden',!show);});
 const caseTexts=[
  '<h4>天然纹色，在器物里继续可见</h4><p>乳白、琥珀色与深褐色纹理，散布在杯身和双耳中。可以沿一处褐黄色纹理看过去：它没有被整齐的器型完全抹平。</p><small>这是对照片的观察；馆方未说明每处颜色对应的具体设计意图。</small>',
  '<h4>把自然曲线与雕刻线条放在一起看</h4><p>杯身的弧面较为连贯，兽形双耳有明确的轮廓和刻纹。前者呈现纹色的铺展，后者增加结构上的转折，疏与密形成不同的观看节奏。</p><small>“疏密与节奏”为本项目赏析；年代、材质与尺寸以馆藏档案为依据。</small>'
 ];
 function setCase(i){$$('[data-app-case]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.appCase===i)));$('.app-case-answer').innerHTML=caseTexts[i];}
 for(const b of $$('[data-app-case]'))listen(b,()=>setCase(+b.dataset.appCase));
 function setChoice(id){choice=id;const c=choices.find(c=>c.id===id);$$('[data-app-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.appChoice===id)));$('[data-app-save]').disabled=!c;$('.app-choice-result').innerHTML=c?`<div><span>你留下的，是一种关系</span><p>${c.result}</p></div><div><span>同时，也需要取舍</span><p>${c.trade}</p></div>`:'<span>你的赏析，由一个具体细节开始。</span>';$('.app-save-status').textContent='选好细节，补上理由，再保存这次的观察。';}
 for(const b of $$('[data-app-choice]'))listen(b,()=>setChoice(b.dataset.appChoice));
 listen($('[data-app-save]'),()=>{const c=choices.find(c=>c.id===choice);if(!c)return;const reflection=$('#app-reflection').value.trim();const text=`【巧色赏析 · 玛瑙切片】\n${c.summary}\n观察依据：${lenses[{band:1,field:0,turn:2}[choice]].fact}${reflection?'\n我的理由：'+reflection:''}`;const previous=noteText;noteText=text;const result=onCommit({text,previous});if(!result.inserted)noteText=previous;$('.app-save-status').textContent=result.ok?'✓ 赏析已追加到下方观察笔记，重新打开仍可查看。':'未能保存：请查看下方笔记区提示。你的选择与理由仍在本页，可复制后重试。';});
 select(lens);setCase(0);if(choice)setChoice(choice);
 const resize=new ResizeObserver(detail);resize.observe($('.app-image-wrap'));
 return {getState:()=>({lens,seen:[...seen],choice,reflection:$('#app-reflection').value.slice(0,240),noteText}),destroy:()=>{controller.abort();resize.disconnect();}};
}
