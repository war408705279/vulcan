/**
 * @file Tag + CheckableTag UI Component
 */

import React, { ReactNode, CSSProperties } from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import {
  greyTwo,
  greySix,
  primaryColor,
  white
} from '@/utils/styles/color'

import styles from './style.less'

export type TagProps = {
  color?: string
  round?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onTap?: (e: any) => void
}

export default function Tag({
  color = primaryColor,
  round,
  className,
  style,
  children,
  onTap
}: TagProps) {

  const mainCls = cls(
    styles.main,
    round && styles.round,
    className
  )

  return (
    <View
      className={mainCls}
      style={{
        backgroundColor: color,
        ...style
      }}
      onTap={onTap}
    >
      {children}
    </View>
  )
}

export type CheckableTagProps = Omit<TagProps, 'onTap'> & {
  checked?: boolean
  checkedColor?: string
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export function CheckableTag({
  checked,
  round,
  color = greyTwo,
  checkedColor = primaryColor,
  disabled,
  className,
  style,
  children,
  onChange
}: CheckableTagProps) {

  const handleTap = () => {
    if (disabled) return

    if (onChange) onChange(!checked)
  }

  const classes = cls(
    styles.checkable,
    disabled && styles.disabled,
    className
  )

  return (
    <Tag
      className={classes}
      style={{
        color: checked ? white : greySix,
        backgroundColor: checked ? checkedColor : color,
        ...style
      }}
      round={round}
      onTap={handleTap}
    >
      {children}
    </Tag>
  )
}
