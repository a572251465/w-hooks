import { isPlainObject } from '../lib/index.es'

describe('Test method <isPlainObject>', () => {
  test('method isPlainObject', () => {
    const obj = new Object()

    expect(isPlainObject(null)).toBeFalsy()
    expect(isPlainObject(() => {})).toBeFalsy()
    expect(isPlainObject(Object.create(null))).toBeTruthy()
    expect(isPlainObject(Object.create(Array.prototype))).toBeFalsy()
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(obj)).toBeTruthy()
  })
})
