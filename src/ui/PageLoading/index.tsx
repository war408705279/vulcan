/**
 * @file PageLoading UI Component
 */

import React, { HTMLAttributes, ReactNode } from 'react'
import cls from 'classnames'
import { View, Text } from 'remax/one'

import Loading from '@/ui/Loading'

import {
  primaryColor,
  greyFive
} from '@/utils/styles/color'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  loading?: boolean // 是否正在加载
  tip?: ReactNode // 文案内容
  iconColor?: string // loading 图标颜色
  tipColor?: string // 文案颜色
}

export default function PageLoading({
  loading,
  tip = '正在加载...',
  iconColor = primaryColor,
  tipColor = greyFive,
  className
}: Props) {

  loading = loading === undefined ? true : loading

  if (!loading) {
    return null
  }

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
    >
      <Loading
        className={styles.icon}
        type="dot"
        color={iconColor}
      />
      <Text
        className={styles.tip}
        style={{
          color: tipColor
        }}
      >
        {tip}
      </Text>
    </View>
  )
}
