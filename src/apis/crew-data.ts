/**
 * @file crew-data api
 */

import { data as crewData } from '@/constants/crew-data'

export type GetCrewDataOptions = {
  code: string
}

export type GetCrewDataResp = {
  icon?: string
  // 中文名
  zhName: string
  // 英文名
  enName: string[]
  // 别名
  alias: string[]
  // 国籍
  nationality: string
  // 民族
  national: string
  // 出生地
  birthPlace: string
  // 出生日期
  birthDay: string
  // 逝世日期
  deathTime: string
  // 星座
  constellation: string
  // 身高
  height: string
  // 毕业院校
  graduateSchool: string
  // 职业
  profession: string[]
  // 代表作品
  representativeWorks: string[]
  // 主要成就
  mainAchievements: string[]
  // 爱好
  hobby: string[]
  // 信息
  information: string[]
  // 评价
  evaluation: string[]
}

export function getCrewData(options: GetCrewDataOptions): Promise<GetCrewDataResp> {
  const { code } = options

  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      const data = crewData[code]
      resolve(data)
    }, 1500)
  })
}
