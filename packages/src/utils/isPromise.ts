import { isObject } from './isObject'
import { isFunction } from './isFunction'
import { toType } from './toType'

export const isPromise = (p: unknown) =>
  (isObject(p) || toType(p) === 'promise') &&
  Reflect.has(p as object, 'then') &&
  isFunction((p as any).then)
