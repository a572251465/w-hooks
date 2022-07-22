# useLinkedList

维护一种单向链表的结构

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useLinkedList/index.en-US.md) | 简体中文

## 代码演示

### 基础用法 

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

### 返回函数

### append

> `append(value: T) => boolean`

- value: 添加的值
- return: 返回值是 boolean 类型。如果添加成功是 true，反之如果添加不成功是 false

### insert

> `insert(val: T, position = this.length): boolean`

- value: 插入的值
- return: 返回值是 boolean 类型。如果添加成功是 true，反之如果添加不成功是 false

### get

> `get(position: number): T | boolean`

- position 表示元素的下标位置(从 0 开始)
- return: 如果索引越界返回 false， 反之返回获取的值

### indexOf

> `indexOf(val: T): number`

- val: 获取下标的元素
- return: 检索到值，返回值所在索引。反之返回-1

### update

> `update(position: number, val: T): boolean`

- position: 更新的位置
- val: 更新的值
- return: 更新成功后返回 true，反之返回 false

### removeAt

> `removeAt(position: number): boolean | T`

- position 删除元素的位置
- return: 删除成功返回元素，反之越界等返回 false

### remove

> `remove(val: T): boolean | T`

- val: 要删除的元素
- return: 删除失败返回 false，删除成功后返回元素

### isEmpty

> `isEmpty(): boolean`

- return: 返回元素是否为空

### size

> `size(): number`

- return: 返回元素的个数

### toString

> `toString(splitSign = ','): string`

- splitSign: 返回元素的分隔符
- return: 以字符串形式返回的元素

### getAll

> `getAll(): T[]`

- return: 所有的元素以数组的形式返回
