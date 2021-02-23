/**
 * @file page-data 相关
 */

// 原初
import IconStarTrekOne from './images/icon-star-trek-1.jpg'
import IconStarTrekTwo from './images/icon-star-trek-2.jpg'
import IconStarTrekThree from './images/icon-star-trek-3.jpg'
import IconStarTrekFour from './images/icon-star-trek-4.jpg'
import IconStarTrekFive from './images/icon-star-trek-5.jpg'
import IconStarTrekSix from './images/icon-star-trek-6.jpg'
// 下一代
import IconStarTrekSeven from './images/icon-star-trek-7.jpg'
import IconStarTrekEight from './images/icon-star-trek-8.jpg'
import IconStarTrekNine from './images/icon-star-trek-9.jpg'
import IconStarTrekTen from './images/icon-star-trek-10.jpg'
// 开尔文时间线
import IconStarTrekEleven from './images/icon-star-trek-11.jpg'
import IconStarTrekTwelve from './images/icon-star-trek-12.jpg'
import IconStarTrekThirteen from './images/icon-star-trek-13.jpg'
// 非官方
import IconStarTrekFourteen from './images/icon-star-trek-14.jpg'

export type DataItemType = {
  code?: string
  icon: string
  name: string
  time: string
  desc: string
}

export type DataType = {
  title: string,
  list: DataItemType[]
}

