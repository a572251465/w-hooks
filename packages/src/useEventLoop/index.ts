export interface IAddTaskOptions {
  cb: () => any
  loopCount?: number
  loopTime?: number
}

interface ITaskOptions {
  id: string
  cb: () => any
  endCount: number
  computedCount: number
  prevTime: number
  computedTime: number
}

const existTasks = new Set()
let allTasks = [] as ITaskOptions[]

let setupEventLoopFlag = false

const genKey = () => `${+new Date()}_${(Math.random() * 10000) | 0}`

const eventLoopCall = () => {
  if (setupEventLoopFlag === false) return

  let timer = setTimeout(() => {
    eventLoopDispatcher()
    clearTimeout(timer)
    eventLoopCall()
  }, 1000 / 60)
}

const eventLoopDispatcher = () => {
  if (allTasks.length <= 0) return

  const toBeAddTasks = [] as ITaskOptions[],
    toBeDelIds = [] as string[]

  let i = 0
  for (; i < allTasks.length; i += 1) {
    const task = allTasks[i]
    const { cb, endCount, computedCount, computedTime, prevTime, id } = task
    const curTime = +new Date()

    if (curTime - prevTime > computedTime) {
      if (endCount !== computedCount) {
        const newTask = {
          ...task,
          computedCount: computedCount + 1,
          prevTime: curTime
        } as ITaskOptions
        toBeAddTasks.push(newTask)
      }
      toBeDelIds.push(id)
      cb()
    }
  }

  allTasks = toBeAddTasks.concat(
    allTasks.filter((item) => !toBeDelIds.includes(item.id))
  )
}

const setupEventLoop = () => {
  if (setupEventLoopFlag) return
  setupEventLoopFlag = true

  eventLoopCall()
}

const closeEventLoop = () => (setupEventLoopFlag = false)

const addEventLoopTask = (options: IAddTaskOptions) => {
  const { cb, loopCount, loopTime } = Object.assign(
    {},
    {
      loopCount: 1,
      loopTime: 1000 / 60
    },
    options
  )
  if (existTasks.has(cb)) {
    return
  } else {
    existTasks.add(cb)
  }

  const newTask = {
    id: genKey(),
    cb,
    endCount: loopCount,
    computedCount: 1,
    prevTime: 0,
    computedTime: loopTime
  } as ITaskOptions
  allTasks.push(newTask)

  if (setupEventLoopFlag === false) setupEventLoop()
}

const useEventLoop = (): [
  typeof addEventLoopTask,
  typeof closeEventLoop,
  typeof setupEventLoop
] => {
  return [addEventLoopTask, closeEventLoop, setupEventLoop]
}

export default useEventLoop
