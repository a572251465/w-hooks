import { usePriorityQueue } from '../lib/index.es'

describe('Test method <usePriorityQueue>', () => {
  const { enqueue, getSize, isEmpty, toString, dequeue, front } =
    usePriorityQueue()

  test('method enqueue', () => {
    expect(getSize()).toBe(0)
    expect(enqueue(1)).toBeTruthy()
    expect(enqueue(2)).toBeTruthy()
    expect(toString()).toBe('1,2')
    expect(enqueue(0, 0)).toBeTruthy()
    expect(toString()).toBe('0,1,2')
    expect(enqueue(5, 10)).toBeTruthy()
    expect(toString()).toBe('0,1,2,5')
    expect(enqueue(6, 9)).toBeTruthy()
    expect(toString()).toBe('0,1,2,6,5')
  })

  test('method dequeue', () => {
    expect(dequeue()).toBe(0)
    expect(dequeue()).toBe(1)
    expect(dequeue()).toBe(2)
    expect(dequeue()).toBe(6)
    expect(dequeue()).toBe(5)
    expect(getSize()).toBe(0)
  })

  test('method isEmpty', () => {
    expect(isEmpty()).toBeTruthy()
    expect(enqueue(1, 2)).toBeTruthy()
    expect(enqueue(2, 1)).toBeTruthy()
    expect(isEmpty()).toBeFalsy()
    expect(toString()).toBe('2,1')
  })

  test('method front', () => {
    expect(front()).toBe(2)
    expect(dequeue()).toBe(2)
    expect(front()).toBe(1)
  })
})
