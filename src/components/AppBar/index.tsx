import React, { ReactNode } from 'react'

import { View } from 'remax/one'

import { useSystemInfo } from '@/utils/hooks/system-info'
import { white } from '@/utils/styles/color'

import styles from './index.less'

export type Props = {
  title: string
  // 显示在 title 左侧的部分
  leading?: ReactNode
  backgroundColor?: string
}

export default function AppBar({
  title,
  leading,
  backgroundColor = white
}: Props) {
  const { statusBarHeight, appBarHeight } = useSystemInfo()

  return (
    <View
      className={styles.nav}
      style={{
        height: `${appBarHeight + statusBarHeight}px`,
        paddingTop: `${statusBarHeight}px`,
        backgroundColor
      }}
    >
      <View className={styles.leading}>
        {leading}
      </View>
      <View className={styles.title}>
        {title}
      </View>
      <View />
    </View>
  )
}
