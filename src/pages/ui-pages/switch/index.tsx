/**
 * @file ui switch page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Switch from '@/ui/Switch'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { useOnChange } from '@/utils/hooks'

import styles from './index.less'

export default function UiSwitch() {
  const showToast = useToast()

  const [checked, setChecked] = useState(false)

  useOnChange(() => {
    const status = checked ? 'online' : 'offline'

    showToast({
      tip: `Weapon system ${status}`
    })
  }, [checked])

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
            checked={checked}
            onChange={(v :any) => setChecked(v)}
          />
        </View>
      </View>
    </Scaffold>
  )
}
