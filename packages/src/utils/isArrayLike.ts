import { isFunction, isNull, isObject, isUndefined } from './index'
import { toType } from './toType'
import { isWindow } from './isWindow'

export const isArrayLike = <T extends { length: number }>(arrayLike: T) => {
  const length = !!arrayLike && arrayLike.length

  if (
    isNull(arrayLike) ||
    isUndefined(arrayLike) ||
    isFunction(arrayLike) ||
    isWindow(arrayLike) ||
    isUndefined(length) ||
    isNull(length)
  )
    return false

  return true
}
