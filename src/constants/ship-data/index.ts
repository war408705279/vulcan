/**
 * @file ship-data 相关 index 文件
 */

import { GetShipDataResp } from '@/apis/ship-data'

import { data as twentyTwoCenturyData } from './22nd-century'
import { data as twentyThreeCenturyData } from './23rd-century'

export type DataType = {
  [key: string]: GetShipDataResp
}

export const data: DataType = {
  ...twentyTwoCenturyData,
  ...twentyThreeCenturyData
}
