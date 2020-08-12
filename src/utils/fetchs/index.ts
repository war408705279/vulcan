/**
 * @file fetchs index
 * @todo 支付宝，头条，百度 ... platform fetch
 */

import { isWechat } from 'constants/platform'

import {
  fetch as wechatFetch,
  postJSON as wechatPostJSON,
  putJSON as wechatPutJSON,
  deleteJSON as wechatDeleteJSON
} from './wechat'

export function fetch(url: string, options?: object) {
  if (isWechat) {
    return wechatFetch(url, options)
  }

  return wechatFetch(url, options)
}

export function postJSON(url: string, body: object) {
  if (isWechat) {
    return wechatPostJSON(url, { method: 'POST', data: body })
  }

  return wechatPostJSON(url, { method: 'POST', data: body })
}

export function putJSON(url: string, body: object) {
  if (isWechat) {
    return wechatPutJSON(url, { method: 'PUT', data: body })
  }

  return wechatPutJSON(url, { method: 'PUT', data: body })
}

export function deleteJSON(url: string, body: object) {
  if (isWechat) {
    return wechatDeleteJSON(url, { method: 'DELETE', data: body })
  }

  return wechatDeleteJSON(url, { method: 'DELETE', data: body })
}
