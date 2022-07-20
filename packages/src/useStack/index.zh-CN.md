# useStack

以 JavaScript 的形式实现栈结构。根据参数不同实现方式不同，0 => 数组/ 1 => 链表

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useStack/index.en-US.md) | 简体中文

## 代码演示

### 基础用法
 
```js
// array
import { useStack } from 'apply-hooks'

const [push, pop, peek, isEmpty, toString, getSize] = useStack(0)

push(1) // true
push(2) // true
toString() // 1,2
pop() // 2
peek() // 1
isEmpty() // false
getSize() // 1
pop() // 1
pop() // false
isEmpty() // true

// LinkedList
const [push, pop, peek, isEmpty, toString, getSize] = useStack(1)
// ...
```

## API

```typescript
const [push, pop, peek, isEmpty, toString, getSize] = useStack(type, max)
```

### 参数

### useStack

| 参数 | 说明                 | 类型     | 默认值   |
| ---- | -------------------- | -------- | -------- |
| type | 0 => 数组/ 1 => 链表 | `number` | 0        |
| max  | 栈最大值             | `number` | Infinity |

### push

> `push(value: T) => boolean`

- value: 添加的值
- return: 返回值是 boolean 类型。如果添加成功是 true，反之如果添加不成功是 false

### pop

> `pop() => T | boolean`

- return: 如果从栈中弹出成功返回弹出的值，反之返回 false

### peek

> `peek() => T | boolean`

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
