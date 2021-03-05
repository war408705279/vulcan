/**
 * @file film-data 相关 index 文件
 */

import { GetFilmDataResp } from '@/apis/film-data'

import { data as originalData } from './original'
import { data as nextData } from './next'
import { data as kelvinData } from './kelvin'
import { data as unofficialData } from './unofficial'

export type DataType = {
  [key: string]: GetFilmDataResp
}

export const data: DataType = {
  ...originalData,
  ...nextData,
  ...kelvinData,
  ...unofficialData
}
