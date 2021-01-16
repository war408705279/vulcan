import React, { CSSProperties } from 'react'

import { View, navigateBack } from 'remax/one'

import Icon from '@/ui/Icon'
import { IconType } from '@/constants/icon'

import { useSystemInfo } from '@/utils/hooks/system-info'
import { greySeven } from '@/utils/styles/color'

export default function BackLeading() {
  const { appBarHeight } = useSystemInfo()
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: appBarHeight + 'px'
  }

  return (
    <View
      style={style}
      onTap={() => navigateBack()}
    >
      <Icon
        type={IconType.ArrowLeft}
        color={greySeven}
      />
    </View>
  )
}
