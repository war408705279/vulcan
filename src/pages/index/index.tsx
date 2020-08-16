/**
 * @file index page
 */

import React from 'react'
import { useNativeEffect } from 'remax'

import { View, Text, Button } from 'remax/one'

import Demo from 'components/Demo'

import { useApi } from 'hooks/api'

import { getUserInfo } from 'apis/user'

import styles from './index.less'

export default () => {
  const { $: userInfo, loading, call: callGetUserinfo } = useApi(getUserInfo)
  const name = userInfo && userInfo['name'] || 'nobody'

  useNativeEffect(() => {
    callGetUserinfo()
  }, [])

  return (
    <View
      className={styles.mainWrapper}
    >
      <View
        className={styles.textWrapper}
      >
        <Text>Hi, {name}</Text>
      </View>

      <View
        className={styles.buttonWrapper}
      >
        <Button
          wechat-type="primary"
          wechat-size="mini"
          disabled={loading}
          onTap={() => callGetUserinfo()}
        >
          刷新用户名
        </Button>
      </View>

      <Demo
        className={styles.demoWrapper}
        content="This is a demo component"
      />
    </View>
  )
}
