const { toFinite } = require('../lib/index.cjs')

describe('Test method <toFinite>', () => {
  test('is infinity === true', () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
  })

  test('is null === 0', () => {
    expect(toFinite(null)).toBe(0)
  })
})
