/**
 * @file ui cell page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'
import { redSix } from '@/utils/styles/color'

import styles from './index.less'

export default function UiCell() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_cell}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="label"
          >
            content
          </Cell>
        </View>

        <View className={styles.title}>
          With Icon
          <View className={styles.subTitle}>
            icon 可以通过传入 ReactNode 实现自定义
          </View>
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="label"
            icon="email"
          >
            content
          </Cell>
          <Cell
            className={styles.cell}
            label="label"
            icon="password"
          >
            content
          </Cell>
          <Cell
            className={styles.cell}
            label="label"
            icon="email"
            iconColor={redSix}
          >
            content
          </Cell>
        </View>

        <View className={styles.title}>
          With Required
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="label"
            required
          >
            content
          </Cell>
          <Cell
            className={styles.cell}
            label="label"
            icon="email"
            required
          >
            content
          </Cell>
        </View>

        <View className={styles.title}>
          With Arrow
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="label"
            arrow
          >
            content
          </Cell>
        </View>

        <View className={styles.title}>
          With Description
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="label"
            description="Live long and prosper"
          >
            content
          </Cell>
        </View>
      </View>
    </Scaffold>
  )
}
