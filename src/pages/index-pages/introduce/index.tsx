/**
 * @file index introduce page
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
  GetFilmDataResp,
  getFilmData
} from '@/apis/film-data'

import { nameMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'
import { warningColor } from '@/utils/styles/color'

import styles from './index.less'

export default function IndexIntroduce() {
  const { code } = useQuery<{ code: string }>()
  const {
    $: filmData,
    loading: getFilmDataLoading,
    call: callGetFilmData
  } = useApi(getFilmData)

  useEffect(() => {
    if (!code) return

    callGetFilmData({ code })
  }, [callGetFilmData, code])

  function renderMain() {
    if (getFilmDataLoading) {
      return <PageLoading loading />
    }

    if (!filmData) {
      return <Empty />
    }

    return <Content {...filmData} />
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.index_introduce}
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

type ContentProps = GetFilmDataResp

function Content(data: ContentProps) {
  const {
    cnName,
    enName,
    time,
    productCompany,
    issueCompany,
    director,
    scriptwriter,
    type,
    stars,
    duration,
    mainPrize,
    introduction
  } = data

  return (
    <>
      <View className={styles.title}>
        中文名
      </View>
      <Cell>
        <View className={styles.content}>
          {cnName || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        外文名
      </View>
      <Cell>
        <View className={styles.content}>
          {enName || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        上映时间
      </View>
      <Cell>
        <View className={styles.content}>
          {time || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        出品公司
      </View>
      <Cell>
        <View className={styles.content}>
          {productCompany || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        发行公司
      </View>
      <Cell>
        <View className={styles.content}>
          {issueCompany || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        导演
      </View>
      <Cell>
        <View className={styles.content}>
          {director || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        编剧
      </View>
      <Cell>
        <View className={styles.content}>
          {scriptwriter || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        类型
      </View>
      <Cell>
        <View className={styles.content}>
          {type || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        主演
      </View>
      <Cell>
        <View className={styles.content}>
          {stars || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        片长
      </View>
      <Cell>
        <View className={styles.content}>
          {duration || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        主要奖项
      </View>
      <Cell>
        <View className={styles.content}>
          {mainPrize || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        剧情简介
      </View>
      <Cell>
        <View className={styles.content}>
          {introduction || '-'}
        </View>
      </Cell>
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
