/**
 * @file ship-data 相关 22nd-century 文件
 * @description 22 世纪星舰
 */

import IconGangesClass from './images/22nd-century/icon-ganges-class.jpg'
import IconIntrepidType from './images/22nd-century/icon-intrepid-type.jpg'
import IconNXClass from './images/22nd-century/icon-nx-class.jpg'
import IconDaedalusClass from './images/22nd-century/icon-daedalus-class.jpg'

import { DataType } from '.'

export const data: DataType = {
  GangesClass: {
    icon: IconGangesClass,
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
    icon: IconIntrepidType,
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
    icon: IconNXClass,
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
    note: 'NX 级星舰在舰体设计上为只有一个碟部作为星舰的主舰体，并之间从舰桥两侧的舰体上向后延伸到舰尾处加以安装脉冲引擎，在脉冲引擎的两侧以两根衔架的方式安装曲速舱，同时在两个脉冲引擎的间隙中也额外悬挂了一个搭载了鱼雷发射管的挂舱。此外，NX 级的偏导仪阵列被直接安装到了碟部的正前方，在碟部的下侧则是安装了数门相位炮和鱼雷发射管'
  },
  DaedalusClass: {
    icon: IconDaedalusClass,
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
  }
}
