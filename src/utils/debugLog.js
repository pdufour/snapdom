/**
 * Debug log state for capture sessions.
 * @module utils/debugLog
 */

let enabled = false
let lines = []

/**
 * Reset the debug log.
 * @param {boolean} debug - whether debug logging is enabled
 */
export function resetDebugLog(debug) {
  enabled = !!debug
  lines = []
}

/**
 * Push a line to the debug log if enabled.
 * @param {string} line
 */
export function pushDebugLine(line) {
  if (enabled) {
    lines.push(line)
  }
}

/**
 * Get all lines from the current debug log.
 * @returns {string[]}
 */
export function getDebugLines() {
  return lines
}
