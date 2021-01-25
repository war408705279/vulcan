/**
 * @file Checkbox UI Component
 * @todo 添加 Checkbox Group
 */

import React, { ReactNode, CSSProperties } from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import styles from './style.less'

export type Props = {
  checked?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onChange?: (checked: boolean) => void
}

export default function Checkbox({
  checked,
  className,
  style,
  children,
  onChange
}: Props) {

  const handleTap = () => {
    if (onChange) onChange(!checked)
  }

  const childrenView = children && (
    <View className={styles.children}>{children}</View>
  )

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
      style={style}
      onTap={handleTap}
    >
      <View
        className={cls(
          styles.box,
          checked && styles.checked
        )}
      />
      {childrenView}
    </View>
  )
}
