/**
 * @file ship-data 相关
 */

import { GetShipDataResp } from '@/apis/ship-data'

type DataType = {
  [key: string]: GetShipDataResp
}

export const data: DataType = {
  GangesClass: {
    spec: '',
    time: '2119 年',
    length: '127 米',
    width: '115 米',
    height: '18 米',
    quality: '40000 吨',
    crewNum: '35 人',
    cruisingSpeed: '曲速 1.5',
    maxSpeed: '曲速 1.5',
    arms: '相位炮',
    defend: '舰壳极化',
    information: '恒河级星舰于 22 世纪被星际舰队广泛使用，其主舰体为少见的三角形，在舰尾两侧连接了两根曲速舱，从船体上方向上倾斜',
    known: '',
    note: '该型号的星舰并没有官方名称，一般用 Warp Delta 代替，但是在大量的媒体资料中该型星舰被命名为恒河级'
  }
}
