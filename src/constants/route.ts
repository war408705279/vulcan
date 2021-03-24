/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Ship = 'ship',
  Crew = 'crew',
  Ui = 'ui',
  Mine = 'mine',
  WebView = 'web_view',
  IndexIntroduce = 'index_introduce',
  ShipIntroduce = 'ship_introduce',
  CrewIntroduce = 'crew_introduce',
  UiCell = 'ui_cell',
  UiIcon = 'ui_icon',
  UiPopup = 'ui_popup',
  UiInput = 'ui_input',
  UiTextarea = 'ui_textarea',
  UiRadio = 'ui_radio',
  UiCheckbox = 'ui_checkbox',
  UiSwitch = 'ui_switch',
  UiTag = 'ui_tag',
  UiTabs = 'ui_tabs',
  UiLoading = 'ui_loading',
  UiPageLoading = 'ui_page_loading',
  UiResult = 'ui_result',
  UiToast = 'ui_toast',
  MineInfo = 'mine_info',
  MineSkills = 'mine_skills',
  MineContact = 'mine_contact',
  MineHobby = 'mine_hobby',
  MineAssessment = 'mine_assessment'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Ship]: '星际战舰',
  [Pages.Crew]: '机组人员',
  [Pages.Ui]: 'UI 组件',
  [Pages.Mine]: '我的',
  [Pages.IndexIntroduce]: '电影详情',
  [Pages.ShipIntroduce]: '战舰详情',
  [Pages.CrewIntroduce]: '机组人员详情',
  [Pages.UiCell]: 'Cell 组件',
  [Pages.UiIcon]: 'Icon 组件',
  [Pages.UiPopup]: 'Popup 组件',
  [Pages.UiInput]: 'Input 组件',
  [Pages.UiTextarea]: 'Textarea 组件',
  [Pages.UiRadio]: 'Radio 组件',
  [Pages.UiCheckbox]: 'Checkbox 组件',
  [Pages.UiSwitch]: 'Switch 组件',
  [Pages.UiTag]: 'Tag 组件',
  [Pages.UiTabs]: 'Tabs 组件',
  [Pages.UiLoading]: 'Loading 组件',
  [Pages.UiPageLoading]: 'Page Loading 组件',
  [Pages.UiResult]: 'Result 组件',
  [Pages.UiToast]: 'Toast 组件',
  [Pages.MineInfo]: '基本信息',
  [Pages.MineSkills]: '技能',
  [Pages.MineContact]: '联系方式',
  [Pages.MineHobby]: '爱好',
  [Pages.MineAssessment]: '自我评价'
}

export const mainPackageUrlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Ship]: 'pages/ship/index',
  [Pages.Crew]: 'pages/crew/index',
  [Pages.Ui]: 'pages/ui/index',
  [Pages.Mine]: 'pages/mine/index',
  [Pages.WebView]: 'pages/web-view/index'
}

export const mainRoutes = Object.values(mainPackageUrlMap)

// subpackages 里面的 root 已经添加了前缀
export const indexPackageUrlMap = {
  [Pages.IndexIntroduce]: 'introduce/index'
}

export const indexRoutes = Object.values(indexPackageUrlMap)

// subpackages 里面的 root 已经添加了前缀
export const shipPackageUrlMap = {
  [Pages.ShipIntroduce]: 'introduce/index'
}

export const shipRoutes = Object.values(shipPackageUrlMap)

// subpackages 里面的 root 已经添加了前缀
export const crewPackageUrlMap = {
  [Pages.CrewIntroduce]: 'introduce/index'
}

export const crewRoutes = Object.values(crewPackageUrlMap)

// subpackages 里面的 root 已经添加了前缀
export const uiPackageUrlMap = {
  [Pages.UiCell]: 'cell/index',
  [Pages.UiIcon]: 'icon/index',
  [Pages.UiPopup]: 'popup/index',
  [Pages.UiInput]: 'input/index',
  [Pages.UiTextarea]: 'textarea/index',
  [Pages.UiRadio]: 'radio/index',
  [Pages.UiCheckbox]: 'checkbox/index',
  [Pages.UiSwitch]: 'switch/index',
  [Pages.UiTag]: 'tag/index',
  [Pages.UiTabs]: 'tabs/index',
  [Pages.UiLoading]: 'loading/index',
  [Pages.UiPageLoading]: 'page-loading/index',
  [Pages.UiResult]: 'result/index',
  [Pages.UiToast]: 'toast/index'
}

export const uiRoutes = Object.values(uiPackageUrlMap)

// subpackages 里面的 root 已经添加了前缀
export const minePackageUrlMap = {
  [Pages.MineInfo]: 'info/index',
  [Pages.MineSkills]: 'skills/index',
  [Pages.MineContact]: 'contact/index',
  [Pages.MineHobby]: 'hobby/index',
  [Pages.MineAssessment]: 'assessment/index'
}

export const mineRoutes = Object.values(minePackageUrlMap)

// 之所以不用 urlMap，是因为小程序配置不允许 pages 是从斜杠开头的, 但是路由可以
export const routeMap = {
  [Pages.Index]: '/pages/index/index',
  [Pages.Ship]: '/pages/ship/index',
  [Pages.Crew]: '/pages/crew/index',
  [Pages.Ui]: '/pages/ui/index',
  [Pages.Mine]: '/pages/mine/index',
  [Pages.WebView]: '/pages/web-view/index',
  [Pages.IndexIntroduce]: '/pages/index-pages/introduce/index',
  [Pages.ShipIntroduce]: '/pages/ship-pages/introduce/index',
  [Pages.CrewIntroduce]: '/pages/crew-pages/introduce/index',
  [Pages.UiCell]: '/pages/ui-pages/cell/index',
  [Pages.UiIcon]: '/pages/ui-pages/icon/index',
  [Pages.UiPopup]: '/pages/ui-pages/popup/index',
  [Pages.UiInput]: '/pages/ui-pages/input/index',
  [Pages.UiTextarea]: '/pages/ui-pages/textarea/index',
  [Pages.UiRadio]: '/pages/ui-pages/radio/index',
  [Pages.UiCheckbox]: '/pages/ui-pages/checkbox/index',
  [Pages.UiSwitch]: '/pages/ui-pages/switch/index',
  [Pages.UiTag]: '/pages/ui-pages/tag/index',
  [Pages.UiTabs]: '/pages/ui-pages/tabs/index',
  [Pages.UiLoading]: '/pages/ui-pages/loading/index',
  [Pages.UiPageLoading]: '/pages/ui-pages/page-loading/index',
  [Pages.UiResult]: '/pages/ui-pages/result/index',
  [Pages.UiToast]: '/pages/ui-pages/toast/index',
  [Pages.MineInfo]: '/pages/mine-pages/info/index',
  [Pages.MineSkills]: '/pages/mine-pages/skills/index',
  [Pages.MineContact]: '/pages/mine-pages/contact/index',
  [Pages.MineHobby]: '/pages/mine-pages/hobby/index',
  [Pages.MineAssessment]: '/pages/mine-pages/assessment/index'
}
