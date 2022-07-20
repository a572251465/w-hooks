/**
 * push  入栈
 * pop 出栈
 * peek 返回栈顶元素，栈中不做操作
 * isEmpty 判断是否为空
 * size 返回个数
 * toString 以字符串形式返回
 */

const enum IStackType {
  Array = 0,
  LinkedList = 1
}

interface IPush<T> {
  (value: T): boolean
}

interface IPop<T> {
  (): T | boolean
}

interface IPeek<T> {
  (): T | boolean
}

interface IIsEmpty {
  (): boolean
}

interface IToString {
  (splitSign?: string): string
}

interface IGetSize {
  (): number
}

class LinkedNode<T> {
  constructor(public val: T, public next?: LinkedNode<T> | null) {
    this.val = val
    this.next = next || null
  }
}

class LinkedList<T = string> {
  private head!: LinkedNode<T> | null
  public size!: number

  constructor(public max?: number) {
    this.head = null
    this.max = max || Infinity
    this.size = 0
  }

  push(value: T): boolean {
    if (this.isFull()) return false

    const node = new LinkedNode<T>(value)
    if (this.head === null) {
      this.head = node
      this.size += 1
      return true
    }

    let p = this.head
    while (p && p.next) p = p.next
    p.next = node
    this.size += 1
    return true
  }

  pop(): T | boolean {
    if (this.isEmpty()) return false

    if (this.head?.next === null) {
      const p = this.head.val
      this.size -= 1
      this.head = null
      return p
    }

    let p = this.head
    while (p && p.next && p.next.next) p = p.next
    const item = p!.next!.val
    p!.next = null
    this.size -= 1
    return item
  }

  peek(): T | boolean {
    if (this.isEmpty()) return false

    let p = this.head
    while (p && p.next) p = p.next
    return p!.val
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  private isFull(): boolean {
    return this.size === this.max
  }

  toString(splitSign = ','): string {
    const result = [] as T[]
    let p = this.head
    while (p) {
      result.push(p.val)
      p = p.next!
    }

    return result.join(splitSign)
  }
}

class Stack<T = string> {
  public size!: number
  private readonly stack!: T[]

  constructor(public max?: number) {
    this.max = max || Infinity
    this.size = 0
    this.stack = []
  }

  push(value: T): boolean {
    if (this.isFull()) return false

    this.stack.push(value)
    this.size += 1
    return true
  }

  pop(): T | boolean {
    if (this.isEmpty()) return false

    const item = this.stack.pop()!
    this.size -= 1
    return item
  }

  peek(): T | boolean {
    if (this.isEmpty()) return false

    return this.stack[this.size - 1]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  private isFull(): boolean {
    return this.size === this.max
  }

  toString(splitSign = ','): string {
    return this.stack.join(splitSign)
  }
}

const useStack = <T>(type = IStackType.Array, max?: number): [IPush<T>, IPop<T>, IPeek<T>, IIsEmpty, IToString, IGetSize] => {
  const Instance = type === IStackType.Array ? Stack<T> : LinkedList <T>;
  const instance = new Instance(max)

  const getSize = () => instance.size
  const push = instance.push.bind(instance)
  const pop = instance.pop.bind(instance)
  const peek = instance.peek.bind(instance)
  const isEmpty = instance.isEmpty.bind(instance)
  const toString = instance.toString.bind(instance)
  return [push, pop, peek, isEmpty, toString, getSize]
}

export default useStack
