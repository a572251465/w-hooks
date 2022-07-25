import { toType } from './toType'

export const isNumber = (value: unknown) => toType(value) === 'number'
