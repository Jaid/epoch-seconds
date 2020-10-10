import {expect, it} from "@jest/globals"
import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
 * @type { import("../src") }
 */
const {default: epochSeconds} = indexModule

it("should run", () => {
  const result = epochSeconds()
  expect(result).toBeGreaterThan(1514764800) // Jan 01 2018 or greater
  expect(result).toBeLessThan(3786912000) // Jan 01 2090 or lower
})