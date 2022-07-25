import { toType } from './toType'

export const isFunction = (value: unknown) => toType(value) === 'function'
