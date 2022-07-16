# useInterval

Timer hook can destroy the delayer through the internal unified condition function, and it can also be destroyed through the return function. It must waste redundant memory

[简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useInterval/index.en-US.md) | 简体中文

## Examples

### Default Usage

```js
import { useInterval } from 'apply-hooks'

// example 1
let count = 0
useInterval(
  () => {
    // TODO
    count++
  },
  { interval: 1000, conditionCb: () => count > 10 }
)

// example 2
let count1 = 0
const [close] = useInterval(
  () => {
    // TODO
    count1++
    if (count1 > 10) close()
  },
  { interval: 1000 }
)

// example 3
let count2 = 0
const [close1] = useInterval(() => {
  // TODO
  count2++
  if (count2 > 10) close()
}, 1000)
```

## API

```typescript
useInterval(fn, object | number)
```

### params

| Property | Description          | Type                      | Value | Required |
| -------- | -------------------- | ------------------------- | ----- | -------- |
| fn       | Timer Functions      | `(...args: any[]) => any` | -     | yes      |
| options  | Auxiliary parameters | `object or number`        | 0     | yes      |

### useInterval.options

- number
  - Timer time
- object
  - `{conditionCb: (...args: any[]) => any, interval: number}`
  - `conditionCb` Judge whether to cancel the timer function. Every time you call the timer, you will judge once
  - `interval` Timer time
