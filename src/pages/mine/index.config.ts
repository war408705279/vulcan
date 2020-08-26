import { PageConfig as WechatPageConfig } from 'remax/wechat'

import { getWechatPageConfig } from '../../utils/config'
import { Pages, nameMap } from '../../constants/route'

// TODO: 支付宝 && 头条 && 百度 ... page config
export const wechat: WechatPageConfig = getWechatPageConfig(nameMap[Pages.Mine])
