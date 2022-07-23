import { ILinkedList } from '../useLinkedList'
import { isNumber, isUndefined } from '../utils/index'
import useLinkedList from '../useLinkedList'

export interface INodeOptions<T = unknown> {
  sort: number
  val: T
}

export interface IEnqueue<T> {
  (val: T, sort?: number): boolean
}

export interface IDequeue<T> {
  (): T | boolean
}

export interface IFront<T> {
  (): T | boolean
}

export interface IIsEmpty {
  (): boolean
}

export interface ISize {
  (): number
}

export interface IToString {
  (splitSign: string): string
}

/**
 * enqueue 队尾添加一个值
 * dequeue 移除队首的第一个值 并返回该值
 * front 返回队列中第一个元素  队列的结构不做任何修改
 * isEmpty 判断队列是否为空
 * size 表示队列中个数多少
 * toString 表示队列中的内容以字符串形式返回
 */

export type IConstructorField<T, K extends keyof ILinkedList<T>> = Pick<
  ILinkedList<INodeOptions<T>>,
  K
>[K]

class PriorityQueue<T> {
  public append!: IConstructorField<T, 'append'>
  public insert!: IConstructorField<T, 'insert'>
  public getAll!: IConstructorField<T, 'getAll'>
  public getSize!: IConstructorField<T, 'size'>
  public getIsEmpty!: IConstructorField<T, 'isEmpty'>
  public get!: IConstructorField<T, 'get'>
  public removeAt!: IConstructorField<T, 'removeAt'>
  public lastSort!: number

  constructor() {
    const {
      append,
      insert,
      getAll,
      size: getSize,
      isEmpty: getIsEmpty,
      get,
      removeAt
    } = useLinkedList<INodeOptions<T>>()
    this.append = append
    this.insert = insert
    this.getAll = getAll
    this.getSize = getSize
    this.getIsEmpty = getIsEmpty
    this.get = get
    this.removeAt = removeAt
    this.lastSort = -1
  }

  enqueue(val: T, sort?: number): boolean {
    if (sort && !isNumber(sort)) return false
    if (sort && isNumber(sort) && sort < 0) return false

    if (isUndefined(sort)) {
      this.lastSort += 1
      const node = { sort: this.lastSort, val: val } as INodeOptions<T>
      this.append(node)
      return true
    }

    const arr = this.getAll()
    const sorts = arr.map((item) => item.sort)
    let index = 0
    while (index < sorts.length) {
      const item = sorts[index]
      if (item >= sort!) break
      index += 1
    }

    this.insert({ val, sort: sort! }, index)
    this.lastSort = (this.get(this.size() - 1) as INodeOptions<T>).sort + 1
    return true
  }

  dequeue(): T | boolean {
    if (this.isEmpty()) return false

    const item = this.removeAt(0)
    return typeof item === 'boolean' ? item : item.val
  }

  front(): T | boolean {
    if (this.isEmpty()) return false

    const item = this.get(0)
    return typeof item === 'boolean' ? item : item.val
  }

  isEmpty(): boolean {
    return this.getIsEmpty()
  }

  size(): number {
    return this.getSize()
  }

  toString(splitSign = ','): string {
    const all = this.getAll()
    const mapArr = all.map((item) => item.val)
    return mapArr.join(splitSign)
  }
}

const usePriorityQueue = <T>(): {
  enqueue: IEnqueue<T>
  dequeue: IDequeue<T>
  front: IFront<T>
  isEmpty: IIsEmpty
  getSize: ISize
  toString: IToString
} => {
  const linkedList = new PriorityQueue<T>()
  const enqueue = linkedList.enqueue.bind(linkedList),
    dequeue = linkedList.dequeue.bind(linkedList),
    front = linkedList.front.bind(linkedList),
    isEmpty = linkedList.isEmpty.bind(linkedList),
    getSize = linkedList.size.bind(linkedList),
    toString = linkedList.toString.bind(linkedList)

  return {
    enqueue,
    dequeue,
    front,
    isEmpty,
    getSize,
    toString
  }
}

export default usePriorityQueue
