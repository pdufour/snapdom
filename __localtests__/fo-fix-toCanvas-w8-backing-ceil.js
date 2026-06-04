/**
 * Wave-8 lab fork: force backing store ceil rounding.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-backing-ceil' → this module.
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * @param {string} url
 * @param {Parameters<typeof baseToCanvas>[1]} options
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    labToCanvasOpts: {
      ...(options?.labToCanvasOpts ?? {}),
      backingRound: 'ceil',
    },
  })
}

