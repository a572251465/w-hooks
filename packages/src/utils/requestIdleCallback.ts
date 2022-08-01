import { INormalFn } from '../types'
import { isFunction } from './isFunction'
import { isNumber } from './isNumber'

const messageChannel = new MessageChannel()
const activeFrameTime = 1000 / 60
const getTime = () => performance.now()
let frameDeadline = 0
let pendingCallback: INormalFn | null = null
const timeRemaining = () => frameDeadline - getTime()
// 表示是否执行任务
let idleTimeout: null | NodeJS.Timeout = null

messageChannel.port2.onmessage = () => {
  const currentTime = getTime()
  const didTimeout = frameDeadline <= currentTime

  // 如果没有过期
  if (timeRemaining() > 1) {
    if (idleTimeout) {
      clearTimeout(idleTimeout)
      idleTimeout = null
    }
    if (pendingCallback && isFunction(pendingCallback))
      pendingCallback({
        didTimeout,
        timeRemaining
      })
  }
}

const requestIdleCallback = (
  callback: INormalFn,
  options: { timeout?: number } = {}
) => {
  if (!isFunction(callback)) {
    throw new Error('callback must be a function')
  }

  const { timeout } = options
  if (isNumber(timeout) && (timeout as number) > 0) {
    idleTimeout = setTimeout(() => {
      callback({ didTimeout: true, timeRemaining: () => 0 })
      clearTimeout(idleTimeout as NodeJS.Timeout)
      idleTimeout = null
    }, timeout)
  }

  // rafTime 距离绘制的时间
  requestAnimationFrame((rafTime) => {
    pendingCallback = callback

    // 一般情况下一帧是60hz
    // rafTime 表示到绘制之前的时间
    // activeFrameTime 表示一帧使用的时间
    // rafTime + activeFrameTime 就是从触发requestAnimationFrame 到下次绘制之前总共时间
    frameDeadline = rafTime + activeFrameTime
    messageChannel.port1.postMessage(null)
  })
}

export { requestIdleCallback }
