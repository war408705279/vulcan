/**
 * @file ui textarea page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Textarea from '@/ui/Textarea'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'
import { successColor } from '@/utils/styles/color'

import styles from './index.less'

export default function UiTextarea() {
  const [value, setValue] = useState('')
  const showToast = useToast()

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_textarea}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            placeholder="Please enter"
          />
        </View>

        <View className={styles.title}>
          With Label
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            placeholder="Please enter"
          />
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            leftStyle={{
              lineHeight: 1,
              alignItems: 'flex-start'
            }}
          />
        </View>

        <View className={styles.title}>
          Max Length
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            maxLength={140}
            placeholder="You can only input 140 characters"
          />
        </View>

        <View className={styles.title}>
          Textarea Align
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            textareaAlign="right"
            placeholder="Please enter"
          />
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            textareaAlign="center"
            placeholder="Please enter"
          />
        </View>

        <View className={styles.title}>
          Disabled
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            value="Has been disabled"
            disabled
          />
        </View>

        <View className={styles.title}>
          With Required
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            placeholder="Please enter"
            required
          />
        </View>

        <View className={styles.title}>
          With Icon
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            placeholder="Please enter"
            icon="email"
          />
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
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
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            placeholder="Please enter"
            extra="Extra Node"
          />
        </View>

        <View className={styles.title}>
          With Description
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
            label="Label"
            placeholder="Please enter"
            description="Live long and prosper"
          />
        </View>

        <View className={styles.title}>
          Change & Blur
        </View>
        <View className={styles.items}>
          <Textarea
            className={styles.item}
            textareaCls={styles.textarea}
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
