/**
 * @file ship-data 相关 23rd-century 文件
 * @description 23 世纪星舰
 */

import { DataType } from '.'

import IconConstitutionClass from './images/23rd-century/icon-constitution-class.jpg'
import IconConstitutionClassRetrofit from './images/23rd-century/icon-constitution-class-retrofit.jpg'
import IconExcelsiorClass from './images/23rd-century/icon-excelsior-class.jpg'
import IconExcelsiorClassRetrofit from './images/23rd-century/icon-excelsior-class-retrofit.jpg'

export const data: DataType = {
  ConstitutionClass: {
    icon: IconConstitutionClass,
    name: '宪法级',
    spec: '重型巡洋舰',
    time: '23 世纪 40 年代',
    length: '288.6 米',
    width: '127.1 米',
    height: '72.6 米（22 层甲板）',
    quality: [
      '2254 年：约 1000000 吨',
      '2257 - 2258 年：190000 吨',
      '23 世纪 60 年代：约 1000000 吨'
    ],
    crewNum: [
      '23 世纪 50 年代：203 人',
      '23 世纪 60 年代：430 人'
    ],
    cruisingSpeed: [
      '曲速 2 级',
      '最高安全速度：曲速 6 级'
    ],
    maxSpeed: [
      '曲速 8 级',
      '极限最高速度：曲速 9 级',
      '超极限引擎过载速度（只能维持几分钟）：曲速 14.1 级'
    ],
    arms: [
      '2254 年：相位炮组 / 2 具前置光子鱼雷发射管 / 2 具后置光子鱼雷发射管',
      '2257 - 2258 年：8 门相位发射器 / 2 具鱼雷发射管 / 大量攻击无人机',
      '23 世纪 60 年代：相位炮组 / 6 具前置光子鱼雷发射管 / 1 具后置光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '宪法级星舰是星际联邦所有星舰舰级中的一级重型巡洋舰（Class I Heavy Cruiser），也是 23 世纪后半叶中星际舰队的主力星舰。宪法级主要是为了进行长期深空任务而设计的，只需要很少的外部补给，因此宪法级才能够执行著名的五年任务',
    known: [
      'NCC-1017 / USS Constellation / 联邦星舰星座号',
      'NCC-1371 / USS Republic / 联邦星舰共和国号',
      'NCC-1631 / USS Intrepid / 联邦星舰无畏号',
      'NCC-1647 / USS Farragut / 联邦星舰法拉格特号',
      'NCC-1657 / USS Potemkin / 联邦星舰波特金号',
      'NCC-1664 / USS Excalibur / 联邦星舰圣剑号',
      'NCC-1672 / USS Exeter / 联邦星舰埃克塞特号',
      'NCC-1685 / USS Doglas / 联邦星舰道格拉斯号',
      'NCC-1700 / USS Constitution / 联邦星舰宪法号',
      'NCC-1701 / USS Enterprise / 联邦星舰企业号',
      'NCC-1703 / USS Hood / 联邦星舰胡德号',
      'NCC-1709 / USS Lexington / 联邦星舰列克星敦号',
      'NCC-1710 / USS Kongo / 联邦星舰金刚号',
      'NCC-1715 / USS Merrimac / 联邦星舰梅里马克号',
      'NCC-1717 / USS Yorktown / 联邦星舰约克城号',
      'NCC-1718 / USS Excelsior / 联邦星舰精进号',
      'NCC-1764 / USS Defiant / 联邦星舰挑战号',
      'NCC-1856 / USS Emden / 联邦星舰埃姆登号',
      'NCC-1895 / USS Endeavour / 联邦星舰奋进号',
      'NCC-2014 / USS Korolev / 联邦星舰科罗廖夫号',
      'NCC-956 / USS Eagle / 联邦星舰鹰号',
      'NCC-1709 / USS Valiant / 联邦星舰英勇号',
      '未知舷号 / USS Ravenous / 联邦星舰贪婪号'
    ],
    note: '宪法级的主要任务便是探索银河系和一些列外交出使，在很少的情况下也会执行一部分战术任务。在 2258 年时，宪法级的机库内至少搭载了上百架攻击无人机，其数量甚至能够围绕星舰本体形成一片密集的火力网'
  },
  ConstitutionClassRetrofit: {
    icon: IconConstitutionClassRetrofit,
    name: '宪法级改',
    spec: '重型巡洋舰',
    time: '23 世纪 70 年代',
    length: '305 米',
    width: '',
    height: '',
    quality: [
      '约 1000000 吨'
    ],
    crewNum: [
      '23 世纪 70 年代：432 人',
      '23 世纪 90 年代：300 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 8 级',
      '紧急速度：曲速 9 级'
    ],
    arms: [
      '18 门相位炮组 / 2 具前置光子鱼雷发射管'
    ],
    defend: '偏导护盾 / 防御立场',
    information: '在 2270 年代早期，宪法级星舰经历了一次重大的改装计划。实际的改装工作花了 18 个月的时间，基本上在旧船的龙骨上建造了一艘新船，几乎取代了所有主要系统。并在原来的基础上加装了一部分额外的武器',
    known: [
      'NCC-1701 / USS Enterprise / 联邦星舰企业号',
      'NCC-1701-A / USS Enterprise / 联邦星舰企业号'
    ],
    note: ''
  },
  ExcelsiorClass: {
    icon: IconExcelsiorClass,
    name: '精进级',
    spec: '',
    time: '23 世纪 80 年代',
    length: '',
    width: '',
    height: '34 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮组 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '精进级星舰是在 23 世纪 80 年代所服役的一种星舰，从 23 世纪末期到 24 世纪末期均在星际舰队中服役。一个世纪以来，精进级一直作为星际舰队主力舰之一，这也导致精进级是星际舰队中服役时间最长的星舰之一，也是辨识度最高的星舰之一',
    known: [
      'NX-2000 / USS Excelsior / 联邦星舰精进号',
      'NCC-2000 / USS Excelsior / 联邦星舰精进号',
      'NCC-2544 / USS Repulse / 联邦星舰浅水湾号',
      '未知舷号 / USS Roosevelt / 联邦星舰罗斯福号',
      '未知舷号 / USS Farragut / 联邦星舰法拉格特号',
      '未知舷号 / USS Okinawa / 联邦星舰冲绳号',
      'NCC-14232 / USS Berlin / 联邦星舰柏林号',
      'NCC-14598 / USS Fearless / 联邦星舰无惧号',
      'NCC-14934 / USS Tecumseh / 联邦星舰特库姆塞号',
      '未知舷号 / USS Potemkin / 联邦星舰波特金号',
      '未知舷号 / USS Livingston / 联邦星舰利文斯顿号',
      'NCC-38907 / USS Intrepid / 联邦星舰无畏号',
      '未知舷号 / USS Crockett / 联邦星舰克罗科特号',
      '未知舷号 / USS Malinche / 联邦星舰马林克号',
      '未知舷号 / USS Gorkon / 联邦星舰高康号',
      'NCC-42111 / USS Frederickson / 联邦星舰弗雷德里克森号',
      '未知舷号 / USS Cairo / 联邦星舰开罗号',
      'NCC-42285 / USS Charleston / 联邦星舰查尔斯顿号',
      'NCC-42296 / USS Hood / 联邦星舰胡德号',
      '未知舷号 / USS Grissom / 联邦星舰格里森号',
      'NCC-42995 / USS Al-Batani / 联邦星舰艾尔 - 巴塔尼号',
      'NCC-43305 / USSValley Forge / 联邦星舰弗吉谷号',
      'NCC-44278 / USS Archer / 联邦星舰亚契号',
      '未知舷号 / USS Crazy Horse / 联邦星舰疯马号',
      'NCC-62043 / USS Melbourne / 联邦星舰墨尔本号',
      'NCC-72007 / USS Atlantis / 联邦星舰亚特兰蒂斯号',
      'NCC-32710 / USS Atlantis / 联邦星舰亚特兰蒂斯号',
      '未知舷号 / USS Sarek / 联邦星舰绍赖克号'
    ],
    note: ''
  },
  ExcelsiorClassRetrofit: {
    icon: IconExcelsiorClassRetrofit,
    name: '精进级改',
    spec: '',
    time: '23 世纪 90 年代',
    length: '',
    width: '',
    height: '34 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮组 / 光子鱼雷发射管',
      '24 世纪 70 年代版本可装填量子鱼雷'
    ],
    defend: '偏导护盾',
    information: '第一艘精进级改，企业号 - B（U.S.S Enterprise NCC-1701-B），于 2293 年起航，代替了退役的进取号 - A 成为星际舰队的新旗舰。 企业号 - B 的下水也为精进级打开了一扇大门，使其成为了星际舰队中最受欢迎的舰级之一，这种状况一度持续到 24 世纪末期',
    known: [
      'NCC-1701-B / USS Enterprise / 联邦星舰企业号',
      'NCC-42768 / USS Lakota / 联邦星舰拉科塔号'
    ],
    note: ''
  },
  ConstellationClass: {
    name: '星座级',
    spec: '星际巡洋舰',
    time: '2285 年',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 9 级'
    ],
    arms: [
      '相位炮组 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '星座级星舰于 2285 年开始服役，在 24 世纪早期，星座级就以深空探索和近防巡逻等任务著称。到 24 世纪 60 年代，这批老式的星际巡洋舰正式步入被淘汰的边缘，其中 80 岁高龄的海瑟薇号也被拆卸了所有的武器系统和一切反物质储备。至此星座级逐步退居二线，开始进行运输或者进行紧急封锁等任务',
    known: [
      'NX-1974 / USS Constellation / 联邦星舰星座号',
      'NCC-2593 / USS Hathaway / 联邦星舰海瑟薇号',
      'NCC-2893 / USS Stargazer / 联邦星舰占星者号',
      '未知舷号 / USS Magellan / 联邦星舰麦哲伦号',
      '未知舷号 / USS Gettysburg / 联邦星舰葛底斯堡',
      'NCC-7100 / 未知英文名称 / 未知中文名称'
    ],
    note: ''
  },
  FederationClass: {
    name: '联邦级',
    spec: '无畏舰',
    time: '23 世纪中期',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '联邦级星舰在《星际迷航：可汗之怒》和《星际迷航：石破天惊》中曾经出现过一个出现过一个简影，其舰本体从未在任官方影视作品中出现过',
    known: [],
    note: '在《Star Trek Star Fleet Technical Manual》这本非正史书籍中曾提到过关于联邦级外貌和设定。但是由于此书籍的内容并非正史因此不具备参考价值'
  },
  SaladinAndHermesClass: {
    name: '萨拉丁 / 赫尔墨斯级',
    spec: '驱逐舰 / 侦查船',
    time: '23 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '萨拉丁与赫尔墨斯级和宪法级计划是同一时期建造的星舰。萨拉丁 / 赫尔墨斯级设计使用一个单一的曲速舱（类似于宪法级的碟部）',
    known: [
      'NCC-500 / 未知英文名称 / 未知中文名称 / 萨拉丁级',
      'NCC-585 / 未知英文名称 / 未知中文名称 / 赫尔墨斯级',
      'NCC-595 / USS Revere / 联邦星舰钦仰号 / 赫尔墨斯级',
      'NCC-621 / USS Columbia / 联邦星舰哥伦比亚号 / 赫尔墨斯级'
    ],
    note: ''
  },
  MirandaClass: {
    name: '米兰达级',
    spec: '',
    time: '23 世纪 60 年代',
    length: '',
    width: '',
    height: '4 层以上甲板',
    quality: [],
    crewNum: [
      '约 26-35 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮组 / 光子鱼雷发射管（不同型号决定有无额外的发射管和相位炮）'
    ],
    defend: '偏导护盾',
    information: '米兰达级星舰是星际舰队于 23 世纪 60 年代服役的一批星舰，和精进级一样，米兰达级也是星际舰队中服役时间最长的一批星舰之一，从服役起到未来的一个世纪内，米兰达级就一直是星际舰队的主力舰之一，所建造的数量远超一般的星舰',
    known: [
      'NCC-32591 / USS Sitak / 联邦星舰斯台克号',
      'NCC-1546 / USS Olympia / 联邦星舰奥林匹亚号',
      'NCC-1837 / USS Lantree / 联邦星舰兰树号',
      'NCC-1864 / USS Reliant / 联邦星舰信望号',
      'NCC-1887 / USS Saratoga / 联邦星舰萨拉托加号',
      'NCC-1948 / USS Trial / 联邦星舰考验号',
      'NCC-9844 / USS Antares / 联邦星舰安塔尔号',
      'NCC-21382 / USS Tian anmen / 联邦星舰天安门号',
      'NCC-21166 / USS Brattain / 联邦星舰布拉顿号',
      'NCC-31060 / USS Majestic / 联邦星舰庄严号',
      'NCC-31905 / USS Shir Kahr / 联邦星舰希卡尔号',
      'NCC-31910 / USS Nautilus / 联邦星舰鹦鹉螺号',
      'NCC-31911 / USS Saratoga / 联邦星舰萨拉托加号'
    ],
    note: '米兰达级的设计与同时期的联盟级星舰十分相似，其具体的设计思路承接自宪法级改造型。米兰达级并非全体一致一成不变，和星云级类似，米兰达级具备多种不同的改造版本，如以信望号为代表的传统双相位炮加鱼雷发射管的造型，以萨拉托加号为代表的双相位炮的造型，或者以安塔尔号为代表的双相位炮但三角平台的造型'
  },
  OberthClass: {
    name: '奥伯特级',
    spec: '科考舰',
    time: '23 世纪 80 年代',
    length: '',
    width: '',
    height: '13 层甲板',
    quality: [],
    crewNum: [
      '80 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮组'
    ],
    defend: '偏导护盾',
    information: '奥伯特级星舰是星际舰队于 23 世纪 80 年代开始服役的一批科考舰，不仅仅在星际舰队中，还有一部分的奥伯特级为民用船只，基本上都是用来做运输舰之类的非官方船只。奥伯特级可谓是一艘彻头彻尾的科考舰，其体型很小，且武器数量极少，几乎完全是为研究天文现象而设计和使用的，其主要任务包括在恒星和行星上收集数据',
    known: [
      '未知舷号 / USS Biko / 联邦星舰比克号',
      'NCC-31600 / USS Bonestell / 联邦星舰博尼斯特尔号',
      'NCC-59318 / USS Cochrane / 联邦星舰科克伦号',
      'NCC-640 / USS Copernicus / 联邦星舰哥白尼号',
      'NCC-638 / USS Grissom / 联邦星舰格里森号',
      'NCC-602 / USS Oberth / 联邦星舰奥伯特号',
      'NCC-53847 / USS Pegasus / 联邦星舰飞马号',
      'NCC-53911 / USS Tsiolkovsky / 联邦星舰齐奥尔科夫斯基号',
      'NAR-18834 / USS Vico / 联邦星舰维科号',
      'NCC-19002 / USS Yosemite / 联邦星舰约塞米蒂号',
      'NCC-58637 / USS Copernicus / 联邦星舰哥白尼号',
      'NCC-1692 / USS Helin / 联邦星舰海伦号',
      'NCC-29487 / USS Raman / 联邦星舰拉曼号',
      'NCC-1963 / USS Springfield / 联邦星舰春田号'
    ],
    note: '奥伯特级的设计在当时也是属于非典型设计，曲速舱被安排在碟部的两侧，由两根衔架加以固定下方的二级船体，脉冲引擎则安装在二级船体的后方延伸部分'
  },
  AntaresType: {
    name: '安塔尔型',
    spec: '货船 / 自动运输船',
    time: '23 世纪 60 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '20 人 / 0 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '安塔尔型星舰是联邦于 23 世纪60 年代频繁使用的一种小型运输船。安塔尔型在整体设计上相当复杂。在主空间框架上下突出的是船上的货舱，最大的货舱位于船轴线下方。20 人标准船员的前生活区和舰桥位于船的最前面。偏导仪位于前生活区底部和船底之间',
    known: [
      'NCC-501 / Antares / 安塔尔号',
      'NCC-325 / Woden / 沃登号',
      'NCC-330 / Yorkshire / 约克郡号',
      'NCC-1951 / Senzig / 森泽号'
    ],
    note: '虽然安塔尔型的体型要比宪法级小，但是在货舱这方面安塔尔型比宪法级大得多。部分型号的安塔尔型拆除了舰桥部分，改为纯自动驾驶'
  },
  SydneyClass: {
    name: '悉尼级',
    spec: '运输船',
    time: '23 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '悉尼级星舰是星际舰队于23世纪开始服役的一批运输舰，拥有数个直到24世纪仍在使用的系统，包括传送系统、子空间通讯、传感器和脉冲引擎等',
    known: [
      'NCC-2010 / USS Jenolan / 联邦星舰杰诺兰号',
      'NCC-2010-5 / USS Nash / 联邦星舰纳什号'
    ],
    note: ''
  },
  CrossfieldClass: {
    name: '克罗斯菲尔德级',
    spec: '科研舰 / 战舰',
    time: '23 世纪 50 年代（以及 32 世纪）',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '136 人',
      '最大约 140 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮组 / 前置 && 后置光子鱼雷发射管',
      '孢子引擎'
    ],
    defend: '偏导护盾',
    information: '克罗斯菲尔德级是星际舰队于 23 世纪 50 年代服役的一批星舰，该级星舰的主要设计包括一个碟部和一个宽大的次级舰体，在工程部末端的两侧有两个加长的曲速舱。同时这一级别的星舰装配了实验性的孢子引擎',
    known: [
      'NCC-1030 / USS Glenn / 联邦星舰格伦号',
      'NCC-1031 / USS Discovery / 联邦星舰发现号',
      'NCC-1031-A / USS Discovery 联邦星舰发现号'
    ],
    note: '虽然克罗斯菲尔德级的总长度较长，但是实际的舰体部分大小和宪法级相似'
  },
  WalkerClass: {
    name: '沃克级',
    spec: '',
    time: '23 世纪 40 年代 - 23 实际 50 年代',
    length: '',
    width: '',
    height: '15 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位加农炮 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '沃克级星舰是星际舰队于 23 世纪中期所服役的一批星舰。沃克级的主要设计包括了一个完整碟部，在碟部的正前方带有一个集成的导航偏导仪，碟部下方有一个紧凑的次级舰体和两根曲速舱',
    known: [
      'NCC-1227 / USS Shenzhou / 联邦星舰神舟号'
    ],
    note: '沃克级至少具备 15 层甲板和两个穿梭机库，并同时搭载了穿梭机和工蜂，以及可以从碟部顶部发射的逃生舱。同时该级星舰可以通过利用分布在碟部下侧的推进器在大气层中飞行，并在碟部上安装了相位加农炮和光子鱼雷发射管'
  },
  ShepardClass: {
    name: '谢帕德级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮'
    ],
    defend: '偏导护盾',
    information: '谢帕德级是星际舰队于 23 世纪 50 年代所服役的一批星舰，该级星舰的偏导仪设计与沃克级相似，但是安装与碟部前端的下侧，两个曲速舱位于碟部上侧的末端',
    known: [
      'NCC-1309 / USS Gagarin / 联邦星舰加加林号',
      'NCC-1255 / USS Kerala / 联邦星舰克拉拉号',
      'NCC-1265 / USS Ride / 联邦星舰骑乘号'
    ],
    note: ''
  },
  MalachowskiClass: {
    name: '马拉霍夫斯基级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮 / 光子鱼雷发射管'
    ],
    defend: '偏导护盾',
    information: '马拉霍夫斯基级是星际舰队于 23 世纪 50 年代所服役的一批星舰，其设计上有一个非圆形的碟部，偏导仪被安装在该碟部的下侧，两个曲速舱通过曲速架以斜角度与舰体连接',
    known: [
      'NCC-1661 / USS Clarke / 联邦星舰克拉克号',
      'NCC-1621 / USS Sioux / 联邦星舰苏人号'
    ],
    note: ''
  },
  MageeClass: {
    name: '麦基级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '至少 6 层甲板',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '麦基级是星际舰队于 23 世纪 50 年代所服役的一批星舰，已知至少该舰级有两艘星舰服役到了 2385 年',
    known: [
      '未知舷号 / USS Cabot / 联邦星舰卡伯特号',
      'NCC-1413 / USS Shran / 联邦星舰沙兰号'
    ],
    note: '该舰级的星舰主舰体只有一个碟部，其两个曲速舱以非常罕见的形式直接穿透了整个碟部'
  },
  CardenasClass: {
    name: '卡德纳斯级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '卡德纳斯级是星际舰队于 23 世纪 50 年代所服役的一批星舰，该级星舰的拥有着和尼米兹级，星座级，夏延级，普罗米修斯级类似的四个曲速舱的设计',
    known: [
      'NCC-1422 / USS Buran / 联邦星舰暴风雪号',
      'NCC-1437 / USS Yeager / 联邦星舰耶格尔号'
    ],
    note: '卡德纳斯级的舰桥位于碟部正前方处，并在舰尾处搭载了两个穿梭机库'
  },
  NimitzClass: {
    name: '尼米兹级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '偏导护盾',
    information: '尼米兹级是星际舰队于 23 世纪 50 年代服役的一批星舰，其设计和卡德纳斯级相似，搭载了四个曲速舱和一个完整的碟部',
    known: [
      'NCC-1648 / USS Europa / 联邦星舰欧罗巴号'
    ],
    note: '已知尼米兹级在舰体底部至少搭载一个牵引光束发生器'
  },
  HooverClass: {
    name: '胡佛级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮'
    ],
    defend: '',
    information: '胡佛级是星际舰队于 23 世纪 50 年代服役的一批星舰，其主舰体与之后的米兰达级以及星云级相似，由圆形的碟部和倾斜的尾部舰体',
    known: [
      '未知舷号 / USS Dana / 联邦星舰德纳号',
      '未知舷号 / USS De Milo / 联邦星舰米洛号',
      'NCC-1683 / USS Edison / 联邦星舰爱迪生号'
    ],
    note: ''
  },
  EngleClass: {
    name: '恩格尔级',
    spec: '',
    time: '23 世纪 50 年代',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [
      '相位炮'
    ],
    defend: '偏导护盾',
    information: '恩格尔级是星际舰队于 23 世纪 50 年代服役的一批星舰，该级星舰的非圆形碟部的下侧有两个穿梭机库，同时两个曲速舱罕见直接被固定在碟部的两侧',
    known: [
      'NCC-1004 / USS T\'Plana-Hath / 联邦星舰 T\'Plana-Hath 号',
      '未知舷号 / USS Earhart / 联邦星舰埃尔哈特号'
    ],
    note: ''
  }
}
