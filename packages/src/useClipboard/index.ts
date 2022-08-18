import { selector } from '../utils/selector'
import { select } from '../utils/select'
import IsBrowser from '../utils/isBrowser'

interface ICopy {
  (el: HTMLElement | string): Promise<string | boolean>
}

interface ICut {
  (el: HTMLElement | string): Promise<string | boolean>
}

interface IMoveToClipboard {
  (value: string): Promise<string | boolean>
}

const useClipboard = (): {
  copy: ICopy
  cut: ICut
  moveToClipboard: IMoveToClipboard
} => {
  if (!IsBrowser()) console.error(`must be running in browser`)
  if (!navigator.clipboard) {
    console.error(`not support API<navigator.clipboard> copy/ cut content fail`)
  }

  const copy: ICopy = (element: HTMLElement | string) => {
    const el = selector(element)
    const text = select(el as HTMLDivElement)
    return new Promise((resolve) => {
      if (!navigator.clipboard) {
        resolve(false)
        return
      }
      navigator.clipboard
        .writeText(text)
        .then(() => {
          resolve(text)
        })
        .catch(() => resolve(false))
    })
  }

  const cut: ICut = (element: HTMLElement | string) => {
    return new Promise((resolve) => {
      copy(element).then((res) => {
        if (res === '') return resolve(false)
        resolve(res)

        const dom = selector(element)!
        const isDisabledOrReadonly =
          dom.hasAttribute('disabled') || dom.hasAttribute('readonly')
        if (isDisabledOrReadonly) return

        // data clear
        const el = dom as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLDivElement
          | HTMLSpanElement
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          ;(el as HTMLInputElement | HTMLTextAreaElement).value = ''
        } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
          ;(el as HTMLDivElement | HTMLSpanElement).innerText = ''
        }
      })
    })
  }

  const moveToClipboard: IMoveToClipboard = (value: string) => {
    return new Promise((resolve) => {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          resolve(value)
        })
        .catch(() => {
          resolve(false)
        })
    })
  }

  return { copy, cut, moveToClipboard }
}

export default useClipboard
