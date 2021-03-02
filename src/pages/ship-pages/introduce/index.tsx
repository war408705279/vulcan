/**
 * @file ship introduce page
 */

import React, { useEffect } from 'react'

import { useQuery } from 'remax'
import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import PageLoading from '@/ui/PageLoading'
import Cell from '@/ui/Cell'
import Result from '@/ui/Result'
import Icon from '@/ui/Icon'

import {
  GetShipDataResp,
  getShipData
} from '@/apis/ship-data'

import { nameMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'
import { warningColor } from '@/utils/styles/color'

import styles from './index.less'

export default function ShipIntroduce() {
  const { code } = useQuery<{ code: string }>()
  const {
    $: shipData,
    loading: getShipDataLoading,
    call: callGetShipData
  } = useApi(getShipData)

  useEffect(() => {
    if (!code) return

    callGetShipData({ code })
  }, [callGetShipData, code])

  function renderMain() {
    if (getShipDataLoading) {
      return <PageLoading loading />
    }

    if (!shipData) {
      return <Empty />
    }

    return <Content {...shipData} />
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ship_introduce}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        {renderMain()}
      </View>
    </Scaffold>
  )
}

type ContentProps = GetShipDataResp

function Content(data: ContentProps) {
  const {
    name,
    spec,
    time,
    length,
    width,
    height,
    quality,
    crewNum,
    cruisingSpeed,
    maxSpeed,
    arms,
    defend,
    information,
    known,
    note
  } = data

  function renderKnownView() {
    if (!known || !known.length) return '-'

    return known.map(
      (knownItem: string, index: number) => (
        <View key={index}>{knownItem}</View>
      )
    )
  }

  const noteView = note && (
    <>
      <View className={styles.title}>
        舰种
      </View>
      <Cell>
        <View className={styles.content}>
          {note}
        </View>
      </Cell>
    </>
  )

  return (
    <>
      <View className={styles.title}>
        名称
      </View>
      <Cell>
        <View className={styles.content}>
          {name || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        舰种
      </View>
      <Cell>
        <View className={styles.content}>
          {spec || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        服役时间
      </View>
      <Cell>
        <View className={styles.content}>
          {time || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        长度
      </View>
      <Cell>
        <View className={styles.content}>
          {length || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        宽度
      </View>
      <Cell>
        <View className={styles.content}>
          {width || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        高度
      </View>
      <Cell>
        <View className={styles.content}>
          {height || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        质量
      </View>
      <Cell>
        <View className={styles.content}>
          {quality || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        船员人数
      </View>
      <Cell>
        <View className={styles.content}>
          {crewNum || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        巡航速度
      </View>
      <Cell>
        <View className={styles.content}>
          {cruisingSpeed || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        最大速度
      </View>
      <Cell>
        <View className={styles.content}>
          {maxSpeed || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        武装
      </View>
      <Cell>
        <View className={styles.content}>
          {arms || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        防护
      </View>
      <Cell>
        <View className={styles.content}>
          {defend || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        背景资料
      </View>
      <Cell>
        <View className={styles.content}>
          {information || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        已知星舰
      </View>
      <Cell>
        <View className={styles.content}>
          {renderKnownView()}
        </View>
      </Cell>

      {noteView}
    </>
  )
}

function Empty() {
  return (
    <Result
      icon={
        <Icon
          className={styles.warningIcon}
          type="warning-solid"
          size="136rpx"
          color={warningColor}
        />
      }
      title="没有查找到数据哦~"
    />
  )
}