/**
 * @file user api
 */

import { fetch } from 'utils/fetchs'
import { apiPrefix as basePrefix } from 'constants/api'

const apiPrefix = `${basePrefix}/user`

export type UserInfo = {
  name: string
}

/** 获取用户信息 */
export async function getUserInfo(): Promise<UserInfo> {
  return fetch(apiPrefix)
}
