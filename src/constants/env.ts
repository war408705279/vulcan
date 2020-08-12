/**
 * @file 配置的环境变量，具体值见 .env & .env.<enviroment> 文件
 * @description 相关文档 https://remaxjs.org/guide/config/environment-variables
 */

/** Host */
export const host = must('host', process.env.REMAX_APP_HOST)

/** API Host */
export const apiHost = must('apiHost', process.env.REMAX_APP_API_HOST)

function must(name: string, variable?: string): string {
  if (variable == null) {
    throw new Error(`Invalid value for environment variable ${name}, you need to configure it in env file`)
  }
  return variable
}
