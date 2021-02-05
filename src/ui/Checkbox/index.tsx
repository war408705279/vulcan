/**
 * @file Checkbox UI Component
 */

import React, {
  ReactNode,
  ReactElement,
  CSSProperties,
  useState,
  useCallback,
  createContext,
  useContext
} from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import { useOnChange } from '@/utils/hooks'

import styles from './style.less'

type CheckboxValue = string | number | undefined

type ContextValue = {
  values: CheckboxValue[]
  onChange: (value: CheckboxValue) => void
}

const checkboxContext = createContext<ContextValue | null>(null)

export type CheckboxProps = {
  value?: CheckboxValue
  checked?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onChange?: (checked: boolean) => void
}

export default function Checkbox({
  value,
  checked,
  className,
  style,
  children,
  onChange
}: CheckboxProps) {

  const checkboxCtx = useContext(checkboxContext)
  if (checkboxCtx) checked = !!checkboxCtx.values.find(item => item === value)

  const handleTap = () => {
    if (onChange) onChange(!checked)

    if (checkboxCtx) checkboxCtx.onChange(value)
  }

  const childrenView = children && (
    <View
      className={cls(
        styles.children,
        checked && styles.highlight
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
      onTap={handleTap}
    >
      <View
        className={cls(
          styles.box,
          checked && styles.checked
        )}
      />
      {childrenView}
    </View>
  )
}

function isCheckbox(elm: ReactElement): elm is ReactElement<CheckboxProps> {
  return elm.type === Checkbox
}

export type CheckboxGroupProps = {
  values?: CheckboxValue[]
  defaultValues?: CheckboxValue[]
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onChange?: (values: CheckboxValue[]) => void
}

export function CheckboxGroup({
  values,
  defaultValues,
  className,
  style,
  children,
  onChange
}: CheckboxGroupProps) {

  const [activeList, setActiveList] = useState<CheckboxValue[]>(
    values || defaultValues || []
  )
  const checkboxList: ReactElement[] = []

  useOnChange(() => setActiveList(values || []), [values])

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return
    }

    if (isCheckbox(child)) {
      checkboxList.push(child)
    }
  })

  const handleChange = useCallback((_value: CheckboxValue) => {
    let newList: CheckboxValue[] = []
    const existed = !!activeList.find(item => item === _value)

    // 若存在则移除
    if (existed) newList = activeList.filter(item => item !== _value)
    // 若不存在则将 _value 拼接到数组中
    if (!existed) newList = [...activeList, _value]

    if (onChange) {
      onChange(newList)
    }

    setActiveList(newList)
  }, [activeList, onChange])

  return (
    <checkboxContext.Provider value={{ onChange: handleChange, values: activeList }}>
      <View
        className={cls(className)}
        style={{
          display: 'flex',
          ...style
        }}
      >
        {checkboxList}
      </View>
    </checkboxContext.Provider>
  )
}
