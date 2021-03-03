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
    cruisingSpeed: ['曲速 2 级'],
    maxSpeed: ['曲速 2 级'],
    arms: [
      '相位加农炮 / 2 具鱼雷发射管'
    ],
    defend: '舰壳极化',
    information: '无畏型星舰是星际舰队于 22 世纪中叶服役的一批星舰，其主舰体为半圆形，舰尾连接了两根向上翘起的曲速舱，曲速舱的两侧还有两片向下的舰体结构',
    known: ['未知舷号 / Intrepid / 无畏号'],
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
  }
}
