/**
 * @file ship index page
 */

import React, { useEffect } from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import PageLoading from '@/ui/PageLoading'
import Cell from '@/ui/Cell'

import { nameMap, routeMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'

import {
  DataType as PageDataType,
  DataItemType as PageDataItemType,
  data as originPageData
} from './page-data'

import IconShip from './images/icon-ship.jpg'

import styles from './index.less'

function getPageData(): Promise<PageDataType[]> {
  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      resolve(originPageData)
    }, 1500)
  })
}

export default function Ship() {
  const {
    $: pageData,
    loading: getPageDataLoading,
    call: callGetPageData
  } = useApi(getPageData)

  useEffect(() => {
    callGetPageData()
  }, [callGetPageData])

  function renderMainView() {
    if (getPageDataLoading) {
      return <PageLoading loading />
    }

    if (!pageData) {
      return (
        <View className={styles.emptyTip}>
          没有查找到数据哦~
        </View>
      )
    }

    return pageData.map(
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
  }

  return (
    <Scaffold appBar={<AppBar title={nameMap.ship} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconShip}
          />
        </View>

        {renderMainView()}
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
      url={`${routeMap.ship_introduce}?code=${code}`}
      action="navigate"
    >
      <Cell
        label={label}
        arrow
      />
    </Navigator>
  )
}
