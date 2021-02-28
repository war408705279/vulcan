/**
 * @file ship index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import {
  DataItemType as PageDataItemType,
  data as originPageData
} from './page-data'

import IconShip from './images/icon-ship.jpg'

import styles from './index.less'

export default function Ship() {
  const mainView = originPageData.map(
    (data, outerIndex) => {
      const { title, list } = data
      const listView = list.map(
        (listItem, innerIndex) => (
          <Item
            key={innerIndex}
            {...listItem}
          />
        )
      )

      return (
        <View key={outerIndex}>
          <View className={styles.title}>
            {title}
          </View>
          <View className={styles.cells}>
            {listView}
          </View>
        </View>
      )
    }
  )

  return (
    <Scaffold appBar={<AppBar title={nameMap.ship} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconShip}
          />
        </View>

        {mainView}
      </View>
    </Scaffold>
  )
}

type ItemProps = PageDataItemType

function Item({
  code,
  label
}: ItemProps) {
  if (!code) {
    return (
      <Cell
        className={styles.cell}
        label={label}
      />
    )
  }

  return (
    <Navigator
      className={styles.cell}
      url=""
      action="navigate"
    >
      <Cell
        label={label}
        arrow
      />
    </Navigator>
  )
}
