/**
 * @file ui page toast page
 */

import React from 'react'

import { View, Button } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import { useToast } from '@/utils/toast'

import styles from './index.less'

export default function UiToast() {
  const showToast = useToast()

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_toast}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Note
          <View className={styles.subTitle}>
            1. 推荐使用 utils/toast 中的 useToast hook 使用 toast
          </View>
          <View className={styles.subTitle}>
            2. 参数传递 ToastProps | undefined
          </View>
          <View className={styles.subTitle}>
            3. 若参数传入 undefined 则不显示 toast
          </View>
          <View className={styles.subTitle}>
            4. duration 默认值为 1500（1500ms）
          </View>
          <View className={styles.subTitle}>
            5. 若 duration 传 ≤0 的值则 toast 不会自动销毁
          </View>
          <View className={styles.subTitle}>
            6. 可查看 src/ui/Toast/README.md 中的 demo
          </View>
        </View>

        <View className={styles.title}>
          Loading
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'loading',
                tip: '加载中...'
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Success
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'success',
                tip: '成功'
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Warning
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'warning',
                tip: '警告'
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Fail
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'fail',
                tip: '失败'
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Without Icon
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                tip: '提示'
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Custom Duration
          <View className={styles.subTitle}>
            设置 toast 显示时间为 5s
          </View>
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'loading',
                tip: '加载中...',
                duration: 5000
              })
            }}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Cover Top Nav
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => {
              showToast({
                icon: 'success',
                tip: '成功',
                coverTopNav: true
              })
            }}
          >
            Click here
          </Button>
        </View>
      </View>
    </Scaffold>
  )
}
