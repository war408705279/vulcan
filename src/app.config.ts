import { AppConfig as WechatAppConfig } from 'remax/wechat'

// TODO: *.config.ts 目前引用常量只能用相对路径引用
// 不影响正常使用，后面可以修一下
import { getWechatAppConfig } from './utils/config'

// TODO: 支付宝 && 头条 && 百度 ... app config
export const wechat: WechatAppConfig = getWechatAppConfig()
