const { toType } = require('../lib/index.cjs')

describe('Test method <toType>', () => {
  test('is {} === object', () => {
    expect(toType({})).toBe('object')
  })

  test('is 123 === number', () => {
    expect(toType(123)).toBe('number')
  })
})
