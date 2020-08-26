/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Portal = 'portal',
  Mine = 'mine'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Portal]: '控制台',
  [Pages.Mine]: '我的'
}

export const urlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Portal]: 'pages/portal/index',
  [Pages.Mine]: 'pages/mine/index'
}

export const routes: string[] = [
  urlMap[Pages.Index],
  urlMap[Pages.Portal],
  urlMap[Pages.Mine]
]
