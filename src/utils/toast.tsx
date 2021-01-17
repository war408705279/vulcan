/**
 * @file toast content
 * @description 提供直接调用 Toast 组件的方法
 */

import React, { ReactNode, useState, createContext, useContext, useEffect } from 'react'

import Toast, { Props as ToastProps } from '@/ui/Toast'

export type setCurrentPropsFn = (props: ToastProps | undefined) => void

export type ToastContextValue = {
  currentProps: ToastProps | undefined
  setCurrentProps: setCurrentPropsFn
}

export const toastContext = createContext<ToastContextValue | null>(null)

export type ToastProviderProps = {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [currentProps, setCurrentProps] = useState<ToastProps>()

  return (
    <toastContext.Provider value={{ currentProps, setCurrentProps }}>
      {children}
    </toastContext.Provider>
  )
}

export function ToastConsumer() {
  const ctxValue = useContext(toastContext)
  if (!ctxValue) {
    throw new Error('Missing `ToastProvider`.')
  }

  const { currentProps, setCurrentProps } = ctxValue

  useEffect(() => {
    if (!currentProps) return
    const { duration = 1500 } = currentProps
    if (duration <= 0) return
    const timeout = setTimeout(() => {
      setCurrentProps(undefined)
    }, duration)
    return () => clearTimeout(timeout)
  }, [currentProps, setCurrentProps])

  return currentProps ? <Toast {...currentProps} /> : null
}

export function useToast() {
  const ctxValue = useContext(toastContext)
  if (!ctxValue) {
    throw new Error('Missing `ToastProvider`.')
  }

  const { setCurrentProps } = ctxValue
  return setCurrentProps
}
