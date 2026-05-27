/**
 * In-memory debug log for `options.debug` — rendered on canvas exports, not console.
 * @module utils/debugLog
 */

import { cache } from '../core/cache.js'

/** @returns {string[]} */
export function getDebugLines() {
  return cache.session.debugLines || []
}

/** @param {boolean} enabled */
export function resetDebugLog(enabled) {
  cache.session.debugLines = enabled ? [] : undefined
}

/**
 * @param {{ debug?: boolean }|undefined} options
 * @returns {boolean}
 */
export function isDebug(options) {
  return !!(options && options.debug)
}

/**
 * @param {{ debug?: boolean }|undefined} options
 * @param {string|string[]} line
 */
export function pushDebugLine(options, line) {
  if (!isDebug(options)) return
  if (!cache.session.debugLines) cache.session.debugLines = []
  const lines = Array.isArray(line) ? line : [line]
  cache.session.debugLines.push(...lines)
}

/**
 * Draw log panel on a canvas (CSS pixel coordinates; call after ctx.scale(dpr)).
 * @param {CanvasRenderingContext2D} ctx
 * @param {string[]} logLines
 * @param {number} cssW
 * @param {number} cssH
 */
export function drawDebugOverlay(ctx, logLines, cssW, cssH) {
  if (!logLines?.length) return

  const padX = 8
  const padY = 6
  const padBottom = 10
  const lineH = 10
  const fontSize = 9
  const maxByHeight = Math.max(16, Math.floor((cssH * 0.94 - padY - padBottom) / lineH))

  ctx.save()
  ctx.font = `${fontSize}px ui-monospace, Menlo, monospace`

  let slice
  if (logLines.length <= maxByHeight) {
    slice = logLines.slice()
  } else {
    const kept = maxByHeight - 1
    slice = [`… ${logLines.length - kept} lines above`, ...logLines.slice(-kept)]
  }

  const maxW = Math.max(...slice.map((l) => ctx.measureText(l).width), 80)
  const boxW = Math.min(cssW * 0.55, cssW - padX * 2, maxW + padX * 2)
  const boxH = slice.length * lineH + padY + padBottom
  const x = padX
  const y = padY

  ctx.fillStyle = 'rgba(0, 0, 0, 0.85)'
  ctx.fillRect(x, y, boxW, boxH)
  ctx.strokeStyle = '#3ecf8e'
  ctx.lineWidth = 2
  ctx.strokeRect(x, y, boxW, boxH)

  ctx.fillStyle = '#b8f5d4'
  slice.forEach((line, i) => {
    ctx.fillText(line, x + padX, y + padY + i * lineH + fontSize)
  })

  ctx.restore()
}
