/**
 * @file crew index page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import './index.less'

export default function Mine() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.crew} />}>
      <UnderConstruction tip="页面开发中..." />
    </Scaffold>
  )
}
