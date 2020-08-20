/**
 * @file index page
 */

import React, { useEffect } from 'react'

import { View, Text, Button } from 'remax/one'

import Demo from 'components/Demo'

import { useApi } from 'utils/hooks/api'

import { getUserInfo } from 'apis/user'

import styles from './index.less'

export default () => {
  const { $: userInfo, loading, call: callGetUserinfo } = useApi(getUserInfo)
  const name = userInfo && userInfo['name'] || 'nobody'

  useEffect(() => {
    callGetUserinfo()
  }, [callGetUserinfo])

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
