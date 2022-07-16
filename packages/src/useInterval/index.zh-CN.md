# useInterval

定时器 hook，通过条件函数内部统一对延时器进行销毁，也可以通过返回函数进行销毁，必须多余的内存浪费.

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useTimeout/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
import { useInterval } from 'apply-hooks'

// 使用方法1
let count = 0
useInterval(
  () => {
    // TODO
    count++
  },
  { interval: 1000, conditionCb: () => count > 10 }
)

// 使用方法2
let count1 = 0
const [close] = useInterval(
  () => {
    // TODO
    count1++
    if (count1 > 10) close()
  },
  { interval: 1000 }
)

// 使用方法3
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

### 参数

| 参数    | 说明           | 类型                      | 默认值 | 必须 |
| ------- | -------------- | ------------------------- | ------ | ---- |
| fn      | 延时器执行函数 | `(...args: any[]) => any` | -      | yes  |
| options | 辅助参数       | `object or number`        | 0      | yes  |

### useInterval.options

- number
  - 定时器时间
- object
  - `{conditionCb: (...args: any[]) => any, interval: number}`
  - `conditionCb` 判断取消定时器函数，每次调用定时器都会判断一次
  - `interval` 定时器时间
