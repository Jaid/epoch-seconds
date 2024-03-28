import {test} from 'node:test'

import assert from './lib/assert.js'

const epochSecondsModule = await import(`epoch-seconds`)
const epochSeconds = epochSecondsModule.epochSeconds
const assertedFloor = 1_514_764_800 // Jan 01 2018
const assertedCeil = 3_786_912_000 // Jan 01 2090
test(`epochSeconds()`, async () => {
  const result = epochSeconds()
  assert.numberBetween(result, assertedFloor, assertedCeil)
})
test(`epochSeconds.precise()`, async () => {
  const result = epochSeconds.precise()
  assert.numberBetween(result, assertedFloor, assertedCeil)
  assert.notInteger(result)
})
