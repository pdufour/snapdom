/**
 * Wave-8 lab fork: force blob-based decode/load pipeline.
 * Opt in: rasterPatch: 'lab-toCanvas-w8-pipeline-blob' → this module.
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * @param {string} url
 * @param {Parameters<typeof baseToCanvas>[1]} options
 */
export async function toCanvas(url, options) {
  return baseToCanvas(url, {
    ...options,
    // Force a blob-based path to shake out decode timing/URL issues.
    labLoadPipeline: options?.labLoadPipeline ?? 'decode-via-blob',
  })
}

