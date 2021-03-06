/**
 * @file system-info hooks
 */

import * as wechat from 'remax/wechat'

import { createContext, useContext } from 'react'

export type SystemInfo = {
  statusBarHeight: number
  appBarHeight: number
  platform: string
  screenWidth: number
  // 设备屏幕宽度(screenWidth)相对于 750 的缩放比例，用于 rpx 计算
  // 实际单位会被 remax 乘以这个比例。举个例子，statusBarHeight 是 20，设置的 20px 会被转换成 10px。
  // 所以 js 里面消费此的高宽等应该除以此变量
  scaleRatio: number
}

export const SystemInfoContext = createContext<SystemInfo | null>(null)

export function useSystemInfo() {
  const systemInfo = useContext(SystemInfoContext)

  if (systemInfo === null) {
    throw Error('Unable to get system info.')
  }

  return systemInfo
}

export function getSystemInfo(): Promise<SystemInfo | undefined> {
  return new Promise((resolve, reject) => {
    wechat.getSystemInfo().then(res => resolve(transformWechatSystemInfo(res))).catch(reject)
  })
}

function transformWechatSystemInfo(systemInfo: WechatMiniprogram.GetSystemInfoSuccessCallbackResult): SystemInfo {
  const menuRect = wechat.getMenuButtonBoundingClientRect()
  // ios 真机有时拿到的 menuRect 各项值均为 0
  // 采用给初始值的方式解决
  // 安卓 && ios 真机胶囊高度均为 32px
  const menuRectHeight = menuRect.height || 32
  // 如果拿不到 menuRect.top 则 gap 默认 8px
  const gap = menuRect.top ? (menuRect.top - systemInfo.statusBarHeight) * 2 : 8
  // 微信平台高度不对，增加 4px
  const appBarHeight = menuRectHeight + gap + 4

  return {
    statusBarHeight: systemInfo.statusBarHeight,
    appBarHeight,
    platform: systemInfo.platform,
    screenWidth: systemInfo.screenWidth,
    scaleRatio: systemInfo.screenWidth / 750
  }
}
