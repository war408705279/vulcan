/**
 * @file crew index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import { nameMap } from '@/constants/route'

import IconCrew from './images/icon-crew.jpg'

import styles from './index.less'

export default function Crew() {
  function renderMainView() {
    return (
      <View className={styles.emptyTip}>
        没有查找到数据哦~
      </View>
    )
  }

  return (
    <Scaffold appBar={<AppBar title={nameMap.crew} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconCrew}
            mode="widthFix"
          />
        </View>

        {renderMainView()}
      </View>
    </Scaffold>
  )
}
