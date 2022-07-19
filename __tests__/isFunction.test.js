const { isFunction } = require('../lib/index.cjs')

describe('Test method isFunction：', () => {
  test('is function', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })
  test('is null', () => {
    expect(isFunction(null)).toBeFalsy()
  })
  test('is array', () => {
    expect(isFunction([])).toBeFalsy()
  })
  test('is number', () => {
    expect(isFunction(123)).toBeFalsy()
  })
  test('is boolean', () => {
    expect(isFunction(false)).toBeFalsy()
  })
})
