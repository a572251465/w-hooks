import { INormalFn } from '../types'
import { isBrowser, isFunction } from '../utils'

const useMount = (fn: INormalFn): [INormalFn] => {
  if (!isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
    )
  }

  if (!isBrowser()) {
    console.error(`The running environment must be a window environment`)
  }

  const cb = (...args: any[]) => fn?.(...args)
  window.addEventListener('load', cb)

  const off = () => window.removeEventListener('load', cb)
  return [off]
}

export default useMount
