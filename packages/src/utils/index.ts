export const isFunction = (fn: unknown) => typeof fn === 'function'
export const isArray = (arr: unknown[]) => Array.isArray(arr)
export { default as isBrowser } from './isBrowser'
