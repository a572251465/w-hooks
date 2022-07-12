import { INormalFn } from '../types'
import { isBrowser, isFunction } from '../utils'

const useMount = (
  fn: INormalFn,
  props: { isWindow?: boolean } = { isWindow: true }
): [INormalFn] | undefined => {
  if (!isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`
    )
  }

  if (!isBrowser()) {
    console.error(`The running environment must be a window environment`)
  }

  const cb = (...args: any[]) => fn?.(...args)
  if (props.isWindow) {
    window.addEventListener('load', cb)

    const off = () => window.removeEventListener('load', cb)
    return [off]
  } else {
    requestAnimationFrame(cb)
  }
}

export default useMount
