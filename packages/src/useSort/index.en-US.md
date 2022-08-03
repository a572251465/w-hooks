# useSort

Use different schemes to sort and sort the array

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useSort/index.zh-CN.md)

## Examples

### Default Usage

```js
// array
import { useSort } from 'apply-hooks'

const { bubbleSort, selectionSort, insertionSort, hillSort, fastSort } =
  useSort()

bubbleSort([4, 1, 5, 2, 7, 4, 8, 0, 2]) // [0, 1, 2, 2, 4, 4, 5, 7, 8]
selectionSort([4, 1, 5, 2, 7, 4, 8, 0, 2]) // [0, 1, 2, 2, 4, 4, 5, 7, 8]
insertionSort([4, 1, 5, 2, 7, 4, 8, 0, 2]) // [0, 1, 2, 2, 4, 4, 5, 7, 8]
hillSort([4, 1, 5, 2, 7, 4, 8, 0, 2]) // [0, 1, 2, 2, 4, 4, 5, 7, 8]
fastSort([4, 1, 5, 2, 7, 4, 8, 0, 2]) // [0, 1, 2, 2, 4, 4, 5, 7, 8]
```

## API

```typescript
const { bubbleSort, selectionSort, insertionSort, hillSort, fastSort } =
  useSort()
```

### RETURNS

### bubbleSort

> `bubbleSort(arr: number[]) => number[]` / bubble sort 

### selectionSort

> `selectionSort(arr: number[]) => number[]` / selection sort

### insertionSort

> `insertionSort(arr: number[]) => number[]` / insertion sort

### hillSort

> `hillSort(arr: number[]) => number[]` / hill sort

### fastSort

> `fastSort(arr: number[]) => number[]` / fast sort
