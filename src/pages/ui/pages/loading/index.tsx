/**
 * @file ui loading page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

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
        Loading 组件
      </View>
    </Scaffold>
  )
}
