# useEventLoop

事件循环队列（模仿浏览器事件循环队列），用来定期执行某些任务

[English](https://github.com/a572251465/w-hooks/blob/main/packages/src/useEventLoop/index.en-US.md) | 简体中文

## 代码演示

### 基础用法

```js
import { useEventLoop } from 'apply-hooks'

const [addTask, closeEventLoop, setupEventLoop] = useEventLoop()
addTask({ cb: () => {}, loopCount: 2, loopTime: 1000 })
```

## API

```typescript
const [addTask, closeEventLoop, setupEventLoop] = useEventLoop()
```

### 返回值

#### addTask

- 添加任务

#### closeEventLoop

- 关闭 event loop

#### setupEventLoop

- 启动 event loop

### addTask 参数

| 参数         | 说明         | 类型       | 默认值   |
| ------------ | ------------ | ---------- | -------- |
| cb           | 调用函数     | `function` | -        |
| loopCount    | 最大调用次数 | `number`   | 1        |
| loopTime(ms) | 调用间隔时间 | `number`   | 1000/ 60 |
