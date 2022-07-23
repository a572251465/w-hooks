# usePriorityQueue

维护一种优先队列的结构。内部基于链表实现

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/usePriorityQueue/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
// array
import { usePriorityQueue } from 'apply-hooks'

const { enqueue, dequeue, front, isEmpty, getSize, toString } =
  usePriorityQueue()

enqueue(1) // true
enqueue(2) // true
enqueue(3, 0) // true
toString() // 3,1,2
dequeue() // 3
toString() // 1,2
getSize() // 2
front() // 1
isEmpty() // false
```

## API

```typescript
const { enqueue, dequeue, front, isEmpty, getSize, toString } =
  usePriorityQueue()
```

### 参数

### enqueue

> `enqueue(val: T, sort?: number): boolean`

- val: 添加的值
- sort：优先插入的顺序(只能是大于 0 的数字表示)
- return: 返回值是 boolean 类型。如果添加成功是 true，反之如果添加不成功是 false

### dequeue

> `dequeue() => T | boolean`

- return: 如果从队列中弹出成功返回弹出的值，反之返回 false

### front

> `front() => T | boolean`

- return: 获取队列顶的值，获取成功后返回 T， 反之返回 false

### isEmpty

> `isEmpty() => boolean`

- return: 如果队列为空 直接返回 true。反之返回 false

### toString

> `toString(splitSign = ',') => string`

- splitSign: 返回值分割字符。默认是`,`
- return: 返回拼接后的字符串

### getSize

> `getSize() => number`

- return: 获取队列的大小
