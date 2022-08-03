/**
 * insert(key) 向树中插入一个新的键
 * search(key) 在树中找一个键
 * inOrderTraverse 通过中序遍历所有的节点并且返回
 * preOrderTraverse 通过前序遍历所有的节点并且返回
 * postOrderTraverse 通过后序遍历所有的节点并且返回
 * min 返回节点中的最小值
 * max 返回节点中的最大值
 * remove(key) 从树中移除某个键
 */

import {isArray, isFunction} from '../utils'

interface IInsert<T> {
  (value: T): boolean
}

interface ISearch<T> {
  (key: number): T | boolean
}

interface IInOrderTraverse<T> {
  (cb: (value: T) => void): void
}

interface IPreOrderTraverse<T> {
  (cb: (value: T) => void): void
}

interface IPostOrderTraverse<T> {
  (cb: (value: T) => void): void
}

interface ISequenceOrderTraverse<T> {
  (cb: (value: T) => void): void
}

interface IMin<T> {
  (child: Node<T>): T | boolean
}

interface IMax<T> {
  (child: Node<T>): T | boolean
}

interface IIsEmpty {
  (): boolean
}

interface ISize {
  (): number
}

interface IRemove<T> {
  (key: number): T | boolean
}

interface IToKeysArray<T> {
  (traverse: ISequenceOrderTraverse<T>): number[]
}

class Node<T> {
  public value!: T
  left: Node<T> | null = null
  right: Node<T> | null = null

  constructor(
    value: T,
    left: Node<T> | null = null,
    right: Node<T> | null = null
  ) {
    this.value = value
    this.left = left
    this.right = right
  }
}

interface ICb<T> {
  (value: T): number
}

const defaultCb = <T>(value: T) => value as any as number

class BinarySearchTree<T = number> {
  public root!: Node<T> | null
  public length = 0
  public data!: T[]
  public cb!: (value: T) => number

  constructor(data?: T[] | ICb<T>, cb?: ICb<T>) {
    this.root = null

    if (isArray(data)) {
      ;(data as T[]).forEach((item) => this.insert(item))
      this.cb = cb || defaultCb<T>
    } else if (isFunction(data)) {
      this.cb = data as ICb<T>
    }
  }

  insert(value: T): boolean {
    const newNode = new Node(value)
    let parent: Node<T> | null = null

    const insertNode = (node: Node<T> | null, value: T) => {
      if (node === null) return

      const curKey = this.cb(value)
      const nodeKey = this.cb(node.value)

      parent = node
      if (curKey < nodeKey) {
        insertNode(node.left, value)
      } else {
        insertNode(node.right, value)
      }
    }

    if (this.root === null) {
      this.root = newNode
      this.length += 1
      return true
    }

    insertNode(this.root, value)
    const curKey = this.cb(value),
      parentKey = this.cb(parent!.value)

    parent![curKey < parentKey ? 'left' : 'right'] = newNode
    this.length += 1
    return true
  }

  search(key: number): T | boolean {
    if (this.isEmpty()) return false

    let searchNode = this.root
    while (searchNode) {
      const nodeKey = this.cb(searchNode.value)
      if (nodeKey === key) return searchNode.value

      if (nodeKey < key) {
        searchNode = searchNode.right
      } else {
        searchNode = searchNode.left
      }
    }

    return false
  }

  inOrderTraverse(cb: (value: T) => void): void {
    const inOrderTraverseHandle = (node: Node<T> | null) => {
      if (node === null) return

      inOrderTraverseHandle(node.left)
      cb(node.value)
      inOrderTraverseHandle(node.right)
    }

    inOrderTraverseHandle(this.root)
  }

  preOrderTraverse(cb: (value: T) => void): void {
    const preOrderTraverseHandle = (node: Node<T> | null) => {
      if (node === null) return

      cb(node.value)
      preOrderTraverseHandle(node.left)
      preOrderTraverseHandle(node.right)
    }
    preOrderTraverseHandle(this.root)
  }

  postOrderTraverse(cb: (value: T) => void): void {
    const postOrderTraverseHandle = (node: Node<T> | null) => {
      if (node === null) return

      postOrderTraverseHandle(node.left)
      postOrderTraverseHandle(node.right)
      cb(node.value)
    }
    postOrderTraverseHandle(this.root)
  }

