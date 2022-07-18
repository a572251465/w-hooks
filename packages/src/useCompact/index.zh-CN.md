# useCompact

创建一个新数组，包含原数组中所有的非假值元素

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useCompact/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
import { useCompact } from 'apply-hooks'

console.log(useCompact(null)) // null

console.log(
  useCompact([
    1,
    2,
    0,
    false,
    null,
    NaN,
    function one1() {
      return true
    },
    function one2() {
      return false
    }
  ])
)
//  [ 1, 2, [Function: one1] ]
```

## API

```typescript
useCompact(array)
```

### 参数

| 参数  | 说明          | 类型    | 默认值 | 必须 |
| ----- | ------------- | ------- | ------ | ---- |
| array | 数组或是 null | `array` | -      | yes  |
