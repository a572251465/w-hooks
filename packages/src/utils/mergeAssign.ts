export function mergeAssign(target: Record<string, any>, ...args: any[]) {
  let i = 0
  for (; i < arguments.length; i += 1) {
    const source = arguments[i]
    for (const key in source) {
      target[key] = source[key]
    }
  }
  return target
}