  sequenceOrderTraverse(cb: (value: T) => void): void {
    const arr = [this.root]

    while (arr.length) {
      const node = arr.shift()!
      if (node) {
        cb(node.value)
        arr.push(node.left)
        arr.push(node.right)
      }
    }
  }

  min(child = this.root): boolean | T {
    if (this.isEmpty()) return false

    let current = child,
      selected = child

    while (current) {
      selected = current
      if (current.left) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return selected!.value
  }

  max(child = this.root): boolean | T {
    if (this.isEmpty()) return false

    let current = child,
      selected = child

    while (current) {
      selected = current
      if (current.right) {
        current = current.right
      } else {
        current = current.left
      }
    }

    return selected!.value
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }

  toKeysArray(traverse: ISequenceOrderTraverse<T>): number[] {
    const arr = [] as number[]
    traverse = (traverse || this.sequenceOrderTraverse).bind(this)
    traverse((value: T) => arr.push(this.cb(value)))
    return arr
  }

  private getSuccessor(delNode: Node<T>) {
    let successor = delNode
    let current = delNode.right
    let successorParent = delNode

    while (current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }

    return successor
  }

  remove(key: number): T | boolean {
    if (this.isEmpty()) return false

    let current: Node<T> | null = null,
      parent: Node<T> | null = null

    let root = this.root,
      isLeftNode = true
    while (root) {
      const rootKey = this.cb(root.value)
      if (rootKey === key) {
        current = root
        break
      }

      parent = root

      if (rootKey < key) {
        root = root.right
        isLeftNode = false
      } else {
        root = root.left
        isLeftNode = true
      }
    }

    if (current === null) return false

    let childNum = 0
    if (current.left) childNum += 1
    if (current.right) childNum += 1

    // 如果删除的是叶子节点
    if (childNum === 0) {
      if (current === this.root) {
        this.root = null
      } else {
        if (isLeftNode) {
          parent!.left = null
        } else {
          parent!.right = null
        }
      }
      this.length -= 1
      return current.value
    }

    // 如果只有一个节点的话
    if (childNum === 1) {
      if (this.root === current) {
        this.root = current.left || current.right
      } else {
        if (isLeftNode) {
          parent!.left = current.left || current.right
        } else {
          parent!.right = current.left || current.right
        }
      }

      this.length -= 1
      return current.value
    }

    // 如果有两个节点
    let successor = this.getSuccessor(current)
    if (current === this.root) {
      this.root = successor
    } else if (isLeftNode) {
      parent!.left = successor
    } else {
      parent!.right = successor
    }

    successor.left = current.left
    this.length -= 1
    return current.value
  }
}

const useBinarySearchTree = <T>(
  data = [] as T[]
): {
  insert: IInsert<T>
  search: ISearch<T>
  inOrderTraverse: IInOrderTraverse<T>
  preOrderTraverse: IPreOrderTraverse<T>
  postOrderTraverse: IPostOrderTraverse<T>
  sequenceOrderTraverse: ISequenceOrderTraverse<T>
  min: IMin<T>
  max: IMax<T>
  remove: IRemove<T>
  isEmpty: IIsEmpty
  size: ISize
  toKeysArray: IToKeysArray<T>
} => {
  const binarySearchTree = new BinarySearchTree<T>(data),
    insert = binarySearchTree.insert.bind(binarySearchTree),
    search = binarySearchTree.search.bind(binarySearchTree),
    inOrderTraverse = binarySearchTree.inOrderTraverse.bind(binarySearchTree),
    preOrderTraverse = binarySearchTree.preOrderTraverse.bind(binarySearchTree),
    postOrderTraverse =
      binarySearchTree.postOrderTraverse.bind(binarySearchTree),
    sequenceOrderTraverse =
      binarySearchTree.sequenceOrderTraverse.bind(binarySearchTree),
    min = binarySearchTree.min.bind(binarySearchTree),
    max = binarySearchTree.max.bind(binarySearchTree),
    remove = binarySearchTree.remove.bind(binarySearchTree),
    isEmpty = binarySearchTree.isEmpty.bind(binarySearchTree),
    size = binarySearchTree.size.bind(binarySearchTree),
    toKeysArray = binarySearchTree.toKeysArray.bind(binarySearchTree)

  return {
    insert,
    search,
    inOrderTraverse,
    preOrderTraverse,
    postOrderTraverse,
    sequenceOrderTraverse,
    min,
    max,
    remove,
    isEmpty,
    size,
    toKeysArray
  }
}

export default useBinarySearchTree
