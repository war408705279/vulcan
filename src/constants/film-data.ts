import { GetFilmDataResp } from '@/apis/film-data'

type DataType = {
  [key: string]: GetFilmDataResp
}

export const data: DataType = {
  one: {
    cnName: '星际迷航：无限太空',
    enName: 'Star Trek: The Motion Picture',
    time: '1979 年 12 月 7 日',
    productCompany: '派拉蒙',
    issueCompany: '派拉蒙',
    director: '罗伯特 · 怀斯',
    scriptwriter: 'Harold Livingston',
    type: '科幻，动作',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，竹井乔治，德福雷斯特 · 凯利，詹姆斯 · 杜汉',
    duration: '132 分钟',
    mainPrize: '奥斯卡金像奖',
    introduction: '柯克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲柯克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，柯克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际'
  },
  two: {
    cnName: '星际迷航 2：可汗怒吼',
    enName: 'Star Trek II: The Wrath of Khan',
    time: '1982 年 6 月 4 日',
    productCompany: '派拉蒙',
    issueCompany: '派拉蒙',
    director: '尼古拉斯 · 梅耶',
    scriptwriter: 'Jack B. Sowards',
    type: '科幻，动作',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，德福雷斯特 · 凯利，詹姆斯 · 杜汉，沃尔特 · 凯尼格，里卡多 · 蒙特尔班',
    duration: '113 分钟 / USA: 116 分钟',
    mainPrize: '',
    introduction: '在星历 9521.6 年间，叱吒星际的企业号即将退休，突然星际败类克林贡欲向各星际卫星求和，以结束长时间对立，唯一条件是星际舰队需撤出中立缓冲区。这项求和行动，其中以企业号舰长柯克反对最力，因其子曾遭克林贡人杀害，难消仇恨之心，但因其他星际舰队多数追求和平，乃不得不接受此一事实，柯克舰长甚至被推介护送谋和大使戈更议长通过邦联领空至地球总部。柯克受命启航，欲以最后航程完成此项历史创举，是夜，邀约戈更一行登舰餐叙。餐后当戈更返回克罗诺号后，即发生狙击事件，所有记录显示，鱼雷发射均来自企业号，柯克因此遭受不白之冤'
  }
}
