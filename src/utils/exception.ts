/**
 * @file exception content
 * @description copy from portal-base, 去掉了 cancelled 相关类型
 */

import comErrCodeMsgMap, { helpWords } from '@/constants/error-code-messages'
import { CommonApiError } from '@/constants/api'

export function getMsgFromErrCode(code: number | string, apiErrCodeMsgMap: any) {
  const errCodeMsgMap = {
    ...apiErrCodeMsgMap,
    ...comErrCodeMsgMap
  }

  if (errCodeMsgMap.hasOwnProperty(code)) { // eslint-disable-line no-prototype-builtins
    return errCodeMsgMap[code]
  }

  return `未知错误，${helpWords}`
}

export function humanizeErrToMsg(err: any) {
  if (err instanceof CommonApiError) return err.message || `未知错误，${helpWords}`
  return err
}
