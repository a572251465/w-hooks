import { isPrime } from '../lib/index.es'

describe('Test method <isPrime>', () => {
  it('isPrime', function () {
    expect(isPrime(2)).toBeTruthy()
    expect(isPrime(3)).toBeTruthy()
    expect(isPrime(10)).toBeFalsy()
    expect(isPrime(20)).toBeFalsy()
    expect(isPrime(41)).toBeTruthy()
  })
})
