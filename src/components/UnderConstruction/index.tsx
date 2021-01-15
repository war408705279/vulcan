/**
 * @file UnderConstruction Component
 */

import React, { ReactNode } from 'react'
import cls from 'classnames'

import { View, Image } from 'remax/one'

import Icon from './images/icon.svg'

import styles from './style.less'

export type Props = {
  tip: ReactNode
  className?: string
}

export default function UnderConstruction({
  tip,
  className
}: Props) {
  return (
    <View
      className={cls(
        styles.main,
        className
      )}
    >
      <Image
        src={Icon}
        className={styles.icon}
      />

      <View className={styles.tip}>
        {tip}
      </View>
    </View>
  )
}
