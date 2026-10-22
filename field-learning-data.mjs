export const fieldPhotos={
 crystal:{src:'./assets/photos/agate-crystal.webp',name:'晶体与空腔',credit:'Hannes Grobe · CC BY-SA 2.5',url:'https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg'},
 nodule:{src:'./assets/photos/agate-nodule.webp',name:'结核与条带',credit:'James St. John · CC BY 2.0',url:'https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg'},
 bands:{src:'./assets/photos/agate-bands.webp',name:'红褐色玛瑙切片',credit:'Hannes Grobe · CC BY-SA 2.5',url:'https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg'},
 craft:{src:'./assets/entry-guide/craft.webp',name:'工艺实景',credit:'辽宁发布 / 辽宁卫视 · 阜新玛瑙专题',url:'https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml'},
 carving:{src:'./assets/backgrounds/carving.webp',name:'巧色雕件细部',credit:'辽宁发布 / 辽宁卫视 · 阜新玛瑙专题',url:'https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml'},
 vessels:{src:'./assets/backgrounds/vessels.webp',name:'玛瑙雕件',credit:'辽宁发布 / 辽宁卫视 · 阜新玛瑙专题',url:'https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml'},
 market:{src:'./assets/entry-guide/market.webp',name:'市集实景',credit:'辽宁发布 / 辽宁卫视 · 阜新玛瑙专题',url:'https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml'},
 moss:{src:'./assets/photos/agate-moss-pendant.webp',name:'苔藓玛瑙佩饰',credit:'Hannes Grobe · CC BY-SA 4.0',url:'https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg'},
 cup:{src:'./assets/photos/agate-libation-cup.webp',name:'玛瑙双耳杯 · 清代馆藏',credit:'CMA / Gary Kirchenbauer · CC0 · 1920.425',url:'https://www.clevelandart.org/art/1920.425'},
 water:{src:'./assets/photos/fuxin-yulong-lake.webp',name:'阜新玉龙湖',credit:'张铭哲 / 国际在线',url:'https://ln.cri.cn/n/20250617/bc0f521b-7839-4c8c-8aaa-dd1989a9c85b.html'},
 pagoda:{src:'./assets/photos/luzhou-pagoda.webp',name:'闾州古塔',credit:'阜新县人民政府办公室',url:'https://www.fmx.gov.cn/content/2026/1100171.html'}
};
const target=(id,label,x,y,rx,ry,feedback)=>({id,label,x,y,rx,ry,feedback});
export const fieldActivities={
 stone:{type:'point',title:'在实物上，找到你的观察依据。',lead:'选一个细节，再在照片上指出它的位置。也可以换一块标本比较。',photos:['crystal','nodule'],targets:{
  crystal:[target('band','细窄条带',.20,.50,.025,.15,'你指出了相邻的细窄条带。沿着它看，宽窄与转弯比“颜色很好看”更能说明你观察到了什么。'),target('quartz','浅色晶体',.67,.28,.13,.10,'你指出了浅色结晶区域。把它与外侧细密的条带分开描述，就能看见同一块标本里的结构差异。'),target('cavity','内部空隙',.57,.54,.06,.055,'你找到了内部空隙。对照周围的结晶，可以继续追问矿物怎样在空间中逐渐生长。')],
  nodule:[target('band','弯折的条带',.62,.34,.16,.085,'这处条带转弯并逐渐靠近。与另一块标本比较，连续的层纹也会呈现不同的转折节奏。'),target('quartz','中央结晶',.45,.57,.19,.105,'中央的浅色结晶与外侧色层质感不同。把两者一起看，才能描述这块标本的内外层次。'),target('edge','不规则外缘',.13,.60,.07,.17,'外缘有明显的起伏。外形与内部条带提供了两种不同的观察线索，构思前值得分别看清。')]
 },reasons:['这里的变化最明显','我想比较内部与外侧','这处转折让我想到一个形状']},
 color:{type:'crop',title:'同一块石，试三种取形。',lead:'换一个取形位置，看看留下的颜色与舍去的纹理。',photos:['bands'],choices:[
  {id:'arc',label:'留住浅色弧线',x:.50,y:.56,r:.25,gain:'浅色弧线在取形中保留下来，深浅之间有了清楚的边界。',trade:'完整的大色面被分开，观看重点转向了弧线。'},
  {id:'field',label:'保留深红色面',x:.51,y:.29,r:.17,gain:'取形更集中于深红色面，第一眼的视觉重心较稳定。',trade:'中央浅色弧线和右侧转折没有完整进入取形，条带变化较少。'},
  {id:'turn',label:'跟随右侧转折',x:.74,y:.64,r:.20,gain:'多条纹带靠近的转折进入取形，目光有了移动方向。',trade:'取形偏向材料一侧，完整中央色面难以同时保留。'}
 ],reasons:['我想让浅色边界更清楚','我更看重色面的完整','我想顺着曲线构思']},
 welcome:{type:'connect',title:'把一个问题，连到合适的现场。',lead:'先选你想了解的问题，再点一处实景。',photos:['nodule','craft','market'],questions:[
  {id:'material',label:'纹色从哪里看起？',photo:'nodule',answer:'材料标本',feedback:'先看标本的条带与晶体，再带着具体位置去听讲解。材料观察为后面的工艺问题提供依据。'},
  {id:'making',label:'为什么这样取形？',photo:'craft',answer:'工艺现场',feedback:'把取形的问题带到工艺现场，关注工匠怎样保留纹色、安排轮廓与细节。'},
  {id:'life',label:'作品怎样进入生活？',photo:'market',answer:'展示与市集',feedback:'从展示、交流与用途出发，可以继续了解器物怎样被选择，以及它连接了哪些人。'}
 ],reasons:['先看实物，再提出问题','我想了解一次取舍的原因','我更想知道作品怎样被使用']},
 studio:{type:'order',title:'把一次观察，排成成器的思路。',lead:'拖动照片，或用前后按钮调整顺序，再看看每一步怎样接住上一步。',photos:['nodule','bands','craft','vessels'],steps:[
  {id:'look',label:'先观材料',photo:'nodule',why:'先看色层、外形和可见结构，构思才有材料依据。'},
  {id:'design',label:'顺色构思',photo:'bands',why:'决定保留什么、舍去什么，再安排轮廓与细节。'},
  {id:'carve',label:'雕琢表达',photo:'craft',why:'让形象逐渐明确，始终回看纹色与轮廓的关系。'},
  {id:'finish',label:'润饰观看',photo:'vessels',why:'通过表面与光线看清纹色，检查整体表达。'}
 ],reasons:['每一步都需要前一步的依据','我更理解为什么先观料','我想把顺色的思路带入创作']},
 market:{type:'point',title:'换一种用途，观察重点也会改变。',lead:'比较佩饰与馆藏器物，在实拍上指出连接、轮廓或转折。',photos:['moss','cup'],targets:{
  moss:[target('join','佩戴的连接处',.50,.055,.13,.09,'吊扣把器物与佩戴方式联系起来。看佩饰时，连接方式值得和纹色一起关注。'),target('surface','纹色的铺展',.50,.52,.25,.25,'苔藓状纹理散布在圆形表面。相同轮廓下，深浅分布仍会改变第一眼的视觉重心。'),target('rim','外缘的收拢',.87,.51,.10,.25,'外缘使纹理成为一个完整的器物轮廓。顺着边缘看，可以比较曲面与纹理的关系。')],
  cup:[target('handle','双耳的转折',.22,.53,.08,.14,'双耳增加了器型的转折和细节。把这处衔接与佩饰的吊扣比较，能看到不同用途对应的不同结构。'),target('body','杯身的色面',.52,.52,.24,.20,'杯身较连贯的曲面让天然纹理继续可见。观看器物时，可以同时比较器型与色面。'),target('base','下部的轮廓',.50,.81,.25,.12,'沿下部轮廓看，比较器物怎样收拢。这里练习照片中的外观观察，不据此判断实物能否日常使用。')]
 },reasons:['用途改变了我关注的细节','我想先看连接和衔接','我更关注器型与纹色的关系']},
 water:{type:'palette',title:'从实景里，采一组自己的水色。',lead:'在照片上取三处颜色，再决定哪一种占据主色。',photos:['water'],reasons:['我想保留清亮的感觉','我更喜欢岸线与水面的对比','我想让深浅之间有停顿']},
 pagoda:{type:'point',title:'在古塔实景里，找另一种层次。',lead:'选一条观察线索，在照片上留下一个具体的位置。',photos:['pagoda'],targets:{pagoda:[
  target('tiers','重复的密檐',.375,.29,.11,.18,'你指出了层层展开的檐部。比较相邻层的间距与阴影，能从重复中读到变化。'),
  target('turn','塔身与檐的转折',.39,.50,.14,.08,'这处转折把整体轮廓与局部结构连接起来。把它与石纹的转弯并置，可以比较两种不同的节奏。'),
  target('space','轮廓外的天空',.75,.28,.15,.22,'天空与塔身之间的空隙让轮廓更清楚。观察留白，也是在观察相邻事物之间的关系。')
 ]},reasons:['重复之中也有变化','这处转折让我停下来','周围的空隙让轮廓更清楚']}
};
