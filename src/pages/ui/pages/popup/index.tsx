/**
 * @file ui popup page
 */

import React, { useState } from 'react'

import { View, Button } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Popup from '@/ui/Popup'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiPopup() {
  const [basicShow, setBasicShow] = useState(false)

  return (
    <Scaffold
      appBar={
        <AppBar
          title={nameMap.ui_popup}
          leading={<BackLeading />}
        />
      }
    >
      <View className={styles.main}>
        <View className={styles.title}>
          Basic
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => setBasicShow(true)}
          >
            Click here
          </Button>
        </View>
      </View>

      <Popup
        open={basicShow}
        onClose={() => setBasicShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>
    </Scaffold>
  )
}
