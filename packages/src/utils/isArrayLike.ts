import { isFunction, isNumber } from './index'

export const isArrayLike = <T extends { length: number }>(arrayLike: T) => {
  return !isFunction(arrayLike) && isNumber(arrayLike.length)
}
