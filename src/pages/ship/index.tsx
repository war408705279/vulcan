/**
 * @file ship index page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function Ship() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.ship} />}>
      <View className={styles.main}>
        <View className={styles.title}>
          22 世纪
        </View>
        <View className={styles.cells}>
          <Cell
            className={styles.cell}
            label="恒河级 - Ganges Class"
            arrow
          />
          <Cell
            className={styles.cell}
            label="无畏型 - Intrepid Type"
            arrow
          />
          <Cell
            className={styles.cell}
            label="NX 级 - NX Class"
            arrow
          />
          <Cell
            className={styles.cell}
            label="代达罗斯级 - Daedalus Class"
            arrow
          />
        </View>
      </View>
    </Scaffold>
  )
}
