/**
 * @file ui cell page
 */

import React from 'react'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import { nameMap } from '@/constants/route'

import './index.less'

export default function UiCell() {
  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_cell}
          leading={<BackLeading />}
        />
      }
    >
      UI Cell
    </Scaffold>
  )
}
