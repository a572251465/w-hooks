import { isNull } from './index'

export const isWindow = (obj: unknown) => {
  return !isNull(obj) && obj === (obj as Window).window
}
