# useDoublyLinkedList

Maintain a bi-directional linked list structure

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useDoublyLinkedList/index.zh-CN.md)

## Examples

### Default Usage

```js
// array
import { useDoublyLinkedList } from 'apply-hooks'

const {
  append,
  insert,
  indexOf,
  get,
  size,
  remove,
  removeAt,
  update,
  forwardString,
  backwardString
} = useDoublyLinkedList()

append(1) // true
append(2) // true
insert(3) // true
insert(4, 0) // true
backwardString() // 4,1,2,3
forwardString() // 3,2,1,4
indexOf(4) // 0
get(1) // 1
size() // 4
removeAt(0) // 4
remove(3) // 3
backwardString() // 1,2
forwardString() // 2,1
update(0, 3) // true
backwardString() // 3 2
```

## API

```typescript
const {
  append,
  insert,
  indexOf,
  get,
  size,
  remove,
  removeAt,
  update,
  forwardString,
  backwardString
} = useDoublyLinkedList()
```

### return function

### append

> `append(value: T) => boolean`

- value: add value
- return: The return value is of boolean type. If the addition is successful, it is true; otherwise, if the addition is unsuccessful, it is false

### insert

> `insert(val: T, position = this.length): boolean`

- value: insert value
- return: The return value is of boolean type. If the addition is successful, it is true; otherwise, if the addition is unsuccessful, it is false

### get

> `get(position: number): T | boolean`

- position: Indicates the subscript position of the element (starting from 0)
- return: If the index is out of range, return false, otherwise return the obtained value

### indexOf

> `indexOf(val: T): number`

- val: get element index
- return: Retrieve the value and return the index of the value. Otherwise, return -1

### update

> `update(position: number, val: T): boolean`

- position: update location
- val: update value
- return: It returns true after the update is successful, otherwise it returns false

### removeAt

> `removeAt(position: number): boolean | T`

- position delete element location
- return: If the element is deleted successfully, it will return false if it crosses the boundary

### remove

> `remove(val: T): boolean | T`

- val: delete element
- return: If the deletion fails, false will be returned. If the deletion succeeds, the element will be returned

### isEmpty

> `isEmpty(): boolean`

- return: Returns whether the element is empty

### size

> `size(): number`

- return: Returns the number of elements

### backwardString

> `backwardString(splitSign = ','): string`

- splitSign: Returns the separator of the element
- return: Elements returned as strings (front to back)

### forwardString

> `forwardString(splitSign = ','): string`

- splitSign: Returns the separator of the element
- return: Elements returned as strings (from back to front)
