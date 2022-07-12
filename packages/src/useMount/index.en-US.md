# useMount

A hook that executes a function after the component is mounted.

## Examples

### Default Usage

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

### Params

| 参数     | 说明                                  | 类型                      | 默认值 |
| -------- | ------------------------------------- | ------------------------- | ------ |
| fn       | The function to be executed           | `(...args: any[]) => any` | -      |
| isWindow | Indicates the function execution time | `boolean`                 | -      |

### Execution timing

- `isWindow`
  - true: Executing within the native event onload ensures that the latest DOM is obtained
  - false: Execute before drawing. call API`requestAnmationFrame`
  - default value: true
