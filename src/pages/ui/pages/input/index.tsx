/**
 * @file ui input page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Input from '@/ui/Input'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { successColor } from '@/utils/styles/color'

import styles from './index.less'

export default function UiInput() {
  const [value, setValue] = useState('')
  const showToast = useToast()

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_input}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            placeholder="Please enter"
          />
        </View>

        <View className={styles.title}>
          With Label
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
          />
        </View>

        <View className={styles.title}>
          Max Length
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            maxLength={4}
            placeholder="You can only input 4 characters"
          />
        </View>

        <View className={styles.title}>
          Input Align
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            inputAlign="right"
            placeholder="Please enter"
          />
          <Input
            className={styles.item}
            label="Label"
            inputAlign="center"
            placeholder="Please enter"
          />
        </View>

        <View className={styles.title}>
          Type
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            type="number"
            placeholder="You can only input numbers"
          />
          <Input
            className={styles.item}
            label="Label"
            password
            placeholder="Please enter password"
          />
        </View>

        <View className={styles.title}>
          Disabled
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            value="Has been disabled"
            disabled
          />
        </View>

        <View className={styles.title}>
          With Required
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            required
          />
        </View>

        <View className={styles.title}>
          With Icon
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            icon="email"
          />
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            icon="email"
            iconActiveColor={successColor}
          />
        </View>

        <View className={styles.title}>
          With Extra
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            extra="Extra Node"
          />
        </View>

        <View className={styles.title}>
          With Description
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            description="Live long and prosper"
          />
        </View>

        <View className={styles.title}>
          With Arrow
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            arrow
          />
        </View>

        <View className={styles.title}>
          Change & Blur
        </View>
        <View className={styles.items}>
          <Input
            className={styles.item}
            label="Label"
            placeholder="Please enter"
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            onBlur={() => {
              showToast({
                tip: `Content: ${value || 'none'}`
              })
            }}
          />
        </View>
      </View>
    </Scaffold>
  )
}
