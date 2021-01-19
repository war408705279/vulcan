/**
 * @file mine index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import Navigator from '@/components/Navigator'

import { nameMap, routeMap } from '@/constants/route'

import InfoIcon from './images/icon-info.svg'
import SkillIcon from './images/icon-skill.svg'
import ContactIcon from './images/icon-contact.svg'
import HobbyIcon from './images/icon-hobby.svg'
import AssessmentIcon from './images/icon-assessment.svg'

import styles from './index.less'

export default function Mine() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.mine} />}>
      <View className={styles.main}>
        <Navigator
          className={styles.navigator}
          url={routeMap.mine_info}
          action="navigate"
        >
          <Card
            icon={InfoIcon}
            tip="基本信息"
          />
        </Navigator>

        <Navigator
          className={styles.navigator}
          url={routeMap.mine_skill}
          action="navigate"
        >
          <Card
            icon={SkillIcon}
            tip="技能"
          />
        </Navigator>

        <Navigator
          className={styles.navigator}
          url={routeMap.mine_contact}
          action="navigate"
        >
          <Card
            icon={ContactIcon}
            tip="联系方式"
          />
        </Navigator>

        <Navigator
          className={styles.navigator}
          url={routeMap.mine_hobby}
          action="navigate"
        >
          <Card
            icon={HobbyIcon}
            tip="爱好"
          />
        </Navigator>

        <Navigator
          className={styles.navigator}
          url={routeMap.mine_assessment}
          action="navigate"
        >
          <Card
            icon={AssessmentIcon}
            tip="自我评价"
          />
        </Navigator>
      </View>
    </Scaffold>
  )
}

type CardProps = {
  icon: string
  tip: string
}

function Card({
  icon,
  tip
}: CardProps) {
  return (
    <View className={styles.card}>
      <View className={styles.info}>
        <Image
          className={styles.icon}
          src={icon}
        />
        <View className={styles.tip}>
          {tip}
        </View>
      </View>
    </View>
  )
}
