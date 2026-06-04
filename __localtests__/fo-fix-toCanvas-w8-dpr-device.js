/**
 * Wave-8 lab fork: source dpr from window.devicePixelRatio.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-dpr-device' → this module.
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
      dprSource: 'device',
    },
  })
}

