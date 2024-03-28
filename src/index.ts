import type {NonNegative, NonNegativeInteger} from 'type-fest'

/**
 * @return Seconds passed since Unix epoch (January 1, 1970, UTC (same as GMT+0))
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 * @example const now = epochSeconds()
 */
const epochSeconds = (): NonNegativeInteger<number> => {
  const msSinceUnixEpoch = Date.now()
  const secondsSinceUnixEpoch = Math.trunc(msSinceUnixEpoch / 1000)
  return secondsSinceUnixEpoch as NonNegativeInteger<number>
}
/**
 * @return Seconds passed since Unix epoch (January 1, 1970, UTC (same as GMT+0)) with as much fractional precision as possible
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
 * @see https://nodejs.org/api/perf_hooks.html#performancenow
 * @example const now = epochSeconds.precise()
 */
epochSeconds.precise = (): NonNegative<number> => {
  const msSinceUnixEpoch = performance ? performance.timeOrigin + performance.now() : Date.now()
  const secondsSinceUnixEpoch = msSinceUnixEpoch / 1000
  return secondsSinceUnixEpoch
}

export default epochSeconds
export {epochSeconds}
