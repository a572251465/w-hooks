import { INormalFn } from '../types'
import { isFunction, isNumber, isObject } from '../utils'

export type IUseIntervalOptions = Partial<{
  interval: number
  conditionCb: () => boolean
}>

const useInterval = (
  fn: INormalFn,
  options: IUseIntervalOptions | number
): [INormalFn] => {
  let interval = 0,
    conditionCb: INormalFn | undefined = undefined
  if (isNumber(options)) {
    interval = options as number
  } else if (isObject(options)) {
    interval = (options as IUseIntervalOptions).interval || 0
    conditionCb = (options as IUseIntervalOptions).conditionCb
  }
  let timer: null | number

  timer = window.setInterval(() => {
    const result =
      conditionCb && isFunction(conditionCb) ? !!conditionCb() : false
    if (result) {
      clearInterval(timer!)
      timer = null
    }
    fn()
  }, interval)

  const closeInterval = () => {
    if (timer === null) return

    clearInterval(timer)
    timer = null
  }

  return [closeInterval]
}

export default useInterval
