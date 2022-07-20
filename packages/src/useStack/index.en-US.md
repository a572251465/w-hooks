# useStack

Implement the stack structure in the form of JavaScript. According to different parameters, the implementation methods are different, 0 = > array / 1 = > linked list

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useStack/index.zh-CN.md)

## Examples

### Default Usage

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

### Params

| Property | Description                 | Type     | value    |
| -------- | --------------------------- | -------- | -------- |
| type     | 0 => array/ 1 => LinkedList | `number` | 0        |
| max      | stack max value             | `number` | Infinity |

### push

> `push(value: T) => boolean`

- value: add value
- return: The return value is of boolean type. If the addition is successful, it is true; otherwise, if the addition is unsuccessful, it is false

### pop

> `pop() => T | boolean`

- return: If the pop-up from the stack is successful, the pop-up value is returned; otherwise, false is returned

### peek

> `peek() => T | boolean`

- return: Get the value at the top of the stack, return t after successful acquisition, otherwise return false

### isEmpty

> `isEmpty() => boolean`

- return: If the stack is empty, return true directly. Otherwise, false is returned

### toString

> `toString(splitSign = ',') => string`

- splitSign: Return value split character. The default is `,`
- return: Returns the spliced string

### getSize

> `getSize() => number`

- return: get stack size
