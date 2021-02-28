/**
 * @file transforms index content
 */

// 隐藏手机号中间四位
export function makeMobileAnon(mobile: string | number) {
  const regex = /(\d{3})\d{4}(\d{4})/
  return `${mobile}`.replace(regex, '$1****$2')
}

// 隐藏身份证号中间十位
export function makeIDNumberAnon(id: string | number) {
  const regex = /(\d{4})\d{10}(\d{4})/
  return `${id}`.replace(regex, '$1**********$2')
}

// 隐藏银行卡号中间几位
// 参考 https://github.com/qbox/portal-v4/blob/develop/service/src/app/gaea/controllers/user/identity/identity_show.go#L154
export function makeBankAccountAnon(account: string | number) {
  const accountStr = `${account}`
  const length = accountStr.length

  if (length >= 8 && length <= 10) {
    const anonStr = (new Array(length - 6 + 1)).join('*')
    return `${accountStr.slice(0, 3)}${anonStr}${accountStr.slice(-3)}`
  }

  if (length > 10) {
    const anonStr = (new Array(length - 8 + 1)).join('*')
    return `${accountStr.slice(0, 4)}${anonStr}${accountStr.slice(-4)}`
  }

  return accountStr
}

// 将后端返回的金额转换为以元为单位的格式（后端存的金额会 * 10000）
export function asYuan(money: number) {
  // 避免出现 10000 转换为 1.00 的情况
  return Math.round(money / 100) / 100
}

// 以千位分隔符分隔金额
export function splitMoneyByComma(money: string | number) {
  const moneyStr = `${money}`
  // 处理金额带小数的情况
  const splitArr = moneyStr.split('.')
  splitArr[0] = splitArr[0].replace(/(?=(\B\d{3})+$)/g, ',')
  return splitArr.join('.')
}
