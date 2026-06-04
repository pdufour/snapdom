/**
 * Lab fork of __localtests__/fo-fix-toCanvas.js — wait 200ms after decode.
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-wait-200'
 */
export { clearLabToCanvasCtxOverride, clearLabToCanvasTimingOverride, setLabToCanvasCtxOverride, setLabToCanvasTimingOverride } from './fo-fix-toCanvas.js'

import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * Wrapper around the lab toCanvas fork that forces a 200ms post-decode wait.
 * This is a harness-only raster experiment; do not promote to src/ without matrix validation.
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    decodeIntervalMs: 200,
  })
}

