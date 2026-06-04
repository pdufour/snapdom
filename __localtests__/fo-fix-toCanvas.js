/**
 * Lab fork of src/exporters/toCanvas.js — modify here for FO raster experiments.
 * Promote changes to src/ only after matrix validation (no-speculative-src-edits).
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas'
 * Product experimentalRaster* flags: rasterPatch 'product-toCanvas' + recipe.harnessProductToCanvas
 *   (see recipes-tocanvas-flags-wave3.js tc-flags-w3-experimental-raster-all).
 * Manual lab URL: ?labToCanvas=1 (forces lab fork when recipe has no other rasterPatch)
 */
import { isSafari } from '../src/utils/browser.js'
import {
  applyRasterOnlySvgPatch,
  resolveRasterSvgPatchId,
} from '../src/exporters/rasterOnlySvgPatch.js'
import { rasterInkAlignDestDy } from '../src/utils/inkMeta.js'
import { LAB_DECODE_INTERVAL_MS, loadLabRasterSource } from './fo-fix-toCanvas-load-pipeline.js'
import { computeLabDrawFit, drawImageLabFit } from './fo-fix-toCanvas-draw-fit.js'

/**
 * Map product `experimentalRaster*` / harnessProductToCanvas flags → labToCanvasOpts.
 * Preferred over monkeypatch when iterating LH/raster parity in the lab fork.
 * @param {Record<string, unknown> | null | undefined} harness
 */
export function harnessProductToCanvasToLabOpts(harness) {
  if (!harness || typeof harness !== 'object') return {}
  /** @type {Record<string, unknown>} */
  const opts = {}
  if (harness.experimentalRasterBackingCeil === true) opts.backingRound = 'ceil'
  if (harness.experimentalRasterDisableGbcrNudge === true) opts.disableGbcrFracNudge = true
  if (harness.experimentalRasterDecodeSettle === true) opts.decodeSettle = true
  if (harness.experimentalRasterDoubleDecode === true) opts.decodeDouble = true
  if (harness.experimentalRasterPreDecodeRaf === true) {
    opts.preDecodeAttach = true
    opts.preDecodeRaf = true
  }
  if (harness.experimentalRasterNaturalDims === true) opts.drawDest = 'natural-dims'
  if (
    harness.experimentalRasterInkAlign === true ||
    harness.experimentalRasterMetaInkAlign === true
  ) {
    opts.inkAlign = true
  }
  if (harness.experimentalRasterCtxNoScale === true) opts.ctxScale = false
  const patch = harness.experimentalRasterSvgPatch
  if (patch && patch !== 'none' && patch !== false) {
    opts.rasterOnlySvgPatch = patch
  }
  return opts
}

/**
 * modern-screenshot-style decode settle (mirrors src/exporters/toCanvas.js decodeSvgImage).
 * @param {HTMLImageElement} img
 * @param {{ doubleDecode?: boolean }} [opts]
 */
async function decodeLabImageSettled(img, { doubleDecode = false } = {}) {
  const attempts = 2
  for (let i = 0; i < attempts; i++) {
    try {
      await img.decode()
      break
    } catch (err) {
      if (i >= attempts - 1) throw err
      await waitTimeout(LAB_DECODE_INTERVAL_MS)
    }
  }
  if (doubleDecode) {
    await waitTimeout(LAB_DECODE_INTERVAL_MS)
    await img.decode()
  }
  await waitTimeout(LAB_DECODE_INTERVAL_MS)
}

/**
 * Wave-9: async scheduling gates before drawImage (lab-only).
 * @typedef {'microtask' | 'microtask2' | 'promise0' | 'promise2' | 'timeout0' | 'postTask' | 'postTaskUser'} LabToCanvasDrawBeforeStep
 */

function waitMicrotask() {
  return new Promise((resolve) => queueMicrotask(resolve))
}

/** @param {number} count */
async function waitMicrotasks(count) {
  for (let i = 0; i < count; i++) await waitMicrotask()
}

/** @param {number} ms */
function waitTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
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
 * @param {number} px
 * @param {'none' | 'floor' | 'ceil' | 'round'} mode
 */
function snapOutPx(px, mode) {
  const n = Number(px) || 1
  if (mode === 'floor') return Math.max(1, Math.floor(n))
  if (mode === 'ceil') return Math.max(1, Math.ceil(n))
  if (mode === 'round') return Math.max(1, Math.round(n))
  return Math.max(1, n)
}

/** @param {'background' | 'user-visible'} priority */
async function waitSchedulerPostTask(priority) {
  const sched = globalThis.scheduler
  if (sched && typeof sched.postTask === 'function') {
    await sched.postTask(() => {}, { priority })
    return
  }
  await waitTimeout(0)
}

/** @param {LabToCanvasDrawBeforeStep | LabToCanvasDrawBeforeStep[] | null | undefined} steps */
async function applyDrawBeforeSteps(steps) {
  if (!steps) return
  const arr = Array.isArray(steps) ? steps : [steps]
  for (const step of arr) {
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
      case 'timeout0':
        await waitTimeout(0)
        break
      case 'postTask':
        await waitSchedulerPostTask('background')
        break
      case 'postTaskUser':
        await waitSchedulerPostTask('user-visible')
        break
      default:
        break
    }
  }
}

/**
 * Lab recipe raster flags (`recipe.recipeFlags` → runner passes `recipeFlags` to this toCanvas fork).
 * @typedef {{
 *   smooth?: boolean,
 *   alpha?: number,
 *   waitMs?: number,
 *   roundDraw?: boolean,
 *   useNaturalDims?: boolean,
 * }} RecipeFlags
 */

/** @type {{ waitMs: number, roundDraw: boolean, useNaturalDims: boolean }} */
export const RECIPE_FLAGS = {
  waitMs: 0,
  roundDraw: false,
  useNaturalDims: false,
}

/** @param {RecipeFlags | null | undefined} flags */
export function resolveRecipeFlags(flags) {
  const f = flags ?? {}
  return {
    smooth: f.smooth,
    alpha: f.alpha,
    waitMs: f.waitMs ?? RECIPE_FLAGS.waitMs,
    roundDraw: f.roundDraw ?? RECIPE_FLAGS.roundDraw,
    useNaturalDims: f.useNaturalDims ?? RECIPE_FLAGS.useNaturalDims,
  }
}

/**
 * Minimal lab override hooks.
 *
 * Some FO lab runners/monkeypatches import these symbols to coordinate lab-only
 * Canvas2D context settings and decode/draw timing flushes. This file may
 * choose not to apply them in its current implementation, but the exports must
 * exist so recipe shard validation (dynamic-import) can run.
 */

