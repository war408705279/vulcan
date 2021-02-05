/**
 * @file ui checkbox page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Checkbox, { CheckboxGroup } from '@/ui/Checkbox'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { useOnChange } from '@/utils/hooks'

import styles from './index.less'

export default function UiCheckbox() {
  const showToast = useToast()

  const [checked, setChecked] = useState(false)
  const [names, setNames] = useState(['Kirk'])

  useOnChange(() => {
    showToast({
      tip: `${names.join(', ') || 'none'}`
    })
  }, [names])

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_checkbox}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Checkbox
            value="Checkbox"
            checked
          >
            Checkbox
          </Checkbox>
        </View>

        <View className={styles.title}>
          Checkable
        </View>
        <View className={styles.items}>
          <Checkbox
            value="Checkbox"
            checked={checked}
            onChange={(v: boolean) => setChecked(v)}
          >
            Checkbox
          </Checkbox>
        </View>

        <View className={styles.title}>
          Group
        </View>
        <View className={styles.items}>
          <CheckboxGroup defaultValues={['Kirk']}>
            <Checkbox value="Kirk">
              Kirk
            </Checkbox>
            <Checkbox value="Spock">
              Spock
            </Checkbox>
            <Checkbox value="McCoy">
              McCoy
            </Checkbox>
          </CheckboxGroup>
        </View>

        <View className={styles.title}>
          Group Change
        </View>
        <View className={styles.items}>
          <CheckboxGroup
            defaultValues={names}
            onChange={(v: any) => setNames(v)}
          >
            <Checkbox value="Kirk">
              Kirk
            </Checkbox>
            <Checkbox value="Spock">
              Spock
            </Checkbox>
            <Checkbox value="McCoy">
              McCoy
            </Checkbox>
          </CheckboxGroup>
        </View>
      </View>
    </Scaffold>
  )
}
