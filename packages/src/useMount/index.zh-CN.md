# useMount

只在组件初始化时执行的 Hook。

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useMount/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
import { useMount } from 'apply-hooks'

useMount(() => {
  // TODO
})
```

## API

```typescript
useMount(fn)
```

### 参数

| 参数 | 说明               | 类型                      | 默认值 |
| ---- | ------------------ | ------------------------- | ------ |
| fn   | 初始化时执行的函数 | `(...args: any[]) => any` | -      |

### 执行时机

> 在原生事件 onload 之内执行，可以保证获取最新的 dom
