/**
 * append 添加元素
 * insert 指定位置插入元素
 * get 获取对应位置的元素
 * indexOf 获取元素的索引 如果没有的话 返回-1
 * update 修改某个元素的位置
 * removeAt 删除某个位置的元素
 * remove 移除某个元素
 * isEmpty 判断是否为空
 * size 返回大小
 * forwardString 正向返回元素
 * backwardString 反向遍历节点返回
 */

interface IAppend<T> {
  (val: T): boolean
}
interface IInsert<T> {
  (val: T, position?: number): boolean
}
interface IGet<T> {
  (position: number): T | boolean
}
interface IIndexOf<T> {
  (val: T): number
}
interface IUpdate<T> {
  (position: number, val: T): boolean
}
interface IRemoveAt<T> {
  (position: number): T | boolean
}
interface IRemove<T> {
  (val: T): T | boolean
}
interface IIsEmpty {
  (): boolean
}
interface ISize {
  (): number
}
interface IForwardString {
  (splitSign: string): string
}
interface IBackwardString {
  (splitSign: string): string
}

class LinkedNode<T> {
  public next!: LinkedNode<T> | null
  public prev!: LinkedNode<T> | null
  constructor(public val: T) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList<T> {
  public head!: LinkedNode<T> | null
  public tail!: LinkedNode<T> | null
  public length!: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(val: T): boolean {
    const node = new LinkedNode<T>(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
      this.length += 1
      return true
    }

    let current = this.head
    while (current && current.next) current = current.next
    node.prev = current
    current.next = node
    this.tail = node
    this.length += 1
    return true
  }

  insert(val: T, position = this.length): boolean {
    if (position < 0 || position > this.length) return false

    const node = new LinkedNode(val)
    if (position === 0) {
      this.head!.prev = node
      node.next = this.head
      this.head = node
      this.length += 1
      return true
    }

    if (position === this.length) return this.append(val)

    let current = this.head,
      index = 0
    while (++index < position) current = current?.next!
    node.next = current?.next!
    current!.next!.prev! = node
    node.prev = current
    current!.next = node

    this.length += 1
    return true
  }
  get(position: number): T | boolean {
    if (position < 0 || position >= this.length) return false

    let current = this.head,
      index = 0
    while (index++ < position) current = current?.next!
    return current?.val!
  }
  indexOf(val: T): number {
    if (this.isEmpty()) return -1

    let index = 0,
      current = this.head
    while (current) {
      if (current.val === val) return index
      index += 1
    }

    return -1
  }
  update(position: number, val: T): boolean {
    if (position < 0 || position >= this.length) return false

    let i = 0,
      current = this.head
    while (current) {
      if (position === i) {
        current.val = val
        break
      }
    }

    return true
  }
  removeAt(position: number): T | boolean {
    if (position < 0 || position >= this.length) return false

    if (position === 0) {
      const item = this.head?.val!
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head?.next!
        this.head.prev = null
      }
      this.length -= 1
      return item
    }

    if (position === this.length - 1) {
      const item = this.tail?.val!
      this.tail = this.tail?.prev!
      this.tail.next = null
      this.length -= 1
      return item
    }

    let i = 0,
      current = this.head
    while (++i < position) current = current?.next!

    const item = current?.next?.val!
    current!.next!.next!.prev = current
    current!.next = current!.next!.next
    this.length -= 1

    return item
  }
  remove(val: T): T | boolean {
    return this.removeAt(this.indexOf(val))
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  size(): number {
    return this.length
  }

  forwardString(splitSign = ','): string {
    const arr = [] as T[]

    let current = this.tail
    while (current) {
      arr.push(current.val)
      current = current.prev
    }

    return arr.join(splitSign)
  }

  backwardString(splitSign = ','): string {
    const arr = [] as T[]

    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }

    return arr.join(splitSign)
  }
}

const useDoublyLinkedList = <T>(): {
  append: IAppend<T>
  insert: IInsert<T>
  get: IGet<T>
  indexOf: IIndexOf<T>
  update: IUpdate<T>
  removeAt: IRemoveAt<T>
  remove: IRemove<T>
  isEmpty: IIsEmpty
  size: ISize
  forwardString: IForwardString
  backwardString: IBackwardString
} => {
  const linkedList = new DoublyLinkedList<T>()

  const append = linkedList.append.bind(linkedList),
    insert = linkedList.insert.bind(linkedList),
    get = linkedList.get.bind(linkedList),
    indexOf = linkedList.indexOf.bind(linkedList),
    update = linkedList.update.bind(linkedList),
    removeAt = linkedList.removeAt.bind(linkedList),
    remove = linkedList.remove.bind(linkedList),
    isEmpty = linkedList.isEmpty.bind(linkedList),
    size = linkedList.size.bind(linkedList),
    forwardString = linkedList.forwardString.bind(linkedList),
    backwardString = linkedList.backwardString.bind(linkedList)

  return {
    append,
    insert,
    get,
    indexOf,
    update,
    removeAt,
    remove,
    isEmpty,
    size,
    forwardString,
    backwardString
  }
}

export default useDoublyLinkedList
