/**
 * @file index introduce page
 */

import React from 'react'

import { useQuery } from 'remax'
import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Result from '@/ui/Result'
import Icon from '@/ui/Icon'

import { nameMap } from '@/constants/route'

import { warningColor } from '@/utils/styles/color'

import { data as filmData } from './film-data'

import styles from './index.less'

export default function IndexIntroduce() {
  const { code } = useQuery<{ code: string }>()
  const matchData = filmData[code]

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
        {!matchData && <Empty />}
      </View>
    </Scaffold>
  )
}

function Empty() {
  return (
    <Result
      icon={
        <Icon
          className={styles.icon}
          type="warning-solid"
          size="136rpx"
          color={warningColor}
        />
      }
      title="没有查找到数据哦~"
    />
  )
}
