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

        <View className={styles.tipContainer}>
          提示
          <View className={styles.tipItem}>
            1. 由于演员较多，这边先列举大家比较熟悉的，后续会慢慢补充，望大家海涵~
          </View>
          <View className={styles.tipItem}>
            2. 排名不分先后
          </View>
          <View className={styles.tipItem}>
            3. 大体按照以下顺序展开：原初 -&gt; 下一代 -&gt; 开尔文时间线
          </View>
        </View>

        {renderMainView()}
      </View>
    </Scaffold>
  )
}
