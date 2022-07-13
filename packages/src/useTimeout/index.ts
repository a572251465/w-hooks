import { INormalFn } from '../types'
import { isNumber, isUndefined } from '../utils'

function useTimeout(fn: INormalFn, delay?: number) {
  if (!isNumber(delay) && !isUndefined(delay)) {
    console.error(`params <delay> no value transfer or must be a number`)
  }
  delay = delay || 0

  let timer: null | NodeJS.Timeout
  timer = setTimeout(() => {
    fn()
    clearTimeout(timer!)
    timer = null
  }, delay)
}

export default useTimeout
