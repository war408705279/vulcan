/**
 * @file ship eggs page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import IconEggsOne from './images/icon-eggs-one.jpg'
import IconEggsTwoOne from './images/icon-eggs-two-one.jpg'
import IconEggsTwoTwo from './images/icon-eggs-two-two.gif'

import styles from './index.less'

export default function ShipEggs() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ship_eggs}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.topTip}>
          《星际迷航 3：超越星辰》于 2016 年上映，同时 2016 年也是星际迷航诞生 50 周年，因此影片中埋藏了不少致敬和恶搞。很多梗都是横跨几十年的经典款，颇有深意
        </View>

        <View className={styles.itemList}>
          <View className={styles.item}>
            <View className={styles.title}>
              致敬版海报
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                为了纪念星际迷航 50 周年，影片特意推出了一款致敬版海报
              </View>
              <View className={styles.text}>
                很明显，这是在纪念 1979 年《星际迷航 1：无限太空》的同款海报
              </View>
              <View className={styles.text}>
                第一部到第六部电影版均由原初系列的班底拍摄，他们是最先登上进取号的舰员，也是星级迷航文化最早的传播者
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              老班底合影
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsTwoOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                在影片最后，当史波克接过老史波克的遗物时，他打开了一个小盒子
              </View>
              <Image
                className={styles.img}
                src={IconEggsTwoTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                里面的物品承载了史波克最珍视的回忆
              </View>
              <View className={styles.text}>
                这张合影正是原初系列班底最后一部电影《星际迷航 6：未来之城》的剧照
              </View>
              <View className={styles.text}>
                这些演员中已经有 3 位离世，电影以这种特殊的形式，向原初系列的演员进行了致敬
              </View>
            </View>
          </View>
        </View>
      </View>
    </Scaffold>
  )
}
