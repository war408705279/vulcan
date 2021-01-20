/**
 * @file Cell UI Component
 */

import React, { HTMLAttributes, ReactNode, CSSProperties } from 'react'
import { View, Text } from 'remax/one'
import cls from 'classnames'

import Icon from '@/ui/Icon'

import { IconType } from '@/constants/icon'

import { greyFour } from '@/utils/styles/color'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  label?: ReactNode
  description?: ReactNode
  leftStyle?: CSSProperties
  icon?: string | IconType | ReactNode
  iconColor?: string
  required?: boolean
  arrow?: boolean
  onTap?: (e: any) => void
}

export default function Cell({
  label, leftStyle, description, icon, iconColor = greyFour, arrow,
  required, onTap, className, children
}: Props) {

  function renderRequired() {
    if (!required) {
      return null
    }

    return (
      <Text className={styles.required}>*</Text>
    )
  }

  function renderIcon() {
    if (!icon) {
      return null
    }

    // 如果 icon 是外部传入的 ReactNode 则直接 return
    if (typeof icon !== 'string') {
      return icon
    }

    return (
      <Icon
        className={styles.icon}
        type={icon}
        color={iconColor}
      />
    )
  }

  function renderLabel() {
    if (!label) {
      return null
    }

    return (
      <Text className={styles.label}>
        {label}
      </Text>
    )
  }

  function renderArrowIcon() {
    if (!arrow) {
      return null
    }

    return (
      <Icon
        className={styles.arrowIcon}
        type="arrow-right"
      />
    )
  }

  function renderDescription() {
    if (!description) {
      return null
    }

    return (
      <View className={styles.description}>{description}</View>
    )
  }

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
      onTap={onTap}
    >
      <View className={styles.wrapper}>
        <View
          className={styles.left}
          style={leftStyle}
        >
          {renderRequired()}
          {renderIcon()}
          {renderLabel()}
        </View>
        <View className={styles.right}>
          {children}
          {renderArrowIcon()}
        </View>
      </View>
      {renderDescription()}
    </View>
  )
}
