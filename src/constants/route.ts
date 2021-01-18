/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Mine = 'mine',
  WebView = 'web_view'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Mine]: '我的'
}

export const urlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Mine]: 'pages/mine/index',
  [Pages.WebView]: 'pages/web-view/index'
}

// 之所以不用 urlMap，是因为小程序配置不允许 pages 是从斜杠开头的, 但是路由可以
export const routeMap = {
  [Pages.Index]: '/pages/index/index',
  [Pages.Mine]: '/pages/mine/index',
  [Pages.WebView]: '/pages/web-view/index'
}

export const routes = Object.values(urlMap)
