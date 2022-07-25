import { isFunction } from './isFunction'
import { isNull } from './isNull'
import { isUndefined } from './isUndefined'
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
