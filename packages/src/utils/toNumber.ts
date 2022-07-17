import { isSymbol } from './isSymbol'
import { isObject, isString } from './index'

const NAN = 0 / 0
const reIsBinary = /^0b[01]+$/i
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i
const reTrim = /^\s+|\s+$/g
const reIsOctal = /^0o[0-7]+$/i
const freeParseInt = parseInt

export const toNumber = (value: unknown) => {
  if (typeof value === 'number') return value

  if (isSymbol(value)) return NAN

  if (isObject(value)) {
    const other =
      typeof (value as object).valueOf === 'function'
        ? (value as object).valueOf()
        : value
    value = isObject(other) ? `${other}` : other
  }

  if (!isString(value)) {
    return value === 0 ? value : +(value as number)
  }

  value = (value as string).replace(reTrim, '')
  const isBinary = reIsBinary.test(value as string)
  // 分别是二进制 以及十六进制判断
  return isBinary || reIsOctal.test(value as string)
    ? freeParseInt((value as string).slice(2), isBinary ? 2 : 8)
    : reIsBadHex.test(value as string)
    ? NAN
    : +(value as string)
}
