# useMount

只在组件初始化时执行的 Hook。

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useMount/index.zh-CN.md)

## 代码演示

### 基础用法

```js
import { useMount } from 'apply-hooks'

useMount(
  () => {
    // TODO
  },
  { isWindow: true }
)
```

## API

```typescript
useMount(fn, { isWindow: false })
```

### 参数

| 参数     | 说明               | 类型                      | 默认值 |
| -------- | ------------------ | ------------------------- | ------ |
| fn       | 初始化时执行的函数 | `(...args: any[]) => any` | -      |
| isWindow | 表示函数执行时机   | `boolean`                 | -      |

### 执行时机

- `isWindow`
  - true 在原生事件 onload 之内执行，可以保证获取最新的 dom
  - false 在绘制之前执行。调用 API`requestAnmationFrame`
  - 默认值是 true
