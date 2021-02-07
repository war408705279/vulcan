/**
 * @file ui switch page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Switch from '@/ui/Switch'
import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { useOnChange } from '@/utils/hooks'

import styles from './index.less'

export default function UiSwitch() {
  const showToast = useToast()

  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)

  useOnChange(() => {
    const status = checkedOne ? 'online' : 'offline'

    showToast({
      tip: `Weapon system ${status}`
    })
  }, [checkedOne])

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_switch}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Switch />
        </View>

        <View className={styles.title}>
          Disabled
        </View>
        <View className={styles.items}>
          <Switch
            checked
            disabled
          />
        </View>

        <View className={styles.title}>
          Checked
        </View>
        <View className={styles.items}>
          <Switch checked />
        </View>

        <View className={styles.title}>
          Change
        </View>
        <View className={styles.items}>
          <Switch
            checked={checkedOne}
            onChange={(v :any) => setCheckedOne(v)}
          />
        </View>

        <View className={styles.title}>
          With Cell
        </View>
        <Cell label="Label">
          <Switch
            checked={checkedTwo}
            onChange={(v :any) => setCheckedTwo(v)}
          />
        </Cell>
      </View>
    </Scaffold>
  )
}
