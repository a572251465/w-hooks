/**
 * append 列表尾部添加一个元素
 * insert(pos, el) 向特定的位置插入一个元素
 * get(pos) 获取对应位置的元素
 * indexOf(el) 返回该元素在列表中索引 如果没有的话 直接返回-1
 * update(pos) 修改某个位置的元素
 * removeAt(pos) 从列表的特定位置移除一项
 * remove(el) 从列表中移除一项
 * isEmpty() 判断列表的元素是否为空
 * size() 返回链表中元素个数
 * toString 返回列表中元素，以字符串形式返回
 * getAll 获取全部内容
 */

class Node<T> {
  constructor(public val: T, public next?: Node<T> | null) {
    this.val = val
    this.next = next || null
  }
}

class LinkedList<T> {
  public head!: Node<T> | null
  public length!: number

  constructor() {
    this.head = null
    this.length = 0
  }

  append(val: T): boolean {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.length += 1
      return true
    }

    let current = this.head
    while (current && current.next) current = current.next
    current.next = node
    this.length += 1
    return true
  }

  insert(val: T, position = this.length): boolean {
    if (position < 0 || position > this.length) return false

    const node = new Node(val)
    if (position === 0) {
      node.next = this.head
      this.head = node
      this.length += 1
      return true
    } else if (position === this.length) {
      return this.append(val)
    }

    let current = this.head,
      index = 0
    while (++index < position) current = current!.next!

    node.next = current!.next
    current!.next = node
    this.length += 1
    return true
  }

  getAll(): T[] {
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.val)
      current = current.next!
    }

    return arr
  }

  get(position: number): T | boolean {
    if (position < 0 || position >= this.length) return false

    let index = 0,
      current = this.head
    while (current) {
      if (index === position) return current.val
      current = current.next!
    }

    return false
  }

  indexOf(val: T): number {
    if (this.isEmpty()) return -1

    let current = this.head,
      index = 0

    while (current) {
      if (val === current.val) return index
      current = current.next!
      index += 1
    }

    return -1
  }

  update(position: number, val: T): boolean {
    if (position < 0 || position >= this.length) return false

    let current = this.head,
      index = 0
    while (current) {
      if (index === position) {
        current.val = val
        return true
      }

      current = current.next!
      index += 1
    }
    return false
  }

  removeAt(position: number): boolean | T {
    if (position < 0 || position >= this.length) return false

    if (position === 0) {
      const val = this.head!.val
      this.head = this.head?.next!
      this.length -= 1
      return val
    }

    let current = this.head,
      index = 0
    while (++index < position) current = current?.next!
    const val = current!.next!.val
    current!.next = current?.next?.next
    this.length -= 1
    return val
  }

  remove(val: T): boolean | T {
    return this.removeAt(this.indexOf(val))
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }

  toString(splitSign = ','): string {
    const arr = [] as T[]
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next!
    }

    return arr.join(splitSign)
  }
}

const useLinkedList = () => {
  const linkedList = new LinkedList(),
    append = linkedList.append.bind(linkedList),
    insert = linkedList.insert.bind(linkedList),
    get = linkedList.get.bind(linkedList),
    indexOf = linkedList.indexOf.bind(linkedList),
    update = linkedList.update.bind(linkedList),
    removeAt = linkedList.removeAt.bind(linkedList),
    remove = linkedList.remove.bind(linkedList),
    isEmpty = linkedList.isEmpty.bind(linkedList),
    size = linkedList.size.bind(linkedList),
    toString = linkedList.toString.bind(linkedList),
    getAll = linkedList.getAll.bind(linkedList)

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
    toString,
    getAll
  }
}

export default useLinkedList
