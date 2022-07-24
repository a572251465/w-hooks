import { useDoublyLinkedList } from '../lib/index.es'

describe('Test method <useDoublyLinkedList>', () => {
  const {
    append,
    insert,
    indexOf,
    get,
    size,
    remove,
    removeAt,
    update,
    forwardString,
    backwardString
  } = useDoublyLinkedList()

  test('method <append>', () => {
    expect(append(1)).toBeTruthy()
    expect(append(2)).toBeTruthy()
    expect(size()).toBe(2)
    expect(backwardString()).toBe('1,2')
    expect(forwardString()).toBe('2,1')
  })

  test('method <insert>', () => {
    expect(insert(3, size())).toBe(true)
    expect(size()).toBe(3)
    expect(insert(4, 0)).toBeTruthy()
    expect(forwardString()).toBe('3,2,1,4')
  })

  test('method <indexOf>', () => {
    expect(indexOf(4)).toBe(0)
    expect(indexOf(2)).toBe(2)
  })

  test('method <get>', () => {
    expect(get(0)).toBe(4)
    expect(size()).toBe(4)
  })

  test('method <removeAt>', () => {
    expect(removeAt(0)).toBe(4)
    expect(backwardString()).toBe('1,2,3')
    expect(removeAt(size() - 1)).toBe(3)
    expect(forwardString()).toBe('2,1')
    expect(insert(3)).toBeTruthy()
    expect(insert(4)).toBeTruthy()
    expect(forwardString()).toBe('4,3,2,1')
    expect(removeAt(1)).toBe(2)
    expect(backwardString()).toBe('1,3,4')
    expect(forwardString()).toBe('4,3,1')
    expect(size()).toBe(3)
  })

  test('method <remove>', () => {
    expect(remove(4)).toBe(4)
    expect(size()).toBe(2)
  })

  test('method <update>', () => {
    expect(update(1, 6)).toBeTruthy()
    expect(update(0, 5)).toBeTruthy()
    expect(backwardString()).toBe('5,6')
    expect(removeAt(size())).toBeFalsy()
  })
})
