/**
 * @file index page
 */

import React from 'react'

import { View, Image } from 'remax/one'

import styles from './index.less'

import testPNGURL from './_image/test.png'
import testFileSVGURL from './_image/test.file.svg'
// Remax issues 1253
// /base.wxml
// Template `REMAX_TPL_1_svg` not found.
// 3273 | 
// 3274 | <template name="REMAX_TPL_2_CONTAINER" data="{{i: i}}">
// > 3275 | 	<template is="{{_h.tid(i.type, a)}}" data="{{i: i, a: a + ',' + i.type, tid: 2}}" />
//     | 	             ^
// 3276 | </template>
// 3277 | 
// 3278 | <template name="REMAX_TPL_3_CONTAINER" data="{{i: i}}">
import TestSVGIcon from './_image/test.svg'

export default function Index() {
  return (
    <>
      <View
        className={styles.mainWrapper}
      >
        <TestSVGIcon />
        <Image src={testFileSVGURL} style={{width: '50px', height: '50px'}} />
        <Image src={testPNGURL} style={{width: '50px', height: '50px'}} />
      </View>
      <View
        className={styles.mainWrapper}
      >
        首页 - TODO
      </View>
    </>
  )
}
