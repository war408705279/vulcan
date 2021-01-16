import React, { ReactNode, useEffect, useState } from 'react'

import { SystemInfoContext, getSystemInfo, SystemInfo } from '@/utils/hooks/system-info'

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null)

  useEffect(() => {
    getSystemInfo().then(_systemInfo => setSystemInfo(_systemInfo || null))
  }, [])

  return (
    <SystemInfoContext.Provider value={systemInfo}>
      {systemInfo ? children : <PlaceHolder />}
    </SystemInfoContext.Provider>
  )
}

function PlaceHolder() {
  return <p>loading...</p>
}
