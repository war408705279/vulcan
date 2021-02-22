/**
 * @file film-data 相关
 */

import { GetFilmDataResp } from '@/apis/film-data'

type DataType = {
  [key: string]: GetFilmDataResp
}

export const data: DataType = {
  one: {
    cnName: '星际迷航：无限太空',
    enName: 'Star Trek: The Motion Picture',
    time: '1979 年 12 月 7 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: '罗伯特 · 怀斯',
    scriptwriter: 'Harold Livingston',
    type: '科幻 / 动作',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，乔治 · 竹井，德福雷斯特 · 凯利，詹姆斯 · 杜汉',
    duration: '132 分钟',
    mainPrize: '奥斯卡金像奖，第 7 届土星奖最佳特效',
    cost: '',
    boxOffice: '截止至 1981 年：82258456 美元（美国），1.39 亿美元（全世界）',
    introduction: '柯克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲柯克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，柯克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际'
  },
  two: {
    cnName: '星际迷航 2：可汗怒吼',
    enName: 'Star Trek II: The Wrath of Khan',
    time: '1982 年 6 月 4 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: '尼古拉斯 · 梅耶',
    scriptwriter: 'Jack B. Sowards',
    type: '科幻 / 动作',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，德福雷斯特 · 凯利，詹姆斯 · 杜汉，沃尔特 · 凯尼格，里卡多 · 蒙特尔班',
    duration: '113 分钟 / USA: 116 分钟',
    mainPrize: '第 10 届土星奖最佳男主角，第 10 届土星奖最佳导演',
    cost: '',
    boxOffice: '截止至 1982 年：78912963 美元（美国），9700 万美元（全世界）',
    introduction: '在星历 9521.6 年间，叱吒星际的企业号即将退休，突然星际败类克林贡欲向各星际卫星求和，以结束长时间对立，唯一条件是星际舰队需撤出中立缓冲区。这项求和行动，其中以企业号舰长柯克反对最力，因其子曾遭克林贡人杀害，难消仇恨之心，但因其他星际舰队多数追求和平，乃不得不接受此一事实，柯克舰长甚至被推介护送谋和大使戈更议长通过邦联领空至地球总部。柯克受命启航，欲以最后航程完成此项历史创举，是夜，邀约戈更一行登舰餐叙。餐后当戈更返回克罗诺号后，即发生狙击事件，所有记录显示，鱼雷发射均来自企业号，柯克因此遭受不白之冤'
  },
  three: {
    cnName: '星际迷航 3：石破天惊',
    enName: 'Star Trek III: The Search for Spock',
    time: '1984 年 6 月 1 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司（美国），北京中录德加拉家庭娱乐（中国）',
    director: '伦纳德 · 尼莫伊',
    scriptwriter: '哈维 · 贝内特',
    type: '动作 / 科幻 / 冒险',
    stars: '威廉 · 赛特纳，伦纳德 · 尼莫依，德福雷斯特 · 凯利',
    duration: '105 分钟',
    mainPrize: '土星奖最佳科幻电影（提名），雨果奖最佳戏剧表演（提名）',
    cost: '',
    boxOffice: '8700 万美元',
    introduction: '2285 年，在与可汗的战斗中损坏的联邦星舰进取号，返回了地球的太空港以进行维修。柯克还在为斯波克的死感到悲伤。麦科伊医生出现了种种异常的行为：如擅自闯入被封锁的斯波克原来的舱房、胡言乱语等，最后他被送进了医院进行精神检查。斯科提被另分派到了联邦星舰精进号。星际舰队指挥部对新形成的创世星下达了禁入令。柯克被告知，进取号即将除役。斯波克的父亲沙瑞克找到柯克并告诉他，斯波克的遗体必须返回瓦肯星，否则他的灵魂就不得安息。沙瑞克要求柯克必须回到创世星，寻回斯波克的遗棺并将它带回瓦肯星 -- 而斯波克临死前与麦科伊进行了心灵融合，因此带有斯波克灵魂的麦科伊也必须前往瓦肯星'
  },
  four: {
    cnName: '星际迷航 4：抢救未来',
    enName: 'Star Trek IV: The Voyage Home',
    time: '1986 年 11 月 26 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: '伦纳德 · 尼莫伊',
    scriptwriter: 'Steve Meerson / Peter Krikes',
    type: '喜剧 / 科幻 / 冒险',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，德福雷斯特 · 凯利，詹姆斯 · 杜汉，乔治 · 竹井，沃特尔 · 科尼格，妮切尔 · 尼科尔斯',
    duration: '119 分钟',
    mainPrize: '第 14 届土星奖最佳服装',
    cost: '2500 万美元',
    boxOffice: '截止至 1989 年：1.09 亿美元',
    introduction: '由柯克将军领导的 "企业号" 太空船，因为接收到来自太阳系的不明探测波，征求组员同意后展开了一段回到过去的时光旅行。企业号太空船上的成员，为了拯救地球的未来，由 23 世纪回到 20 世纪。因为一艘外星太空船威胁要毁灭地球，除非他们能与座头鲸说话，但是，座头鲸早在数百年前就绝种了。所以，柯克船长只好带着船员们回到 1986 年，从旧金山将座头鲸带入未来，拯救地球'
  },
  five: {
    cnName: '星际迷航 5：终极先锋',
    enName: 'Star Trek V: The Final Frontier',
    time: '1989 年 6 月 9 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: '威廉 · 夏特纳',
    scriptwriter: 'David Loughery',
    type: '科幻 / 冒险 / 魔幻',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，德福雷斯特 · 凯利，詹姆斯 · 杜汉，沃尔特 · 凯尼格，乔治 · 竹井，妮切尔 · 尼科尔斯，大卫 · 华纳',
    duration: '107 分钟',
    mainPrize: '',
    cost: '2780 万美元',
    boxOffice: '52210049 美元（美国），70210000 美元（全世界）',
    introduction: '在电影开始时，进取号 A 的船员们正享受着一场悠闲的度假。新命名的进取号因为试航时表现不佳，正停靠在地球的太空港中进行整修。在约塞米蒂国家公园中，詹姆斯·柯克舰长面临着两个挑战：攀登埃尔凯皮顿山，以及让史波克上校学会唱露营歌曲。不幸的是，他们的休假被一场突如其来的紧急任务打断：船员们被派遣到荒凉的尼姆巴斯 III 星上去营救被劫持的人质'
  },
  six: {
    cnName: '星际迷航 6：未来之城',
    enName: 'Star Trek VI: The Undiscovered Country',
    time: '1991 年 12 月 6 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: '尼古拉斯 · 迈耶',
    scriptwriter: '尼古拉斯 · 迈耶',
    type: '科幻 / 动作',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，德福雷斯特 · 凯利，詹姆斯 · 杜汉',
    duration: '113 分钟',
    mainPrize: '第 19 届土星奖最佳科幻电影',
    cost: '2700 万美元',
    boxOffice: '截止至 1992 年：96888996 美元',
    introduction: '电影开场于克林贡卫星普拉西斯（Praxis）的爆炸。由苏鲁田光上校指挥的联邦星舰进取号受到了震波的冲击，船员们随即发现卫星的大部分质量都消失无踪了。在这次事件中，克林贡帝国不仅失去了关键的能源产地，其母星的臭氧层亦遭到了严重损害，整个帝国陷入一片混乱。由于无力继续与联邦敌对，克林贡人打算同死敌星际联邦议和。星际舰队于是派出了联邦星舰进取号 - A 前往接见克林贡首相戈尔康（Gorkon），并护送他前往地球谈判。这个决定让进取号的舰长詹姆斯 · T · 柯克坐立不安，因为他的儿子当年就是被克林贡人谋害的'
  },
  seven: {
    cnName: '星际迷航 7：星空奇兵',
    enName: 'Star Trek VII: Generations',
    time: '1994 年 11 月 17 日',
    productCompany: '派拉蒙影业公司',
    issueCompany: '派拉蒙影业公司',
    director: 'David Carson',
    scriptwriter: '罗纳德 · D · 摩尔 / Brannon Braga',
    type: '科幻 / 动作',
    stars: '帕特里克 · 斯图尔特，乔纳森 · 弗雷克斯，布伦特 · 杰 · 斯派尔，莱瓦尔 · 伯顿，盖茨 · 麦克法登，威廉 · 夏特纳',
    duration: '118 分钟',
    mainPrize: '第 21 届土星奖（均为提名）',
    cost: '',
    boxOffice: '118071125 美元',
    introduction: '该片讲述疯狂博士苏伦野心勃勃，藉着武器毁灭宇宙，并走到一处没有时空界限的领域，进行连串恐怖计划。为了挽救人类安危，23 世纪的太空船进取号舰长詹姆斯 · T · 柯克掉入时空，与 24 世纪的进取号舰长比皮卡德会合，阻止邪恶博士阴谋行动'
  }
}
