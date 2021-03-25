/**
 * @file stopPullDownRefresh runtime(ali version)
 * @description https://opendocs.alipay.com/mini/api/pmhkbb
 */

import { stopPullDownRefresh as aliStopPullDownRefresh } from 'remax/ali'

export type Props = {
  success?: () => void
  fail?: () => void
  complete?: () => void
}

export default function stopPullDownRefresh(props?: Props) {
  return aliStopPullDownRefresh(props)
}
