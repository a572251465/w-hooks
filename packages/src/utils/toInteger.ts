import { toFinite } from './toFinite'

export function toInteger(value: unknown) {
  const result = toFinite(value) as number
  const remainder = result % 1

  return remainder ? result - remainder : result
}
