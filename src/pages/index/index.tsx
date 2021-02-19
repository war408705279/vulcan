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
    (data, outerIndex) => {
      const { title, list } = data
      const listView = list.map(
        (item, innerIndex) => (
          <Item
            key={innerIndex}
            {...item}
          />
        )
      )

      return (
        <View key={outerIndex}>
          <View className={styles.sectionTitle}>
            {title}
          </View>
          <View className={styles.items}>
            {listView}
          </View>
        </View>
      )
    }
  )

  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <Image
          className={styles.topIcon}
          src={IconTop}
        />

        {contentView}
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
