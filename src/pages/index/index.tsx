/**
 * @file index page
 */

import React, { useState } from 'react'
import { useNativeEffect } from 'remax'

import { View, Text, Button } from 'remax/one'

import { getUserInfo as getUserInfoApi } from 'apis/user'

import styles from './index.less'

export default () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')

  async function getUserInfo() {
    setLoading(true)
    try {
      const { name } = await getUserInfoApi()
      setName(name)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useNativeEffect(() => {
    getUserInfo()
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
          onTap={() => getUserInfo()}
        >
          刷新用户名
        </Button>
      </View>
    </View>
  )
}
