/**
 * @file temp view index page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import './index.less'

export default function TempView() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.temp_view}
          leading={<BackLeading />}
        />
      }
    >
      <UnderConstruction tip="页面开发中..." />
    </Scaffold>
  )
}
