/**
 * @file ui page loading page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import PageLoading from '@/ui/PageLoading'

import { nameMap } from '@/constants/route'

import { dangerColor } from '@/utils/styles/color'

import styles from './index.less'

export default function UiPageLoading() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_page_loading}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <PageLoading
          className={styles.loading}
          loading
        />

        <View className={styles.title}>
          Custom Tip
        </View>
        <PageLoading
          className={styles.loading}
          tip="自定义提示内容"
          loading
        />

        <View className={styles.title}>
          Icon Color
        </View>
        <PageLoading
          className={styles.loading}
          iconColor={dangerColor}
          loading
        />

        <View className={styles.title}>
          Tip Color
        </View>
        <PageLoading
          className={styles.loading}
          tipColor={dangerColor}
          loading
        />
      </View>
    </Scaffold>
  )
}
