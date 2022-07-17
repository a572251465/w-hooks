# useArrayChunk

Split the array into multiple size length blocks, and form a new array of these blocks. If the array cannot be divided into all equal length blocks, the last remaining elements will form a block

[简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useArrayChunk/index.zh-CN.md) | English

## Examples

### Default Usage

```js
import { useArrayChunk } from 'apply-hooks'

const arr = [1, 2, 3, 4, 5, 6, 7]

console.log(useArrayChunk(arr, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(useArrayChunk(arr, 2.3)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(useArrayChunk(arr, 2.8)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(useArrayChunk(arr, 0)) // [[1, 2, 3, 4, 5, 6, 7]]
console.log(useArrayChunk(arr, Infinity)) // [1, 2, 3, 4, 5, 6, 7]
console.log(useArrayChunk('1234', 3)) // [[1, 2, 3], [4]]
console.log(useArrayChunk('1234')) // [[1, 2, 3], [4]]
```

## API

```typescript
useArrayChunk(array, size)
```

### params

| Property | Description        | Type     | Value | Required |
| -------- | ------------------ | -------- | ----- | -------- |
| array    | array or arraylike | `array`  | -     | yes      |
| size     | number             | `number` | 0     | no       |
