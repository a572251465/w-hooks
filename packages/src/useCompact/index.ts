import { isArray, isFunction, isNull } from '../utils'

const useCompact = (array: unknown[] | null): unknown[] => {
  if (isNull(array) || !isArray(array!)) return []

  const result = []

  for (const item of array!) {
    if (isFunction(item)) {
      const res = (item as Function)()
      if (res) result.push(item)
      continue
    }

    if (!!item) result.push(item)
  }
  return result
}

export default useCompact
