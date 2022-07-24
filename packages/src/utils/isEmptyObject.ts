import { isPlainObject } from './isPlainObject'

export const isEmptyObject = (obj: object): boolean => {
  if (!isPlainObject(obj) || Object.getOwnPropertySymbols(obj).length > 0)
    return false

  let name
  for (name in obj) return false
  return true
}
