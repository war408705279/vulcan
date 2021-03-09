/**
 * @file 接口调用相关辅助 hooks
 */

import { useState, useCallback, useEffect, useRef } from 'react'

import { debounce } from 'lodash'

export type ApiMethod = (...args: any) => Promise<any>
export type CallFor<F extends ApiMethod> = (...args: Parameters<F>) => void
export type ResultFor<F extends ApiMethod, RT = ReturnType<F>> = RT extends Promise<infer R> ? (R | null) : never

export type UseApiOptions = {
  /** 延时，为 `call`（接口调用）添加 debounce 效果 */
  delay?: number
}

// 标识当前组件是否存活（未被销毁）的信息
function useAlive() {
  const aliveRef = useRef(true)

  useEffect(() => () => {
    aliveRef.current = false
  }, [])

  return aliveRef
}

export function useApi<F extends ApiMethod>(
  /** API 实现函数，预期参数为 API 调用参数，返回值为包裹 API 请求结果的 Promise */
  apiMethod: F,
  /** 其他配置项，如防抖等 */
  _options?: UseApiOptions
) {
  const options = {
    delay: 0,
    ..._options
  }

  const [result, setResult] = useState<ResultFor<F> | null>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const alive = useAlive()

  // eslint-disable-next-line no-underscore-dangle
  let _call: CallFor<F> = (...args: any[]) => {
    setLoading(true)
    apiMethod(...args).then(
      res => {
        if (!alive.current) return
        setResult(res)
        setError(null)
      },
      e => {
        if (!alive.current) return
        // eslint-disable-next-line no-console
        console.warn('[API_ERROR]', e)
        setResult(null)
        setError(e)
      }
    ).then(() => {
      if (!alive.current) return
      setLoading(false)
    })
  }

  if (options.delay > 0) {
    const debounced = debounce(_call, options.delay)
    _call = (...args: Parameters<F>) => {
      // 如果被 debounce 处理过，一旦 `call` 被调用，即
      // 执行到这里就应该设置 `loading: true`
      setLoading(true)
      debounced(...args)
    }
  }

  const call = useCallback(_call, [apiMethod, options.delay])

  return {
    $: result,
    error,
    loading,
    call
  }
}

export type UseApiWithParamsOptions<F extends ApiMethod> = UseApiOptions & {
  /** 请求参数，为 null / undefined 则不请求 */
  params?: Parameters<F> | null
}

/**
 * 通过给定的参数使用 API，即，参数发生变更自动调用之
 */
export function useApiWithParams<F extends ApiMethod>(
  /** API 实现函数，预期参数为 API 调用参数，返回值为包裹 API 请求结果的 Promise */
  apiMethod: F,
  /** 其他配置项，如参数、防抖等 */
  { params, ...options }: UseApiWithParamsOptions<F>
) {
  const { call: callWithParams, ...others } = useApi(apiMethod, options)

  const call = useCallback(
    () => {
      if (params) callWithParams(...params)
    },
    [callWithParams].concat(params || []) // eslint-disable-line react-hooks/exhaustive-deps
  )

  // 参数变更 -> call 变更 -> 重新执行 call
  useEffect(call, [call])

  return { ...others, call }
}
