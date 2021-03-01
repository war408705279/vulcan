/**
 * @file ship-data api
 */

import { data as shipData } from '@/constants/ship-data'

export type GetShipDataOptions = {
  code: string
}

export type GetShipDataResp = {
  name: string
  spec: string
  time: string
  length: string
  width: string
  height: string
  quality: string
  crewNum: string
  cruisingSpeed: string
  maxSpeed: string
  arms: string
  defend: string
  information: string
  known: null | string[]
  note: string
}

export function getShipData(options: GetShipDataOptions): Promise<GetShipDataResp> {
  const { code } = options

  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      const data = shipData[code]
      resolve(data)
    }, 1500)
  })
}
