# useHeap

维护一种小顶堆/ 大顶堆的性质

简体中文 | [English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useHeap/index.en-US.md)

## 代码演示

### 基础用法

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

### 参数

| 参数 | 说明                       | 类型     | 默认值 |
| ---- | -------------------------- | -------- | ------ |
| data | 初始化数据                 | `T[]`    | []     |
| type | 类型(大 big/小 small 顶堆) | `string` | 'big'  |

### 返回函数

### poll

> `poll(): T | boolean`

- return: 弹出堆顶的元素，如果为空的话，返回 false

### peek

> `peek(): T | boolean`

- return: 获取堆顶的元素，如果为空返回 false

### offer

> `offer(value: T): boolean`

- value 从堆底添加一个元素
- return: 添加成功返回 true，反之返回 false

### isEmpty

> `isEmpty(): boolean`

- return: 判断堆是否为空

### size

> `size(): number`

- return: 返回堆大小
