import { useBinarySearchTree } from '../lib/index.es'

describe('Test method useBinarySearchTree', () => {
  const {
    insert,
    search,
    size,
    sequenceOrderTraverse,
    inOrderTraverse,
    postOrderTraverse,
    preOrderTraverse,
    max,
    min,
    isEmpty,
    remove,
    toKeysArray
  } = useBinarySearchTree()

  it('insert', () => {
    expect(insert(20)).toBeTruthy()
    expect(size()).toBe(1)
    expect(insert(10)).toBeTruthy()
    expect(insert(30)).toBeTruthy()
    expect(insert(5)).toBeTruthy()
    expect(insert(15)).toBeTruthy()
    expect(insert(25)).toBeTruthy()
    expect(insert(40)).toBeTruthy()
    expect(insert(22)).toBeTruthy()
    expect(insert(3)).toBeTruthy()
    expect(toKeysArray()).toEqual([20, 10, 30, 5, 15, 25, 40, 3, 22])
  })

  it('search', () => {
    expect(search(100)).toBeFalsy()
    expect(search(20)).toBeTruthy()
    expect(search(22)).toBeTruthy()
  })

  it('sequenceOrderTraverse', () => {
    const arr = []
    sequenceOrderTraverse((item) => arr.push(item))
    expect(arr).toEqual([20, 10, 30, 5, 15, 25, 40, 3, 22])
  })

  it('inOrderTraverse', () => {
    const arr = []
    inOrderTraverse((item) => arr.push(item))
    expect(arr).toEqual([3, 5, 10, 15, 20, 22, 25, 30, 40])
  })

  it('preOrderTraverse', () => {
    const arr = []
    preOrderTraverse((item) => arr.push(item))
    expect(arr).toEqual([20, 10, 5, 3, 15, 30, 25, 22, 40])
  })

  it('postOrderTraverse', () => {
    const arr = []
    postOrderTraverse((item) => arr.push(item))
    expect(arr).toEqual([3, 5, 15, 10, 22, 25, 40, 30, 20])
  })

  it('max', () => {
    expect(max()).toBe(40)
  })

  it('min', () => {
    expect(min()).toBe(3)
  })

  it('isEmpty', () => {
    expect(isEmpty()).toBeFalsy()
  })

  it('remove - 1', () => {
    expect(remove(3)).toBe(3)
    expect(toKeysArray(inOrderTraverse)).toEqual([
      5, 10, 15, 20, 22, 25, 30, 40
    ])
  })

  it('remove - 2', () => {
    expect(insert(3)).toBeTruthy()
    expect(remove(5)).toBe(5)
    expect(toKeysArray(inOrderTraverse)).toEqual([
      3, 10, 15, 20, 22, 25, 30, 40
    ])
  })

  // it('remove - 3', () => {
  //   expect(insert(5)).toBeTruthy()
  //   expect(remove(30)).toBe(30)
  //   expect(toKeysArray(inOrderTraverse)).toEqual([3, 5, 10, 15, 20, 22, 25, 40])
  // })
})
