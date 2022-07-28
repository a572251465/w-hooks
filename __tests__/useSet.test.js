import { useSet } from '../lib/index.es'

describe('Test method <useSet>', () => {
  const { size, add, entries, clear, del, forEach, has, keys, values } = useSet(
    [1, 2, 3, 2, 1]
  )

  it('init  ', function () {
    expect(size()).toBe(3)
  })

  it('add', function () {
    expect(add(3)).toBeFalsy()
    expect(add(4)).toBeTruthy()
    expect(size()).toBe(4)
  })

  it('entries', function () {
    const iterator = entries()
    expect(iterator.next().value).toEqual([1, 1])
    expect(iterator.next().value).toEqual([2, 2])
  })

  it('clear', function () {
    expect(clear()).toBeUndefined()
    expect(size()).toBe(0)
  })

  it('del', function () {
    expect(add(1)).toBeTruthy()
    expect(del(1)).toBeTruthy()
    expect(del(2)).toBeFalsy()
  })

  it('has', function () {
    expect(add(1)).toBeTruthy()
    expect(add(2)).toBeTruthy()
    expect(add(3)).toBeTruthy()
    expect(add(5)).toBeTruthy()

    expect(has(6)).toBeFalsy()
    expect(has(1)).toBeTruthy()
  })

  it('keys', function () {
    expect(keys()).toEqual([1, 2, 3, 5])
  })

  it('values', function () {
    expect(values()).toEqual([1, 2, 3, 5])
  })

  it('forEach', function () {
    const it = jest.fn()
    forEach(it)
    expect(it.mock.calls.length).toBe(4)
    expect(it.mock.calls[0]).toEqual([1, 0])
  })
})
