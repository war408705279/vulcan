/**
 * @file crew introduce page
 */

import React, { useEffect } from 'react'

import { useQuery } from 'remax'
import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import PageLoading from '@/ui/PageLoading'
import Cell from '@/ui/Cell'
import Result from '@/ui/Result'
import Icon from '@/ui/Icon'

import {
  GetCrewDataResp,
  getCrewData
} from '@/apis/crew-data'

import { nameMap } from '@/constants/route'

import { useApi } from '@/utils/hooks/api'
import { warningColor } from '@/utils/styles/color'

import styles from './index.less'

export default function CrewIntroduce() {
  const { code } = useQuery<{ code: string }>()
  const {
    $: crewData,
    loading: getCrewDataLoading,
    call: callGetCrewData
  } = useApi(getCrewData)

  useEffect(() => {
    if (!code) return

    callGetCrewData({ code })
  }, [callGetCrewData, code])

  function renderMain() {
    if (getCrewDataLoading) {
      return <PageLoading loading />
    }

    if (!crewData) {
      return <Empty />
    }

    return <Content {...crewData} />
  }

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.crew_introduce}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        {renderMain()}
      </View>
    </Scaffold>
  )
}

type ContentProps = GetCrewDataResp

function Content(data: ContentProps) {
  const {
    icon,
    zhName,
    enName,
    alias,
    nationality,
    national,
    birthPlace,
    birthDay,
    deathTime,
    constellation,
    height,
    graduateSchool,
    profession,
    representativeWorks,
    mainAchievements,
    hobby,
    information,
    evaluation
  } = data

  const iconView = icon && (
    <View className={styles.imgContainer}>
      <Image
        className={styles.img}
        src={icon}
        mode="widthFix"
      />
    </View>
  )

  function renderEnNameView() {
    if (!enName.length) return '-'

    return enName.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderAliasView() {
    if (!alias.length) return '-'

    return alias.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderProfessionView() {
    if (!profession.length) return '-'

    return profession.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderRepresentativeWorksView() {
    if (!representativeWorks.length) return '-'

    return representativeWorks.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderMainAchievementsView() {
    if (!mainAchievements.length) return '-'

    return mainAchievements.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderHobbyView() {
    if (!hobby.length) return '-'

    return hobby.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderInformationView() {
    if (!information.length) return '-'

    return information.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  function renderEvaluationView() {
    if (!evaluation.length) return '-'

    return evaluation.map(
      (item: string, index: number) => (
        <View key={index}>{item}</View>
      )
    )
  }

  return (
    <>
      {iconView}

      <View className={styles.title}>
        中文名
      </View>
      <Cell>
        <View className={styles.content}>
          {zhName || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        英文名
      </View>
      <Cell>
        <View className={styles.content}>
          {renderEnNameView()}
        </View>
      </Cell>

      <View className={styles.title}>
        别名
      </View>
      <Cell>
        <View className={styles.content}>
          {renderAliasView()}
        </View>
      </Cell>

      <View className={styles.title}>
        国籍
      </View>
      <Cell>
        <View className={styles.content}>
          {nationality || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        民族
      </View>
      <Cell>
        <View className={styles.content}>
          {national || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        出生地
      </View>
      <Cell>
        <View className={styles.content}>
          {birthPlace || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        出生日期
      </View>
      <Cell>
        <View className={styles.content}>
          {birthDay || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        逝世日期
      </View>
      <Cell>
        <View className={styles.content}>
          {deathTime || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        星座
      </View>
      <Cell>
        <View className={styles.content}>
          {constellation || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        身高
      </View>
      <Cell>
        <View className={styles.content}>
          {height || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        毕业院校
      </View>
      <Cell>
        <View className={styles.content}>
          {graduateSchool || '-'}
        </View>
      </Cell>

      <View className={styles.title}>
        职业
      </View>
      <Cell>
        <View className={styles.content}>
          {renderProfessionView()}
        </View>
      </Cell>

      <View className={styles.title}>
        代表作品
      </View>
      <Cell>
        <View className={styles.content}>
          {renderRepresentativeWorksView()}
        </View>
      </Cell>

      <View className={styles.title}>
        主要成就
      </View>
      <Cell>
        <View className={styles.content}>
          {renderMainAchievementsView()}
        </View>
      </Cell>

      <View className={styles.title}>
        爱好
      </View>
      <Cell>
        <View className={styles.content}>
          {renderHobbyView()}
        </View>
      </Cell>

      <View className={styles.title}>
        信息
      </View>
      <Cell>
        <View className={styles.content}>
          {renderInformationView()}
        </View>
      </Cell>

      <View className={styles.title}>
        评价
      </View>
      <Cell>
        <View className={styles.content}>
          {renderEvaluationView()}
        </View>
      </Cell>
    </>
  )
}

function Empty() {
  return (
    <Result
      icon={
        <Icon
          className={styles.warningIcon}
          type="warning-solid"
          size="136rpx"
          color={warningColor}
        />
      }
      title="没有查找到数据哦~"
    />
  )
}