/** @type {object | null} */
let labToCanvasCtxOverride = null

/** @param {object | null} opts */
export function setLabToCanvasCtxOverride(opts) {
  labToCanvasCtxOverride = opts ? { ...opts } : null
}

export function clearLabToCanvasCtxOverride() {
  labToCanvasCtxOverride = null
}

/** @type {object | null} */
let labToCanvasTimingOverride = null

/** @param {object | null} hooks */
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

/**
 * Half-leading from font-size and line-height in px (lh/fs strut model).
 * @param {number} fontSizePx
 * @param {number} lineHeightPx
 */
export function computeHalfLeadingLhFs(fontSizePx, lineHeightPx) {
  const fs = Number(fontSizePx)
  const lh = Number(lineHeightPx)
  if (!Number.isFinite(fs) || !Number.isFinite(lh) || lh <= 0) return null
  return (lh - fs) / 2
}

/**
 * Layout-derived draw dy (CSS px) from live Range ink vs cap-model in border box.
 * Positive meta.inkTopOffsetFromFoTop → canvas ink sits lower than cap model → shift bitmap up.
 * @param {object | undefined} meta
 * @returns {number}
 */
export function rasterInkOffsetFromFoTopDestDy(meta) {
  const offset = meta?.inkTopOffsetFromFoTop
  if (Number.isFinite(offset) && offset !== 0) return -offset
  const half = meta?.lhStrutHalfLeadingPx
  if (Number.isFinite(half) && half !== 0) return -half
  return 0
}

/**
 * Subpixel draw dy from Range ink top fractional part (border-box coords).
 * Used after FO y −½(lh−fs) when ink scan quantizes ahead of live Range top.
 * @param {object | undefined} meta
 * @returns {number}
 */
export function rasterStrutRangeSubpixelDrawDy(meta) {
  const sub = meta?.lhStrutRangeSubpixelPx
  return Number.isFinite(sub) ? sub : 0
}

/**
 * Half Range subpixel draw dy (structural fraction, not gate-tuned).
 * @param {object | undefined} meta
 * @returns {number}
 */
export function rasterStrutRangeSubpixelHalfDrawDy(meta) {
  const sub = meta?.lhStrutRangeSubpixelPx
  return Number.isFinite(sub) ? sub / 2 : 0
}

/**
 * drawImage dest dy from captured inkTopFracInBorder fractional part (CSS px).
 * Experimental — meta-derived subpixel, not gate-tuned offsets.
 * @param {object | undefined} meta
 * @param {number} outH
 * @param {number} refH
 * @returns {number}
 */
export function rasterMetaInkTopFracDrawDy(meta, outH, refH) {
  const measured = meta?.inkTopFracInBorder
  if (!Number.isFinite(measured)) return 0
  const fracPart = measured - Math.trunc(measured)
  if (fracPart === 0) return 0
  const borderH = Number.isFinite(meta?.inkRefBorderH) ? meta.inkRefBorderH : refH
  const k = outH / Math.max(1, refH)
  return fracPart * borderH * k
}

/**
 * Build FO CSS inject for line-height experiments (decode/capture recipes).
 * @param {string} selector e.g. `foreignObject nav a`
 * @param {string} lhValue e.g. `21.6px`, `normal`, `1.35`
 * @param {boolean} [important]
 */
export function buildLabLhFoCss(selector, lhValue, important = true) {
  const imp = important ? '!important' : ''
  return `${selector}{line-height:${lhValue}${imp}}`
}

/**
 * Attach strut diagnostics to canvas for headed probe post-mortem (data-* only).
 * @param {HTMLCanvasElement} canvas
 * @param {object} meta harness meta (may include lhStrut* from runner)
 * @param {{ dpr?: number, scale?: number }} [opts]
 */
export function attachLabLhDiagnostics(canvas, meta, opts = {}) {
  if (!canvas?.dataset || !meta) return
  const keys = [
    'lhStrutHalfLeadingPx',
    'lhStrutLineHeightPx',
    'lhStrutFontSizePx',
    'lhStrutLayoutLineBoxPx',
    'lhStrutCanvasDeltaPx',
  ]
  for (const k of keys) {
    if (meta[k] != null && Number.isFinite(Number(meta[k]))) {
      canvas.dataset[k.replace(/Px$/, '')] = String(meta[k])
    }
  }
  if (opts.dpr != null) canvas.dataset.labLhDpr = String(opts.dpr)
  if (opts.scale != null) canvas.dataset.labLhScale = String(opts.scale)
}

