const toString = Object.prototype.toString

export function getTag(value: unknown) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
