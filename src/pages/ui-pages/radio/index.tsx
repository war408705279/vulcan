/**
 * @file ui radio page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Radio, { RadioGroup } from '@/ui/Radio'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { useOnChange } from '@/utils/hooks'

import styles from './index.less'

export default function UiRadio() {
  const showToast = useToast()

  const [checked, setChecked] = useState(false)
  const [name, setName] = useState('Kirk')

  useOnChange(() => {
    if (!name) return

    showToast({
      tip: `Hi, I am ${name}`
    })
  }, [name])

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_radio}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Radio
            value="Radio"
            checked
          >
            Radio
          </Radio>
        </View>

        <View className={styles.title}>
          Checkable
        </View>
        <View className={styles.items}>
          <Radio
            value="Radio"
            checked={checked}
            onChange={(v: boolean) => setChecked(v)}
          >
            Radio
          </Radio>
        </View>

        <View className={styles.title}>
          Group
        </View>
        <View className={styles.items}>
          <RadioGroup defaultValue="Kirk">
            <Radio value="Kirk">
              Kirk
            </Radio>
            <Radio value="Spock">
              Spock
            </Radio>
            <Radio value="McCoy">
              McCoy
            </Radio>
          </RadioGroup>
        </View>

        <View className={styles.title}>
          Group Button
        </View>
        <View className={styles.items}>
          <RadioGroup
            type="button"
            defaultValue="Kirk"
          >
            <Radio value="Kirk">
              Kirk
            </Radio>
            <Radio value="Spock">
              Spock
            </Radio>
            <Radio value="McCoy">
              McCoy
            </Radio>
          </RadioGroup>
        </View>

        <View className={styles.title}>
          Group Radio Change
        </View>
        <View className={styles.items}>
          <RadioGroup
            type="button"
            defaultValue="Kirk"
            onChange={(v: any) => {
              if (v === name) return
              setName(v)
            }}
          >
            <Radio value="Kirk">
              Kirk
            </Radio>
            <Radio value="Spock">
              Spock
            </Radio>
            <Radio value="McCoy">
              McCoy
            </Radio>
          </RadioGroup>
        </View>
      </View>
    </Scaffold>
  )
}