/** FNV-1a 32-bit — lab fork / decode URL fingerprinting (not crypto). */
export function fnv1aHash(str) {
  let h = 0x811c9dc5
  const s = String(str ?? '')
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

/**
 * @param {string} styleAttr
 * @returns {Map<string, string>}
 */
function parseInlineStyleMapLab(styleAttr) {
  /** @type {Map<string, string>} */
  const map = new Map()
  if (!styleAttr) return map
  for (const chunk of String(styleAttr).split(';')) {
    const idx = chunk.indexOf(':')
    if (idx < 0) continue
    const k = chunk.slice(0, idx).trim().toLowerCase()
    const v = chunk.slice(idx + 1).trim()
    if (k) map.set(k, v)
  }
  return map
}

/**
 * Walk live ancestor chain for computed lh/fs/box model (nav → ul → li → a).
 * @param {Element} el
 * @param {Element} [root]
 */
export function auditLiveLhParentChain(el, root) {
  /** @type {object[]} */
  const chain = []
  let node = el
  while (node && node instanceof Element) {
    const cs = getComputedStyle(node)
    const gbcr = node.getBoundingClientRect()
    const fs = parseFloat(cs.fontSize) || null
    const lhRaw = cs.lineHeight
    let lhPx = null
    if (lhRaw && lhRaw !== 'normal') {
      const n = parseFloat(lhRaw)
      if (Number.isFinite(n) && n > 0) lhPx = n
    }
    chain.push({
      tag: node.tagName.toLowerCase(),
      id: node.id || null,
      className: typeof node.className === 'string' ? node.className : null,
      lineHeightComputed: lhRaw,
      lineHeightPx: lhPx,
      fontSizePx: fs,
      halfLeadingLhFsPx: fs != null && lhPx != null ? (lhPx - fs) / 2 : null,
      display: cs.display,
      alignItems: cs.alignItems,
      alignSelf: cs.alignSelf,
      verticalAlign: cs.verticalAlign,
      boxSizing: cs.boxSizing,
      borderBoxH: gbcr.height,
      contentBoxH:
        gbcr.height -
        (parseFloat(cs.paddingTop) || 0) -
        (parseFloat(cs.paddingBottom) || 0) -
        (parseFloat(cs.borderTopWidth) || 0) -
        (parseFloat(cs.borderBottomWidth) || 0),
      paddingTop: parseFloat(cs.paddingTop) || 0,
      paddingBottom: parseFloat(cs.paddingBottom) || 0,
    })
    if (root && node === root) break
    node = node.parentElement
  }
  return chain
}

/**
 * Serialized FO text-leaf lh audit vs live computed (inline style + injected CSS blocks).
 * @param {string} svgText
 * @param {string} landmarkText
 * @param {Element} [liveLeaf]
 */
export function auditSerializedFoLineHeight(svgText, landmarkText, liveLeaf) {
  const liveCs = liveLeaf ? getComputedStyle(liveLeaf) : null
  const liveLhPx =
    liveCs && liveCs.lineHeight !== 'normal' ? parseFloat(liveCs.lineHeight) : null
  const liveFsPx = liveCs ? parseFloat(liveCs.fontSize) : null

  /** @type {object[]} */
  const leaves = []
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    const fo = doc.querySelector('foreignObject')
    if (fo) {
      for (const el of fo.querySelectorAll('*')) {
        if (el.childElementCount > 0) continue
        const text = (el.textContent || '').trim()
        if (!text) continue
        const map = parseInlineStyleMapLab(el.getAttribute('style') || '')
        const inlineLh = map.get('line-height') ?? null
        const inlineFs = map.get('font-size') ?? null
        leaves.push({
          text,
          tag: el.tagName.toLowerCase(),
          inlineLineHeight: inlineLh,
          inlineFontSize: inlineFs,
          matchesLandmark: text === landmarkText.trim(),
        })
      }
    }
  } catch {
    /* ok */
  }

  const styleBlocks = [...String(svgText).matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(
    (m) => m[1],
  )
  const injectedLhRules = [...styleBlocks.join('\n').matchAll(/line-height:\s*([^;{}]+)/gi)].map(
    (m) => m[1].trim(),
  )

  const landmarkLeaf = leaves.find((l) => l.matchesLandmark) ?? leaves[0] ?? null
  let serializedLhPx = null
  let serializedLhSource = null
  if (landmarkLeaf?.inlineLineHeight) {
    const raw = landmarkLeaf.inlineLineHeight
    if (/px$/i.test(raw)) serializedLhPx = parseFloat(raw)
    else {
      const mult = parseFloat(raw)
      const fs = landmarkLeaf.inlineFontSize
        ? parseFloat(landmarkLeaf.inlineFontSize)
        : liveFsPx
      if (Number.isFinite(mult) && mult > 0 && Number.isFinite(fs) && fs > 0) {
        serializedLhPx = fs * mult
      }
    }
    if (serializedLhPx != null) serializedLhSource = 'inline'
  }

  /** Resolve lh from serialized class rules when inline is normal/missing. */
  if (serializedLhPx == null && landmarkLeaf) {
    try {
      const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
      const fo = doc.querySelector('foreignObject')
      const leafEl = [...(fo?.querySelectorAll('*') ?? [])].find(
        (el) => (el.textContent || '').trim() === landmarkText.trim(),
      )
      const classAttr = leafEl?.getAttribute('class') || ''
      const classes = classAttr.split(/\s+/).filter(Boolean)
      const styleText = styleBlocks.join('\n')
      for (const cls of classes) {
        const re = new RegExp(`\\.${cls.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^{]*\\{[^}]*line-height:\\s*([\\d.]+)px`, 'i')
        const m = styleText.match(re)
        if (m) {
          serializedLhPx = parseFloat(m[1])
          serializedLhSource = `class.${cls}`
          break
        }
      }
    } catch {
      /* ok */
    }
  }

  return {
    landmarkText: landmarkText.trim(),
    liveLineHeightPx: liveLhPx,
    liveFontSizePx: liveFsPx,
    liveHalfLeadingLhFsPx:
      liveLhPx != null && liveFsPx != null ? (liveLhPx - liveFsPx) / 2 : null,
    serializedLineHeightPx: serializedLhPx,
    serializedMatchesLivePx:
      serializedLhPx != null && liveLhPx != null
        ? Math.abs(serializedLhPx - liveLhPx) < 0.01
        : null,
    landmarkLeaf,
    serializedLhSource,
    leafCount: leaves.length,
    injectedLineHeightRules: [...new Set(injectedLhRules)],
    svgHash: fnv1aHash(svgText),
  }
}

/**
 * Per-row dark-pixel fraction in a canvas band (ink row profile — sharp vs gradual step).
 * Diagnostic only — row-profile luminance scan (not layout top bounds).
 * @param {HTMLCanvasElement} canvas
 * @param {{ x: number, y: number, w: number, h: number }} region device px
 * @param {{ minAlpha?: number, lumMax?: number, minCoverage?: number }} [opts]
 */
export function scanCanvasInkRowProfile(canvas, region, opts = {}) {
  const minAlpha = opts.minAlpha ?? 32
  const lumMax = opts.lumMax ?? 170
  const minCoverage = opts.minCoverage ?? 0.02
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return null
  const x = Math.max(0, Math.floor(region.x))
  const y = Math.max(0, Math.floor(region.y))
  const w = Math.max(1, Math.min(canvas.width - x, Math.floor(region.w)))
  const h = Math.max(1, Math.min(canvas.height - y, Math.floor(region.h)))
  let data
  try {
    data = ctx.getImageData(x, y, w, h).data
  } catch {
    return null
  }

  /** @type {{ row: number, darkFraction: number, isInkStart: boolean }[]} */
  const rows = []
  let firstInkRow = null
  for (let row = 0; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
      if (data[i + 3] > minAlpha && lum < lumMax) dark++
    }
    const darkFraction = dark / w
    const isInkStart = darkFraction >= minCoverage
    if (isInkStart && firstInkRow == null) firstInkRow = row
    rows.push({ row, darkFraction: Math.round(darkFraction * 1000) / 1000, isInkStart })
  }

  let profile = 'empty'
  if (firstInkRow != null) {
    const windowRows = rows.slice(firstInkRow, Math.min(h, firstInkRow + 6))
    const deltas = []
    for (let i = 1; i < windowRows.length; i++) {
      deltas.push(Math.abs(windowRows[i].darkFraction - windowRows[i - 1].darkFraction))
    }
    const maxDelta = deltas.length ? Math.max(...deltas) : 0
    profile = maxDelta >= 0.35 ? 'sharp-step' : maxDelta >= 0.08 ? 'gradual-ramp' : 'flat-top'
  }

  return {
    region: { x, y, w, h },
    firstInkRow,
    firstInkRowCss: firstInkRow != null ? (y + firstInkRow) / (canvas.height / (canvas.clientHeight || canvas.height)) : null,
    profile,
    rows: rows.filter((r) => r.isInkStart || (firstInkRow != null && r.row <= firstInkRow + 8)),
  }
}

