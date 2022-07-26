import { useHeap } from '../lib/index.es'

describe('Test method useSmallHeap', () => {
  const { poll, offer, isEmpty, size, peek } = useHeap(
    [10, 30, 20, 60, 120, 100],
    'small'
  )

  it('method init', () => {
    expect(size()).toBe(6)
    expect(poll()).toBe(10)
    expect(poll()).toBe(20)
    expect(poll()).toBe(30)
    expect(poll()).toBe(60)
    expect(poll()).toBe(100)
    expect(poll()).toBe(120)
    expect(isEmpty()).toBe(true)
  })

  it('method offer', () => {
    expect(offer(20)).toBeTruthy()
    expect(size()).toBe(1)
    expect(offer(30)).toBeTruthy()
    expect(size()).toBe(2)
    expect(peek()).toBe(20)
  })

  it('Test method poll', () => {
    expect(poll()).toBe(20)
    expect(size()).toBe(1)
    expect(poll()).toBe(30)
    expect(size()).toBe(0)
    expect(isEmpty()).toBeTruthy()
  })

  it('Test method isEmpty', () => {
    expect(isEmpty()).toBeTruthy()
    expect(offer(20)).toBeTruthy()
    expect(offer(40)).toBeTruthy()
    expect(offer(35)).toBeTruthy()
    expect(offer(100)).toBeTruthy()
    expect(offer(110)).toBeTruthy()
    expect(offer(70)).toBeTruthy()
    expect(isEmpty()).toBeFalsy()

    expect(size()).toBe(6)
    expect(poll()).toBe(20)
    expect(poll()).toBe(35)
    expect(poll()).toBe(40)
    expect(poll()).toBe(70)
    expect(poll()).toBe(100)
    expect(poll()).toBe(110)
  })
})

describe('Test method useBigHeap', () => {
  const { poll, offer, isEmpty, size, peek } = useHeap([
    100, 70, 80, 30, 50, 75
  ])

  it('test init', () => {
    expect(size()).toBe(6)
    expect(peek()).toBe(100)
    expect(poll()).toBe(100)
    expect(peek()).toBe(80)
    expect(poll()).toBe(80)
    expect(poll()).toBe(75)
    expect(poll()).toBe(70)
    expect(poll()).toBe(50)
    expect(poll()).toBe(30)
    expect(isEmpty()).toBe(true)
  })

  it('test offer', () => {
    expect(offer(30)).toBeTruthy()
    expect(offer(50)).toBeTruthy()
    expect(offer(70)).toBeTruthy()
    expect(isEmpty()).toBeFalsy()
    expect(size()).toBe(3)
  })

  it('test poll', () => {
    expect(poll()).toBe(70)
    expect(poll()).toBe(50)
    expect(poll()).toBe(30)
    expect(isEmpty()).toBeTruthy()
    expect(size()).toBe(0)
  })

  it('test peek', () => {
    expect(offer(30)).toBeTruthy()
    expect(offer(100)).toBeTruthy()
    expect(peek()).toBe(100)
    expect(offer(80)).toBeTruthy()
    expect(peek()).toBe(100)
    expect(offer(70)).toBeTruthy()
    expect(peek()).toBe(100)
    expect(offer(75)).toBeTruthy()
    expect(peek()).toBe(100)
    expect(offer(50)).toBeTruthy()
    expect(peek()).toBe(100)

    expect(poll()).toBe(100)
    expect(peek()).toBe(80)
  })
})
