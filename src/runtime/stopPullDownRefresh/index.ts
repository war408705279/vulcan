/**
 * @file stopPullDownRefresh runtime(wechat version)
 * @description https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html
 */

import { stopPullDownRefresh as wechatStopPullDownRefresh } from 'remax/wechat'

export type Props = {
  success?: () => void
  fail?: () => void
  complete?: () => void
}

export default function stopPullDownRefresh(props?: Props) {
  return wechatStopPullDownRefresh(props)
}
