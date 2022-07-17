import { toNumber } from './toNumber'

const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e308

export function toFinite(value: unknown) {
  if (!value) {
    return value === 0 ? value : 0
  }
  value = toNumber(value)
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1
    return sign * MAX_INTEGER
  }
  return value === value ? value : 0
}
