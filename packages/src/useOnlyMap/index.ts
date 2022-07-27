/**
 * add 添加元素
 * has 判单元素是否存在
 * delete 删除元素
 * clear 方法 进行清空
 * size 方法
 * values 获取集合中所有的值
 * keys 获取集合中的key值
 * entries 迭代
 * forEach 迭代
 * for of
 *
 * 并集
 * 交集
 * 差集
 * 子集
 */

import { each } from '../utils'
import { create } from '../utils/var/create'

interface IAdd<T> {
  (keyName: string, value: T): boolean
}
interface ISet<T> {
  (keyName: string, value: T): boolean
}
interface IHas {
  (keyName: string): boolean
}
interface IDelete<T> {
  (keyName: string): boolean | T
}
interface IClear {
  (): void
}
interface ISize {
  (): number
}
interface IValues<T> {
  (): T[]
}
interface IKeys {
  (): string[]
}
interface IForeach {
  (cb: (...args: any[]) => any): void
}

interface IGet<T> {
  (keyName: string): boolean | T
}

class OnlyMap<T> {
  public obj!: Record<string, T>
  public length!: number
  constructor() {
    this.obj = create(null)
    this.length = 0
  }

  [Symbol.iterator] = () => {
    let i = 0,
      len = this.length
    const values = this.values()
    return {
      next() {
        return {
          value: values[i],
          done: i++ >= len
        }
      }
    }
  }

  add(keyName: string, value: T): boolean {
    if (this.has(keyName)) return false

    this.obj[keyName] = value
    this.length += 1
    return true
  }

  get(keyName: string): boolean | T {
    if (!this.has(keyName)) return false

    return this.obj[keyName]
  }

  set(keyName: string, value: T): boolean {
    if (!this.has(keyName)) return false

    this.obj[keyName] = value
    return true
  }

  has(keyName: string): boolean {
    return Reflect.has(this.obj, keyName)
  }

  delete(keyName: string): boolean | T {
    if (!this.has(keyName)) return false

    const toBeDelItem = this.obj[keyName]
    const delStatus = Reflect.deleteProperty(this.obj, keyName)
    if (delStatus) this.length -= 1

    return !!delStatus ? toBeDelItem : delStatus
  }

  clear() {
    this.obj = create(null)
    this.length = 0
  }

  size(): number {
    return this.length
  }

  values(): T[] {
    const res = [] as T[]
    each(this.obj, (value) => {
      res.push(value)
    })

    return res
  }

  keys(): string[] {
    const res = [] as string[]
    each(this.obj, (_, keyName) => {
      res.push(keyName)
    })

    return res
  }

  forEach(cb: (...args: any[]) => any) {
    each(this.obj, cb)
  }

  // union(...args: Record<string, T>[]): Record<string, T> {}

  // intersection(...args: Record<string, T>[]): Record<string, T> {}

  // difference(...args: Record<string, T>[]): Record<string, T> {}

  // subset(...args: Record<string, T>[]): boolean {}
}

const useOnlyMap = <T>(): {
  add: IAdd<T>
  set: ISet<T>
  has: IHas
  get: IGet<T>
  delete: IDelete<T>
  clear: IClear
  size: ISize
  values: IValues<T>
  keys: IKeys
  forEach: IForeach
  onlyMap: OnlyMap<T>
} => {
  const map = new OnlyMap<T>(),
    add = map.add.bind(map),
    set = map.set.bind(map),
    has = map.has.bind(map),
    del = map.delete.bind(map),
    clear = map.clear.bind(map),
    size = map.size.bind(map),
    values = map.values.bind(map),
    keys = map.keys.bind(map),
    get = map.get.bind(map),
    forEach = map.forEach.bind(map)

  return {
    add,
    set,
    has,
    get,
    delete: del,
    clear,
    size,
    values,
    keys,
    forEach,
    onlyMap: map
  }
}

export default useOnlyMap
