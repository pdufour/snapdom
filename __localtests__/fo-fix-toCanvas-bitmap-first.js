/**
 * Lab fork: decode SVG → createImageBitmap (recipe opts) → blit to canvas / OffscreenCanvas.
 * Opt in: rasterPatch: 'lab-toCanvas-bitmap-first'
 */
import { isSafari } from '../src/utils/browser.js'

/**
 * @typedef {'none' | 'backing' | 'css-dpr' | 'natural'} LabToCanvasBitmapResize
 * @typedef {'canvas' | 'offscreen' | 'offscreen-transfer'} LabToCanvasBitmapSurface
 * @typedef {{
 *   premultiplyAlpha?: 'none' | 'premultiply' | 'default',
 *   colorSpaceConversion?: 'none' | 'default',
 *   resize?: LabToCanvasBitmapResize,
 *   resizeQuality?: 'high' | 'medium' | 'low' | 'pixelated',
 *   surface?: LabToCanvasBitmapSurface,
 *   closeBitmap?: boolean,
 * }} LabToCanvasBitmapOpts
 */

/** @param {number} px */
function snapFloor(px) {
  return Math.max(1, Math.floor(px))
}

/** @param {number} px */
function snapCeil(px) {
  return Math.max(1, Math.ceil(px))
}

/**
 * @param {HTMLImageElement} img
 * @param {LabToCanvasBitmapOpts} bitmapOpts
 * @param {{ backingW: number, backingH: number, cssW: number, cssH: number, dpr: number }} dims
 * @returns {Promise<ImageBitmap>}
 */
async function decodeToImageBitmap(img, bitmapOpts, dims) {
  /** @type {ImageBitmapOptions} */
  const opts = {}
  if (bitmapOpts.resizeQuality) {
    opts.resizeQuality = bitmapOpts.resizeQuality
  }
  if (bitmapOpts.premultiplyAlpha) {
    opts.premultiplyAlpha = bitmapOpts.premultiplyAlpha
  }
  if (bitmapOpts.colorSpaceConversion) {
    opts.colorSpaceConversion = bitmapOpts.colorSpaceConversion
  }
  const resize = bitmapOpts.resize ?? 'none'
  if (resize === 'backing') {
    opts.resizeWidth = snapFloor(dims.backingW)
    opts.resizeHeight = snapFloor(dims.backingH)
  } else if (resize === 'css-dpr') {
    opts.resizeWidth = snapFloor(dims.cssW * dims.dpr)
    opts.resizeHeight = snapFloor(dims.cssH * dims.dpr)
  } else if (resize === 'natural') {
    /* omit resizeWidth/Height — intrinsic decode size */
  }
  try {
    return await createImageBitmap(img, opts)
  } catch {
    return await createImageBitmap(img)
  }
}

/**
 * @param {ImageBitmap} bitmap
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} outW
 * @param {number} outH
 * @param {number} backingW
 * @param {number} backingH
 * @param {LabToCanvasBitmapSurface} surface
 */
function blitBitmap(bitmap, ctx, outW, outH, backingW, backingH, surface) {
  if (surface === 'offscreen' && typeof OffscreenCanvas !== 'undefined') {
    const off = new OffscreenCanvas(backingW, backingH)
    const octx = off.getContext('2d')
    if (!octx) throw new Error('OffscreenCanvas 2d unavailable')
    octx.drawImage(bitmap, 0, 0, backingW, backingH)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(off, 0, 0)
    return
  }
  if (surface === 'offscreen-transfer' && typeof OffscreenCanvas !== 'undefined') {
    const off = new OffscreenCanvas(backingW, backingH)
    const octx = off.getContext('2d')
    if (!octx) throw new Error('OffscreenCanvas 2d unavailable')
    octx.drawImage(bitmap, 0, 0, backingW, backingH)
    const offBitmap = off.transferToImageBitmap()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(offBitmap, 0, 0)
    offBitmap.close()
    return
  }
  ctx.drawImage(bitmap, 0, 0, outW, outH)
}

/**
 * @param {string} url
 * @param {{
 *   width?: number,
 *   height?: number,
 *   scale?: number,
 *   dpr?: number,
 *   meta?: object,
 *   backgroundColor?: string,
 *   labToCanvasOpts?: import('./fo-fix-toCanvas.js').LabToCanvasOpts,
 *   labToCanvasBitmapOpts?: LabToCanvasBitmapOpts,
 * }} options
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function toCanvas(url, options = {}) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    labToCanvasOpts = {},
    labToCanvasBitmapOpts = {},
  } = options

  const {
    backingRound = 'none',
    dprSource = 'harness',
    stylePixels = 'css',
    optDims = 'harness-css',
    ctxScale = true,
  } = labToCanvasOpts

  if (dprSource === 'device') {
    dpr = window.devicePixelRatio || 1
  }

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = url
  await img.decode()

  if (isSafari()) {
    img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
    document.body.appendChild(img)
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    } finally {
      try {
        img.remove()
      } catch {
        /* ok */
      }
    }
  }

  const natW = img.naturalWidth
  const natH = img.naturalHeight
  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

  if (optDims === 'natural') {
    optW = undefined
    optH = undefined
  } else if (optDims === 'harness-device') {
    if (Number.isFinite(optW)) optW = optW * dpr
    if (Number.isFinite(optH)) optH = optH * dpr
  }

  let outW
  let outH
  const hasW = Number.isFinite(optW)
  const hasH = Number.isFinite(optH)
  if (hasW && hasH) {
    outW = Math.max(1, optW)
    outH = Math.max(1, optH)
  } else if (hasW) {
    outW = optW
    outH = refH * (optW / Math.max(1, refW))
  } else if (hasH) {
    outH = optH
    outW = refW * (optH / Math.max(1, refH))
  } else {
    outW = natW
    outH = natH
  }

  outW = outW * scale
  outH = outH * scale

  let backingW = outW * dpr
  let backingH = outH * dpr
  if (backingRound === 'floor') {
    backingW = snapFloor(backingW)
    backingH = snapFloor(backingH)
  } else if (backingRound === 'ceil') {
    backingW = snapCeil(backingW)
    backingH = snapCeil(backingH)
  } else if (backingRound === 'round') {
    backingW = Math.max(1, Math.round(backingW))
    backingH = Math.max(1, Math.round(backingH))
  } else {
    backingW = Math.max(1, backingW)
    backingH = Math.max(1, backingH)
  }

  const canvas = document.createElement('canvas')
  canvas.width = backingW
  canvas.height = backingH
  if (stylePixels === 'device') {
    canvas.style.width = `${outW * dpr}px`
    canvas.style.height = `${outH * dpr}px`
  } else {
    canvas.style.width = `${outW}px`
    canvas.style.height = `${outH}px`
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('2d context unavailable')
  if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)

  if (backgroundColor) {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, outW, outH)
    ctx.restore()
  }

  const bitmap = await decodeToImageBitmap(img, labToCanvasBitmapOpts, {
    backingW,
    backingH,
    cssW: outW,
    cssH: outH,
    dpr,
  })

  const surface = labToCanvasBitmapOpts.surface ?? 'canvas'
  try {
    blitBitmap(bitmap, ctx, outW, outH, backingW, backingH, surface)
  } finally {
    if (labToCanvasBitmapOpts.closeBitmap) {
      try {
        bitmap.close()
      } catch {
        /* ok */
      }
    }
  }

  return canvas
}
