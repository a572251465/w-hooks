const { getTag } = require('../lib/index.cjs')

describe('Test method <getTag>', () => {
  test('is object === true', () => {
    expect(getTag({})).toMatch(/Object/)
  })

  test('is number === true', () => {
    expect(getTag(123)).toMatch(/Number/)
  })
})
