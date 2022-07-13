# useMount

A hook that executes a function after the component is mounted.

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useMount/index.zh-CN.md)

## Examples

### Default Usage

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

### Params

| 参数 | 说明                        | 类型                      | 默认值 |
| ---- | --------------------------- | ------------------------- | ------ |
| fn   | The function to be executed | `(...args: any[]) => any` | -      |

### Execution timing

> Executing within the native event onload ensures that the latest DOM is obtained
