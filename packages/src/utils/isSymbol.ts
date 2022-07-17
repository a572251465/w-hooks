import { getTag } from './getTag'

export const isSymbol = (value: unknown) => {
  const type = typeof value
  return (
    type === 'symbol' ||
    (type === 'object' && !!value && getTag(value) === '[object Symbol]')
  )
}
