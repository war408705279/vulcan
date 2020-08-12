/**
 * @file api 相关常量
 */

import { apiHost } from './env'

export const apiPrefix = `${apiHost}/api`

// 七牛业务接口返回的基本格式
export interface ICommonFetchResult<T = any> {
  code: number
  data: T
  message?: string
}
