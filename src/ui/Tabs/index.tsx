/**
 * @file Tab UI Component
 */

import React, { ReactNode, createContext, useContext, ReactElement, useCallback, useState, CSSProperties, useRef } from 'react'
import cls from 'classnames'

import { View } from 'remax/one'

import { useOnChange } from '@/utils/hooks'

import styles from './style.less'

type ContextValue = {
  value: string | null
  onChange: (value: string) => void
}

const tabContext = createContext<ContextValue | null>(null)

// height 52px | 42px
export type Size = 'default' | 'small'

export type Theme = 'default' | 'white'

export type Props = {
  defaultValue?: string
  value?: string | null
  contentClassName?: string
  size?: Size
  shadow?: boolean
  theme?: Theme
  className?: string
  children: ReactNode
  onChange?: (value: string) => void
}

const sizeMap = {
  default: null,
  small: styles.small
}

const themeClassMap = {
  default: null,
  white: styles.themeWhite
}

export default function Tabs({
  defaultValue,
  value = null,
  contentClassName,
  size = 'default',
  shadow = true,
  theme = 'white',
  className,
  children,
  onChange
}: Props) {

  const [active, setActive] = useState(value || defaultValue || null)
  const tabList: ReactElement[] = []
  const tabPanes: ReactElement[] = []

  useOnChange(() => setActive(value), [value])

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) {
      return
    }

    if (isTab(child)) {
      tabList.push(child)
    }

    if (isTabPane(child)) {
      tabList.push(
        <Tab
          key={child.props.value}
          value={child.props.value}
        >
          {child.props.tab}
        </Tab>
      )
      tabPanes.push(child)
    }
  })

  const content = tabPanes.length > 0 && (
    <View className={cls(contentClassName)}>{tabPanes}</View>
  )

  const handleChange = useCallback((_value: string) => {
    if (onChange) {
      onChange(_value)
    }

    setActive(_value)
  }, [onChange])

  const mainCls = cls(
    styles.main,
    sizeMap[size],
    themeClassMap[theme],
    className
  )

  return (
    <tabContext.Provider value={{ onChange: handleChange, value: active }}>
      <View className={mainCls}>
        <View
          className={cls(
            styles.header,
            shadow && styles.shadow
          )}
        >
          {tabList}
        </View>
        {content}
      </View>
    </tabContext.Provider>
  )
}

function isTab(elm: ReactElement): elm is ReactElement<TabProps> {
  return elm.type === Tab
}

function isTabPane(elm: ReactElement): elm is ReactElement<TabPaneProps> {
  return elm.type === TabPane
}

export type TabProps = {
  value: string
  children: ReactNode
}

export function Tab({ value, children }: TabProps) {
  const contextValue = useContext(tabContext)
  if (!contextValue) {
    throw new Error('Component Tab should be used in Tabs.')
  }

  const active = contextValue.value === value
  const handleTap = () => !active && contextValue.onChange(value)
  const className = [styles.item, active && styles.active].filter(Boolean).join(' ')

  return (
    <View
      className={className}
      onTap={handleTap}
    >
      {children}
    </View>
  )
}

type TabPaneProps = {
  tab: ReactNode
  value: string
  className?: string
  autoDestroy?: boolean
  children?: ReactNode
  style?: CSSProperties
}

export function TabPane({
  tab,
  autoDestroy = false,
  value,
  children,
  style,
  className
}: TabPaneProps) {

  const tabsContext = useContext(tabContext)
  // 记录初始 tab 的加载状态
  const isFirstLoaded = useRef(true)

  if (!tab) {
    return null
  }

  if (autoDestroy) {
    if (tabsContext?.value === value) {
      return (
        <View
          className={cls(className)}
          style={style}
        >
          {children}
        </View>
      )
    }

    return null
  }

  // 支持缓存 tab 下的 的 children，当前 tab 一开始未被选中的情况下不加载 content
  // 一旦被加载后就被缓存下来，下次再进入当前 tab 可避免重新渲染
  // 如果不需要缓存，则使用 autoDestroy 即可
  if (tabsContext?.value !== value && isFirstLoaded.current) {
    return null
  }

  if (isFirstLoaded.current) {
    isFirstLoaded.current = false
  }

  return (
    <View
      className={cls(
        styles.content,
        className
      )}
      style={{
        display: tabsContext?.value === value ? 'block' : 'none',
        ...style
      }}
    >
      {children}
    </View>
  )
}
