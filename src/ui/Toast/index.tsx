/**
 * @file Toast UI Component
 */

import React from 'react'
import cls from 'classnames'
import { View, Text } from 'remax/one'

import Mask from '@/components/Mask'

import Loading from '@/ui/Loading'
import Icon from '@/ui/Icon'

import { white } from '@/utils/styles/color'

import styles from './style.less'

export type Props = {
  tip: string
  icon?: 'loading' | 'success' | 'warning' | 'fail' | 'none'
  duration?: number
  coverTopNav?: boolean
  className?: string
}

export default function Toast({
  tip,
  icon = 'none',
  coverTopNav = false,
  className
}: Props) {

  const iconClass = cls(styles.icon, !tip && styles.noTip)

  function renderIcon() {
    switch (icon) {
      case 'loading':
        return (
          <Loading
            className={iconClass}
            type="dot"
            color={white}
          />
        )
      case 'success':
        return (
          <Icon
            className={iconClass}
            type="success-solid"
            color={white}
            size="48rpx"
          />
        )
      case 'warning':
        return (
          <Icon
            className={iconClass}
            type="warning-solid"
            color={white}
            size="48rpx"
          />
        )
      case 'fail':
        return (
          <Icon
            className={iconClass}
            type="close-solid"
            color={white}
            size="48rpx"
          />
        )
      default:
        return null
    }
  }

  return (
    <Mask
      coverTopNav={coverTopNav}
      show
    >
      <View
        className={cls(
          styles.main,
          className
        )}
      >
        {renderIcon()}
        <Text className={styles.tip}>
          {tip}
        </Text>
      </View>
    </Mask>
  )
}
