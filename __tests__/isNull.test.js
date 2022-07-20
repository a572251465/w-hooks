const { isNull } = require('../lib/index.cjs')

describe('Test method <isNull>', () => {
  test('is null === true', () => {
    expect(isNull(null)).toBeTruthy()
  })

  test('is number === false', () => {
    expect(isNull(123)).toBeFalsy()
  })
})
