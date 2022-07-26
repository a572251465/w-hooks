/**
 * 1. 堆满足：总是一个完全二叉树
 * 2. 堆的性质：任何子树的父节点总是比它的子节点大
 */

// [100, 70, 80, 30, 50, 75]
class BigHeap<T> {
  constructor(public data = [] as T[]) {
    this.data = []
    this.initData(data)
  }

  private initData(data: T[]): void {
    data.forEach((item) => {
      this.offer(item)
    })
  }

  peek(): T | boolean {
    if (this.isEmpty()) return false
    return this.data[0]
  }

  poll(): T | boolean {
    if (this.isEmpty()) return false

    const item = this.data[0]
    if (this.data.length === 1) {
      this.data.length = 0
      return item
    }

    this.data[0] = this.data.pop()!
    this.downBubble(0)
    return item
  }

  private downBubble(index: number): void {
    const lastIndex = this.data.length - 1
    while (index < lastIndex) {
      const leftIndex = (index << 1) + 1,
        rightIndex = leftIndex + 1

      if (leftIndex > lastIndex) break

      const leftValue = this.data[leftIndex],
        rightValue = this.data[rightIndex] || 0,
        currentValue = this.data[index]

      if (currentValue > leftValue && currentValue > rightValue) break
      const minIndex = leftValue < rightValue ? rightIndex : leftIndex

      if (minIndex === index) break
      this.swap(index, minIndex)
      index = minIndex
    }
  }

  private swap(i: number, j: number) {
    if (i === j) return
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  private upBubble(index: number): void {
    while (index !== 0) {
      const parentIndex = (index - 1) >> 1

      const currValue = this.data[index],
        parentValue = this.data[parentIndex]

      if (parentValue >= currValue) break
      this.swap(parentIndex, index)

      index = parentIndex
    }
  }

  offer(value: T): boolean {
    this.data.push(value)

    if (this.data.length === 1) return true

    this.upBubble(this.data.length - 1)
    return true
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size = () => this.data.length
}

export { BigHeap }
