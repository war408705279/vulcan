/**
 * @file Loading UI Component
 */

import React, { HTMLAttributes, CSSProperties } from 'react'
import cls from 'classnames'
import { View } from 'remax/one'

import { primaryColor } from '@/utils/styles/color'

import styles from './style.less'

type LoadingType = 'default' | 'dot' | 'vulcan'

export type Props = HTMLAttributes<HTMLElement> & {
  type?: LoadingType
  color?: string
  size?: string
}

export default function Loading({
  type = 'default',
  color = primaryColor,
  size = '44rpx',
  className
}: Props) {

  function getDotItemStyle() {
    const sizeNum = parseInt(size, 10)
    const dotItemSize = `${parseInt(`${sizeNum / 4}`, 10)}rpx`
    const dotItemBorderWidth = `${parseInt(`${sizeNum / 20}`, 10) || 2}rpx`
    const transform = `${parseInt(`${sizeNum / 2}`, 10)}rpx`

    const style: CSSProperties = {
      width: dotItemSize,
      height: dotItemSize,
      borderWidth: dotItemBorderWidth,
      borderColor: color,
      transformOrigin: `${transform} ${transform}`
    }

    return style
  }

  function renderDot() {
    // 动态计算 dot item 的 style
    const dotItemStyle = getDotItemStyle()

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
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
        <View style={dotItemStyle} />
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

  function getVulcanItemStyle() {
    const sizeNum = parseInt(size, 10)
    const vulcanItemSize = `${parseInt(`${sizeNum / 4}`, 10)}rpx`

    const style: CSSProperties = {
      width: vulcanItemSize,
      height: vulcanItemSize,
      backgroundColor: color
    }

    return style
  }

  function renderVulcan() {
    // 动态计算 vulcan item 的 style
    const vulcanItemStyle = getVulcanItemStyle()

    return (
      <View
        className={cls(
          styles.vulcan,
          className
        )}
        style={{
          width: size,
          height: size
        }}
      >
        <View style={vulcanItemStyle} />
        <View style={vulcanItemStyle} />
        <View style={vulcanItemStyle} />
      </View>
    )
  }

  function renderLoadingByType(loadingType: LoadingType) {
    switch (loadingType) {
      case 'dot':
        return renderDot()
      case 'vulcan':
        return renderVulcan()
      default:
        return renderDefault()
    }
  }

  return renderLoadingByType(type)
}
