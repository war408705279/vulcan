/**
 * @file mine assessment page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import './index.less'

export default function MineAssessment() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.mine_assessment} />}>
      <UnderConstruction
        tip="页面施工中..."
      />
    </Scaffold>
  )
}
