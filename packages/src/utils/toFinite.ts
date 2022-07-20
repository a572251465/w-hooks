import { toNumber } from './toNumber'

const INFINITY = 1 / 0
const MAX_INTEGER = Number.MAX_VALUE

export function toFinite(value: unknown) {
  if (!value) {
    return value === 0 ? value : 0
  }
  const value1 = toNumber(value)
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1
    return sign * MAX_INTEGER
  }
  return value1 === value ? value : 0
}
