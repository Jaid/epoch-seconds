/** @module epoch-seconds */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @example
 * import epochSeconds from "epoch-seconds"
 * epochSeconds()
 * // 1549410770
 * @returns {number} Seconds since epoch
 */
export default () => Math.floor(Date.now() / 1000)