import { useEventLoop } from '../lib/index.es'

describe('Test method <useEventLoop>', () => {
  const [addTask, close] = useEventLoop()

  test('addTask - 2', async () => {
    const cb = jest.fn()

    addTask({ cb, loopCount: 2, loopTime: 20 })
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(cb.mock.calls.length).toBe(2)
        close()
        resolve()
      }, 1000)
    })
  })

  test('addTask - 1', async () => {
    const cb = jest.fn()

    addTask({ cb })
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(cb.mock.calls.length).toBe(1)
        close()
        resolve()
      }, 1000)
    })
  })
})
