const { toNumber } = require('../lib/index.cjs')

describe('Test method <toNumber>', () => {
  test('is 1 === 1', () => {
    expect(toNumber(1)).toBe(1)
  })

  test('is null === 0', () => {
    expect(toNumber(null)).toBe(0)
  })

  test('is "3" === 3', () => {
    expect(toNumber('3')).toBe(3)
  })

  test('is Symbol === NaN', () => {
    expect(toNumber(Symbol('aa'))).toBe(NaN)
  })

  test('is 0b100', () => {
    expect(toNumber(0b100)).toBe(4)
  })

  test('is 0o100', () => {
    expect(toNumber(0o100)).toBe(64)
  })

  test('is 0x100', () => {
    expect(toNumber(0x100)).toBe(256)
  })
})
