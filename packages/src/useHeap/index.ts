import { isArray } from '../utils/isArray'
import { BigHeap } from './BigHeap'
import { SmallHeap } from './SmallHeap'

interface IPoll<T> {
  (): T | boolean
}
interface IPeek<T> {
  (): T | boolean
}
interface IOffer<T> {
  (value: T): boolean
}
interface IIsEmpty {
  (): boolean
}
interface ISize {
  (): number
}
function useHeap<T>(
  data?: T[] | string,
  type?: string
): {
  poll: IPoll<T>
  offer: IOffer<T>
  isEmpty: IIsEmpty
  size: ISize
  peek: IPeek<T>
} {
  let paramData = data || []
  let paramType = type || 'big'
  if (!isArray(paramData)) {
    paramType = paramData === 'big' ? 'big' : 'small'
    paramData = []
  }

  const heap =
      paramType === 'big'
        ? new BigHeap<T>(paramData as T[])
        : new SmallHeap<T>(paramData as T[]),
    poll = heap.poll.bind(heap),
    offer = heap.offer.bind(heap),
    isEmpty = heap.isEmpty.bind(heap),
    size = heap.size.bind(heap),
    peek = heap.peek.bind(heap)

  return {
    poll,
    offer,
    isEmpty,
    size,
    peek
  }
}

export default useHeap
