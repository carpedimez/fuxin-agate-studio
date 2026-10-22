export const journeyPlaces=[
 {id:'welcome',name:'中国玛瑙小镇会客厅',short:'会客厅',type:'文化起点',icon:'hall',x:24,y:47,image:'hero',minutes:30,tag:'认识小镇',fact:'省文旅厅景区介绍列出了中国玛瑙小镇会客厅。',intro:'先建立对小镇的整体认识，再带着问题去看作品与手艺。',observe:'找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。',prepare:'到访前核实开放与讲解安排。',source:'town'},
 {id:'studio',name:'工艺观察与交流',short:'手艺现场',type:'工坊场景',icon:'craft',x:45,y:68,image:'craft',minutes:60,tag:'接待需先联系',fact:'市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。',intro:'把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。',observe:'问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？',prepare:'具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。',source:'rural'},
 {id:'market',name:'玛瑙专业市场',short:'逛逛市集',type:'产业观察',icon:'market',x:49,y:34,image:'market',minutes:35,tag:'认识原料与文创',fact:'省文旅厅景区介绍提到战国红大市场等专业市场。',intro:'从原料、半成品到文创，观察一块石头如何走进日常生活。',observe:'选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。',prepare:'记录材质与工艺说明，购买与定制由你与经营者自行确认。',source:'town'},
 {id:'water',name:'八宝海湿地景观',short:'水岸慢行',type:'自然观察',icon:'water',x:76,y:24,image:'water',minutes:40,tag:'把脚步放慢',fact:'八宝海湿地景观见于省文旅厅的小镇介绍。',intro:'暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。',observe:'在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。',prepare:'核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。',source:'town'},
 {id:'pagoda',name:'辽代闾州塔',short:'寻访古迹',type:'历史线索',icon:'pagoda',x:83,y:67,image:'pagoda',minutes:25,tag:'从石纹走向乡土',fact:'辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。',intro:'在工艺之外，为这次到访保留一段理解地方历史的时间。',observe:'观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。',prepare:'出发前核实到达方式、可参观范围及文物保护要求。',source:'town'}
];
export const journeyPresets=[
 {id:'craft',title:'半日识艺',subtitle:'先知艺，再观工',description:'把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。',stops:['welcome','studio','market'],interest:'玛瑙文化与工艺观察'},
 {id:'slow',title:'一日慢游',subtitle:'手艺与乡土，都留一点时间',description:'将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。',stops:['welcome','studio','market','water','pagoda'],interest:'乡土文化与自然游览'},
 {id:'family',title:'亲子研学',subtitle:'带着问题，一起去发现',description:'以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。',stops:['welcome','water','studio'],interest:'亲子研学与纹色创作'}
];
export const craftObservations=[
 {label:'观纹色',title:'先问这块石，有什么。',text:'先把明暗、条带和色彩边界分开看，找到最不想失去的一处特征。观料的意义，是认识材料已经给出的条件：哪片颜色适合作主体，哪条纹路值得让形状顺着走。没有这一步，后面的构思就容易只剩套用图案。',question:'这块材料最值得保留的天然纹色是什么？'},
 {label:'看构思',title:'让材料，参与决定造型。',text:'同样一抹颜色，换个取形方向，可能引出叶片、山形或果实的联想。构思并非只问“像什么”，还要问这个联想能否保留材料的特点。比较两种方向，听工匠说明为什么选择其一，以及另一种会失去什么。',question:'为什么选这个方向和轮廓，而不是另一个？'},
 {label:'识雕琢',title:'从外轮廓，走向细部层次。',text:'先看外轮廓怎样让形象可辨，再看转折、层次与刻线怎样突出主题。细节并不是越多越好：有的地方需要强调，有的地方需要留给材料本身。真实制作还要结合内部情况与工坊经验，现场可观看环节以安排为准。',question:'这件作品中，最需要经验判断的是哪一步？'},
 {label:'赏润饰',title:'最后一点光，也关乎表达。',text:'将光泽、刻线与配座放在一起看。表面处理影响纹色在光下是否清楚，配座影响重心与观看方式；它们共同完成作品的表达。试着比较柔和与明亮的观看感受，说明哪一种更有助于读清主题。',question:'这种表面处理，怎样让纹色更容易被看见？'}
];
export const journeyQuiz=[
 {question:'开始构思前，最值得先做什么？',answers:['观察材料已有的天然纹色','先把所有材料想成同一种颜色','完全忽略石头，照着模板取形'],correct:0,explanation:'先观料，再构思，让天然色彩与条带成为设计的一部分。',source:'heritage'},
 {question:'照片最适合帮助我们观察哪一项？',answers:['原料内部所有裂隙','表面可见的颜色与纹理','真实加工后的全部结果'],correct:1,explanation:'照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。',source:'heritage'},
 {question:'把工艺交流加入行程后，出发前还需要做什么？',answers:['直接把本地收藏当成预约凭证','默认所有工坊都随时开放','确认接待方、时间与可参观内容'],correct:2,explanation:'本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。',source:'rural'}
];
export const journeySeasons={
 spring:{name:'春日寻色',icon:'芽',text:'把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。'},
 summer:{name:'夏日缓行',icon:'水',text:'为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。'},
 autumn:{name:'秋日拾光',icon:'叶',text:'从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。'},
 winter:{name:'冬日访艺',icon:'炉',text:'把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。'}
};
export {connections as ruralConnections} from './narrative-data.mjs';
