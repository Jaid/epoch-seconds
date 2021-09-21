import path from "node:path"

import {expect, it} from "@jest/globals"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
 * @type { import("../src") }
 */
const {default: epochSeconds} = indexModule

it("should run", () => {
  const result = epochSeconds()
  expect(result).toBeGreaterThan(1_514_764_800) // Jan 01 2018 or greater
  expect(result).toBeLessThan(3_786_912_000) // Jan 01 2090 or lower
})