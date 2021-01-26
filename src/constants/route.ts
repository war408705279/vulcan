/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Ui = 'ui',
  Mine = 'mine',
  UiCell = 'ui_cell',
  MineInfo = 'mine_info',
  MineSkill = 'mine_skill',
  MineContact = 'mine_contact',
  MineHobby = 'mine_hobby',
  MineAssessment = 'mine_assessment',
  WebView = 'web_view'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Ui]: 'UI 组件',
  [Pages.Mine]: '我的',
  [Pages.UiCell]: 'Cell 组件',
  [Pages.MineInfo]: '基本信息',
  [Pages.MineSkill]: '技能',
  [Pages.MineContact]: '联系方式',
  [Pages.MineHobby]: '爱好',
  [Pages.MineAssessment]: '自我评价'
}

export const urlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Ui]: 'pages/ui/index',
  [Pages.Mine]: 'pages/mine/index',
  [Pages.UiCell]: 'pages/ui/pages/cell/index',
  [Pages.MineInfo]: 'pages/mine/pages/info/index',
  [Pages.MineSkill]: 'pages/mine/pages/skill/index',
  [Pages.MineContact]: 'pages/mine/pages/contact/index',
  [Pages.MineHobby]: 'pages/mine/pages/hobby/index',
  [Pages.MineAssessment]: 'pages/mine/pages/assessment/index',
  [Pages.WebView]: 'pages/web-view/index'
}

// 之所以不用 urlMap，是因为小程序配置不允许 pages 是从斜杠开头的, 但是路由可以
export const routeMap = {
  [Pages.Index]: '/pages/index/index',
  [Pages.Ui]: '/pages/ui/index',
  [Pages.Mine]: '/pages/mine/index',
  [Pages.UiCell]: '/pages/ui/pages/cell/index',
  [Pages.MineInfo]: '/pages/mine/pages/info/index',
  [Pages.MineSkill]: '/pages/mine/pages/skill/index',
  [Pages.MineContact]: '/pages/mine/pages/contact/index',
  [Pages.MineHobby]: '/pages/mine/pages/hobby/index',
  [Pages.MineAssessment]: '/pages/mine/pages/assessment/index',
  [Pages.WebView]: '/pages/web-view/index'
}

export const routes = Object.values(urlMap)
