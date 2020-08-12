import { PageConfig as WechatPageConfig } from 'remax/wechat'
import { titlePrefix } from '../../constants/route'
import { primaryColor } from '../../utils/styles/variables'

// TODO: 支付宝 && 头条 && 百度 ... page config
export const wechat: WechatPageConfig = {
  navigationBarTitleText: `${titlePrefix} - 首页`,
  navigationBarBackgroundColor: primaryColor
}
