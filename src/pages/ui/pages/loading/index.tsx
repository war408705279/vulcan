/**
 * @file ui loading page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Loading from '@/ui/Loading'

import { nameMap } from '@/constants/route'

import {
  dangerColor,
  warningColor,
  successColor
} from '@/utils/styles/color'

import styles from './index.less'

export default function UiLoading() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_loading}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Item />
        </View>

        <View className={styles.title}>
          Type
        </View>
        <View className={styles.items}>
          <Item
            type="default"
            label="default"
          />
          <Item
            type="dot"
            label="dot"
          />
        </View>

        <View className={styles.title}>
          Size
        </View>
        <View className={styles.items}>
          <Item
            size="64rpx"
            label="64rpx"
          />
          <Item
            label="default"
          />
        </View>

        <View className={styles.title}>
          Color
        </View>
        <View className={styles.items}>
          <Item
            color={dangerColor}
            label="#EF4149"
          />
          <Item
            color={warningColor}
            label="#FAAD14"
          />
          <Item
            color={successColor}
            label="#4BC310"
          />
        </View>
      </View>
    </Scaffold>
  )
}

type ItemProps = {
  type?: 'default' | 'dot'
  color?: string
  size?: string
  label?: string
}

function Item({
  type,
  color,
  size,
  label
}: ItemProps) {
  return (
    <View className={styles.item}>
      <View className={styles.content}>
        <Loading
          className={styles.icon}
          type={type}
          color={color}
          size={size}
        />
        <View className={styles.label}>
          {label}
        </View>
      </View>
    </View>
  )
}
