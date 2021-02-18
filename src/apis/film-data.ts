/**
 * @file coupon api
 */

import { data as filmData } from '@/constants/film-data'

export type GetFilmDataOptions = {
  code: string
}

export type GetFilmDataResp = {
  cnName: string
  enName: string
  time: string
  productCompany: string
  issueCompany: string
  director: string
  scriptwriter: string
  type: string
  stars: string
  duration: string
  mainPrize: string
  introduction: string
}

export function getFilmData(options: GetFilmDataOptions): Promise<GetFilmDataResp> {
  const { code } = options

  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      const data = filmData[code]
      resolve(data)
    }, 1500)
  })
}
