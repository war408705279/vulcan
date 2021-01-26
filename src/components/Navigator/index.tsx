/**
 * @file: 增加了外链的支持，用这个代替 remax/one 的 Navigator
 */
import React, { PropsWithChildren, useState } from 'react'

import {
  NavigatorProps as BaseNavigatorProps,
  View,
  navigateTo,
  redirectTo,
  switchTab,
  reLaunch
} from 'remax/one'

import { routeMap, Pages } from '@/constants/route'

import { checkIsInnerUrl } from '@/utils/route'

import styles from './index.less'

type NavigatorProps = PropsWithChildren<BaseNavigatorProps>

export default function Navigator({ url, action, children, ...props }: NavigatorProps) {
  const [touched, setTouched] = useState(false)
  const isInnerUrl = checkIsInnerUrl(url)
  // 外部链接先跳转到 pages/web-view，再打开外链
  const realUrl = isInnerUrl ? url : `${routeMap[Pages.WebView]}?url=${encodeURIComponent(url)}`

  return (
    <View
      className={touched && styles.touched || ''}
      onTouchStart={() => setTouched(true)}
      onTouchCancel={() => setTouched(false)}
      onTouchEnd={() => setTouched(false)}
      onTap={(e: any) => {
        e.stopPropagation()
        whatToDo(action)({ url: realUrl })
      }}
      {...props}
    >
      {children}
    </View>
  )
}

function whatToDo(action: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch') {
  switch (action) {
    case 'reLaunch':
      return reLaunch
    case 'switchTab':
      return switchTab
    case 'redirect':
      return redirectTo
    case 'navigate':
    default:
      return navigateTo
  }
}
