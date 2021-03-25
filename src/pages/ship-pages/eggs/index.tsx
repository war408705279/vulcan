/**
 * @file ship eggs page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import './index.less'

export default function ShipEggs() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ship_eggs}
          leading={<BackLeading />}
        />
      }
    >
      <UnderConstruction tip="页面开发中..." />
    </Scaffold>
  )
}
