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
        <Navigator
          className={styles.cell}
          url={routeMap.ui_icon}
          action="navigate"
        >
          <Cell
            label="Icon"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_popup}
          action="navigate"
        >
          <Cell
            label="Popup"
            arrow
          />
        </Navigator>
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
        <Navigator
          className={styles.cell}
          url={routeMap.ui_input}
          action="navigate"
        >
          <Cell
            label="Input"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_textarea}
          action="navigate"
        >
          <Cell
            label="Textarea"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_radio}
          action="navigate"
        >
          <Cell
            label="Radio"
            arrow
          />
        </Navigator>
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
        <Navigator
          className={styles.cell}
          url={routeMap.ui_tag}
          action="navigate"
        >
          <Cell
            label="Tag"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_tabs}
          action="navigate"
        >
          <Cell
            label="Tabs"
            arrow
          />
        </Navigator>
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
        <Navigator
          className={styles.cell}
          url={routeMap.ui_loading}
          action="navigate"
        >
          <Cell
            label="Loading"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_page_loading}
          action="navigate"
        >
          <Cell
            label="Page Loading"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_result}
          action="navigate"
        >
          <Cell
            label="Result"
            arrow
          />
        </Navigator>
        <Navigator
          className={styles.cell}
          url={routeMap.ui_toast}
          action="navigate"
        >
          <Cell
            label="Toast"
            arrow
          />
        </Navigator>
      </View>
    </>
  )
}
