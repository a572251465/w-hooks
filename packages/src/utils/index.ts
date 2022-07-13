export const isFunction = (fn: unknown) => typeof fn === 'function'
export const isArray = (arr: unknown[]) => Array.isArray(arr)
export const isNumber = (num: unknown) => typeof num === 'number'
export const isUndefined = (value: unknown) => typeof value === 'undefined'
export { default as isBrowser } from './isBrowser'
