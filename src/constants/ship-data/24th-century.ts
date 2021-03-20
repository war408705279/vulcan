/**
 * @file ship-data 相关 24th-century 文件
 * @description 24 世纪星舰
 */

import IconAmbassadorClass from './images/24th-century/icon-ambassador-class.jpg'
import IconCentaurClass from './images/24th-century/icon-centaur-class.jpg'
import IconCurryType from './images/24th-century/icon-curry-type.jpg'
import IconNiagaraClass from './images/24th-century/icon-niagara-class.jpg'
import IconFreedomClass from './images/24th-century/icon-freedom-class.jpg'
import IconCheyenneClass from './images/24th-century/icon-cheyenne-class.jpg'
import IconNewOrleansClass from './images/24th-century/icon-neworleans-class.jpg'
import IconRavenType from './images/24th-century/icon-raven-type.jpg'
import IconSpringfieldClass from './images/24th-century/icon-springfield-class.jpg'
import IconGalaxyClass from './images/24th-century/icon-galaxy-class.jpg'

import { DataType } from '.'

export const data: DataType = {
  AmbassadorClass: {
    icon: IconAmbassadorClass,
    name: '大使级',
    spec: '重型巡洋舰',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '10 条相位阵列 / 2 具光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '大使级星舰是星际舰队在 24 世纪早期到 24 世纪晚期服役的一种重型巡洋舰，在 24 世纪早期的联邦 - 克林贡战争和 2367 年的 Wolf 359 战役中都可以看见大使级的身影',
    known: [
      'NX/NCC-10521 / USS Ambassador / 联邦星舰大使号',
      'NCC-10532 / USS Horatio / 联邦星舰霍雷肖号',
      'NCC-1701-C / USS Enterprise / 联邦星舰企业号',
      'NCC-26136 / USS Zhukov / 联邦星舰朱可夫号',
      'NCC-26198 / USS Valdemar / 联邦星舰瓦尔德马号',
      'NCC-26510 / USS Yamaguchi / 联邦星舰山口号',
      'NCC-26517 / USS Excalibur / 联邦星舰圣剑号',
      'NCC-26531 / USS Exeter / 联邦星舰埃克塞特号',
      'NCC-26632 / USS Gandhi / 联邦星舰甘地号',
      'NCC-26849 / USS Adelphi / 联邦星舰阿德菲号'
    ],
    note: '大使级的设计和绝大部分的联邦星舰相似，大使级依旧采取碟部 - 工程部 - 曲速舱的设计，其尺寸大小介于精进级和银河级之间。许多大使级的外形在后来的升级中发生了一些小改动，碟部和工程部的连接处稍稍向后移动了一点，两侧的曲速架也以完全相同的方式进行了微微的移动，并在巴萨德采集器周围添加了曲速线圈使其看上去更接近银河级，同时脉冲引擎的颜色也由之前的蓝色变为红色'
  },
  CentaurClass: {
    icon: IconCentaurClass,
    name: '半人马级',
    spec: '驱逐舰',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [
      '曲速 7 级'
    ],
    maxSpeed: [],
    arms: [
      '9 门相位炮组 / 4 具光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '半人马型星舰是星际舰队于 24 世纪服役的一批驱逐舰',
    known: [
      'NCC-42043 / USS Centaur / 联邦星舰半人马号',
      'NCC-42050 / USS Carolina / 联邦星舰卡罗莱纳号'
    ],
    note: '半人马型的总体设计很紧凑，只有一个碟形部分直接连接到一个小型的次级武器吊舱，里面装有 4 具光子鱼雷发射管。其武器吊舱与米兰达级的武器吊舱配置相同，该型与老式的沃克级在设计上有着一部分相似之处。半人马型并没有采用和常见星舰一样的设计，其主偏导仪从外部不可见，最为特殊的一点便是半人马级的穿梭机库位于舰桥正前方而非后方'
  },
  CurryType: {
    icon: IconCurryType,
    name: '卡瑞型',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '卡瑞型星舰是星际舰队于 24 世纪服役的星舰，主要活跃于自治同盟战争中',
    known: [
      'NCC-42254 / USS Curry / 联邦星舰卡瑞号',
      'NCC-42264 / USS Raging Queen / 联邦星舰狂暴女皇号'
    ],
    note: '狂暴女皇号和卡瑞号在外表上不太一致，有一部分差别，因此狂暴女皇号是否算卡瑞型星舰并不肯定'
  },
  NiagaraClass: {
    icon: IconNiagaraClass,
    name: '尼亚加拉级',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '尼亚加拉级星舰是星际舰队主要服役于 24 世纪中叶的一批星舰，与传统星舰不同的是尼亚加拉级采取了三曲速舱的设计，全级一共只知道两艘星舰且均在 Wolf 359 战役中损毁',
    known: [
      'NCC-33821 / USS Wellington / 联邦星舰威林顿号',
      'NCC-59804 / USS Princeton / 联邦星舰普林斯顿号'
    ],
    note: ''
  },
  FreedomClass: {
    icon: IconFreedomClass,
    name: '自由级',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '自由级星舰是星际舰队于 24 世纪晚期服役的一批星舰，和 23 世纪中叶的萨拉丁级和赫尔墨斯级的设计类似，自由级是少数只拥有一个曲速舱的星舰之一，通过一个曲速架将曲速舱和碟部连接在一起',
    known: [
      'NCC-68723 / USS Firebrand / 联邦星舰火炬号'
    ],
    note: ''
  },
  CheyenneClass: {
    icon: IconCheyenneClass,
    name: '夏延级',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '夏延级星舰是星际舰队于 24 世纪服役的一批星舰，其主要特征便是拥有 4 个曲速舱之间连接碟部，和 23 世纪服役的星座级、尼米兹级、卡德纳斯级相似',
    known: [
      'NCC-71620 / USS Ahwahnee / 联邦星舰阿瓦尼号'
    ],
    note: ''
  },
  NewOrleansClass: {
    icon: IconNewOrleansClass,
    name: '新奥尔良级',
    spec: '护卫舰',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '新奥尔良级星舰是星际舰队于 24 世纪服役的一批护卫舰，其碟部设计和银河级相似，且搭载了 3 个传感器舱，但主要武器系统依旧是常见的相位阵列和光子鱼雷发射管',
    known: [
      'NCC-65491 / USS Kyushu / 联邦星舰九州号',
      'NCC-65530 / USS Thomas Paine / 联邦星舰托马斯 · 佩恩号',
      '未知舷号 / USS Rutledge / 联邦星舰拉特利奇号',
      '未知舷号 / USS Renegade / 联邦星舰叛逆者号'
    ],
    note: ''
  },
  RavenType: {
    icon: IconRavenType,
    name: '渡鸦型',
    spec: '探索舰',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '极少'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '渡鸦型星舰是星际舰队于 24 世纪开始服役的一批小型，模块化的深空探索舰，其设计有点类似于多瑙河级小艇，被设计成只需要极少的船员操控便可以正常运作，同样的这一级星舰也具备一个小型穿梭机舱',
    known: [
      'NAR-32450 / USS Raven / 联邦星舰渡鸦号'
    ],
    note: ''
  },
  SpringfieldClass: {
    icon: IconSpringfieldClass,
    name: '春田级',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射器'
    ],
    defend: '',
    information: '春田级星舰是星际舰队于 24 世纪服役的一批星舰，该级星舰资料极少，已知的是其设计类似于夏延级星舰，但是采取的是双曲速舱设计，且在碟部下方悬挂了一个主偏导仪，舰尾处安装了一个挂仓',
    known: [
      'NCC-57302 / USS Chekov / 联邦星舰契科夫号'
    ],
    note: '建造基地：旧金山轨道船坞'
  },
  GalaxyClass: {
    icon: IconGalaxyClass,
    name: '银河级',
    spec: '探索舰',
    time: '24 世纪 60 年代',
    length: '600+ 米',
    width: '',
    height: '42 层甲板',
    quality: [],
    crewNum: [
      '1000 - 6000 人'
    ],
    cruisingSpeed: [
      '曲速 6 级'
    ],
    maxSpeed: [
      '曲速 9.6 级',
      '极限速度：曲速 9.8 级'
    ],
    arms: [
      '12 或 14 条相位阵列 / 2 具光子鱼雷发射管（大约 250 发光子鱼雷）/ 反物质水雷'
    ],
    defend: '偏导护盾',
    information: '银河级星舰是于 24 世纪 60 年代服役的一批新一代探索舰，在当时银河级星舰是整个星际联邦中最大、最强、最复杂的星舰。后来的在自治同盟战争中银河级也发挥了很大的作用。银河级星舰的开发项目位于乌托邦普兰尼塔舰队基地进行，其大部分技术都在包括奥伯特级在内的部分原型星舰上进行了测试，其曲速核心也是由联邦最杰出的工程师在瑟兰 T - 1 前哨站中所设计，同时银河级星舰的主要部件既可以在地面上也可以直接在轨道上进行建造',
    known: [
      'NCC-70637 / USS Galaxy / 联邦星舰银河号',
      'NCC-1701-D / USS Enterprise / 联邦星舰企业号',
      'NCC-71099 / USS Challenger / 联邦星舰挑战者号',
      'NCC-71832 / USS Odyssey / 联邦星舰奥德赛号',
      'NCC-71854 / USS Venture / 联邦星舰风险号',
      'NCC-71807 / USS Yamato / 联邦星舰大和号',
      '未知舷号 / USS Magellan / 联邦星舰麦哲伦号'
    ],
    note: '银河级星舰具备碟舰分离能力，意思就是碟部和工程部可以分为两个部分独立飞行，为此银河级也搭载了主舰桥和战斗舰桥两个舰桥'
  },
  NebulaClass: {
    name: '星云级',
    spec: '',
    time: '2363 年',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '星云级星舰与比她更大的银河级星舰在设计上有着众多相似的地方尤其是她的主和次级船壳以及曲速舱。在主船体的顶部是一个上部结构，可以支撑各种模块，例如配备鱼雷发射器的三角形平台（以萨瑟兰号为例的大部分星云级）、椭圆形平台（凤凰号）或额外的曲速短舱（最早出现于剧中的一个模型，在后期采访中剧组的工作人员承认在 Wolf 359 战役中损毁的两艘星云级的其中一艘也是这个设计）',
    known: [
      'NCC-62048 / USS Bellerophon / 联邦星舰贝勒罗芬号',
      'NCC-70915 / USS Bonchune / 联邦星舰邦春号',
      'NCC-60597 / USS Farragut / 联邦星舰法拉格特号',
      'NCC-60205 / USS Honshu / 联邦星舰本州号',
      'NCC-70352 / USS Leeds / 联邦星舰利兹号',
      'NCC-30405 / USS Lexington / 联邦星舰列克星敦号',
      'NCC-61827 / USS Merrimac / 联邦星舰梅里马克号',
      'NCC-61826 / USS Monitor / 联邦星舰侦探号',
      'NCC-65420 / USS Phoenix / 联邦星舰凤凰号',
      'NCC-71201 / USS Prometheus / 联邦星舰普罗米修斯号',
      'NCC-72015 / USS Sutherland / 联邦星舰萨瑟兰号',
      'NCC-85183 / USS Albert Einstein / 联邦星舰阿尔伯特 · 爱因斯坦号',
      'NCC-71805 / USS Endeavour / 联邦星舰奋进号',
      '未知舷号 / USS Hera / 联邦星舰赫拉号',
      '未知舷号 / USS Ulysses / 联邦星舰尤利西斯号',
      '未知舷号 / USS Proxima / 联邦星舰比邻星号',
      '未知舷号 / USS T\'Kumbra / 联邦星舰库姆拉布号'
    ],
    note: '星云级的建造时间从 2363 年到 2367 年不等。包括菲尼克斯号、普罗米修斯号和萨瑟兰号在内的船只都是在 A - 40 埃里达尼星际舰队造船厂（前两艘）和旧金山舰队造船厂建造的。星云级的主要任务覆盖了包括科学探索到巡逻运输在内的一系列多元化任务'
  },
  DanubeClass: {
    name: '多瑙河级',
    spec: '小型汽艇',
    time: '2368 年',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '2 - 4 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 5 级'
    ],
    arms: [
      '4 条相位阵列发射器 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '多瑙河级星舰是星际舰队于 2368 年开始服役的一批小型短程汽艇，有趣的是深空九号上所有的多瑙河级星舰都是以地球上河流的名字命名的',
    known: [
      '未知舷号 / USS Gander / 联邦星舰甘德号',
      'NCC-72454 / USS Ganges / 联邦星舰恒河号',
      '未知舷号 / USS Mekong / 联邦星舰湄公河号',
      '未知舷号 / USS Orinoco / 联邦星舰奥里诺科河号',
      'NCC-72452 / USS Rio Grande / 联邦星舰里奥格兰德河',
      'NCC-72936 / USS Rubicon / 联邦星舰卢比肯河号',
      'NCC-73024 / USS Shenandoah / 联邦星舰谢南多厄河号',
      '未知舷号 / USS Volga / 联邦星舰伏尔加河号',
      '未知舷号 / USS Yangtzee Kiang / 联邦星舰扬子江号',
      '未知舷号 / USS Yukon / 联邦星舰育空河号',
      'NCC-73918 / 未知英文名称 / 未知中文名称'
    ],
    note: ''
  },
  AkiraClass: {
    name: '光明级',
    spec: '',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '光明级星舰是星际舰队在 24 世纪 70 年代早期服役的一批星舰。光明级在后来的 001 星区战役和自治同盟战争中充当着重要角色，除此之外在其他的场景中也可以看见光明级的身影，例如争夺普罗米修斯号时就有一艘光明级参战',
    known: [
      'NCC-63549 / USS Thunderchild / 联邦星舰雷神之子号'
    ],
    note: '光明级星舰抛弃了传统的碟部加主工程部的设计，转而采取类似NX级一样的一体化设计，工程部被安放在碟部的下方，用来安装主偏导仪和一部分战术系统，通过双舰体的方式链接两个曲速舱，并向上链接到一个大型武器平台，该平台上安装了数个鱼雷发射管'
  },
  NovaClass: {
    name: '新星级',
    spec: '科考舰',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '8 层甲板',
    quality: [],
    crewNum: [
      '80 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 8 级'
    ],
    arms: [
      '11 条相位阵列 / 3 具光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '新星级星舰是星际舰队于 24 世纪 70 年代开始服役的一批科考舰，和同时期的无畏级深空探索舰不同，新星级被设计用来进行短期科考任务，且不适宜进行作战任务，其最大航速甚至只有堪忧的曲速 8 级，这一航速甚至远低于比她老近十年的星舰',
    known: [
      'NCC-73515 / USS Nova / 联邦星舰新星号',
      'NCC-72701 / USS Rhode Island / 联邦星舰罗德岛号',
      'NCC-72381 / USS Equinox / 联邦星舰分节号'
    ],
    note: '在某条平行时间线中，新星级在 25 世纪经历了一次大规模改造，最具代表性的就是罗德岛号，在改装后新星级的防护和火力有了极为明显的提高，能够独自一舰抵抗两艘克林贡的 Negh\'Var 级战舰'
  },
  IntrepidClass: {
    name: '无畏级',
    spec: '深空探索舰',
    time: '24 世纪 70 年代',
    length: '344 米',
    width: '',
    height: '15 层甲板',
    quality: [
      '700000 吨'
    ],
    crewNum: [
      '141 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 9.975 级'
    ],
    arms: [
      '相位炮组 / 相位阵列 / 鱼雷发射管（支持光子鱼雷、量子鱼雷、三钴炸弹）'
    ],
    defend: '偏导护盾',
    information: '无畏级星舰是于 24 世纪 70 年代开始服役的一批新型深空探索舰，专门用于执行长期的深空探索任务，比起以前的星舰而言，无畏级有着众多创新型的改进，该级是历史上第一批使用生物神经凝胶包的星舰并且为医疗室配备了 MK1 型全息医生，同时也是为数不多曲速舱可动的星舰',
    known: [
      'NCC-74600 / USS Intrepid / 联邦星舰无畏号',
      'NCC-74656 / USS Voyager / 联邦星舰航海家号',
      'NCC-74705 / USS Bellerophon / 联邦星舰柏勒洛丰号',
      'NCC-75418 / USS Valiant / 联邦星舰英勇号'
    ],
    note: '在普罗米修斯级服役之前，无畏级搭载了全星际舰队最好的导航系统和最高的航速，她的深空探索任务由一个主计算机处理器支持，能够同时访问 4700 万个数据通道，在 10 到 1790 开尔文的工作温度下，每纳秒可进行 575 万亿次计算。且无畏级是星际舰队中为数不多搭载了起落架，能自主在行星上降落的星舰'
  },
  NorwayClass: {
    name: '挪威级',
    spec: '',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '挪威级星舰是星际舰队于 24 世纪服役的一批星舰，已知该舰级在其舰背上有一门相位炮，其主舰体设计类似挑战级',
    known: [
      'NCC-64923 / USS Budapest / 联邦星舰布达佩斯号'
    ],
    note: ''
  },
  SaberClass: {
    name: '军刀级',
    spec: '',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '军刀级星舰是星际舰队于 24 世纪 70 年代服役的一批星舰，该舰级的最大特点便是其高度集成化的简体，主偏导仪和副船体集成在一起，且曲速舱直接安装在主舰体上',
    known: [
      'NCC-61947 / USS Yeager / 联邦星舰耶格尔号'
    ],
    note: ''
  },
  SteamrunnerClass: {
    name: '气动级',
    spec: '',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '气动级星舰是星际舰队于 24 世纪 70 年代服役的一批星舰，气动级在自治同盟战争和 001 星区战役中都十分活跃',
    known: [
      'NCC-52136 / USS Appalachia / 联邦星舰阿巴拉契亚号'
    ],
    note: '气动级与同时期其他星舰最大的不同是她具备一个完全独立的二级船体，整个曲速舱被嵌在了舰体后部的衔架内，其配套的巴萨德采集器则被安装在碟部舰桥部位的两侧，气动级的偏导仪同样也独立于主舰体之外，其偏导仪位于舰体的最后端，用两根衔架固定在两根曲速舱之间'
  },
  OlympicClass: {
    name: '奥林匹克级',
    spec: '医疗舰',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [
      '已知速度：曲速 13 级（平行时间线）'
    ],
    arms: [
      '极少的相位炮'
    ],
    defend: '偏导护盾',
    information: '奥林匹克级星舰是星际舰队于 24 世纪 70 年代服役的一批医疗舰，和常见的联邦星舰不同，奥林匹克级采取球形主舰体而不是碟形，这一设计与 22 世纪的代达罗斯级十分相似',
    known: [
      'NCC-58925 / USS Pasteur / 联邦星舰巴斯德号',
      'NCC-55012 / USS Nobel / 联邦星舰诺贝尔号'
    ],
    note: '奥林匹克级的主偏导仪被安装在主舰体下方的四分之一部分，和常规的圆形偏导仪不同，它更偏向于条形，此外她的脉冲引擎位于后船体的上三分之一处，一个大型穿梭机舱位于次船体的中上部背侧'
  },
  DefiantClass: {
    name: '挑战级',
    spec: '护航舰 / 战舰',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '5 层甲板',
    quality: [],
    crewNum: [
      '50 人'
    ],
    cruisingSpeed: [
      '曲速 7 级'
    ],
    maxSpeed: [
      '已知速度：曲速 9.5 级'
    ],
    arms: [
      '4 门脉冲相位炮',
      '至少 3 门相位发射器',
      '至少 4 具前置光子 / 量子鱼雷发射管',
      '至少 2 具后置光子 / 量子鱼雷发射管'
    ],
    defend: '抗烧蚀装甲 / 偏导护盾',
    information: '挑战级星舰是星际舰队于 24 世纪 70 年代服役的一批护航舰，与以往星舰完全不同的是，挑战级星舰不具备任何科考能力，不具备任何给专员准备的娱乐设施，不允许搭载任何的非星际舰队成员，是一艘彻头彻尾的战舰。Wolf 359 的惨败让星际舰队意识到了自己存在严重的星舰战斗力不足的情况，为了能在未来抵抗博格人的进攻而设计出了挑战级，由此挑战级也外号"博格终结者"，但是挑战级的原型舰挑战号在试航的时候出现了各种各样的问题，在一次武器功率全开的时候差点把自己拆了，随着后来博格人的威胁不再那么严重，挑战级的研发计划也被暂停，直到自治同盟的出现才迫使挑战号再次出港',
    known: [
      'NX-74205 / USS Defiant / 联邦星舰挑战号',
      'NCC-74210 / USS Valiant / 联邦星舰英勇号',
      'NCC-75633 / USS Sao Paulo && USS Defiant / 联邦星舰圣保罗号 && 联邦星舰挑战号'
    ],
    note: '挑战级搭载了十分先进的 7 级曲速引擎（无畏级为 6 级曲速引擎）和极度厚重的抗烧蚀装甲，同时也安装了威力巨大的相位脉冲炮和量子鱼雷，而最不可思议的是，这样一艘战斗力强悍星舰体型却是整个星际舰队中数一数二的小，因此挑战级具备一般星舰都不具备的高机动性'
  },
  SovereignClass: {
    name: '元首级',
    spec: '',
    time: '24 世纪 70 年代',
    length: '685 米',
    width: '',
    height: '29 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [
      '曲速 8 级'
    ],
    maxSpeed: [],
    arms: [
      '16 条相位阵列 / 1 具前置量子鱼雷发射管 / 3 具前置光子鱼雷发射管 / 6 具后置光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '元首级星舰是在 2370 年左右所建造的一种新型星舰，当时是星际舰队中最先进的星舰设计，而且元首级没有银河级那么大。元首级在自治同盟战争中并没有扮演一个关键角色，但是包括企业号-E在内的一部分星舰在战争中曾多次出使外交任务',
    known: [
      'NCC-1701-E / USS Enterprise / 联邦星舰企业号'
    ],
    note: '已知的是在 2379 年之前元首级经历过一次改造，最突出的地方便是额外装配了 5 具鱼雷管和 4 条相位阵列，且曲速架也进行了一些细微的改动'
  },
  PrometheusClass: {
    name: '普罗米修斯级',
    spec: '战舰',
    time: '24 世纪 70 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '4 人以上'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 9.99 级'
    ],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '抗烧蚀装甲 / 再生型护盾 / 多重向量攻击模式',
    information: '普罗米修斯级星舰是星际舰队于 24 世纪晚期建造的一批星舰，该级星舰比起常规的星舰而言有着非常不同的设计。和挑战级一样，普罗米修斯级是星际舰队中为数不多专门为战斗而设计的战舰之一，她就是为了执行深空战术任务而诞生的，为此普罗米修斯级搭载了一般星舰不会搭载的抗烧蚀装甲，再生型护盾，多重向量攻击模式等一些列实验性战术系统，并且拥有比无畏级更为先进的导航系统和 MK2 型全息医生，和无畏级不同的是普罗米修斯级全舰都搭载了全息发射器，因此全息医生可以不受限制的离开医务室对伤员进行治疗',
    known: [
      'NX-59650 && NX-74913 / USS Prometheus / 联邦星舰普罗米修斯号'
    ],
    note: '1. 普罗米修斯级星舰搭载了 6 根曲速舱，除去背上的 4 根和顶部的 1 根之外在分离后的最上层部位的正下方还有 1 根，但是剧中因为并没有伸出来导致很多粉丝没能注意到这第 6 根；2. 普罗米修斯级原型舰普罗米修斯号具备两个舷号，分别是 NX-59650 和 NX-74913，实际上普罗米修斯号从来没有更换过舷号这件事，之所以会有两个舷号是因为在拍摄时内设组的信息没能及时正确的传递到模型组中，导致模型组在制作模型时自己编了一个 NX-59650 的舷号在舰体上，等双方反应过来时已经来不及更改了，所以说实际上普罗米修斯号的两个舷号是同时存在的而非后期更改的'
  },
  CaliforniaClass: {
    name: '加利福尼亚级',
    spec: '',
    time: '24 世纪晚期',
    length: '',
    width: '',
    height: '碟部共有 11 层甲板 / 副舰体甲板数未知',
    quality: [],
    crewNum: [],
    cruisingSpeed: [
      '已知速度：曲速 7 级'
    ],
    maxSpeed: [],
    arms: [
      '相位阵列 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '加利福尼亚级星舰是星际舰队于 24 世纪晚期服役的一批星舰，该级星舰的设计主要分为一个碟部和一个宽大的副舰体，副舰体位于碟部下方两根曲速舱之间，曲速舱由两根曲速架负责于碟部连接，而副舰体则额外由两根衔架负责固定在曲速舱之间，而该级星舰的偏导仪则位于副舰体的表层正前方上',
    known: [
      'NCC-75567 / USS Cerritos / 联邦星舰喜瑞都号',
      'NCC-87075 / USS Merced / 联邦星舰莫赛德号',
      'NCC-12109 / USS Rubidoux / 联邦星舰鲁比多克斯号'
    ],
    note: ''
  },
  ParliamentClass: {
    name: '国会级',
    spec: '工程舰',
    time: '24 世纪晚期',
    length: '',
    width: '',
    height: '11 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [
      '已知速度：曲速 7 级'
    ],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '国会级星舰是星际舰队于 24 世纪晚期服役的一批星舰，该级星舰主要被设计用来进行一系列工程任务，该级星舰拥有比加利福尼亚级星舰更加庞大的碟部，并且搭载了更为先进的设备。在设计上，国会级星舰的两根曲速舱安装在位于舰尾下方的曲速架上，两个脉冲引擎则安装在舰尾处。一个带有偏导仪的副舰体通过位于碟部下方的弯曲衔架与碟部进行连接',
    known: [
      'NCC-70492 / USS Vancouver / 联邦星舰温哥华号'
    ],
    note: ''
  },
  CuriosityClass: {
    name: '好奇级',
    spec: '重型巡洋舰',
    time: '24 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '好奇级星舰是星际舰队于 24 世纪服役的一批重型巡洋舰',
    known: [
      'NCC-75710 / USS Ibn Majid / 联邦星舰伊本 · 马吉德号'
    ],
    note: ''
  },
  WallenbergClass: {
    name: '瓦伦贝里级',
    spec: '运输舰 / 拖船',
    time: '2385 年',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列'
    ],
    defend: '偏导护盾',
    information: '瓦伦贝里级是星际舰队于 24 世纪服役的一批大型可曲速运输舰，该级星舰均无正式的舷号',
    known: [
      '无舷号 / Nightingale / 夜莺号'
    ],
    note: ''
  },
  InquiryClass: {
    name: '调查级',
    spec: '',
    time: '24 世纪 90 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位阵列'
    ],
    defend: '偏导护盾',
    information: '调查级星舰是星际舰队于 24 世纪 90 年代服役的一批最新型星舰，该级星舰被描述为同时期星际舰队"最强，最快的星舰"',
    known: [
      '未知舷号 / USS Zheng He / 联邦星舰郑和号'
    ],
    note: '调查级的设计来自于网游《Star Trek Online》于 2007 年所设计的复仇者级战列巡洋舰（Avenger class Battlecruiser）的废稿'
  }
}
