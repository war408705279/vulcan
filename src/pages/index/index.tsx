/**
 * @file index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'

import { nameMap } from '@/constants/route'

import IconTitle from './images/icon-title.png'
import IconStarTrekOne from './images/icon-star-trek-1.jpg'
import IconStarTrekTwo from './images/icon-star-trek-2.jpg'
import IconStarTrekThree from './images/icon-star-trek-3.jpg'
import IconStarTrekFour from './images/icon-star-trek-4.jpg'
import IconStarTrekFive from './images/icon-star-trek-5.jpg'

import styles from './index.less'

export default function Index() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.index} />}>
      <View className={styles.main}>
        <Image
          className={styles.iconTitle}
          src={IconTitle}
        />

        <Item
          icon={IconStarTrekOne}
          name="星际旅行：无限太空"
          time="1979 年 12 月 7 日"
          desc="寇克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲科克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，科克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际。"
        />

        <Item
          icon={IconStarTrekTwo}
          name="星际旅行 2：可汗怒吼"
          time="1982 年 6 月 4 日"
          desc="在星历 9521.6 年间，叱吒星际的企业号即将退休，突然星际败类克林贡欲向各星际卫星求和，以结束长时间对立，唯一条件是星际舰队需撤出中立缓冲区。这项求和行动，其中以企业号舰长寇克反对最力，因其子曾遭克林贡人杀害，难消仇恨之心，但因其他星际舰队多数追求和平，乃不得不接受此一事实，寇克舰长甚至被推介护送谋和大使戈更议长通过邦联领空至地球总部。寇克受命启航，欲以最后航程完成此项历史创举，是夜，邀约戈更一行登舰餐叙。餐后当戈更返回克罗诺号后，即发生狙击事件，所有记录显示，鱼雷发射均来自企业号，寇克因此遭受不白之冤。"
        />

        <Item
          icon={IconStarTrekThree}
          name="星际迷航 3：石破天惊"
          time="1984 年 6 月 1 日"
          desc="2285 年，在与可汗的战斗中损坏的联邦星舰进取号，返回了地球的太空港以进行维修。柯克还在为斯波克的死感到悲伤。麦科伊医生出现了种种异常的行为：如擅自闯入被封锁的斯波克原来的舱房、胡言乱语等，最后他被送进了医院进行精神检查。斯科提被另分派到了联邦星舰精进号。星际舰队指挥部对新形成的创世星下达了禁入令。柯克被告知，进取号即将除役。斯波克的父亲沙瑞克找到柯克并告诉他，斯波克的遗体必须返回瓦肯星，否则他的灵魂就不得安息。沙瑞克要求柯克必须回到创世星，寻回斯波克的遗棺并将它带回瓦肯星——而斯波克临死前与麦科伊进行了心灵融合，因此带有斯波克灵魂的麦科伊也必须前往瓦肯星。"
        />

        <Item
          icon={IconStarTrekFour}
          name="星际迷航 4：抢救未来"
          time="1986 年 11 月 26 日"
          desc="由寇克将军领导的 “企业号” 太空船，因为接收到来自太阳系的不明探测波，征求组员同意后展开了一段回到过去的时光旅行。企业号太空船上的成员，为了拯救地球的未来，由 23 世纪回到 20 世纪。因为一艘外星太空船威胁要毁灭地球，除非他们能与座头鲸说话，但是，座头鲸早在数百年前就绝种了。所以，柯克船长只好带着船员们回到 1986 年，从旧金山将座头鲸带入未来，拯救地球。"
        />

        <Item
          icon={IconStarTrekFive}
          name="星际迷航 5：终极先锋"
          time="1989 年 6 月 9 日"
          desc="在电影开始时，进取号-A 的船员们正享受着一场悠闲的度假。新命名的进取号因为试航时表现不佳，正停靠在地球的太空港中进行整修。在约塞米蒂国家公园中，詹姆斯·柯克舰长面临着两个挑战：攀登埃尔凯皮顿山，以及让史波克上校学会唱露营歌曲。不幸的是，他们的休假被一场突如其来的紧急任务打断：船员们被派遣到荒凉的尼姆巴斯 III 星上去营救被劫持的人质。"
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
          上映时间：{time}
        </View>
        <View className={styles.desc}>
          剧情简介：{desc}
        </View>
      </View>
    </View>
  )
}
