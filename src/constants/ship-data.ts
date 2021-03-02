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
    quality: '约 40000 吨',
    crewNum: '35 人',
    cruisingSpeed: '曲速 1.5 级',
    maxSpeed: '曲速 1.5 级',
    arms: '相位炮',
    defend: '舰壳极化',
    information: '恒河级星舰于 22 世纪被星际舰队广泛使用，其主舰体为少见的三角形，在舰尾两侧连接了两根曲速舱，从船体上方向上倾斜',
    known: null,
    note: '该型号的星舰并没有官方名称，一般用 Warp Delta 代替，但是在大量的媒体资料中该型星舰被命名为恒河级'
  },
  IntrepidType: {
    name: '无畏型',
    spec: '',
    time: '22 世纪',
    length: '',
    width: '',
    height: '',
    quality: '',
    crewNum: '',
    cruisingSpeed: '曲速 2 级',
    maxSpeed: '曲速 2 级',
    arms: '相位加农炮 / 2 具鱼雷发射管',
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
    quality: '约 80000 吨',
    crewNum: '83 人',
    cruisingSpeed: '',
    maxSpeed: '曲速 5.2 级',
    arms: '等离子加农炮 / 相位加农炮 / 脉冲相位加农炮 / 空间光子化鱼雷发射管',
    defend: '舰壳极化',
    information: 'NX 级星舰是联合地球时期的星际舰队于 2151 年正史服役的一级探索舰，该级星舰的一号舰企业号搭载了人类历史上第一个曲速 5 引擎，允许人类开始探测太阳系以外的恒星系',
    known: [
      'NX-01 / Enterprise / 企业号',
      'NX-02 / Columbia / 哥伦比亚号',
      'NX-03 / Challenger / 挑战者号',
      'NX-04 / Discovery / 发现号'
    ],
    note: ''
  }
}
