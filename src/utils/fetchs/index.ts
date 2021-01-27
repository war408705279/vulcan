/**
 * @file fetchs index
 */

import { request as wechatRequest } from 'remax/wechat'

import { host, isWechat } from '@/constants/env'
import { CommonApiError } from '@/constants/api'

import { promisify } from '@/utils/promise'
import { getMsgFromErrCode } from '@/utils/exception'

export type FetchOptions = Omit<WechatMiniprogram.RequestOption, 'url' | 'success' | 'fail'> & {
  errCodeMsgMap?: any
}

export type FetchExtraOptions = {
  errCodeMsgMap?: any
}

export function getHeader(header: any) {
  return {
    Origin: host,
    'Content-Type': 'application/json',
    ...header
  }
}

export function getPromisifyRequest() {
  if (isWechat) {
    return promisify(wechatRequest)
  }

  return promisify(wechatRequest)
}

// 将微信回调函数式的 request 转化为 Promsie 对象
// - success 对应 Promise 的 resolve 状态
// - fail 对应 Promise 的 reject 状态
export function fetch(url: string, options?: FetchOptions): Promise<any> {
  options = {
    method: 'GET',
    dataType: 'json', // 返回的数据为 JSON，微信返回后会对返回的数据进行一次 JSON.parse
    header: getHeader(options ? options.header : {}),
    ...options
  }

  const request = getPromisifyRequest()

  return request({ url, ...options }).then((res: any) => {
    const result: any = res.data

    if (res.statusCode < 200 || res.statusCode > 299) { // http 请求出错（非 2xx）
      const errMsg = getMsgFromErrCode(res.statusCode, options?.errCodeMsgMap || {})
      throw new CommonApiError(res.statusCode, null, errMsg)
    }

    return result
  })
}

export function postJSON(url: string, body: any, extra?: FetchExtraOptions) {
  return fetch(url, { method: 'POST', data: body, ...extra })
}

export function putJSON(url: string, body: any, extra?: FetchExtraOptions) {
  return fetch(url, { method: 'PUT', data: body, ...extra })
}

export function deleteJSON(url: string, body: any, extra?: FetchExtraOptions) {
  return fetch(url, { method: 'DELETE', data: body, ...extra })
}
