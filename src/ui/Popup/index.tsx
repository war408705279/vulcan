/**
 * @file Popup UI Component
 */

import React, { HTMLAttributes } from 'react'
import cls from 'classnames'
import { View } from 'remax/one'

import Mask from '@/components/Mask'

import Icon from '@/ui/Icon'

import { black } from '@/utils/styles/color'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  open?: boolean
  closeable?: boolean
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left'
  mask?: boolean
  square?: boolean
  coverTopNav?: boolean
  onClose?: () => void
}

export default function Popup({
  open = false,
  closeable,
  position = 'center',
  mask = true,
  square,
  coverTopNav = false,
  className,
  children,
  onClose
}: Props) {

  const handleMaskTap = () => {
    if (onClose) onClose()
  }

  function getPosCls() {
    switch (position) {
      case 'top':
        return styles.top
      case 'right':
        return styles.right
      case 'bottom':
        return styles.bottom
      case 'left':
        return styles.left
      default:
        return styles.center
    }
  }

  function renderCloseIcon() {
    if (!closeable) {
      return null
    }

    return (
      <View
        className={styles.closeIcon}
        onTap={handleMaskTap}
      >
        <Icon
          type="close"
          size="40rpx"
          color={black}
        />
      </View>
    )
  }

  function renderMain() {
    const classes = cls(
      styles.main,
      getPosCls(),
      square && styles.square,
      open && styles.active,
      className
    )

    return (
      <View className={classes}>
        {children}
        {renderCloseIcon()}
      </View>
    )
  }

  if (!mask) {
    return renderMain()
  }

  return (
    <Mask
      withBg
      coverTopNav={coverTopNav}
      show={open}
      onTap={handleMaskTap}
    >
      {renderMain()}
    </Mask>
  )
}
