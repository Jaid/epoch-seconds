/** @module epoch-seconds */

/**
 * @param {number} [compareValue]
 * @returns {number} Seconds passed since Unix epoch (01 January 1970)
 */
export default compareValue => {
  const seconds = Math.floor(Date.now() / 1000)
  if (compareValue === undefined) {
    return seconds
  } else {
    return seconds - compareValue
  }
}