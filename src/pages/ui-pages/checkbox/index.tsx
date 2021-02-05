/**
 * @file ui checkbox page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiCheckbox() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_checkbox}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        Checkbox 组件
      </View>
    </Scaffold>
  )
}
