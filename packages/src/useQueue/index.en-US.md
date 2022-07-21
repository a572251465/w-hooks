# useQueue

Maintain a queue structure. Different parameters, different internal implementations

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useQueue/index.zh-CN.md)

## Examples

### Default Usage

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

### Params

| Property | Description                 | Type     | value |
| -------- | --------------------------- | -------- | ----- |
| type     | 0 => array/ 1 => LinkedList | `number` | 0     |

### enqueue

> `enqueue(value: T) => boolean`

- value: add value
- return: The return value is of boolean type. If the addition is successful, it is true; otherwise, if the addition is unsuccessful, it is false

### dequeue

> `dequeue() => T | boolean`

- return: If the pop-up from the queue is successful, the pop-up value is returned; otherwise, false is returned

### front

> `front() => T | boolean`

- return: Get the value at the top of the queue, return t after successful acquisition, otherwise return false

### isEmpty

> `isEmpty() => boolean`

- return: If the queue is empty, return true directly. Otherwise, false is returned

### toString

> `toString(splitSign = ',') => string`

- splitSign: Return value split character. The default is `,`
- return: Returns the spliced string

### getSize

> `getSize() => number`

- return: get queue size
