export const isEmptyObject = (obj: object): boolean => {
  let name
  for (name in obj) return false
  return true
}
