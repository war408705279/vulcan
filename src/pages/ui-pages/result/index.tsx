/**
 * @file ui result page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Result from '@/ui/Result'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiResult() {
  const extraView = (
    <View className={styles.extra}>
      Extra
    </View>
  )

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_result}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Info
        </View>
        <View className={styles.content}>
          <Result
            icon="info"
            title="Title"
            subTitle="SubTitle"
            extra={extraView}
          />
        </View>

        <View className={styles.title}>
          Success
        </View>
        <View className={styles.content}>
          <Result
            icon="success"
            title="Title"
            subTitle="SubTitle"
            extra={extraView}
          />
        </View>

        <View className={styles.title}>
          Error
        </View>
        <View className={styles.content}>
          <Result
            icon="error"
            title="Title"
            subTitle="SubTitle"
            extra={extraView}
          />
        </View>

        <View className={styles.title}>
          Time
        </View>
        <View className={styles.content}>
          <Result
            icon="time"
            title="Title"
            subTitle="SubTitle"
            extra={extraView}
          />
        </View>
      </View>
    </Scaffold>
  )
}
