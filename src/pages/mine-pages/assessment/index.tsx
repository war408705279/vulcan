/**
 * @file mine assessment page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function MineAssessment() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.mine_assessment}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        自我评价
      </View>
    </Scaffold>
  )
}
