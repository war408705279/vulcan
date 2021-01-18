/**
 * @file mine index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'

import InfoIcon from './images/icon-info.svg'
import SkillIcon from './images/icon-skill.svg'
import PhoneIcon from './images/icon-phone.svg'
import HobbyIcon from './images/icon-hobby.svg'
import AssessmentIcon from './images/icon-assessment.svg'

import styles from './index.less'

export default function Mine() {
  const showToast = useToast()

  function pageIsUnderDevelop() {
    showToast({
      tip: '页面施工中',
      icon: 'warning'
    })
  }

  // TODO
  // 跳转到指定页面
  return (
    <Scaffold appBar={<AppBar title={nameMap.mine} />}>
      <View className={styles.main}>
        <Card
          icon={InfoIcon}
          tip="基本信息"
          onTap={() => pageIsUnderDevelop()}
        />

        <Card
          icon={SkillIcon}
          tip="技能"
          onTap={() => pageIsUnderDevelop()}
        />

        <Card
          icon={PhoneIcon}
          tip="联系方式"
          onTap={() => pageIsUnderDevelop()}
        />

        <Card
          icon={HobbyIcon}
          tip="爱好"
          onTap={() => pageIsUnderDevelop()}
        />

        <Card
          icon={AssessmentIcon}
          tip="自我评价"
          onTap={() => pageIsUnderDevelop()}
        />
      </View>
    </Scaffold>
  )
}

type CardProps = {
  icon: string
  tip: string
  onTap?: () => void
}

function Card({
  icon,
  tip,
  onTap
}: CardProps) {

  function handleTap() {
    if (onTap) onTap()
  }

  return (
    <View
      className={styles.card}
      onTap={handleTap}
    >
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
