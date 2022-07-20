const { isUndefined } = require('../lib/index.cjs')

describe('Test method <isUndefined>', () => {
  test('is undefined === true', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })

  test('is number === false', () => {
    expect(isUndefined(123)).toBeFalsy()
  })
})
