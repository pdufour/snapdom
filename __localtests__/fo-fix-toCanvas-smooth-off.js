/**
 * Lab fork of __localtests__/fo-fix-toCanvas.js — force image smoothing off.
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-smooth-off'
 */
export { clearLabToCanvasCtxOverride, clearLabToCanvasTimingOverride, setLabToCanvasCtxOverride, setLabToCanvasTimingOverride } from './fo-fix-toCanvas.js'

import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * Wrapper around the lab toCanvas fork that forces `imageSmoothingEnabled=false`.
 * This is a harness-only raster experiment; do not promote to src/ without matrix validation.
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    labToCanvasCtx: {
      ...(options?.labToCanvasCtx ?? options?.labCtx ?? {}),
      imageSmoothingEnabled: false,
    },
  })
}

