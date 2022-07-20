const { toInteger } = require('../lib/index.cjs')

describe('Test method <toInteger>', () => {
  test('is 123 === 123', () => {
    expect(toInteger(123)).toBe(123)
  })

  test('is 123.1 === 123', () => {
    expect(toInteger(123.1)).toBe(123)
  })
})
