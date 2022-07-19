import { getTag } from './getTag'

export const toType = (obj: unknown) => {
  const res = getTag(obj)
  const matchArr = /\s+([a-zA-Z0-9]+)]/.exec(res)
  if (!matchArr) return ''
  return matchArr[1].toLowerCase()
}
