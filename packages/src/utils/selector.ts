import { isObject } from './isObject'

export const selector = (el: HTMLElement | string): HTMLElement | null => {
  if (isObject(el)) return el as HTMLElement

  return document.querySelector(el as string)
}
