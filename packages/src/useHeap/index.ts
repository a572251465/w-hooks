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
const useHeap = <T>(
  data: T[],
  type = 'big'
): {
  poll: IPoll<T>
  offer: IOffer<T>
  isEmpty: IIsEmpty
  size: ISize
  peek: IPeek<T>
} => {
  const heap = type === 'big' ? new BigHeap<T>(data) : new SmallHeap<T>(data),
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
