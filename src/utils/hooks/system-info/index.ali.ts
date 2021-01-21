/**
 * @file system-info hooks
 * @description ali version
 */

import * as ali from 'remax/ali'

import { createContext, useContext } from 'react'

import { SystemInfo } from '.'

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
    // 超时会返回 undefined
    ali.getSystemInfo().then(res => resolve(res && transformAliSystemInfo(res))).catch(reject)
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
