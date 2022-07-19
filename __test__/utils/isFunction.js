const { isFunction } = require('../../lib/index.cjs')

const test = () => {}
console.log(isFunction(test)) // true
console.log(isFunction(123)) // false
console.log(isFunction([])) // false
