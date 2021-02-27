/**
 * @file ship index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import Cell from '@/ui/Cell'

import { nameMap } from '@/constants/route'

import IconShip from './images/icon-ship.jpg'

import styles from './index.less'

export default function Ship() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.ship} />}>
      <View className={styles.main}>
        <View className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={IconShip}
          />
        </View>

        <TwentyTwoCentury />
        <TwentyThreeCentury />
        <TwentyFourCentury />
        <TwentySixCentury />
        <TwentyNineCentury />
      </View>
    </Scaffold>
  )
}

function TwentyTwoCentury() {
  return (
    <>
      <View className={styles.title}>
        22 世纪
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="恒河级 - Ganges Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="无畏型 - Intrepid Type"
          arrow
        />
        <Cell
          className={styles.cell}
          label="NX 级 - NX Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="代达罗斯级 - Daedalus Class"
          arrow
        />
      </View>
    </>
  )
}

function TwentyThreeCentury() {
  return (
    <>
      <View className={styles.title}>
        23 世纪
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="宪法级 - Constitution Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="宪法级改 - Constitution Class Retrofit"
          arrow
        />
        <Cell
          className={styles.cell}
          label="精进级 - Excelsior Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="精进级改 - Excelsior Class Retrofit"
          arrow
        />
        <Cell
          className={styles.cell}
          label="星座级 - Constellation Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="联邦级 - Federation Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="萨拉丁 / 赫尔墨斯级 - Saladin / Hermes Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="米兰达级 - Miranda Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="奥伯特级 - Oberth Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="安塔尔型 - Antares Type"
          arrow
        />
        <Cell
          className={styles.cell}
          label="悉尼级 - Sydney Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="克罗斯菲尔德级 - Crossfield Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="沃克级 - Walker Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="谢帕德级 - Shepard Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="马拉霍夫斯基级 - Malachowski Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="麦基级 - Magee Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="卡德纳斯级 - Cardenas Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="尼米兹级 - Nimitz Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="胡佛级 - Hoover Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="恩格尔级 - Engle Class"
          arrow
        />
      </View>
    </>
  )
}

function TwentyFourCentury() {
  return (
    <>
      <View className={styles.title}>
        24 世纪
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="大使级 - Ambassador Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="半人马级 - Centaur Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="卡瑞型 - Curry Type"
          arrow
        />
        <Cell
          className={styles.cell}
          label="尼亚加拉级 - Niagara Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="自由级 - Freedom Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="夏延级 - Cheyenne Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="新奥尔良级 - New Orleans Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="渡鸦型 - Raven Type"
          arrow
        />
        <Cell
          className={styles.cell}
          label="春田级 - Springfield Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="银河级 - Galaxy Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="星云级 - Nebula Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="多瑙河级 - Danube Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="光明级 - Akira Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="新星级 - Nova Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="无畏级 - Intrepid Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="挪威级 - Norway Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="军刀级 - Saber Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="气动级 - Steamrunner Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="奥林匹克级 - Olympic Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="挑战级 - Defiant Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="元首级 - Sovereign Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="普罗米修斯级 - Prometheus Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="加利福尼亚级 - California Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="国会级 - Parliament Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="好奇级 - Curiosity Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="瓦伦贝里级 - Wallenberg Class"
          arrow
        />
        <Cell
          className={styles.cell}
          label="调查级 - Inquiry Class"
          arrow
        />
      </View>
    </>
  )
}

function TwentySixCentury() {
  return (
    <>
      <View className={styles.title}>
        26 世纪
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="宇宙级 - Universe Class"
          arrow
        />
      </View>
    </>
  )
}

function TwentyNineCentury() {
  return (
    <>
      <View className={styles.title}>
        29 世纪
      </View>
      <View className={styles.cells}>
        <Cell
          className={styles.cell}
          label="威尔斯级 - Wells Class"
          arrow
        />
      </View>
    </>
  )
}
