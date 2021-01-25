/**
 * @file Switch UI Component
 */

import React from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import styles from './style.less'

export type Props = {
  checked?: boolean
  disabled?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

export default function Switch({
  checked,
  disabled,
  className,
  onChange
}: Props) {

  const handleChange = () => {
    if (disabled) return
    if (onChange) onChange(!checked)
  }

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
      onTap={handleChange}
    >
      <View
        className={cls(
          styles.checkbox,
          checked && styles.checked,
          disabled && styles.disabled
        )}
      />
    </View>
  )
}
