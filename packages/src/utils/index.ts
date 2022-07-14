export const isFunction = (fn: unknown) => typeof fn === 'function'
export const isArray = (arr: unknown[]) => Array.isArray(arr)
export const isString = (value: unknown) => typeof value === 'string'
export const isNumber = (num: unknown) => typeof num === 'number'
export const isUndefined = (value: unknown) => typeof value === 'undefined'
export { default as isBrowser } from './isBrowser'

export function mergeAssign(target: Record<string, any>, ...args: any[]) {
  let i = 0
  for (; i < arguments.length; i += 1) {
    const source = arguments[i]
    for (const key in source) {
      target[key] = source[key]
    }
  }
  return target
}

export const converter = {
  read: function (value: string) {
    if (value[0] === '"') {
      value = value.slice(1, -1)
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value: string) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
}
