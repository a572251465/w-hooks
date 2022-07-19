import { toString } from './var/toString'

export const getTag = (value: unknown) => toString.call(value)
