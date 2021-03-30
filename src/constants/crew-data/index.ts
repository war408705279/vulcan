/**
 * @file crew-data 相关 index 文件
 */

import { GetCrewDataResp } from '@/apis/crew-data'

import { data as originalData } from './original'

export type DataType = {
  [key: string]: GetCrewDataResp
}

export const data: DataType = {
  ...originalData
}
