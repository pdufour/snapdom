/**
 * Lab fork of __localtests__/fo-fix-toCanvas.js — force `desynchronized` context.
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-desync'
 */
export { clearLabToCanvasCtxOverride, clearLabToCanvasTimingOverride, setLabToCanvasCtxOverride, setLabToCanvasTimingOverride } from './fo-fix-toCanvas.js'

import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * Wrapper around the lab toCanvas fork that forces a desynchronized canvas context.
 * This is a harness-only raster experiment; do not promote to src/ without matrix validation.
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    labToCanvasOpts: {
      ...(options?.labToCanvasOpts ?? {}),
      desynchronized: 'if-supported',
    },
  })
}

