/**
 * @file config content
 */

import {
  AppConfig as WechatAppConfig,
  PageConfig as WechatPageConfig
} from 'remax/wechat'

import { white, primaryColor, black } from './styles/variables'
import { routes, titlePrefix, Pages, urlMap } from '../constants/route'
import { iconMap as tabBarIconMap } from '../constants/tab-bar'

export function getWechatAppConfig(title?: string): WechatAppConfig {
  const appConfig: WechatAppConfig = {
    pages: [...routes],
    window: {
      navigationBarTitleText: title || titlePrefix,
      navigationBarBackgroundColor: white,
      navigationBarTextStyle: 'black'
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
        pagePath: urlMap[Pages.Portal],
        text: '',
        iconPath: tabBarIconMap[Pages.Portal].default,
        selectedIconPath: tabBarIconMap[Pages.Portal].active
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

export function getWechatPageConfig(title?: string): WechatPageConfig {
  const pageConfig: WechatPageConfig = {
    navigationBarTitleText: title || titlePrefix
  }

  return pageConfig
}
