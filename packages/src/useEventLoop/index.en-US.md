# useEventLoop

Event loop queue (imitating browser event loop queue) is used to perform certain tasks regularly

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/useEventLoop/index.zh-CN.md)

## Examples

### Default Usage

```js
import { useEventLoop } from 'apply-hooks'

const [addTask, closeEventLoop, setupEventLoop] = useEventLoop()
addTask({ cb: () => {}, loopCount: 2, loopTime: 1000 })
```

## API

```typescript
const [addTask, closeEventLoop, setupEventLoop] = useEventLoop()
```

### returns

#### addTask

- add task

#### closeEventLoop

- close event loop

#### setupEventLoop

- open event loop

### addTask params

| Property     | Description   | Type       | value    |
| ------------ | ------------- | ---------- | -------- |
| cb           | call function | `function` | -        |
| loopCount    | call times    | `number`   | 1        |
| loopTime(ms) | call interval | `number`   | 1000/ 60 |
