import { toInteger } from '../utils/toInteger'
import { isArrayLike } from '../utils/isArrayLike'
import { isArray, isNull, isUndefined } from '../utils'

const from = Array.from
const slice = Array.prototype.slice

const useArrayChunk = (array: unknown[], splitSize = 0): unknown[][] => {
  if (isUndefined(array) || isNull(array)) {
    console.error(`params <array> must be Array or ArrayLike`)
  }
  
  if (isArrayLike(array)) {
    array = from(array)
  }

  if (!isArray(array)) {
    console.error(`params <array> must be Array or ArrayLike`)
  }

  const size = Math.max(toInteger(splitSize), 0)
  if (array.length === 0 || size === 0) return [array]

  let index = 0,
    resIndex = 0
  const max = Math.ceil(array.length / size)
  const result = new Array(max)
  while (index < max) {
    result[index++] = slice.call(array, resIndex, (resIndex += size))
  }

  return result
}

export default useArrayChunk
