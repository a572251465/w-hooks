/**
 * 1. 冒泡排序
 * 2. 选择排序
 * 3. 插入排序
 * 4. 希尔排序
 * 5. 快速排序
 */

interface ISortFn {
  (arr: number[]): number[]
}

const bubbleSort: ISortFn = (arr) => {
  if (arr.length <= 1) return arr

  const length = arr.length
  let i = length - 1
  for (; i >= 0; ) {
    for (let j = 0; j < i; j += 1) {
      const cur = arr[j],
        next = arr[j + 1]

      if (cur > next) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }

    i -= 1
  }

  return arr
}

const selectionSort: ISortFn = (arr) => {
  if (arr.length <= 1) return arr

  const length = arr.length
  let i = 0
  for (; i < length; i += 1) {
    let initialValue = arr[i],
      minIndex = i

    for (let j = i + 1; j < length; j += 1) {
      const next = arr[j]
      if (next < initialValue) {
        initialValue = next
        minIndex = j
      }
    }

    if (minIndex === i) continue
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

const insertionSort: ISortFn = (arr) => {
  if (arr.length <= 1) return arr

  const length = arr.length
  let i = 1

  for (; i < length; i += 1) {
    const cur = arr[i]

    let endIndex = i - 1
    while (endIndex >= 0 && cur < arr[endIndex]) {
      ;[arr[endIndex + 1], arr[endIndex]] = [arr[endIndex], arr[endIndex + 1]]
      endIndex -= 1
    }
  }
  return arr
}

const useSort = (): {
  bubbleSort: ISortFn
  selectionSort: ISortFn
  insertionSort: ISortFn
} => {
  return {
    bubbleSort,
    selectionSort,
    insertionSort
  }
}

export default useSort
