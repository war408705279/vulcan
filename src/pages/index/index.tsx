/**
 * @file index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import Icon from '@/ui/Icon'

import { nameMap, routeMap } from '@/constants/route'

import { data as pageData } from './page-data'

import IconTop from './images/icon-top.png'

import styles from './index.less'

export default function Index() {
  const contentView = pageData.map(
    (data: ItemProps, index: number) => (
      <Item
        key={index}
        {...data}
      />
    )
  )

  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <Image
          className={styles.topIcon}
          src={IconTop}
        />

        <View className={styles.sectionTitle}>
          系列电影
          <View className={styles.sectionSubtitle}>
            原初：星际迷航：无限太空 / 星际迷航 2：可汗怒吼 / 星际迷航 3：石破天惊 / 星际迷航 4：抢救未来 / 星际迷航 5：终极先锋 / 星际迷航 6：未来之城
          </View>
          <View className={styles.sectionSubtitle}>
            下一代：星际迷航 7：星空奇兵 / 星际迷航 8：第一次接触 / 星际迷航 9：起义 / 星际迷航 10：复仇女神
          </View>
          <View className={styles.sectionSubtitle}>
            开尔文时间线：星际迷航 / 星际迷航 2：暗黑无界 / 星际迷航 3：超越星辰
          </View>
          <View className={styles.sectionSubtitle}>
            非官方：星际迷航：叛徒
          </View>
        </View>

        <View className={styles.items}>
          {contentView}
        </View>
      </View>
    </Scaffold>
  )
}

export type ItemProps = {
  code?: string
  icon: string
  name: string
  time: string
  desc: string
}

function Item({
  code,
  icon,
  name,
  time,
  desc
}: ItemProps) {
  const contentView = (
    <>
      <Image
        className={styles.icon}
        src={icon}
      />

      <View className={styles.content}>
        <View className={styles.title}>
          {name}
        </View>
        <View className={styles.time}>
          上映时间：{time}
        </View>
        <View className={styles.desc}>
          剧情简介：{desc}
        </View>
      </View>
    </>
  )

  if (!code) {
    return (
      <View className={styles.item}>
        {contentView}
      </View>
    )
  }

  return (
    <Navigator
      className={styles.item}
      url={`${routeMap.index_introduce}?code=${code}`}
      action="navigate"
    >
      {contentView}
      <View className={styles.arrow}>
        <Icon type="arrow-right" />
      </View>
    </Navigator>
  )
}
