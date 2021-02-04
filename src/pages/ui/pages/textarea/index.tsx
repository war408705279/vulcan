/**
 * @file ui textarea page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiTextarea() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_textarea}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        Textarea 组件
      </View>
    </Scaffold>
  )
}
