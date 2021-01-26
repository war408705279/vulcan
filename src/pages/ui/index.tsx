/**
 * @file ui page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import Cell from '@/ui/Cell'

import { nameMap, routeMap } from '@/constants/route'

import styles from './index.less'

export default function Ui() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.ui} />}>
      <View className={styles.main}>
        <General />
        <DataEntry />
        <DataDisplay />
        <Feedback />
      </View>
    </Scaffold>
  )
}

function General() {
  return (
    <>
      <View className={styles.title}>
        General
      </View>
      <View className={styles.cells}>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_cell}
          action="navigate"
        >
          <Cell
            label="Cell"
            arrow
          />
        </Navigator>
        <Cell
          className={styles.cell}
          label="Icon"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Popup"
          arrow
        />
      </View>
    </>
  )
}

function DataEntry() {
  return (
    <>
      <View className={styles.title}>
        Data Entry
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="Input"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Textarea"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Radio"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Checkbox"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Switch"
          arrow
        />
      </View>
    </>
  )
}

function DataDisplay() {
  return (
    <>
      <View className={styles.title}>
        Data Display
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="Tag"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Tabs"
          arrow
        />
      </View>
    </>
  )
}

function Feedback() {
  return (
    <>
      <View className={styles.title}>
        Feedback
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="Loading"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Page Loading"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Result"
          arrow
        />
        <Cell
          className={styles.cell}
          label="Toast"
          arrow
        />
      </View>
    </>
  )
}
