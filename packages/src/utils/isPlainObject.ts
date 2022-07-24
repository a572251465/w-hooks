import { toType } from './toType'
import { fnToString } from './var/fnToString'
import { getProto } from './var/getProto'
import { hasOwn } from './var/hasOwn'
import { ObjectFunctionString } from './var/ObjectFunctionString'

export const isPlainObject = (obj: object): boolean => {
  if (!obj || toType(obj) !== 'object') return false

  // Object.create(null)
  const proto = getProto(obj)
  if (!proto) return true

  const Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  // function Object() {}
  return (
    typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
  )
}
