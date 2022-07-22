# useLinkedList

Maintain a one-way linked list structure

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useLinkedList/index.zh-CN.md)

## Examples

### Default Usage

```js
// array
import { useLinkedList } from 'apply-hooks'

const {
  append,
  insert,
  get,
  indexOf,
  update,
  removeAt,
  remove,
  isEmpty,
  size,
  toString,
  getAll
} = useLinkedList()

append(1) // true
append(2) // true
insert(3) // true
insert(4, 0) // true
get(0) // 4
get(-1) // false
indexOf(2) // 2
update(3, 5) // true
toString('-') // 4-1-2-5
removeAt(0) // 4
remove(1) // 1
getAll() // [2,5]
isEmpty() // false
size() // 2
toString() // 2,5
```

## API

```typescript
const {
  append,
  insert,
  get,
  indexOf,
  update,
  removeAt,
  remove,
  isEmpty,
  size,
  toString,
  getAll
} = useLinkedList()
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

### toString

> `toString(splitSign = ','): string`

- splitSign: Returns the separator of the element
- return: Elements returned as strings

### getAll

> `getAll(): T[]`

- return: All elements are returned as an array
