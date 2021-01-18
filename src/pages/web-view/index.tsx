/**
 * @file: web-view index page
 * @description 跳转到外链用，路由跳转到此页面带上 url 参数即可
 */

import React from 'react'

import { useQuery } from 'remax'

import { WebView } from 'remax/one'

export default function WebViewPage() {
  const { url } = useQuery<{ url: string }>()

  return <WebView src={decodeURIComponent(url)} />
}
