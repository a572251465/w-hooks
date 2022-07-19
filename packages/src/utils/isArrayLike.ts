import { isFunction } from './index'
import { toType } from './toType'
import { isWindow } from './isWindow'

export const isArrayLike = <T extends { length: number }>(arrayLike: T) => {
  const length = !!arrayLike && arrayLike.length,
    type = toType(arrayLike)

  if (isFunction(arrayLike) || isWindow(arrayLike)) return false

  return (
    type === 'array' ||
    length === 0 ||
    (toType(length) === 'number' && length > 0 && length - 1 in arrayLike)
  )
}
