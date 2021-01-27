/**
 * @file 配置的环境变量，具体值见 .env & .env.<enviroment> 文件
 * @description 相关文档 https://remaxjs.org/guide/config/environment-variables
 */

function must(name: string, variable?: string): string {
  if (variable == null) {
    throw new Error(`Invalid value for environment variable ${name}, you need to configure it in env file`)
  }
  return variable
}

/** Host */
export const host = must('host', process.env.REMAX_APP_HOST)

/** API Host */
export const apiHost = must('apiHost', process.env.REMAX_APP_API_HOST)

/** Platform */
export const platform = must('platform', process.env.REMAX_PLATFORM)

export enum Platform {
  Wechat = 'wechat',
  Ali = 'ali'
}

export const isWechat = platform === Platform.Wechat
export const isAli = platform === Platform.Ali
