/**
 * @file config content
 */

import {
  AppConfig as WechatAppConfig,
  PageConfig as WechatPageConfig
} from 'remax/wechat'

import {
  mainPackageUrlMap,
  indexRoutes,
  mainRoutes,
  uiRoutes,
  mineRoutes,
  titlePrefix,
  Pages
} from '../constants/route'
import { iconMap as tabBarIconMap } from '../constants/tab-bar'

import { white, primaryColor, black } from './styles/color'

export function getWechatAppConfig(title?: string): WechatAppConfig {
  const appConfig: WechatAppConfig = {
    pages: [...mainRoutes],
    subpackages: [{
      root: 'pages/index-pages',
      name: 'indexPackage',
      pages: [...indexRoutes]
    }, {
      root: 'pages/ui-pages',
      name: 'uiPackage',
      pages: [...uiRoutes]
    }, {
      root: 'pages/mine-pages',
      name: 'minePackage',
      pages: [...mineRoutes]
    }],
    window: {
      navigationBarTitleText: title || titlePrefix,
      navigationBarBackgroundColor: white,
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom'
    },
    tabBar: {
      color: black,
      selectedColor: primaryColor,
      backgroundColor: white,
      borderStyle: 'white',
      list: [{
        pagePath: mainPackageUrlMap[Pages.Index],
        text: '',
        iconPath: tabBarIconMap[Pages.Index].default,
        selectedIconPath: tabBarIconMap[Pages.Index].active
      }, {
        pagePath: mainPackageUrlMap[Pages.Ship],
        text: '',
        iconPath: tabBarIconMap[Pages.Ship].default,
        selectedIconPath: tabBarIconMap[Pages.Ship].active
      }, {
        pagePath: mainPackageUrlMap[Pages.Crew],
        text: '',
        iconPath: tabBarIconMap[Pages.Crew].default,
        selectedIconPath: tabBarIconMap[Pages.Crew].active
      }, {
        pagePath: mainPackageUrlMap[Pages.Ui],
        text: '',
        iconPath: tabBarIconMap[Pages.Ui].default,
        selectedIconPath: tabBarIconMap[Pages.Ui].active
      }, {
        pagePath: mainPackageUrlMap[Pages.Mine],
        text: '',
        iconPath: tabBarIconMap[Pages.Mine].default,
        selectedIconPath: tabBarIconMap[Pages.Mine].active
      }]
    }
  }

  return appConfig
}

export function getWechatPageConfig(config?: Omit<WechatPageConfig, 'navigationBarTitleText'>): WechatPageConfig {
  return { ...config }
}
