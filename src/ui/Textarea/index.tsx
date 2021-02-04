/**
 * @file Textarea UI Component
 */

import React, { ReactNode, CSSProperties, useState } from 'react'
import { Textarea, TextareaProps, View } from 'remax/one'
import cls from 'classnames'

import Cell from '@/ui/Cell'

import { IconType } from '@/constants/icon'

import { primaryColor, greyFour } from '@/utils/styles/color'

import styles from './style.less'

type TextareaAlignType = 'left' | 'center' | 'right'

export type Props = TextareaProps & {
  label?: ReactNode
  textareaAlign?: TextareaAlignType
  icon?: string | IconType
  iconActiveColor?: string
  required?: boolean
  description?: ReactNode
  extra?: ReactNode
  textareaCls?: string
  leftStyle?: CSSProperties
  onChange?: (e: any) => void
}

export default function MTextarea({
  className,
  label,
  textareaAlign,
  icon,
  iconActiveColor = primaryColor,
  required,
  description,
  extra,
  textareaCls,
  leftStyle,
  onChange,
  name,
  placeholder,
  value,
  disabled,
  maxLength,
  onBlur,
  onFocus,
  onConfirm
}: Props) {

  const [focus, setFocus] = useState(false)

  const handleOnInput = (e: any) => {
    if (onChange) onChange(e)
  }

  const handleOnBlur = (e: any) => {
    setFocus(false)
    if (onBlur) onBlur(e)
  }

  const handleOnFocus = (e: any) => {
    setFocus(true)
    if (onFocus) onFocus(e)
  }

  const handleOnConfirm = (e: any) => {
    if (onConfirm) onConfirm(e)
  }

  const textareaElement = (
    <Textarea
      className={cls(
        styles.textarea,
        textareaCls,
        textareaAlign === 'right' && styles.alignRight,
        textareaAlign === 'center' && styles.alignCenter
      )}
      placeholderStyle={{
        color: greyFour
      }}
      name={name}
      value={value}
      placeholder={!focus && !value ? placeholder : ''}
      disabled={disabled}
      maxLength={maxLength}
      onInput={handleOnInput}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      onConfirm={handleOnConfirm}
    />
  )

  const extraView = extra && (
    <View className={styles.extra}>{extra}</View>
  )

  return (
    <Cell
      className={cls(className)}
      label={label}
      leftStyle={leftStyle}
      required={required}
      icon={icon}
      iconColor={focus ? iconActiveColor : greyFour}
      description={description}
    >
      <View className={styles.wrapper}>
        {textareaElement}
        {extraView}
      </View>
    </Cell>
  )
}
