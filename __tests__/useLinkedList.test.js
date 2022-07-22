import { useLinkedList } from '../lib/index.es'

describe('Test Method <useLinkedList>', () => {
  const {
    append,
    get,
    getAll,
    indexOf,
    insert,
    isEmpty,
    remove,
    removeAt,
    size,
    toString,
    update
  } = useLinkedList()

  test('append method', () => {
    expect(append(1)).toBeTruthy()
    expect(append(2)).toBeTruthy()
    expect(toString()).toBe('1,2')
  })

  test('get method', () => {
    expect(get(-1)).toBeFalsy()
    expect(get(0)).toBe(1)
    expect(get(size())).toBeFalsy()
  })

  test('indexOf method', () => {
    expect(indexOf(2)).toBe(1)
  })

  test('update method', () => {
    expect(update(-1, 5)).toBeFalsy()
    expect(update(size(), 6)).toBeFalsy()
    expect(update(1, 3)).toBeTruthy()
  })

  test('removeAt method', () => {
    expect(removeAt(-1)).toBeFalsy()
    expect(removeAt(size())).toBeFalsy()
    expect(removeAt(0)).toBe(1)
    expect(get(0)).toBe(3)
    expect(removeAt(0)).toBe(3)
    expect(isEmpty()).toBeTruthy()
  })

  test('isEmpty method', () => {
    expect(isEmpty()).toBeTruthy()
  })

  test('size method', () => {
    expect(size()).toBe(0)
    expect(insert(1)).toBeTruthy()
    expect(insert(0, 0)).toBeTruthy()
    expect(size()).toBe(2)
  })

  test('insert method', () => {
    expect(insert(2, 1)).toBeTruthy()
    expect(getAll()).toEqual([0, 2, 1])
  })

  test('remove method', () => {
    expect(remove(2)).toBe(2)
    expect(size()).toBe(2)
    expect(getAll()).toEqual([0, 1])
  })
})
