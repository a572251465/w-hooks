# useHeap

Maintain the nature of a small top pile / large top pile

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useHeap/index.zh-CN.md)

## Examples

### Default Usage

```js
// array
import { useHeap } from 'apply-hooks'

const { poll, peek, offer, isEmpty, size } = useHeap([], 'big') // big/ small
console.log(offer(10)) // true
console.log(offer(5)) // true
console.log(offer(40)) // true
console.log(offer(35)) // true
console.log(size()) // 4
console.log(peek()) // 40
console.log(poll()) // 40
console.log(poll()) // 35
console.log(poll()) // 10
console.log(poll()) // 5
console.log(poll()) // false
console.log(isEmpty()) // true

const { poll, peek, offer, isEmpty, size } = useHeap(
  [100, 20, 150, 10, 300, 5],
  'small'
)
console.log(size()) // 6
console.log(peek()) // 300
console.log(poll()) // 300
console.log(poll()) // 150
console.log(poll()) // 100
console.log(poll()) // 20
console.log(poll()) // 10
console.log(poll()) // 5
```

## API

```typescript
const { poll, peek, offer, isEmpty, size } = useHeap()
```

### params

| Property | Description                     | Type     | value |
| -------- | ------------------------------- | -------- | ----- |
| data     | Initialization data             | `T[]`    | []    |
| type     | Type (big big / small top heap) | `string` | 'big' |

### return function

### poll

> `poll(): T | boolean`

- return: Pop up the element at the top of the heap. If it is empty, return false

### peek

> `peek(): T | boolean`

- return: Get the element at the top of the heap. If it is empty, return false

### offer

> `offer(value: T): boolean`

- value Add an element from the bottom of the heap
- return: True is returned after adding successfully, otherwise false is returned

### isEmpty

> `isEmpty(): boolean`

- return: Determine whether the heap is empty

### size

> `size(): number`

- return: Return heap size
