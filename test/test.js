import path from "path"

const indexModule = require(process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src"))

/**
 * @type { import("../src") }
 */
const {default: epochSeconds} = indexModule

it("should run", () => {
  const result = epochSeconds()
  expect(result).toBeGreaterThan(1549410770)
})