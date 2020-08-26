/**
 * @file wechat fetch content
 */

import { request as wechatRequest } from 'remax/wechat'

import { ICommonFetchResult } from '@/constants/api'

import { promisify } from '@/utils/promise'

import { toCamelCase, toSnakeCase } from '@/utils/transform'

export type FetchOptions = Omit<WechatMiniprogram.RequestOption, 'url' | 'success' | 'fail'>

function getHeader(header: object) {
  return {
    // TODO: Add token
    Authorization: 'Bearer xxx',
    'Content-Type': 'application/json',
    ...header
  }
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

  if (options.data) {
    options.data = toSnakeCase(options.data)
  }

  const request = promisify(wechatRequest)

  return request({ url, ...options }).then((res: any) => {
      const result: ICommonFetchResult = res.data as any

      // response body 有内容
      if (result) {
        if (result.code !== 200) { // 业务返回错误
          return Promise.reject(result)
        }

        return toCamelCase(result.data) // 返回结果由 snake case 转为 camelCase
      }

      // response body 无内容
      if (res.statusCode !== 200) { // 业务无返回 且 http 请求出错
        return Promise.reject({
          code: res.statusCode
        })
      }

      return result
    }
  )
}

export function postJSON(url: string, body: object) {
  return fetch(url, { method: 'POST', data: body })
}

export function putJSON(url: string, body: object) {
  return fetch(url, { method: 'PUT', data: body })
}

export function deleteJSON(url: string, body: object) {
  return fetch(url, { method: 'DELETE', data: body })
}
