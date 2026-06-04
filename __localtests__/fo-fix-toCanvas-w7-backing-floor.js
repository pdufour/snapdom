/**
 * Lab fork of src/exporters/toCanvas.js — modify here for FO raster experiments.
 * Promote changes to src/ only after matrix validation (no-speculative-src-edits).
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-w7-backing-floor'
 */
import { isSafari } from '../src/utils/browser.js'
import {
  applyLabCustomDrawImage,
  getLabDrawKindOverride,
} from './fo-fix-toCanvas-custom-draw.js'
import { loadLabRasterSource } from './fo-fix-toCanvas-load-pipeline.js'
import {
  computeLabDrawFit,
  drawImageLabFit,
} from './fo-fix-toCanvas-draw-fit.js'

/**
 * Lab-only backing-store / DPR dimension knobs (recipe `labToCanvasOpts`).
 * @typedef {import('./fo-fix-toCanvas-draw-fit.js').LabDrawFitMode} LabDrawFitMode
 * @typedef {{
 *   backingRound?: 'none' | 'floor' | 'ceil' | 'round',
 *   dprSource?: 'harness' | 'device',
 *   dprMax?: number,
 *   stylePixels?: 'css' | 'device',
 *   optDims?: 'harness-css' | 'harness-device' | 'natural',
 *   ctxScale?: boolean,
 *   drawFit?: LabDrawFitMode,
 *   willReadFrequently?: boolean,
 *   colorSpace?: 'srgb' | 'display-p3',
 *   canvasColorSpace?: 'srgb' | 'display-p3',
 *   colorInterpolation?: 'srgb' | 'linearrgb',
 *   alpha?: boolean,
 *   desynchronized?: boolean | 'if-supported',
 *   // Post-decode drawImageInterval wait (ms); lab-wait-{N}ms rasterPatch via runner.
 *   decodeWaitMs?: number,
 *   loadPipeline?: string,
 *   clip?: string,
 *   clipAfterBg?: boolean,
 *   ctxFilter?: string,
 * }} LabToCanvasOpts
 */

/**
 * Lab-only Canvas2D draw knobs (FO fix lab). Merged: module override ← recipe options.
 * @typedef {{
 *   willReadFrequently?: boolean,
 *   imageSmoothingEnabled?: boolean,
 *   imageSmoothingQuality?: 'low' | 'medium' | 'high',
 *   globalAlpha?: number,
 *   resetTransformBeforeDraw?: boolean,
 *   clearBeforeDraw?: boolean,
 *   globalCompositeOperation?: GlobalCompositeOperation,
 *   contextAlpha?: boolean,
 *   premultiplyAlpha?: 'premultiply' | 'none' | 'default',
 *   filter?: string,
 * }} LabToCanvasCtxOptions
 */

/**
 * Lab recipe raster flags (`recipe.recipeFlags` → runner passes `recipeFlags` in toCanvas options).
 * @typedef {{
 *   smooth?: boolean,
 *   alpha?: number,
 *   waitMs?: number,
 *   roundDraw?: boolean,
 *   useNaturalDims?: boolean,
 * }} RecipeFlags
 */

/** Default flag values merged by {@link resolveRecipeFlags}. */
export const RECIPE_FLAGS = {
  smooth: undefined,
  alpha: undefined,
  waitMs: 0,
  roundDraw: false,
  useNaturalDims: false,
}

/**
 * @param {RecipeFlags | undefined | null} fromRecipe
 * @returns {Required<Pick<RecipeFlags, 'waitMs' | 'roundDraw' | 'useNaturalDims'>> & RecipeFlags}
 */
export function resolveRecipeFlags(fromRecipe) {
  const f = fromRecipe ?? {}
  return {
    smooth: f.smooth,
    alpha: f.alpha,
    waitMs: f.waitMs ?? RECIPE_FLAGS.waitMs,
    roundDraw: f.roundDraw ?? RECIPE_FLAGS.roundDraw,
    useNaturalDims: f.useNaturalDims ?? RECIPE_FLAGS.useNaturalDims,
  }
}

/**
 * @param {number} px
 * @param {'none' | 'floor' | 'ceil' | 'round'} mode
 */
