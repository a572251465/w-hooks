/**
 * 1. 堆满足：总是一个完全二叉树
 * 2. 堆的性质：任何子树的父节点总是比它的子节点小
 */

class SmallHeap<T> {
  constructor(public data = [] as T[]) {
    this.data = []
    this.initData(data)
  }

  private initData(data: T[]) {
    data.forEach((item) => {
      this.offer(item)
    })
  }

  peek(): T | boolean {
    if (this.isEmpty()) return false

    return this.data[0]
  }

  size(): number {
    return this.data.length
  }

  offer(value: T): boolean {
    this.data.push(value)
    if (this.size() === 1) return true

    this.upBubble(this.size() - 1)
    return true
  }

  poll(): T | boolean {
    if (this.isEmpty()) return false

    const value = this.data[0]
    if (this.size() === 1) {
      this.data = []
      return value
    }

    this.data[0] = this.data.pop()!
    this.downBubble(0)
    return value
  }

  private upBubble(index: number): void {
    while (this.data[index] < this.data[(index - 1) >> 1]) {
      const parentIndex = (index - 1) >> 1
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  private swap(i: number, j: number) {
    if (i === j) return
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  private downBubble(index: number): void {
    const lastIndex = this.size() - 1
    while (index < lastIndex) {
      const leftIndex = (index << 1) + 1,
        rightIndex = leftIndex + 1

      if (leftIndex > lastIndex) break

      const leftValue = this.data[leftIndex],
        rightValue = this.data[rightIndex] || Infinity,
        currentValue = this.data[index]

      if (currentValue < leftValue && currentValue < rightValue) break

      const minIndex = leftValue < rightValue ? leftIndex : rightIndex
      if (minIndex === index) break

      this.swap(index, minIndex)
      index = minIndex
    }
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }
}

export { SmallHeap }
