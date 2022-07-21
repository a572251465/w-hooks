# useQueue

维护一种队列的结构。参数不同内部实现不同

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useQueue/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
// array
import { useQueue } from 'apply-hooks'

const [enqueue, dequeue, front, isEmpty, getSize, toString] = useStack(0)

enqueue(1) // true
enqueue(2) // true
toString() // 1,2
dequeue() // 1
front() // 2
isEmpty() // false
getSize() // 1
dequeue() // 2
dequeue() // false
isEmpty() // true

// LinkedList
const [enqueue, dequeue, front, isEmpty, getSize, toString] = useStack(1)
// ...
```

## API

```typescript
const [enqueue, dequeue, front, isEmpty, getSize, toString] = useStack(type)
```

### 参数

### useQueue

| 参数 | 说明                 | 类型     | 默认值   |
| ---- | -------------------- | -------- | -------- |
| type | 0 => 数组/ 1 => 链表 | `number` | 0        |

### enqueue

> `enqueue(value: T) => boolean`

- value: 添加的值
- return: 返回值是 boolean 类型。如果添加成功是 true，反之如果添加不成功是 false

### dequeue

> `dequeue() => T | boolean`

- return: 如果从栈中弹出成功返回弹出的值，反之返回 false

### front

> `front() => T | boolean`

- return: 获取栈顶的值，获取成功后返回 T， 反之返回 false

### isEmpty

> `isEmpty() => boolean`

- return: 如果栈为空 直接返回 true。反之返回 false

### toString

> `toString(splitSign = ',') => string`

- splitSign: 返回值分割字符。默认是`,`
- return: 返回拼接后的字符串

### getSize

> `getSize() => number`

- return: 获取栈的大小
