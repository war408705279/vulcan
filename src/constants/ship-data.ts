/**
 * @file ship-data 相关
 */

import { GetShipDataResp } from '@/apis/ship-data'

type DataType = {
  [key: string]: GetShipDataResp
}

export const data: DataType = {
  GangesClass: {
    name: '恒河级（非官方名称）',
    spec: '',
    time: '2119 年',
    length: '127 米',
    width: '115 米',
    height: '18 米',
    quality: [
      '约 40000 吨'
    ],
    crewNum: [
      '35 人'
    ],
    cruisingSpeed: [
      '曲速 1.5 级'
    ],
    maxSpeed: [
      '曲速 1.5 级'
    ],
    arms: [
      '相位炮'
    ],
    defend: '舰壳极化',
    information: '恒河级星舰于 22 世纪被星际舰队广泛使用，其主舰体为少见的三角形，在舰尾两侧连接了两根曲速舱，从船体上方向上倾斜',
    known: [],
    note: '该型号的星舰并没有官方名称，一般用 Warp Delta 代替，但是在大量的媒体资料中该型星舰被命名为恒河级'
  },
  IntrepidType: {
    name: '无畏型',
    spec: '',
    time: '22 世纪',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [],
    cruisingSpeed: [
      '曲速 2 级'
    ],
    maxSpeed: [
      '曲速 2 级'
    ],
    arms: [
      '相位加农炮 / 2 具鱼雷发射管'
    ],
    defend: '舰壳极化',
    information: '无畏型星舰是星际舰队于 22 世纪中叶服役的一批星舰，其主舰体为半圆形，舰尾连接了两根向上翘起的曲速舱，曲速舱的两侧还有两片向下的舰体结构',
    known: [
      '未知舷号 / Intrepid / 无畏号'
    ],
    note: ''
  },
  NXClass: {
    name: 'NX 级',
    spec: '探索船',
    time: '2151 年',
    length: '225 米',
    width: '135.8 米',
    height: '33.3 米（7 层甲板）',
    quality: [
      '约 80000 吨'
    ],
    crewNum: [
      '83 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [
      '曲速 5.2 级'
    ],
    arms: [
      '等离子加农炮 / 相位加农炮 / 脉冲相位加农炮 / 空间光子化鱼雷发射管'
    ],
    defend: '舰壳极化',
    information: 'NX 级星舰是联合地球时期的星际舰队于 2151 年正史服役的一级探索舰，该级星舰的一号舰企业号搭载了人类历史上第一个曲速 5 引擎，允许人类开始探测太阳系以外的恒星系',
    known: [
      'NX-01 / Enterprise / 企业号',
      'NX-02 / Columbia / 哥伦比亚号',
      'NX-03 / Challenger / 挑战者号',
      'NX-04 / Discovery / 发现号'
    ],
    note: ''
  },
  DaedalusClass: {
    name: '代达罗斯级',
    spec: '',
    time: '2196 年之前',
    length: '',
    width: '',
    height: '',
    quality: [],
    crewNum: [
      '约 229 人'
    ],
    cruisingSpeed: [],
    maxSpeed: [],
    arms: [],
    defend: '',
    information: '代达罗斯级星舰是星际舰队早期服役的一批星舰，与常见的星舰不同的是代达罗斯级采取了球形体来代替本来的碟部，且其搭载了一个十分独特的子空间求救装置',
    known: [
      'NCC-173 / USS Essex / 联邦星舰埃塞克斯号',
      'NCC-176 / USS Horizon / 联邦星舰地平线号'
    ],
    note: ''
  },
  ConstitutionClass: {
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
      'NCC-1710 / SS Kongo / 联邦星舰金刚号',
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
    note: ''
  },
  ConstitutionClassRetrofit: {
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
    information: '第一艘精进级改，企业号 -B（U.S.S Enterprise NCC-1701-B），于 2293 年起航，代替了退役的进取号 -A 成为星际舰队的新旗舰。 企业号 -B 的下水也为精进级打开了一扇大门，使其成为了星际舰队中最受欢迎的舰级之一，这种状况一度持续到 24 世纪末期',
    known: [
      'NCC-1701-B / USS Enterprise / 联邦星舰企业号',
      'NCC-42768 / USS Lakota / 联邦星舰拉科塔号'
    ],
    note: ''
  }
}
