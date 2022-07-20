const { isArrayLike } = require('../lib/index.cjs')

describe('Test method <isArrayLike>', () => {
  test('is function === false', () => {
    expect(isArrayLike(() => {})).toBeFalsy()
  })

  test('is null === false', () => {
    expect(isArrayLike(null)).toBeFalsy()
  })

  test('is string === true', () => {
    expect(isArrayLike('123')).toBeTruthy()
  })

  test('is array === true', () => {
    expect(isArrayLike([])).toBeTruthy()
  })

  test('is object === true', () => {
    const obj = { length: 0 }
    expect(isArrayLike(obj)).toBeTruthy()
  })
})
