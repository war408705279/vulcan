/**
 * @file Result UI Component
 */

import React, { HTMLAttributes, ReactNode } from 'react'
import { View } from 'remax/one'
import cls from 'classnames'

import Icon from '@/ui/Icon'

import { primaryColor, successColor, dangerColor, warningColor } from '@/utils/styles/color'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  icon?: 'info' | 'success' | 'error' | 'time' | ReactNode
  title?: ReactNode
  subTitle?: ReactNode
  extra?: ReactNode
}

export default function Popup({
  icon = 'info',
  title,
  subTitle,
  extra,
  className
}: Props) {

  function renderIcon() {
    if (typeof icon !== 'string') {
      // 自定义 icon 直接 return
      return icon
    }

    switch (icon) {
      case 'success':
        return (
          <Icon
            className={styles.icon}
            type="success-solid"
            color={successColor}
            size="136rpx"
          />
        )
      case 'error':
        return (
          <Icon
            className={styles.icon}
            type="close-solid"
            color={dangerColor}
            size="136rpx"
          />
        )
      case 'time':
        return (
          <Icon
            className={styles.icon}
            type="time-solid"
            color={warningColor}
            size="136rpx"
          />
        )
      case 'info':
      default:
        return (
          <Icon
            className={styles.icon}
            type="info-solid"
            color={primaryColor}
            size="136rpx"
          />
        )
    }
  }

  const titleView = title && (
    <View className={styles.title}>{title}</View>
  )

  const subTitleView = subTitle && (
    <View className={styles.subTitle}>{subTitle}</View>
  )

  const extraView = extra && (
    <View className={styles.extra}>{extra}</View>
  )

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
    >
      {renderIcon()}
      {titleView}
      {subTitleView}
      {extraView}
    </View>
  )
}
