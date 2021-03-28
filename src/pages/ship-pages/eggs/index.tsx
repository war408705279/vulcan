/**
 * @file ship eggs page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

// 彩蛋一：致敬版海报
import IconEggsOne from './images/icon-eggs-one.jpg'
// 彩蛋二：老班底合影
import IconEggsTwoOne from './images/icon-eggs-two-one.jpg'
import IconEggsTwoTwo from './images/icon-eggs-two-two.gif'
// 彩蛋三：966 天
import IconEggsThree from './images/icon-eggs-three.jpg'
// 彩蛋四：50 个新外星种族
import IconEggsFourOne from './images/icon-eggs-four-one.jpg'
import IconEggsFourTwo from './images/icon-eggs-four-two.gif'
// 彩蛋五：亚马逊 CEO 客串
import IconEggsFiveOne from './images/icon-eggs-five-one.jpg'
import IconEggsFiveTwo from './images/icon-eggs-five-two.jpg'
// 彩蛋六：又见撕衣梗
import IconEggsSixOne from './images/icon-eggs-six-one.jpg'
import IconEggsSixTwo from './images/icon-eggs-six-two.gif'
import IconEggsSixThree from './images/icon-eggs-six-three.jpg'
// 彩蛋七：队友 / 酒友
import IconEggsSevenOne from './images/icon-eggs-seven-one.jpg'
import IconEggsSevenTwo from './images/icon-eggs-seven-two.jpg'
// 彩蛋八：导演的儿子
import IconEggsEightOne from './images/icon-eggs-eight-one.jpg'
import IconEggsEightTwo from './images/icon-eggs-eight-two.gif'
// 彩蛋九：进取号又双叒叕毁了
import IconEggsNineOne from './images/icon-eggs-nine-one.jpg'
import IconEggsNineTwo from './images/icon-eggs-nine-two.gif'
import IconEggsNineThree from './images/icon-eggs-nine-three.gif'

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

          <View className={styles.item}>
            <View className={styles.title}>
              966 天
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsThree}
                mode="widthFix"
              />
              <View className={styles.text}>
                在电影开头，柯克舰长的航行日志中提到这是他们在宇宙中的第 966 天
              </View>
              <View className={styles.text}>
                很明显这是在致敬 1966 年《星际迷航》电视剧的开播
              </View>
              <View className={styles.text}>
                此外，柯克的话语中提到了 5 年航行计划
              </View>
              <View className={styles.text}>
                这是故事重启后第一次提到这个计划，而原初系列讲得就是 5 年航行计划中的故事
              </View>
              <View className={styles.text}>
                两条时间线开始有了相对应的事件
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              50 个新外星种族
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsFourOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                为了向《星际迷航》开播 50 周年致敬，剧组简直什么手段都用上了
              </View>
              <View className={styles.text}>
                如果你细心品味，会发现本作中的外星人种族特别多...
              </View>
              <Image
                className={styles.img}
                src={IconEggsFourTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                一共达到 50 种
              </View>
              <View className={styles.text}>
                没错，这又是在致敬 50 周年...
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              亚马逊 CEO 客串
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsFiveOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                没想到，亚马逊的创始人兼 CEO 杰夫 · 贝佐斯（Jeff Bezos）也是星际迷航粉
              </View>
              <View className={styles.text}>
                他在影片开头饰演了一位空间站员工，为前来求助的外星人做检查
              </View>
              <Image
                className={styles.img}
                src={IconEggsFiveTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                杰夫 · 贝佐斯从小就非常喜欢《星际迷航》，甚至亚马逊总部还有个缩小版进取号模型
              </View>
              <View className={styles.text}>
                能在片中客串，也算是完成了一桩心愿
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              又见撕衣梗
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsSixOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                《星际迷航》有个梗，柯克舰长的衣服总是被各种原因弄坏
              </View>
              <View className={styles.text}>
                本作中，一开场柯克舰长的制服就在谈判中被撕开了
              </View>
              <Image
                className={styles.img}
                src={IconEggsSixTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                而在原初系列，甚至动画里，我们还能看到很多柯克的爆衣场面
              </View>
              <Image
                className={styles.img}
                src={IconEggsSixThree}
                mode="widthFix"
              />
              <View className={styles.text}>
                真是令人羞涩啊...
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              队友 / 酒友
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsSevenOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                影片开头，柯克舰长和医疗官麦考伊一起借酒消愁
              </View>
              <View className={styles.text}>
                麦考伊还从契诃夫的柜子中借来一瓶伏特加，让两人赞不绝口
              </View>
              <View className={styles.text}>
                这个场景其实也是在致敬经典
              </View>
              <View className={styles.text}>
                在《星际迷航 2：可汗之怒》中，也有两人的对饮场景
              </View>
              <Image
                className={styles.img}
                src={IconEggsSevenTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                为了庆祝柯克的生日，麦考伊拿来一瓶 2283 年的陈酿，还送了舰长一副眼镜
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              导演的儿子
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsEightOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                《星际迷航 3：超越星辰》的导演由 J · J · 艾布拉姆斯换成了林诣彬
              </View>
              <View className={styles.text}>
                林诣彬随后以权谋私，让自己 6 岁的儿子在片中客串了一把
              </View>
              <Image
                className={styles.img}
                src={IconEggsEightTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                影片开头进取号进入约克城空间站的画面中，那个绿脸的外星人就是林导的儿子
              </View>
            </View>
          </View>

          <View className={styles.item}>
            <View className={styles.title}>
              进取号又双叒叕毁了
            </View>

            <View className={styles.content}>
              <Image
                className={styles.img}
                src={IconEggsNineOne}
                mode="widthFix"
              />
              <View className={styles.text}>
                《星际迷航》有个喜欢炸船的传统
              </View>
              <View className={styles.text}>
                进取号在电视剧和电影中都被毁了很多次，而且是彻底没法修复的那种毁...
              </View>
              <View className={styles.text}>
                在 1984 年的电影《星际迷航 3：石破天惊》中，进取号就被炸了个粉碎
              </View>
              <Image
                className={styles.img}
                src={IconEggsNineTwo}
                mode="widthFix"
              />
              <View className={styles.text}>
                随后的电视剧《星际迷航：下一代》中，进取号更是被毁了 2 遍
              </View>
              <View className={styles.text}>
                在 1994 年的电影《星际迷航 7：星空奇兵》中，进取号又被重重摔倒了地面上
              </View>
              <Image
                className={styles.img}
                src={IconEggsNineThree}
                mode="widthFix"
              />
              <View className={styles.text}>
                当然，这些舰船只不过是舰名一样，但型号均不同
              </View>
              <View className={styles.text}>
                这也是现实中军舰的命名原则之一，同一个舰名会在不同代、不同用途的军舰之间传承
              </View>
              <View className={styles.text}>
                虽然本作一开场进取号就被毁了，但在片尾柯克舰长和舰员们迎来了新的战舰：NCC-1701-A
              </View>
              <View className={styles.text}>
                原来的进取号型号是 NCC-1701，新战舰是旧进取号的改进型
              </View>
              <View className={styles.text}>
                而星际迷航不同的故事，进取号的型号也不同，比如下一代就是 NCC-1701-D 型
              </View>
            </View>
          </View>
        </View>
      </View>
    </Scaffold>
  )
}
