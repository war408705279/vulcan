/**
 * @file index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import { nameMap } from '@/constants/route'

import IconStarTrekOne from './images/icon-star-trek-1.jpg'

import styles from './index.less'

export default function Index() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <Item
          icon={IconStarTrekOne}
          name="星际旅行：无限太空"
          time="1979 年 12 月 7 日"
          desc="寇克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲科克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，科克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际。"
        />
      </View>
    </Scaffold>
  )
}

type Props = {
  icon: string
  name: string
  time: string
  desc: string
}

function Item({
  icon,
  name,
  time,
  desc
}: Props) {
  return (
    <View className={styles.item}>
      <Image
        className={styles.icon}
        src={icon}
      />

      <View className={styles.content}>
        <View className={styles.title}>
          {name}
        </View>
        <View className={styles.time}>
          {time}
        </View>
        <View className={styles.desc}>
          {desc}
        </View>
      </View>
    </View>
  )
}
