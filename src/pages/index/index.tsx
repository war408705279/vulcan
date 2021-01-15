/**
 * @file index page
 */

import React from 'react'

import { View } from 'remax/one'

import UnderConstruction from '@/components/UnderConstruction'

import styles from './index.less'

export default function Index() {
  return (
    <View className={styles.main}>
      <UnderConstruction
        tip="页面施工中..."
      />
    </View>
  )
}
