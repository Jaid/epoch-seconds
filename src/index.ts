/**
 * @return {number} Seconds passed since Unix epoch (01 January 1970, UTC (same as GMT+0))
 */
const epochSeconds = (): number => {
  const msSinceUnixEpoch = Date.now()
  const secondsSinceUnixEpoch = Math.floor(msSinceUnixEpoch / 1000)
  return secondsSinceUnixEpoch
}

export default epochSeconds
export {epochSeconds}
