import path from 'node:path'
import {fileURLToPath} from 'node:url'

const dirName = path.dirname(fileURLToPath(import.meta.url))
const indexPath = process.env.MAIN ? path.resolve(dirName, `..`, process.env.MAIN) : path.join(dirName, `..`, `src`)
/**
 * @type { import("../src") }
 */
const {default: epochSeconds} = await import(indexPath)
it(`should run`, () => {
  const result = epochSeconds()
  expect(result).toBeGreaterThan(1_514_764_800) // Jan 01 2018 or greater
  expect(result).toBeLessThan(3_786_912_000) // Jan 01 2090 or lower
})
