import { toType } from './toType'

export const isArray = (value: unknown) => toType(value) === 'array'
