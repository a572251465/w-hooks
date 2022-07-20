const { isPromise } = require('../lib/index.cjs')

describe('Test method <isPromise>', () => {
  test('is Promise', () => {
    const p = new Promise((resolve) => {
      resolve(1111)
    })
    expect(isPromise(p)).toBeTruthy()
  })

  test('is null === false', () => {
    expect(isPromise(null)).toBeFalsy()
  })

  test('is {} === false', () => {
    expect(isPromise({})).toBeFalsy()
  })

  test('is {then: 1} === false', () => {
    expect(isPromise({ then: 1 })).toBeFalsy()
  })
})
