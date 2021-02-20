/**
 * @file index page
 */

import React, { useEffect } from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import PageLoading from '@/ui/PageLoading'
import Icon from '@/ui/Icon'

import { nameMap, routeMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'

import {
  DataType as PageDataType,
  DataItemType as PageDataItemType,
  data as originPageData
} from './page-data'

import IconTop from './images/icon-top.png'

import styles from './index.less'

function getPageData(): Promise<PageDataType[]> {
  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      resolve(originPageData)
    }, 1500)
  })
}

export default function Index() {
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
          (item, innerIndex) => (
            <Item
              key={innerIndex}
              {...item}
            />
          )
        )

        return (
          <View key={outerIndex}>
            <View className={styles.sectionTitle}>
              {title}
            </View>
            <View className={styles.items}>
              {listView}
            </View>
          </View>
        )
      }
    )
  }

  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <Image
          className={styles.topIcon}
          src={IconTop}
        />

        {renderMainView()}
      </View>
    </Scaffold>
  )
}

type ItemProps = PageDataItemType

function Item({
  code,
  icon,
  name,
  time,
  desc
}: ItemProps) {
  const contentView = (
    <>
      <Image
        className={styles.icon}
        src={icon}
      />

      <View className={styles.content}>
        <View className={styles.title}>
          {name}
        </View>
        <View className={styles.time}>
          上映时间：{time}
        </View>
        <View className={styles.desc}>
          剧情简介：{desc}
        </View>
      </View>
    </>
  )

  if (!code) {
    return (
      <View className={styles.item}>
        {contentView}
      </View>
    )
  }

  return (
    <Navigator
      className={styles.item}
      url={`${routeMap.index_introduce}?code=${code}`}
      action="navigate"
    >
      {contentView}
      <View className={styles.arrow}>
        <Icon type="arrow-right" />
      </View>
    </Navigator>
  )
}
