const { isSymbol } = require('../lib/index.cjs')

describe('Test method <isSymbol>', () => {
  test('is symbol === true', () => {
    const s = Symbol('aa')
    expect(isSymbol(s)).toBeTruthy()
  })

  test('is null === false', () => {
    expect(isSymbol(null)).toBeFalsy()
  })
})
