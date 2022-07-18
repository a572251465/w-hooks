# useCompact

Create a new array containing all the non false value elements in the original array

[简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useCompact/index.zh-CN.md) | English

## Examples

### Default Usage

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

### params

| Property | Description   | Type    | Value | Required |
| -------- | ------------- | ------- | ----- | -------- |
| array    | array or null | `array` | -     | yes      |
