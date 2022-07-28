import { isArray, isNumber, isPrime } from '../utils'

class HashTable<T> {
  public storage!: any[]
  public count!: number
  public limit!: number

  constructor(...args: ([string, T][][] | number)[]) {
    if (!isArray(args[0]) && !isNumber(args[0])) {
      throw new Error(
        `the first parameter type must be init data or number. example: [[]] or 10`
      )
    }

    if (isNumber(args[0])) {
      this.storage = []
      this.limit = args[0] as number
    } else if (isArray(args[0])) {
      // TODO
    }
    if (isNumber(args[1])) {
      this.limit = args[1] as number
    } else {
      this.limit = 10
    }
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  size(): number {
    return this.count
  }

  put(keyName: string, value: T): boolean {
    const index = this.getHashCode(keyName),
      bucket = this.storage[index] || (this.storage[index] = [])

    let i = 0
    for (; i < bucket.length; i += 1) {
      const tuple = bucket[i]
      if (tuple[0] === keyName) {
        tuple[1] = value
        return true
      }
    }

    bucket.put([keyName, value])
    this.count += 1
    const factor = this.count / this.limit
    if (factor >= 0.75) {
      let newLimit = this.limit * 2
      while (!isPrime(newLimit)) newLimit += 1
      this.resize(newLimit)
    }
    return true
  }

  del(keyName: string): T | boolean {
    const index = this.getHashCode(keyName),
      bucket = this.storage[index]

    if (bucket === undefined) return false
    let i = 0
    for (; i < bucket.length; i += 1) {
      const tuple = bucket[i]
      if (tuple[0] === keyName) {
        this.storage.splice(i, 1)
        this.count -= 1

        const factor = this.count / this.limit
        if (factor <= 0.25 && this.limit > 7) {
          let newLimit = (this.limit / 2) | 0
          while (!isPrime(newLimit)) newLimit += 1
          this.resize(newLimit)
        }

        return tuple[1]
      }
    }

    return false
  }

  private resize(len: number) {
    this.limit = len
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    let i = 0
    for (; i < oldStorage.length; i += 1) {
      const bucket = oldStorage[i]

      if (bucket === undefined) continue
      for (let j = 0; j < bucket; j += 1) {
        const tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }

  get(keyName: string): T | undefined {
    const index = this.getHashCode(keyName),
      bucket = this.storage[index]

    if (bucket === undefined) return undefined

    let i = 0
    for (; i < bucket; i += 1) {
      const tuple = bucket[i]
      if (tuple[0] === keyName) return tuple[1]
    }
    return undefined
  }

  has(keyName: string): boolean {
    return this.get(keyName) !== undefined
  }

  private getHashCode(value: string): number {
    let hashCode = 0,
      i = 0
    for (; i < value.length; i += 1) {
      hashCode = hashCode * 37 + value.charCodeAt(i)
    }

    hashCode %= this.limit

    return hashCode
  }
}
