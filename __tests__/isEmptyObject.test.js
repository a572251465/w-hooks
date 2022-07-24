import { isEmptyObject } from '../lib/index.es'

describe('Test method <isEmptyObject>', () => {
  const obj = {
    [Symbol('aaa')]: 'test'
  }

  test('method isEmptyObject', () => {
    expect(isEmptyObject(obj)).toBeFalsy()
    expect(isEmptyObject(() => {})).toBeFalsy()
    expect(isEmptyObject({})).toBeTruthy()
  })
})
