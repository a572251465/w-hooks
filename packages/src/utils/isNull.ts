import { toType } from './toType'

export const isNull = (value: unknown) => toType(value) === 'null'
