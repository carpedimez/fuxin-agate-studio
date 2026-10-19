export const journeyPlaces=[
 {id:'welcome',name:'中国玛瑙小镇会客厅',short:'会客厅',type:'文化起点',icon:'hall',x:24,y:47,image:'hero',minutes:30,tag:'认识小镇',fact:'省文旅厅景区介绍列出了中国玛瑙小镇会客厅。',intro:'先建立对小镇的整体认识，再带着问题去看作品与手艺。',observe:'找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。',prepare:'到访前核实开放与讲解安排。',source:'town'},
 {id:'studio',name:'工艺观察与交流',short:'手艺现场',type:'工坊场景',icon:'craft',x:45,y:68,image:'craft',minutes:60,tag:'接待需先联系',fact:'市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。',intro:'把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。',observe:'问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？',prepare:'具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。',source:'rural'},
 {id:'market',name:'玛瑙专业市场',short:'逛逛市集',type:'产业观察',icon:'market',x:49,y:34,image:'hero',minutes:35,tag:'认识原料与文创',fact:'省文旅厅景区介绍提到战国红大市场等专业市场。',intro:'从原料、半成品到文创，观察一块石头如何走进日常生活。',observe:'选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。',prepare:'记录材质与工艺说明，购买与定制由你与经营者自行确认。',source:'town'},
 {id:'water',name:'八宝海湿地景观',short:'水岸慢行',type:'自然观察',icon:'water',x:76,y:24,image:'water',minutes:40,tag:'把脚步放慢',fact:'八宝海湿地景观见于省文旅厅的小镇介绍。',intro:'暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。',observe:'在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。',prepare:'核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。',source:'town'},
 {id:'pagoda',name:'辽代闾州塔',short:'寻访古迹',type:'历史线索',icon:'pagoda',x:83,y:67,image:'water',minutes:25,tag:'从石纹走向乡土',fact:'辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。',intro:'在工艺之外，为这次到访保留一段理解地方历史的时间。',observe:'观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。',prepare:'出发前核实到达方式、可参观范围及文物保护要求。',source:'town'}
];
export const journeyPresets=[
 {id:'craft',title:'半日识艺',subtitle:'先知艺，再观工',description:'把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。',stops:['welcome','studio','market'],interest:'玛瑙文化与工艺观察'},
 {id:'slow',title:'一日慢游',subtitle:'手艺与乡土，都留一点时间',description:'将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。',stops:['welcome','studio','market','water','pagoda'],interest:'乡土文化与自然游览'},
 {id:'family',title:'亲子研学',subtitle:'带着问题，一起去发现',description:'以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。',stops:['welcome','water','studio'],interest:'亲子研学与纹色创作'}
];
export const craftObservations=[
 {label:'观纹色',title:'先问这块石，有什么。',text:'看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。',question:'这块材料最值得保留的天然纹色是什么？'},
 {label:'看构思',title:'让材料，参与决定造型。',text:'同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。',question:'为什么选这个方向和轮廓，而不是另一个？'},
 {label:'识雕琢',title:'从外轮廓，走向细部层次。',text:'关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。',question:'这件作品中，最需要经验判断的是哪一步？'},
 {label:'赏润饰',title:'最后一点光，也关乎表达。',text:'观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。',question:'这种表面处理，怎样让纹色更容易被看见？'}
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
export const ruralConnections=[
 {id:'culture',title:'文化被看见',label:'文化理解',icon:'eye',text:'以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。',visitor:'先了解作品与材料，再决定想看什么。',organizer:'把参观前的知识准备与现场观察任务衔接起来。',maker:'让作品的构思和工艺被清楚地介绍。'},
 {id:'experience',title:'手艺有交流',label:'研学体验',icon:'craft',text:'把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。',visitor:'把想问的问题写进手册，提前确认接待。',organizer:'明确人数、时间、内容与组织责任，再对接工坊。',maker:'根据实际能力安排可参观、可讲解的内容。'},
 {id:'creation',title:'作品进日常',label:'文创连接',icon:'leaf',text:'从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。',visitor:'关注材质与工艺说明，留下自己的设计偏好。',organizer:'以学习收获组织作品讨论，避免把购物当作研学任务。',maker:'展示材料特点与制作过程，沟通定制边界。'},
 {id:'local',title:'乡土共参与',label:'本地协作',icon:'village',text:'工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。',visitor:'在尊重当地安排的前提下，了解更多乡土文化。',organizer:'优先核实本地接待与协作条件，逐步建立合作。',maker:'与市场、村庄及研学组织者协调实际服务。'}
];
