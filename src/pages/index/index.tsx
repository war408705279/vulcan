/**
 * @file index page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function Index() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <UnderConstruction
          tip="页面施工中..."
        />
      </View>
    </Scaffold>
  )
}
