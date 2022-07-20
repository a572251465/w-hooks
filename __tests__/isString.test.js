const { isString } = require('../lib/index.cjs')

describe('Test method <isString>', () => {
  test('is array === false', () => {
    expect(isString([])).toBeFalsy()
  })

  test('is number === false', () => {
    expect(isString(123)).toBeFalsy()
  })

  test('is string === true', () => {
    expect(isString('234')).toBeTruthy()
  })
})
