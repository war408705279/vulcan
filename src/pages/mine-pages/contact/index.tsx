/**
 * @file mine contact page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function MineContact() {
  const leftStyle = {
    width: '140rpx',
    flex: '0 0 auto'
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.mine_contact}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <Cell
          className={styles.item}
          label="Mobile:"
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            13585954943
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="Mail:"
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            jiayizhen@qiniu.com
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="Wechat:"
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            Jia-_-YiZhen
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="Address:"
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            上海市奉贤区一个贼偏的地方
          </View>
        </Cell>
      </View>
    </Scaffold>
  )
}
