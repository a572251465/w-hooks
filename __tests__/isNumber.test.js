const { isNumber } = require('../lib/index.cjs')

describe('Test method <isNumber>', () => {
  test('is array === false', () => {
    expect(isNumber([])).toBeFalsy()
  })

  test('is number === false', () => {
    expect(isNumber(123)).toBeTruthy()
  })

  test('is string === false', () => {
    expect(isNumber('234')).toBeFalsy()
  })
})
