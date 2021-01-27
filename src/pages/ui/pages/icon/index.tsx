/**
 * @file ui icon page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiIcon() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_icon}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        UI Icon 页面
      </View>
    </Scaffold>
  )
}
