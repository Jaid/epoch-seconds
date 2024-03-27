import assert from 'node:assert'
import test from 'node:test'

import epochSeconds from 'epoch-seconds'

test(`epochSeconds()`, async () => {
  const result = epochSeconds()
  assert(result > 1_514_764_800) // Jan 01 2018 or greater
  assert(result < 3_786_912_000) // Jan 01 2090 or lower
})
test(`epochSeconds.precise()`, async () => {
  const result = epochSeconds.precise()
  assert(result > 1_514_764_800) // Jan 01 2018 or greater
  assert(result < 3_786_912_000) // Jan 01 2090 or lower
})
