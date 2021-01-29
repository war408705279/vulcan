/**
 * @file ui tabs page
 */

import React from 'react'

import { View } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Tabs, { TabPane } from '@/ui/Tabs'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiTabs() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_tabs}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.container}>
          <Tabs defaultValue="Vulcan">
            <TabPane
              tab="Vulcan"
              value="Vulcan"
            >
              <View className={styles.content}>
                Vulcan
              </View>
            </TabPane>
            <TabPane
              tab="Spock"
              value="Spock"
            >
              <View className={styles.content}>
                Spock
              </View>
            </TabPane>
          </Tabs>
        </View>

        <View className={styles.title}>
          Small Size
        </View>
        <View className={styles.container}>
          <Tabs
            defaultValue="Vulcan"
            size="small"
          >
            <TabPane
              tab="Vulcan"
              value="Vulcan"
            >
              <View className={styles.content}>
                Vulcan
              </View>
            </TabPane>
            <TabPane
              tab="Spock"
              value="Spock"
            >
              <View className={styles.content}>
                Spock
              </View>
            </TabPane>
          </Tabs>
        </View>

        <View className={styles.title}>
          Default Theme
        </View>
        <View className={styles.container}>
          <Tabs
            defaultValue="Vulcan"
            theme="default"
          >
            <TabPane
              tab="Vulcan"
              value="Vulcan"
            >
              <View className={styles.content}>
                Vulcan
              </View>
            </TabPane>
            <TabPane
              tab="Spock"
              value="Spock"
            >
              <View className={styles.content}>
                Spock
              </View>
            </TabPane>
          </Tabs>
        </View>

        <View className={styles.title}>
          Auto Destroy
        </View>
        <View className={styles.container}>
          <Tabs defaultValue="Vulcan">
            <TabPane
              tab="Vulcan"
              value="Vulcan"
              autoDestroy
            >
              <View className={styles.content}>
                Vulcan
              </View>
            </TabPane>
            <TabPane
              tab="Spock"
              value="Spock"
              autoDestroy
            >
              <View className={styles.content}>
                Spock
              </View>
            </TabPane>
          </Tabs>
        </View>
      </View>
    </Scaffold>
  )
}
