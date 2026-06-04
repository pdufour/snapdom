/**
 * Wave-8 lab fork: ignore meta.w0/h0 references (always use natural dimensions).
 * Opt in: rasterPatch: 'lab-toCanvas-w8-ignore-meta' → this module.
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * @param {string} url
 * @param {Parameters<typeof baseToCanvas>[1]} options
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    meta: {},
  })
}