/**
 * Compare serialized FO text-leaf lh / inject rules before vs after raster fork.
 * @param {string} preSvg
 * @param {string} postSvg
 * @param {string} [landmarkText]
 */
export function auditRasterForkTextLeaves(preSvg, postSvg, landmarkText = '') {
  const pre = auditSerializedFoLineHeight(preSvg, landmarkText, null)
  const post = auditSerializedFoLineHeight(postSvg, landmarkText, null)
  const preRules = new Set(pre.injectedLineHeightRules)
  const postRules = new Set(post.injectedLineHeightRules)
  const injectedAdded = [...postRules].filter((r) => !preRules.has(r))
  const preLeafLh = pre.landmarkLeaf?.inlineLineHeight ?? null
  const postLeafLh = post.landmarkLeaf?.inlineLineHeight ?? null
  return {
    preSerializedLhPx: pre.serializedLineHeightPx,
    postSerializedLhPx: post.serializedLineHeightPx,
    preInlineLh: preLeafLh,
    postInlineLh: postLeafLh,
    inlineLhChanged: preLeafLh !== postLeafLh,
    injectedLhRulesAdded: injectedAdded,
    styleInjectChanged: injectedAdded.length > 0,
    serializedLhChanged:
      pre.serializedLineHeightPx != null &&
      post.serializedLineHeightPx != null &&
      Math.abs(pre.serializedLineHeightPx - post.serializedLineHeightPx) > 0.001,
  }
}

/**
 * Raster fork trace — verify patched SVG is what decode receives.
 * @param {string} preSvg
 * @param {string | null | undefined} patchId
 * @param {string} postSvg
 * @param {string} [decodeUrl]
 * @param {string} [landmarkText]
 */
export function buildLabRasterForkTrace(preSvg, patchId, postSvg, decodeUrl, landmarkText = '') {
  const preHash = fnv1aHash(preSvg)
  const postHash = fnv1aHash(postSvg)
  const decodePayload =
    decodeUrl && decodeUrl.includes(',') ? decodeURIComponent(decodeUrl.slice(decodeUrl.indexOf(',') + 1)) : decodeUrl ?? ''
  const decodeHash = decodePayload ? fnv1aHash(decodePayload) : null
  const textLeafAudit = auditRasterForkTextLeaves(preSvg, postSvg, landmarkText)
  const svgStringChanged = preHash !== postHash
  return {
    patchId: patchId ?? null,
    preHash,
    postHash,
    decodeHash,
    svgStringChanged,
    decodeMatchesPost: decodeHash != null ? decodeHash === postHash : null,
    bytesDelta: new Blob([postSvg]).size - new Blob([preSvg]).size,
    textLeafAudit,
    /** True when fork changed SVG bytes but text-leaf lh/inject did not (expected for pin-lh-leaf at correct capture). */
    textCssNoOp:
      svgStringChanged === false ||
      (!textLeafAudit.inlineLhChanged &&
        !textLeafAudit.styleInjectChanged &&
        !textLeafAudit.serializedLhChanged),
  }
}

/** @type {object | null} */
let lastLabToCanvasDebugReport = null

export function getLastLabToCanvasDebugReport() {
  return lastLabToCanvasDebugReport
}

export function clearLastLabToCanvasDebugReport() {
  lastLabToCanvasDebugReport = null
}

/**
 * Full lh debug bundle for headed probes (`labToCanvasOpts.debugLh`).
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {string} svgText
 * @param {object} inkCmp compareThreeWayInk row fields
 * @param {{ dpr?: number, forkTrace?: object, timingMs?: object }} [extras]
 */
export function buildLabLhDebugReport(canvas, root, el, svgText, inkCmp, extras = {}) {
  const dpr = extras.dpr ?? 1
  const box = el.getBoundingClientRect()
  const rr = root.getBoundingClientRect()
  const leftCss = box.left - rr.left
  const topCss = box.top - rr.top
  const regionW = Math.max(1, Math.round(box.width * dpr))
  const regionH = Math.max(1, Math.round(box.height * dpr))
  const insetDev = Math.round(Math.min(16, Math.max(4, box.width * 0.05)) * dpr)
  const x = Math.max(0, Math.round(leftCss * dpr) + insetDev)
  const y = Math.max(0, Math.round(topCss * dpr))
  const w = Math.max(1, Math.min(regionW - insetDev, Math.round(28 * dpr)))

  const report = {
    parentChain: auditLiveLhParentChain(el, root),
    serializedLh: auditSerializedFoLineHeight(svgText, (el.textContent || '').trim(), el),
    ink: {
      liveVsCanvasTopPx: inkCmp?.liveVsCanvasTopPx ?? null,
      liveVsSvgTopPx: inkCmp?.liveVsSvgTopPx ?? null,
      liveTopInBorder: inkCmp?.live?.topInBorder ?? null,
      svgTopInBorder: inkCmp?.svg?.topInBorder ?? null,
      canvasTopInBorder: inkCmp?.canvas?.topInBorder ?? null,
    },
    boxModel: {
      borderBoxH: box.height,
      contentBoxH:
        box.height -
        (parseFloat(getComputedStyle(el).paddingTop) || 0) -
        (parseFloat(getComputedStyle(el).paddingBottom) || 0) -
        (parseFloat(getComputedStyle(el).borderTopWidth) || 0) -
        (parseFloat(getComputedStyle(el).borderBottomWidth) || 0),
      lineHeightPx: parseFloat(getComputedStyle(el).lineHeight) || null,
      fontSizePx: parseFloat(getComputedStyle(el).fontSize) || null,
    },
    inkRowProfile: scanCanvasInkRowProfile(canvas, { x, y, w, h: regionH }),
    forkTrace: extras.forkTrace ?? null,
    timingMs: extras.timingMs ?? null,
    canvasBacking: { width: canvas.width, height: canvas.height },
  }
  lastLabToCanvasDebugReport = report
  if (canvas?.dataset) {
    canvas.dataset.labDebugLh = '1'
    if (extras.forkTrace?.postHash) canvas.dataset.labForkPostHash = extras.forkTrace.postHash
    if (extras.forkTrace?.decodeHash) canvas.dataset.labForkDecodeHash = extras.forkTrace.decodeHash
    if (report.inkRowProfile?.profile) canvas.dataset.labInkRowProfile = report.inkRowProfile.profile
  }
  return report
}

