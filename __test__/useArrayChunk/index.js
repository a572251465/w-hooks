const { useArrayChunk } = require('../../lib/index.cjs')

const arr = [1, 2, 3, 4, 5, 6, 7]

console.log(useArrayChunk(arr, 2))
console.log(useArrayChunk(arr, 2.3))
console.log(useArrayChunk(arr, 2.8))
console.log(useArrayChunk(arr, 0))
console.log(useArrayChunk(arr, Infinity))
console.log(useArrayChunk("1234", 3))
console.log(useArrayChunk("1234"))
console.log(useArrayChunk(() => ({})))