function snapBackingPx(px, mode) {
  const n = Number(px) || 1
  if (mode === 'floor') return Math.max(1, Math.floor(n))
  if (mode === 'ceil') return Math.max(1, Math.ceil(n))
  if (mode === 'round') return Math.max(1, Math.round(n))
  return Math.max(1, n)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {string} mode
 * @param {number} w
 * @param {number} h
 */
function applyLabClip(ctx, mode, w, h) {
  if (!mode) return
  const insetPx = (px) => {
    const x = Math.min(px, w / 2 - 0.5)
    const y = Math.min(px, h / 2 - 0.5)
    ctx.beginPath()
    ctx.rect(x, y, Math.max(0, w - 2 * x), Math.max(0, h - 2 * y))
    ctx.clip()
  }
  const insetPct = (pct) => {
    const x = (w * pct) / 200
    const y = (h * pct) / 200
    ctx.beginPath()
    ctx.rect(x, y, Math.max(0, w - 2 * x), Math.max(0, h - 2 * y))
    ctx.clip()
  }
  const roundClip = (r) => {
    ctx.beginPath()
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(0, 0, w, h, r)
    } else {
      ctx.rect(0, 0, w, h)
    }
    ctx.clip()
  }

  switch (mode) {
    case 'rect-full':
      ctx.beginPath()
      ctx.rect(0, 0, w, h)
      ctx.clip()
      break
    case 'rect-inset-1px':
      insetPx(1)
      break
    case 'rect-inset-2px':
      insetPx(2)
      break
    case 'rect-inset-1pct':
      insetPct(1)
      break
    case 'rect-inset-2pct':
      insetPct(2)
      break
    case 'rect-inset-5pct':
      insetPct(5)
      break
    case 'rect-top-half':
      ctx.beginPath()
      ctx.rect(0, 0, w, h / 2)
      ctx.clip()
      break
    case 'rect-bottom-half':
      ctx.beginPath()
      ctx.rect(0, h / 2, w, h / 2)
      ctx.clip()
      break
    case 'rect-left-half':
      ctx.beginPath()
      ctx.rect(0, 0, w / 2, h)
      ctx.clip()
      break
    case 'rect-right-half':
      ctx.beginPath()
      ctx.rect(w / 2, 0, w / 2, h)
      ctx.clip()
      break
    case 'rect-center-25': {
      const m = 0.25
      ctx.beginPath()
      ctx.rect(w * m, h * m, w * (1 - 2 * m), h * (1 - 2 * m))
      ctx.clip()
      break
    }
    case 'rect-center-50': {
      const m = 0.25
      ctx.beginPath()
      ctx.rect(w * m, h * m, w * 0.5, h * 0.5)
      ctx.clip()
      break
    }
    case 'rect-center-75': {
      const m = 0.125
      ctx.beginPath()
      ctx.rect(w * m, h * m, w * (1 - 2 * m), h * (1 - 2 * m))
      ctx.clip()
      break
    }
    case 'rect-center-90': {
      const m = 0.05
      ctx.beginPath()
      ctx.rect(w * m, h * m, w * (1 - 2 * m), h * (1 - 2 * m))
      ctx.clip()
      break
    }
    case 'round-2':
      roundClip(2)
      break
    case 'round-4':
      roundClip(4)
      break
    case 'round-8':
      roundClip(8)
      break
    case 'round-12':
      roundClip(12)
      break
    case 'round-16':
      roundClip(16)
      break
    case 'round-max':
      roundClip(Math.min(w, h) / 2)
      break
    case 'circle-center': {
      const r = Math.min(w, h) / 2
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2)
      ctx.clip()
      break
    }
    case 'ellipse-center':
      ctx.beginPath()
      ctx.ellipse(w / 2, h / 2, w / 2, h / 2, 0, 0, Math.PI * 2)
      ctx.clip()
      break
    case 'ellipse-wide':
      ctx.beginPath()
      ctx.ellipse(w / 2, h / 2, w * 0.48, h * 0.35, 0, 0, Math.PI * 2)
      ctx.clip()
      break
    case 'ellipse-tall':
      ctx.beginPath()
      ctx.ellipse(w / 2, h / 2, w * 0.35, h * 0.48, 0, 0, Math.PI * 2)
      ctx.clip()
      break
    case 'path-triangle-top':
      ctx.beginPath()
      ctx.moveTo(0, h)
      ctx.lineTo(w / 2, 0)
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.clip()
      break
    case 'path-triangle-bottom':
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(w, 0)
      ctx.lineTo(w / 2, h)
      ctx.closePath()
      ctx.clip()
      break
    case 'path-diamond':
      ctx.beginPath()
      ctx.moveTo(w / 2, 0)
      ctx.lineTo(w, h / 2)
      ctx.lineTo(w / 2, h)
      ctx.lineTo(0, h / 2)
      ctx.closePath()
      ctx.clip()
      break
    case 'path-hexagon':
      ctx.beginPath()
      ctx.moveTo(w * 0.25, 0)
      ctx.lineTo(w * 0.75, 0)
      ctx.lineTo(w, h / 2)
      ctx.lineTo(w * 0.75, h)
      ctx.lineTo(w * 0.25, h)
      ctx.lineTo(0, h / 2)
      ctx.closePath()
      ctx.clip()
      break
    case 'path-star-5': {
      const cx = w / 2
      const cy = h / 2
      const or = Math.min(w, h) * 0.5
      const ir = or * 0.45
      ctx.beginPath()
      for (let i = 0; i < 10; i++) {
        const ang = (Math.PI / 2) * -1 + (i * Math.PI) / 5
        const rad = i % 2 === 0 ? or : ir
        const x = cx + Math.cos(ang) * rad
        const y = cy + Math.sin(ang) * rad
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.clip()
      break
    }
    case 'path-wave-top':
      ctx.beginPath()
      ctx.moveTo(0, h * 0.15)
      ctx.quadraticCurveTo(w * 0.25, 0, w * 0.5, h * 0.15)
      ctx.quadraticCurveTo(w * 0.75, h * 0.3, w, h * 0.15)
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()
      ctx.clip()
      break
    case 'evenodd-hole-25':
      ctx.beginPath()
      ctx.rect(0, 0, w, h)
      ctx.rect(w * 0.25, h * 0.25, w * 0.5, h * 0.5)
      ctx.clip('evenodd')
      break
    case 'evenodd-hole-50':
      ctx.beginPath()
      ctx.rect(0, 0, w, h)
      ctx.rect(w * 0.125, h * 0.125, w * 0.75, h * 0.75)
      ctx.clip('evenodd')
      break
    case 'rect-chamfer-8':
      ctx.beginPath()
      ctx.moveTo(8, 0)
      ctx.lineTo(w - 8, 0)
      ctx.lineTo(w, 8)
      ctx.lineTo(w, h - 8)
      ctx.lineTo(w - 8, h)
      ctx.lineTo(8, h)
      ctx.lineTo(0, h - 8)
      ctx.lineTo(0, 8)
      ctx.closePath()
      ctx.clip()
      break
    case 'rect-chamfer-16':
      ctx.beginPath()
      ctx.moveTo(16, 0)
      ctx.lineTo(w - 16, 0)
      ctx.lineTo(w, 16)
      ctx.lineTo(w, h - 16)
      ctx.lineTo(w - 16, h)
      ctx.lineTo(16, h)
      ctx.lineTo(0, h - 16)
      ctx.lineTo(0, 16)
      ctx.closePath()
      ctx.clip()
      break
    default:
      ctx.beginPath()
      ctx.rect(0, 0, w, h)
      ctx.clip()
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} source
 * @param {number} outW
 * @param {number} outH
 * @param {{ drawFit?: LabDrawFitMode, roundDrawImage?: boolean, naturalW: number, naturalH: number }} blit
 */
function drawLabImageBlit(ctx, source, outW, outH, blit) {
  const { drawFit = 'fill', roundDrawImage = false, naturalW, naturalH } = blit
  if (roundDrawImage) {
    const dw = Math.max(1, Math.round(outW))
    const dh = Math.max(1, Math.round(outH))
    ctx.drawImage(source, 0, 0, dw, dh)
  } else if (drawFit && drawFit !== 'fill') {
    const fit = computeLabDrawFit(drawFit, naturalW, naturalH, outW, outH)
    drawImageLabFit(ctx, source, fit)
  } else {
    ctx.drawImage(source, 0, 0, outW, outH)
  }
}

/** @type {LabToCanvasCtxOptions | null} */
let labToCanvasCtxOverride = null

/** @param {LabToCanvasCtxOptions | null} opts */
export function setLabToCanvasCtxOverride(opts) {
  labToCanvasCtxOverride = opts ? { ...opts } : null
}

export function clearLabToCanvasCtxOverride() {
  labToCanvasCtxOverride = null
}

/**
 * Lab-only async timing flush before/after decode and before drawImage (wave3 timing probes).
 * @typedef {'microtask' | 'microtask2' | 'promise0' | 'promise2' | 'postTask' | 'postTaskUser' | 'raf1' | 'raf2' | 'raf3' | 'timeout0' | 'timeout16' | 'timeout100' | 'idle' | 'perf1' | 'perf16'} LabToCanvasTimingStep
 * @typedef {{ decodeAfter?: LabToCanvasTimingStep[], drawBefore?: LabToCanvasTimingStep[] }} LabToCanvasTimingHooks
 */

/** @type {LabToCanvasTimingHooks | null} */
let labToCanvasTimingOverride = null

/** @param {LabToCanvasTimingHooks | null} hooks */
export function setLabToCanvasTimingOverride(hooks) {
  labToCanvasTimingOverride = hooks
    ? {
        decodeAfter: hooks.decodeAfter ? [...hooks.decodeAfter] : undefined,
        drawBefore: hooks.drawBefore ? [...hooks.drawBefore] : undefined,
      }
    : null
}

export function clearLabToCanvasTimingOverride() {
  labToCanvasTimingOverride = null
}

function waitMicrotask() {
  return new Promise((resolve) => queueMicrotask(resolve))
}

/** @param {number} count */
async function waitMicrotasks(count) {
  for (let i = 0; i < count; i++) await waitMicrotask()
}

/** @param {number} count */
async function waitRafChain(count) {
  for (let i = 0; i < count; i++) {
    await new Promise((resolve) => requestAnimationFrame(resolve))
  }
}

/** @param {number} ms */
function waitTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitIdleCallback() {
  if (typeof requestIdleCallback === 'function') {
    await new Promise((resolve) =>
      requestIdleCallback(() => resolve(undefined), { timeout: 50 }),
    )
    return
  }
  await waitRafChain(1)
}

/** @param {'background' | 'user-visible'} [priority] */
async function waitSchedulerPostTask(priority = 'background') {
  const sched = globalThis.scheduler
  if (sched && typeof sched.postTask === 'function') {
    await sched.postTask(() => {}, { priority })
    return
  }
  await waitTimeout(0)
}

/** @param {number} minMs */
async function waitPerfNowGate(minMs) {
  const t0 = performance.now()
  while (performance.now() - t0 < minMs) {
    await waitMicrotask()
  }
}

/**
 * @param {LabToCanvasTimingStep[]} steps
 */
async function runLabToCanvasTimingSteps(steps) {
  for (const step of steps) {
    switch (step) {
      case 'microtask':
        await waitMicrotask()
        break
      case 'microtask2':
        await waitMicrotasks(2)
        break
      case 'promise0':
        await Promise.resolve()
        break
      case 'promise2':
        await Promise.resolve().then(() => {})
        await Promise.resolve()
        break
      case 'postTask':
        await waitSchedulerPostTask('background')
        break
      case 'postTaskUser':
        await waitSchedulerPostTask('user-visible')
        break
      case 'raf1':
        await waitRafChain(1)
        break
      case 'raf2':
        await waitRafChain(2)
        break
      case 'raf3':
        await waitRafChain(3)
        break
      case 'timeout0':
        await waitTimeout(0)
        break
      case 'timeout16':
        await waitTimeout(16)
        break
      case 'timeout100':
        await waitTimeout(100)
        break
      case 'idle':
        await waitIdleCallback()
        break
      case 'perf1':
        await waitPerfNowGate(1)
        break
      case 'perf16':
        await waitPerfNowGate(16)
        break
      default:
        break
    }
  }
}

/**
 * @param {object} [options]
 * @returns {LabToCanvasTimingHooks}
 */
function resolveLabToCanvasTiming(options = {}) {
  const fromOpts = options.labToCanvasTiming ?? {}
  const base = labToCanvasTimingOverride ?? {}
  return {
    decodeAfter: fromOpts.decodeAfter ?? base.decodeAfter,
    drawBefore: fromOpts.drawBefore ?? base.drawBefore,
  }
}

/**
 * @param {LabToCanvasCtxOptions} a
 * @param {LabToCanvasCtxOptions} b
 * @returns {LabToCanvasCtxOptions}
 */
function mergeLabToCanvasCtx(a, b) {
  /** @type {LabToCanvasCtxOptions} */
  const out = { ...a }
  for (const [k, v] of Object.entries(b)) {
    if (v !== undefined) out[/** @type {keyof LabToCanvasCtxOptions} */ (k)] = v
  }
  return out
}

/**
 * @param {object} [options]
 * @returns {LabToCanvasCtxOptions}
 */
function resolveLabToCanvasCtx(options = {}) {
  const fromOpts = options.labCtx ?? options.labToCanvasCtx ?? {}
  const base = labToCanvasCtxOverride ?? {}
  return mergeLabToCanvasCtx(base, fromOpts)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {LabToCanvasCtxOptions} labCtx
 * @param {number} dpr
 * @param {boolean} [ctxScale]
 */
function applyLabToCanvasCtx(ctx, labCtx, dpr, ctxScale = true) {
  if (typeof labCtx.imageSmoothingEnabled === 'boolean') {
    ctx.imageSmoothingEnabled = labCtx.imageSmoothingEnabled
  }
  if (labCtx.imageSmoothingQuality) {
    ctx.imageSmoothingQuality = labCtx.imageSmoothingQuality
  }
  if (typeof labCtx.globalAlpha === 'number') {
    ctx.globalAlpha = labCtx.globalAlpha
  }
  if (labCtx.resetTransformBeforeDraw) {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)
  }
}

/**
 * Post-draw ImageData probes (structural dims from backing store / harness cssH only).
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLCanvasElement} canvas
 * @param {number} dpr
 * @param {number} outH css output height (pre-backing)
 * @param {LabToCanvasOpts} labOpts
 */
function applyLabImageDataPost(ctx, canvas, dpr, outH, labOpts) {
  const mode = labOpts.imageDataPost
  if (!mode) return

  const w = canvas.width
  const h = canvas.height
  if (w < 1 || h < 1) return

  const putSnapshot = (data, x = 0, y = 0) => {
    ctx.putImageData(data, x, y)
  }

  const putSnapshotDirtyRect = (data) => {
    ctx.putImageData(data, 0, 0, 0, 0, w, h)
  }

  const fullSnapshot = () => ctx.getImageData(0, 0, w, h)

  switch (mode) {
    case 'putImageData-full-snapshot':
      putSnapshot(fullSnapshot())
      break
    case 'putImageData-full-dirty-rect':
      putSnapshotDirtyRect(fullSnapshot())
      break
    case 'getImageData-roundtrip':
      putSnapshot(fullSnapshot())
      break
    case 'getImageData-roundtrip-twice': {
      let data = fullSnapshot()
      ctx.putImageData(data, 0, 0)
      data = ctx.getImageData(0, 0, w, h)
      ctx.putImageData(data, 0, 0)
      break
    }
    case 'createImageData-copy-full': {
      const snap = fullSnapshot()
      const fresh = ctx.createImageData(w, h)
      fresh.data.set(snap.data)
      putSnapshot(fresh)
      break
    }
    case 'createImageData-copy-half-w': {
      const w2 = Math.max(1, Math.floor(w / 2))
      const snap = ctx.getImageData(0, 0, w2, h)
      const fresh = ctx.createImageData(w2, h)
      fresh.data.set(snap.data)
      ctx.putImageData(fresh, 0, 0)
      break
    }
    case 'createImageData-empty':
      putSnapshot(ctx.createImageData(w, h))
      break
    case 'pixel-row-backing-0': {
      const row = ctx.getImageData(0, 0, w, 1)
      ctx.putImageData(row, 0, 0)
      break
    }
    case 'pixel-row-backing-mid': {
      const y = Math.min(h - 1, Math.floor(h / 2))
      const row = ctx.getImageData(0, y, w, 1)
      ctx.putImageData(row, 0, y)
      break
    }
    case 'pixel-row-backing-last': {
      const y = h - 1
      const row = ctx.getImageData(0, y, w, 1)
      ctx.putImageData(row, 0, y)
      break
    }
    case 'pixel-row-css-mid': {
      const y = Math.min(h - 1, Math.max(0, Math.floor(outH * dpr / 2)))
      const row = ctx.getImageData(0, y, w, 1)
      ctx.putImageData(row, 0, y)
      break
    }
    default:
      break
  }
}

/**
 * @param {LabToCanvasCtxOptions} labCtx
 * @param {LabToCanvasOpts} labToCanvasOpts
 * @returns {CanvasRenderingContext2DSettings | undefined}
 */
function buildGetContextAttributes(labCtx, labToCanvasOpts) {
  /** @type {CanvasRenderingContext2DSettings} */
  const attrs = {}
  if (labCtx.willReadFrequently || labToCanvasOpts.willReadFrequently) {
    attrs.willReadFrequently = true
  }
  if (typeof labToCanvasOpts.alpha === 'boolean') {
    attrs.alpha = labToCanvasOpts.alpha
  } else if (typeof labCtx.contextAlpha === 'boolean') {
    attrs.alpha = labCtx.contextAlpha
  } else if (labCtx.premultiplyAlpha === 'none') {
    attrs.alpha = false
  } else if (labCtx.premultiplyAlpha === 'premultiply') {
    attrs.alpha = true
  }
  if (labToCanvasOpts.colorSpace) {
    attrs.colorSpace = labToCanvasOpts.colorSpace
  }
  if (labToCanvasOpts.desynchronized === true) {
    attrs.desynchronized = true
  } else if (labToCanvasOpts.desynchronized === 'if-supported') {
    try {
      const probe = document.createElement('canvas').getContext('2d', {
        desynchronized: true,
      })
      if (probe) attrs.desynchronized = true
    } catch {
      /* unsupported */
    }
  }
  return Object.keys(attrs).length ? attrs : undefined
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {LabToCanvasOpts} labToCanvasOpts
 */
function applyLabCanvasColorAttrs(canvas, labToCanvasOpts) {
  if (labToCanvasOpts.canvasColorSpace) {
    try {
      canvas.colorSpace = labToCanvasOpts.canvasColorSpace
    } catch {
      /* unsupported */
    }
  }
  if (labToCanvasOpts.colorInterpolation) {
    canvas.style.colorInterpolation = labToCanvasOpts.colorInterpolation
  }
}

/**
 * Converts a data URL to a Canvas element.
 * Safari: render offscreen in a per-call temporary slot to avoid flicker, then remove it.
 *
 * @param {string} url - The image data URL.
 * @param {{ scale: number, dpr: number }} options - Context including scale and dpr (already normalized upstream).
 * @returns {Promise<HTMLCanvasElement>} Resolves with the rendered Canvas element.
 */
function isSvgDataURL(u) {
  return typeof u === 'string' && /^data:image\/svg\+xml/i.test(u)
}
function decodeSvgFromDataURL(u) {
  const i = u.indexOf(',')
  return i >= 0 ? decodeURIComponent(u.slice(i + 1)) : ''
}
function encodeSvgToDataURL(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}
function splitDecls(s) {
  let parts = [], buf = '', depth = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ';' && depth === 0) { parts.push(buf); buf='' } else buf += ch
  }
  if (buf.trim()) parts.push(buf)
  return parts.map(x => x.trim()).filter(Boolean)
}
function boxShadowToDropShadow(value) {
  const layers = []
  let buf = '', depth = 0
  for (let i = 0; i < value.length; i++) {
    const ch = value[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ',' && depth === 0) { layers.push(buf.trim()); buf = '' }
    else buf += ch
  }
  if (buf.trim()) layers.push(buf.trim())

  const fns = []
  for (const layer of layers) {
    if (/\binset\b/i.test(layer)) continue
    const nums = layer.match(/-?\d+(?:\.\d+)?px/gi) || []
    const [ox='0px', oy='0px', blur='0px'] = nums
    let color = layer.replace(/-?\d+(?:\.\d+)?px/gi, '')
                     .replace(/\binset\b/ig, '')
                     .trim().replace(/\s{2,}/g, ' ')
    const hasColor = !!color && color !== ','
    fns.push(`drop-shadow(${ox} ${oy} ${blur}${hasColor ? ` ${color}` : ''})`)
  }
  return fns.join(' ')
}
function rewriteDeclList(list) {
  const decls = splitDecls(list)
  let filter = null, wfilter = null, box = null
  const rest = []
  for (const d of decls) {
    const idx = d.indexOf(':')
    if (idx < 0) continue
    const prop = d.slice(0, idx).trim().toLowerCase()
    const val  = d.slice(idx + 1).trim()
    if (prop === 'box-shadow') box = val
    else if (prop === 'filter') filter = val
    else if (prop === '-webkit-filter') wfilter = val
    else rest.push([prop, val])
  }
  if (box) {
    const ds = boxShadowToDropShadow(box)
    if (ds) {
      filter = filter ? `${filter} ${ds}` : ds
      wfilter = wfilter ? `${wfilter} ${ds}` : ds
    }
  }
  const out = [...rest]
  if (filter) out.push(['filter', filter])
  if (wfilter) out.push(['-webkit-filter', wfilter])
  return out.map(([k, v]) => `${k}:${v}`).join(';')
}
function rewriteCssBlock(css) {
  return css.replace(/([^{}]+)\{([^}]*)\}/g, (_m, sel, body) => `${sel}{${rewriteDeclList(body)}}`)
}
function rewriteSvgBoxShadowToDropShadow(svgText) {
  svgText = svgText.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (m, css) =>
    m.replace(css, rewriteCssBlock(css))
  )
  svgText = svgText.replace(/style=(['"])([\s\S]*?)\1/gi, (m, q, body) =>
    `style=${q}${rewriteDeclList(body)}${q}`
  )
  return svgText
}
function maybeConvertBoxShadowForSafari(url) {
  if (!isSafari() || !isSvgDataURL(url)) return url
  try {
    const svg = decodeSvgFromDataURL(url)
    const fixed = rewriteSvgBoxShadowToDropShadow(svg)
    return encodeSvgToDataURL(fixed)
  } catch {
    return url
  }
}

/**
 * @param {string} url
 * @param {{
 *   width?:number,
 *   height?:number,
 *   scale?:number,
 *   dpr?:number,
 *   meta?:object,
 *   backgroundColor?: string,
 *   labCtx?: LabToCanvasCtxOptions,
 *   labToCanvasCtx?: LabToCanvasCtxOptions,
 *   labToCanvasOpts?: LabToCanvasOpts,
 *   labToCanvasTiming?: LabToCanvasTimingHooks,
 *   decodeIntervalMs?: number | false,
 *   decodeDouble?: boolean,
 *   decodeRaf?: boolean,
 *   roundDrawImage?: boolean,
 *   labLoadPipeline?: string,
 *   recipeFlags?: RecipeFlags,
 * }} options
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function toCanvas(url, options) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    labToCanvasOpts = {},
    labToCanvasTiming: labToCanvasTimingOpts,
    labLoadPipeline: labLoadPipelineOpt,
  } = options
  const recipeFlags = resolveRecipeFlags(options.recipeFlags)
  const labTiming = resolveLabToCanvasTiming({
    labToCanvasTiming: labToCanvasTimingOpts,
  })
  const {
    backingRound = 'floor',
    dprSource = 'harness',
    stylePixels = 'css',
    optDims = 'harness-css',
    ctxScale = true,
    drawFit = 'fill',
  } = labToCanvasOpts

  if (dprSource === 'device') {
    dpr = window.devicePixelRatio || 1
  }

  const dprMax = labToCanvasOpts.dprMax
  if (Number.isFinite(dprMax) && dprMax > 0) {
    dpr = Math.min(dpr, dprMax)
  }

  const {
    decodeIntervalMs,
    decodeDouble = false,
    decodeRaf = false,
    roundDrawImage: roundDrawImageOpt = false,
  } = options
  const roundDrawImage = roundDrawImageOpt || recipeFlags.roundDraw

  url = maybeConvertBoxShadowForSafari(url)

  const pipeline = labLoadPipelineOpt ?? labToCanvasOpts.loadPipeline

  /** @type {CanvasImageSource} */
  let drawSource
  /** @type {() => void} */
  let pipelineCleanup = () => {}

  if (pipeline) {
    const loaded = await loadLabRasterSource(url, pipeline)
    drawSource = loaded.source
    pipelineCleanup = loaded.cleanup
  } else {
    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    img.crossOrigin = 'anonymous'
    img.src = url
    await img.decode()
    if (decodeDouble) await img.decode()
    if (decodeIntervalMs === false) {
      /* lab-decode-off — no post-decode wait */
    } else if (typeof decodeIntervalMs === 'number' && decodeIntervalMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, decodeIntervalMs))
    }
    if (decodeRaf) {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    }
    if (recipeFlags.waitMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, recipeFlags.waitMs))
    }

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
    drawSource = img
  }

  try {
    if (pipeline && recipeFlags.waitMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, recipeFlags.waitMs))
    }
    if (labTiming.decodeAfter?.length) {
      await runLabToCanvasTimingSteps(labTiming.decodeAfter)
    }

    const natW =
      drawSource instanceof ImageBitmap ? drawSource.width : drawSource.naturalWidth
    const natH =
      drawSource instanceof ImageBitmap ? drawSource.height : drawSource.naturalHeight

  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

  if (recipeFlags.useNaturalDims) {
    optW = undefined
    optH = undefined
  } else if (optDims === 'natural') {
    optW = undefined
    optH = undefined
  } else if (optDims === 'harness-device') {
    if (Number.isFinite(optW)) optW = optW * dpr
    if (Number.isFinite(optH)) optH = optH * dpr
  }

  let outW, outH
  const hasW = Number.isFinite(optW)
  const hasH = Number.isFinite(optH)

  if (hasW && hasH) {
    outW = Math.max(1, optW)
    outH = Math.max(1, optH)
  } else if (hasW) {
    const k = optW / Math.max(1, refW)
    outW = optW
    outH = refH * k
  } else if (hasH) {
    const k = optH / Math.max(1, refH)
    outH = optH
    outW = refW * k
  } else {
    outW = natW
    outH = natH
  }

  outW = outW * scale
  outH = outH * scale

  const labCtx = resolveLabToCanvasCtx(options)
  if (typeof recipeFlags.smooth === 'boolean') {
    labCtx.imageSmoothingEnabled = recipeFlags.smooth
  }
  if (typeof recipeFlags.alpha === 'number') {
    labCtx.globalAlpha = recipeFlags.alpha
  }

  const canvas = document.createElement('canvas')
  canvas.width = snapBackingPx(outW * dpr, backingRound)
  canvas.height = snapBackingPx(outH * dpr, backingRound)
  if (stylePixels === 'device') {
    canvas.style.width = `${outW * dpr}px`
    canvas.style.height = `${outH * dpr}px`
  } else {
    canvas.style.width = `${outW}px`
    canvas.style.height = `${outH}px`
  }

  applyLabCanvasColorAttrs(canvas, labToCanvasOpts)

  const ctxAttrs = buildGetContextAttributes(labCtx, labToCanvasOpts)
  const ctx = canvas.getContext('2d', ctxAttrs)
  if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)

  if (labCtx.clearBeforeDraw) {
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
    if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)
  }

  const clipMode = labToCanvasOpts.clip
  const clipAfterBg = Boolean(labToCanvasOpts.clipAfterBg)
  const ctxFilter = labToCanvasOpts.ctxFilter

  if (clipMode && !clipAfterBg) {
    ctx.save()
    applyLabClip(ctx, clipMode, outW, outH)
  }

  if (backgroundColor && backgroundColor !== 'transparent') {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, outW, outH)
    ctx.restore()
  }

  if (clipMode && clipAfterBg) {
    ctx.save()
    applyLabClip(ctx, clipMode, outW, outH)
  }

  applyLabToCanvasCtx(ctx, labCtx, dpr, ctxScale)
  if (ctxFilter) ctx.filter = ctxFilter
  else if (labCtx.filter) ctx.filter = labCtx.filter
  if (labTiming.drawBefore?.length) {
    await runLabToCanvasTimingSteps(labTiming.drawBefore)
  }

  const composite = labCtx.globalCompositeOperation
  if (composite) ctx.globalCompositeOperation = composite

  const labDrawKind = getLabDrawKindOverride()
  const premul = labCtx.premultiplyAlpha
  if (labDrawKind && drawSource instanceof HTMLImageElement) {
    await applyLabCustomDrawImage(ctx, drawSource, outW, outH, meta, url, labDrawKind)
  } else if (premul && premul !== 'default' && typeof createImageBitmap === 'function') {
    try {
      const bitmapOpts =
        premul === 'none' ? { premultiplyAlpha: 'none' } : { premultiplyAlpha: premul }
      const bitmap = await createImageBitmap(drawSource, bitmapOpts)
      try {
        const fit = computeLabDrawFit(natW, natH, outW, outH, drawFit)
        drawImageLabFit(ctx, bitmap, fit)
      } finally {
        bitmap.close?.()
      }
    } catch {
      const fit = computeLabDrawFit(natW, natH, outW, outH, drawFit)
      drawImageLabFit(ctx, drawSource, fit)
    }
  } else if (roundDrawImage && drawFit === 'fill') {
    const dw = Math.max(1, Math.round(outW))
    const dh = Math.max(1, Math.round(outH))
    ctx.drawImage(drawSource, 0, 0, dw, dh)
  } else {
    const fit = computeLabDrawFit(natW, natH, outW, outH, drawFit)
    drawImageLabFit(ctx, drawSource, fit)
  }

  if (composite && composite !== 'source-over') {
    ctx.globalCompositeOperation = 'source-over'
  }

  if (ctxFilter || labCtx.filter) {
    ctx.filter = 'none'
  }

  if (clipMode) {
    try {
      ctx.restore()
    } catch {
      /* ok */
    }
  }

    applyLabImageDataPost(ctx, canvas, dpr, outH, labToCanvasOpts)
    return canvas
  } finally {
    try {
      pipelineCleanup?.()
    } catch {
      /* ok */
    }
  }
}
