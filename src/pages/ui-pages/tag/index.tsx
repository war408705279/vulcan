/**
 * @file ui tag page
 */

import React, { useState } from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Tag, { CheckableTag } from '@/ui/Tag'

import { nameMap } from '@/constants/route'

import {
  dangerColor,
  warningColor,
  successColor,
  primaryColor,
  blueTwo,
  greenTwo
} from '@/utils/styles/color'

import styles from './index.less'

export default function UiTag() {
  const [checkedOne, setCheckedOne] = useState(false)
  const [checkedTwo, setCheckedTwo] = useState(false)

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_tag}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.content}>
          <Tag className={styles.tag}>Vulcan</Tag>
        </View>

        <View className={styles.title}>
          Round
        </View>
        <View className={styles.content}>
          <Tag
            className={styles.tag}
            round
          >
            Vulcan
          </Tag>
        </View>

        <View className={styles.title}>
          Color
        </View>
        <View className={styles.content}>
          <Tag
            className={styles.tag}
            color={dangerColor}
          >
            Vulcan
          </Tag>
          <Tag
            className={styles.tag}
            color={warningColor}
          >
            Vulcan
          </Tag>
          <Tag
            className={styles.tag}
            color={successColor}
          >
            Vulcan
          </Tag>
        </View>

        <View className={styles.title}>
          Checkable
        </View>
        <View className={styles.content}>
          <CheckableTag
            className={styles.tag}
            color={primaryColor}
            checkedColor={blueTwo}
            checked={checkedOne}
            onChange={setCheckedOne}
          >
            Vulcan
          </CheckableTag>

          <CheckableTag
            className={styles.tag}
            round
            color={successColor}
            checkedColor={greenTwo}
            checked={checkedTwo}
            onChange={setCheckedTwo}
          >
            Vulcan
          </CheckableTag>

          <CheckableTag
            className={styles.tag}
            color={primaryColor}
            checkedColor={blueTwo}
            disabled
          >
            Vulcan
          </CheckableTag>
        </View>
      </View>
    </Scaffold>
  )
}
