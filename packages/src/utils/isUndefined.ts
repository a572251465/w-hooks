import { toType } from './toType'

export const isUndefined = (value: unknown) => toType(value) === 'undefined'
