/**
 * @file system-info hooks
 */

import * as wechat from 'remax/wechat'
import * as ali from 'remax/ali'
import { isAli } from '@/constants/env'
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
    if (isAli) {
      // 超时会返回 undefined
      ali.getSystemInfo().then(res => resolve(res && transformAliSystemInfo(res))).catch(reject)
    }

    wechat.getSystemInfo().then(res => resolve(transformWechatSystemInfo(res))).catch(reject)
  })
}

function transformAliSystemInfo(systemInfo: AliMiniprogram.IGetSystemInfoSuccessResult): SystemInfo {
  return {
    statusBarHeight: systemInfo.statusBarHeight,
    appBarHeight: systemInfo.titleBarHeight,
    platform: systemInfo.platform,
    screenWidth: systemInfo.screenWidth,
    scaleRatio: systemInfo.screenWidth / 750
  }
}

function transformWechatSystemInfo(systemInfo: WechatMiniprogram.SystemInfo): SystemInfo {
  const menuRect = wechat.getMenuButtonBoundingClientRect()
  // 微信平台高度不对，增加 4px
  const appBarHeight = menuRect.height + (menuRect.top - systemInfo.statusBarHeight) * 2 + 4

  return {
    statusBarHeight: systemInfo.statusBarHeight,
    appBarHeight,
    platform: systemInfo.platform,
    screenWidth: systemInfo.screenWidth,
    scaleRatio: systemInfo.screenWidth / 750
  }
}
