import React, { ReactNode, useEffect, useState } from 'react'

import { useAppEvent } from 'remax/macro'

import {
  SystemInfoContext,
  getSystemInfo,
  SystemInfo
} from '@/utils/hooks/system-info'
import { ToastProvider } from '@/utils/toast'

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null)

  function fetchSystemInfo() {
    getSystemInfo().then(_systemInfo => setSystemInfo(_systemInfo || null))
  }

  useEffect(() => {
    fetchSystemInfo()
  }, [])

  // App 可见时重新获取 systemInfo 信息
  // 避免出现拿不到 systemInfo 的情况
  // 参考：https://developers.weixin.qq.com/community/develop/doc/0006eeb2db0ae022a098c58f85d800?_at=tdjfeehau
  useAppEvent('onShow', () => {
    fetchSystemInfo()
  })

  return (
    <SystemInfoContext.Provider value={systemInfo}>
      <ToastProvider>
        {systemInfo ? children : <PlaceHolder />}
      </ToastProvider>
    </SystemInfoContext.Provider>
  )
}

function PlaceHolder() {
  return <p>loading...</p>
}
