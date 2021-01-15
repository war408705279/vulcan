/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Mine = 'mine'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Mine]: '我的'
}

export const urlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Mine]: 'pages/mine/index'
}

export const routes: string[] = [
  urlMap[Pages.Index],
  urlMap[Pages.Mine]
]
