import { toType } from './toType'

export const isObject = (value: unknown) => toType(value) === 'object'
