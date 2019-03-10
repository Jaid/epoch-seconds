import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: epochSeconds} = indexModule

it("should run", () => {
  const result = epochSeconds()
  expect(result).toBeGreaterThan(1549410770)
})