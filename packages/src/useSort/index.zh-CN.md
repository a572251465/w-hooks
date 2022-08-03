# useSort

使用不同的方案进行排序，对数组进行排序

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useSort/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

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

### 返回值

### bubbleSort

> `bubbleSort(arr: number[]) => number[]` / 冒泡排序

### selectionSort

> `selectionSort(arr: number[]) => number[]` / 选择排序

### insertionSort

> `insertionSort(arr: number[]) => number[]` / 插入排序

### hillSort

> `hillSort(arr: number[]) => number[]` / 希尔排序

### fastSort

> `fastSort(arr: number[]) => number[]` / 快速排序
