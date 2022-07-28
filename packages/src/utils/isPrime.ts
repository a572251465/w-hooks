export const isPrime = (value: number): boolean => {
  const len = Math.sqrt(value) | 0

  let i = 2
  for (; i <= len; i += 1) {
    if (value % i === 0) return false
  }
  return true
}
