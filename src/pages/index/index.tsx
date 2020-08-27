/**
 * @file index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import styles from './index.less'

import testOne from './_image/test.png'
import testTwo from './_image/test.file.svg'
// import TestIconSVG from './_image/test.svg'

export default function Index() {
  return (
    <>
      <View
        className={styles.mainWrapper}
      >
        {/* <TestIconSVG /> */}
        <Image src={testTwo} style={{width: '50px', height: '50px'}} />
        <Image src={testOne} style={{width: '50px', height: '50px'}} />
      </View>
      <View
        className={styles.mainWrapper}
      >
        首页 - TODO
      </View>
    </>
  )
}
