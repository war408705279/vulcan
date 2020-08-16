/**
 * @file Demo components
 */

import classnames from 'classnames'
import React, { HTMLAttributes } from 'react'

import { View, Text } from 'remax/one'

import styles from './style.less'

export type Props = HTMLAttributes<HTMLElement> & {
  content?: string
}

export default function Demo(props: Props) {
  const {
    content = 'demo',
    className,
  } = props

  return (
    <View
      className={classnames(styles.main, className)}
    >
      <Text>{content}</Text>
    </View>
  )
}
