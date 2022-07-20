const { isObject } = require('../lib/index.cjs')

describe('Test method <isObject>', () => {
  test('is object === true', () => {
    expect(isObject({})).toBeTruthy()
  })

  test('is number === false', () => {
    expect(isObject(123)).toBeFalsy()
  })
})
