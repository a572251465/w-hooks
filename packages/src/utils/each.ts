import { INormalFn } from '../types'
import { isArray } from './isArray'
import { isArrayLike } from './isArrayLike'
import { isObject } from './isObject'

export const each = (
  objOrArr: object | unknown[],
  cb: INormalFn,
  _self?: Window
): boolean => {
  if (
    !isObject(objOrArr) &&
    !isArray(objOrArr) &&
    !isArrayLike(objOrArr as unknown[])
  ) {
    console.warn(`${objOrArr} non iterator`)
    return false
  }

  _self = self || this
  if (isArray(objOrArr) || isArrayLike(objOrArr as unknown[])) {
    const arr = objOrArr as unknown[]
    let i = 0

    for (; i < arr.length; i += 1) {
      const item = arr[i]
      const result = cb.call(_self, item, i)
      if (result === false) return false
    }
  } else {
    const obj = objOrArr as Record<string, any>
    for (const item in obj) {
      const result = cb.call(_self, obj[item], item)
      if (result === false) return false
    }
  }
  return true
}