export const data: DataType[] = [{
  title: '原初',
  list: [{
    code: 'one',
    icon: IconStarTrekOne,
    name: '星际迷航：无限太空',
    time: '1979 年 12 月 7 日',
    desc: '柯克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲柯克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，柯克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际'
  }, {
    code: 'two',
    icon: IconStarTrekTwo,
    name: '星际迷航 2：可汗怒吼',
    time: '1982 年 6 月 4 日',
    desc: '在星历 9521.6 年间，叱吒星际的企业号即将退休，突然星际败类克林贡欲向各星际卫星求和，以结束长时间对立，唯一条件是星际舰队需撤出中立缓冲区。这项求和行动，其中以企业号舰长柯克反对最力，因其子曾遭克林贡人杀害，难消仇恨之心，但因其他星际舰队多数追求和平，乃不得不接受此一事实，柯克舰长甚至被推介护送谋和大使戈更议长通过邦联领空至地球总部。柯克受命启航，欲以最后航程完成此项历史创举，是夜，邀约戈更一行登舰餐叙。餐后当戈更返回克罗诺号后，即发生狙击事件，所有记录显示，鱼雷发射均来自企业号，柯克因此遭受不白之冤'
  }, {
    code: 'three',
    icon: IconStarTrekThree,
    name: '星际迷航 3：石破天惊',
    time: '1984 年 6 月 1 日',
    desc: '2285 年，在与可汗的战斗中损坏的联邦星舰进取号，返回了地球的太空港以进行维修。柯克还在为斯波克的死感到悲伤。麦科伊医生出现了种种异常的行为：如擅自闯入被封锁的斯波克原来的舱房胡言乱语等，最后他被送进了医院进行精神检查。斯科提被另分派到了联邦星舰精进号。星际舰队指挥部对新形成的创世星下达了禁入令。柯克被告知，进取号即将除役。斯波克的父亲沙瑞克找到柯克并告诉他，斯波克的遗体必须返回瓦肯星，否则他的灵魂就不得安息。沙瑞克要求柯克必须回到创世星，寻回斯波克的遗棺并将它带回瓦肯星 -- 而斯波克临死前与麦科伊进行了心灵融合，因此带有斯波克灵魂的麦科伊也必须前往瓦肯星'
  }, {
    code: 'four',
    icon: IconStarTrekFour,
    name: '星际迷航 4：抢救未来',
    time: '1986 年 11 月 26 日',
    desc: '由柯克将军领导的 "企业号" 太空船，因为接收到来自太阳系的不明探测波，征求组员同意后展开了一段回到过去的时光旅行。企业号太空船上的成员，为了拯救地球的未来，由 23 世纪回到 20 世纪。因为一艘外星太空船威胁要毁灭地球，除非他们能与座头鲸说话，但是，座头鲸早在数百年前就绝种了。所以，柯克船长只好带着船员们回到 1986 年，从旧金山将座头鲸带入未来，拯救地球'
  }, {
    code: 'five',
    icon: IconStarTrekFive,
    name: '星际迷航 5：终极先锋',
    time: '1989 年 6 月 9 日',
    desc: '在电影开始时，进取号 A 的船员们正享受着一场悠闲的度假。新命名的进取号因为试航时表现不佳，正停靠在地球的太空港中进行整修。在约塞米蒂国家公园中，詹姆斯·柯克舰长面临着两个挑战：攀登埃尔凯皮顿山，以及让史波克上校学会唱露营歌曲。不幸的是，他们的休假被一场突如其来的紧急任务打断：船员们被派遣到荒凉的尼姆巴斯 III 星上去营救被劫持的人质'
  }, {
    code: 'six',
    icon: IconStarTrekSix,
    name: '星际迷航 6：未来之城',
    time: '1991 年 12 月 6 日',
    desc: '电影开场于克林贡卫星普拉西斯（Praxis）的爆炸。由苏鲁田光上校指挥的联邦星舰进取号受到了震波的冲击，船员们随即发现卫星的大部分质量都消失无踪了。在这次事件中，克林贡帝国不仅失去了关键的能源产地，其母星的臭氧层亦遭到了严重损害，整个帝国陷入一片混乱。由于无力继续与联邦敌对，克林贡人打算同死敌星际联邦议和。星际舰队于是派出了联邦星舰进取号 - A 前往接见克林贡首相戈尔康（Gorkon），并护送他前往地球谈判。这个决定让进取号的舰长詹姆斯 · T · 柯克坐立不安，因为他的儿子当年就是被克林贡人谋害的'
  }]
}, {
  title: '下一代',
  list: [{
    code: 'seven',
    icon: IconStarTrekSeven,
    name: '星际迷航 7：星空奇兵',
    time: '1994 年 11 月 17 日',
    desc: '该片讲述疯狂博士苏伦野心勃勃，藉着武器毁灭宇宙，并走到一处没有时空界限的领域，进行连串恐怖计划。为了挽救人类安危，23 世纪的太空船进取号舰长詹姆斯 · T · 柯克掉入时空，与 24 世纪的进取号舰长比皮卡德会合，阻止邪恶博士阴谋行动'
  }, {
    code: 'eight',
    icon: IconStarTrekEight,
    name: '星际迷航 8：第一次接触',
    time: '1996 年 11 月 18 日',
    desc: '企业号正在宇宙罗慕兰中立区做例行巡航时，舰长皮卡徳接到密电，称博格人准备向地球发起攻击。由于舰长皮卡徳曾受敌方俘虏并同化，星际舰队对其不是很信任，故没有派其出战。在舰队和博格人交战后皮卡徳听到战报，不顾命令，仍然参与战斗。之后企业号跟随博格人的时间漩涡回到 21 世纪，以阻挡博格人试图改变人类的外星发展史达到征服地球的企图'
  }, {
    code: 'nine',
    icon: IconStarTrekNine,
    name: '星际迷航 9：起义',
    time: '1998 年 12 月 11 日',
    desc: '皮卡特舰长在获知自己的副官数据中校在巴库星球暗访时被当地人掳为人质，便立刻率企业号前往营救。当他们来到巴库星球时，发现整个星球上只居住了从外星移民来的六百名巴库人，并过着与世隔绝、摒弃科技、崇尚和平的生活；数据中校被掳不像是巴库人的作风，想必另有隐情'
  }, {
    code: 'ten',
    icon: IconStarTrekTen,
    name: '星际迷航 10：复仇女神',
    time: '2002 年 12 月 9 日',
    desc: '辛桑靠雷麦斯人幕后支持，在罗慕伦发动了政变，并要求星际联邦派企业号前往罗慕伦进行和谈，企业号的皮卡德舰长到达目的地后发现这是一场针对联邦的阴谋，而辛桑则是皮卡德的复制人，皮卡德舰长随即率领船员展开了激烈的反抗，最后在贝森谷附近获得罗慕伦军方的支持并摧毁辛桑的战舰，在这场战斗中，智能机器人戴达（Data）为了摧毁菲拉伦辐射（一种生化辐射，能摧毁亚原子细胞结构，使得星际联邦禁止研究该辐射）发生器，救出皮卡德舰长，与该战舰同归于尽'
  }]
}, {
  title: '开尔文时间线',
  list: [{
    code: 'eleven',
    icon: IconStarTrekEleven,
    name: '星际迷航',
    time: '2009 年 5 月 8 日',
    desc: '未知的时空，无边的黑洞，一艘巨型罗慕兰战舰突然出现在太空中。崇武暴躁的罗慕兰人，是多年前离开瓦肯星人自建星际帝国的战士种族。如今，罗慕兰帝国的统治者尼诺，为了解决日后的强大劲敌史波克，正跨越星际和时空四处搜寻他的下落。而一名为凯尔文号的联邦星舰，在追捕中不幸落入了罗慕兰的魔掌。还尚稚嫩的联邦星舰，在罗慕兰战舰催枯拉朽的火力面前反击，无异以卵击石。幸而临危受命的舰长乔治 · 柯克英勇机智，在星舰被摧毁前的短短十二分钟之内，带领全船八百余人逃出生天，这其中包括他正在分娩的妻子'
  }, {
    code: 'twelve',
    icon: IconStarTrekTwelve,
    name: '星际迷航 2：暗黑无界',
    time: '2013 年 5 月 16 日',
    desc: '企业号虽被调召回到 23 世纪的地球，但他们却发现，一股无法阻挡的恐怖力量，不仅从内部摧残星际联邦，更让世界濒临毁灭。企业号舰长詹姆士柯克将领军对抗战火连天的世界，并且想方设法缉捕聪明绝顶，而前所未见的神秘星际恐怖份子约翰哈里森'
  }, {
    code: 'thirteen',
    icon: IconStarTrekThirteen,
    name: '星际迷航 3：超越星辰',
    time: '2016 年 7 月 22 日',
    desc: '柯克船长带领企业号继续踏上宇宙探索的旅程，他向老骨头讲述了自己对于船长身份的忧虑，而在他与最好的朋友史波克互诉衷肠前，他们又接到了一个紧急救援的任务。而神秘敌人剋劳开始攻击企业号，而幸存的企业号成员也分散至一个行星上求生'
  }]
}, {
  title: '非官方',
  list: [{
    code: 'fourteen',
    icon: IconStarTrekFourteen,
    name: '星际迷航：叛徒',
    time: '2015 年 8 月 1 日',
    desc: '（评价不高，慎看）在美国航行者号返回地球十年后，一群衣衫褴褛的叛乱者和被驱逐者必须与海军上将切科夫和图沃克秘密合作，阻止来自外部和内部的威胁联邦的部队'
  }]
}]
