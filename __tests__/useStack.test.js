import { useStack } from '../lib/index.es'
import exp from 'constants'

describe('Test method <useStack>', () => {
  describe('type === 0', () => {
    let push, pop, peek, isEmpty, toString, getSize

    beforeAll(() => {
      const [pushM, popM, peekM, isEmptyM, toStringM, getSizeM] = useStack(0)
      push = pushM
      pop = popM
      peek = peekM
      isEmpty = isEmptyM
      toString = toStringM
      getSize = getSizeM
    })

    test('push 1, 2, 3', () => {
      expect(push(1)).toBeTruthy()
      expect(push(2)).toBeTruthy()
      expect(push(3)).toBeTruthy()
    })

    test('peek', () => {
      expect(peek()).toBe(3)
    })

    test('pop', () => {
      expect(pop()).toBe(3)
      expect(peek()).toBe(2)
    })

    test('isEmpty', () => {
      expect(isEmpty()).toBeFalsy()
    })

    test('toString', () => {
      expect(toString()).toBe('1,2')
    })

    test('getSize', () => {
      expect(pop()).toBe(2)
      expect(getSize()).toBe(1)
    })

    test('pop === false', () => {
      expect(pop()).toBe(1)
      expect(pop()).toBeFalsy()
    })
  })

  describe('type === 0 && max === 1', () => {
    let push, pop, peek, isEmpty, toString, getSize

    beforeAll(() => {
      const [pushM, popM, peekM, isEmptyM, toStringM, getSizeM] = useStack(0, 1)
      push = pushM
      pop = popM
      peek = peekM
      isEmpty = isEmptyM
      toString = toStringM
      getSize = getSizeM
    })

    test('push', () => {
      expect(push(1)).toBeTruthy()
      expect(push(2)).toBeFalsy()
    })

    test('getSize', () => {
      expect(getSize()).toBe(1)
    })
  })

  describe('type === 1 && max === 1', () => {
    let push, pop, peek, isEmpty, toString, getSize

    beforeAll(() => {
      const [pushM, popM, peekM, isEmptyM, toStringM, getSizeM] = useStack(1, 1)
      push = pushM
      pop = popM
      peek = peekM
      isEmpty = isEmptyM
      toString = toStringM
      getSize = getSizeM
    })

    test('push', () => {
      expect(push(1)).toBeTruthy()
      expect(push(2)).toBeFalsy()
    })

    test('getSize', () => {
      expect(getSize()).toBe(1)
    })
  })

  describe('type === 1', () => {
    let push, pop, peek, isEmpty, toString, getSize

    beforeAll(() => {
      const [pushM, popM, peekM, isEmptyM, toStringM, getSizeM] = useStack(1)
      push = pushM
      pop = popM
      peek = peekM
      isEmpty = isEmptyM
      toString = toStringM
      getSize = getSizeM
    })

    test('push 1, 2, 3', () => {
      expect(push(1)).toBeTruthy()
      expect(push(2)).toBeTruthy()
      expect(push(3)).toBeTruthy()
    })

    test('peek', () => {
      expect(peek()).toBe(3)
    })

    test('pop', () => {
      expect(pop()).toBe(3)
      expect(peek()).toBe(2)
    })

    test('isEmpty', () => {
      expect(isEmpty()).toBeFalsy()
    })

    test('toString', () => {
      expect(toString()).toBe('1,2')
    })

    test('getSize', () => {
      expect(pop()).toBe(2)
      expect(getSize()).toBe(1)
    })

    test('pop === false', () => {
      expect(pop()).toBe(1)
      expect(pop()).toBeFalsy()
    })
  })
})
