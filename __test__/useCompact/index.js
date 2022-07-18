const { useCompact } = require('../../lib/index.cjs')
console.log(useCompact(null))

console.log(
  useCompact([
    1,
    2,
    0,
    false,
    null,
    NaN,
    function one1() {
      return true
    },
    function one2() {
      return false
    }
  ])
)
