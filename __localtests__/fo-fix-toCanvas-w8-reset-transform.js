/**
 * Wave-8 lab fork: force ctx resetTransformBeforeDraw.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-reset-transform' → this module.
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * @param {string} url
 * @param {Parameters<typeof baseToCanvas>[1]} options
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    labToCanvasCtx: {
      ...(options?.labToCanvasCtx ?? {}),
      resetTransformBeforeDraw: true,
    },
  })
}

