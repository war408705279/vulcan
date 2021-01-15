/**
 * @file index hooks
 * @description copy from https://github.com/qbox/www/blob/2020/front/2020/hooks/index.ts
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { ComposibleValidatable } from 'formstate-x'

/**
 * 类似 useEffect，区别是不会自动触发第一次执行，仅后续 deps 发生变更时才会执行
 * 相当于不带 `fireImmediately: true` 的 `reaction()`
 */
export function useOnChange(handler: () => void, deps: any[]) {
  const firstRef = useRef(true)
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false
      return
    }
    handler()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export function useWhen(finished: boolean) {
  const [resolvers, setResolvers] = useState<Array<() => void>>([])

  useEffect(() => {
    if (finished) {
      resolvers.forEach(resolve => resolve())
      setResolvers([])
    }
  }, [finished]) // eslint-disable-line react-hooks/exhaustive-deps

  const createPromise = useCallback(() => {
    const promise = new Promise<void>(resolve => {
      setResolvers(v => [...v, resolve])
    })
    return promise
  }, [])

  return createPromise
}

export function useFormState<F extends ComposibleValidatable<any>>(createFormState: () => F): F {
  const [state] = useState(createFormState)
  useEffect(() => state.dispose, [state])
  return state
}
