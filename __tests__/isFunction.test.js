const { isFunction } = require('../lib/index.cjs')

describe('Test method isFunction：', () => {
  test('is function === true', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })
  test('is null === false', () => {
    expect(isFunction(null)).toBeFalsy()
  })
  test('is array === false', () => {
    expect(isFunction([])).toBeFalsy()
  })
  test('is number === false', () => {
    expect(isFunction(123)).toBeFalsy()
  })
  test('is boolean === false', () => {
    expect(isFunction(false)).toBeFalsy()
  })
})
