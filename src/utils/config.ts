/**
 * @file config content
 */

import {
  AppConfig as WechatAppConfig,
  PageConfig as WechatPageConfig
} from 'remax/wechat'

import { routes, titlePrefix, Pages, urlMap } from '../constants/route'
import { iconMap as tabBarIconMap } from '../constants/tab-bar'

import { white, primaryColor, black } from './styles/color'

export function getWechatAppConfig(title?: string): WechatAppConfig {
  const appConfig: WechatAppConfig = {
    pages: [...routes],
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
        pagePath: urlMap[Pages.Index],
        text: '',
        iconPath: tabBarIconMap[Pages.Index].default,
        selectedIconPath: tabBarIconMap[Pages.Index].active
      }, {
        pagePath: urlMap[Pages.Ui],
        text: '',
        iconPath: tabBarIconMap[Pages.Ui].default,
        selectedIconPath: tabBarIconMap[Pages.Ui].active
      }, {
        pagePath: urlMap[Pages.Mine],
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
