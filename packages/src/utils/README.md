## Tool method

<div align='center'>

English | [简体中文](https://github.com/a572251465/w-hooks/blob/main/packages/src/utils/README.zh-CN.md)

</div>

### 🔨 Why

- strive to achieve zero errors and pass the rigorous jest test. [please check the test case ](https://github.com/a572251465/w-hooks/tree/main/__tests__)
- support various types of judgments
- good TS type prompt

### 📚 Method

- isFunction

```javascript
import { isFunction } from 'apply-hooks'

console.log(isFunction(() => {})) // true
console.log(isFunction(123)) // false
```

- isArray

```javascript
import { isArray } from 'apply-hooks'

console.log(isArray([])) // true
console.log(isArray(123)) // false
```

- isString

```javascript
import { isString } from 'apply-hooks'

console.log(isString('123')) // true
console.log(isString(123)) // false
```

- isNumber

```javascript
import { isNumber } from 'apply-hooks'

console.log(isNumber(123)) // true
console.log(isNumber('123')) // false
```

- isUndefined

```javascript
import { isUndefined } from 'apply-hooks'

console.log(isUndefined(undefined)) // true
console.log(isUndefined(123)) // false
```

- isObject

```javascript
import { isObject } from 'apply-hooks'

console.log(isObject(null)) // false
console.log(isObject({})) // true
```

- isNull

```javascript
import { isNull } from 'apply-hooks'

console.log(isNull(null)) // true
console.log(isNull(123)) // false
```

- isPromise

```javascript
import { isPromise } from 'apply-hooks'

const p = new Promise((resolve) => {
  resolve('111')
})
console.log(isPromise(p)) // true
console.log(isPromise(11)) // false
```

- isSymbol

```javascript
import { isSymbol } from 'apply-hooks'

console.log(isSymbol(Symbol('aaa'))) // true
console.log(isSymbol(111)) // false
```

- isWindow

```javascript
import { isWindow } from 'apply-hooks'

console.log(isWindow()) // judage whether the current operation is window
```

- toFinite

```javascript
import { toFinite } from 'apply-hooks'

console.log(toFinite(Infinity)) // 1.7976931348623157e+308
console.log(toFinite(0)) // 0
```

- toInteger

```javascript
import { toInteger } from 'apply-hooks'

console.log(toInteger(1.1)) // 1
```

- toNumber

```javascript
import { toNumber } from 'apply-hooks'

console.log(toNumber(111)) // 111
console.log(toNumber(null)) // 0
console.log(toNumber(undefined)) // NaN
console.log(toNumber(0b100)) // 4
console.log(toNumber(0o100)) // 64
console.log(toNumber(0x100)) // 256
```

- toType

```javascript
import { toType } from 'apply-hooks'

console.log(toType({})) // object
console.log(toType(123)) // number
console.log(toType(true)) // boolean
```

- isEmptyObject

```javascript
import { isEmptyObject } from 'apply-hooks'

const obj = {
  [Symbol('aa')]: 'aa'
}

console.log(isEmptyObject({})) // true
console.log(isEmptyObject(() => {})) // false
console.log(isEmptyObject({ name: 'xxx' })) // false
console.log(isEmptyObject(obj)) // false
```

- isPlainObject

```javascript
import { isPlainObject } from 'apply-hooks'

console.log(isPlainObject(null)) // false
console.log(isPlainObject(() => {})) // false
console.log(isPlainObject(Object.create(null))) // true
console.log(isPlainObject({})) // true
```

- each

```javascript
import { each } from 'apply-hooks'

// loop object
const obj = { a: 1, b: 2, c: 3 }
each(obj, (value, key) => {
  console.log(value, key) // 1/a 2/b 3/c
})

// loop array
const arr = [1, 2, 3]
each(arr, (value, key) => {
  console.log(value, key) // 1/0 2/1 3/2
})

// loop array-like
const str = '123'
each(str, (value, key) => {
  console.log(value, key) // 1/0 2/1 3/2
})
```
