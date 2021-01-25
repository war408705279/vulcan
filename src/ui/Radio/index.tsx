/**
 * @file Radio + Radio Group UI Component
 */

import React, { ReactNode, createContext, useContext, ReactElement, useState, useCallback, CSSProperties } from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import { useOnChange } from '@/utils/hooks'

import styles from './style.less'

type RadioValue = string | number | undefined

type RadioType = 'button' | 'radio'

type ContextValue = {
  value: RadioValue
  onChange: (value: RadioValue) => void
  type: RadioType
}

const radioContext = createContext<ContextValue | null>(null)

export type RadioProps = {
  value?: RadioValue
  checked?: boolean
  className?: string
  style?: CSSProperties
  circleCls?: string
  children?: ReactNode
  onChange?: (checked: boolean) => void
}

export default function Radio({
  value,
  checked,
  className,
  style,
  circleCls,
  children,
  onChange
}: RadioProps) {

  const radioCtx = useContext(radioContext)
  if (radioCtx) checked = radioCtx.value === value

  const handleTap = () => {
    if (onChange) onChange(!checked)

    if (radioCtx) radioCtx.onChange(value)
  }

  const checkedView = checked && (
    <View className={styles.innerCircle} />
  )

  const childrenView = children && (
    <View
      className={cls(
        styles.children,
        checked && styles.checked
      )}
    >
      {children}
    </View>
  )

  return (
    <View
      className={cls(
        styles.main,
        className
      )}
      style={style}
    >
      <View
        className={styles.container}
        onTap={handleTap}
      >
        {radioCtx?.type === 'button' ? (
          <View
            className={cls(
              styles.buttonRadio,
              checked && styles.checked
            )}
          >
            {children}
          </View>
        ) : (
          <>
            <View
              className={cls(
                styles.outerCircle,
                circleCls && circleCls,
                checked && styles.checked
              )}
            >
              {checkedView}
            </View>
            {childrenView}
          </>
        )}
      </View>
    </View>
  )
}

function isRadio(elm: ReactElement): elm is ReactElement<RadioProps> {
  return elm.type === Radio
}

export type RadioGroupProps = {
  value?: RadioValue
  defaultValue?: RadioValue
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onChange?: (value: RadioValue) => void
  type?: RadioType
}

export function RadioGroup({
  defaultValue,
  value,
  className,
  style,
  children,
  onChange,
  type = 'radio'
}: RadioGroupProps) {

  const [active, setActive] = useState<RadioValue>(value || defaultValue)
  const radioList: ReactElement[] = []

  useOnChange(() => setActive(value), [value])

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return
    }

    if (isRadio(child)) {
      radioList.push(child)
    }
  })

  const handleChange = useCallback((_value: RadioValue) => {
    if (onChange) {
      onChange(_value)
    }

    setActive(_value)
  }, [onChange])

  return (
    <radioContext.Provider value={{ onChange: handleChange, value: active, type }}>
      <View
        className={cls(className)}
        style={{
          display: 'flex',
          ...style
        }}
      >
        {radioList}
      </View>
    </radioContext.Provider>
  )
}
