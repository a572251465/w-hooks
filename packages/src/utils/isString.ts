import { toType } from './toType'

export const isString = (value: unknown) => toType(value) === 'string'
