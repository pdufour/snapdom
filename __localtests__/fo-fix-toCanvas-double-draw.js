/**
 * Lab fork of __localtests__/fo-fix-toCanvas.js — drawImage twice.
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-double-draw'
 */
export { clearLabToCanvasCtxOverride, clearLabToCanvasTimingOverride, setLabToCanvasCtxOverride, setLabToCanvasTimingOverride } from './fo-fix-toCanvas.js'

import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * Wrapper around the lab toCanvas fork that draws the decoded image twice.
 * This is a harness-only raster experiment; do not promote to src/ without matrix validation.
 */
export async function toCanvas(url, options) {
  // Render once using the shared fork, then drawImage again onto the same backing store.
  // We intentionally do not change composite mode: this probes idempotency / settle behavior.
  const canvas = await baseToCanvas(url, options)
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = url
  await img.decode()

  // Compute css output dims from style pixels (the base fork writes these).
  const outW = parseFloat(canvas.style.width) || canvas.width
  const outH = parseFloat(canvas.style.height) || canvas.height
  ctx.drawImage(img, 0, 0, outW, outH)
  return canvas
}

