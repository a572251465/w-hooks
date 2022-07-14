import { isString, isUndefined } from '../utils'
import { Cookie } from '../utils/Cookie'
import { CookieAttributes } from '../types'

export interface IGetCookie {
  <T>(cookieKey: string): T
}

export interface IGetCookies {
  (): Record<string, string>
}

export interface ISetCookie {
  (cookieKey: string, cookieValue: unknown, options?: CookieAttributes): boolean
}

const useCookie = <T extends string>(
  defaultKey?: string,
  defaultOptions?: CookieAttributes
): [IGetCookie, ISetCookie, IGetCookies] => {
  const getCookies = () => {
    return Cookie.get() as Record<string, string>
  }

  const getCookie = <T>(cookieKey?: string) => {
    cookieKey = cookieKey || defaultKey
    if (!isString(cookieKey)) {
      console.error(`cookie key must exist`)
    }

    const value = Cookie.get(cookieKey!)
    return value as any as T
  }
  const setCookie: ISetCookie = (cookieKey, cookieValue, options?) => {
    cookieKey = defaultKey || cookieKey
    if (!isString(cookieKey)) {
      console.error(`cookie key must string`)
    }

    // 如果value 是undefined 表示是删除
    if (isUndefined(cookieValue)) {
      Cookie.remove(cookieKey)
    } else {
      Cookie.set(cookieKey, cookieValue as string, defaultOptions || options)
    }
    return true
  }

  return [getCookie, setCookie, getCookies]
}

export default useCookie
