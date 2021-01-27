/**
 * @file ui icon page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Icon from '@/ui/Icon'

import { nameMap } from '@/constants/route'
import { IconType } from '@/constants/icon'

import { warningColor, primaryColor } from '@/utils/styles/color'

import styles from './index.less'

export default function UiIcon() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_icon}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Type
        </View>
        <View className={styles.items}>
          <Item
            icon={IconType.Close}
            label="close"
          />
          <Item
            icon={IconType.Email}
            label="email"
          />
          <Item
            icon={IconType.Password}
            label="password"
          />
          <Item
            icon={IconType.ArrowRight}
            label="arrow right"
          />
          <Item
            icon={IconType.ArrowLeft}
            label="arrow left"
          />
          <Item
            icon={IconType.ArrowDownSolid}
            label="arrow down"
          />
          <Item
            icon={IconType.Search}
            label="search"
          />
          <Item
            icon={IconType.Question}
            label="question"
          />
          <Item
            icon={IconType.CloseSolid}
            label="close solid"
          />
          <Item
            icon={IconType.SuccessSolid}
            label="success solid"
          />
          <Item
            icon={IconType.WarningSolid}
            label="warning solid"
          />
          <Item
            icon={IconType.InfoSolid}
            label="info solid"
          />
          <Item
            icon={IconType.TimeSolid}
            label="time solid"
          />
        </View>

        <View className={styles.title}>
          Size
        </View>
        <View className={styles.items}>
          <Item
            icon={IconType.Email}
            size="62rpx"
            label="32px"
          />
          <Item
            icon={IconType.Email}
            size="48rpx"
            label="24px"
          />
          <Item
            icon={IconType.Email}
            label="default"
          />
        </View>

        <View className={styles.title}>
          Color
        </View>
        <View className={styles.items}>
          <Item
            icon={IconType.Email}
            color={warningColor}
            label="#FAAD14"
          />
          <Item
            icon={IconType.Email}
            color={primaryColor}
            label="#00AAE7"
          />
          <Item
            icon={IconType.Email}
            label="default"
          />
        </View>
      </View>
    </Scaffold>
  )
}

type ItemProps = {
  icon: string
  label: string
  color?: string
  size?: string
}

function Item({
  icon,
  label,
  color,
  size
}: ItemProps) {
  return (
    <View className={styles.item}>
      <View className={styles.content}>
        <Icon
          className={styles.icon}
          type={icon}
          color={color}
          size={size}
        />
        <View className={styles.label}>
          {label}
        </View>
      </View>
    </View>
  )
}
