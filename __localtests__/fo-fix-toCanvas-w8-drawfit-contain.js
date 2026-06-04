/**
 * Wave-8 lab fork: force contain-center drawImage fit mode.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-drawfit-contain' → this module.
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
      drawFit: 'contain-center',
    },
  })
}

