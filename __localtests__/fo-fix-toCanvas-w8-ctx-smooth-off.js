/**
 * Wave-8 lab fork: force image smoothing off (pixelated) regardless of recipe ctx.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-ctx-smooth-off' → this module.
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
      imageSmoothingEnabled: false,
    },
  })
}

