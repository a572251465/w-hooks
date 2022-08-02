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

const hillSort: ISortFn = (arr) => {
  if (arr.length <= 1) return arr

  // 以长度的中间之为分割点
  let gap = (arr.length - 1) >> 1
  while (gap >= 1) {
    let i = gap
    for (; i < arr.length; i += 1) {
      const cur = arr[i]

      // 表示上一个
      let endIndex = i - gap
      while (endIndex >= 0 && cur < arr[endIndex]) {
        ;[arr[endIndex + gap], arr[endIndex]] = [
          arr[endIndex],
          arr[endIndex + gap]
        ]
        endIndex -= gap
      }
    }

    gap = gap >> 1
  }
  return arr
}

const fastSort: ISortFn = (arr) => {
  if (arr.length <= 1) return arr

  const centerIndex = (arr.length - 1) >> 1
  const centerValue = arr[centerIndex]

  const leftArr = [] as number[]
  const rightArr = [] as number[]
  let i = 0
  for (; i < arr.length; i += 1) {
    if (i === centerIndex) continue
    ;(arr[i] > centerValue ? rightArr : leftArr).push(arr[i])
  }
  return fastSort(leftArr).concat(centerValue).concat(fastSort(rightArr))
}

const useSort = (): {
  bubbleSort: ISortFn
  selectionSort: ISortFn
  insertionSort: ISortFn
  hillSort: ISortFn
  fastSort: ISortFn
} => {
  return {
    bubbleSort,
    selectionSort,
    insertionSort,
    hillSort,
    fastSort
  }
}

export default useSort
