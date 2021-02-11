/**
 * @file mine hobby page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function MineHobby() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.mine_hobby}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <Cell className={styles.item}>
          <View className={styles.content}>
            学习，写代码，逛 Github
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            陪老婆刷刷剧，看看综艺、电影什么的
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            夜跑爱好者，不想出去的时候在家做 Keep
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            研读《如何在不经意间夸赞维军大佬》
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            Nintendo Switch 初级玩家
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            2020 年曾沉迷跑跑卡丁车手游，后来弃坑了
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            目前正在犹豫要不要入王者农药的坑
          </View>
        </Cell>
      </View>
    </Scaffold>
  )
}
