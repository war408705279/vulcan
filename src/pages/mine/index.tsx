/**
 * @file mine index page
 */

import React, { useEffect } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'

import styles from './index.less'

export default function Mine() {
  const showToast = useToast()

  useEffect(() => {
    showToast({
      tip: '页面施工中',
      icon: 'warning'
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Scaffold appBar={<AppBar title={nameMap.mine} leading="" />}>
      <View className={styles.main}>
        <UnderConstruction
          tip="页面施工中..."
        />
      </View>
    </Scaffold>
  )
}
