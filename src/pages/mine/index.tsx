/**
 * @file mine index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import Cell from '@/ui/Cell'

import { nameMap, routeMap } from '@/constants/route'

import IconVulcan from './images/icon-vulcan.jpg'

import styles from './index.less'

export default function Mine() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.mine} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconVulcan}
          />
        </View>

        <View className={styles.cells}>
          <Navigator
            className={styles.cell}
            url={routeMap.mine_info}
            action="navigate"
          >
            <Cell
              label="Basic Info"
              arrow
            />
          </Navigator>

          <Navigator
            className={styles.cell}
            url={routeMap.mine_skill}
            action="navigate"
          >
            <Cell
              label="Skills"
              arrow
            />
          </Navigator>

          <Navigator
            className={styles.cell}
            url={routeMap.mine_contact}
            action="navigate"
          >
            <Cell
              label="Contact"
              arrow
            />
          </Navigator>

          <Navigator
            className={styles.cell}
            url={routeMap.mine_hobby}
            action="navigate"
          >
            <Cell
              label="Hobby"
              arrow
            />
          </Navigator>

          <Navigator
            className={styles.cell}
            url={routeMap.mine_assessment}
            action="navigate"
          >
            <Cell
              label="Assessment"
              arrow
            />
          </Navigator>
        </View>
      </View>
    </Scaffold>
  )
}
