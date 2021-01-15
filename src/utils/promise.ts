/**
 * @file promise content
 */

export interface PromisifyArgs<SuccessArg, FailArg> {
  success?: (args: SuccessArg) => void
  fail?: (args: FailArg) => void
}

// copy from https://github.com/remaxjs/promise-mini-api/blob/master/promisify.ts
export function promisify<Arg = any, SuccessArg = any, FailArg = any>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg> = {} as Arg) => {
    const promise = new Promise<SuccessArg>((resolve, reject) => {
      const promisifyArg: any = arg

      api({
        ...promisifyArg,
        success: (res: SuccessArg) => {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res)
          }
          resolve(res)
        },
        fail: (res: FailArg) => {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res)
          }
          reject(res)
        }
      })
    })
    return promise
  }
}

export function isPromise(obj: any): obj is Promise<any> {
  if (!obj) {
    return false
  }

  if (typeof obj === 'object' || typeof obj === 'function') {
    if (typeof obj.then === 'function') {
      return true
    }
  }

  return false
}
