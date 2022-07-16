# useTimeout

timeOut hook, The delayer hook can destroy the delayer internally to avoid the waste of excess memory

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useTimeout/index.zh-CN.md)

## Examples

### Default Usage

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

### Params

| Property | Description  | type                      | value | required |
| -------- | ------------ | ------------------------- | ----- | -------- |
| fn       | exec fn      | `(...args: any[]) => any` | -     | yes      |
| delay    | timeOut time | `number`                  | 0     | no       |
