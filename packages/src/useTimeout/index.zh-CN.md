# useTimeout

延时器 hook，内部统一对延时器进行销毁，避免多余的内存浪费.

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useInterval/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
import { useTimeout } from 'apply-hooks'

useTimeout(() => {
  // TODO
}, 1000)
```

## API

```typescript
useTimeout(fn, delay)
```

### 参数

| 参数  | 说明           | 类型                      | 默认值 | 必须 |
| ----- | -------------- | ------------------------- | ------ | ---- |
| fn    | 延时器执行函数 | `(...args: any[]) => any` | -      | yes  |
| delay | 延迟时间       | `number`                  | 0      | no   |
