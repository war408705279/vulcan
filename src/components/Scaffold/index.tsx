import React, { ReactNode } from 'react'

import { View } from 'remax/one'

import { useSystemInfo } from '@/utils/hooks/system-info'
import { ToastConsumer } from '@/utils/toast'

type ScaffoldProps = {
  appBar: ReactNode
  children: ReactNode
}

export default function Scaffold({ appBar, children }: ScaffoldProps) {
  const { statusBarHeight, appBarHeight } = useSystemInfo()

  return (
    <View>
      {appBar}
      {/* 占位用的方块，避免 body 部分被 appbar 挡住 */}
      <View
        style={{
          width: '100%',
          height: appBar ? statusBarHeight + appBarHeight + 'px' : 0
        }}
      />
      <View>
        {children}
      </View>
      <ToastConsumer />
    </View>
  )
}
