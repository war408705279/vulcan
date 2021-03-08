/**
 * @file ship-data 相关 24th-century 文件
 * @description 24 世纪星舰
 */

import { DataType } from '.'

export const data: DataType = {
  AmbassadorClass: {
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
  }
}
