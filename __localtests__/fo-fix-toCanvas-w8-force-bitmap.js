/**
 * Wave-8 lab fork: always draw via createImageBitmap when available.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-force-bitmap' → this module.
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * @param {string} url
 * @param {Parameters<typeof baseToCanvas>[1]} options
 */
export async function toCanvas(url, options) {
  const want = options?.labToCanvasCtx?.premultiplyAlpha
  if (typeof createImageBitmap !== 'function') {
    return baseToCanvas(url, options)
  }
  // baseToCanvas already has a premultiplyAlpha bitmap path, but only when requested.
  // This fork forces it on (while respecting the caller's chosen mode when provided).
  return baseToCanvas(url, {
    ...options,
    labToCanvasCtx: {
      ...(options?.labToCanvasCtx ?? {}),
      premultiplyAlpha: want ?? 'premultiply',
    },
  })
}

