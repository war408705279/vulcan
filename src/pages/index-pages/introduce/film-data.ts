export type DataItemProps = {
  cnName: string
  enName: string
  time: string
  productCompany: string
  issueCompany: string
  director: string
  scriptwriter: string
  type: string
  stars: string
  duration: string
  mainPrize: string
  introduction: string
}

export type DataProps = {
  [key: string]: DataItemProps
}

export const data: DataProps = {
  one: {
    cnName: '星际迷航：无限太空',
    enName: 'Star Trek: The Motion Picture',
    time: '1979 年 12 月 7 日',
    productCompany: '派拉蒙',
    issueCompany: '派拉蒙',
    director: '罗伯特 · 怀斯',
    scriptwriter: 'Harold Livingston',
    type: '科幻',
    stars: '威廉 · 夏特纳，伦纳德 · 尼莫伊，竹井乔治，德福雷斯特 · 凯利，詹姆斯 · 杜汉',
    duration: '132 分钟',
    mainPrize: '奥斯卡金像奖',
    introduction: '柯克船长奉命最后一次指挥企业号宇宙飞船对抗外星人对地球的大规模攻击，他召集旧部和新队员执行任务，双方展开了一场殊死战斗。第一部的前半部几乎全是讲柯克船长召集旧部来执行任务，开场就是久违的企业号穿越太空，这个新式造型委实让当时的影迷惊艳不已。后半部的内容不用说也可知了，柯克船长定是成功地掌握舰队，并伙同战友们拯救银河系于存亡之际'
  }
}
