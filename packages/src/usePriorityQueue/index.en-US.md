# usePriorityQueue

Maintain a priority queue structure. Internal implementation based on linked list

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/usePriorityQueue/index.zh-CN.md)

## Examples

### Default Usage

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

### Params

### enqueue

> `enqueue(val: T, sort?: number): boolean`

- value: add value
- sort: Priority insertion order (only numbers greater than 0)
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
