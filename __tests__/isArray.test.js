const { isArray } = require('../lib/index.cjs')

describe('Test method <isArray>', () => {
  test('is array === true', () => {
    expect(isArray([])).toBeTruthy()
  })

  test('is number === false', () => {
    expect(isArray(123)).toBeFalsy()
  })

  test('is string === false', () => {
    expect(isArray('234')).toBeFalsy()
  })
})
