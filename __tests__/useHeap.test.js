import { useHeap } from '../lib/index.es'

describe('Test method useHeap', () => {
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
