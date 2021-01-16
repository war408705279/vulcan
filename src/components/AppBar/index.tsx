import React, { ReactNode } from 'react'

import { View } from 'remax/one'

import { useSystemInfo } from '@/utils/hooks/system-info'
import { white } from '@/utils/styles/color'

import style from './index.less'

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
      className={style.nav}
      style={{
        height: appBarHeight + statusBarHeight + 'px',
        paddingTop: statusBarHeight + 'px',
        backgroundColor
      }}
    >
      <View className={style.leading}>
        {leading}
      </View>
      <View className={style.title}>
        {title}
      </View>
      <View />
    </View>
  )
}
