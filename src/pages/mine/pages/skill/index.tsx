/**
 * @file mine skill page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'
import UnderConstruction from '@/components/UnderConstruction'

import { nameMap } from '@/constants/route'

import './index.less'

export default function MineSkill() {
  return (
    <Scaffold appBar={<AppBar title={nameMap.mine_skill} leading={<BackLeading />} />}>
      <UnderConstruction
        tip="页面施工中..."
      />
    </Scaffold>
  )
}