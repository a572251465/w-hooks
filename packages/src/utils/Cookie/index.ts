import { CookieAttributes } from '../../types'
import { isNumber } from '../isNumber'
import { isUndefined } from '../isUndefined'
import { converter } from '../converter'
import { mergeAssign } from '../mergeAssign'

const set = (name: string, value: string, attributes?: CookieAttributes) => {
  if (isUndefined(document)) return

  attributes = mergeAssign({}, { path: '/' }, attributes)! as CookieAttributes
  if (isNumber(attributes!.expires)) {
    attributes.expires = new Date(
      Date.now() + (attributes.expires as number) * 864e5
    )
  }

  if (attributes.expires) {
    attributes.expires = (attributes.expires as Date).toUTCString() as any
  }

  name = encodeURIComponent(name)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape)

  let stringifiedAttributes = ''
  for (const attributeName in attributes) {
    if (!attributes[attributeName]) {
      continue
    }

    stringifiedAttributes += '; ' + attributeName
    if (attributes[attributeName] === true) {
      continue
    }
    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
  }

  const cookie = name + '=' + converter.write(value) + stringifiedAttributes
  return (document.cookie = cookie)
}

const get = (name?: string) => {
  if (isUndefined(document)) return

  const cookies = document.cookie ? document.cookie.split('; ') : []
  const jar: Record<string, string> = {}
  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split('=')
    let value = parts.slice(1).join('=')

    try {
      let found = decodeURIComponent(parts[0])
      jar[found] = converter.read(value)

      if (name === found) {
        break
      }
    } catch (e) {}
  }

  return name ? jar[name] : jar
}

const remove = (name: string, attributes: CookieAttributes = {}) => {
  set(
    name,
    '',
    mergeAssign({}, attributes, {
      expires: -1
    })
  )
}

export const Cookie = {
  get,
  set,
  remove
}
