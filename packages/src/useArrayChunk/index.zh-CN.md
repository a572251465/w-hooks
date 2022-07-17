# useArrayChunk

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果 array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useArrayChunk/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

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

### 参数

| 参数  | 说明           | 类型     | 默认值 | 必须 |
| ----- | -------------- | -------- | ------ | ---- |
| array | 数组或是类数组 | `array`  | -      | yes  |
| size  | 大小           | `number` | 0      | no   |
