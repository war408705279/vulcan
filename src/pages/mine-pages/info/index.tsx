/**
 * @file mine info page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import ImgCodingDog from './images/img-coding-dog.jpg'

import styles from './index.less'

export default function MineInfo() {
  const leftStyle = {
    width: '230rpx',
    flex: '0 0 auto'
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.mine_info}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={ImgCodingDog}
          />
        </View>

        <View className={styles.infoContainer}>
          <Cell
            className={styles.info}
            label="Name:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              Macco Jia
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Gender:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              Male
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Birthday:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              1992/03/27
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Emotional state:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              Married
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Native place:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              Taiyuan, Shanxi Province
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Residence place:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              Fengxian, Shanghai
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Position:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              FE Development Engineer
            </View>
          </Cell>
          <Cell
            className={styles.info}
            label="Github:"
            leftStyle={leftStyle}
          >
            <View className={styles.content}>
              https://github.com/war408705279
            </View>
          </Cell>
        </View>
      </View>
    </Scaffold>
  )
}
