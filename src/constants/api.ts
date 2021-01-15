/**
 * @file api 相关常量
 */

import { apiHost } from './env'

export const apiPrefix = `${apiHost}/api`

export class CommonApiError {
  constructor(
    public code: number | string,
    public data: unknown,
    public message: string
  ) {}
}
