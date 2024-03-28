import {test} from 'node:test'

import assert from './lib/assert.js'
import {getMainModuleDefault} from './lib/getMainModule.js'

const epochSeconds = await getMainModuleDefault<typeof import('epoch-seconds')>()
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
