import { INormalFn } from '../types'
import { each } from '../utils'

interface ISet<T> {
  size: () => number
  add: (value: T) => boolean
  clear: () => void
  delete: (value: T) => boolean
  entries: () => { next: () => { value: [T, T]; done: boolean } }
  forEach: (cb: INormalFn) => void
  has: (value: T) => boolean
  keys: () => T[]
  values: () => T[]
}

class Set<T> {
  public content!: T[]

  constructor(data = [] as T[]) {
    this.content = []

    // init
    data.forEach((item) => {
      this.add(item)
    })
  }

  [Symbol.iterator] = () => {
    const len = this.content.length,
      values = this.values()
    let i = 0

    return {
      next() {
        return {
          value: [values[i], values[i]],
          done: i++ >= len
        }
      }
    }
  }

  size(): number {
    return this.content.length
  }

  add(value: T): boolean {
    if (this.has(value)) return false

    this.content.push(value)
    return true
  }

  forEach(cb: INormalFn, _self?: Window): void {
    each(this.content, cb, _self)
  }

  clear() {
    this.content.length = 0
  }

  delete(value: T): boolean {
    if (!this.has(value)) return false

    const index = this.content.indexOf(value)
    this.content.splice(index, 1)
    return true
  }

  has(value: T): boolean {
    return this.content.includes(value)
  }

  keys(): T[] {
    return this.content
  }

  values(): T[] {
    return this.content
  }

  entries() {
    const len = this.content.length,
      values = this.values()
    let i = 0

    return {
      next() {
        return {
          value: [values[i], values[i]] as [T, T],
          done: i++ >= len
        }
      }
    }
  }
}

type CommonPick<T, K extends keyof ISet<T>> = Pick<ISet<T>, K>[K]

const useSet = <T>(
  data = [] as T[]
): {
  size: CommonPick<T, 'size'>
  add: CommonPick<T, 'add'>
  clear: CommonPick<T, 'clear'>
  del: CommonPick<T, 'delete'>
  entries: CommonPick<T, 'entries'>
  forEach: CommonPick<T, 'forEach'>
  has: CommonPick<T, 'has'>
  keys: CommonPick<T, 'keys'>
  values: CommonPick<T, 'values'>
} => {
  const set = new Set<T>(data)

  const size = set.size.bind(set),
    add = set.add.bind(set),
    clear = set.clear.bind(set),
    del = set.delete.bind(set),
    entries = set.entries.bind(set),
    forEach = set.forEach.bind(set),
    has = set.has.bind(set),
    keys = set.keys.bind(set),
    values = set.values.bind(set)

  return {
    size,
    add,
    clear,
    del,
    entries,
    has,
    forEach,
    keys,
    values
  }
}

export default useSet
