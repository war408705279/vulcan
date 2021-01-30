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
