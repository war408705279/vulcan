/**
 * @file Mask Component
 */

import React, { HTMLAttributes } from 'react'
import cls from 'classnames'
import { View } from 'remax/one'

import { useSystemInfo } from '@/utils/hooks/system-info'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  show?: boolean
  zIndex?: number
  withBg?: boolean
  coverTopNav?: boolean
  onTap?: () => void
}

export default function Mask({
  show,
  zIndex = 1000,
  withBg = false,
  coverTopNav = false,
  onTap,
  className,
  children
}: Props) {

  const { statusBarHeight, appBarHeight } = useSystemInfo()

  function getStyle() {
    return {
      top: coverTopNav ? `${statusBarHeight}px` : `${statusBarHeight + appBarHeight}px`,
      zIndex
    }
  }

  return (
    <View
      className={cls(
        styles.main,
        show && styles.show,
        withBg && styles.withBg,
        className
      )}
      style={getStyle()}
      onTap={onTap}
    >
      {children}
    </View>
  )
}
