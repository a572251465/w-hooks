import { useQueue } from '../lib/index.es'

describe('Test method <useQueue>', () => {
  describe('type === 0', () => {
    let enQueue, deQueue, front, isEmpty, getSize, toString
    beforeAll(() => {
      const [enQueueM, deQueueM, frontM, isEmptyM, getSizeM, toStringM] =
        useQueue(0)
      enQueue = enQueueM
      deQueue = deQueueM
      front = frontM
      isEmpty = isEmptyM
      getSize = getSizeM
      toString = toStringM
    })

    test('enQueue', () => {
      expect(enQueue(1)).toBeTruthy()
      expect(enQueue(2)).toBeTruthy()
      expect(enQueue(3)).toBeTruthy()
      expect(toString()).toBe('1,2,3')
    })

    test('deQueue', () => {
      expect(deQueue()).toBe(1)
      expect(toString()).toBe('2,3')
    })

    test('front', () => {
      expect(front()).toBe(2)
    })

    test('isEmpty', () => {
      expect(isEmpty()).toBeFalsy()
    })

    test('getSize', () => {
      expect(getSize()).toBe(2)
    })

    test('deQueue => isEmpty', () => {
      expect(deQueue()).toBe(2)
      expect(deQueue()).toBe(3)
      expect(isEmpty()).toBeTruthy()
    })
  })

  describe('type === 1', () => {
    let enQueue, deQueue, front, isEmpty, getSize, toString
    beforeAll(() => {
      const [enQueueM, deQueueM, frontM, isEmptyM, getSizeM, toStringM] =
        useQueue(1)
      enQueue = enQueueM
      deQueue = deQueueM
      front = frontM
      isEmpty = isEmptyM
      getSize = getSizeM
      toString = toStringM
    })

    test('enQueue', () => {
      expect(enQueue(1)).toBeTruthy()
      expect(enQueue(2)).toBeTruthy()
      expect(enQueue(3)).toBeTruthy()
      expect(toString()).toBe('1,2,3')
    })

    test('deQueue', () => {
      expect(deQueue()).toBe(1)
      expect(toString()).toBe('2,3')
    })

    test('front', () => {
      expect(front()).toBe(2)
    })

    test('isEmpty', () => {
      expect(isEmpty()).toBeFalsy()
    })

    test('getSize', () => {
      expect(getSize()).toBe(2)
    })

    test('deQueue => isEmpty', () => {
      expect(deQueue()).toBe(2)
      expect(deQueue()).toBe(3)
      expect(isEmpty()).toBeTruthy()
    })
  })
})
