/**
 * @file crew index page
 */

import React, { useEffect } from 'react'

import { View, Text, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import PageLoading from '@/ui/PageLoading'
import Cell from '@/ui/Cell'

import { nameMap, routeMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'

import {
  DataType as PageDataType,
  data as originPageData
} from './page-data'

import IconCrew from './images/icon-crew.jpg'

import styles from './index.less'

function getPageData(): Promise<PageDataType[]> {
  return new Promise(resolve => {
    const timeoutID = setTimeout(() => {
      clearTimeout(timeoutID)
      resolve(originPageData)
    }, 1500)
  })
}

export default function Crew() {
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

    if (!pageData || !pageData.length) {
      return (
        <View className={styles.emptyTip}>
          没有查找到数据哦~
        </View>
      )
    }

    const cellsView = pageData.map(
      (data, index) => (
        <Item
          key={index}
          {...data}
        />
      )
    )

    return (
      <View className={styles.cells}>
        {cellsView}
      </View>
    )
  }

  return (
    <Scaffold appBar={<AppBar title={nameMap.crew} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconCrew}
            mode="widthFix"
          />
        </View>

        <View className={styles.tipContainer}>
          提示
          <View className={styles.tipItem}>
            1. 由于演员较多，这边先列举大家比较熟悉的，后续会慢慢补充，望大家海涵~
          </View>
          <View className={styles.tipItem}>
            2. 排名不分先后
          </View>
          <View className={styles.tipItem}>
            3. 大体按照以下顺序展开：原初 -&gt; 下一代 -&gt; 开尔文时间线
          </View>
        </View>

        {renderMainView()}
      </View>
    </Scaffold>
  )
}

type ItemProps = PageDataType

function Item({
  code,
  actor,
  role
}: ItemProps) {
  const labelView = (
    <>
      {actor || '-'}
      <Text className={styles.separator}>饰</Text>
      {role || '-'}
    </>
  )

  if (!code) {
    return (
      <Cell
        className={styles.cell}
        label={labelView}
      />
    )
  }

  return (
    <Navigator
      className={styles.cell}
      url={`${routeMap.crew_introduce}?code=${code}`}
      action="navigate"
    >
      <Cell
        label={labelView}
        arrow
      />
    </Navigator>
  )
}