/**
 * Mount serialized FO in offscreen iframe; read computed lh/fs on text leaf during decode layout.
 * Lab-only: tests whether FO-internal computed lh differs from live DOM (explains lh-pin no-ops).
 * @param {string} svgText
 * @param {string} landmarkText
 * @param {{ cssW?: number, cssH?: number }} [fixtureDims]
 */
export async function probeFoInternalComputedLhAtDecode(svgText, landmarkText, fixtureDims = {}) {
  const cssW = fixtureDims.cssW ?? 500
  const cssH = fixtureDims.cssH ?? 50
  const iframe = document.createElement('iframe')
  iframe.setAttribute('sandbox', 'allow-same-origin')
  iframe.style.cssText =
    'position:fixed;left:-99999px;top:-99999px;width:0;height:0;border:0;visibility:hidden'
  document.body.appendChild(iframe)
  try {
    const doc = iframe.contentDocument
    if (!doc) return null
    doc.open()
    doc.write(
      `<!DOCTYPE html><html><head><meta charset="utf-8"></head>` +
        `<body style="margin:0;padding:0;width:${cssW}px;height:${cssH}px;overflow:hidden">` +
        `${svgText}</body></html>`,
    )
    doc.close()
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    const fo = doc.querySelector('foreignObject')
    if (!fo) return { error: 'no foreignObject' }
    let leaf = null
    for (const el of fo.querySelectorAll('*')) {
      if (el.childElementCount > 0) continue
      if ((el.textContent || '').trim() === landmarkText.trim()) {
        leaf = el
        break
      }
    }
    if (!leaf) return { error: 'landmark leaf not found in FO' }
    const cs = getComputedStyle(leaf)
    const lhRaw = cs.lineHeight
    const fs = parseFloat(cs.fontSize) || null
    let lhPx = null
    if (lhRaw && lhRaw !== 'normal') {
      const n = parseFloat(lhRaw)
      if (Number.isFinite(n) && n > 0) lhPx = n
    }
    const gbcr = leaf.getBoundingClientRect()
    return {
      lineHeightComputed: lhRaw,
      lineHeightPx: lhPx,
      fontSizePx: fs,
      halfLeadingLhFsPx: fs != null && lhPx != null ? (lhPx - fs) / 2 : null,
      borderBoxH: gbcr.height,
      display: cs.display,
      alignItems: cs.alignItems,
      verticalAlign: cs.verticalAlign,
    }
  } finally {
    iframe.remove()
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
function isSvgBlobURL(u) {
  return typeof u === 'string' && u.startsWith('blob:')
}
function decodeSvgFromDataURL(u) {
  const i = u.indexOf(',')
  if (i < 0) return ''
  const header = u.slice(0, i)
  const payload = u.slice(i + 1)
  if (/;base64/i.test(header)) {
    return atob(payload)
  }
  return decodeURIComponent(payload)
}
async function resolveSvgTextFromRasterUrl(url) {
  if (isSvgDataURL(url)) return decodeSvgFromDataURL(url)
  if (isSvgBlobURL(url)) {
    const resp = await fetch(url)
    return await resp.text()
  }
  return null
}
function encodeSvgToDataURL(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}

/**
 * Apply raster-only SVG patch to any SVG url (data: or blob:) before decode.
 * Always re-encodes to data: so fork bytes match what img.decode receives.
 * @param {string} url
 * @param {string} patchId
 * @param {object} meta
 * @param {number} [exportDpr]
 */
async function applyRasterForkToUrl(url, patchId, meta, exportDpr) {
  const preSvg = await resolveSvgTextFromRasterUrl(url)
  if (!preSvg) return { url, forkTrace: null, preSvg: null }
  const resolvedPatch = resolveRasterSvgPatchId(patchId, meta)
  if (!resolvedPatch) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[lab-toCanvas] raster fork patch not resolved:', patchId)
    }
    return { url, forkTrace: null, preSvg }
  }
  const forkMeta =
    Number.isFinite(exportDpr) && exportDpr > 0
      ? { ...meta, lhStrutExportDpr: exportDpr, exportDpr }
      : meta
  const svgFork = applyRasterOnlySvgPatch(preSvg, resolvedPatch, { meta: forkMeta })
  const nextUrl = encodeSvgToDataURL(svgFork)
  const forkTrace = buildLabRasterForkTrace(
    preSvg,
    resolvedPatch,
    svgFork,
    nextUrl,
    typeof meta?.landmarkText === 'string' ? meta.landmarkText : '',
  )
  return { url: nextUrl, forkTrace, preSvg }
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
 *   backgroundColor?: string
 *   labToCanvasOpts?: {
 *     decodeWaitMs?: number,
 *     dprMax?: number,
 *     measuredDest?: 'gbcr-frac',
 *     loadPipeline?: string,
 *     drawBefore?: LabToCanvasDrawBeforeStep | LabToCanvasDrawBeforeStep[],
 *     clip?: string,
 *     clipAfterBg?: boolean,
 *     drawDest?: 'paint-box' | 'backing-over-dpr' | 'natural-dims',
 *     disableGbcrFracNudge?: boolean,
 *     decodeSettle?: boolean,
 *     forceCreateImageBitmap?: boolean,
 *     dprScaledSvgRootDraw?: boolean,
 *     inkAlign?: boolean,
 *     inkAlignSubpixelOnly?: boolean,
 *     vDriftFix?: boolean,
 *     decodePasses?: number,
 *     canvasExport?: { mime: 'image/png' | 'image/webp', passes?: number },
 *     rasterOnlySvgPatch?: string,
 *   }
 *   labLoadPipeline?: string
 *   decodePasses?: number
 *   recipeFlags?: RecipeFlags,
 * }} options
 * @returns {Promise<HTMLCanvasElement>}
 */

/**
 * Clip to a live-measured layout box passed via runner meta (lab only).
 * `meta.measuredBox` is in pre-scale harness units; `scale` matches options.scale.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {string} mode
 * @param {number} outW
 * @param {number} outH
 * @param {any} meta
 * @param {number} scale
 */
