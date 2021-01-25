/**
 * @file Input UI Component
 */

import React, { ReactNode, CSSProperties, useState } from 'react'
import { Input, InputProps, View } from 'remax/one'
import cls from 'classnames'

import Cell from '@/ui/Cell'

import { IconType } from '@/constants/icon'

import { primaryColor, greyFour } from '@/utils/styles/color'

import styles from './style.less'

export type Props = InputProps & {
  label?: ReactNode
  inputAlign?: string
  icon?: string | IconType
  iconActiveColor?: string
  required?: boolean
  description?: ReactNode
  extra?: ReactNode
  leftStyle?: CSSProperties
  arrow?: boolean
  onChange?: (e: any) => void
}

export default function MInput({
  className,
  label,
  inputAlign,
  icon,
  iconActiveColor = primaryColor,
  required,
  description,
  extra,
  leftStyle,
  arrow,
  onChange,
  name,
  type,
  password,
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

  const inputElement = (
    <Input
      className={cls(
        styles.input,
        inputAlign === 'right' && styles.alignRight,
        inputAlign === 'center' && styles.alignCenter
      )}
      placeholderStyle={{
        color: greyFour
      }}
      name={name}
      type={type}
      password={password}
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

  function renderExtra() {
    if (!extra) {
      return null
    }

    return (
      <View className={styles.extra}>{extra}</View>
    )
  }

  return (
    <Cell
      className={cls(className)}
      label={label}
      leftStyle={leftStyle}
      required={required}
      icon={icon}
      iconColor={focus ? iconActiveColor : greyFour}
      description={description}
      arrow={arrow}
    >
      <View className={styles.wrapper}>
        {inputElement}
        {renderExtra()}
      </View>
    </Cell>
  )
}
