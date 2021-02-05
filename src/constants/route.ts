/**
 * @file route 相关
 */

export const titlePrefix = 'Vulcan'

export enum Pages {
  Index = 'index',
  Ui = 'ui',
  Mine = 'mine',
  WebView = 'web_view',
  UiCell = 'ui_cell',
  UiIcon = 'ui_icon',
  UiPopup = 'ui_popup',
  UiInput = 'ui_input',
  UiTextarea = 'ui_textarea',
  UiRadio = 'ui_radio',
  UiCheckbox = 'ui_checkbox',
  UiTag = 'ui_tag',
  UiTabs = 'ui_tabs',
  UiLoading = 'ui_loading',
  UiPageLoading = 'ui_page_loading',
  UiResult = 'ui_result',
  UiToast = 'ui_toast',
  MineInfo = 'mine_info',
  MineSkill = 'mine_skill',
  MineContact = 'mine_contact',
  MineHobby = 'mine_hobby',
  MineAssessment = 'mine_assessment'
}

export const nameMap = {
  [Pages.Index]: 'Vulcan',
  [Pages.Ui]: 'UI 组件',
  [Pages.Mine]: '我的',
  [Pages.UiCell]: 'Cell 组件',
  [Pages.UiIcon]: 'Icon 组件',
  [Pages.UiPopup]: 'Popup 组件',
  [Pages.UiInput]: 'Input 组件',
  [Pages.UiTextarea]: 'Textarea 组件',
  [Pages.UiRadio]: 'Radio 组件',
  [Pages.UiCheckbox]: 'Checkbox 组件',
  [Pages.UiTag]: 'Tag 组件',
  [Pages.UiTabs]: 'Tabs 组件',
  [Pages.UiLoading]: 'Loading 组件',
  [Pages.UiPageLoading]: 'Page Loading 组件',
  [Pages.UiResult]: 'Result 组件',
  [Pages.UiToast]: 'Toast 组件',
  [Pages.MineInfo]: '基本信息',
  [Pages.MineSkill]: '技能',
  [Pages.MineContact]: '联系方式',
  [Pages.MineHobby]: '爱好',
  [Pages.MineAssessment]: '自我评价'
}

export const mainPackageUrlMap = {
  [Pages.Index]: 'pages/index/index',
  [Pages.Ui]: 'pages/ui/index',
  [Pages.Mine]: 'pages/mine/index',
  [Pages.WebView]: 'pages/web-view/index'
}

// subpackages 里面的 root 已经添加了前缀
export const uiPackageUrlMap = {
  [Pages.UiCell]: 'cell/index',
  [Pages.UiIcon]: 'icon/index',
  [Pages.UiPopup]: 'popup/index',
  [Pages.UiInput]: 'input/index',
  [Pages.UiTextarea]: 'textarea/index',
  [Pages.UiRadio]: 'radio/index',
  [Pages.UiCheckbox]: 'checkbox/index',
  [Pages.UiTag]: 'tag/index',
  [Pages.UiTabs]: 'tabs/index',
  [Pages.UiLoading]: 'loading/index',
  [Pages.UiPageLoading]: 'page-loading/index',
  [Pages.UiResult]: 'result/index',
  [Pages.UiToast]: 'toast/index'
}

// subpackages 里面的 root 已经添加了前缀
export const minePackageUrlMap = {
  [Pages.MineInfo]: 'info/index',
  [Pages.MineSkill]: 'skill/index',
  [Pages.MineContact]: 'contact/index',
  [Pages.MineHobby]: 'hobby/index',
  [Pages.MineAssessment]: 'assessment/index'
}

// 之所以不用 urlMap，是因为小程序配置不允许 pages 是从斜杠开头的, 但是路由可以
export const routeMap = {
  [Pages.Index]: '/pages/index/index',
  [Pages.Ui]: '/pages/ui/index',
  [Pages.Mine]: '/pages/mine/index',
  [Pages.WebView]: '/pages/web-view/index',
  [Pages.UiCell]: '/pages/ui-pages/cell/index',
  [Pages.UiIcon]: '/pages/ui-pages/icon/index',
  [Pages.UiPopup]: '/pages/ui-pages/popup/index',
  [Pages.UiInput]: '/pages/ui-pages/input/index',
  [Pages.UiTextarea]: '/pages/ui-pages/textarea/index',
  [Pages.UiRadio]: '/pages/ui-pages/radio/index',
  [Pages.UiCheckbox]: '/pages/ui-pages/checkbox/index',
  [Pages.UiTag]: '/pages/ui-pages/tag/index',
  [Pages.UiTabs]: '/pages/ui-pages/tabs/index',
  [Pages.UiLoading]: '/pages/ui-pages/loading/index',
  [Pages.UiPageLoading]: '/pages/ui-pages/page-loading/index',
  [Pages.UiResult]: '/pages/ui-pages/result/index',
  [Pages.UiToast]: '/pages/ui-pages/toast/index',
  [Pages.MineInfo]: '/pages/mine-pages/info/index',
  [Pages.MineSkill]: '/pages/mine-pages/skill/index',
  [Pages.MineContact]: '/pages/mine-pages/contact/index',
  [Pages.MineHobby]: '/pages/mine-pages/hobby/index',
  [Pages.MineAssessment]: '/pages/mine-pages/assessment/index'
}

export const mainRoutes = Object.values(mainPackageUrlMap)

export const uiRoutes = Object.values(uiPackageUrlMap)

export const mineRoutes = Object.values(minePackageUrlMap)
