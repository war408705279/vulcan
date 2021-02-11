/**
 * @file mine assessment page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

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
        <Cell className={styles.item}>
          <View className={styles.content}>
            我是一名前端 爱吃小熊饼干 (●ﾟωﾟ●)
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            上班只为下班 工资刚够早餐 (๑•̀ㅂ•́)و✧
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            每晚都要加班 只求线上平安 ヾ(=･ω･=)o
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            头发快要掉完 前端真的好难 o(TωT)o
          </View>
        </Cell>

        <Cell className={styles.item}>
          <View className={styles.content}>
            只是无名前端 写代码的憨憨 ─=≡Σ(((つ•̀ω•́)つ))
          </View>
        </Cell>
      </View>
    </Scaffold>
  )
}
