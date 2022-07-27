import { useOnlyMap } from '../lib/index.es'

describe('Test method <useOnlyMap>', () => {
  const {
    add,
    set,
    has,
    delete: del,
    clear,
    size,
    values,
    keys,
    forEach,
    onlyMap,
    get
  } = useOnlyMap()

  test('method add', () => {
    expect(add('a', 1)).toBeTruthy()
    expect(add('a', 2)).toBeFalsy()
    expect(add('b', 2)).toBeTruthy()
  })

  test('method set', () => {
    expect(set('c', 100)).toBeFalsy()
    expect(set('b', 110)).toBeTruthy()
  })

  test('method has', () => {
    expect(has('a')).toBeTruthy()
    expect(has('c')).toBeFalsy()
  })

  test('method delete', () => {
    expect(size()).toBe(2)
    expect(del('d')).toBeFalsy()
    expect(del('a')).toBe(1)
    expect(size()).toBe(1)
  })

  test('method clear', () => {
    clear()
    expect(size()).toBe(0)
  })

  test('method values', () => {
    expect(add('a', 1)).toBeTruthy()
    expect(add('b', 2)).toBeTruthy()
    expect(add('c', 3)).toBeTruthy()
    expect(values()).toEqual([1, 2, 3])
  })

  test('method keys', () => {
    expect(keys()).toEqual(['a', 'b', 'c'])
  })

  test('method forEach', () => {
    const cb = jest.fn()
    forEach(cb)
    expect(cb.mock.calls.length).toBe(3)
    expect(cb.mock.calls[0]).toEqual([1, 'a'])
  })

  test('method get', () => {
    expect(get('d')).toBeFalsy()
    expect(get('a')).toBe(1)
  })

  test('method for of', () => {
    const result = []

    for (const item of onlyMap) {
      result.push(item)
    }
    expect(result).toEqual([1, 2, 3])
  })
})
