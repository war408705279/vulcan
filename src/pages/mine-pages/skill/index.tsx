/**
 * @file mine skill page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function MineSkill() {
  const leftStyle = {
    width: '160rpx',
    flex: '0 0 auto'
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.mine_skill}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <Cell
          className={styles.item}
          label="基本技能："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            HTML + JS + CSS
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="语言："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            ES5 + ES6，推崇 TypeScript
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="前端框架："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            主要使用 React，Angular && Vue && Ruby on Rails 也写过一点
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="后端："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            写过一点 Golang && Node.js && Ruby
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="数据库："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            MongoDB && MySQL，都是略懂
          </View>
        </Cell>

        <Cell
          className={styles.item}
          label="小程序："
          leftStyle={leftStyle}
        >
          <View className={styles.content}>
            原生微信小程序，也使用过 Remax 构建跨平台小程序
          </View>
        </Cell>
      </View>
    </Scaffold>
  )
}
