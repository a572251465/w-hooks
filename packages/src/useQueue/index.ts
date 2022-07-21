/**
 * enqueue 队尾添加一个值
 * dequeue 移除队首的第一个值 并返回该值
 * front 返回队列中第一个元素  队列的结构不做任何修改
 * isEmpty 判断队列是否为空
 * size 表示队列中个数多少
 * toString 表示队列中的内容以字符串形式返回
 */

interface IEnqueue<T> {
  (value: T): boolean
}

interface IDequeue<T> {
  (): boolean | T
}

interface IFront<T> {
  (): boolean | T
}

interface IIsEmpty {
  (): boolean
}

interface IGetSize {
  (): number
}

interface IToString {
  (splitSign?: string): string
}

class ArrayQueue<T = string> {
  private readonly queue!: T[]

  constructor() {
    this.queue = []
  }

  enqueue(value: T): boolean {
    this.queue.push(value)
    return true
  }

  dequeue(): T | boolean {
    if (this.isEmpty()) return false

    return this.queue.shift()!
  }

  front(): T | boolean {
    if (this.isEmpty()) return false

    return this.queue[0]
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  getSize(): number {
    return this.queue.length
  }

  toString(splitSign = ','): string {
    return this.queue.join(splitSign)
  }
}

class LinkedNode<T> {
  constructor(public val: T, public next?: LinkedNode<T> | null) {
    this.val = val
    this.next = next || null
  }
}

class LinkedListQueue<T> {
  public head!: LinkedNode<T> | null
  public size!: number

  constructor() {
    this.head = null
    this.size = 0
  }

  enqueue(value: T): boolean {
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

  dequeue(): T | boolean {
    if (this.isEmpty()) return false

    const p = this.head
    this.head = p!.next!
    this.size -= 1
    return p!.val
  }

  front(): T | boolean {
    if (this.isEmpty()) return false

    return this.head!.val
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  getSize(): number {
    return this.size
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

const useQueue = <T>(
  type = 0
): [IEnqueue<T>, IDequeue<T>, IFront<T>, IIsEmpty, IGetSize, IToString] => {
  const Instance = type === 0 ? ArrayQueue<T> : LinkedListQueue <T>;
  const instance = new Instance()
  return [
    instance.enqueue.bind(instance),
    instance.dequeue.bind(instance),
    instance.front.bind(instance),
    instance.isEmpty.bind(instance),
    instance.getSize.bind(instance),
    instance.toString.bind(instance)]
}

export default useQueue
