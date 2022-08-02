import { useSort } from '../lib/index.es'

const { bubbleSort, selectionSort, insertionSort, hillSort, fastSort } =
  useSort()
describe('Test method useSort', () => {
  it('bubbleSort', () => {
    expect(bubbleSort([4, 1, 5, 2, 7, 4, 8, 0, 2])).toEqual([
      0, 1, 2, 2, 4, 4, 5, 7, 8
    ])
  })

  it('selectionSort', () => {
    expect(selectionSort([4, 1, 5, 2, 7, 4, 8, 0, 2])).toEqual([
      0, 1, 2, 2, 4, 4, 5, 7, 8
    ])
  })

  it('insertionSort', () => {
    expect(insertionSort([4, 1, 5, 2, 7, 4, 8, 0, 2])).toEqual([
      0, 1, 2, 2, 4, 4, 5, 7, 8
    ])
  })

  it('hillSort', () => {
    expect(hillSort([4, 1, 5, 2, 7, 4, 8, 0, 2])).toEqual([
      0, 1, 2, 2, 4, 4, 5, 7, 8
    ])
  })

  it('fastSort', () => {
    expect(fastSort([4, 1, 5, 2, 7, 4, 8, 0, 2])).toEqual([
      0, 1, 2, 2, 4, 4, 5, 7, 8
    ])
  })
})
