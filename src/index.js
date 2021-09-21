/** @module epoch-seconds */

/**
 * @return {number} Seconds passed since Unix epoch (01 January 1970, UTC (same as GMT+0))
 */
export default () => {
  const msSinceUnixEpoch = Date.now()
  const secondsSinceUnixEpoch = Math.floor(msSinceUnixEpoch / 1000)
  return secondsSinceUnixEpoch
}