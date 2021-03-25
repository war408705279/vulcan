import { PageConfig as WechatPageConfig } from 'remax/wechat'

import { getWechatPageConfig } from '../../utils/config'

const pageConfig = {
  enablePullDownRefresh: true
}

export const wechat: WechatPageConfig = getWechatPageConfig(pageConfig)
