import { isFunction, isObject } from './index'

export const isPromise = (p: unknown) =>
  isObject(p) && Reflect.has(p as object, 'then') && isFunction((p as any).then)
