/**
 * @file Loading UI Component
 */

import React, { HTMLAttributes, CSSProperties } from 'react'
import cls from 'classnames'
import { View } from 'remax/one'

import { primaryColor } from '@/utils/styles/color'

import styles from './style.less'

type LoadingType = 'default' | 'dot'

export type Props = HTMLAttributes<HTMLElement> & {
  type?: LoadingType
  color?: string
  size?: string
}

export default function Loading({
  type = 'default',
  color = primaryColor,
  size = '42rpx',
  className
}: Props) {

  function getDotStyle() {
    const sizeNum = parseInt(size, 10)
    const dotSize = `${parseInt(`${sizeNum / 4}`, 10)}rpx`
    const dotBorderWidth = `${parseInt(`${sizeNum / 20}`, 10) || 2}rpx`
    const transform = `${parseInt(`${sizeNum / 2}`, 10)}rpx`

    const style: CSSProperties = {
      width: dotSize,
      height: dotSize,
      borderWidth: dotBorderWidth,
      borderColor: color,
      transformOrigin: `${transform} ${transform}`
    }

    return style
  }

  function renderDot() {
    // 动态计算 dot 的 style
    const dotStyle = getDotStyle()

    return (
      <View
        className={cls(
          styles.dot,
          className
        )}
        style={{
          width: size,
          height: size
        }}
      >
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
        <View style={dotStyle} />
      </View>
    )
  }

  function renderDefault() {
    return (
      <View
        className={cls(
          styles.default,
          className
        )}
        style={{
          width: size,
          height: size,
          borderColor: `${color} ${color} transparent`
        }}
      />
    )
  }

  function renderLoadingByType(loadingType: LoadingType) {
    switch (loadingType) {
      case 'dot':
        return renderDot()
      default:
        return renderDefault()
    }
  }

  return renderLoadingByType(type)
}
