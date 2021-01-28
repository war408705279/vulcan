/**
 * @file ui popup page
 */

import React, { useState } from 'react'
import cls from 'classnames'

import { View, Button } from 'remax/one'

import Scaffold from '@/components/Scaffold'
import AppBar from '@/components/AppBar'
import BackLeading from '@/components/AppBar/BackLeading'

import Popup from '@/ui/Popup'

import { nameMap } from '@/constants/route'

import styles from './index.less'

export default function UiPopup() {
  const [basicShow, setBasicShow] = useState(false)
  const [closeableShow, setCloseableShow] = useState(false)
  const [withoutMaskShow, setWithoutMaskShow] = useState(false)
  const [maskCoverTopNavShow, setMaskCoverTopNavShow] = useState(false)
  const [topShow, setTopShow] = useState(false)
  const [rightShow, setRightShow] = useState(false)
  const [bottomShow, setBottomShow] = useState(false)
  const [leftShow, setLeftShow] = useState(false)
  const [squareShow, setSquareShow] = useState(false)

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

        <View className={styles.title}>
          Closeable
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => setCloseableShow(true)}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Without Mask
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => setWithoutMaskShow(true)}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Mask Cover Top Nav
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => setMaskCoverTopNavShow(true)}
          >
            Click here
          </Button>
        </View>

        <View className={styles.title}>
          Position
        </View>
        <View
          className={cls(
            styles.container,
            styles.inline
          )}
        >
          <Button
            className={styles.button}
            onTap={() => setTopShow(true)}
          >
            Top
          </Button>

          <Button
            className={styles.button}
            onTap={() => setRightShow(true)}
          >
            Right
          </Button>

          <Button
            className={styles.button}
            onTap={() => setBottomShow(true)}
          >
            Bottom
          </Button>

          <Button
            className={styles.button}
            onTap={() => setLeftShow(true)}
          >
            Left
          </Button>
        </View>

        <View className={styles.title}>
          Square
        </View>
        <View className={styles.container}>
          <Button
            className={styles.button}
            onTap={() => setSquareShow(true)}
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

      <Popup
        open={closeableShow}
        closeable
        onClose={() => setCloseableShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={withoutMaskShow}
        closeable
        mask={false}
        onClose={() => setWithoutMaskShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={maskCoverTopNavShow}
        closeable
        coverTopNav
        onClose={() => setMaskCoverTopNavShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={topShow}
        position="top"
        onClose={() => setTopShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={rightShow}
        position="right"
        onClose={() => setRightShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={bottomShow}
        position="bottom"
        onClose={() => setBottomShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={leftShow}
        position="left"
        onClose={() => setLeftShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>

      <Popup
        open={squareShow}
        square
        closeable
        onClose={() => setSquareShow(false)}
      >
        <View className={styles.content}>
          Content
        </View>
      </Popup>
    </Scaffold>
  )
}
