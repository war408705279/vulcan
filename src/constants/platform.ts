/**
 * @file platform 相关常量
 */

const REMAX_PLATFORM = process.env.REMAX_PLATFORM

// TODO: 支付宝 && 头条 && 百度 ... platform 判断
export const isWechat = REMAX_PLATFORM === 'wechat'
