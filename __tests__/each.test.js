import { each } from '../lib/index.es'

describe('Test method <each>', () => {
  test('method each is object', () => {
    const obj = { a: 1, b: 2 }
    const cb = jest.fn()
    expect(each(obj, cb)).toBeTruthy()
    expect(cb.mock.calls.length).toBe(2)
    expect(cb.mock.calls[0]).toEqual([1, 'a'])
    expect(cb.mock.calls[1]).toEqual([2, 'b'])
  })

  test('method each is array', () => {
    const arr = [1, 2, 3]
    const cb = jest.fn()
    each(arr, cb)
    expect(cb.mock.calls.length).toBe(3)
    expect(cb.mock.calls[0]).toEqual([1, 0])
    expect(cb.mock.calls[1]).toEqual([2, 1])
    expect(cb.mock.calls[2]).toEqual([3, 2])
  })

  test('method each is arrayLike', () => {
    const str = 'abc',
      cb = jest.fn()

    each(str, cb)
    expect(cb.mock.calls.length).toBe(3)
    expect(cb.mock.calls[0]).toEqual(['a', 0])
    expect(cb.mock.calls[1]).toEqual(['b', 1])
    expect(cb.mock.calls[2]).toEqual(['c', 2])
  })
})