function applyMeasuredBoxClip(ctx, mode, outW, outH, meta, scale) {
  const box = meta?.measuredBox
  if (!box) return

  let x = (Number(box.left) || 0) * scale
  let y = (Number(box.top) || 0) * scale
  let w = (Number(box.width) || 0) * scale
  let h = (Number(box.height) || 0) * scale

  const tweak = /^measured-box-(inset|outset)-(\d+)px$/.exec(mode)
  if (tweak) {
    const px = Number(tweak[2]) || 0
    if (tweak[1] === 'inset') {
      x += px
      y += px
      w -= 2 * px
      h -= 2 * px
    } else {
      x -= px
      y -= px
      w += 2 * px
      h += 2 * px
    }
  }

  x = Math.max(0, Math.min(outW, x))
  y = Math.max(0, Math.min(outH, y))
  w = Math.max(0, Math.min(outW - x, w))
  h = Math.max(0, Math.min(outH - y, h))

  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.clip()
}

export async function toCanvas(url, options) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    labToCanvasOpts = {},
    labToCanvasCtx,
    labToCanvasTiming,
    labLoadPipeline,
    decodePasses = 1,
    recipeFlags: recipeFlagsRaw,
  } = options
  const recipeFlags = resolveRecipeFlags(recipeFlagsRaw)
  const debugLh = Boolean(labToCanvasOpts.debugLh)
  const t0 = debugLh && typeof performance !== 'undefined' ? performance.now() : 0
  /** @type {Record<string, number>} */
  const timingMs = debugLh ? {} : {}

  const dprMax = labToCanvasOpts.dprMax
  if (Number.isFinite(dprMax) && dprMax > 0) {
    dpr = Math.min(dpr, dprMax)
  }

  const dprSource = labToCanvasOpts.dprSource ?? 'harness'
  if (dprSource === 'device') {
    dpr = window.devicePixelRatio || 1
  }

  url = maybeConvertBoxShadowForSafari(url)

  /** @type {ReturnType<typeof buildLabRasterForkTrace> | null} */
  let forkTrace = null

  const rasterOnlySvgPatch = resolveRasterSvgPatchId(
    labToCanvasOpts.rasterOnlySvgPatch,
    meta,
  )
  const debugFork =
    Boolean(labToCanvasOpts.debugForkTrace) ||
    Boolean(labToCanvasOpts.debugLh) ||
    Boolean(rasterOnlySvgPatch)
  if (rasterOnlySvgPatch) {
    try {
      const forked = await applyRasterForkToUrl(
        url,
        labToCanvasOpts.rasterOnlySvgPatch,
        meta,
        dpr,
      )
      if (forked.preSvg != null) {
        url = forked.url
        forkTrace = forked.forkTrace
        if (debugFork && typeof console !== 'undefined' && console.debug) {
          console.debug('[lab-toCanvas] raster fork', forkTrace)
        }
      } else if (debugFork && typeof console !== 'undefined' && console.warn) {
        console.warn('[lab-toCanvas] raster fork skipped — not SVG data/blob url', {
          patchId: rasterOnlySvgPatch,
        })
      }
    } catch (err) {
      if (debugFork && typeof console !== 'undefined' && console.warn) {
        console.warn('[lab-toCanvas] raster fork failed', rasterOnlySvgPatch, err)
      }
    }
  }

  const pipeline = labLoadPipeline ?? labToCanvasOpts.loadPipeline
  const forceCreateImageBitmap = Boolean(labToCanvasOpts.forceCreateImageBitmap)
  const effectivePipeline =
    pipeline ?? (forceCreateImageBitmap ? 'create-image-bitmap' : null)
  const decodeWaitMs =
    typeof labToCanvasOpts.decodeWaitMs === 'number' ? labToCanvasOpts.decodeWaitMs : null
  const decodeIntervalMs = labToCanvasOpts.decodeIntervalMs
  const waitFontsReady = Boolean(labToCanvasOpts.waitFontsReady)
  const decodeDouble = Boolean(labToCanvasOpts.decodeDouble)
  const decodeSettle = Boolean(labToCanvasOpts.decodeSettle)
  const dprScaledSvgRootDraw = Boolean(labToCanvasOpts.dprScaledSvgRootDraw)
  const decodeRaf = Boolean(labToCanvasOpts.decodeRaf)
  const preDecodeAttach = Boolean(labToCanvasOpts.preDecodeAttach)
  const preDecodeRaf = Boolean(labToCanvasOpts.preDecodeRaf)
  const drawDest = labToCanvasOpts.drawDest ?? 'paint-box'
  const disableGbcrFracNudge = Boolean(labToCanvasOpts.disableGbcrFracNudge)
  const inkAlign = Boolean(labToCanvasOpts.inkAlign)
  const inkAlignSubpixelOnly = Boolean(labToCanvasOpts.inkAlignSubpixelOnly)
  const inkOffsetFromFoTop = Boolean(labToCanvasOpts.inkOffsetFromFoTop)
  const strutRangeSubpixelDrawDy = Boolean(labToCanvasOpts.strutRangeSubpixelDrawDy)
  const strutRangeSubpixelHalfDrawDy = Boolean(labToCanvasOpts.strutRangeSubpixelHalfDrawDy)
  const metaInkTopFracDrawDy = Boolean(labToCanvasOpts.metaInkTopFracDrawDy)
  const vDriftFix = Boolean(labToCanvasOpts.vDriftFix)
  const decodePassesFromOpts = labToCanvasOpts.decodePasses

  // Default backing store rounding to avoid fractional truncation by canvas.width/height.
  const backingRound = labToCanvasOpts.backingRound ?? 'round'
  const outDimsRound = labToCanvasOpts.outDimsRound ?? 'none'
  const stylePixels = labToCanvasOpts.stylePixels ?? 'css'
  const optDims = labToCanvasOpts.optDims ?? 'harness-css'
  const ctxScale = labToCanvasOpts.ctxScale ?? true
  const drawFit = labToCanvasOpts.drawFit ?? 'fill'

  const timing = labToCanvasTimingOverride ?? labToCanvasTiming ?? null
  const ctxOpts = labToCanvasCtxOverride ?? labToCanvasCtx ?? null

  /** @type {CanvasImageSource} */
  let source
  /** @type {() => void} */
  let cleanup = () => {}

  if (effectivePipeline) {
    const loaded = await loadLabRasterSource(url, effectivePipeline)
    source = loaded.source
    cleanup = loaded.cleanup
    if (decodeWaitMs != null && decodeWaitMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, decodeWaitMs))
    }
    if (recipeFlags.waitMs > 0) await waitTimeout(recipeFlags.waitMs)
  } else {
    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    // Only set CORS mode for network URLs. Setting crossOrigin on `data:` / `blob:`
    // can produce origin-unclean ("tainted") canvases in some engines.
    if (typeof url === 'string' && /^(https?:)?\/\//i.test(url)) {
      img.crossOrigin = 'anonymous'
    }
    if (decodeSettle) {
      try {
        await document.fonts?.ready
      } catch {
        /* ok */
      }
    }

    img.src = url

    if (preDecodeAttach) {
      img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
      document.body.appendChild(img)
      if (preDecodeRaf) {
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      }
    }

    if (decodeSettle) {
      await decodeLabImageSettled(img, { doubleDecode: decodeDouble })
      if (decodeWaitMs != null && decodeWaitMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, decodeWaitMs))
      }
    } else {
      const passes = Math.max(
        1,
        Math.floor(decodePassesFromOpts ?? decodePasses),
      )
      for (let i = 0; i < passes; i++) await img.decode()
      if (decodeDouble) await img.decode()
      if (decodeWaitMs != null && decodeWaitMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, decodeWaitMs))
      }
      if (decodeIntervalMs === false) {
        /* no post-decode interval */
      } else if (typeof decodeIntervalMs === 'number' && decodeIntervalMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, decodeIntervalMs))
      }
      if (decodeRaf) {
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      }
      if (waitFontsReady) {
        try {
          await document.fonts.ready
        } catch {
          /* ok */
        }
      }
    }
    if (debugLh && typeof performance !== 'undefined') {
      timingMs.decode = Math.round(performance.now() - t0)
    }
    if (recipeFlags.waitMs > 0) await waitTimeout(recipeFlags.waitMs)
    if (preDecodeAttach) {
      try {
        img.remove()
      } catch {
        /* ok */
      }
    }
    source = img
  }

  const natW = source instanceof ImageBitmap ? source.width : source.naturalWidth
  const natH = source instanceof ImageBitmap ? source.height : source.naturalHeight
  if (timing?.decodeAfter?.length) {
    await applyDrawBeforeSteps(timing.decodeAfter)
  }

  // Force main-thread compositing: attach offscreen and wait two frames.
  // This is especially important for foreignObject SVG rasterization timing.
  const liveImg = source instanceof HTMLImageElement ? source : null
  if (liveImg && !preDecodeAttach) {
    liveImg.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
    document.body.appendChild(liveImg)
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    } finally {
      try {
        liveImg.remove()
      } catch {
        /* ok */
      }
    }
  }

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

  outW = snapOutPx(outW, outDimsRound)
  outH = snapOutPx(outH, outDimsRound)

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

  const ctx = canvas.getContext('2d')
  if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)
  if (typeof recipeFlags.smooth === 'boolean') ctx.imageSmoothingEnabled = recipeFlags.smooth
  if (typeof recipeFlags.alpha === 'number') ctx.globalAlpha = recipeFlags.alpha

  // Paint in the same coordinate space as the draw call.
  const paintW = ctxScale ? canvas.width / dpr : canvas.width
  const paintH = ctxScale ? canvas.height / dpr : canvas.height

  const roundDraw = Boolean(recipeFlags.roundDraw || labToCanvasOpts.roundDrawImage)
  let dw
  let dh
  if (drawDest === 'backing-over-dpr' && dpr > 0) {
    dw = canvas.width / dpr
    dh = canvas.height / dpr
  } else {
    dw = roundDraw ? Math.max(1, Math.round(paintW)) : paintW
    dh = roundDraw ? Math.max(1, Math.round(paintH)) : paintH
  }

  const clipMode = labToCanvasOpts.clip
  const clipAfterBg = Boolean(labToCanvasOpts.clipAfterBg)
  const wantsMeasuredBox = typeof clipMode === 'string' && clipMode.startsWith('measured-box')
  const withMeasuredBoxClip = (fn) => {
    if (!wantsMeasuredBox) return fn()
    ctx.save()
    try {
      applyMeasuredBoxClip(ctx, clipMode, paintW, paintH, meta, scale)
      return fn()
    } finally {
      try {
        ctx.restore()
      } catch {
        /* ok */
      }
    }
  }

  if (backgroundColor) {
    const paintBg = () => {
      ctx.save()
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, paintW, paintH)
      ctx.restore()
    }
    if (wantsMeasuredBox && !clipAfterBg) withMeasuredBoxClip(paintBg)
    else paintBg()
  }

  try {
    if (ctxOpts?.clearBeforeDraw) {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
      if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)
    }
    if (ctxOpts?.resetTransformBeforeDraw) {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)
    }
    if (typeof ctxOpts?.imageSmoothingEnabled === 'boolean') {
      ctx.imageSmoothingEnabled = ctxOpts.imageSmoothingEnabled
    }
    if (ctxOpts?.imageSmoothingQuality) {
      ctx.imageSmoothingQuality = ctxOpts.imageSmoothingQuality
    }
    if (typeof ctxOpts?.globalAlpha === 'number') {
      ctx.globalAlpha = ctxOpts.globalAlpha
    }
    if (ctxOpts?.globalCompositeOperation) {
      ctx.globalCompositeOperation = ctxOpts.globalCompositeOperation
    }

    await applyDrawBeforeSteps(labToCanvasOpts.drawBefore ?? timing?.drawBefore)
    const drawMain = () => {
      const hasGbcrFrac =
        Number.isFinite(meta?.gbcrFracX) && Number.isFinite(meta?.gbcrFracY)
      let dx = 0
      let dy = 0
      if (!disableGbcrFracNudge && hasGbcrFrac) {
        if (vDriftFix) {
          dx = -meta.gbcrFracX
          dy = -meta.gbcrFracY
        } else if (labToCanvasOpts.measuredDest === 'gbcr-frac') {
          dx = meta.gbcrFracX
          dy = meta.gbcrFracY
        }
      }
      if (inkAlign) {
        dy += rasterInkAlignDestDy(meta, paintH, refH)
      } else if (inkAlignSubpixelOnly) {
        dy += rasterStrutRangeSubpixelDrawDy(meta)
      }
      if (inkOffsetFromFoTop) {
        dy += rasterInkOffsetFromFoTopDestDy(meta)
      }
      if (strutRangeSubpixelDrawDy) {
        dy += rasterStrutRangeSubpixelDrawDy(meta)
      }
      if (strutRangeSubpixelHalfDrawDy) {
        dy += rasterStrutRangeSubpixelHalfDrawDy(meta)
      }
      if (metaInkTopFracDrawDy) {
        dy += rasterMetaInkTopFracDrawDy(meta, paintH, refH)
      }

      let destW = dw
      let destH = dh
      if (drawDest === 'natural-dims') {
        destW = natW
        destH = natH
      }

      if (drawDest === 'natural-dims') {
        ctx.drawImage(source, 0, 0, natW, natH, dx, dy, destW, destH)
      } else if (dprScaledSvgRootDraw && natW > 0 && natH > 0) {
        ctx.drawImage(source, 0, 0, natW, natH, dx, dy, destW, destH)
      } else if (
        !disableGbcrFracNudge &&
        hasGbcrFrac &&
        (vDriftFix || labToCanvasOpts.measuredDest === 'gbcr-frac')
      ) {
        ctx.drawImage(source, 0, 0, natW, natH, dx, dy, destW, destH)
      } else if (drawFit && drawFit !== 'fill') {
        const fit = computeLabDrawFit(natW, natH, destW, destH, drawFit)
        drawImageLabFit(ctx, source, fit)
      } else {
        ctx.drawImage(source, dx, dy, destW, destH)
      }
    }
    if (wantsMeasuredBox) withMeasuredBoxClip(drawMain)
    else drawMain()

    const exp = labToCanvasOpts.canvasExport
    if (exp?.mime) {
      const passes = Math.max(1, Math.floor(exp.passes ?? 1))
      for (let i = 0; i < passes; i++) {
        const dataUrl = canvas.toDataURL(exp.mime)
        const img2 = new Image()
        img2.loading = 'eager'
        img2.decoding = 'sync'
        img2.crossOrigin = 'anonymous'
        img2.src = dataUrl
        await img2.decode()
        ctx.save()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.restore()
        if (dpr !== 1) ctx.scale(dpr, dpr)
        await applyDrawBeforeSteps(labToCanvasOpts.drawBefore)
        const drawPass = () => {
          const hasGbcrFrac =
            Number.isFinite(meta?.gbcrFracX) && Number.isFinite(meta?.gbcrFracY)
          let dx = 0
          let dy = 0
          if (!disableGbcrFracNudge && hasGbcrFrac) {
            if (vDriftFix) {
              dx = -meta.gbcrFracX
              dy = -meta.gbcrFracY
            } else if (labToCanvasOpts.measuredDest === 'gbcr-frac') {
              dx = meta.gbcrFracX
              dy = meta.gbcrFracY
            }
          }
          if (inkAlign) {
            dy += rasterInkAlignDestDy(meta, paintH, refH)
          }
          if (inkOffsetFromFoTop) {
            dy += rasterInkOffsetFromFoTopDestDy(meta)
          }
          if (strutRangeSubpixelDrawDy) {
            dy += rasterStrutRangeSubpixelDrawDy(meta)
          }
          if (strutRangeSubpixelHalfDrawDy) {
            dy += rasterStrutRangeSubpixelHalfDrawDy(meta)
          }
          if (metaInkTopFracDrawDy) {
            dy += rasterMetaInkTopFracDrawDy(meta, paintH, refH)
          }
          let destW = drawDest === 'natural-dims' ? img2.naturalWidth : dw
          let destH = drawDest === 'natural-dims' ? img2.naturalHeight : dh
          if (
            !disableGbcrFracNudge &&
            hasGbcrFrac &&
            (vDriftFix || labToCanvasOpts.measuredDest === 'gbcr-frac')
          ) {
            ctx.drawImage(
              img2,
              0,
              0,
              img2.naturalWidth,
              img2.naturalHeight,
              dx,
              dy,
              destW,
              destH,
            )
          } else {
            ctx.drawImage(img2, dx, dy, destW, destH)
          }
        }
        if (wantsMeasuredBox) withMeasuredBoxClip(drawPass)
        else drawPass()
      }
    }

    const post = labToCanvasOpts.imageDataPost
    if (post === 'getImageData-roundtrip') {
      const snap = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.putImageData(snap, 0, 0)
    } else if (post === 'pixel-row-backing-mid') {
      const y = Math.min(canvas.height - 1, Math.floor(canvas.height / 2))
      const row = ctx.getImageData(0, y, canvas.width, 1)
      ctx.putImageData(row, 0, y)
    } else if (post === 'pixel-row-css-mid') {
      const y = Math.min(
        canvas.height - 1,
        Math.max(0, Math.floor((outH * dpr) / 2)),
      )
      const row = ctx.getImageData(0, y, canvas.width, 1)
      ctx.putImageData(row, 0, y)
    }

    if (labToCanvasOpts.lhStrutDiagnostics) {
      attachLabLhDiagnostics(canvas, meta, { dpr, scale })
    }

    const decodePath = effectivePipeline ?? 'image-decode'
    const createImageBitmapPath =
      forceCreateImageBitmap ||
      (typeof decodePath === 'string' && decodePath.includes('bitmap'))

    if (typeof performance !== 'undefined' && !timingMs.total) {
      timingMs.total = Math.round(performance.now() - t0)
    }

    if (debugLh) {
      if (canvas?.dataset) {
        if (forkTrace?.postHash) canvas.dataset.labForkPostHash = forkTrace.postHash
        if (forkTrace?.decodeHash) canvas.dataset.labForkDecodeHash = forkTrace.decodeHash
        if (forkTrace?.svgStringChanged != null) {
          canvas.dataset.labForkChanged = forkTrace.svgStringChanged ? '1' : '0'
        }
        if (timingMs.decode != null) canvas.dataset.labDecodeMs = String(timingMs.decode)
        if (timingMs.total != null) canvas.dataset.labRasterTotalMs = String(timingMs.total)
        canvas.dataset.labDecodePath = decodePath
        if (createImageBitmapPath) canvas.dataset.labCreateImageBitmapPath = '1'
      }
      const scanBox = meta?.debugLhScanBox
      if (scanBox && Number.isFinite(scanBox.x)) {
        const profile = scanCanvasInkRowProfile(canvas, scanBox)
        if (profile?.profile && canvas?.dataset) {
          canvas.dataset.labInkRowProfile = profile.profile
        }
        lastLabToCanvasDebugReport = {
          forkTrace,
          timingMs,
          inkRowProfile: profile,
          decodePath,
          createImageBitmapPath,
        }
      } else {
        lastLabToCanvasDebugReport = {
          forkTrace,
          timingMs,
          inkRowProfile: null,
          decodePath,
          createImageBitmapPath,
        }
      }
    } else {
      lastLabToCanvasDebugReport = {
        forkTrace,
        timingMs,
        inkRowProfile: null,
        decodePath,
        createImageBitmapPath,
      }
      if (canvas?.dataset) {
        canvas.dataset.labDecodePath = decodePath
        if (createImageBitmapPath) canvas.dataset.labCreateImageBitmapPath = '1'
        if (forkTrace?.postHash) canvas.dataset.labForkPostHash = forkTrace.postHash
        if (forkTrace?.svgStringChanged != null) {
          canvas.dataset.labForkChanged = forkTrace.svgStringChanged ? '1' : '0'
        }
      }
    }

    return canvas
  } finally {
    cleanup()
  }
}
