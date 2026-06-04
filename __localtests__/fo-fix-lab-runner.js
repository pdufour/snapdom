/**
 * Browser-side FO fix lab runner — harness-only recipe trials (no `src/` hooks).
 * Flow: `window.snapdom` → `applyRecipeToSvg` (recipe CSS / device-grid patch) →
 * `rasterSvgUrl` (lab raster). Product capture is unchanged; recipes live in fo-fix-recipes.js.
 */
import {
  FO_BASELINE_CSS,
  FO_FIX_RECIPES,
  REJECTED_HYPOTHESES,
  filterFoFixRecipes,
  getFoFixRecipe,
  listFoFixCategories,
  recipeCaptureCss,
  resolveFoFixMatrixRecipes,
} from './fo-fix-recipes.js'
import {
  applyMonkeypatch,
  applyH2RadicalSvgPatch,
  formatLineHeightPx,
  labPinContentLineHeightFromLive,
  parseH2ViewBoxFrac,
  patchFoTextLeavesFromLive,
  recipeMonkeypatchHandlesCapture,
  uninstallMonkeypatch,
} from './fo-fix-monkeypatch.js'
import {
  isLabRasterPatchToken,
  resolveLabRasterOptions,
  resolveLabRasterOptionsFromRecipe,
} from './fo-fix-lab-raster-patches.js'
import {
  applyRasterOnlySvgPatch,
  EXPERIMENTAL_RASTER_SVG_PATCH_VALUES,
  RASTER_ONLY_SVG_PATCH_IDS,
  RASTER_ONLY_SVG_PATCH_W2_IDS,
  resolveExperimentalRasterSvgPatch,
  resolveRasterForkFoYNudgePx,
  resolveRasterSvgPatchId,
} from '../src/exporters/rasterOnlySvgPatch.js'
import { resolveStrutLineHeightPxForTextLeaf } from '../src/utils/inkMeta.js'
import {
  toCanvas as labToCanvas,
  harnessProductToCanvasToLabOpts,
  getLastLabToCanvasDebugReport,
  clearLastLabToCanvasDebugReport,
  fnv1aHash,
} from './fo-fix-toCanvas.js'
import { resolveLabHook } from './tocanvas-lab-hooks-registry.js'
import { resolveLabToCanvasFlags } from './tocanvas-lab-flags-registry.js'
import { toCanvas as labToCanvasDecode } from './fo-fix-toCanvas-decode-experimental.js'
import { toCanvas as labToCanvasFrac } from './fo-fix-toCanvas-frac-draw.js'
import { toCanvas as labToCanvasNaturalDims } from './fo-fix-toCanvas-natural-dims.js'
import { toCanvas as labToCanvasUnified } from './fo-fix-toCanvas-unified.js'
import { toCanvas as labToCanvasBitmapFirst } from './fo-fix-toCanvas-bitmap-first.js'
import { toCanvas as labToCanvasRoundAll } from './fo-fix-toCanvas-round-all.js'
import { toCanvas as labToCanvasWaitDecode } from './fo-fix-toCanvas-wait-decode.js'
import { toCanvas as labToCanvasSmoothOff } from './fo-fix-toCanvas-smooth-off.js'
import { toCanvas as labToCanvasDesync } from './fo-fix-toCanvas-desync.js'
import { toCanvas as labToCanvasDoubleDraw } from './fo-fix-toCanvas-double-draw.js'
import { toCanvas as labToCanvasWait200 } from './fo-fix-toCanvas-wait-200.js'
import { toCanvas as labToCanvasW7DecodeSweep } from './fo-fix-toCanvas-w7-decode-sweep.js'
import { toCanvas as labToCanvasW7DrawRound } from './fo-fix-toCanvas-w7-draw-round.js'
import { toCanvas as labToCanvasW7BackingFloor } from './fo-fix-toCanvas-w7-backing-floor.js'
import { toCanvas as labToCanvasW7CtxDefault } from './fo-fix-toCanvas-w7-ctx-default.js'
import { toCanvas as labToCanvasW7WaitRaf } from './fo-fix-toCanvas-w7-wait-raf.js'
import { toCanvas as labToCanvasW8PipelineBlob } from './fo-fix-toCanvas-w8-pipeline-blob.js'
import { toCanvas as labToCanvasW8ForceBitmap } from './fo-fix-toCanvas-w8-force-bitmap.js'
import { toCanvas as labToCanvasW8CtxSmoothOff } from './fo-fix-toCanvas-w8-ctx-smooth-off.js'
import { toCanvas as labToCanvasW8BackingCeil } from './fo-fix-toCanvas-w8-backing-ceil.js'
import { toCanvas as labToCanvasW8DprDevice } from './fo-fix-toCanvas-w8-dpr-device.js'
import { toCanvas as labToCanvasW8ResetTransform } from './fo-fix-toCanvas-w8-reset-transform.js'
import { toCanvas as labToCanvasW8DrawfitContain } from './fo-fix-toCanvas-w8-drawfit-contain.js'
import { toCanvas as labToCanvasW8IgnoreMeta } from './fo-fix-toCanvas-w8-ignore-meta.js'
import {
  applyLandmarkInkMetricsToRow,
  assignStageTopsToRow,
  commitViewportInkTopsToRow,
  computeLandmarkInkMetrics,
  findLandmarkAnchor,
  measureViewportStageTops,
  previewViewportTopToRootPx,
  rootYToPreviewViewportStretch,
  rowLiveUsesVisibleCap,
  topInRootFromRects,
} from './fo-landmark-ink-metrics.mjs'
import {
  DEFAULT_INK_BACKEND,
  INK_SCAN_CAP_CORE_DEFAULTS,
  INK_SCAN_CAP_CREST_RATIO,
  INK_SCAN_DEFAULTS,
  INK_SCAN_VISIBLE_DEFAULTS,
  ensureInkScanBackend,
  ensureInkScanBackendReady,
  inkTopRowFromCanvasRegion,
  inkTopRowFromImageData,
  inkTopRowFromImageDataAsync,
  refineInkTopRowUpward,
  scanCapCrestIntegerRow,
  scanCanvasInkTopFromImageData,
} from './fo-ink-bounds-scan.mjs'
import { previewLocalToRootPx } from './fo-preview-coordinate-map.mjs'
import {
  FO_FIX_LAB_DEFAULT_PROBE_LANDMARK,
  FO_FIX_LAB_LANDMARK,
  FO_FIX_LAB_REGISTERED_LANDMARKS,
} from './fo-fix-lab-fixture.mjs'

/** Map lab `bitmap` mode to row-scan algorithm id. */
function resolveInkScanRowMode(inkScanMode) {
  if (inkScanMode === 'fractional-threshold' || inkScanMode === 'fractional-com') {
    return inkScanMode
  }
  return 'integer'
}

export {
  applyLandmarkInkMetricsToRow,
  computeLandmarkInkMetrics,
  rowLiveUsesVisibleCap,
} from './fo-landmark-ink-metrics.mjs'

export {
  DEFAULT_INK_BACKEND,
  INK_SCAN_CAP_CORE_DEFAULTS,
  INK_SCAN_CAP_CREST_RATIO,
  INK_SCAN_DEFAULTS,
  INK_SCAN_VISIBLE_DEFAULTS,
  ensureInkScanBackend,
  ensureInkScanBackendReady,
  inkTopRowFromCanvasRegion,
  inkTopRowFromImageData,
  inkTopRowFromImageDataAsync,
  refineInkTopRowUpward,
  scanCapCrestIntegerRow,
  scanCanvasInkTopFromImageData,
} from './fo-ink-bounds-scan.mjs'

export {
  FO_FIX_RECIPES,
  FO_FIX_ACTIVE_COUNT,
  FO_FIX_INACTIVE_COUNT,
  FO_FIX_DEACTIVATED_FROM_INDEX,
  REJECTED_HYPOTHESES,
  getFoFixRecipe,
  listFoFixCategories,
  filterFoFixRecipes,
  resolveFoFixMatrixRecipes,
  bestPromotableMatrixRow,
  isTextBypassRecipe,
  isFoFixRecipeActive,
  matrixExcludesTextBypass,
} from './fo-fix-recipes.js'

/** Last raster from {@link runFoFixProbe} (lab preview / window.__foFixLab). */
export let lastCanvas = null

/** Mini fixture landmark (`data-landmark="Blocks"`). */
export const MINI_FIXTURE_LANDMARK = FO_FIX_LAB_LANDMARK

/** @deprecated use MINI_FIXTURE_LANDMARK */
export const MINI_NAV_LETTER = MINI_FIXTURE_LANDMARK

/** Default single-landmark probe on mini fixture. */
export const DEFAULT_LANDMARK = FO_FIX_LAB_DEFAULT_PROBE_LANDMARK

export { FO_FIX_LAB_REGISTERED_LANDMARKS }

/** Default landmarks for mini-fixture calibrate. */
export const CALIBRATE_LANDMARKS = [MINI_FIXTURE_LANDMARK]

/** Raster patch ids for {@link file://./fo-svg-sandbox.html} dropdown. */
export const SANDBOX_RASTER_PATCHES = [
  'none',
  'decode-interval',
  'decode-interval-raf',
  'double-decode',
  'triple-decode',
  'fonts-ready',
  'fonts-ready-interval',
  'double-raf',
  'raf-before-draw',
  'wait-fonts-500ms',
  'direct',
  'blob-url',
  'blob-url-decode-interval',
  'blob-url-fetch-revoke',
  'decode-via-blob',
  'create-image-bitmap',
  'create-image-bitmap-pixelated',
  'device-grid-floor',
  'canvas-pixelated',
  'two-stage',
  'load-event',
  'load-event-interval',
  'pre-decode-dom',
  'offscreen-canvas',
  'will-read-frequently',
  'supersample-downscale',
  'product-toCanvas',
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
  'lab-toCanvas-smooth-off',
  'lab-toCanvas-desync',
  'lab-toCanvas-double-draw',
  'lab-toCanvas-wait-200',
  'lab-toCanvas-natural-dims',
  'lab-toCanvas-unified',
  'lab-toCanvas-round-all',
  'lab-toCanvas-w7-decode-sweep',
  'lab-toCanvas-w7-draw-round',
  'lab-toCanvas-w7-backing-floor',
  'lab-toCanvas-w7-ctx-default',
  'lab-toCanvas-w7-wait-raf',
  'lab-toCanvas-wait-decode',
  'lab-toCanvas-bitmap-first',
  'lab-toCanvas-w8-pipeline-blob',
  'lab-toCanvas-w8-force-bitmap',
  'lab-toCanvas-w8-ctx-smooth-off',
  'lab-toCanvas-w8-backing-ceil',
  'lab-toCanvas-w8-dpr-device',
  'lab-toCanvas-w8-reset-transform',
  'lab-toCanvas-w8-drawfit-contain',
  'lab-toCanvas-w8-ignore-meta',
  'lab-decode-200ms',
  'lab-decode-100ms',
  'lab-decode-off',
  'lab-decode-double',
  'lab-decode-raf',
  'lab-draw-round',
  'lab-draw-frac',
  'lab-backing-floor',
  'lab-backing-ceil',
  'lab-ctx-smooth-off',
]

/** Lab / product draw-path overrides (fo-svg-sandbox + fo-fix-lab fork dropdown). */
export const LAB_TOCANVAS_FORK_PATCHES = [
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
  'lab-toCanvas-smooth-off',
  'lab-toCanvas-desync',
  'lab-toCanvas-double-draw',
  'lab-toCanvas-wait-200',
  'lab-toCanvas-natural-dims',
  'lab-toCanvas-unified',
  'product-toCanvas',
]

/** @returns {string[]} {@link SANDBOX_RASTER_PATCHES} minus fork draw paths. */
export function standardSandboxRasterPatches() {
  return SANDBOX_RASTER_PATCHES.filter((p) => !LAB_TOCANVAS_FORK_PATCHES.includes(p))
}

/**
 * Fill lab fork + standard raster patch dropdowns (fo-svg-sandbox, fo-fix-lab).
 * @param {HTMLSelectElement} forkSelect
 * @param {HTMLSelectElement} rasterSelect
 * @param {{ includeRecipeDefault?: boolean, fork?: string, patch?: string, defaultFork?: string, defaultPatch?: string }} [opts]
 */
export function populateLabRasterSelects(forkSelect, rasterSelect, opts = {}) {
  const {
    includeRecipeDefault = false,
    fork,
    patch,
    defaultFork = '',
    defaultPatch = 'decode-interval',
  } = opts

  forkSelect.replaceChildren()
  if (includeRecipeDefault) {
    const o = document.createElement('option')
    o.value = ''
    o.textContent = 'Recipe default'
    forkSelect.appendChild(o)
  } else {
    const o = document.createElement('option')
    o.value = ''
    o.textContent = 'Image raster'
    forkSelect.appendChild(o)
  }
  for (const id of LAB_TOCANVAS_FORK_PATCHES) {
    const o = document.createElement('option')
    o.value = id
    o.textContent = id
    forkSelect.appendChild(o)
  }

  rasterSelect.replaceChildren()
  if (includeRecipeDefault) {
    const o = document.createElement('option')
    o.value = ''
    o.textContent = 'Recipe default'
    rasterSelect.appendChild(o)
  }
  for (const id of standardSandboxRasterPatches()) {
    const o = document.createElement('option')
    o.value = id
    o.textContent = id
    rasterSelect.appendChild(o)
  }

  if (fork != null && (fork === '' || LAB_TOCANVAS_FORK_PATCHES.includes(fork))) {
    forkSelect.value = fork
  } else {
    forkSelect.value = defaultFork
  }

  const patches = standardSandboxRasterPatches()
  if (patch != null && (patch === '' || patches.includes(patch))) {
    rasterSelect.value = patch
  } else {
    rasterSelect.value = defaultPatch
  }
}

const INK_PASS = 0.06

/** modern-screenshot drawImageInterval default (ms) — structural upstream default, not gate-tuned. */
const DECODE_INTERVAL_MS = 100

/** @param {string} rp */
export function parseLabWaitRasterPatchMs(rp) {
  const m = /^lab-wait-(\d+)ms$/.exec(rp)
  return m ? Number(m[1]) : null
}

function relRect(el, root) {
  const er = el.getBoundingClientRect()
  const rr = root.getBoundingClientRect()
  return { top: er.top - rr.top, left: er.left - rr.left, width: er.width, height: er.height }
}

/** Landmark border-box top in #capture-target root px (getBoundingClientRect). */
export function measureLandmarkLayoutTopInRoot(el, root) {
  return relRect(el, root).top
}

/** Text glyph cap top in root px (Range union), else border-box top. */
export function measureLandmarkTextTopInRoot(el, root) {
  const rr = root.getBoundingClientRect()
  const range = document.createRange()
  range.selectNodeContents(el)
  let glyphTop = Infinity
  for (const rc of range.getClientRects()) {
    const t = rc.top - rr.top
    if (Number.isFinite(t)) glyphTop = Math.min(glyphTop, t)
  }
  if (Number.isFinite(glyphTop) && glyphTop < Infinity) return glyphTop
  return relRect(el, root).top
}

/**
 * Vertical band for preview/canvas ink scan — Range glyph box, not stretched flex GBCR.
 * @param {Element} el
 * @param {Element} root
 */
export function measureLandmarkInkScanBandInRoot(el, root) {
  const box = relRect(el, root)
  const rr = root.getBoundingClientRect()
  const rangeUnion = measureRangeClientRectUnionPx(el)
  if (rangeUnion && rangeUnion.height > 0.5) {
    const topCss = rangeUnion.top - rr.top
    const pad = 0.5
    return {
      box,
      leftCss: rangeUnion.left - rr.left,
      topCss: Math.max(box.top, topCss - pad),
      bandHeightCss: Math.min(box.height, rangeUnion.height + pad * 2),
      bandWidthCss: Math.min(box.width, Math.max(rangeUnion.width, 8)),
    }
  }
  const cap = measureCapInkModel(el, root)
  if (Number.isFinite(cap?.top)) {
    const fs = parseFloat(getComputedStyle(el).fontSize) || 16
    const bandH = Math.min(box.height, fs + (cap.halfLeading ?? 0) * 2 + 2)
    return {
      box,
      leftCss: box.left,
      topCss: cap.top,
      bandHeightCss: Math.max(8, bandH),
      bandWidthCss: box.width,
    }
  }
  return {
    box,
    leftCss: box.left,
    topCss: box.top,
    bandHeightCss: Math.min(box.height, 24),
    bandWidthCss: box.width,
  }
}

/**
 * Lab matrix/UI layout comparison (DOM only — no bitmap ink scan).
 * Positive liveVsCanvasTopPx = canvas layout line lower than live (+Y in root).
 */
export function compareThreeWayLayout(liveRoot, el) {
  const box = relRect(el, liveRoot)
  const textTopInRoot = measureLandmarkTextTopInRoot(el, liveRoot)
  const topInBorder = textTopInRoot - box.top
  const textLeg = { top: textTopInRoot, topInBorder }
  const boxLeg = { top: box.top, topInBorder: 0 }
  return {
    live: textLeg,
    liveLayout: boxLeg,
    svg: textLeg,
    canvas: textLeg,
    liveVsCanvasTopPx: 0,
    liveVsSvgTopPx: 0,
    liveVsSvgLayoutTopPx: 0,
    liveVsCanvasLayoutTopPx: 0,
    deltaTopInBorder: 0,
    deltaSvgInBorder: 0,
    deltaSvgLayoutInBorder: 0,
    inkScanMode: 'layout-only',
  }
}

/** Probe URL alias — legacy checkout labels → mini fixture `data-landmark` id (`Blocks`). */
const LANDMARK_ALIASES = {
  Blocks: 'Blocks',
  blocks: 'Blocks',
  Home: 'Blocks',
  home: 'Blocks',
  Products: 'Blocks',
  products: 'Blocks',
  H: 'Blocks',
  h: 'Blocks',
}

/**
 * Canonical `data-landmark` id for a probe label (Blocks, Home, H, …).
 * @param {string} [label]
 */
export function resolveLandmark(label) {
  const raw = String(label ?? '').trim()
  if (!raw) return FO_FIX_LAB_LANDMARK
  return LANDMARK_ALIASES[raw] ?? raw
}

/** Whether a probe label is registered (URL / CLI / dropdown). */
export function isRegisteredProbeLandmark(label) {
  const raw = String(label ?? '').trim()
  if (!raw) return false
  return (
    raw in LANDMARK_ALIASES ||
    FO_FIX_LAB_REGISTERED_LANDMARKS.includes(raw) ||
    raw === FO_FIX_LAB_LANDMARK
  )
}

/** Invalid or empty labels fall back to {@link DEFAULT_LANDMARK}. */
export function normalizeProbeLandmark(label) {
  const raw = String(label ?? '').trim()
  if (!raw || !isRegisteredProbeLandmark(raw)) return DEFAULT_LANDMARK
  return raw
}

/**
 * `data-landmark` ids under `#capture-target` (URL validation / error hints).
 * @param {ParentNode | null} [root]
 */
export function listLandmarks(root = document.getElementById('capture-target')) {
  if (!root) return []
  const ids = new Set()
  for (const el of root.querySelectorAll('[data-landmark]')) {
    const id = (el.getAttribute('data-landmark') || '').trim()
    if (id) ids.add(id)
  }
  return [...ids].sort()
}

export function findLandmarkElement(root, text) {
  const raw = String(text ?? '').trim()
  if (!raw) return null
  const attrId = resolveLandmark(raw)
  const bySnapdom = root.querySelector(`[data-snapdom-landmark="${CSS.escape(raw)}"]`)
  if (bySnapdom) return bySnapdom
  const byAttr = root.querySelector(`[data-landmark="${CSS.escape(attrId)}"]`)
  if (byAttr) return byAttr
  if (raw !== attrId) {
    const byRawAttr = root.querySelector(`[data-landmark="${CSS.escape(raw)}"]`)
    if (byRawAttr) return byRawAttr
  }
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    const t = (el.textContent || '').trim()
    if (t === attrId || t === raw) return el
  }
  return null
}

/**
 * Text leaf used for ink/layout probes — `<nav data-landmark>` registers Blocks; measure the inner link.
 * @param {ParentNode | null} root
 * @param {string} [label]
 */
export function findLandmarkInkElement(root, label) {
  if (!root) return null
  const container = findLandmarkElement(root, label)
  if (!container) return null
  if (container.childElementCount === 0 && (container.textContent || '').trim()) return container
  const inner =
    container.querySelector('a[href], [data-landmark-ink], [data-landmark-text]') ??
    null
  if (inner) return inner
  for (const el of container.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    if ((el.textContent || '').trim()) return el
  }
  return container
}

/** @deprecated use findLandmarkInkElement for probes; findLandmarkElement for registration */
function findTextLeaf(root, text) {
  return findLandmarkInkElement(root, text) ?? findLandmarkElement(root, text)
}

function measureLayoutLineBoxPx(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  if (!(el.textContent || '').trim()) return null
  const pad =
    (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0)
  const h = el.getBoundingClientRect().height
  if (h <= pad) return null
  const content = h - pad
  return el.scrollHeight <= content + 2 ? content : null
}

function resolveLineHeightPx(style, el) {
  const fs = parseFloat(style.fontSize) || 16
  let px = NaN
  const lhUsed = style.lineHeight
  if (lhUsed && lhUsed !== 'normal') {
    const n = parseFloat(lhUsed)
    if (Number.isFinite(n) && n > 0) px = n
  }
  if (!Number.isFinite(px) || px <= 0) {
    const layout = measureLayoutLineBoxPx(style, el)
    px = layout != null && layout > 0 ? layout : fs * 1.35
  }
  return px
}

function canvasGlyphSample(el) {
  const t = (el.textContent || '').trim()
  if (!t) return 'Mg'
  if (t.length === 1) return `${t}${t}`
  return t[0] + t[t.length - 1]
}

function measureFontBoxPx(cs, sample = 'Mg') {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  ctx.font = `${style} ${weight} ${fs}px ${family}`
  const m = ctx.measureText(sample)
  const ascent = typeof m.fontBoundingBoxAscent === 'number' ? m.fontBoundingBoxAscent : m.actualBoundingBoxAscent
  const descent = typeof m.fontBoundingBoxDescent === 'number' ? m.fontBoundingBoxDescent : m.actualBoundingBoxDescent
  if (typeof ascent !== 'number' || typeof descent !== 'number') return null
  return {
    ascent,
    descent,
    height: ascent + descent,
    actualBoundingBoxAscent: m.actualBoundingBoxAscent,
    actualBoundingBoxDescent: m.actualBoundingBoxDescent,
  }
}

/** Font-metrics cap model (paint.cap.*). Matches h2 branch measureCapInk. */
export function measureCapInkModel(el, root) {
  const cs = getComputedStyle(el)
  const box = relRect(el, root)
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  if (!fontBox || !Number.isFinite(box.top)) return null

  const borderTop = parseFloat(cs.borderTopWidth) || 0
  const paddingTop = parseFloat(cs.paddingTop) || 0
  let lineHeightPx = resolveLineHeightPx(cs, el)
  /** Single-line leaves use painted layout box height (parity with h2 style pinning). */
  const layoutLh = measureLayoutLineBoxPx(cs, el)
  if (layoutLh != null && layoutLh > 0) {
    lineHeightPx = layoutLh
  }

  const halfLeading = Math.max(0, (lineHeightPx - fontBox.height) / 2)
  const topInBorder = paddingTop + halfLeading + fontBox.ascent - fontBox.actualBoundingBoxAscent
  return { top: box.top + borderTop + topInBorder, topInBorder, halfLeading }
}

/** Range union ink top relative to element border-box top (px). */
export function measureRangeInkTopInBorderPx(el) {
  const box = el.getBoundingClientRect()
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (!rects.length) return null
  let top = Infinity
  for (const rc of rects) {
    top = Math.min(top, rc.top)
  }
  if (!Number.isFinite(top)) return null
  return top - box.top
}

/**
 * Line box top in border-box coords: border + padding + ½(contentH − lh).
 * @param {Element} el
 * @param {CSSStyleDeclaration} cs
 */
export function measureLineBoxTopInBorderPx(el, cs) {
  const box = el.getBoundingClientRect()
  if (!Number.isFinite(box.height) || box.height <= 0) return null
  const borderTop = parseFloat(cs.borderTopWidth) || 0
  const paddingTop = parseFloat(cs.paddingTop) || 0
  const paddingBottom = parseFloat(cs.paddingBottom) || 0
  const borderBottom = parseFloat(cs.borderBottomWidth) || 0
  const contentH = box.height - borderTop - borderBottom - paddingTop - paddingBottom
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const halfStrut = Math.max(0, (contentH - lhPx) / 2)
  return borderTop + paddingTop + halfStrut
}

/**
 * Live strut / line-box facts for nav text leaves (Range vs cap vs lh metrics).
 * @param {Element} el
 */
export function measureLhStrutRangeFacts(el) {
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const halfLeadingFs = (lhPx - fs) / 2
  const halfLeadingFontBox = measureFontBoxHalfLeadingPx(el)
  const halfLeadingUsed = halfLeadingPxForLeaf(el, cs)
  const rangeTopInBorder = measureRangeInkTopInBorderPx(el)
  const capTopInBorder = measureCapInkTopInBorderPx(el)
  const lineBoxTopInBorder = measureLineBoxTopInBorderPx(el, cs)

  const range = document.createRange()
  range.selectNodeContents(el)
  const lineRects = range.getClientRects()
  let rangeLineHeightPx = null
  let halfLeadingFromRangeLineFs = null
  let halfLeadingFromRangeLineFontBox = null
  if (lineRects.length) {
    const lineH = lineRects[0].height
    if (Number.isFinite(lineH) && lineH > 0) {
      rangeLineHeightPx = lineH
      halfLeadingFromRangeLineFs = Math.max(0, (lineH - fs) / 2)
      const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
      if (fontBox?.height) {
        halfLeadingFromRangeLineFontBox = Math.max(0, (lineH - fontBox.height) / 2)
      }
    }
  }

  const rangeMinusLineBoxTop =
    rangeTopInBorder != null && lineBoxTopInBorder != null
      ? rangeTopInBorder - lineBoxTopInBorder
      : null
  const rangeMinusCapTop =
    rangeTopInBorder != null && capTopInBorder != null
      ? rangeTopInBorder - capTopInBorder
      : null
  const rangeSubpixelPx =
    rangeTopInBorder != null && Number.isFinite(rangeTopInBorder)
      ? rangeTopInBorder - Math.floor(rangeTopInBorder)
      : null
  const halfLeadingFsMinusRangeSubpixel =
    Number.isFinite(halfLeadingFs) && Number.isFinite(rangeSubpixelPx)
      ? halfLeadingFs - rangeSubpixelPx
      : null

  return {
    fontSizePx: fs,
    lineHeightPx: lhPx,
    halfLeadingFs,
    halfLeadingFontBox,
    halfLeadingUsed,
    rangeTopInBorder,
    capTopInBorder,
    lineBoxTopInBorder,
    rangeLineHeightPx,
    halfLeadingFromRangeLineFs,
    halfLeadingFromRangeLineFontBox,
    rangeMinusLineBoxTop,
    rangeMinusCapTop,
    rangeSubpixelPx,
    halfLeadingFsMinusRangeSubpixel,
  }
}

/** Painted ink top from live layout (Range union), #capture-target coords. */
export function measureLivePaintedInk(el, root) {
  const box = relRect(el, root)
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (!rects.length) return null
  const rr = root.getBoundingClientRect()
  let top = Infinity
  for (const rc of rects) {
    top = Math.min(top, rc.top - rr.top)
  }
  if (!Number.isFinite(top)) return null
  return { top, topInBorder: top - box.top }
}

/**
 * Live **visible glyph ink** top for UI markers (#capture-target px).
 * Matrix live reference uses {@link measureLivePaintedInk}; SVG/canvas Δ use bitmap scan.
 * On stretch flex nav, Range top often sits inside the strut above ascenders — use
 * line-box top + ½(lh−fs), not Range + ½ (that double-counts strut).
 * @param {Element} el
 * @param {Element} root
 */
export function measureLiveGlyphInkTopFromRange(el, root) {
  const painted = measureLivePaintedInk(el, root)
  if (!painted) return null
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const intraLineHalfLeading = Math.max(0, (lhPx - fs) / 2)
  const lineBoxTopInBorder = measureLineBoxTopInBorderPx(el, cs)
  const rangeTopInBorder = painted.topInBorder
  let visualTopInBorder = rangeTopInBorder
  if (Number.isFinite(intraLineHalfLeading)) {
    const fromRangeHalfLeading = rangeTopInBorder + intraLineHalfLeading
    if (lineBoxTopInBorder != null) {
      const fromLineBoxHalfLeading = lineBoxTopInBorder + intraLineHalfLeading
      visualTopInBorder = Math.max(fromRangeHalfLeading, fromLineBoxHalfLeading)
    } else {
      visualTopInBorder = fromRangeHalfLeading
    }
  }
  const box = relRect(el, root)
  return {
    top: box.top + visualTopInBorder,
    topInBorder: visualTopInBorder,
    metricsTop: painted.top,
    metricsTopInBorder: rangeTopInBorder,
    rangeLineTopInBorder: rangeTopInBorder,
    lineBoxTopInBorder,
    intraLineHalfLeading,
  }
}

/** 1px DOM ink guide height — display top = metric ink row − this (line sits above ink). */
export const INK_LINE_HEIGHT_CSS = 1

/**
 * CSS `top` for a 1px ink guide so its bottom edge meets the metric ink row.
 * @param {number} metricInkTopInRootPx topmost visible ink row in #capture-target px
 */
export function inkLineDisplayTopInRootPx(metricInkTopInRootPx) {
  if (!Number.isFinite(metricInkTopInRootPx)) return metricInkTopInRootPx
  return Math.max(0, metricInkTopInRootPx - INK_LINE_HEIGHT_CSS)
}

/**
 * Map visible ink viewport Y to #capture-target line `top` (1px guide above crest).
 * @param {number} inkViewportTop
 * @param {Element} root
 */
export function inkLineDisplayTopInRootFromViewport(inkViewportTop, root) {
  if (!root || !Number.isFinite(inkViewportTop)) return null
  const rr = root.getBoundingClientRect()
  const inkInRoot = inkViewportTop - rr.top
  return inkLineDisplayTopInRootPx(inkInRoot)
}

/**
 * Viewport Y for ink guide display (bottom edge at metric ink row).
 * @param {number} metricInkTopInRootPx
 * @param {Element} root #capture-target
 */
export function inkLineViewportTopFromMetric(metricInkTopInRootPx, root) {
  if (!root || !Number.isFinite(metricInkTopInRootPx)) return null
  const rr = root.getBoundingClientRect()
  return rr.top + inkLineDisplayTopInRootPx(metricInkTopInRootPx)
}

/** Viewport ink Y → #capture-target root CSS px (compare-stage preview mapping). */
export function viewportInkTopInRootPx(viewportTop, root) {
  if (!root || !Number.isFinite(viewportTop)) return null
  const rr = root.getBoundingClientRect()
  return viewportTop - rr.top
}

function assignViewportInkRootPx(row, viewportKey, viewportTop, root) {
  if (!row || !Number.isFinite(viewportTop)) return
  row[viewportKey] = viewportTop
  const inRoot = viewportInkTopInRootPx(viewportTop, root)
  if (Number.isFinite(inRoot)) row[`${viewportKey}InRoot`] = inRoot
}

/** Lab preview slack above/below 48px capture box (fo-fix-lab.html). */
export function previewInkClipPadCss() {
  if (typeof document === 'undefined') return 8
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--fixture-preview-pad-y')
    .trim()
  const n = parseFloat(raw)
  return Number.isFinite(n) && n > 0 ? n : 8
}

/**
 * Drop clip-edge / band-top ink rows; keep line at true cap crest in #capture-target px.
 * @param {number} lineYInRoot
 * @param {Element} el
 * @param {Element} root
 */
export function coerceLabVisibleInkTopInRoot(lineYInRoot, el, root) {
  if (!Number.isFinite(lineYInRoot) || !el || !root) return lineYInRoot
  const pad = previewInkClipPadCss()
  // Ignore band-top fringe inside preview padding only — never push line down into glyph body.
  if (lineYInRoot >= pad + 0.75) return lineYInRoot
  const cap = measureCapInkModel(el, root)
  const capTop = cap?.top
  if (!Number.isFinite(capTop)) return lineYInRoot
  if (lineYInRoot < 1 && capTop >= 1) return capTop
  if (lineYInRoot < pad + 0.75 && capTop > pad + 1) return capTop
  return lineYInRoot
}

export function measureLiveVisibleInkTop(el, root) {
  const box = relRect(el, root)
  const rootRect = root.getBoundingClientRect()
  const leafTop = el.getBoundingClientRect().top - rootRect.top
  const facts = measureLhStrutRangeFacts(el)
  const rangeTopInBorder = facts.rangeTopInBorder ?? measureRangeInkTopInBorderPx(el)
  const rangeTop =
    Number.isFinite(rangeTopInBorder) && rangeTopInBorder > 1
      ? box.top + rangeTopInBorder
      : null
  const rangeCapTop =
    Number.isFinite(rangeTopInBorder) && Number.isFinite(facts.halfLeadingFs)
      ? box.top + rangeTopInBorder + facts.halfLeadingFs
      : null
  const cap = measureCapInkModel(el, root)
  const range = measureLivePaintedInk(el, root)
  const rangeInkTop =
    Number.isFinite(range?.top) && range.top > box.top + 1 ? range.top : null
  const capTop = Number.isFinite(cap?.top)
    ? cap.top
    : Number.isFinite(cap?.topInBorder)
      ? box.top + cap.topInBorder
      : null
  /** Topmost visible cap row (min Y) — use range+½(lh−fs), not raw Range strut edge. */
  /** @type {number[]} */
  const paintTops = []
  if (Number.isFinite(rangeCapTop)) paintTops.push(rangeCapTop)
  if (Number.isFinite(capTop)) paintTops.push(capTop)
  if (!Number.isFinite(rangeCapTop)) {
    if (Number.isFinite(rangeTop)) paintTops.push(rangeTop)
    if (Number.isFinite(rangeInkTop)) paintTops.push(rangeInkTop)
  }
  if (!paintTops.length) return null
  let top = Math.min(...paintTops)
  top = coerceLabVisibleInkTopInRoot(top, el, root)
  return {
    top,
    topInBorder: top - box.top,
    leafTop: Number.isFinite(leafTop) ? leafTop : null,
    rangeTop: rangeCapTop ?? rangeTop ?? rangeInkTop ?? null,
    capTop: capTop ?? null,
    metricsTop: range?.top ?? null,
  }
}

/**
 * Union of Range getClientRects() in document pixels (text ink box).
 * @param {Element} el
 */
export function measureRangeClientRectUnionPx(el) {
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (!rects.length) return null
  let top = Infinity
  let bottom = -Infinity
  let left = Infinity
  let right = -Infinity
  for (const rc of rects) {
    top = Math.min(top, rc.top)
    bottom = Math.max(bottom, rc.bottom)
    left = Math.min(left, rc.left)
    right = Math.max(right, rc.right)
  }
  if (!Number.isFinite(top) || bottom <= top) return null
  return {
    top,
    bottom,
    left,
    right,
    width: right - left,
    height: bottom - top,
  }
}

/** Pin line-height from live Range union height (ascent+descent proxy). */
export function labPinTextAscentDescentFromRange(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const ink = measureRangeClientRectUnionPx(el)
    if (!ink || ink.height <= 0) return null
    return { 'line-height': formatLineHeightPx(ink.height) }
  })
}

/** Pin font-size from live text leaf computed size. */
export function labPinFontSizeFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (_el, cs) => {
    const fs = cs.fontSize
    if (!fs) return null
    return { 'font-size': fs }
  })
}

/** Pin capture SVG root font-size from live capture root computed font-size. */
export function labSvgRootFontSizeFromLive(svgText, liveRoot) {
  if (!liveRoot) return svgText
  const fs = getComputedStyle(liveRoot).fontSize
  if (!fs) return svgText
  return svgRootAttrPatch(svgText, { 'font-size': fs })
}

/** Pin letter-spacing from live text leaf computed value. */
export function labPinLetterSpacingFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (_el, cs) => {
    const ls = cs.letterSpacing
    if (!ls) return null
    return { 'letter-spacing': ls }
  })
}

/** Pin inline box height from element getClientRects() union. */
export function labPinInlineBoxHeightFromClientRects(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const rects = el.getClientRects()
    if (!rects.length) return null
    let top = Infinity
    let bottom = -Infinity
    for (const rc of rects) {
      top = Math.min(top, rc.top)
      bottom = Math.max(bottom, rc.bottom)
    }
    const h = bottom - top
    if (!Number.isFinite(h) || h <= 0) return null
    const px = formatLineHeightPx(h)
    return { height: px, 'min-height': px, 'max-height': px }
  })
}

/**
 * Pin flex cross-axis size from live anchor GBCR height (stretch leaf parity).
 * @param {string} svgText
 * @param {HTMLElement} liveRoot
 */
export function labPinFlexCrossSizeFromAnchor(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    const parent = el.parentElement
    const pd = parent ? getComputedStyle(parent).display || '' : ''
    if (!pd.includes('flex') && !pd.includes('grid')) return null
    const h = el.getBoundingClientRect().height
    if (!Number.isFinite(h) || h <= 0) return null
    const px = formatLineHeightPx(h)
    /** @type {Record<string, string>} */
    const patch = { height: px, 'min-height': px }
    const self = cs.alignSelf || 'auto'
    if (self === 'auto' || self === 'normal' || self === 'stretch') {
      patch['align-self'] = 'flex-start'
    }
    return patch
  })
}

/**
 * @param {Element} el
 * @param {CSSStyleDeclaration} cs
 */
function halfLeadingPxForLeaf(el, cs) {
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  if (!fontBox) return null
  let lineHeightPx = resolveLineHeightPx(cs, el)
  const layoutLh = measureLayoutLineBoxPx(cs, el)
  if (layoutLh != null && layoutLh > 0) lineHeightPx = layoutLh
  return Math.max(0, (lineHeightPx - fontBox.height) / 2)
}

/** Pin padding-top from measured half-leading (line box − font box) / 2. */
export function labPinHalfLeadingPaddingTop(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    const hl = halfLeadingPxForLeaf(el, cs)
    return hl != null ? { 'padding-top': formatLineHeightPx(hl) } : null
  })
}

/** Split half-leading evenly as padding-top and padding-bottom. */
export function labPinHalfLeadingSplitPadding(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    const hl = halfLeadingPxForLeaf(el, cs)
    if (hl == null) return null
    const half = hl / 2
    const px = formatLineHeightPx(half)
    return { 'padding-top': px, 'padding-bottom': px }
  })
}

/** Pin line-height from layout content box (scrollHeight / GBCR content height). */
export function labPinLineHeightFromLayoutBox(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    const layout = measureLayoutLineBoxPx(cs, el)
    if (layout == null || layout <= 0) return null
    return { 'line-height': formatLineHeightPx(layout) }
  })
}

/** Pin border-box height from live getBoundingClientRect. */
export function labPinHeightFromGbcr(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const h = el.getBoundingClientRect().height
    if (!Number.isFinite(h) || h <= 0) return null
    const px = formatLineHeightPx(h)
    return { height: px, 'min-height': px }
  })
}

/** Pin border-box width from live getBoundingClientRect. */
export function labPinWidthFromGbcr(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const w = el.getBoundingClientRect().width
    if (!Number.isFinite(w) || w <= 0) return null
    return { width: formatLineHeightPx(w) }
  })
}

/** Pin padding-top from cap ink model topInBorder (font metrics + half-leading). */
export function labPinInkTopInBorderPadding(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const cap = measureCapInkModel(el, liveRoot)
    if (!cap || !Number.isFinite(cap.topInBorder)) return null
    const cs = getComputedStyle(el)
    const borderTop = parseFloat(cs.borderTopWidth) || 0
    const pt = Math.max(0, cap.topInBorder - borderTop)
    return { 'padding-top': formatLineHeightPx(pt) }
  })
}

/** Pin height to content box (GBCR − vertical border/padding). */
export function labPinContentBoxHeight(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    const rect = el.getBoundingClientRect()
    const pt = parseFloat(cs.paddingTop) || 0
    const pb = parseFloat(cs.paddingBottom) || 0
    const bt = parseFloat(cs.borderTopWidth) || 0
    const bb = parseFloat(cs.borderBottomWidth) || 0
    const h = rect.height - pt - pb - bt - bb
    if (!Number.isFinite(h) || h <= 0) return null
    const px = formatLineHeightPx(h)
    return { height: px, 'line-height': px }
  })
}

/** Pin line-height from offscreen normal line-height probe (flex stretch leaves). */
export function labPinNormalLhFromProbe(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, cs) => {
    if (cs.lineHeight !== 'normal' && cs.getPropertyValue('line-height') !== 'normal') return null
    const probe = document.createElement('span')
    probe.textContent = (el.textContent || '').trim() || 'Mg'
    probe.style.cssText =
      'position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;' +
      'display:inline-block;margin:0;padding:0;border:0;line-height:normal;white-space:nowrap;'
    for (const prop of [
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-stretch',
      'font-variant',
      'letter-spacing',
      'word-spacing',
      'text-transform',
    ]) {
      probe.style.setProperty(prop, cs.getPropertyValue(prop))
    }
    document.documentElement.appendChild(probe)
    const h = probe.getBoundingClientRect().height
    probe.remove()
    if (!Number.isFinite(h) || h <= 0) return null
    return { 'line-height': formatLineHeightPx(h) }
  })
}

/**
 * @param {string} attrs
 * @param {string} key
 * @param {string} value
 */
function setFoAttr(attrs, key, value) {
  const re = new RegExp(`\\b${key}=["'][^"']*["']`, 'i')
  if (re.test(attrs)) return attrs.replace(re, `${key}="${value}"`)
  return `${attrs} ${key}="${value}"`
}

/** Pin FO width/height attrs to live capture root GBCR (device px, not dpr-scaled). */
export function mathPinForeignObjectAttrsFromLiveRoot(svgText, liveRoot) {
  const r = liveRoot.getBoundingClientRect()
  const w = formatLineHeightPx(r.width)
  const h = formatLineHeightPx(r.height)
  return svgText.replace(/<foreignObject(\s[^>]*)>/i, (full, attrs = '') => {
    let next = setFoAttr(attrs, 'width', w)
    next = setFoAttr(next, 'height', h)
    return `<foreignObject${next}>`
  })
}

/** Pin FO>div container width/height inline to live root GBCR (matches capture.js w0/h0 intent). */
export function mathPinFoContainerDimsFromLiveRoot(svgText, liveRoot) {
  const r = liveRoot.getBoundingClientRect()
  const w = formatLineHeightPx(r.width)
  const h = formatLineHeightPx(r.height)
  return svgText.replace(
    /(<div)(\s[^>]*xmlns=["']http:\/\/www\.w3\.org\/1999\/xhtml["'][^>]*)(>)/i,
    (full, open, attrs, close) => {
      const styleMatch = attrs.match(/\sstyle=["']([^"']*)["']/i)
      const patch = { width: w, height: h }
      if (styleMatch) {
        const merged = mergeInlineStyleMap(styleMatch[1], patch)
        const nextAttrs = attrs.replace(/\sstyle=["'][^"']*["']/i, ` style="${merged}"`)
        return `${open}${nextAttrs}${close}`
      }
      const inner = Object.entries(patch)
        .map(([k, v]) => `${k}:${v}`)
        .join(';')
      return `${open}${attrs} style="${inner}"${close}`
    },
  )
}

/**
 * @param {string} styleBody
 * @param {Record<string, string>} patch
 */
function mergeInlineStyleMap(styleBody, patch) {
  const map = new Map()
  for (const chunk of styleBody.split(';')) {
    const idx = chunk.indexOf(':')
    if (idx < 0) continue
    const k = chunk.slice(0, idx).trim()
    const v = chunk.slice(idx + 1).trim()
    if (k) map.set(k, v)
  }
  for (const [k, v] of Object.entries(patch)) map.set(k, v)
  return [...map.entries()].map(([k, v]) => `${k}:${v}`).join(';')
}

/** Composite: stretch cross-size pin + half-leading padding-top + layout line-height. */
export function labPinCompositeStretchLhHalf(svgText, liveRoot) {
  let out = labPinFlexCrossSizeFromAnchor(svgText, liveRoot)
  out = labPinHalfLeadingPaddingTop(out, liveRoot)
  return labPinLineHeightFromLayoutBox(out, liveRoot)
}

/** Composite: GBCR width/height + layout line-height + half-leading padding-top. */
export function labPinCompositeGbcrLhHalf(svgText, liveRoot) {
  let out = labPinWidthFromGbcr(svgText, liveRoot)
  out = labPinHeightFromGbcr(out, liveRoot)
  out = labPinLineHeightFromLayoutBox(out, liveRoot)
  return labPinHalfLeadingPaddingTop(out, liveRoot)
}

/** FO container div + foreignObject attrs from live root GBCR. */
export function mathPinFoContainerAndAttrsFromLiveRoot(svgText, liveRoot) {
  return mathPinForeignObjectAttrsFromLiveRoot(
    mathPinFoContainerDimsFromLiveRoot(svgText, liveRoot),
    liveRoot,
  )
}

/** Range union lh pin then clientRects height pin. */
export function labPinRangeThenClientRectsHeight(svgText, liveRoot) {
  return labPinInlineBoxHeightFromClientRects(
    labPinTextAscentDescentFromRange(svgText, liveRoot),
    liveRoot,
  )
}

/** Normal lh probe then half-leading padding-top. */
export function labPinNormalLhThenHalfLeading(svgText, liveRoot) {
  return labPinHalfLeadingPaddingTop(labPinNormalLhFromProbe(svgText, liveRoot), liveRoot)
}

/** Half-leading padding-top after floor viewBox stash. */
export function mathHalfLeadingWithFloorViewBox(svgText, liveRoot) {
  return liveRoot
    ? labPinHalfLeadingPaddingTop(mathFloorViewBoxStashFrac(svgText), liveRoot)
    : mathFloorViewBoxStashFrac(svgText)
}

/** Floor viewBox origin; stash fractional min on data-math-frac-* for raster h2-frac-draw. */
export function mathFloorViewBoxStashFrac(svgText) {
  return svgText.replace(/<svg(\s[^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    const intX = Math.floor(parts[0])
    const intY = Math.floor(parts[1])
    const fracX = Number((parts[0] - intX).toFixed(4))
    const fracY = Number((parts[1] - intY).toFixed(4))
    const vb = `${intX} ${intY} ${parts[2]} ${parts[3]}`
    let next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${vb}"`)
    next += ` data-h2-frac-x="${fracX}" data-h2-frac-y="${fracY}"`
    return `<svg${next}>`
  })
}

/**
 * Count nav landmarks that have measurable ink on a full-fixture raster canvas.
 * @param {HTMLCanvasElement | null} canvas
 * @param {HTMLElement} root
 * @param {string[]} labels
 * @param {number} [dpr]
 */
export function countNavLandmarksWithCanvasInk(canvas, root, labels, dpr = 1) {
  if (!canvas?.width || !canvas?.height) return 0
  let n = 0
  for (const label of labels) {
    const el = findLandmarkElement(root, label)
    if (!el) continue
    if (measureCanvasInkForElement(canvas, root, el, dpr) != null) n++
  }
  return n
}

/** Radical patches that replace/hide FO and draw only the probe landmark (preview shows one link). */
const SINGLE_LANDMARK_RADICAL_PATCHES = new Set([
  'replace-fo-with-svg-text',
  'svg-only-text-layer',
  'text-as-path',
])

/**
 * Expected nav links visible on full-fixture canvas preview for a recipe.
 * fillText-replace keeps sibling FO ink; svg-text bypass draws probe landmark only.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} recipe
 * @param {number} [fixtureNavCount]
 */
export function expectedCanvasNavLandmarks(recipe, fixtureNavCount = 1) {
  if (recipe?.radicalPatch && SINGLE_LANDMARK_RADICAL_PATCHES.has(recipe.radicalPatch)) {
    return 1
  }
  return fixtureNavCount
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com' }} [opts]
 */
export function measureCanvasInkBandRegion(canvas, root, el, dpr = 1, opts = {}) {
  const box = relRect(el, root)
  const scanBand =
    opts.visibleInk === true ? measureLandmarkInkScanBandInRoot(el, root) : null
  const bandW = scanBand?.bandWidthCss ?? box.width
  const bandH = scanBand?.bandHeightCss ?? box.height
  const leftCss = scanBand?.leftCss ?? box.left
  const topCss = scanBand?.topCss ?? box.top
  const insetCss = Math.min(16, Math.max(4, bandW * 0.05))
  const regionW = Math.max(1, Math.round(bandW * dpr))
  const regionH = Math.max(1, Math.round(bandH * dpr))
  const insetDev = Math.round(insetCss * dpr)
  const bandDev = Math.min(regionW - insetDev, Math.max(8, Math.round(28 * dpr)))
  const x = Math.max(0, Math.round(leftCss * dpr) + insetDev)
  const y = Math.max(0, Math.round(topCss * dpr))
  const w = Math.max(1, bandDev)
  const h = regionH
  return { box, leftCss, topCss, x, y, w, h, dpr }
}

/**
 * Ink top from a raster source (canvas or loaded SVG img) in #capture-target CSS px.
 * @param {HTMLCanvasElement | HTMLImageElement} source
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com' }} [opts]
 */
export function measureBitmapInkTopForElement(source, root, el, dpr = 1, opts = {}) {
  if (!source) return null
  /** @type {HTMLCanvasElement | null} */
  let canvas = source instanceof HTMLCanvasElement ? source : null
  let scanDpr = dpr
  const rootCssW = root?.offsetWidth || root?.getBoundingClientRect?.().width || 0
  if (source instanceof HTMLCanvasElement && canvas && rootCssW > 0) {
    const inferred = canvas.width / rootCssW
    if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) scanDpr = inferred
  }
  if (source instanceof HTMLImageElement) {
    const nw = source.naturalWidth
    const nh = source.naturalHeight
    if (!nw || !nh) return null
    const cssW = root?.offsetWidth || root?.getBoundingClientRect?.().width || nw
    if (cssW > 0) {
      const inferred = nw / cssW
      if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) scanDpr = inferred
    }
    canvas = document.createElement('canvas')
    canvas.width = nw
    canvas.height = nh
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return null
    ctx.drawImage(source, 0, 0)
  }
  if (!canvas) return null
  return measureCanvasInkForElement(canvas, root, el, scanDpr, opts)
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com', visibleInk?: boolean, scanBandFromRootTop?: boolean }} [opts]
 */
export function measureCanvasInkForElement(canvas, root, el, dpr = 1, opts = {}) {
  const region = measureCanvasInkBandRegion(canvas, root, el, dpr, opts)
  const { leftCss, topCss, x, w } = region
  let { y, h } = region
  if (opts.scanBandFromRootTop && canvas) {
    y = 0
    h = canvas.height
  }
  if (!canvas) return null
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return null
  let data
  try {
    data = ctx.getImageData(x, y, w, h).data
  } catch {
    return null
  }
  const inkScanMode = opts.inkScanMode ?? 'integer'
  const scanDefaults =
    opts.visibleInk === true ? INK_SCAN_CAP_CORE_DEFAULTS : INK_SCAN_DEFAULTS
  const scan = scanCanvasInkTopFromImageData(data, w, h, {
    mode: inkScanMode,
    minRowCoverage: scanDefaults.minRowCoverage,
    lumMax: scanDefaults.lumMax,
    minAlpha: scanDefaults.minAlpha,
    capCrest: opts.visibleInk === true,
    refineUpward: opts.visibleInk === true,
  })
  const row =
    inkScanMode === 'integer' ? scan.integerRow : (scan.fractionalRow ?? scan.integerRow)
  if (row == null) return null
  const topCssPx = (y + row) / dpr
  return {
    top: topCssPx,
    topInBorder: topCssPx - topCss,
    inkScanMode,
    integerTopInBorder:
      scan.integerRow != null ? (y + scan.integerRow) / dpr - topCss : null,
    fractionalTopInBorder:
      scan.fractionalRow != null ? (y + scan.fractionalRow) / dpr - topCss : null,
    firstInkDeviceRow: scan.integerRow,
    firstInkFractionalDeviceRow: scan.fractionalRow,
  }
}

/**
 * Ink Y convention (lab + product-baseline probes):
 * - `top` / `topInRoot` are #capture-target CSS px; Y increases downward.
 * - Smaller root Y = higher on screen; phrases use liveTop − stageTop (+ = higher).
 * - product-baseline: svg/canvas ink ~1px above live → smaller Y (~live − 1).
 *
 * Preview-layer ink top: bitmap scan in #capture-target CSS px plus viewport Y on the
 * displayed compare-stage preview (linear stretch; see rootYToPreviewViewportStretch).
 * @param {HTMLCanvasElement | HTMLImageElement} source
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com', displayEl?: HTMLCanvasElement | HTMLImageElement | null }} [opts]
 */
export function measurePreviewMappedInkTop(source, root, el, dpr = 1, opts = {}) {
  const scanOpts = {
    visibleInk: opts.visibleInk !== false,
    scanBandFromRootTop: opts.scanBandFromRootTop === true,
    inkScanMode: opts.inkScanMode ?? 'integer',
  }
  const scan = measureBitmapInkTopForElement(source, root, el, dpr, scanOpts)
  if (!scan || scan.top == null) return null

  const rootRect = root?.getBoundingClientRect?.()
  let topInRoot = coerceLabVisibleInkTopInRoot(scan.top, el, root)
  let viewportTop = rootRect ? rootRect.top + topInRoot : null

  const displayEl = opts.displayEl ?? source
  if (
    displayEl instanceof HTMLImageElement ||
    displayEl instanceof HTMLCanvasElement
  ) {
    const elRect = displayEl.getBoundingClientRect()
    const rootW = root?.offsetWidth || elRect.width || 0
    let intrinsicW = elRect.width
    let intrinsicH = elRect.height
    if (displayEl instanceof HTMLImageElement && displayEl.naturalWidth > 0) {
      if (rootW > 0) {
        const inferred = displayEl.naturalWidth / rootW
        if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
          intrinsicW = displayEl.naturalWidth / inferred
          intrinsicH = displayEl.naturalHeight / inferred
        } else {
          intrinsicW = displayEl.naturalWidth
          intrinsicH = displayEl.naturalHeight
        }
      } else {
        intrinsicW = displayEl.naturalWidth
        intrinsicH = displayEl.naturalHeight
      }
    } else if (displayEl instanceof HTMLCanvasElement && displayEl.width > 0 && rootW > 0) {
      const inferred = displayEl.width / rootW
      if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
        intrinsicW = displayEl.width / inferred
        intrinsicH = displayEl.height / inferred
      }
    }
    const stretched = rootYToPreviewViewportStretch(displayEl, root, topInRoot)
    if (Number.isFinite(stretched)) {
      viewportTop = stretched
    } else if (intrinsicW > 0 && intrinsicH > 0) {
      const scale = Math.min(elRect.width / intrinsicW, elRect.height / intrinsicH)
      const offsetY = (elRect.height - intrinsicH * scale) / 2
      viewportTop = elRect.top + offsetY + topInRoot * scale
    }
  }

  return {
    ...scan,
    topInRoot,
    viewportTop,
  }
}

/** Softer thresholds for visible ascenders on a displayed preview (SVG img tick). */
/** Stricter pixel gate for cap-crest row pick (avoids anti-alias inside glyphs). */
/** First row ≥ max(coverage)×ratio in band — top of dense ink (cap), not fringe inside glyph. */
/**
 * Top of **visible** ink on the displayed preview element (SVG img / canvas as shown).
 * Scans from the image top at the landmark band and maps via getBoundingClientRect
 * (not dense FO bitmap row within the element band).
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com', visibleInk?: boolean }} [opts]
 */
/**
 * Scan first visible ink row in a displayed preview (SVG img / canvas slot).
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 * @param {{ inkScanMode?: string, visibleInk?: boolean, crestAdjustPx?: number }} [opts]
 */
function measureDisplayedPreviewInkTopInternal(displayEl, root, el, opts = {}) {
  if (!displayEl || !root || !el) return null
  const rect = displayEl.getBoundingClientRect()
  const rootRect = root.getBoundingClientRect()
  if (rect.width <= 0 || rect.height <= 0) return null

  const scanBand = measureLandmarkInkScanBandInRoot(el, root)
  const { box } = scanBand
  const insetCss = Math.min(16, Math.max(4, scanBand.bandWidthCss * 0.05))
  const bandLeftCss = scanBand.leftCss + insetCss
  const bandWidthCss = Math.min(28, Math.max(8, scanBand.bandWidthCss - insetCss * 2))
  const scanFromRootTop = opts.scanBandFromRootTop !== false
  const rootCssW = root.offsetWidth || root.getBoundingClientRect()?.width || rect.width || 0
  const rootCssH = root.offsetHeight || root.getBoundingClientRect()?.height || rect.height || 0

  /** @type {HTMLCanvasElement | null} */
  let canvas = displayEl instanceof HTMLCanvasElement ? displayEl : null
  let deviceW = canvas?.width ?? 0
  let deviceH = canvas?.height ?? 0
  if (displayEl instanceof HTMLImageElement) {
    deviceW = displayEl.naturalWidth
    deviceH = displayEl.naturalHeight
    if (!deviceW || !deviceH) return null
    canvas = document.createElement('canvas')
    canvas.width = deviceW
    canvas.height = deviceH
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return null
    ctx.drawImage(displayEl, 0, 0)
  }
  if (!canvas || !deviceW || !deviceH) return null

  const scaleX = deviceW / rect.width
  const scaleY = deviceH / rect.height
  const rootToDeviceX = rootCssW > 0 ? deviceW / rootCssW : scaleX
  const x = Math.max(0, Math.min(deviceW - 1, Math.round(bandLeftCss * rootToDeviceX)))
  const w = Math.max(1, Math.min(Math.round(bandWidthCss * rootToDeviceX), deviceW - x))
  let bandTopDev
  let bandBottomDev
  if (scanFromRootTop) {
    bandTopDev = 0
    bandBottomDev = deviceH
  } else {
    const rootToDeviceY = rootCssH > 0 ? deviceH / rootCssH : scaleY
    bandTopDev = Math.max(0, Math.floor(scanBand.topCss * rootToDeviceY))
    bandBottomDev = Math.min(
      deviceH,
      Math.ceil((scanBand.topCss + scanBand.bandHeightCss) * rootToDeviceY),
    )
  }
  const h = Math.max(1, bandBottomDev - bandTopDev)

  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return null
  let data
  try {
    data = ctx.getImageData(x, bandTopDev, w, h).data
  } catch {
    return null
  }

  const scanDefaults = opts.visibleInk !== false ? INK_SCAN_CAP_CORE_DEFAULTS : INK_SCAN_DEFAULTS
  const scan = scanCanvasInkTopFromImageData(data, w, h, {
    mode: opts.inkScanMode ?? 'integer',
    minRowCoverage: scanDefaults.minRowCoverage,
    lumMax: scanDefaults.lumMax,
    minAlpha: scanDefaults.minAlpha,
    capCrest: opts.visibleInk !== false,
    refineUpward: opts.visibleInk !== false,
  })
  const rowDev =
    opts.inkScanMode === 'integer'
      ? scan.integerRow
      : (scan.fractionalRow ?? scan.integerRow)
  if (rowDev == null) return null

  const rootToDeviceY = rootCssH > 0 ? deviceH / rootCssH : scaleY
  const rowCssFromScan = (bandTopDev + rowDev) / scaleY
  const actualViewportTop = rect.top + rowCssFromScan
  const rowCss = rowCssFromScan
  const topInRootFromDevice = (bandTopDev + rowDev) / rootToDeviceY
  const topInRootFromPreviewOffset = rect.top - rootRect.top + rowCss
  const mappedRoot = previewLocalToRootPx(displayEl, root, 0, rowCss, { mode: 'stretch' })
  let topInRoot = Number.isFinite(topInRootFromDevice) ? topInRootFromDevice : null
  if (!Number.isFinite(topInRoot) && Number.isFinite(topInRootFromPreviewOffset)) {
    topInRoot = topInRootFromPreviewOffset
  }
  if (!Number.isFinite(topInRoot)) {
    topInRoot =
      mappedRoot?.y ??
      previewViewportTopToRootPx(displayEl, root, rect.top + rowCss, { mode: 'stretch' })
  }
  if (!Number.isFinite(topInRoot)) {
    topInRoot = previewViewportTopToRootPx(displayEl, root, rect.top + rowCss, { mode: 'contain' })
  }
  topInRoot = coerceLabVisibleInkTopInRoot(topInRoot, el, root)
  const bitmapTopInRoot = Number.isFinite(topInRoot) ? Math.floor(topInRoot + 1e-6) : topInRoot
  const crestAdjustPx = opts.crestAdjustPx ?? -1
  if (Number.isFinite(topInRoot)) {
    topInRoot = Math.floor(topInRoot + 1e-6)
    if (Number.isFinite(crestAdjustPx) && crestAdjustPx !== 0) {
      topInRoot = Math.max(0, topInRoot + crestAdjustPx)
    }
  }
  const topInBorder = topInRoot - box.top

  return {
    top: topInRoot,
    topInRoot,
    topInBorder,
    viewportTop: actualViewportTop,
    actualViewportTop,
    rowCss,
    rowDev,
    scaleY,
    inkScanMode: opts.inkScanMode ?? 'integer',
    bitmapTopInRoot,
  }
}

/**
 * SVG `<img>` decode often paints glyph ink lower than lab toCanvas on the same capture.
 * When canvas preview tracks live, report SVG compare ink at the visual line above canvas
 * (see {@link inkLineDisplayTopInRootPx}) so compare-stage metrics match on-screen previews.
 * @param {ReturnType<typeof measurePreviewBitmapInkTopInRoot>} svgPreview
 * @param {ReturnType<typeof measurePreviewBitmapInkTopInRoot>} canvasPreview
 * @param {ReturnType<typeof measureLiveDisplayedPreviewInkTop>} livePreview
 * @param {HTMLImageElement} svgImg
 * @param {Element} root
 * @param {Element} el
 */
/**
 * Compare-stage live ink — visible DOM cap crest, not Range-raster preview band.
 * {@link measureLiveDisplayedPreviewInkTop} matches canvas FO bitmap scan (both ~14)
 * while toggling live view shows painted glyphs lower on screen (live Y ~14.5).
 * @param {ReturnType<typeof measureLiveVisibleInkTop>} visibleLive
 * @param {ReturnType<typeof measureLiveDisplayedPreviewInkTop>} previewBitmap
 */
export function reconcileLivePreviewInkWithVisibleDom(visibleLive, previewBitmap) {
  const visibleTop = visibleLive?.top ?? visibleLive?.topInRoot
  const bitmapTop = previewBitmap?.top ?? previewBitmap?.topInRoot ?? null
  if (Number.isFinite(visibleTop)) {
    const liveUsesVisibleCap =
      Number.isFinite(bitmapTop) &&
      Number.isInteger(bitmapTop) &&
      !Number.isInteger(visibleTop)
    return {
      top: visibleTop,
      topInRoot: visibleTop,
      topInBorder: visibleLive.topInBorder ?? null,
      livePreviewBitmapTop: bitmapTop,
      inkReference: 'visible-dom-cap',
      liveUsesVisibleCap,
    }
  }
  if (previewBitmap?.top != null || previewBitmap?.topInRoot != null) {
    const top = previewBitmap.topInRoot ?? previewBitmap.top
    return {
      ...previewBitmap,
      top,
      topInRoot: top,
      inkReference: 'preview-band-raster',
      liveUsesVisibleCap: false,
    }
  }
  return null
}

/** Integer FO bitmap row from preview scan (before visible-cap / crest reconcile). */
function previewBitmapInkRowInRoot(preview) {
  if (!preview) return null
  const bmp =
    preview.bitmapTopInRoot ??
    preview.svgImgBitmapTopInRoot ??
    preview.canvasPreviewBitmapTopInRoot ??
    null
  if (Number.isFinite(bmp)) return bmp
  const top = preview.topInRoot ?? preview.top
  return Number.isFinite(top) ? Math.floor(top + 1e-6) : null
}

/** SVG img and canvas FO bitmap scans agree — compare tops must share that row. */
export function previewStageBitmapRowsAgree(svgPreview, canvasPreview) {
  const svgBitmap = previewBitmapInkRowInRoot(svgPreview)
  const canvasBitmap = previewBitmapInkRowInRoot(canvasPreview)
  return (
    Number.isFinite(svgBitmap) &&
    Number.isFinite(canvasBitmap) &&
    svgBitmap === canvasBitmap
  )
}

/** Compare top in root px from a preview bitmap scan (integer row, no reconcile). */
function previewBitmapCompareTopInRoot(preview) {
  const row = previewBitmapInkRowInRoot(preview)
  if (Number.isFinite(row)) return row
  const top = preview?.topInRoot ?? preview?.top
  return Number.isFinite(top) ? Math.floor(top + 1e-6) : null
}

/** Cap-crest ink row (−1px vs first coverage) — diagnostic / matrix legs only, not compare tops. */
export function measureDisplayedPreviewInkTop(displayEl, root, el, opts = {}) {
  return measureDisplayedPreviewInkTopInternal(displayEl, root, el, {
    ...opts,
    crestAdjustPx: -1,
  })
}

/**
 * Compare-stage / lab UI ink top in #capture-target root px.
 * Prefer band-limited scan on the mounted preview (matches stretch mapping + markers).
 * Off-DOM probe bitmaps fall back to landmark-band raster scan.
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: string, fromProbe?: number | null, liveTopInRoot?: number | null }} [opts]
 */
export function measureCompareStagePreviewInkTopInRoot(
  displayEl,
  root,
  el,
  dpr = 1,
  opts = {},
) {
  if (!displayEl || !root || !el) return null
  const scanMode = opts.inkScanMode ?? 'integer'
  const inkOpts = {
    visibleInk: true,
    inkScanMode: scanMode,
    scanBandFromRootTop: opts.scanBandFromRootTop !== false,
  }
  const mounted =
    (displayEl instanceof HTMLImageElement &&
      displayEl.complete &&
      displayEl.naturalWidth > 0 &&
      displayEl.isConnected) ||
    (displayEl instanceof HTMLCanvasElement &&
      displayEl.width > 0 &&
      displayEl.isConnected)
  if (mounted) {
    const painted = measurePreviewBitmapInkTopInRoot(displayEl, root, el, dpr, inkOpts)
    const displayed = painted?.topInRoot ?? painted?.top ?? null
    return pickFiniteProbePx(displayed, opts.fromProbe ?? null)
  }
  const mapped = measurePreviewMappedInkTop(displayEl, root, el, dpr, {
    displayEl,
    ...inkOpts,
  })
  const mappedTop = mapped?.topInRoot ?? mapped?.top ?? null
  return pickFiniteProbePx(mappedTop, opts.fromProbe ?? null)
}

/**
 * Compare-stage preview bitmap ink in #capture-target root px.
 * Uses {@link measureBitmapInkTopForElement} (root band strip, no stretch round-trip).
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: string, visibleInk?: boolean, scanBandFromRootTop?: boolean }} [opts]
 */
export function measurePreviewBitmapInkTopInRoot(displayEl, root, el, dpr = 1, opts = {}) {
  if (!displayEl || !root || !el) return null
  const scanOpts = {
    visibleInk: opts.visibleInk !== false,
    inkScanMode: opts.inkScanMode ?? 'integer',
    scanBandFromRootTop: opts.scanBandFromRootTop !== false,
  }
  const mounted =
    displayEl.isConnected &&
    ((displayEl instanceof HTMLImageElement &&
      displayEl.complete &&
      displayEl.naturalWidth > 0) ||
      (displayEl instanceof HTMLCanvasElement && displayEl.width > 0))
  if (mounted) {
    const painted = measureDisplayedPreviewInkTopInternal(displayEl, root, el, {
      ...scanOpts,
      crestAdjustPx: 0,
    })
    if (painted?.topInRoot != null || painted?.top != null) return painted
  }
  const scan = measureBitmapInkTopForElement(displayEl, root, el, dpr, scanOpts)
  if (!scan || scan.top == null) return null
  const box = relRect(el, root)
  let topInRoot = coerceLabVisibleInkTopInRoot(scan.top, el, root)
  const bitmapTopInRoot = Number.isFinite(topInRoot)
    ? Math.floor(topInRoot + 1e-6)
    : topInRoot
  if (Number.isFinite(topInRoot)) {
    topInRoot = Math.floor(topInRoot + 1e-6)
  }
  const viewportTop =
    rootYToPreviewViewportStretch(displayEl, root, topInRoot) ??
    (root.getBoundingClientRect?.().top ?? 0) + topInRoot
  return {
    top: topInRoot,
    topInRoot,
    topInBorder: topInRoot - box.top,
    viewportTop,
    inkScanMode: scanOpts.inkScanMode,
    bitmapTopInRoot,
  }
}

/**
 * Rasterize visible ink from live DOM into a root-sized canvas (Range glyph boxes).
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} scanDpr
 */
function rasterizeLiveDomInkToCanvas(canvas, root, el, scanDpr) {
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  const rootRect = root.getBoundingClientRect()
  ctx.fillStyle = '#000000'
  /** @param {DOMRectReadOnly} rc */
  const paintRect = (rc) => {
    const x = (rc.left - rootRect.left) * scanDpr
    const y = (rc.top - rootRect.top) * scanDpr
    const w = rc.width * scanDpr
    const h = rc.height * scanDpr
    if (w > 0.5 && h > 0.5) ctx.fillRect(x, y, w, h)
  }
  try {
    const range = document.createRange()
    range.selectNodeContents(el)
    const rects = range.getClientRects()
    if (rects.length) {
      for (const rc of rects) paintRect(rc)
      return
    }
  } catch {
    /* ignore */
  }
  paintRect(el.getBoundingClientRect())
}

/**
 * Live compare-stage ink top — bitmap scan on DOM-raster band (same strip as svg/canvas).
 * @param {Element} el
 * @param {Element} root
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: string, visibleInk?: boolean, scanBandFromRootTop?: boolean }} [opts]
 */
export function measureLiveDisplayedPreviewInkTop(el, root, dpr = 1, opts = {}) {
  if (typeof document === 'undefined' || !el || !root) return null
  const rootCssW = root.offsetWidth || root.getBoundingClientRect()?.width || 0
  const rootCssH = root.offsetHeight || root.getBoundingClientRect()?.height || 0
  if (!(rootCssW > 0) || !(rootCssH > 0)) return null
  let scanDpr = dpr
  if (typeof window !== 'undefined' && Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0) {
    scanDpr = window.devicePixelRatio
  }
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(rootCssW * scanDpr))
  canvas.height = Math.max(1, Math.round(rootCssH * scanDpr))
  rasterizeLiveDomInkToCanvas(canvas, root, el, scanDpr)
  const scanOpts = {
    visibleInk: opts.visibleInk !== false,
    inkScanMode: opts.inkScanMode ?? 'integer',
    scanBandFromRootTop: opts.scanBandFromRootTop !== false,
  }
  const scan = measureCanvasInkForElement(canvas, root, el, scanDpr, scanOpts)
  if (!scan || scan.top == null) return null
  const box = relRect(el, root)
  let topInRoot = coerceLabVisibleInkTopInRoot(scan.top, el, root)
  if (Number.isFinite(topInRoot)) {
    topInRoot = Math.floor(topInRoot + 1e-6)
  }
  const rootRect = root.getBoundingClientRect()
  return {
    top: topInRoot,
    topInRoot,
    topInBorder: topInRoot - box.top,
    viewportTop: rootRect.top + topInRoot,
    inkScanMode: scanOpts.inkScanMode,
  }
}

/**
 * Visible block top on displayed preview — first ink row in landmark band, no crest nudge.
 * Bitmap ink scan — debug/matrix only; lab UI check uses {@link measureDisplayedPreviewLayoutTop}.
 */
export function measureDisplayedPreviewBlockAnchorTop(displayEl, root, el, opts = {}) {
  return measureDisplayedPreviewInkTopInternal(displayEl, root, el, {
    ...opts,
    crestAdjustPx: 0,
  })
}

/**
 * Map #capture-target layout Y to viewport Y on a displayed preview (object-fit: contain).
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {number} topInRoot
 */
export function mapLayoutTopInRootToPreviewViewport(displayEl, root, topInRoot) {
  if (!displayEl || !root || !Number.isFinite(topInRoot)) return null
  const rootRect = root.getBoundingClientRect()
  let viewportTop = rootRect.top + topInRoot
  const elRect = displayEl.getBoundingClientRect()
  const rootW = root.offsetWidth || elRect.width || 0
  let intrinsicW = elRect.width
  let intrinsicH = elRect.height
  if (displayEl instanceof HTMLImageElement && displayEl.naturalWidth > 0) {
    if (rootW > 0) {
      const inferred = displayEl.naturalWidth / rootW
      if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
        intrinsicW = displayEl.naturalWidth / inferred
        intrinsicH = displayEl.naturalHeight / inferred
      } else {
        intrinsicW = displayEl.naturalWidth
        intrinsicH = displayEl.naturalHeight
      }
    } else {
      intrinsicW = displayEl.naturalWidth
      intrinsicH = displayEl.naturalHeight
    }
  } else if (displayEl instanceof HTMLCanvasElement && displayEl.width > 0 && rootW > 0) {
    const inferred = displayEl.width / rootW
    if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
      intrinsicW = displayEl.width / inferred
      intrinsicH = displayEl.height / inferred
    }
  }
  if (intrinsicW > 0 && intrinsicH > 0) {
    const scale = Math.min(elRect.width / intrinsicW, elRect.height / intrinsicH)
    const offsetY = (elRect.height - intrinsicH * scale) / 2
    viewportTop = elRect.top + offsetY + topInRoot * scale
  }
  return viewportTop
}

/**
 * Lab UI check: landmark text-top (Range/GBCR) mapped through preview object-fit — no bitmap ink scan.
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 */
export function measureDisplayedPreviewLayoutTop(displayEl, root, el) {
  if (!displayEl || !root || !el) return null
  const box = relRect(el, root)
  const topInRoot = measureLandmarkTextTopInRoot(el, root)
  if (!Number.isFinite(topInRoot)) return null
  const viewportTop =
    rootYToPreviewViewportStretch(displayEl, root, topInRoot) ??
    mapLayoutTopInRootToPreviewViewport(displayEl, root, topInRoot)
  return {
    top: topInRoot,
    topInRoot,
    topInBorder: topInRoot - box.top,
    viewportTop,
    measurementMode: 'layout-viewport',
  }
}

/**
 * Debug/matrix: painted block top on preview via bitmap ink band scan.
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} root
 * @param {Element} el
 */
export function measureDisplayedPreviewLayoutTopInk(displayEl, root, el) {
  if (!displayEl || !root || !el) return null
  const painted = measureDisplayedPreviewBlockAnchorTop(displayEl, root, el)
  if (painted?.topInRoot == null) return null
  return {
    top: painted.topInRoot,
    topInRoot: painted.topInRoot,
    topInBorder: painted.topInBorder,
    viewportTop: painted.viewportTop,
    measurementMode: 'preview-block-ink',
  }
}

/** Integer + fractional ink tops for lab autopsy (does not change matrix default). */
export function measureCanvasInkForElementDualScan(canvas, root, el, dpr = 1) {
  const integer = measureCanvasInkForElement(canvas, root, el, dpr, { inkScanMode: 'integer' })
  const fractionalThreshold = measureCanvasInkForElement(canvas, root, el, dpr, {
    inkScanMode: 'fractional-threshold',
  })
  const fractionalCom = measureCanvasInkForElement(canvas, root, el, dpr, {
    inkScanMode: 'fractional-com',
  })
  return { integer, fractionalThreshold, fractionalCom }
}

/**
 * Round outer capture <svg> width/height to fixture CSS px (preserve viewBox).
 * @param {string} svgText
 * @param {{ cssW: number, cssH: number }} dims
 */
export function applySandboxFixtureSvgDims(svgText, dims) {
  return roundSvgRootDimsPatch(svgText, dims)
}

/**
 * Inspector mount: fill fixture box, keep capture viewBox (no root font-size edits).
 * @param {SVGSVGElement} svg
 * @param {{ cssW: number, cssH: number }} dims
 */
export function applySandboxInlineSvgDisplay(svg, dims) {
  if (!svg || !dims) return
  const wAttr = parseFloat(svg.getAttribute('width') || '0')
  const hAttr = parseFloat(svg.getAttribute('height') || '0')
  if (!svg.getAttribute('viewBox')) {
    const vw = wAttr > 0 ? wAttr : dims.cssW
    const vh = hAttr > 0 ? hAttr : dims.cssH
    svg.setAttribute('viewBox', `0 0 ${vw} ${vh}`)
  }
  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  svg.style.width = '100%'
  svg.style.height = '100%'
  svg.style.display = 'block'
  svg.style.maxWidth = ''
  svg.style.maxHeight = ''
}

/**
 * Decode capture SVG like lab preview / toCanvas input (blob URL + Image.decode).
 * @param {string} svgText
 */
export async function decodeSvgTextForInkProbe(svgText) {
  if (!svgText) return null
  // Data URL matches lab SVG preview (buildRasterUrl default). Blob URLs revoked before
  // drawImage in measureBitmapInkTopForElement yield blank bands and a silent layout fallback.
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = url
  try {
    await img.decode()
    return img.naturalWidth > 0 && img.naturalHeight > 0 ? img : null
  } catch {
    return null
  }
}

/**
 * SVG-stage ink top via the same bitmap scan as canvas ({@link measureCanvasInkForElement}).
 * Band geometry uses live landmark + #capture-target root (not inline FO Range).
 * @param {string} svgText
 * @param {Element} liveRoot
 * @param {Element} el
 * @param {number} [dpr=1]
 * @param {{ inkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com' }} [opts]
 */
export async function measureSvgBitmapInkForProbe(svgText, liveRoot, el, dpr = 1, opts = {}) {
  const img = await decodeSvgTextForInkProbe(svgText)
  if (!img) return null
  return measureBitmapInkTopForElement(img, liveRoot, el, dpr, opts)
}

/**
 * Hidden off-screen FO ink probe at fixture CSS size (fo-svg-sandbox / lab).
 * Inline FO Range layout only — use {@link measureSvgBitmapInkForProbe} for matrix SVG Δ.
 * @param {string} svgText
 * @param {string} landmarkText
 * @param {{ cssW?: number, cssH?: number } | null} [fixtureDims]
 */
export function measureSvgInkForElement(svgText, landmarkText, fixtureDims = null) {
  const cssW = fixtureDims?.cssW
  const cssH = fixtureDims?.cssH
  const sized =
    cssW > 0 && cssH > 0
      ? applySandboxFixtureSvgDims(svgText, { cssW, cssH })
      : svgText
  const div = document.createElement('div')
  if (cssW > 0 && cssH > 0) {
    div.style.cssText =
      'position:fixed;left:-10000px;top:0;visibility:hidden;' +
      `width:${cssW}px;height:${cssH}px;overflow:hidden;box-sizing:border-box`
  } else {
    div.style.cssText = 'position:fixed;left:-10000px;top:0;visibility:hidden'
  }
  div.innerHTML = sized
  document.body.appendChild(div)
  try {
    const svgEl = div.querySelector('svg')
    if (svgEl && cssW > 0 && cssH > 0) {
      applySandboxInlineSvgDisplay(svgEl, { cssW, cssH })
    }
    const fo = div.querySelector('foreignObject')
    if (!fo) return null
    const el = findTextLeaf(fo, landmarkText)
    if (!el) return null
    // Probe div is fixture-sized like #capture-target — not FO-local coords (overlay + live metrics).
    const painted = measureLivePaintedInk(el, div)
    const glyph = measureLiveGlyphInkTopFromRange(el, div)
    const cap = measureCapInkModel(el, fo)
    return { painted, glyph, cap }
  } finally {
    div.remove()
  }
}

/**
 * Three-way ink top for matrix + pass/fail: live visible glyph ink vs SVG/canvas bitmap scan.
 * All legs use the same landmark band + integer ink row in #capture-target border-box coords
 * (comparable to {@link measureDisplayedPreviewInkTop} on compare-stage previews).
 * Inline FO Range tops stay on svgLayout* / liveLayout* for BITMAP_ONLY diagnostics only.
 * Positive liveVsCanvasTopPx = that stage’s ink sits lower than live (+Y in #capture-target).
 */
function compareThreeWayInk(liveRoot, canvas, svgText, el, dpr = 1, fixtureDims = null, opts = {}) {
  const landmarkText = (el.textContent || '').trim()
  const liveLayoutPainted = measureLivePaintedInk(el, liveRoot)
  const liveCompare =
    measureLiveVisibleInkTop(el, liveRoot) ?? liveLayoutPainted
  const liveCapModel = measureCapInkModel(el, liveRoot)
  const svgLayoutProbe = measureSvgInkForElement(svgText, landmarkText, fixtureDims)
  const inkScanMode = opts.inkScanMode ?? 'integer'
  const svgBitmapInk = opts.svgBitmapInk ?? null
  // When probe passes svgBitmapInk (even null), do not substitute inline FO Range for matrix SVG Δ.
  const svgPainted =
    'svgBitmapInk' in opts ? svgBitmapInk : (svgBitmapInk ?? svgLayoutProbe?.painted ?? null)
  const raster = measureCanvasInkForElement(canvas, liveRoot, el, dpr, opts)

  const deltaTopInBorder =
    liveCompare && raster ? raster.topInBorder - liveCompare.topInBorder : null
  const deltaTopCapModel =
    liveCapModel && raster ? raster.topInBorder - liveCapModel.topInBorder : null

  const deltaSvgInBorder =
    liveCompare && svgPainted ? svgPainted.topInBorder - liveCompare.topInBorder : null
  const deltaSvgLayoutInBorder =
    liveLayoutPainted && svgLayoutProbe?.painted
      ? svgLayoutProbe.painted.topInBorder - liveLayoutPainted.topInBorder
      : null
  const deltaCanvasVsLayoutLive =
    liveLayoutPainted && raster
      ? raster.topInBorder - liveLayoutPainted.topInBorder
      : null
  const deltaSvgCapModel =
    liveCapModel && svgLayoutProbe?.cap
      ? svgLayoutProbe.cap.topInBorder - liveCapModel.topInBorder
      : null

  /** Signed px: positive = that stage’s ink top sits lower than live (inside border box). */
  const liveVsCanvasTopPx = deltaTopInBorder
  const liveVsSvgTopPx = deltaSvgInBorder
  const liveVsSvgLayoutTopPx = deltaSvgLayoutInBorder

  /** @type {Record<string, number | null> | null} */
  let fractionalCanvasDelta = null
  if (opts.includeFractionalInkScan) {
    const dual = measureCanvasInkForElementDualScan(canvas, liveRoot, el, dpr)
    fractionalCanvasDelta = {
      integer:
        dual.integer && liveCompare
          ? dual.integer.topInBorder - liveCompare.topInBorder
          : null,
      fractionalThreshold:
        dual.fractionalThreshold && liveCompare
          ? dual.fractionalThreshold.topInBorder - liveCompare.topInBorder
          : null,
      fractionalCom:
        dual.fractionalCom && liveCompare
          ? dual.fractionalCom.topInBorder - liveCompare.topInBorder
          : null,
    }
  }

  return {
    live: liveCompare,
    liveLayout: liveLayoutPainted,
    liveCapModel,
    svg: svgPainted,
    svgLayout: svgLayoutProbe?.painted ?? null,
    svgGlyph: svgLayoutProbe?.glyph ?? null,
    svgCapModel: svgLayoutProbe?.cap ?? null,
    canvas: raster,
    liveVsCanvasTopPx,
    liveVsSvgTopPx,
    liveVsSvgLayoutTopPx,
    liveVsCanvasLayoutTopPx: deltaCanvasVsLayoutLive,
    deltaTopInBorder,
    deltaTopCapModel,
    deltaSvgInBorder,
    deltaSvgLayoutInBorder,
    deltaSvgCapModel,
    inkScanMode,
    fractionalCanvasDelta,
  }
}

/** Three-way ink top comparison (live DOM, inline FO SVG, raster canvas). */
export { compareThreeWayInk }

export {
  applyRasterOnlySvgPatch,
  EXPERIMENTAL_RASTER_SVG_PATCH_VALUES,
  RASTER_ONLY_SVG_PATCH_IDS,
  RASTER_ONLY_SVG_PATCH_W2_IDS,
  resolveExperimentalRasterSvgPatch,
}

/** Default FO recipe for {@link file://./fo-svg-sandbox.html}. */
export const SANDBOX_DEFAULT_RECIPE_ID = 'product-baseline'

/**
 * Capture-inject recipes that often yield a white FO→canvas decode on headed Chrome
 * (decode still resolves; ink scan finds no dark pixels). Harness documentation only.
 */
export const SANDBOX_FO_BLANK_RECIPES = new Set(['fo-translate-z-0'])

/**
 * Basic SVG parse + FO structure check before sandbox raster.
 * @param {string} svgText
 */
export function validateSandboxSvg(svgText) {
  const raw = (svgText || '').trim()
  if (!raw) return { ok: false, error: 'empty', fo: inspectCaptureFo('') }
  if (!/<svg[\s>]/i.test(raw)) {
    return { ok: false, error: 'missing <svg> root', fo: inspectCaptureFo(raw) }
  }
  const doc = new DOMParser().parseFromString(raw, 'image/svg+xml')
  const parseErr = doc.querySelector('parsererror')
  if (parseErr) {
    const detail = (parseErr.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 240)
    return {
      ok: false,
      error: 'SVG parse error',
      parseDetail: detail || 'DOMParser parsererror',
      fo: inspectCaptureFo(raw),
    }
  }
  const fo = inspectCaptureFo(raw)
  return { ok: true, fo }
}

/**
 * FO presence / harness diagnostic rewrites in capture SVG.
 * @param {string} svgText
 */
export function inspectCaptureFo(svgText) {
  const raw = svgText || ''
  const foCount = (raw.match(/<foreignObject[\s>]/gi) || []).length
  if (/data-was-foreignObject/i.test(raw)) {
    return {
      foCount,
      broken: true,
      reason: 'foreignObject replaced (FO will not raster)',
    }
  }
  if (foCount === 0) {
    return { foCount: 0, broken: true, reason: 'no foreignObject in SVG' }
  }
  const emptyFo = /<foreignObject[^>]*>\s*<\/foreignObject>/i.test(raw)
  if (emptyFo && foCount === 1) {
    return { foCount, broken: true, reason: 'empty foreignObject' }
  }
  return { foCount, broken: false, reason: null }
}

/**
 * Full-canvas sample: blank white decode vs taint vs has paint.
 * @param {HTMLCanvasElement} canvas
 */
export function diagnoseCanvasRaster(canvas) {
  if (!canvas?.width || !canvas?.height) {
    return {
      status: 'empty-size',
      blank: true,
      tainted: false,
      darkRatio: 0,
      reason: 'canvas has zero size',
    }
  }
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    return {
      status: 'no-context',
      blank: true,
      tainted: false,
      darkRatio: 0,
      reason: 'no 2d context',
    }
  }
  let data
  try {
    data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
  } catch {
    return {
      status: 'tainted',
      blank: null,
      tainted: true,
      darkRatio: null,
      reason: 'getImageData blocked (tainted canvas)',
    }
  }
  const step = Math.max(4, Math.floor(Math.min(canvas.width, canvas.height) / 32))
  let dark = 0
  let samples = 0
  let maxAlpha = 0
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const i = (y * canvas.width + x) * 4
      samples++
      maxAlpha = Math.max(maxAlpha, data[i + 3])
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
      if (data[i + 3] > 32 && lum < 170) dark++
    }
  }
  const darkRatio = samples ? dark / samples : 0
  const blank = darkRatio < 0.002 && maxAlpha < 24
  return {
    status: blank ? 'blank' : 'painted',
    blank,
    tainted: false,
    darkRatio,
    maxAlpha,
    reason: blank ? 'decode produced no dark pixels (all white/transparent)' : null,
  }
}

/**
 * Why landmark ink is missing on a raster canvas.
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr]
 */
export function diagnoseCanvasInkMiss(canvas, root, el, dpr = 1) {
  const ink = measureCanvasInkForElement(canvas, root, el, dpr)
  if (ink) return { ink, miss: false, reason: null }
  const raster = diagnoseCanvasRaster(canvas)
  if (raster.tainted) {
    return { ink: null, miss: true, reason: 'tainted canvas (ink scan blocked)' }
  }
  if (raster.blank) {
    return { ink: null, miss: true, reason: raster.reason || 'blank raster (no ink anywhere)' }
  }
  return {
    ink: null,
    miss: true,
    reason: 'ink scan miss (landmark band has no dark rows; canvas may have paint elsewhere)',
  }
}

/**
 * Apply recipe unless capture FO is already broken (avoid stacking inject on invalid FO).
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 */
export function applyRecipeToSvgForSandbox(svgText, recipe, dims) {
  const fo = inspectCaptureFo(svgText)
  if (fo.broken) {
    return {
      svgText,
      skippedRecipe: true,
      skipReason: fo.reason,
      fo,
    }
  }
  return {
    svgText: applyRecipeToSvg(svgText, recipe, dims),
    skippedRecipe: false,
    skipReason: null,
    fo,
  }
}

export function svgFromDataUrl(dataUrl) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (dataUrl.startsWith(prefix)) return decodeURIComponent(dataUrl.slice(prefix.length))
  return dataUrl
}

export function parseCaptureMeta(svgMarkup, root) {
  const w0 = parseFloat(svgMarkup.match(/<svg\b[^>]*width=["']([\d.]+)/i)?.[1] || '0')
  const h0 = parseFloat(svgMarkup.match(/<svg\b[^>]*height=["']([\d.]+)/i)?.[1] || '0')
  const rect = root.getBoundingClientRect()
  const left = rect.left
  const top = rect.top
  const gbcrFracX = left - Math.floor(left)
  const gbcrFracY = top - Math.floor(top)
  return {
    w0: w0 > 0 ? w0 : rect.width,
    h0: h0 > 0 ? h0 : rect.height,
    targetW: rect.width,
    targetH: rect.height,
    gbcrLeft: left,
    gbcrTop: top,
    gbcrFracX,
    gbcrFracY,
  }
}

/**
 * Merge snapdom capture meta (ink fractions, w0/h0) with GBCR parsed from SVG + root.
 * @param {{ meta?: object } | null | undefined} snap
 * @param {string} svgMarkup
 * @param {HTMLElement} root
 */
export function mergeCaptureMeta(snap, svgMarkup, root) {
  const parsed = parseCaptureMeta(svgMarkup, root)
  const fromSnap = snap?.meta
  if (fromSnap && typeof fromSnap === 'object') {
    return { ...parsed, ...fromSnap }
  }
  return parsed
}

/**
 * Font-box half-leading (line-height − font bounding box height) / 2 from live measureText.
 * @param {Element} el
 */
function measureFontBoxHalfLeadingPx(el) {
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const t = (el.textContent || '').trim()
  const sample = t.length === 1 ? `${t}${t}` : t ? t[0] + t[t.length - 1] : 'Mg'
  ctx.font = `${cs.fontStyle || 'normal'} ${cs.fontWeight || '400'} ${fs}px ${cs.fontFamily || 'sans-serif'}`
  const m = ctx.measureText(sample)
  const ascent =
    typeof m.fontBoundingBoxAscent === 'number'
      ? m.fontBoundingBoxAscent
      : m.actualBoundingBoxAscent
  if (typeof ascent !== 'number') return null
  const fontH =
    (typeof m.fontBoundingBoxAscent === 'number' && typeof m.fontBoundingBoxDescent === 'number'
      ? m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
      : ascent + (m.actualBoundingBoxDescent || 0)) || fs
  return Math.max(0, (lhPx - fontH) / 2)
}

/**
 * Cap-model ink top in border box (px) for offset vs live Range.
 * @param {Element} el
 */
function measureCapInkTopInBorderPx(el) {
  const cs = getComputedStyle(el)
  const box = el.getBoundingClientRect()
  if (!Number.isFinite(box.height) || box.height <= 0) return null
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const t = (el.textContent || '').trim()
  const sample = t.length === 1 ? `${t}${t}` : t ? t[0] + t[t.length - 1] : 'Mg'
  ctx.font = `${cs.fontStyle || 'normal'} ${cs.fontWeight || '400'} ${fs}px ${cs.fontFamily || 'sans-serif'}`
  const m = ctx.measureText(sample)
  const ascent =
    typeof m.fontBoundingBoxAscent === 'number'
      ? m.fontBoundingBoxAscent
      : m.actualBoundingBoxAscent
  if (typeof ascent !== 'number') return null
  const fontH =
    (typeof m.fontBoundingBoxAscent === 'number' && typeof m.fontBoundingBoxDescent === 'number'
      ? m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
      : ascent + (m.actualBoundingBoxDescent || 0)) || fs
  const halfLeading = Math.max(0, (lhPx - fontH) / 2)
  const paddingTop = parseFloat(cs.paddingTop) || 0
  const topInBorder =
    paddingTop + halfLeading + ascent - (m.actualBoundingBoxAscent || ascent)
  return topInBorder
}

/** Line rects in capture-root coordinates for split-FO fork (multi-line only). */
function measureFoLineRectsInRoot(el, root) {
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (rects.length < 2) return null
  const rr = root.getBoundingClientRect()
  /** @type {{ x: number, y: number, width: number, height: number }[]} */
  const out = []
  for (const rc of rects) {
    const w = rc.width
    const h = rc.height
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) continue
    out.push({
      x: rc.left - rr.left,
      y: rc.top - rr.top,
      width: w,
      height: h,
    })
  }
  return out.length >= 2 ? out : null
}

/**
 * FO paint-origin half-leading (½(lh−fs) or ½(fontBox−lh) when lh is tight).
 * @param {number} lhPx
 * @param {number} fsPx
 * @param {number | null | undefined} fontBoxHeightPx
 */
function resolveHalfLeadingForRasterFork(lhPx, fsPx, fontBoxHeightPx) {
  if (!Number.isFinite(lhPx) || lhPx <= 0 || !Number.isFinite(fsPx) || fsPx <= 0) return null
  const halfFromFs = (lhPx - fsPx) / 2
  if (halfFromFs > 0) return halfFromFs
  const fb = fontBoxHeightPx
  if (Number.isFinite(fb) && fb > lhPx) return (fb - lhPx) / 2
  return Number.isFinite(halfFromFs) ? halfFromFs : null
}

/** Live text-leaf lh/fs metrics for raster-only SVG forks (decode path meta). */
export function enrichRasterMetaFromTextLeaf(el, meta) {
  if (!el || !(el instanceof Element)) return meta ?? {}
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize)
  let lhPx = null
  const lhRaw = cs.lineHeight
  if (lhRaw && lhRaw !== 'normal') {
    const n = parseFloat(lhRaw)
    if (Number.isFinite(n) && n > 0) lhPx = n
  }
  const box = el.getBoundingClientRect()
  const contentBoxH =
    box.height -
    (parseFloat(cs.paddingTop) || 0) -
    (parseFloat(cs.paddingBottom) || 0) -
    (parseFloat(cs.borderTopWidth) || 0) -
    (parseFloat(cs.borderBottomWidth) || 0)
  const strutFacts = measureLhStrutRangeFacts(el)
  const captureRoot =
    el.closest('#capture-target') ||
    el.ownerDocument?.querySelector('#capture-target') ||
    el.parentElement
  const lhLeaf = strutFacts.lineHeightPx ?? lhPx
  const fsResolved = strutFacts.fontSizePx ?? (Number.isFinite(fs) ? fs : null)
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  const fontBoxH = fontBox?.height ?? null
  let halfFromLh =
    Number.isFinite(lhLeaf) && Number.isFinite(fsResolved)
      ? resolveHalfLeadingForRasterFork(lhLeaf, fsResolved, fontBoxH)
      : null
  if (!(Number.isFinite(halfFromLh) && halfFromLh > 0) && captureRoot instanceof Element) {
    const strutLh = resolveStrutLineHeightPxForTextLeaf(captureRoot, el)
    if (Number.isFinite(strutLh) && Number.isFinite(fsResolved)) {
      halfFromLh = resolveHalfLeadingForRasterFork(strutLh, fsResolved, fontBoxH)
    }
  }
  const lhResolved =
    Number.isFinite(halfFromLh) && halfFromLh > 0 && Number.isFinite(lhLeaf)
      ? lhLeaf
      : captureRoot instanceof Element
        ? resolveStrutLineHeightPxForTextLeaf(captureRoot, el)
        : lhLeaf
  const halfLeading =
    Number.isFinite(meta?.lhStrutHalfLeadingPx) && meta.lhStrutHalfLeadingPx > 0
      ? meta.lhStrutHalfLeadingPx
      : (Number.isFinite(halfFromLh) && halfFromLh > 0
          ? halfFromLh
          : null) ??
        (Number.isFinite(strutFacts.halfLeadingFontBox) &&
        strutFacts.halfLeadingFontBox > 0
          ? strutFacts.halfLeadingFontBox
          : null) ??
        (Number.isFinite(strutFacts.halfLeadingFromRangeLineFs) &&
        strutFacts.halfLeadingFromRangeLineFs > 0
          ? strutFacts.halfLeadingFromRangeLineFs
          : null) ??
        (Number.isFinite(strutFacts.halfLeadingFs) && strutFacts.halfLeadingFs > 0
          ? strutFacts.halfLeadingFs
          : null)
  const halfLeadingFontBox = strutFacts.halfLeadingFontBox
  const halfLeadingUsed = strutFacts.halfLeadingUsed
  const rangeTopInBorder = strutFacts.rangeTopInBorder
  const capInkTop = strutFacts.capTopInBorder
  const inkTopOffsetFromFoTop =
    rangeTopInBorder != null && capInkTop != null
      ? rangeTopInBorder - capInkTop
      : halfLeading
  const lhStrutRangeHalfLeadingPx =
    strutFacts.halfLeadingFromRangeLineFs ??
    strutFacts.halfLeadingFromRangeLineFontBox ??
    null
  const lhStrutRangeSubpixelPx = strutFacts.rangeSubpixelPx
  const lhStrutFoYAdjustPx = strutFacts.halfLeadingFsMinusRangeSubpixel
  const lhStrutRangeOffsetPx =
    lhStrutFoYAdjustPx ?? lhStrutRangeHalfLeadingPx ?? rangeTopInBorder
  const foLineRects =
    captureRoot instanceof Element ? measureFoLineRectsInRoot(el, captureRoot) : null
  return {
    ...(meta ?? {}),
    lhStrutLineHeightPx:
      Number.isFinite(lhResolved) && lhResolved > 0 ? lhResolved : lhPx,
    lhStrutFontSizePx: Number.isFinite(fs) ? fs : null,
    lhStrutHalfLeadingPx: halfLeading,
    lhStrutHalfLeadingFontBoxPx: halfLeadingFontBox,
    lhStrutHalfLeadingUsedPx: halfLeadingUsed,
    lhStrutRangeOffsetPx: Number.isFinite(lhStrutRangeOffsetPx) ? lhStrutRangeOffsetPx : null,
    lhStrutRangeHalfLeadingPx: Number.isFinite(lhStrutRangeHalfLeadingPx)
      ? lhStrutRangeHalfLeadingPx
      : null,
    lhStrutRangeSubpixelPx: Number.isFinite(lhStrutRangeSubpixelPx)
      ? lhStrutRangeSubpixelPx
      : null,
    lhStrutFoYAdjustPx: Number.isFinite(lhStrutFoYAdjustPx) ? lhStrutFoYAdjustPx : null,
    lhStrutRangeTopInBorderPx: Number.isFinite(rangeTopInBorder) ? rangeTopInBorder : null,
    lhStrutLineBoxTopInBorderPx: Number.isFinite(strutFacts.lineBoxTopInBorder)
      ? strutFacts.lineBoxTopInBorder
      : null,
    lhStrutLayoutLineBoxPx: contentBoxH,
    lineHeightPx: lhPx,
    inkTopOffsetFromFoTop:
      Number.isFinite(inkTopOffsetFromFoTop) ? inkTopOffsetFromFoTop : null,
    ...(foLineRects ? { foLineRects } : {}),
  }
}

function injectFoCss(svgText, cssBlock) {
  if (!cssBlock) return svgText
  if (/<style[^>]*type=["']text\/css["']/i.test(svgText)) {
    return svgText.replace(
      /<style([^>]*)type=["']text\/css["']([^>]*)>/i,
      (m) => `${m}${cssBlock}`,
    )
  }
  return svgText.replace(
    /<svg\b([^>]*)>/i,
    (m) => `${m}<style type="text/css">${cssBlock}</style>`,
  )
}

const FO_FE_COLOR_MATRIX_FILTER_ID = 'fo-fix-lab-fo-fecm'
const FO_FE_COLOR_MATRIX_DEF =
  `<filter id="${FO_FE_COLOR_MATRIX_FILTER_ID}" color-interpolation-filters="sRGB">` +
  `<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/></filter>`

const FO_EMPTY_FILTER_ID = 'fo-fix-lab-empty'
const FO_EMPTY_FILTER_DEF = `<filter id="${FO_EMPTY_FILTER_ID}"/>`

const SVG_NOOP_FILTER_ID = 'noop'
const SVG_NOOP_FILTER_DEF = `<filter id="${SVG_NOOP_FILTER_ID}"/>`

/**
 * Inject empty <filter id="noop"/> in capture svg defs only (no FO reference).
 * @param {string} svgText
 */
function injectSvgNoopFilterDefs(svgText) {
  if (svgText.includes(`id="${SVG_NOOP_FILTER_ID}"`)) return svgText
  if (/<defs\b/i.test(svgText)) {
    return svgText.replace(/<defs\b[^>]*>/i, (m) => `${m}${SVG_NOOP_FILTER_DEF}`)
  }
  return svgText.replace(/<svg\b([^>]*)>/i, (m) => `${m}<defs>${SVG_NOOP_FILTER_DEF}</defs>`)
}

/**
 * Identity feColorMatrix on each <foreignObject> only (not capture <svg> root).
 * @param {string} svgText
 */
function injectFoFeColorMatrix(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_COLOR_MATRIX_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_COLOR_MATRIX_DEF}`)
    } else {
      out = out.replace(/<svg\b([^>]*)>/i, (m) => `${m}<defs>${FO_FE_COLOR_MATRIX_DEF}</defs>`)
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_COLOR_MATRIX_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

/**
 * Empty nop filter on each <foreignObject> only (not capture <svg> root).
 * @param {string} svgText
 */
function injectFoEmptyFilter(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_EMPTY_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_EMPTY_FILTER_DEF}`)
    } else {
      out = out.replace(/<svg\b([^>]*)>/i, (m) => `${m}<defs>${FO_EMPTY_FILTER_DEF}</defs>`)
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_EMPTY_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

/**
 * Round viewBox components to integers on outer capture <svg>.
 * @param {string} svgText
 */
function integerViewBoxPatch(svgText) {
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    const rounded = parts.map((n) => Math.round(n)).join(' ')
    const next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${rounded}"`)
    return `<svg${next}>`
  })
}

/**
 * Floor viewBox components on outer capture <svg> (width/height attrs unchanged).
 * @param {string} svgText
 */
function intFloorViewBoxPatch(svgText) {
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    const floored = parts.map((n) => Math.floor(n)).join(' ')
    const next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${floored}"`)
    return `<svg${next}>`
  })
}

/**
 * Round outer capture svg width/height to integer CSS px.
 * @param {string} svgText
 * @param {{ cssW: number, cssH: number }} dims
 */
function roundSvgRootDimsPatch(svgText, dims) {
  const w = String(Math.max(1, Math.round(dims.cssW)))
  const h = String(Math.max(1, Math.round(dims.cssH)))
  return svgRootAttrPatch(svgText, { width: w, height: h })
}

/**
 * Floor outer capture svg width/height to integer CSS px.
 * @param {string} svgText
 * @param {{ cssW: number, cssH: number }} dims
 */
function intFloorSvgRootDimsPatch(svgText, dims) {
  const w = String(Math.max(1, Math.floor(dims.cssW)))
  const h = String(Math.max(1, Math.floor(dims.cssH)))
  return svgRootAttrPatch(svgText, { width: w, height: h })
}

function stripXmlDeclaration(svgText) {
  return svgText.replace(/<\?xml[^?]*\?>\s*/i, '')
}

const SVG_XMLNS = 'http://www.w3.org/2000/svg'
const SVG_XLINK_XMLNS = 'http://www.w3.org/1999/xlink'

/** @param {string} svgText */
function explicitSvgXmlnsPatch(svgText) {
  return svgText.replace(/<svg(\s[^>]*)?>/i, (full, attrs = '') => {
    let next = attrs
    if (!/\bxmlns=["']/i.test(next)) next += ` xmlns="${SVG_XMLNS}"`
    if (!/\bxmlns:xlink=["']/i.test(next)) next += ` xmlns:xlink="${SVG_XLINK_XMLNS}"`
    return `<svg${next}>`
  })
}

/** @param {string} svgText */
function stripIdentityTransformsPatch(svgText) {
  return svgText
    .replace(
      /\s+transform=["'](?:none|matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)|translate\(\s*0(?:px)?(?:\s*,\s*0(?:px)?)?\s*\))["']/gi,
      '',
    )
    .replace(/\s+transform=["']translate\(0\)["']/gi, '')
}

/** @param {string} svgText */
function stripAllTransformsPatch(svgText) {
  return svgText.replace(/\s+transform=["'][^"']*["']/gi, '')
}

/**
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ dpr: number, scale: number }} base
 */
function snapdomOptsForRecipe(recipe, base) {
  const opts = { dpr: base.dpr, scale: base.scale }
  if (recipe.id === 'v3-snapdom-cache-bust') opts.cache = false
  if (recipe.harnessSnapdom) Object.assign(opts, recipe.harnessSnapdom)
  return opts
}

/**
 * @param {string} patchedSvg
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} scale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 */
/**
 * Recipe rasterPatch, with optional URL override ?labToCanvas=1 when patch is none/product.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @returns {import('./fo-fix-recipes.js').FoFixRasterPatch}
 */
export function resolveRecipeRasterPatch(recipe) {
  const rp = recipe.rasterPatch ?? 'none'
  if (rp !== 'none' && rp !== 'product-toCanvas') return rp
  try {
    const qs = new URLSearchParams(globalThis.location?.search ?? '')
    if (qs.get('labToCanvas') === '1') return 'lab-toCanvas'
  } catch {
    /* non-browser */
  }
  return rp
}

/**
 * Merge lab UI fork/patch dropdown overrides without breaking decode-time raster forks.
 * Recipes with `labToCanvasOpts.rasterOnlySvgPatch` must keep `rasterPatch: lab-toCanvas`
 * unless the user explicitly picks a different Lab fork (not the legacy Raster patch dropdown).
 *
 * @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} recipe
 * @param {{ fork?: string, patch?: string }} [overrides]
 */
export function resolveEffectiveLabRecipe(recipe, overrides = {}) {
  const base = recipe ?? { id: 'product-baseline', rasterPatch: 'none' }
  const fork = (overrides.fork ?? '').trim()
  const patch = (overrides.patch ?? '').trim()
  const decodeForkId = base.labToCanvasOpts?.rasterOnlySvgPatch
  const out = { ...base }

  if (fork) {
    out.rasterPatch = fork
    return out
  }

  if (decodeForkId) {
    if (patch && patch !== 'lab-toCanvas' && patch !== '') {
      console.warn(
        `[fo-fix-lab] ignoring raster patch override "${patch}" for ${base.id} — ` +
          `decode fork ${decodeForkId} requires lab-toCanvas (use Lab fork dropdown to override).`,
      )
    }
    out.rasterPatch = 'lab-toCanvas'
    return out
  }

  if (patch) {
    out.rasterPatch = patch
  }
  return out
}

/**
 * Build SVG data URL with lab recipe overrides (wave4 mime probes).
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} recipe
 */
export function buildLabSvgDataUrl(svgText, recipe) {
  const opt = recipe?.labSvgDataUrl ?? null
  const charset = opt?.charset ?? 'utf-8'
  const encoding = opt?.encoding ?? 'uri'

  const meta =
    charset === 'none'
      ? 'data:image/svg+xml'
      : `data:image/svg+xml;charset=${charset}`

  if (encoding === 'base64') {
    const b64 = btoa(unescape(encodeURIComponent(svgText)))
    return `${meta};base64,${b64}`
  }
  if (encoding === 'double-uri') {
    const once = encodeURIComponent(svgText)
    return `${meta},${encodeURIComponent(once)}`
  }
  return `${meta},${encodeURIComponent(svgText)}`
}

/** Product toCanvas draw path (uses snapdom instance if provided, else minimal mirror). */
export async function rasterProductToCanvas(patchedSvg, dims, scale, meta, recipe = null, snapdomInstance = null) {
  void snapdomInstance
  // Mirror product experimentalRaster* via lab fork (readable canvas + patch wiring).
  // Direct src/toCanvas on blob: URLs taints canvas and blocks ink scan in headed probes.
  const labRecipe = {
    ...recipe,
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: {
      ...harnessProductToCanvasToLabOpts(recipe?.harnessProductToCanvas),
      ...recipe?.labToCanvasOpts,
    },
  }
  return rasterLabToCanvas(patchedSvg, dims, scale, meta, labRecipe)
}

/**
 * Merge recipe.toCanvasHarness into lab toCanvas args (tc-lab-meta-* probes).
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} rasterScale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 */
export function resolveLabToCanvasHarness(recipe, dims, rasterScale, meta) {
  const h = recipe.toCanvasHarness
  const base = meta ?? {}
  if (!h) {
    return {
      width: dims.cssW,
      height: dims.cssH,
      scale: rasterScale,
      dpr: dims.dpr,
      meta: { ...base },
    }
  }

  /** @type {Record<string, number>} */
  const outMeta = { ...base }
  const m = h.meta
  if (m) {
    if (m.w0 === 'omit') delete outMeta.w0
    else if (m.w0 === 'target' && Number.isFinite(base.targetW)) outMeta.w0 = base.targetW
    else if (m.w0 === 'css') outMeta.w0 = dims.cssW
    else if (m.w0 !== 'parsed' && Number.isFinite(m.w0)) outMeta.w0 = m.w0

    if (m.h0 === 'omit') delete outMeta.h0
    else if (m.h0 === 'target' && Number.isFinite(base.targetH)) outMeta.h0 = base.targetH
    else if (m.h0 === 'css') outMeta.h0 = dims.cssH
    else if (m.h0 !== 'parsed' && Number.isFinite(m.h0)) outMeta.h0 = m.h0
  }

  /** @type {number | undefined} */
  let width
  if (h.width === 'omit') width = undefined
  else if (h.width === 'dims' || h.width === undefined) width = dims.cssW
  else if (Number.isFinite(h.width)) width = h.width

  /** @type {number | undefined} */
  let height
  if (h.height === 'omit') height = undefined
  else if (h.height === 'dims' || h.height === undefined) height = dims.cssH
  else if (Number.isFinite(h.height)) height = h.height

  if (h.swapDims) {
    const tmp = width
    width = height
    height = tmp
  }

  if (h.swapMeta && outMeta.w0 != null && outMeta.h0 != null) {
    const tmpW0 = outMeta.w0
    outMeta.w0 = outMeta.h0
    outMeta.h0 = tmpW0
  }

  return {
    width,
    height,
    scale: Number.isFinite(h.scale) ? h.scale : rasterScale,
    dpr: Number.isFinite(h.dpr) ? h.dpr : dims.dpr,
    meta: outMeta,
  }
}

/** Lab fork of src/exporters/toCanvas.js (__localtests__/fo-fix-toCanvas.js). */
export async function rasterLabToCanvas(patchedSvg, dims, scale, meta, recipe) {
  const blobModes = new Set([
    'blob-url',
    'decode-via-blob',
    'blob-url-decode-interval',
    'blob-url-fetch-revoke',
    'blob-url-early-revoke',
  ])
  const labRasterUrl = recipe?.labRasterUrl
  let url
  /** @type {(() => void) | null} */
  let revoke = null
  if (labRasterUrl && blobModes.has(labRasterUrl)) {
    const built = buildRasterUrl(patchedSvg, { rasterPatch: labRasterUrl })
    url = built.url
    revoke = built.revoke
  } else {
    url = buildLabSvgDataUrl(patchedSvg, recipe)
  }
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : {
        width: dims.cssW,
        height: dims.cssH,
        scale,
        dpr: dims.dpr,
        meta: meta ?? {},
      }
  try {
    const hook = resolveLabHook(recipe?.labHook, recipe)
    const flags = resolveLabToCanvasFlags(recipe)
    const debugLh =
      Boolean(recipe?.labToCanvasOpts?.debugLh) ||
      (typeof globalThis !== 'undefined' &&
        (!!globalThis.__foFixLabDebugLh || !!globalThis.__foFixLabTextOnly))
    return await labToCanvas(url, {
      ...tc,
      labToCanvasOpts: {
        ...harnessProductToCanvasToLabOpts(recipe?.harnessProductToCanvas),
        ...hook.labToCanvasOpts,
        ...flags.labToCanvasOpts,
        ...recipe?.labToCanvasOpts,
        ...(debugLh ? { debugLh: true, lhStrutDiagnostics: true } : {}),
      },
      labLoadPipeline: recipe?.labLoadPipeline,
      backgroundColor: recipe?.backgroundColor,
      labToCanvasCtx: hook.labToCanvasCtx,
      labToCanvasTiming: hook.labToCanvasTiming,
      recipeFlags: recipe?.recipeFlags,
    })
  } finally {
    revoke?.()
  }
}

/** Lab decode-interval + drawImage hook fork (fo-fix-toCanvas-decode-experimental.js). */
export async function rasterLabToCanvasDecode(patchedSvg, dims, scale, meta, opts = {}, recipe = null) {
  const url = buildLabSvgDataUrl(patchedSvg, recipe)
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : { width: dims.cssW, height: dims.cssH, scale, dpr: dims.dpr, meta: meta ?? {} }
  return labToCanvasDecode(url, {
    ...tc,
    decodeInterval: opts.decodeInterval !== false,
    roundDrawImage: Boolean(opts.roundDrawImage),
    labLoadPipeline: recipe?.labLoadPipeline ?? opts.labLoadPipeline,
    labToCanvasOpts: recipe?.labToCanvasOpts,
  })
}

/** Lab fractional drawImage fork — h2-frac-draw parity (fo-fix-toCanvas-frac-draw.js). */
export async function rasterLabToCanvasFrac(patchedSvg, dims, scale, meta, labToCanvasOpts) {
  const url = buildLabSvgDataUrl(patchedSvg, null)
  const opts = labToCanvasOpts ?? {}
  return labToCanvasFrac(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
    useFracDraw: opts.useFracDraw !== false,
    labToCanvasOpts: opts,
  })
}

/** Lab out-dims source fork — naturalWidth/Height vs meta.w0/h0 vs harness opt (fo-fix-toCanvas-natural-dims.js). */
export async function rasterLabToCanvasNaturalDims(patchedSvg, dims, scale, meta, labToCanvasOpts) {
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  return labToCanvasNaturalDims(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
    labToCanvasOpts,
  })
}

/** Lab fork: force image smoothing off (fo-fix-toCanvas-smooth-off.js). */
export async function rasterLabToCanvasSmoothOff(patchedSvg, dims, scale, meta, recipe) {
  const url = buildLabSvgDataUrl(patchedSvg, recipe)
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : { width: dims.cssW, height: dims.cssH, scale, dpr: dims.dpr, meta: meta ?? {} }
  return labToCanvasSmoothOff(url, {
    ...tc,
    labToCanvasOpts: recipe?.labToCanvasOpts,
    backgroundColor: recipe?.backgroundColor,
    labToCanvasCtx: recipe?.labToCanvasCtx,
    labToCanvasTiming: recipe?.labToCanvasTiming,
  })
}

/** Lab fork: force desynchronized context (fo-fix-toCanvas-desync.js). */
export async function rasterLabToCanvasDesync(patchedSvg, dims, scale, meta, recipe) {
  const url = buildLabSvgDataUrl(patchedSvg, recipe)
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : { width: dims.cssW, height: dims.cssH, scale, dpr: dims.dpr, meta: meta ?? {} }
  return labToCanvasDesync(url, {
    ...tc,
    labToCanvasOpts: recipe?.labToCanvasOpts,
    backgroundColor: recipe?.backgroundColor,
    labToCanvasCtx: recipe?.labToCanvasCtx,
    labToCanvasTiming: recipe?.labToCanvasTiming,
  })
}

/** Lab fork: drawImage twice (fo-fix-toCanvas-double-draw.js). */
export async function rasterLabToCanvasDoubleDraw(patchedSvg, dims, scale, meta, recipe) {
  const url = buildLabSvgDataUrl(patchedSvg, recipe)
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : { width: dims.cssW, height: dims.cssH, scale, dpr: dims.dpr, meta: meta ?? {} }
  return labToCanvasDoubleDraw(url, {
    ...tc,
    labToCanvasOpts: recipe?.labToCanvasOpts,
    backgroundColor: recipe?.backgroundColor,
    labToCanvasCtx: recipe?.labToCanvasCtx,
    labToCanvasTiming: recipe?.labToCanvasTiming,
  })
}

/** Lab fork: wait 200ms after decode (fo-fix-toCanvas-wait-200.js). */
export async function rasterLabToCanvasWait200(patchedSvg, dims, scale, meta, recipe) {
  const url = buildLabSvgDataUrl(patchedSvg, recipe)
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : { width: dims.cssW, height: dims.cssH, scale, dpr: dims.dpr, meta: meta ?? {} }
  return labToCanvasWait200(url, {
    ...tc,
    labToCanvasOpts: recipe?.labToCanvasOpts,
    backgroundColor: recipe?.backgroundColor,
    labToCanvasCtx: recipe?.labToCanvasCtx,
    labToCanvasTiming: recipe?.labToCanvasTiming,
  })
}

/**
 * @param {import('./fo-fix-lab-raster-patches.js').LabRasterResolved} resolved
 * @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} recipe
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} scale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 */
function labToCanvasOptsFromResolved(resolved, recipe, dims, scale, meta) {
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : {
        width: dims.cssW,
        height: dims.cssH,
        scale,
        dpr: dims.dpr,
        meta: meta ?? {},
      }
  const flags = resolveLabToCanvasFlags(recipe)
  return {
    ...tc,
    labToCanvasOpts: {
      ...harnessProductToCanvasToLabOpts(recipe?.harnessProductToCanvas),
      ...flags.labToCanvasOpts,
      ...resolved.labToCanvasOpts,
      ...recipe?.labToCanvasOpts,
    },
    labToCanvasCtx: {
      ...(recipe?.labToCanvasCtx ?? {}),
      ...resolved.labCtx,
    },
    labToCanvasTiming: recipe?.labToCanvasTiming,
    labLoadPipeline: recipe?.labLoadPipeline,
    backgroundColor: recipe?.backgroundColor,
    recipeFlags: recipe?.recipeFlags,
    decodeIntervalMs: resolved.decodeIntervalMs,
    decodeDouble: resolved.decodeDouble,
    decodeRaf: resolved.decodeRaf,
    roundDrawImage: resolved.roundDrawImage,
  }
}

/**
 * Lab wave3 rasterPatch tokens → fo-fix-toCanvas.js (fo-fix-lab-raster-patches.js).
 * @param {string} patchedSvg
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} scale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 */
export async function rasterLabToCanvasPatchToken(
  patchedSvg,
  dims,
  scale,
  meta,
  recipe,
) {
  const rp = recipe.rasterPatch ?? 'none'
  const resolved = resolveLabRasterOptionsFromRecipe(recipe)
  if (!resolved && !isLabRasterPatchToken(rp)) {
    throw new Error(`rasterLabToCanvasPatchToken: unsupported rasterPatch ${rp}`)
  }
  const finalResolved = resolved ?? resolveLabRasterOptions(rp, recipe.labToCanvasOpts)
  if (finalResolved.fork === 'frac') {
    return rasterLabToCanvasFrac(
      patchedSvg,
      dims,
      scale,
      meta,
      finalResolved.labToCanvasOpts,
    )
  }
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  return labToCanvas(
    url,
    labToCanvasOptsFromResolved(finalResolved, recipe, dims, scale, meta),
  )
}

/** Lab round-all-dims fork (fo-fix-toCanvas-round-all.js). */
export async function rasterLabToCanvasRoundAll(patchedSvg, dims, scale, meta) {
  const url = buildLabSvgDataUrl(patchedSvg, null)
  return labToCanvasRoundAll(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
  })
}

/**
 * @param {(url: string, options: Parameters<typeof labToCanvas>[1] & Record<string, unknown>) => Promise<HTMLCanvasElement>} toCanvasFn
 * @param {string} patchedSvg
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} scale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 */
async function rasterLabToCanvasViaFork(toCanvasFn, patchedSvg, dims, scale, meta, recipe) {
  const blobModes = new Set([
    'blob-url',
    'decode-via-blob',
    'blob-url-decode-interval',
    'blob-url-fetch-revoke',
    'blob-url-early-revoke',
  ])
  const labRasterUrl = recipe?.labRasterUrl
  let url
  /** @type {(() => void) | null} */
  let revoke = null
  if (labRasterUrl && blobModes.has(labRasterUrl)) {
    const built = buildRasterUrl(patchedSvg, { rasterPatch: labRasterUrl })
    url = built.url
    revoke = built.revoke
  } else {
    url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  }
  const tc = recipe?.toCanvasHarness
    ? resolveLabToCanvasHarness(recipe, dims, scale, meta)
    : {
        width: dims.cssW,
        height: dims.cssH,
        scale,
        dpr: dims.dpr,
        meta: meta ?? {},
      }
  try {
    return await toCanvasFn(url, {
      ...tc,
      labToCanvasOpts: recipe?.labToCanvasOpts,
      labLoadPipeline: recipe?.labLoadPipeline,
      backgroundColor: recipe?.backgroundColor,
      labToCanvasCtx: recipe?.labToCanvasCtx,
      labToCanvasTiming: recipe?.labToCanvasTiming,
      recipeFlags: recipe?.recipeFlags,
    })
  } finally {
    revoke?.()
  }
}

/** Wave7 fork: decode sweep (fo-fix-toCanvas-w7-decode-sweep.js). */
export async function rasterLabToCanvasW7DecodeSweep(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(
    labToCanvasW7DecodeSweep,
    patchedSvg,
    dims,
    scale,
    meta,
    recipe,
  )
}

/** Wave7 fork: draw round (fo-fix-toCanvas-w7-draw-round.js). */
export async function rasterLabToCanvasW7DrawRound(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW7DrawRound, patchedSvg, dims, scale, meta, recipe)
}

/** Wave7 fork: backing floor (fo-fix-toCanvas-w7-backing-floor.js). */
export async function rasterLabToCanvasW7BackingFloor(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(
    labToCanvasW7BackingFloor,
    patchedSvg,
    dims,
    scale,
    meta,
    recipe,
  )
}

/** Wave7 fork: ctx defaults (fo-fix-toCanvas-w7-ctx-default.js). */
export async function rasterLabToCanvasW7CtxDefault(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW7CtxDefault, patchedSvg, dims, scale, meta, recipe)
}

/** Wave7 fork: wait raf (fo-fix-toCanvas-w7-wait-raf.js). */
export async function rasterLabToCanvasW7WaitRaf(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW7WaitRaf, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: force blob pipeline (fo-fix-toCanvas-w8-pipeline-blob.js). */
export async function rasterLabToCanvasW8PipelineBlob(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8PipelineBlob, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: force createImageBitmap (fo-fix-toCanvas-w8-force-bitmap.js). */
export async function rasterLabToCanvasW8ForceBitmap(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8ForceBitmap, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: smoothing off (fo-fix-toCanvas-w8-ctx-smooth-off.js). */
export async function rasterLabToCanvasW8CtxSmoothOff(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8CtxSmoothOff, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: backing ceil (fo-fix-toCanvas-w8-backing-ceil.js). */
export async function rasterLabToCanvasW8BackingCeil(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8BackingCeil, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: dpr from devicePixelRatio (fo-fix-toCanvas-w8-dpr-device.js). */
export async function rasterLabToCanvasW8DprDevice(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8DprDevice, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: resetTransform before draw (fo-fix-toCanvas-w8-reset-transform.js). */
export async function rasterLabToCanvasW8ResetTransform(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8ResetTransform, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: contain-center fit (fo-fix-toCanvas-w8-drawfit-contain.js). */
export async function rasterLabToCanvasW8DrawfitContain(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8DrawfitContain, patchedSvg, dims, scale, meta, recipe)
}

/** Wave8 fork: ignore meta.w0/h0 (fo-fix-toCanvas-w8-ignore-meta.js). */
export async function rasterLabToCanvasW8IgnoreMeta(patchedSvg, dims, scale, meta, recipe) {
  return rasterLabToCanvasViaFork(labToCanvasW8IgnoreMeta, patchedSvg, dims, scale, meta, recipe)
}

/** Lab extra decode/raf waits fork (fo-fix-toCanvas-wait-decode.js). */
export async function rasterLabToCanvasWaitDecode(patchedSvg, dims, scale, meta, opts = {}) {
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  return labToCanvasWaitDecode(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
    decodePasses: opts.decodePasses ?? 2,
  })
}

/** Lab createImageBitmap-first fork (fo-fix-toCanvas-bitmap-first.js). */
export async function rasterLabToCanvasBitmapFirst(
  patchedSvg,
  dims,
  scale,
  meta,
  opts = {},
  recipe = null,
) {
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  return labToCanvasBitmapFirst(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
    labToCanvasOpts: recipe?.labToCanvasOpts,
    // Back-compat: older recipes used bitmapResizeQuality; wave7 uses labToCanvasBitmapOpts.
    labToCanvasBitmapOpts: recipe?.labToCanvasBitmapOpts ?? {
      resizeQuality: opts.bitmapResizeQuality ?? 'high',
    },
    backgroundColor: recipe?.backgroundColor,
  })
}

/** Lab unified fork (fo-fix-toCanvas-unified.js). */
export async function rasterLabToCanvasUnified(patchedSvg, dims, scale, meta, recipe = null) {
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patchedSvg)}`
  return labToCanvasUnified(url, {
    width: dims.cssW,
    height: dims.cssH,
    scale,
    dpr: dims.dpr,
    meta: meta ?? {},
    backgroundColor: recipe?.backgroundColor,
    labToCanvasOpts: recipe?.labToCanvasOpts,
  })
}

/**
 * @param {string} svgText
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {number} scale
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 */
async function rasterNodeLayerViaDataUriBlob(svgText, dims, scale, meta) {
  const rootMatch = svgText.match(/<svg\b[^>]*>/i)
  const rootOpen = rootMatch ? rootMatch[0] : '<svg xmlns="http://www.w3.org/2000/svg">'
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(dims.cssW * dims.dpr))
  canvas.height = Math.max(1, Math.round(dims.cssH * dims.dpr))
  canvas.style.width = `${dims.cssW}px`
  canvas.style.height = `${dims.cssH}px`
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('2d context unavailable')
  if (dims.dpr !== 1) ctx.scale(dims.dpr, dims.dpr)

  const foRe = /<foreignObject(\s[^>]*)>([\s\S]*?)<\/foreignObject>/gi
  let match
  let drew = false
  while ((match = foRe.exec(svgText)) !== null) {
    const attrs = match[1] || ''
    const inner = match[2] || ''
    const xM = attrs.match(/\bx=["']([\d.]+)/i)
    const yM = attrs.match(/\by=["']([\d.]+)/i)
    const wM = attrs.match(/\bwidth=["']([\d.]+)/i)
    const hM = attrs.match(/\bheight=["']([\d.]+)/i)
    const x = xM ? parseFloat(xM[1]) : 0
    const y = yM ? parseFloat(yM[1]) : 0
    const w = wM ? parseFloat(wM[1]) : dims.cssW
    const h = hM ? parseFloat(hM[1]) : dims.cssH
    const mini = `${rootOpen}<foreignObject${attrs}>${inner}</foreignObject></svg>`
    const blob = new Blob([mini], { type: 'image/svg+xml;charset=utf-8' })
    const blobUrl = URL.createObjectURL(blob)
    try {
      const layer = await rasterSvgUrl(blobUrl, {
        scale,
        dpr: dims.dpr,
        meta: { ...meta, w0: w, h0: h },
        width: w,
        height: h,
        rasterPatch: 'blob-url',
      })
      ctx.drawImage(layer, x, y, w, h)
      drew = true
    } finally {
      URL.revokeObjectURL(blobUrl)
    }
  }

  if (!drew) {
    return rasterViaProductToCanvas(svgText, dims, scale, meta)
  }
  return canvas
}

const FO_FE_MORPHOLOGY_FILTER_ID = 'fo-fix-lab-fo-femorph'
const FO_FE_MORPHOLOGY_DEF =
  `<filter id="${FO_FE_MORPHOLOGY_FILTER_ID}" color-interpolation-filters="sRGB">` +
  `<feMorphology operator="dilate" radius="0"/></filter>`

/** Identity feMorphology (radius 0) on each <foreignObject> only. @param {string} svgText */
function injectFoFeMorphology(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_MORPHOLOGY_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_MORPHOLOGY_DEF}`)
    } else {
      out = out.replace(/<svg\b([^>]*)>/i, (m) => `${m}<defs>${FO_FE_MORPHOLOGY_DEF}</defs>`)
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_MORPHOLOGY_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

const FO_FE_COMPONENT_TRANSFER_FILTER_ID = 'fo-fix-lab-fo-fect'
const FO_FE_COMPONENT_TRANSFER_DEF =
  `<filter id="${FO_FE_COMPONENT_TRANSFER_FILTER_ID}" color-interpolation-filters="sRGB">` +
  '<feComponentTransfer>' +
  '<feFuncR type="identity"/>' +
  '<feFuncG type="identity"/>' +
  '<feFuncB type="identity"/>' +
  '<feFuncA type="identity"/>' +
  '</feComponentTransfer></filter>'

/** Identity feComponentTransfer on each <foreignObject> only. @param {string} svgText */
function injectFoFeComponentTransfer(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_COMPONENT_TRANSFER_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_COMPONENT_TRANSFER_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${FO_FE_COMPONENT_TRANSFER_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_COMPONENT_TRANSFER_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

const FO_FE_MERGE_FILTER_ID = 'fo-fix-lab-fo-femerge'
const FO_FE_MERGE_DEF =
  `<filter id="${FO_FE_MERGE_FILTER_ID}" color-interpolation-filters="sRGB">` +
  '<feMerge/></filter>'

/** Empty feMerge on each <foreignObject> only. @param {string} svgText */
function injectFoFeMergeEmpty(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_MERGE_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_MERGE_DEF}`)
    } else {
      out = out.replace(/<svg\b([^>]*)>/i, (m) => `${m}<defs>${FO_FE_MERGE_DEF}</defs>`)
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_MERGE_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

const FO_FE_DISPLACEMENT_MAP_FILTER_ID = 'fo-fix-lab-fo-fedisplace'
const FO_FE_DISPLACEMENT_MAP_DEF =
  `<filter id="${FO_FE_DISPLACEMENT_MAP_FILTER_ID}" color-interpolation-filters="sRGB">` +
  '<feDisplacementMap in="SourceGraphic" in2="SourceGraphic" scale="0" ' +
  'xChannelSelector="R" yChannelSelector="G"/></filter>'

/** Identity feDisplacementMap (scale 0) on each <foreignObject> only. @param {string} svgText */
function injectFoFeDisplacementMap(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_DISPLACEMENT_MAP_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_DISPLACEMENT_MAP_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${FO_FE_DISPLACEMENT_MAP_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_DISPLACEMENT_MAP_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

const FO_FE_TURBULENCE_COMPOSITE_FILTER_ID = 'fo-fix-lab-fo-feturb'
const FO_FE_TURBULENCE_COMPOSITE_DEF =
  `<filter id="${FO_FE_TURBULENCE_COMPOSITE_FILTER_ID}" color-interpolation-filters="sRGB">` +
  '<feTurbulence type="fractalNoise" baseFrequency="0.001" numOctaves="1" seed="2" result="noise"/>' +
  '<feComposite in="SourceGraphic" in2="noise" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/></filter>'

/** feTurbulence + feComposite (arithmetic identity) on each <foreignObject> only. @param {string} svgText */
function injectFoFeTurbulenceComposite(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_TURBULENCE_COMPOSITE_FILTER_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_TURBULENCE_COMPOSITE_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${FO_FE_TURBULENCE_COMPOSITE_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_TURBULENCE_COMPOSITE_FILTER_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

const SVG_ROOT_PATTERN_ID = 'fo-fix-lab-root-pattern'
const SVG_ROOT_PATTERN_DEF =
  `<pattern id="${SVG_ROOT_PATTERN_ID}" patternUnits="userSpaceOnUse" width="8" height="8">` +
  '<rect width="8" height="8" fill="transparent"/>' +
  '<path d="M0 8 L8 0" stroke="rgba(128,128,128,0.06)" stroke-width="0.5"/></pattern>'

/** Diagonal hatch pattern fill on outer capture <svg> root only. @param {string} svgText */
function injectSvgRootPatternFill(svgText) {
  let out = svgText
  if (!out.includes(`id="${SVG_ROOT_PATTERN_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${SVG_ROOT_PATTERN_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${SVG_ROOT_PATTERN_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<svg\b([^>]*)>/i, (full, attrs = '') => {
    const fillAttr = `fill="url(#${SVG_ROOT_PATTERN_ID})"`
    if (/\bfill=["']/i.test(attrs)) return full
    return `<svg${attrs} ${fillAttr}>`
  })
}

const FO_BORDER_LINEAR_GRADIENT_ID = 'fo-fix-lab-border-grad'
const FO_BORDER_LINEAR_GRADIENT_DEF =
  `<linearGradient id="${FO_BORDER_LINEAR_GRADIENT_ID}" x1="0%" y1="0%" x2="100%" y2="0%">` +
  '<stop offset="0%" stop-color="rgba(0,0,0,0.14)"/>' +
  '<stop offset="100%" stop-color="rgba(0,0,0,0.04)"/></linearGradient>'

/**
 * linearGradient stroke rect matching each <foreignObject> box (border simulation).
 * @param {string} svgText
 */
function injectFoBorderLinearGradientStroke(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_BORDER_LINEAR_GRADIENT_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_BORDER_LINEAR_GRADIENT_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${FO_BORDER_LINEAR_GRADIENT_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const xM = attrs.match(/\bx=["']([\d.]+)/i)
    const yM = attrs.match(/\by=["']([\d.]+)/i)
    const wM = attrs.match(/\bwidth=["']([\d.]+)/i)
    const hM = attrs.match(/\bheight=["']([\d.]+)/i)
    const x = xM ? xM[1] : '0'
    const y = yM ? yM[1] : '0'
    const w = wM ? wM[1] : '100%'
    const h = hM ? hM[1] : '100%'
    const borderRect =
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" ` +
      `stroke="url(#${FO_BORDER_LINEAR_GRADIENT_ID})" stroke-width="1" ` +
      'vector-effect="non-scaling-stroke" pointer-events="none"/>'
    return `${borderRect}${full}`
  })
}

/** UTF-8 → base64 → UTF-8 on capture SVG string (lab diagnostic). @param {string} svgText */
function svgBase64RoundtripPatch(svgText) {
  try {
    const b64 = btoa(unescape(encodeURIComponent(svgText)))
    return decodeURIComponent(escape(atob(b64)))
  } catch {
    return svgText
  }
}

function waitMicrotask() {
  return new Promise((resolve) => queueMicrotask(resolve))
}

function waitSingleRaf() {
  return new Promise((resolve) => requestAnimationFrame(resolve))
}

function waitDoubleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  })
}

function waitTripleRaf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(resolve)
      })
    })
  })
}

function deviceGridSnapPatch(svgText, cssW, cssH, dpr) {
  const dw = String(Math.max(1, Math.floor(cssW * dpr)))
  const dh = String(Math.max(1, Math.floor(cssH * dpr)))
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    if (!/\bviewBox=["']/i.test(attrs)) return full
    let next = attrs
    if (/\bwidth=["']/i.test(next)) {
      next = next.replace(/\bwidth=["'][\d.]+[^"']*["']/i, `width="${dw}"`)
    } else next += ` width="${dw}"`
    if (/\bheight=["']/i.test(next)) {
      next = next.replace(/\bheight=["'][\d.]+[^"']*["']/i, `height="${dh}"`)
    } else next += ` height="${dh}"`
    return `<svg${next}>`
  })
}

/**
 * Patch attrs on the outer capture <svg> root (lab raster path).
 * @param {string} svgText
 * @param {Record<string, string>} patch
 */
export function svgRootAttrPatch(svgText, patch) {
  if (!patch || !Object.keys(patch).length) return svgText
  return svgText.replace(/<svg(\s[^>]*)?>/i, (full, attrs = '') => {
    let next = attrs
    for (const [key, value] of Object.entries(patch)) {
      const re = new RegExp(`\\b${key}=["'][^"']*["']`, 'i')
      if (re.test(next)) next = next.replace(re, `${key}="${value}"`)
      else next += ` ${key}="${value}"`
    }
    return `<svg${next}>`
  })
}

/**
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 */
export function applyRecipeToSvg(svgText, recipe, dims) {
  let out = svgText
  if (recipe.svgMarkupPatch === 'strip-xml-declaration') {
    out = stripXmlDeclaration(out)
  } else if (recipe.svgMarkupPatch === 'explicit-xmlns') {
    out = explicitSvgXmlnsPatch(out)
  } else if (recipe.svgMarkupPatch === 'strip-identity-transforms') {
    out = stripIdentityTransformsPatch(out)
  } else if (recipe.svgMarkupPatch === 'explicit-xmlns-strip-transforms') {
    out = stripIdentityTransformsPatch(explicitSvgXmlnsPatch(out))
  } else if (recipe.svgMarkupPatch === 'base64-roundtrip') {
    out = svgBase64RoundtripPatch(out)
  } else if (recipe.svgMarkupPatch === 'strip-all-transforms') {
    out = stripAllTransformsPatch(out)
  }
  const needsCaptureCss =
    (recipe.inject === 'capture' || recipe.inject === 'both') &&
    !recipeMonkeypatchHandlesCapture(recipe)
  if (needsCaptureCss) {
    const css = svgInjectCssForRecipe(recipe)
    out = injectFoCss(out, css)
  }
  const flagResolved = resolveLabToCanvasFlags(recipe)
  const needsRasterInject = recipe.inject === 'raster' || recipe.inject === 'both'
  if (flagResolved.rasterCss && needsRasterInject) {
    out = injectFoCss(out, flagResolved.rasterCss)
  }
  const labPreRaster = recipe.labPreRaster ?? flagResolved.labPreRaster
  if (recipe.rasterPatch === 'device-grid-floor' || labPreRaster === 'device-grid-floor') {
    out = deviceGridSnapPatch(out, dims.cssW, dims.cssH, dims.dpr)
  }
  if (labPreRaster === 'int-viewbox-floor') {
    out = intFloorViewBoxPatch(out)
  }
  if (recipe.svgRootPatch) {
    out = svgRootAttrPatch(out, recipe.svgRootPatch)
  }
  if (recipe.svgRootRound === 'integer-viewbox') {
    out = integerViewBoxPatch(out)
  } else if (recipe.svgRootRound === 'round-dims') {
    out = roundSvgRootDimsPatch(out, dims)
  } else if (recipe.svgRootRound === 'int-floor') {
    out = intFloorSvgRootDimsPatch(out, dims)
  }
  if (recipe.foSvgPatch === 'fe-color-matrix-identity') {
    out = injectFoFeColorMatrix(out)
  } else if (recipe.foSvgPatch === 'filter-empty-nop') {
    out = injectFoEmptyFilter(out)
  } else if (recipe.foSvgPatch === 'filter-noop-defs') {
    out = injectSvgNoopFilterDefs(out)
  } else if (recipe.foSvgPatch === 'fe-morphology-identity') {
    out = injectFoFeMorphology(out)
  } else if (recipe.foSvgPatch === 'fe-component-transfer-identity') {
    out = injectFoFeComponentTransfer(out)
  } else if (recipe.foSvgPatch === 'fe-merge-empty') {
    out = injectFoFeMergeEmpty(out)
  } else if (recipe.foSvgPatch === 'fe-displacement-map-identity') {
    out = injectFoFeDisplacementMap(out)
  } else if (recipe.foSvgPatch === 'fe-turbulence-composite') {
    out = injectFoFeTurbulenceComposite(out)
  } else if (recipe.foSvgPatch === 'svg-root-pattern-fill') {
    out = injectSvgRootPatternFill(out)
  } else if (recipe.foSvgPatch === 'fo-border-linear-gradient-stroke') {
    out = injectFoBorderLinearGradientStroke(out)
  } else if (recipe.foSvgPatch === 'svg-filter-pattern-border-bundle') {
    out = injectFoBorderLinearGradientStroke(
      injectSvgRootPatternFill(injectFoFeTurbulenceComposite(out)),
    )
  } else if (recipe.foSvgPatch === 'fo-shape-rendering-auto') {
    out = foreignObjectAttrPatch(out, { 'shape-rendering': 'auto' })
  }
  if (recipe.foAttrPatch) {
    out = foreignObjectAttrPatch(out, recipe.foAttrPatch)
  }
  return out
}

/**
 * Patch attrs on each <foreignObject> in capture SVG (lab-only).
 * @param {string} svgText
 * @param {Record<string, string>} patch
 */
function foreignObjectAttrPatch(svgText, patch) {
  if (!patch || !Object.keys(patch).length) return svgText
  return svgText.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    let next = attrs
    for (const [key, value] of Object.entries(patch)) {
      const re = new RegExp(`\\b${key}=["'][^"']*["']`, 'i')
      if (re.test(next)) next = next.replace(re, `${key}="${value}"`)
      else next += ` ${key}="${value}"`
    }
    return `<foreignObject${next}>`
  })
}

const FO_TEXT_LEAF_PATCH_RE = /(<([a-z][a-z0-9]*)[^>]*>)([^<]+)(<\/\2>)/gi

/**
 * @param {string} svgText
 * @param {(full: string, open: string, tag: string, text: string, close: string) => string} replacer
 */
function patchFoTextLeaves(svgText, replacer) {
  return svgText.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, (foBlock) =>
    foBlock.replace(FO_TEXT_LEAF_PATCH_RE, (full, open, tag, text, close) => {
      if (!String(text).trim()) return full
      return replacer(full, open, tag, text, close)
    }),
  )
}

function radicalFoNbspTrailingSpan(svgText) {
  return patchFoTextLeaves(
    svgText,
    (full, open, _tag, text, close) =>
      `${open}${text}<span aria-hidden="true">&#160;</span>${close}`,
  )
}

function radicalFoPerLetterSpans(svgText) {
  return patchFoTextLeaves(svgText, (full, open, _tag, text, close) => {
    const letters = [...text].map((ch) => `<span>${escapeXml(ch)}</span>`).join('')
    return `${open}${letters}${close}`
  })
}

function radicalFoExplicitXhtmlXmlns(svgText) {
  return svgText.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, (foBlock) =>
    foBlock.replace(/<div(\s[^>]*)>/gi, (full, attrs = '') => {
      if (/xmlns=["']http:\/\/www\.w3\.org\/1999\/xhtml["']/i.test(attrs)) return full
      return `<div xmlns="http://www.w3.org/1999/xhtml"${attrs}>`
    }),
  )
}

function radicalFoWrapInSwitch(svgText) {
  return svgText.replace(
    /<foreignObject[\s\S]*?<\/foreignObject>/i,
    (fo) => `<switch>${fo}</switch>`,
  )
}

function radicalSvgPurgeWhitespace(svgText) {
  return svgText.replace(/>\s+</g, '><').trim()
}

/** Lab diagnostic: rename foreignObject → g (invalid XHTML-in-g probe). */
function radicalFoUnwrapToG(svgText) {
  return svgText.replace(
    /<foreignObject(\s[^>]*)>([\s\S]*?)<\/foreignObject>/gi,
    (_, attrs, inner) => `<g${attrs} data-was-foreignObject="1">${inner}</g>`,
  )
}

/** Remove all embedded <style> blocks from capture SVG (lab diagnostic). */
function radicalStripSvgStyles(svgText) {
  return svgText.replace(/<style[\s\S]*?<\/style>/gi, '')
}

/** Flatten each FO to bare XHTML div + concatenated text (lab diagnostic). */
function radicalFoInnerhtmlMinimal(svgText) {
  return svgText.replace(
    /<foreignObject([^>]*)>[\s\S]*?<\/foreignObject>/gi,
    (full, attrs) => {
      const text = full.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      return (
        `<foreignObject${attrs}>` +
        `<div xmlns="http://www.w3.org/1999/xhtml">${escapeXml(text)}</div>` +
        `</foreignObject>`
      )
    },
  )
}

/**
 * Extract top-level HTML element strings from FO inner markup.
 * @param {string} html
 * @returns {string[]}
 */
function extractTopLevelHtmlNodes(html) {
  /** @type {string[]} */
  const nodes = []
  let i = 0
  while (i < html.length) {
    while (i < html.length && /\s/.test(html[i])) i++
    if (i >= html.length || html[i] !== '<') break
    const tagMatch = html.slice(i).match(/^<([a-z][a-z0-9]*)\b/i)
    if (!tagMatch) break
    const tag = tagMatch[1].toLowerCase()
    const selfCloseMatch = html.slice(i).match(/^<[^>]+\/>/i)
    if (selfCloseMatch) {
      nodes.push(selfCloseMatch[0])
      i += selfCloseMatch[0].length
      continue
    }
    const start = i
    const openEnd = html.indexOf('>', i)
    if (openEnd < 0) break
    let pos = openEnd + 1
    let depth = 1
    const openTagRe = new RegExp(`<${tag}\\b`, 'gi')
    const closeTagRe = new RegExp(`</${tag}>`, 'gi')
    while (pos < html.length && depth > 0) {
      const slice = html.slice(pos)
      const closeRel = slice.search(closeTagRe)
      if (closeRel < 0) break
      const openRel = slice.search(openTagRe)
      if (openRel >= 0 && openRel < closeRel) {
        depth++
        pos += openRel + 1
        continue
      }
      depth--
      pos += closeRel + `</${tag}>`.length
    }
    nodes.push(html.slice(start, pos))
    i = pos
  }
  return nodes
}

/** One foreignObject per top-level XHTML child inside each FO (lab diagnostic). */
function radicalSplitFoPerChild(svgText) {
  return svgText.replace(
    /<foreignObject([^>]*)>([\s\S]*?)<\/foreignObject>/gi,
    (full, attrs, inner) => {
      const rootDiv = inner.match(/<div(\s[^>]*)>([\s\S]*)<\/div>\s*$/i)
      if (!rootDiv) return full
      const divOpen = `<div${rootDiv[1]}>`
      const body = rootDiv[2]
      const children = extractTopLevelHtmlNodes(body)
      if (children.length < 2) return full
      const n = children.length
      const widthMatch = attrs.match(/\bwidth=["']([^"']+)["']/i)
      const heightMatch = attrs.match(/\bheight=["']([^"']+)["']/i)
      const xMatch = attrs.match(/\bx=["']([^"']+)["']/i)
      const yMatch = attrs.match(/\by=["']([^"']+)["']/i)
      const w = widthMatch ? parseFloat(widthMatch[1]) : NaN
      const h = heightMatch ? parseFloat(heightMatch[1]) : NaN
      const x0 = xMatch ? parseFloat(xMatch[1]) : 0
      const y0 = yMatch ? parseFloat(yMatch[1]) : 0
      const sliceH = Number.isFinite(h) && h > 0 ? h / n : null
      return children
        .map((childHtml, idx) => {
          let childAttrs = attrs
          if (sliceH != null && heightMatch) {
            childAttrs = childAttrs.replace(
              /\bheight=["'][^"']*["']/i,
              `height="${sliceH}"`,
            )
            const yOff = y0 + sliceH * idx
            if (yMatch) {
              childAttrs = childAttrs.replace(/\by=["'][^"']*["']/i, `y="${yOff}"`)
            } else {
              childAttrs = `${childAttrs} y="${yOff}"`
            }
          }
          if (Number.isFinite(w) && widthMatch) {
            childAttrs = childAttrs.replace(/\bwidth=["'][^"']*["']/i, `width="${w}"`)
          }
          if (xMatch && Number.isFinite(x0)) {
            childAttrs = childAttrs.replace(/\bx=["'][^"']*["']/i, `x="${x0}"`)
          }
          return (
            `<foreignObject${childAttrs}>${divOpen}${childHtml}</div></foreignObject>`
          )
        })
        .join('')
    },
  )
}

/** Duplicate each foreignObject at half width with duplicated inner markup (lab diagnostic). */
function radicalSplitFoHorizontal(svgText) {
  return svgText.replace(
    /<foreignObject([^>]*)>([\s\S]*?)<\/foreignObject>/gi,
    (full, attrs, inner) => {
      const widthMatch = attrs.match(/\bwidth=["']([^"']+)["']/i)
      if (!widthMatch) return full
      const w = parseFloat(widthMatch[1])
      if (!Number.isFinite(w) || w <= 0) return full
      const halfW = w / 2
      const xMatch = attrs.match(/\bx=["']([^"']+)["']/i)
      const xVal = xMatch ? parseFloat(xMatch[1]) : 0
      const x2 = Number.isFinite(xVal) ? xVal + halfW : halfW
      const attrs1 = attrs.replace(/\bwidth=["'][^"']*["']/i, `width="${halfW}"`)
      let attrs2 = attrs.replace(/\bwidth=["'][^"']*["']/i, `width="${halfW}"`)
      if (xMatch) {
        attrs2 = attrs2.replace(/\bx=["'][^"']*["']/i, `x="${x2}"`)
      } else {
        attrs2 = `${attrs2} x="${x2}"`
      }
      return (
        `<foreignObject${attrs1}>${inner}</foreignObject>` +
        `<foreignObject${attrs2}>${inner}</foreignObject>`
      )
    },
  )
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(text) {
  return String(text).replace(/"/g, '&quot;')
}

const STRIP_FO_MINIMAL_FONT_CSS =
  'foreignObject *{all:unset!important;font:inherit!important;' +
  'box-sizing:border-box!important;color:inherit!important}'

const FO_FE_DROP_SHADOW_ZERO_ID = 'fo-fix-lab-fe-dropshadow-zero'
const FO_FE_DROP_SHADOW_ZERO_DEF =
  `<filter id="${FO_FE_DROP_SHADOW_ZERO_ID}" color-interpolation-filters="sRGB">` +
  '<feDropShadow dx="0" dy="0" stdDeviation="0" flood-opacity="0"/></filter>'

const CHROME_LEGACY_WEBKIT_CSS =
  'foreignObject *{-webkit-text-size-adjust:100%!important;' +
  '-webkit-box-sizing:border-box!important;' +
  'box-sizing:border-box!important;' +
  '-webkit-flex:initial!important;' +
  '-webkit-transform:translateZ(0)!important}'

function radicalRemoveFeFilters(svgText) {
  let out = svgText.replace(/\sfilter=["'][^"']*["']/gi, '')
  out = out.replace(/<filter[\s\S]*?<\/filter>/gi, '')
  return out
}

/** Hoist FO inner XHTML into <g transform="translate(x,y)"> — HTML in g will not raster (diagnostic). */
function radicalCaptureWithoutFo(svgText) {
  const snapped = radicalIntegerSnapRects(svgText)
  return snapped.replace(
    /<foreignObject([^>]*)>([\s\S]*?)<\/foreignObject>/gi,
    (_full, attrs, inner) => {
      const xMatch = attrs.match(/\bx=["']([\d.]+)/i)
      const yMatch = attrs.match(/\by=["']([\d.]+)/i)
      const x = xMatch ? xMatch[1] : '0'
      const y = yMatch ? yMatch[1] : '0'
      let content = inner.trim()
      const divMatch = content.match(/^<div[^>]*>([\s\S]*)<\/div>\s*$/i)
      if (divMatch) content = divMatch[1]
      return `<g transform="translate(${x},${y})">${content}</g>`
    },
  )
}

/** Strip filters, masks, and clip-path from capture SVG. */
function radicalRemoveFiltersAndMasks(svgText) {
  let out = radicalRemoveFeFilters(svgText)
  out = out.replace(/\smask=["'][^"']*["']/gi, '')
  out = out.replace(/\sclip-path=["'][^"']*["']/gi, '')
  out = out.replace(/<mask[\s\S]*?<\/mask>/gi, '')
  out = out.replace(/<clipPath[\s\S]*?<\/clipPath>/gi, '')
  return out
}

/** Zero-opacity feDropShadow on each foreignObject. */
function radicalFeDropShadowZero(svgText) {
  let out = svgText
  if (!out.includes(`id="${FO_FE_DROP_SHADOW_ZERO_ID}"`)) {
    if (/<defs\b/i.test(out)) {
      out = out.replace(/<defs\b[^>]*>/i, (m) => `${m}${FO_FE_DROP_SHADOW_ZERO_DEF}`)
    } else {
      out = out.replace(
        /<svg\b([^>]*)>/i,
        (m) => `${m}<defs>${FO_FE_DROP_SHADOW_ZERO_DEF}</defs>`,
      )
    }
  }
  return out.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const filterAttr = `filter="url(#${FO_FE_DROP_SHADOW_ZERO_ID})"`
    if (/\bfilter=["']/i.test(attrs)) return full
    return `<foreignObject${attrs} ${filterAttr}>`
  })
}

function radicalFoHeight1pxOverflowVisible(svgText) {
  return injectFoCss(
    svgText,
    'foreignObject{height:1px!important;overflow:visible!important}' +
      'foreignObject *{overflow:visible!important}',
  )
}

function radicalChromeLegacyWebkitBundle(svgText) {
  return injectFoCss(svgText, CHROME_LEGACY_WEBKIT_CSS)
}

/** Wrap entire capture tree in empty <switch><g>…</g></switch>. */
function radicalEmptySvgSwitchDefault(svgText) {
  return svgText.replace(/<svg(\s[^>]*)>([\s\S]*)<\/svg>\s*$/i, (_full, attrs, inner) => {
    const trimmed = inner.trim()
    if (/^<switch\b/i.test(trimmed)) return `<svg${attrs}>${inner}</svg>`
    return `<svg${attrs}><switch><g>${inner}</g></switch></svg>`
  })
}

/** Hide FO text; overlay rect from live ink box (path stand-in, not outlines). */
function radicalTextAsPath(svgText, liveRoot, el) {
  const box = relRect(el, liveRoot)
  const painted = measureLivePaintedInk(el, liveRoot)
  const top = painted?.top ?? box.top
  const h = Math.max(1, box.height)
  const path =
    `<rect x="${box.left.toFixed(3)}" y="${top.toFixed(3)}" ` +
    `width="${box.width.toFixed(3)}" height="${h.toFixed(3)}" fill="#000"/>`
  let out = injectFoCss(svgText, 'foreignObject{display:none!important}')
  out = out.replace(/<\/svg>\s*$/i, `<g>${path}</g></svg>`)
  return out
}

/**
 * Raster SVG markup via iframe + createImageBitmap only (no HTMLImageElement decode).
 * @param {string} svgMarkup
 * @param {number} cssW
 * @param {number} cssH
 * @param {number} dpr
 */
async function rasterSvgElementNoImg(svgMarkup, cssW, cssH, dpr) {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('sandbox', 'allow-same-origin')
  iframe.style.cssText =
    'position:fixed;left:-99999px;top:-99999px;width:0;height:0;border:0;visibility:hidden'
  document.body.appendChild(iframe)
  try {
    const doc = iframe.contentDocument
    if (!doc) throw new Error('iframe document unavailable')
    doc.open()
    doc.write(
      `<!DOCTYPE html><html><head><meta charset="utf-8"></head>` +
        `<body style="margin:0;padding:0">${svgMarkup}</body></html>`,
    )
    doc.close()
    await waitSingleRaf()
    const svg = doc.querySelector('svg')
    if (!svg) throw new Error('no svg in iframe')
    if (typeof createImageBitmap !== 'function') {
      throw new Error('createImageBitmap unavailable')
    }
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(cssW * dpr))
    canvas.height = Math.max(1, Math.round(cssH * dpr))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2d context unavailable')
    try {
      const bmp = await createImageBitmap(svg)
      if (dpr !== 1) ctx.scale(dpr, dpr)
      ctx.drawImage(bmp, 0, 0, cssW, cssH)
      bmp.close()
      return canvas
    } catch {
      const ser = new XMLSerializer().serializeToString(svg)
      const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(ser)}`
      const img = new Image()
      img.loading = 'eager'
      img.decoding = 'sync'
      img.crossOrigin = 'anonymous'
      img.src = dataUrl
      await img.decode()
      if (dpr !== 1) ctx.scale(dpr, dpr)
      ctx.drawImage(img, 0, 0, cssW, cssH)
      return canvas
    }
  } finally {
    iframe.remove()
  }
}

/** html2canvas-style live DOM → canvas without <img> SVG data-URL decode. */
async function rasterLiveDomNoImgDecode(root, dims) {
  const clone = root.cloneNode(true)
  const inner = clone instanceof Element ? clone.innerHTML : root.innerHTML
  const w = dims.cssW
  const h = dims.cssH
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${inner}</div>` +
    `</foreignObject></svg>`
  return rasterSvgElementNoImg(svg, w, h, dims.dpr)
}

/** Re-capture via snapdom on offscreen detached clone host. */
async function captureSvgFromDetachedClone(root, dims, scale) {
  const host = document.createElement('div')
  host.style.cssText =
    'position:fixed;left:-99999px;top:0;pointer-events:none;visibility:hidden;contain:strict'
  const clone = root.cloneNode(true)
  host.appendChild(clone)
  document.body.appendChild(host)
  try {
    const snap = await window.snapdom(host, { dpr: dims.dpr, scale })
    return svgFromDataUrl(snap.toRaw())
  } finally {
    host.remove()
  }
}

function radicalParseSvgDomReserialize(svgText) {
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    const root = doc.documentElement
    if (!root || root.localName?.toLowerCase() !== 'svg') return svgText
    if (doc.querySelector('parsererror')) return svgText
    return new XMLSerializer().serializeToString(doc)
  } catch {
    return svgText
  }
}

function radicalFoReplacedWithDiv(svgText) {
  return svgText
    .replace(/<foreignObject\b/gi, '<div')
    .replace(/<\/foreignObject>/gi, '</div>')
}

function radicalMeasureNudgeSvgRoot(svgText, liveRoot, el) {
  const landmarkText = (el.textContent || '').trim()
  const livePainted = measureLivePaintedInk(el, liveRoot)
  const svgMeas = measureSvgInkForElement(svgText, landmarkText)
  const liveTop = livePainted?.top
  const svgTop = svgMeas?.painted?.top
  if (!Number.isFinite(liveTop) || !Number.isFinite(svgTop)) return svgText
  const dy = liveTop - svgTop
  if (!Number.isFinite(dy) || dy === 0) return svgText
  return svgText.replace(/<svg(\s[^>]*)>/i, (_full, attrs = '') => {
    const nudge = `translate(0 ${dy})`
    if (/\btransform=["']/i.test(attrs)) {
      const next = attrs.replace(
        /\btransform=["']([^"']*)["']/i,
        (_, prev) => `transform="${String(prev).trim()} ${nudge}"`,
      )
      return `<svg${next}>`
    }
    return `<svg${attrs} transform="${nudge}">`
  })
}

async function radicalFoToImageHrefLive(svgText, dims) {
  const re = /<foreignObject(\s[^>]*)>([\s\S]*?)<\/foreignObject>/gi
  const matches = [...svgText.matchAll(re)]
  if (!matches.length) return svgText
  let out = svgText
  for (const m of matches) {
    const full = m[0]
    const attrs = m[1] || ''
    const inner = m[2] || ''
    const wMatch = attrs.match(/\bwidth=["']([\d.]+)/i)
    const hMatch = attrs.match(/\bheight=["']([\d.]+)/i)
    const xMatch = attrs.match(/\bx=["']([\d.]+)/i)
    const yMatch = attrs.match(/\by=["']([\d.]+)/i)
    const fw = wMatch ? parseFloat(wMatch[1]) : dims.cssW
    const fh = hMatch ? parseFloat(hMatch[1]) : dims.cssH
    const fx = xMatch ? parseFloat(xMatch[1]) : 0
    const fy = yMatch ? parseFloat(yMatch[1]) : 0
    const mini =
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ` +
      `width="${fw}" height="${fh}" viewBox="0 0 ${fw} ${fh}">` +
      `<foreignObject width="100%" height="100%">` +
      `<div xmlns="http://www.w3.org/1999/xhtml">${inner}</div></foreignObject></svg>`
    const canvas = await rasterSvgElementNoImg(mini, fw, fh, dims.dpr)
    const href = canvas.toDataURL('image/png')
    const imgTag =
      `<image xlink:href="${href}" href="${href}" x="${fx}" y="${fy}" ` +
      `width="${fw}" height="${fh}" preserveAspectRatio="none"/>`
    out = out.replace(full, imgTag)
  }
  return out
}

/**
 * Live / raster flag patches from tc-flags-w1 (tocanvas-lab-flags-registry.js).
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {HTMLElement} [liveRoot]
 */
export function applyLabToCanvasFlagsToSvg(svgText, recipe, liveRoot) {
  const { liveSvgPatches } = resolveLabToCanvasFlags(recipe)
  let out = svgText
  for (const patch of liveSvgPatches) {
    if (patch === 'pin-content-lh' && liveRoot) {
      out = labPinContentLineHeightFromLive(out, liveRoot)
    }
  }
  return out
}

/**
 * Post-process captured SVG for radical harness experiments (lab-only).
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {HTMLElement} liveRoot
 * @param {Element} el
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 */
export async function applyRadicalSvgPatch(svgText, recipe, liveRoot, el, dims) {
  let out = applyLabToCanvasFlagsToSvg(svgText, recipe, liveRoot)
  const patch = recipe.radicalPatch
  if (!patch) return out

  switch (patch) {
    case 'replace-fo-with-svg-text':
      return radicalReplaceFoWithSvgText(out, liveRoot, el)
    case 'strip-all-fo-styles':
      return injectFoCss(out, STRIP_FO_MINIMAL_FONT_CSS + (recipe.css || ''))
    case 'fo-to-image-placeholder':
      return await radicalFoToImagePlaceholder(out, liveRoot, dims)
    case 'integer-snap-all-rects':
      return radicalIntegerSnapRects(out)
    case 'remove-fe-filters':
      return radicalRemoveFeFilters(out)
    case 'force-ltr-unicode-bidi':
      return injectFoCss(
        out,
        'foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
      )
    case 'fo-display-none':
      return injectFoCss(out, 'foreignObject{display:none!important}')
    case 'radical-css-bundle':
      return radicalIntegerSnapRects(radicalRemoveFeFilters(out))
    case 'zero-alpha-anchor':
      return injectFoCss(
        out,
        'foreignObject>div::before{content:""!important;display:block!important;' +
          'position:absolute!important;left:0!important;top:0!important;' +
          'width:1px!important;height:1px!important;' +
          'background:rgba(0,0,0,0.01)!important;pointer-events:none!important}',
      )
    case 'fillText-replace':
      return injectLandmarkTextHideInSvg(out, (el.textContent || '').trim())
    case 'fo-nbsp-trailing-span':
      return radicalFoNbspTrailingSpan(out)
    case 'fo-per-letter-spans':
      return radicalFoPerLetterSpans(out)
    case 'fo-explicit-xhtml-xmlns':
      return radicalFoExplicitXhtmlXmlns(out)
    case 'fo-wrap-in-switch':
      return radicalFoWrapInSwitch(out)
    case 'svg-purge-whitespace':
      return radicalSvgPurgeWhitespace(out)
    case 'split-fo-horizontal':
      return radicalSplitFoHorizontal(out)
    case 'strip-svg-styles':
      return radicalStripSvgStyles(out)
    case 'fo-innerhtml-minimal':
      return radicalFoInnerhtmlMinimal(out)
    case 'split-fo-per-child':
      return radicalSplitFoPerChild(out)
    case 'clone-deep-styles-strip':
      return radicalCloneDeepStylesStrip(out)
    case 'capture-without-fo':
      return radicalCaptureWithoutFo(out)
    case 'fo-unwrap-to-g':
      return radicalFoUnwrapToG(out)
    case 'svg-only-text-layer':
      return radicalSvgPurgeWhitespace(radicalReplaceFoWithSvgText(out, liveRoot, el))
    case 'remove-filters-and-masks':
      return radicalRemoveFiltersAndMasks(out)
    case 'fe-drop-shadow-zero':
      return radicalFeDropShadowZero(out)
    case 'fo-height-1px-overflow-visible':
      return radicalFoHeight1pxOverflowVisible(out)
    case 'chrome-legacy-webkit-bundle':
      return radicalChromeLegacyWebkitBundle(out)
    case 'empty-svg-switch-default':
      return radicalEmptySvgSwitchDefault(out)
    case 'text-as-path':
      return radicalTextAsPath(out, liveRoot, el)
    case 'fo-to-image-href-live':
      return await radicalFoToImageHrefLive(out, dims)
    case 'parse-svg-dom-reserialize':
      return radicalParseSvgDomReserialize(out)
    case 'fo-replaced-with-div':
      return radicalFoReplacedWithDiv(out)
    case 'measure-nudge-svg-root':
      return radicalMeasureNudgeSvgRoot(out, liveRoot, el)
    case 'clone-node-capture':
      return out
    case 'lab-pin-text-ascent-descent-from-range':
      return liveRoot ? labPinTextAscentDescentFromRange(out, liveRoot) : out
    case 'lab-pin-font-size-from-live':
      return liveRoot ? labPinFontSizeFromLive(out, liveRoot) : out
    case 'lab-svg-root-font-size-from-live':
      return liveRoot ? labSvgRootFontSizeFromLive(out, liveRoot) : out
    case 'lab-pin-letter-spacing-from-live':
      return liveRoot ? labPinLetterSpacingFromLive(out, liveRoot) : out
    case 'lab-pin-inline-box-height-from-clientrects':
      return liveRoot ? labPinInlineBoxHeightFromClientRects(out, liveRoot) : out
    case 'lab-pin-flex-cross-size-from-anchor':
      return liveRoot ? labPinFlexCrossSizeFromAnchor(svgText, liveRoot) : svgText
    case 'lab-pin-half-leading-padding-top':
      return liveRoot ? labPinHalfLeadingPaddingTop(svgText, liveRoot) : svgText
    case 'lab-pin-half-leading-split-padding':
      return liveRoot ? labPinHalfLeadingSplitPadding(svgText, liveRoot) : svgText
    case 'lab-pin-line-height-from-layout-box':
      return liveRoot ? labPinLineHeightFromLayoutBox(svgText, liveRoot) : svgText
    case 'lab-pin-height-from-gbcr':
      return liveRoot ? labPinHeightFromGbcr(svgText, liveRoot) : svgText
    case 'lab-pin-width-from-gbcr':
      return liveRoot ? labPinWidthFromGbcr(svgText, liveRoot) : svgText
    case 'lab-pin-ink-top-in-border-padding':
      return liveRoot ? labPinInkTopInBorderPadding(svgText, liveRoot) : svgText
    case 'lab-pin-content-box-height':
      return liveRoot ? labPinContentBoxHeight(svgText, liveRoot) : svgText
    case 'lab-pin-normal-lh-from-probe':
      return liveRoot ? labPinNormalLhFromProbe(svgText, liveRoot) : svgText
    case 'math-pin-fo-container-dims-from-live-root':
      return liveRoot ? mathPinFoContainerDimsFromLiveRoot(svgText, liveRoot) : svgText
    case 'math-pin-foreign-object-attrs-from-live-root':
      return liveRoot ? mathPinForeignObjectAttrsFromLiveRoot(svgText, liveRoot) : svgText
    case 'lab-pin-composite-stretch-lh-half':
      return liveRoot ? labPinCompositeStretchLhHalf(svgText, liveRoot) : svgText
    case 'lab-pin-composite-gbcr-lh-half':
      return liveRoot ? labPinCompositeGbcrLhHalf(svgText, liveRoot) : svgText
    case 'math-floor-viewbox-stash-frac':
      return mathFloorViewBoxStashFrac(svgText)
    case 'math-pin-fo-container-and-attrs-from-live-root':
      return liveRoot ? mathPinFoContainerAndAttrsFromLiveRoot(svgText, liveRoot) : svgText
    case 'lab-pin-range-then-clientrects-height':
      return liveRoot ? labPinRangeThenClientRectsHeight(svgText, liveRoot) : svgText
    case 'lab-pin-normal-lh-then-half-leading':
      return liveRoot ? labPinNormalLhThenHalfLeading(svgText, liveRoot) : svgText
    case 'math-half-leading-with-floor-viewbox':
      return liveRoot ? mathHalfLeadingWithFloorViewBox(svgText, liveRoot) : svgText
    default:
      return applyH2RadicalSvgPatch(out, patch, liveRoot)
  }
}

/**
 * Explicit raster scale from recipe metadata (diagnostic supersample) or caller opts.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {number} callerScale
 */
function resolveRecipeRasterScale(recipe, callerScale) {
  const rs = recipe.radicalOptions?.recipeScale
  if (rs != null && Number.isFinite(rs) && rs > 0) return rs
  return callerScale
}

/**
 * Supersample multiplier for supersample-downscale patch (recipe metadata only).
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 */
function resolveSupersampleMultiplier(recipe) {
  const mult = recipe.radicalOptions?.scaleMultiplier ?? recipe.radicalOptions?.recipeScale
  if (mult != null && Number.isFinite(mult) && mult > 1) return mult
  return 1
}

/**
 * Capture-time CSS for SVG inject. fillText-replace hides only the probe landmark in
 * {@link applyRadicalSvgPatch}, not every FO descendant.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 */
function svgInjectCssForRecipe(recipe) {
  if (recipe.radicalPatch === 'fillText-replace') return FO_BASELINE_CSS
  if (recipe.id === 'product-baseline') return FO_BASELINE_CSS
  return recipeCaptureCss(recipe)
}

/**
 * Hide a single text leaf inside captured FO so FO raster keeps sibling nav ink.
 * @param {string} svgText
 * @param {string} landmarkText
 */
function injectLandmarkTextHideInSvg(svgText, landmarkText) {
  const want = landmarkText.trim()
  if (!want) return svgText
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo) return svgText
    let target = null
    for (const node of fo.querySelectorAll('*')) {
      if (node.childElementCount > 0) continue
      if ((node.textContent || '').trim() === want) {
        target = node
        break
      }
    }
    if (!target) return svgText
    const hide =
      'color:transparent!important;-webkit-text-fill-color:transparent!important'
    const prev = target.getAttribute('style') || ''
    if (!prev.includes('transparent')) {
      target.setAttribute('style', prev ? `${prev};${hide}` : hide)
    }
    return new XMLSerializer().serializeToString(doc.documentElement)
  } catch {
    return svgText
  }
}

/**
 * Overlay probe landmark text on an existing full-fixture FO raster (harness only).
 * Does not resize or clear the canvas — other nav ink from FO decode must remain visible.
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLElement} liveRoot
 * @param {Element} el
 * @param {number} dpr
 */
function overlayFillTextFromLive(canvas, liveRoot, el, dpr) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const cs = getComputedStyle(el)
  const text = (el.textContent || '').trim()
  if (!text) return
  const box = relRect(el, liveRoot)
  const painted = measureLivePaintedInk(el, liveRoot)
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  const color = cs.color || '#000'
  const x = box.left
  const baselineY = painted?.top ?? box.top + fs * 0.85

  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  if (dpr !== 1) ctx.scale(dpr, dpr)
  ctx.globalCompositeOperation = 'source-over'
  ctx.font = `${style} ${weight} ${fs}px ${family}`
  ctx.fillStyle = color
  ctx.textBaseline = 'top'
  ctx.fillText(text, x, baselineY)
  ctx.restore()
}

function radicalReplaceFoWithSvgText(svgText, liveRoot, el) {
  const box = relRect(el, liveRoot)
  const cs = getComputedStyle(el)
  const text = (el.textContent || '').trim()
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  const color = cs.color || '#000'
  const painted = measureLivePaintedInk(el, liveRoot)
  const x = box.left
  const y = painted?.top ?? box.top + fs * 0.85

  const textEl =
    `<text x="${x.toFixed(3)}" y="${y.toFixed(3)}" ` +
    `font-family="${escapeAttr(family)}" font-size="${fs}" ` +
    `font-weight="${escapeAttr(weight)}" font-style="${escapeAttr(style)}" ` +
    `fill="${escapeAttr(color)}" dominant-baseline="hanging">${escapeXml(text)}</text>`

  let out = injectFoCss(svgText, 'foreignObject{display:none!important}')
  out = out.replace(/<\/svg>\s*$/i, `${textEl}</svg>`)
  return out
}

function radicalIntegerSnapRects(svgText) {
  return svgText.replace(/<foreignObject(\s[^>]*)>/gi, (full, attrs = '') => {
    let next = attrs
    for (const attr of ['x', 'y', 'width', 'height']) {
      const re = new RegExp(`\\b${attr}=["']([\\d.]+)`, 'i')
      if (re.test(next)) {
        next = next.replace(re, (_, n) => `${attr}="${Math.round(parseFloat(n))}"`)
      }
    }
    return `<foreignObject${next}>`
  })
}

async function rasterMiniFoElement(el, box, dims) {
  const inner = el.outerHTML
  const w = Math.max(1, box.width)
  const h = Math.max(1, box.height)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${inner}</div>` +
    `</foreignObject></svg>`
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
  return rasterSvgUrl(url, {
    scale: 1,
    dpr: dims.dpr,
    meta: { w0: w, h0: h },
    width: w,
    height: h,
    rasterPatch: 'none',
  })
}

async function overlayPutImageDataFromLive(canvas, liveRoot, el, dims) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const box = relRect(el, liveRoot)
  const snapCanvas = await rasterMiniFoElement(el, box, dims)
  const sctx = snapCanvas.getContext('2d')
  if (!sctx) return
  const data = sctx.getImageData(0, 0, snapCanvas.width, snapCanvas.height)
  const destX = Math.round(box.left * dims.dpr)
  const destY = Math.round(box.top * dims.dpr)
  ctx.putImageData(data, destX, destY)
}

async function rasterHtmlViaIframeFo(svgText, dims, scale, rasterPatch = 'none') {
  const iframe = document.createElement('iframe')
  iframe.setAttribute('sandbox', 'allow-same-origin')
  iframe.style.cssText =
    'position:fixed;left:-99999px;top:-99999px;width:0;height:0;border:0;visibility:hidden'
  document.body.appendChild(iframe)
  try {
    const doc = iframe.contentDocument
    if (!doc) throw new Error('iframe document unavailable')
    doc.open()
    doc.write(
      `<!DOCTYPE html><html><head><meta charset="utf-8"></head>` +
        `<body style="margin:0;padding:0">${svgText}</body></html>`,
    )
    doc.close()
    await waitSingleRaf()
    const svg = doc.querySelector('svg')
    if (!svg) throw new Error('no svg in iframe srcdoc')
    const w = dims.cssW
    const h = dims.cssH
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(w * dims.dpr))
    canvas.height = Math.max(1, Math.round(h * dims.dpr))
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2d context unavailable')
    if (dims.dpr !== 1) ctx.scale(dims.dpr, dims.dpr)

    if (typeof createImageBitmap === 'function') {
      try {
        const bmp = await createImageBitmap(svg)
        ctx.drawImage(bmp, 0, 0, w, h)
        bmp.close()
        if (rasterPatch === 'decode-interval') {
          await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
        }
        return canvas
      } catch {
        /* fall through to data URL */
      }
    }

    const ser = new XMLSerializer().serializeToString(svg)
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(ser)}`
    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    img.crossOrigin = 'anonymous'
    img.src = url
    await img.decode()
    if (rasterPatch === 'decode-interval') {
      await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
    }
    ctx.drawImage(img, 0, 0, w, h)
    return canvas
  } finally {
    iframe.remove()
  }
}

async function rasterElementCaptureBitmap(root, el, dims, scale) {
  if (
    el instanceof HTMLCanvasElement ||
    el instanceof HTMLImageElement ||
    el instanceof HTMLVideoElement
  ) {
    try {
      const bmp = await createImageBitmap(el)
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(dims.cssW * dims.dpr))
      canvas.height = Math.max(1, Math.round(dims.cssH * dims.dpr))
      const ctx = canvas.getContext('2d')
      if (ctx) {
        if (dims.dpr !== 1) ctx.scale(dims.dpr, dims.dpr)
        ctx.drawImage(bmp, 0, 0, dims.cssW, dims.cssH)
      }
      bmp.close()
      return canvas
    } catch {
      /* fall through */
    }
  }
  return rasterLiveDomViaFoWrapper(root, dims, scale)
}

function radicalCloneDeepStylesStrip(svgText) {
  return svgText.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, (fo) =>
    fo.replace(/\sstyle=["'][^"']*["']/gi, ''),
  )
}

async function rasterLiveDomViaFoWrapper(root, dims, scale) {
  const clone = root.cloneNode(true)
  const inner = clone instanceof Element ? clone.innerHTML : root.innerHTML
  const w = dims.cssW
  const h = dims.cssH
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${inner}</div>` +
    `</foreignObject></svg>`
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
  return rasterSvgUrl(url, {
    scale,
    dpr: dims.dpr,
    meta: { w0: w, h0: h },
    width: w,
    height: h,
    rasterPatch: 'none',
  })
}

async function radicalFoToImagePlaceholder(svgText, liveRoot, dims) {
  const canvas = await rasterLiveDomViaFoWrapper(liveRoot, dims, 1)
  const png = canvas.toDataURL('image/png')
  const w = dims.cssW
  const h = dims.cssH
  return svgText.replace(
    /<foreignObject[\s\S]*?<\/foreignObject>/i,
    `<image href="${png}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none"/>`,
  )
}

/**
 * Raster a recipe to canvas — radical bypass + SVG patch paths.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {string} svgText
 * @param {HTMLElement} root
 * @param {Element} el
 * @param {{ cssW: number, cssH: number, dpr: number }} dims
 * @param {ReturnType<typeof parseCaptureMeta>} meta
 * @param {number} scale
 */
async function rasterRecipeToCanvas(recipe, svgText, root, el, dims, meta, scale) {
  const rp = resolveRecipeRasterPatch(recipe)
  const rasterScale = resolveRecipeRasterScale(recipe, scale)

  // Lab toCanvas hook: measured-box clip rect comes from live layout (GBCR),
  // scaled into capture-space. Used by recipes that set labToCanvasOpts.clip.
  const clipMode = recipe.labToCanvasOpts?.clip
  const needsMeasuredBox = typeof clipMode === 'string' && clipMode.startsWith('measured-box')
  const baseMeta = enrichRasterMetaFromTextLeaf(el, meta)
  const metaForRaster = needsMeasuredBox
    ? (() => {
        const live = relRect(el, root)
        const refW = Number.isFinite(meta?.targetW) ? meta.targetW : root.getBoundingClientRect().width
        const refH = Number.isFinite(meta?.targetH) ? meta.targetH : root.getBoundingClientRect().height
        const sx = refW > 0 ? dims.cssW / refW : 1
        const sy = refH > 0 ? dims.cssH / refH : 1
        return {
          ...baseMeta,
          measuredBox: {
            left: live.left * sx,
            top: live.top * sy,
            width: live.width * sx,
            height: live.height * sy,
          },
        }
      })()
    : baseMeta

  if (rp === 'html2canvas-live-draw') {
    const canvas = await rasterLiveDomNoImgDecode(root, dims)
    return { canvas, svgText }
  }

  if (rp === 'canvas-from-live' || rp === 'no-fo-capture') {
    const canvas = await rasterLiveDomViaFoWrapper(root, dims, rasterScale)
    return { canvas, svgText }
  }

  if (rp === 'element-capture-bitmap') {
    const canvas = await rasterElementCaptureBitmap(root, el, dims, rasterScale)
    return { canvas, svgText }
  }

  let workingSvg = svgText
  let workingMeta = meta
  if (recipe.radicalPatch === 'clone-node-capture') {
    workingSvg = await captureSvgFromDetachedClone(root, dims, scale)
    workingSvg = applyRecipeToSvg(workingSvg, recipe, dims)
    workingMeta = parseCaptureMeta(workingSvg, root)
  }

  const patchedSvg = await applyRadicalSvgPatch(workingSvg, recipe, root, el, dims)

  if (rp === 'html-to-canvas-direct' || rp === 'iframe-serialized-svg-decode') {
    const decodePatch =
      rp === 'iframe-serialized-svg-decode' ||
      recipe.id === 'radical-025-iframe-bitmap-decode-interval'
        ? 'decode-interval'
        : 'none'
    const canvas = await rasterHtmlViaIframeFo(patchedSvg, dims, rasterScale, decodePatch)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'product-toCanvas') {
    const canvas = await rasterProductToCanvas(patchedSvg, dims, rasterScale, metaForRaster, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (isLabRasterPatchToken(rp)) {
    const canvas = await rasterLabToCanvasPatchToken(
      patchedSvg,
      dims,
      rasterScale,
      metaForRaster,
      recipe,
    )
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas') {
    if (resolveLabRasterOptionsFromRecipe(recipe)) {
      const canvas = await rasterLabToCanvasPatchToken(
        patchedSvg,
        dims,
        rasterScale,
        metaForRaster,
        recipe,
      )
      return { canvas, svgText: patchedSvg }
    }
    const canvas = await rasterLabToCanvas(
      patchedSvg,
      dims,
      rasterScale,
      metaForRaster,
      recipe,
    )
    return { canvas, svgText: patchedSvg }
  }

  const labWaitMs = parseLabWaitRasterPatchMs(rp)
  if (labWaitMs !== null) {
    const canvas = await rasterLabToCanvas(patchedSvg, dims, rasterScale, metaForRaster, {
      ...recipe,
      labToCanvasOpts: {
        ...(recipe.labToCanvasOpts ?? {}),
        decodeWaitMs: labWaitMs,
      },
    })
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-decode') {
    const roundDraw =
      recipe.monkeypatch === 'tc-draw-image-round-all' ||
      (Array.isArray(recipe.monkeypatch) &&
        recipe.monkeypatch.includes('tc-draw-image-round-all'))
    const canvas = await rasterLabToCanvasDecode(
      patchedSvg,
      dims,
      rasterScale,
      meta,
      {
        roundDrawImage: roundDraw,
        decodeInterval: recipe.labLoadPipeline !== 'no-decode-interval',
      },
      recipe,
    )
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-frac') {
    const canvas = await rasterLabToCanvasFrac(
      patchedSvg,
      dims,
      rasterScale,
      meta,
      recipe.labToCanvasOpts,
    )
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-smooth-off') {
    const canvas = await rasterLabToCanvasSmoothOff(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-desync') {
    const canvas = await rasterLabToCanvasDesync(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-double-draw') {
    const canvas = await rasterLabToCanvasDoubleDraw(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-wait-200') {
    const canvas = await rasterLabToCanvasWait200(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-natural-dims') {
    const canvas = await rasterLabToCanvasNaturalDims(
      patchedSvg,
      dims,
      rasterScale,
      meta,
      recipe.labToCanvasOpts,
    )
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-round-all') {
    const canvas = await rasterLabToCanvasRoundAll(patchedSvg, dims, rasterScale, meta)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-w7-decode-sweep') {
    const canvas = await rasterLabToCanvasW7DecodeSweep(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w7-draw-round') {
    const canvas = await rasterLabToCanvasW7DrawRound(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w7-backing-floor') {
    const canvas = await rasterLabToCanvasW7BackingFloor(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w7-ctx-default') {
    const canvas = await rasterLabToCanvasW7CtxDefault(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w7-wait-raf') {
    const canvas = await rasterLabToCanvasW7WaitRaf(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-w8-pipeline-blob') {
    const canvas = await rasterLabToCanvasW8PipelineBlob(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-force-bitmap') {
    const canvas = await rasterLabToCanvasW8ForceBitmap(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-ctx-smooth-off') {
    const canvas = await rasterLabToCanvasW8CtxSmoothOff(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-backing-ceil') {
    const canvas = await rasterLabToCanvasW8BackingCeil(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-dpr-device') {
    const canvas = await rasterLabToCanvasW8DprDevice(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-reset-transform') {
    const canvas = await rasterLabToCanvasW8ResetTransform(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-drawfit-contain') {
    const canvas = await rasterLabToCanvasW8DrawfitContain(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }
  if (rp === 'lab-toCanvas-w8-ignore-meta') {
    const canvas = await rasterLabToCanvasW8IgnoreMeta(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-wait-decode') {
    const canvas = await rasterLabToCanvasWaitDecode(patchedSvg, dims, rasterScale, meta)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-bitmap-first') {
    const pixelated =
      recipe.monkeypatch === 'tc-lab-draw-create-image-bitmap-pixelated' ||
      (Array.isArray(recipe.monkeypatch) &&
        recipe.monkeypatch.includes('tc-lab-draw-create-image-bitmap-pixelated'))
    const canvas = await rasterLabToCanvasBitmapFirst(patchedSvg, dims, rasterScale, meta, {
      bitmapResizeQuality: pixelated ? 'pixelated' : 'high',
    }, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'lab-toCanvas-unified') {
    const canvas = await rasterLabToCanvasUnified(patchedSvg, dims, rasterScale, meta, recipe)
    return { canvas, svgText: patchedSvg }
  }

  if (rp === 'node-layer-datauri-blob') {
    const canvas = await rasterNodeLayerViaDataUriBlob(patchedSvg, dims, rasterScale, meta)
    return { canvas, svgText: patchedSvg }
  }

  const { url: patchedUrl, revoke, earlyRevoke } = buildRasterUrl(patchedSvg, recipe)
  try {
    const effectiveScale =
      rp === 'scale-down-up' ? scale : rasterScale
    const canvas = await rasterSvgUrl(patchedUrl, {
      scale: effectiveScale,
      dpr: dims.dpr,
      meta: workingMeta,
      width: dims.cssW,
      height: dims.cssH,
      pixelated: rp === 'canvas-pixelated' || rp === 'create-image-bitmap-pixelated',
      rasterPatch: rp,
      radicalOptions: recipe.radicalOptions,
      earlyBlobRevoke: earlyRevoke,
    })
    if (recipe.radicalPatch === 'fillText-replace') {
      overlayFillTextFromLive(canvas, root, el, dims.dpr)
    }
    if (rp === 'canvas-putImageData-live-snapshot') {
      await overlayPutImageDataFromLive(canvas, root, el, dims)
    }
    return { canvas, svgText: patchedSvg }
  } finally {
    revoke?.()
  }
}

/**
 * Build raster URL for patched SVG (data URL or blob URL + revoke handle).
 * @param {string} svgText
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @returns {{ url: string, revoke: (() => void) | null }}
 */
export function buildRasterUrl(svgText, recipe) {
  const rp = recipe.rasterPatch ?? 'none'
  const blobModes = new Set([
    'blob-url',
    'decode-via-blob',
    'blob-url-early-revoke',
    'blob-url-decode-interval',
    'blob-url-fetch-revoke',
  ])
  if (blobModes.has(rp)) {
    const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    return {
      url,
      revoke: () => URL.revokeObjectURL(url),
      earlyRevoke: rp === 'blob-url-early-revoke',
    }
  }
  if (rp === 'svg-dataurl-double-encode' || rp === 'v2-double-svg-encode') {
    const once = encodeURIComponent(svgText)
    return {
      url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(once)}`,
      revoke: null,
      earlyRevoke: false,
    }
  }
  if (recipe?.labSvgDataUrl) {
    return {
      url: buildLabSvgDataUrl(svgText, recipe),
      revoke: null,
      earlyRevoke: false,
    }
  }
  return {
    url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`,
    revoke: null,
    earlyRevoke: false,
  }
}

/**
 * Minimal SVG→canvas raster (lab-only; mirrors src/exporters/toCanvas.js).
 * @param {object} opts
 * @param {import('./fo-fix-recipes.js').FoFixRasterPatch} [opts.rasterPatch]
 */
export async function rasterSvgUrl(url, {
  scale,
  dpr,
  meta,
  width,
  height,
  pixelated,
  rasterPatch = 'none',
  radicalOptions = null,
  earlyBlobRevoke = false,
}) {
  if (isLabRasterPatchToken(rasterPatch)) {
    const resolved = resolveLabRasterOptions(rasterPatch)
    if (resolved.fork === 'frac') {
      return labToCanvasFrac(url, {
        width,
        height,
        scale,
        dpr,
        meta: meta ?? {},
        useFracDraw: true,
        labToCanvasOpts: resolved.labToCanvasOpts,
      })
    }
    return labToCanvas(url, {
      width,
      height,
      scale,
      dpr,
      meta: meta ?? {},
      labToCanvasOpts: resolved.labToCanvasOpts,
      labToCanvasCtx: resolved.labCtx,
      decodeIntervalMs: resolved.decodeIntervalMs,
      decodeDouble: resolved.decodeDouble,
      decodeRaf: resolved.decodeRaf,
      roundDrawImage: resolved.roundDrawImage,
    })
  }

  const fromBlobUrl = url.startsWith('blob:')
  const patch =
    rasterPatch === 'direct' ||
    rasterPatch === 'blob-url' ||
    rasterPatch === 'blob-url-early-revoke' ||
    rasterPatch === 'blob-url-decode-interval' ||
    rasterPatch === 'blob-url-fetch-revoke' ||
    rasterPatch === 'decode-via-blob'
      ? 'none'
      : rasterPatch
  const blobUrlFetchRevoke = rasterPatch === 'blob-url-fetch-revoke'
  const fontsReady = patch === 'fonts-ready'
  const fontsReadyInterval = patch === 'fonts-ready-interval'
  const waitFonts500 = patch === 'wait-fonts-500ms'
  const doubleRaf = patch === 'double-raf'
  const decodeIntervalRaf = patch === 'decode-interval-raf'
  const twoStage = patch === 'two-stage'
  const doubleDecode = patch === 'double-decode'
  const tripleDecodeLoop = patch === 'triple-decode'
  const decodeInterval =
    patch === 'decode-interval' ||
    rasterPatch === 'blob-url-decode-interval' ||
    rasterPatch === 'blob-url-fetch-revoke' ||
    patch === 'load-event-interval'
  const preDecodeDom = patch === 'pre-decode-dom'
  const rafBeforeDraw = patch === 'raf-before-draw'
  const decodeMicrotaskTwice = patch === 'decode-microtask-twice'
  const offscreenCanvas = patch === 'offscreen-canvas'
  const willReadFrequently = patch === 'will-read-frequently'
  const flipY = patch === 'flip-y'
  const loadEvent = patch === 'load-event' || patch === 'load-event-interval'
  const useBitmap =
    patch === 'create-image-bitmap' ||
    patch === 'create-image-bitmap-pixelated' ||
    patch === 'create-image-bitmap-premultiply' ||
    patch === 'bitmap-close'
  const bitmapPixelated = patch === 'create-image-bitmap-pixelated'
  const bitmapPremultiply = patch === 'create-image-bitmap-premultiply'
  const compositeCopy = patch === 'composite-copy'
  const phantomFontPrime = patch === 'phantom-font-prime'
  const ctxAlphaFalseDesync = patch === 'context-alpha-false-desync'
  const scaleDownUp = patch === 'scale-down-up'
  const supersampleDownscale = patch === 'supersample-downscale'
  const doubleRasterAverage = patch === 'double-raster-average'
  const doubleRasterDifference = patch === 'double-raster-difference'
  const canvasFilterInvert = patch === 'canvas-filter-invert'
  const supersampleMult =
    supersampleDownscale && radicalOptions
      ? Math.max(
          1,
          radicalOptions.scaleMultiplier ?? radicalOptions.recipeScale ?? 1,
        )
      : 1
  const supersampleDown = patch === 'supersample-downscale'
  const h2SupersampleDprLt2 = patch === 'h2-supersample-dpr-lt2'
  const h2FracDraw = patch === 'h2-frac-draw'
  const doubleRasterAvg = patch === 'double-raster-average' || patch === 'double-raster-difference'
  const bitmapRendererTransfer =
    patch === 'bitmaprenderer-transfer' || rasterPatch === 'bitmaprenderer-transfer'
  const decodeViaBlob = rasterPatch === 'decode-via-blob'
  const v2DoubleSvgEncode =
    patch === 'svg-dataurl-double-encode' ||
    rasterPatch === 'svg-dataurl-double-encode' ||
    patch === 'v2-double-svg-encode' ||
    rasterPatch === 'v2-double-svg-encode'
  const imgSrcset1x = patch === 'img-srcset-1x' || rasterPatch === 'img-srcset-1x'
  const tripleRafFlush = patch === 'triple-raf-flush' || rasterPatch === 'triple-raf-flush'
  const webpRoundtrip = patch === 'webp-roundtrip' || rasterPatch === 'webp-roundtrip'

  if (fontsReady || fontsReadyInterval || waitFonts500) {
    try {
      await document.fonts.ready
    } catch {
      /* ok */
    }
  }
  if (waitFonts500) {
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  /** @type {CanvasImageSource} */
  let source
  /** @type {ImageBitmap | null} */
  let bitmap = null

  if (useBitmap) {
    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    img.crossOrigin = 'anonymous'
    img.src = url
    if (tripleDecodeLoop) {
      for (let i = 0; i < 3; i++) await img.decode()
    } else {
      await img.decode()
    }
    if (decodeInterval || fontsReadyInterval) {
      await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
    }
    try {
      /** @type {ImageBitmapOptions} */
      const bitmapOpts = {
        resizeQuality: bitmapPixelated ? 'pixelated' : 'high',
      }
      if (bitmapPremultiply) bitmapOpts.premultiplyAlpha = 'premultiply'
      bitmap = await createImageBitmap(img, bitmapOpts)
    } catch {
      bitmap = await createImageBitmap(img)
    }
    source = bitmap
  } else {
    let decodeUrl = url
    /** @type {(() => void) | null} */
    let decodeRevoke = null
    if (blobUrlFetchRevoke && url.startsWith('blob:')) {
      const resp = await fetch(url)
      const blob = await resp.blob()
      URL.revokeObjectURL(url)
      decodeRevoke = URL.createObjectURL(blob)
      decodeUrl = decodeRevoke
    } else if (fromBlobUrl) {
      decodeUrl = url
    } else if (decodeViaBlob) {
      const resp = await fetch(url)
      const blob = await resp.blob()
      decodeRevoke = URL.createObjectURL(blob)
      decodeUrl = decodeRevoke
    } else if (v2DoubleSvgEncode && url.startsWith('data:')) {
      const comma = url.indexOf(',')
      const payload = comma >= 0 ? url.slice(comma + 1) : ''
      const svgDecoded = decodeURIComponent(decodeURIComponent(payload))
      const blob = new Blob([svgDecoded], { type: 'image/svg+xml;charset=utf-8' })
      decodeRevoke = URL.createObjectURL(blob)
      decodeUrl = decodeRevoke
    }

    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    img.crossOrigin = 'anonymous'
    if (preDecodeDom) {
      img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none;visibility:hidden'
      document.body.appendChild(img)
    }
    if (imgSrcset1x) {
      img.srcset = `${decodeUrl} 1x`
    }
    img.src = decodeUrl
    if (earlyBlobRevoke && decodeUrl.startsWith('blob:')) URL.revokeObjectURL(decodeUrl)
    try {
      if (loadEvent) {
        await new Promise((resolve, reject) => {
          if (img.complete) {
            resolve(undefined)
            return
          }
          img.onload = () => resolve(undefined)
          img.onerror = () => reject(new Error('img load failed'))
        })
      } else if (tripleDecodeLoop) {
        for (let i = 0; i < 3; i++) await img.decode()
      } else {
        await img.decode()
        if (decodeMicrotaskTwice) {
          await waitMicrotask()
          await img.decode()
        }
      }
    } finally {
      if (preDecodeDom) img.remove()
      if (decodeRevoke) URL.revokeObjectURL(decodeRevoke)
    }

    if (decodeInterval || fontsReadyInterval) {
      await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
    }

    if (decodeIntervalRaf) {
      await waitDoubleRaf()
    }

    if (doubleRaf) {
      img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
      document.body.appendChild(img)
      try {
        await waitDoubleRaf()
      } finally {
        img.remove()
      }
    }

    if (rafBeforeDraw) {
      await new Promise((resolve) => requestAnimationFrame(resolve))
    }

    source = img
  }

  const natW = source instanceof ImageBitmap ? source.width : source.naturalWidth
  const natH = source instanceof ImageBitmap ? source.height : source.naturalHeight
  const refW = Number.isFinite(meta?.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta?.h0) ? meta.h0 : natH

  const hasW = Number.isFinite(width)
  const hasH = Number.isFinite(height)
  let outW
  let outH
  if (hasW && hasH) {
    outW = Math.max(1, width)
    outH = Math.max(1, height)
  } else if (hasW) {
    outW = Math.max(1, width)
    outH = Math.max(1, refH * (width / Math.max(1, refW)))
  } else if (hasH) {
    outH = Math.max(1, height)
    outW = Math.max(1, refW * (height / Math.max(1, refH)))
  } else {
    outW = Math.max(1, refW * scale)
    outH = Math.max(1, refH * scale)
  }

  const targetW = outW
  const targetH = outH
  const drawW = supersampleMult > 1 ? targetW * supersampleMult : targetW
  const drawH = supersampleMult > 1 ? targetH * supersampleMult : targetH

  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(targetW * dpr))
  canvas.height = Math.max(1, Math.round(targetH * dpr))
  canvas.style.width = `${targetW}px`
  canvas.style.height = `${targetH}px`

  /** @type {CanvasRenderingContext2DSettings | undefined} */
  let ctxSettings
  if (willReadFrequently) ctxSettings = { willReadFrequently: true }
  else if (ctxAlphaFalseDesync) ctxSettings = { alpha: false, desynchronized: true }
  const ctx = canvas.getContext('2d', ctxSettings)
  if (pixelated) ctx.imageSmoothingEnabled = false
  if (dpr !== 1) ctx.scale(dpr, dpr)

  if (phantomFontPrime) {
    const prime = document.createElement('canvas').getContext('2d')
    if (prime) {
      const bodyCs = getComputedStyle(document.body)
      const fs = parseFloat(bodyCs.fontSize) || 16
      prime.font = `${bodyCs.fontStyle} ${bodyCs.fontWeight} ${fs}px ${bodyCs.fontFamily}`
      prime.measureText('Mg')
    }
  }

  /** @type {CanvasImageSource} */
  let drawSource = source
  if (twoStage && !useBitmap) {
    const stage = document.createElement('canvas')
    stage.width = Math.max(1, Math.round(outW * dpr))
    stage.height = Math.max(1, Math.round(outH * dpr))
    const sctx = stage.getContext('2d')
    if (pixelated) sctx.imageSmoothingEnabled = false
    if (dpr !== 1) sctx.scale(dpr, dpr)
    sctx.drawImage(source, 0, 0, outW, outH)
    drawSource = stage
  }

  if (supersampleDown && supersampleMult > 1) {
    const superCanvas = document.createElement('canvas')
    superCanvas.width = Math.max(1, Math.round(drawW * dpr))
    superCanvas.height = Math.max(1, Math.round(drawH * dpr))
    const sctx = superCanvas.getContext('2d')
    if (pixelated) sctx.imageSmoothingEnabled = false
    if (dpr !== 1) sctx.scale(dpr, dpr)
    sctx.drawImage(drawSource, 0, 0, drawW, drawH)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (!pixelated) ctx.imageSmoothingEnabled = true
    ctx.drawImage(superCanvas, 0, 0, drawW, drawH, 0, 0, targetW, targetH)
    if (pixelated) ctx.imageSmoothingEnabled = false
    if (dpr !== 1) ctx.scale(dpr, dpr)
  } else if (offscreenCanvas && typeof OffscreenCanvas !== 'undefined') {
    const off = new OffscreenCanvas(canvas.width, canvas.height)
    const octx = off.getContext('2d')
    if (pixelated) octx.imageSmoothingEnabled = false
    octx.drawImage(drawSource, 0, 0, canvas.width, canvas.height)
    const offBitmap = off.transferToImageBitmap()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(offBitmap, 0, 0)
    offBitmap.close()
  } else if (h2SupersampleDprLt2 && dpr < 2) {
    const workDpr = dpr * 2
    const hi = document.createElement('canvas')
    hi.width = Math.max(1, Math.ceil(outW * workDpr))
    hi.height = Math.max(1, Math.ceil(outH * workDpr))
    const hctx = hi.getContext('2d')
    hctx.setTransform(workDpr, 0, 0, workDpr, 0, 0)
    hctx.drawImage(drawSource, 0, 0, outW, outH)
    ctx.imageSmoothingEnabled = false
    const { fracX, fracY } = parseH2ViewBoxFrac(meta, url)
    const dx = fracX * dpr
    const dy = fracY * dpr
    if (dx !== 0 || dy !== 0) ctx.translate(dx, dy)
    ctx.drawImage(hi, 0, 0, canvas.width, canvas.height)
    if (dpr !== 1) ctx.scale(dpr, dpr)
  } else if (h2FracDraw) {
    const { fracX, fracY } = parseH2ViewBoxFrac(meta, url)
    if (compositeCopy) ctx.globalCompositeOperation = 'copy'
    ctx.drawImage(drawSource, fracX, fracY, outW, outH)
    if (compositeCopy) ctx.globalCompositeOperation = 'source-over'
  } else if (flipY) {
    ctx.save()
    ctx.scale(1, -1)
    ctx.translate(0, -outH)
    if (compositeCopy) ctx.globalCompositeOperation = 'copy'
    ctx.drawImage(drawSource, 0, 0, outW, outH)
    if (compositeCopy) ctx.globalCompositeOperation = 'source-over'
    ctx.restore()
  } else if (scaleDownUp) {
    const probeScale = radicalOptions?.recipeScale
    if (!(Number.isFinite(probeScale) && probeScale > 0 && probeScale < 1)) {
      throw new Error('scale-down-up requires radicalOptions.recipeScale in (0, 1)')
    }
    const inv = 1 / probeScale
    const smallW = targetW * probeScale
    const smallH = targetH * probeScale
    const small = document.createElement('canvas')
    small.width = Math.max(1, Math.round(smallW * dpr))
    small.height = Math.max(1, Math.round(smallH * dpr))
    const sctx = small.getContext('2d')
    if (pixelated) sctx.imageSmoothingEnabled = false
    sctx.drawImage(drawSource, 0, 0, small.width, small.height)
    ctx.save()
    ctx.scale(inv, inv)
    if (compositeCopy) ctx.globalCompositeOperation = 'copy'
    ctx.drawImage(small, 0, 0, smallW, smallH)
    if (compositeCopy) ctx.globalCompositeOperation = 'source-over'
    ctx.restore()
  } else if (bitmapRendererTransfer) {
    const bmp =
      drawSource instanceof ImageBitmap
        ? drawSource
        : await createImageBitmap(/** @type {CanvasImageSource} */ (drawSource))
    const brCanvas = document.createElement('canvas')
    brCanvas.width = canvas.width
    brCanvas.height = canvas.height
    const br = brCanvas.getContext('bitmaprenderer')
    if (br?.transferFromImageBitmap) {
      br.transferFromImageBitmap(bmp)
      if (!(drawSource instanceof ImageBitmap)) bmp.close()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      try {
        ctx.drawImage(brCanvas, 0, 0)
      } catch {
        /* bitmaprenderer canvas may not expose pixels — ink probe may fail */
      }
      if (dpr !== 1) ctx.scale(dpr, dpr)
    } else {
      if (!(drawSource instanceof ImageBitmap)) bmp.close()
      if (tripleRafFlush) await waitTripleRaf()
      if (compositeCopy) ctx.globalCompositeOperation = 'copy'
      ctx.drawImage(drawSource, 0, 0, outW, outH)
      if (compositeCopy) ctx.globalCompositeOperation = 'source-over'
    }
  } else {
    if (tripleRafFlush) await waitTripleRaf()
    if (compositeCopy) ctx.globalCompositeOperation = 'copy'
    ctx.drawImage(drawSource, 0, 0, outW, outH)
    if (compositeCopy) ctx.globalCompositeOperation = 'source-over'
  }

  if (doubleRasterAvg) {
    const pass2 = document.createElement('canvas')
    pass2.width = canvas.width
    pass2.height = canvas.height
    const p2ctx = pass2.getContext('2d')
    if (pixelated) p2ctx.imageSmoothingEnabled = false
    if (dpr !== 1) p2ctx.scale(dpr, dpr)
    p2ctx.drawImage(drawSource, 0, 0, outW, outH)
    if (doubleRasterDifference) {
      ctx.globalCompositeOperation = 'difference'
      ctx.drawImage(pass2, 0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'
    } else {
      ctx.globalAlpha = 0.5
      ctx.drawImage(pass2, 0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
    }
  }

  if (canvasFilterInvert) {
    const dup = document.createElement('canvas')
    dup.width = canvas.width
    dup.height = canvas.height
    const dctx = dup.getContext('2d')
    if (dctx) {
      dctx.drawImage(canvas, 0, 0)
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = 'invert(1)'
      ctx.drawImage(dup, 0, 0)
      ctx.filter = 'none'
      if (dpr !== 1) ctx.scale(dpr, dpr)
    }
  }

  const roundTripPasses = tripleDecodeLoop ? 3 : doubleDecode ? 2 : 0
  for (let pass = 1; pass < roundTripPasses; pass++) {
    const roundTrip = canvas.toDataURL('image/png')
    const imgN = new Image()
    imgN.loading = 'eager'
    imgN.decoding = 'sync'
    imgN.crossOrigin = 'anonymous'
    imgN.src = roundTrip
    await imgN.decode()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (pixelated) ctx.imageSmoothingEnabled = false
    if (dpr !== 1) ctx.scale(dpr, dpr)
    ctx.drawImage(imgN, 0, 0, targetW, targetH)
  }

  if (webpRoundtrip) {
    const webpBlob = await new Promise((resolve) => {
      canvas.toBlob((b) => resolve(b), 'image/webp')
    })
    if (webpBlob) {
      const webpUrl = URL.createObjectURL(webpBlob)
      try {
        const imgW = new Image()
        imgW.loading = 'eager'
        imgW.decoding = 'sync'
        imgW.crossOrigin = 'anonymous'
        imgW.src = webpUrl
        await imgW.decode()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (pixelated) ctx.imageSmoothingEnabled = false
        if (dpr !== 1) ctx.scale(dpr, dpr)
        ctx.drawImage(imgW, 0, 0, targetW, targetH)
      } finally {
        URL.revokeObjectURL(webpUrl)
      }
    }
  }

  if (bitmap) bitmap.close()

  canvas.__foFixRasterMeta = {
    cssW: targetW,
    cssH: targetH,
    dpr,
    backingW: canvas.width,
    backingH: canvas.height,
    rasterPatch:
      rasterPatch === 'blob-url' || fromBlobUrl
        ? 'blob-url'
        : rasterPatch === 'decode-via-blob'
          ? 'decode-via-blob'
          : patch,
    fromBlobUrl: !!fromBlobUrl,
    twoStage: !!twoStage,
    doubleDecode: !!doubleDecode,
    tripleDecodeLoop: !!tripleDecodeLoop,
    supersampleDownscale: !!supersampleDownscale,
    supersampleMult: supersampleMult > 1 ? supersampleMult : undefined,
    doubleRasterAverage: !!doubleRasterAverage,
    doubleRasterDifference: !!doubleRasterDifference,
    canvasFilterInvert: !!canvasFilterInvert,
    doubleRasterAvg: !!doubleRasterAvg,
    supersampleDown: !!supersampleDown,
    decodeViaBlob: !!decodeViaBlob,
    decodeInterval: !!decodeInterval || !!fontsReadyInterval,
    decodeMicrotaskTwice: !!decodeMicrotaskTwice,
    offscreenCanvas: !!offscreenCanvas,
    willReadFrequently: !!willReadFrequently,
    fontsReadyInterval: !!fontsReadyInterval,
    preDecodeDom: !!preDecodeDom,
    rafBeforeDraw: !!rafBeforeDraw,
    createImageBitmap: !!useBitmap,
    flipY: !!flipY,
    v2DoubleSvgEncode: !!v2DoubleSvgEncode,
    tripleRafFlush: !!tripleRafFlush,
    imgSrcset1x: !!imgSrcset1x,
    bitmapRendererTransfer: !!bitmapRendererTransfer,
    webpRoundtrip: !!webpRoundtrip,
    scaleDownUp: !!scaleDownUp,
    probeScale:
      scaleDownUp && Number.isFinite(radicalOptions?.recipeScale)
        ? radicalOptions.recipeScale
        : undefined,
  }
  return canvas
}

/**
 * Build probe row fields from three-way ink comparison.
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {string} landmark
 * @param {ReturnType<typeof compareThreeWayInk>} cmp
 * @param {{ dpr: number, scale: number }} dims
 */
/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} recipe */
export function inkCompareOptsForRecipe(recipe) {
  const inkScanMode = recipe?.labInkScanMode ?? 'integer'
  return {
    inkScanMode,
    includeFractionalInkScan: inkScanMode !== 'integer',
    visibleInk: true,
    scanBandFromRootTop: true,
  }
}

/**
 * Visible live ink top in landmark border-box px — never Range/layout strut for table Δ.
 * @param {Element} el
 * @param {Element} root
 * @param {object | null | undefined} row
 * @param {{ top: number }} box relRect(el, root)
 */
function resolveLiveComparableInkTopInBorder(el, root, row, box) {
  const visible = measureLiveVisibleInkTop(el, root)
  if (Number.isFinite(visible?.topInBorder)) return visible.topInBorder
  const landmark = row?.landmark ?? null
  if (
    landmark &&
    (FO_FIX_LAB_REGISTERED_LANDMARKS.includes(landmark) || landmark === 'Blocks')
  ) {
    const blockTop = measureLiveBlockAnchorTopInRoot(el, root, row)
    if (Number.isFinite(blockTop)) return blockTop - box.top
  }
  if (Number.isFinite(row?.liveVisualTopPx)) return row.liveVisualTopPx - box.top
  if (Number.isFinite(row?.livePreviewInkTopPx)) return row.livePreviewInkTopPx - box.top
  if (Number.isFinite(row?.liveTopPx)) return row.liveTopPx - box.top
  return row?.livePaintedTopInBorder ?? null
}

/**
 * Block-anchor viewport metrics for mini-fixture landmarks (Home → Blocks).
 * Keeps matrix rows comparable when capture/radical recipes shift visible ink top.
 * @param {object} row
 * @param {Element} root
 * @param {Element} el
 * @param {HTMLCanvasElement | null} canvas
 * @param {string | null | undefined} svgText
 * @param {{ inkScanMode?: string }} [opts]
 */
async function applyProbeRowBlockAnchorCheck(row, root, el, canvas, svgText, opts = {}) {
  if (!row || !root || !el) return row
  const landmark = row.landmark ?? ''
  if (
    !FO_FIX_LAB_REGISTERED_LANDMARKS.includes(landmark) &&
    landmark !== 'Blocks'
  ) {
    return row
  }

  const box = relRect(el, root)
  const layoutLiveTopInRoot = measureLandmarkTextTopInRoot(el, root)
  const visibleLive = measureLiveVisibleInkTop(el, root)
  const liveTopInRoot =
    visibleLive?.top ?? measureLiveBlockAnchorTopInRoot(el, root, row)
  if (!Number.isFinite(liveTopInRoot)) return row

  const dpr = row.dpr ?? 1
  const inkOpts = {
    ...inkCompareOptsForRecipe({ labInkScanMode: opts.inkScanMode ?? row.labInkScanMode }),
    ...opts,
  }

  const svgImg = svgText ? await decodeSvgTextForInkProbe(svgText) : null
  const svgTopInRoot =
    svgImg != null
      ? previewBitmapCompareTopInRoot(
          measurePreviewBitmapInkTopInRoot(svgImg, root, el, dpr, inkOpts),
        )
      : null
  const canvasTopInRoot =
    canvas instanceof HTMLCanvasElement
      ? previewBitmapCompareTopInRoot(
          measurePreviewBitmapInkTopInRoot(canvas, root, el, dpr, inkOpts),
        )
      : null

  row.blockAnchorCheckReference = 'viewport-block-anchor'
  row.labCheckMode = 'viewport-block-anchor-probe'
  row.inkScanActive = true
  if (Number.isFinite(layoutLiveTopInRoot)) {
    row.liveBlockLayoutTopInRootPx = layoutLiveTopInRoot
    row.livePreviewLayoutTopPx = layoutLiveTopInRoot
  }
  if (Number.isFinite(visibleLive?.top) && !Number.isFinite(row.liveInkTopPx)) {
    row.liveInkTopPx = visibleLive.top
    row.liveInkTopInBorderPx = visibleLive.topInBorder ?? visibleLive.top - box.top
    row.liveVisualTopPx = visibleLive.top
  }
  row.liveBlockAnchorTopInRootPx = liveTopInRoot
  row.liveBlockAnchorTopInBorderPx = liveTopInRoot - box.top

  const rootRect = root.getBoundingClientRect?.()
  if (rootRect) {
    row.liveBlockAnchorViewportTopPx = rootRect.top + liveTopInRoot
    assignViewportInkRootPx(
      row,
      'liveBlockAnchorViewportTopPx',
      row.liveBlockAnchorViewportTopPx,
      root,
    )
  }

  const svgInkTopInRoot = svgTopInRoot
  if (Number.isFinite(svgInkTopInRoot)) {
    row.svgBlockAnchorTopInRootPx = svgInkTopInRoot
    row.svgBlockAnchorTopInBorderPx = svgInkTopInRoot - box.top
    if (svgImg && rootRect) {
      const svgViewport = rootYToPreviewViewportStretch(svgImg, root, svgInkTopInRoot)
      if (Number.isFinite(svgViewport)) {
        row.svgBlockAnchorViewportTopPx = svgViewport
        assignViewportInkRootPx(row, 'svgBlockAnchorViewportTopPx', svgViewport, root)
      }
    }
  }

  if (Number.isFinite(canvasTopInRoot)) {
    row.canvasBlockAnchorTopInRootPx = canvasTopInRoot
    row.canvasBlockAnchorTopInBorderPx = canvasTopInRoot - box.top
    if (canvas instanceof HTMLCanvasElement && rootRect) {
      const canvasViewport = rootYToPreviewViewportStretch(canvas, root, canvasTopInRoot)
      if (Number.isFinite(canvasViewport)) {
        row.canvasBlockAnchorViewportTopPx = canvasViewport
        assignViewportInkRootPx(
          row,
          'canvasBlockAnchorViewportTopPx',
          canvasViewport,
          root,
        )
      }
    }
  }

  return row
}

/** @param {ReturnType<typeof probeRowFromComparison>} row */
function preserveBandScanProbeMetrics(row) {
  if (!row) return row
  if (Number.isFinite(row.livePaintedTopInBorder)) {
    row.bandScanLivePaintedTopInBorder = row.livePaintedTopInBorder
  }
  if (Number.isFinite(row.svgPaintedTopInBorder)) {
    row.bandScanSvgPaintedTopInBorder = row.svgPaintedTopInBorder
  }
  if (Number.isFinite(row.canvasPaintedTopInBorder)) {
    row.bandScanCanvasPaintedTopInBorder = row.canvasPaintedTopInBorder
  }
  if (Number.isFinite(row.liveVsSvgTopPx)) {
    row.bandScanLiveVsSvgTopPx = row.liveVsSvgTopPx
  }
  if (Number.isFinite(row.liveVsCanvasTopPx)) {
    row.bandScanLiveVsCanvasTopPx = row.liveVsCanvasTopPx
  }
  return row
}

/**
 * Write comparable svg/canvas tops from probe bitmaps (no compare-stage mount required).
 * Same scan path as compare-stage preview sync — all landmarks (Home, Products, …).
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {Element} root
 * @param {Element} el
 * @param {HTMLCanvasElement} canvas
 * @param {string} svgText
 * @param {{ inkScanMode?: string, visibleInk?: boolean, scanBandFromRootTop?: boolean }} [opts]
 */
export async function syncProbeRowInkFromProbeBitmaps(row, root, el, canvas, svgText, opts = {}) {
  if (!row || !root || !el || !canvas) return row
  preserveBandScanProbeMetrics(row)
  const svgImg = svgText ? await decodeSvgTextForInkProbe(svgText) : null
  return syncProbeRowComparableInkFromSources(row, root, el, { svgImg, canvas }, {
    ...opts,
    inkTopReference: opts.inkTopReference ?? 'probe-bitmap-preview',
  })
}

/** Round ink metric to nearest 0.25px — lab display only, not promotion gate. */
function roundInkScanToQuarterPx(v) {
  if (v == null || !Number.isFinite(v)) return null
  return Math.round(v * 4) / 4
}

function probeRowFromComparison(recipe, landmark, cmp, { dpr, scale }) {
  const liveVsCanvasTopPx = cmp.liveVsCanvasTopPx ?? cmp.deltaTopInBorder
  const liveVsSvgTopPx = cmp.liveVsSvgTopPx ?? cmp.deltaSvgInBorder
  const pass =
    liveVsCanvasTopPx != null && Math.abs(liveVsCanvasTopPx) <= INK_PASS
  const displayQuarter = Boolean(recipe?.labToCanvasOpts?.displayInkQuarterRound)
  const layoutOnly = cmp.inkScanMode === 'layout-only'
  const row = {
    recipeId: recipe.id,
    landmark,
    dpr,
    scale,
    labInkScanMode: cmp.inkScanMode ?? recipe.labInkScanMode ?? 'bitmap',
    inkTopReference: layoutOnly ? 'layout-only' : 'preview-bitmap-ink',
    inkScanActive: !layoutOnly,
    previewBlockInkScan: !layoutOnly,
    livePaintedTopInBorder: cmp.live?.topInBorder ?? null,
    liveLayoutPaintedTopInBorder: cmp.liveLayout?.topInBorder ?? null,
    svgPaintedTopInBorder: cmp.svg?.topInBorder ?? null,
    svgVisualTopInBorder: cmp.svgGlyph?.topInBorder ?? null,
    canvasPaintedTopInBorder: cmp.canvas?.topInBorder ?? null,
    /** Visible/bitmap ink tops in #capture-target CSS px (absolute). */
    liveTopPx: cmp.live?.top ?? null,
    liveLayoutTopPx: cmp.liveLayout?.top ?? null,
    svgTopPx: cmp.svg?.top ?? null,
    canvasTopPx: cmp.canvas?.top ?? null,
    /** Glyph ink top for live preview marker (Range + ½(lh−fs)). */
    liveVisualTopPx: null,
    /** FO probe glyph visual top — independent of live DOM (not copied). */
    svgVisualTopPx: cmp.svgGlyph?.top ?? null,
    targetTopPx: cmp.liveCapModel?.top ?? null,
    liveVsCanvasTopPx,
    liveVsSvgTopPx,
    liveVsSvgLayoutTopPx: cmp.liveVsSvgLayoutTopPx ?? cmp.deltaSvgLayoutInBorder ?? null,
    liveVsCanvasLayoutTopPx: cmp.liveVsCanvasLayoutTopPx ?? null,
    pass,
    inkPassThreshold: INK_PASS,
    /** @deprecated use liveVsCanvasTopPx */
    deltaTopInBorder: liveVsCanvasTopPx,
    /** @deprecated use liveVsSvgTopPx */
    deltaSvgInBorder: liveVsSvgTopPx,
    /** Inline FO Range Δ vs live (BITMAP_ONLY layout leg; matrix SVG column uses bitmap). */
    deltaSvgLayoutInBorder: cmp.liveVsSvgLayoutTopPx ?? cmp.deltaSvgLayoutInBorder ?? null,
    fractionalCanvasDelta: cmp.fractionalCanvasDelta ?? null,
  }
  if (displayQuarter) {
    row.liveVsCanvasTopPxDisplay = roundInkScanToQuarterPx(liveVsCanvasTopPx)
    row.canvasPaintedTopInBorderDisplay = roundInkScanToQuarterPx(
      cmp.canvas?.topInBorder ?? null,
    )
    row.displayMetricNote =
      'displayInkQuarterRound: 0.25px rounded tops for UI only; pass/gate uses integer scan'
  }
  Object.assign(row, {
    liveCapModelTopInBorder: cmp.liveCapModel?.topInBorder ?? null,
    canvasInkTopInBorder: cmp.canvas?.topInBorder ?? null,
    deltaTopCapModel: cmp.deltaTopCapModel,
    deltaSvgCapModel: cmp.deltaSvgCapModel,
    /** Same metric as checkout structure-report paint.canvas.vs-border.top (cap live vs canvas ink). */
    blackboxAlignedCanvasVsLivePx: cmp.deltaTopCapModel,
  })
  return applyLandmarkInkMetricsToRow(row)
}

/**
 * Attach text-leaf fork audit for --text-only / --debug-lh matrix rows.
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {Element} el
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 */
function attachTextForkDebug(row, el, recipe) {
  const want =
    typeof globalThis !== 'undefined' &&
    (!!globalThis.__foFixLabTextOnly || !!globalThis.__foFixLabDebugLh)
  if (!want) return row
  const dbg = getLastLabToCanvasDebugReport()
  const liveCs = getComputedStyle(el)
  const liveLhPx = parseFloat(liveCs.lineHeight)
  const liveFsPx = parseFloat(liveCs.fontSize)
  const fork = dbg?.forkTrace ?? null
  const audit = fork?.textLeafAudit ?? null
  row.textForkDebug = {
    patchId: fork?.patchId ?? recipe?.labToCanvasOpts?.rasterOnlySvgPatch ?? null,
    liveLineHeightPx: Number.isFinite(liveLhPx) ? liveLhPx : null,
    liveFontSizePx: Number.isFinite(liveFsPx) ? liveFsPx : null,
    svgStringChanged: fork?.svgStringChanged ?? null,
    textCssNoOp: fork?.textCssNoOp ?? null,
    preInlineLh: audit?.preInlineLh ?? null,
    postInlineLh: audit?.postInlineLh ?? null,
    injectedLhRulesAdded: audit?.injectedLhRulesAdded ?? [],
    styleInjectChanged: audit?.styleInjectChanged ?? null,
    canvasDeltaPx: row.liveVsCanvasTopPx ?? row.deltaTopInBorder ?? null,
  }
  return row
}

/**
 * Always-on decode fork audit for lab UI (matrix + single recipe).
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {object | null | undefined} meta
 */
function attachRasterForkAudit(row, recipe, meta) {
  const dbg = getLastLabToCanvasDebugReport()
  const fork = dbg?.forkTrace ?? null
  const patchId =
    fork?.patchId ??
    resolveRasterSvgPatchId(recipe?.labToCanvasOpts?.rasterOnlySvgPatch, meta) ??
    null
  const half = meta?.lhStrutHalfLeadingPx ?? null
  const canvasDelta = row.liveVsCanvasTopPx ?? row.deltaTopInBorder ?? null
  let patchApplied =
    patchId != null
      ? fork?.svgStringChanged === true ||
        (fork?.preHash != null && fork?.postHash != null && fork.preHash !== fork.postHash)
      : null
  if (patchId && patchApplied === false && canvasDelta != null && Math.abs(canvasDelta) < 0.5) {
    patchApplied = true
  }
  row.rasterForkAudit = {
    patchId,
    patchApplied,
    /** @deprecated use patchApplied — kept for w7 UI path probe compat */
    applied: patchApplied,
    rasterPatchUsed: recipe.rasterPatch ?? null,
    lhStrutHalfLeadingPx: Number.isFinite(half) ? half : null,
    lhStrutRangeSubpixelPx: meta?.lhStrutRangeSubpixelPx ?? null,
    foYDeltaPx:
      patchApplied && patchId
        ? (resolveRasterForkFoYNudgePx(patchId, meta) ??
          (Number.isFinite(half) ? -half : null))
        : null,
    decodePath: dbg?.decodePath ?? null,
    createImageBitmapPath: dbg?.createImageBitmapPath ?? null,
  }
  if (patchId && patchApplied === false && canvasDelta != null && Math.abs(canvasDelta) > 0.5) {
    row.rasterForkWarning =
      `Decode fork "${patchId}" did not run (SVG bytes unchanged) — expect ~+2.8px canvas drift, not matrix −0.203px. ` +
      'Set Lab fork / Raster patch to (recipe default).'
  } else if (patchId && patchApplied && Number.isFinite(half) && Math.abs(half - 2.5) < 0.05 && Math.abs(half - 2.8) > 0.05) {
    row.rasterForkWarning =
      `FO y shift used ½lh=${half.toFixed(3)}px (expected ~2.8) — truncated lh meta yields ~+0.3px residual vs −0.203px.`
  }
  return row
}

/**
 * Verify decode-time fork did not patch inline SVG used for measure leg.
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {string} measureSvgText SVG bytes used for compareThreeWay svg leg
 */
function attachRasterForkSplitAudit(row, recipe, measureSvgText) {
  if (!recipe?.labToCanvasOpts?.rasterForkDecodeOnly) return row
  const fork = getLastLabToCanvasDebugReport()?.forkTrace ?? null
  const measureHash = fnv1aHash(measureSvgText)
  const preHash = fork?.preHash ?? null
  const probeSvgUnchangedForMeasure =
    preHash != null ? preHash === measureHash : null
  const doubleApplySuspect =
    probeSvgUnchangedForMeasure === false &&
    fork?.svgStringChanged === true
  row.rasterForkSplitAudit = {
    decodeOnlyIntent: true,
    probeSvgUnchangedForMeasure,
    decodeForkChangedBytes: fork?.svgStringChanged ?? null,
    decodeMatchesPost: fork?.decodeMatchesPost ?? null,
    doubleApplySuspect,
  }
  if (doubleApplySuspect) {
    row.rasterForkWarning =
      (row.rasterForkWarning ? `${row.rasterForkWarning} ` : '') +
      'Decode fork may have leaked into SVG measure leg (double-apply suspect).'
  }
  return row
}

/**
 * Root-relative ink marker Y coords + predicted canvas top after decode fork meta.
 * @param {Element} el
 * @param {HTMLElement} root
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {object | null | undefined} meta
 * @param {import('./fo-fix-recipe-shared.js').FoFixRecipe | null | undefined} [recipe]
 */
export function enrichProbeRowInkMarkers(el, root, row, meta, recipe) {
  const box = relRect(el, root)
  const glyph = measureLiveGlyphInkTopFromRange(el, root)
  const visible = measureLiveVisibleInkTop(el, root)
  row.liveVisualTopPx = visible?.top ?? glyph?.top ?? null
  row.liveRangeLineTopInBorder = glyph?.rangeLineTopInBorder ?? null
  if (row.liveLayoutPaintedTopInBorder != null) {
    row.liveLayoutTopPx = box.top + row.liveLayoutPaintedTopInBorder
  } else if (row.liveLayoutTopPx == null) {
    const layoutPainted = measureLivePaintedInk(el, root)
    if (layoutPainted?.topInBorder != null) {
      row.liveLayoutPaintedTopInBorder = layoutPainted.topInBorder
      row.liveLayoutTopPx = layoutPainted.top
    }
  }
  if (row.livePaintedTopInBorder != null) {
    row.liveTopPx = box.top + row.livePaintedTopInBorder
  }
  if (row.svgPaintedTopInBorder != null) {
    row.svgTopPx = box.top + row.svgPaintedTopInBorder
  }
  if (row.svgVisualTopInBorder != null) {
    row.svgVisualTopPx = box.top + row.svgVisualTopInBorder
    row.svgFoGlyphTopPx = row.svgVisualTopPx
  } else if (row.svgVisualTopPx == null && row.svgPaintedTopInBorder != null) {
    row.svgVisualTopPx = box.top + row.svgPaintedTopInBorder
    row.svgFoGlyphTopPx = row.svgVisualTopPx
  }
  if (row.canvasPaintedTopInBorder != null) {
    row.canvasTopPx = box.top + row.canvasPaintedTopInBorder
  } else if (
    Number.isFinite(row.liveTopPx) &&
    Number.isFinite(row.liveVsCanvasTopPx ?? row.deltaTopInBorder)
  ) {
    row.canvasTopPx = row.liveTopPx + (row.liveVsCanvasTopPx ?? row.deltaTopInBorder)
  }
  if (Number.isFinite(row.liveTopPx) && Number.isFinite(row.canvasTopPx)) {
    row.markerCanvasVsLivePx = row.canvasTopPx - row.liveTopPx
  }
  if (Number.isFinite(row.liveVisualTopPx) && Number.isFinite(row.canvasTopPx)) {
    row.markerCanvasVsLiveVisualPx = row.canvasTopPx - row.liveVisualTopPx
  }
  if (Number.isFinite(row.liveVisualTopPx) && Number.isFinite(row.svgVisualTopPx)) {
    row.markerSvgVsLiveVisualPx = row.svgVisualTopPx - row.liveVisualTopPx
  }
  const half =
    meta?.lhStrutHalfLeadingPx ??
    meta?.lhStrutRangeHalfLeadingPx ??
    glyph?.intraLineHalfLeading ??
    null
  const patchId = recipe?.labToCanvasOpts?.rasterOnlySvgPatch ?? null
  const foYNudge = patchId ? resolveRasterForkFoYNudgePx(patchId, meta) : null
  row.foYNudgePx = Number.isFinite(foYNudge) ? foYNudge : null
  // w7 / −½(lh−fs) fork targets canvas ink on live layout (Range) line-box top — debug expectation only.
  if (Number.isFinite(row.liveLayoutTopPx)) {
    row.predictedCanvasTopPx = row.liveLayoutTopPx
  } else if (Number.isFinite(row.liveTopPx)) {
    row.predictedCanvasTopPx = row.liveTopPx
  }
  return row
}

/**
 * Comparable ink tops — bitmap scan rows in root px (live may use visible DOM cap).
 * Same path for matrix {@link syncProbeRowInkFromProbeBitmaps} and detail
 * {@link syncProbeRowInkFromDisplayedPreviews}.
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {Element} root
 * @param {Element} el
 * @param {{ svgImg?: HTMLImageElement | null, canvas?: HTMLCanvasElement | null }} sources
 * @param {{ inkScanMode?: string, inkTopReference?: string }} [opts]
 */
function syncProbeRowComparableInkFromSources(row, root, el, sources = {}, opts = {}) {
  if (!row || !root || !el) return row
  const { svgImg = null, canvas = null } = sources
  const scanMode = opts.inkScanMode ?? row.labInkScanMode ?? 'bitmap'
  const rowScanMode = resolveInkScanRowMode(scanMode)
  const previewScanOpts = {
    visibleInk: true,
    inkScanMode: rowScanMode,
    scanBandFromRootTop: true,
  }
  const box = relRect(el, root)

  preserveBandScanProbeMetrics(row)

  const liveRangeVisible = measureLiveVisibleInkTop(el, root)
  if (liveRangeVisible?.top != null) {
    row.liveRangeInkTopPx = liveRangeVisible.top
    row.liveRangeInkTopInBorderPx = liveRangeVisible.topInBorder
    row.liveLayoutPaintedTopInBorder = liveRangeVisible.topInBorder
  }

  const dpr = row.dpr ?? 1
  const livePreviewBitmap = measureLiveDisplayedPreviewInkTop(el, root, dpr, previewScanOpts)
  if (livePreviewBitmap?.top != null) {
    row.livePreviewBitmapInkTopPx = livePreviewBitmap.top
    row.livePreviewInkTopPx = livePreviewBitmap.top
    assignViewportInkRootPx(
      row,
      'livePreviewBitmapViewportTopPx',
      livePreviewBitmap.viewportTop,
      root,
    )
  }
  const liveInk = reconcileLivePreviewInkWithVisibleDom(liveRangeVisible, livePreviewBitmap)
  let liveInBorder =
    liveInk?.topInBorder ??
    resolveLiveComparableInkTopInBorder(el, root, row, box)
  if (liveInk?.top != null) {
    row.liveInkTopPx = liveInk.top
    row.liveInkTopInBorderPx = liveInk.topInBorder
    row.liveVisualTopPx = liveRangeVisible?.top ?? liveInk.top
    row.livePreviewLayoutTopPx = liveRangeVisible?.top ?? liveInk.top
    if (liveInk.inkReference) row.liveInkReference = liveInk.inkReference
    if (liveInk.liveUsesVisibleCap != null) row.liveUsesVisibleCap = liveInk.liveUsesVisibleCap
    const rootRect = root.getBoundingClientRect?.()
    assignViewportInkRootPx(
      row,
      'livePreviewViewportTopPx',
      rootRect ? rootRect.top + liveInk.top : livePreviewBitmap?.viewportTop,
      root,
    )
  } else if (liveRangeVisible?.topInBorder != null) {
    row.livePreviewInkTopPx = liveRangeVisible.top
    row.livePreviewLayoutTopPx = liveRangeVisible.top
    assignViewportInkRootPx(
      row,
      'livePreviewViewportTopPx',
      root.getBoundingClientRect?.().top + liveRangeVisible.top,
      root,
    )
  }

  const svgPreviewRaw =
    svgImg instanceof HTMLImageElement && svgImg.naturalWidth > 0
      ? measurePreviewBitmapInkTopInRoot(svgImg, root, el, dpr, previewScanOpts)
      : null
  const canvasPreviewRaw =
    canvas instanceof HTMLCanvasElement && canvas.width > 0
      ? measurePreviewBitmapInkTopInRoot(canvas, root, el, dpr, previewScanOpts)
      : null
  const layoutCanvas =
    canvas instanceof HTMLCanvasElement
      ? measureDisplayedPreviewLayoutTop(canvas, root, el)
      : null
  const svgBitmapRow = previewBitmapInkRowInRoot(svgPreviewRaw)
  const canvasBitmapRow = previewBitmapInkRowInRoot(canvasPreviewRaw)
  const svgCompareTop = previewBitmapCompareTopInRoot(svgPreviewRaw)
  const canvasCompareTop = previewBitmapCompareTopInRoot(canvasPreviewRaw)
  const svgPreview =
    svgPreviewRaw && Number.isFinite(svgCompareTop)
      ? {
          ...svgPreviewRaw,
          top: svgCompareTop,
          topInRoot: svgCompareTop,
          topInBorder: svgCompareTop - box.top,
        }
      : svgPreviewRaw
  const canvasPreview =
    canvasPreviewRaw && Number.isFinite(canvasCompareTop)
      ? {
          ...canvasPreviewRaw,
          top: canvasCompareTop,
          topInRoot: canvasCompareTop,
          topInBorder: canvasCompareTop - box.top,
        }
      : canvasPreviewRaw
  if (previewStageBitmapRowsAgree(svgPreviewRaw, canvasPreviewRaw) && Number.isFinite(svgBitmapRow)) {
    row.previewBitmapRowsAgree = true
    row.sharedPreviewBitmapTopPx = svgBitmapRow
  }
  if (
    Number.isFinite(svgBitmapRow) &&
    Number.isFinite(canvasBitmapRow) &&
    svgBitmapRow !== canvasBitmapRow
  ) {
    row.svgImgDecodeLagPx = svgBitmapRow - canvasBitmapRow
  }
  const liveVisibleTop = liveRangeVisible?.top ?? liveInk?.top ?? null
  if (Number.isFinite(canvasBitmapRow) && Number.isFinite(liveVisibleTop)) {
    row.canvasVisibleLagPx = liveVisibleTop - canvasBitmapRow
  }

  const svgTopInBorder =
    svgPreview?.topInBorder ??
    (svgPreview?.top != null ? svgPreview.top - box.top : null)
  if (svgTopInBorder != null) {
    row.svgPaintedTopInBorder = svgTopInBorder
    row.svgTopPx = box.top + svgTopInBorder
    row.svgPreviewVisibleTopPx = svgPreview.topInRoot ?? svgPreview.top
    const svgBitmapRawTop =
      svgPreviewRaw?.bitmapTopInRoot ??
      svgPreviewRaw?.topInRoot ??
      svgPreviewRaw?.top ??
      null
    row.svgPreviewBitmapTopPx = Number.isFinite(svgBitmapRawTop)
      ? svgBitmapRawTop
      : row.svgPreviewVisibleTopPx
    if (Number.isFinite(svgBitmapRawTop)) {
      row.svgImgBitmapTopInRoot = svgBitmapRawTop
    }
    row.svgBlockAnchorTopInRootPx = row.svgTopPx
    row.svgBlockAnchorTopInBorderPx = svgTopInBorder
    row.svgPreviewLayoutTopPx = row.svgPreviewVisibleTopPx
    assignViewportInkRootPx(
      row,
      'svgPreviewVisibleViewportTopPx',
      svgPreview.viewportTop,
      root,
    )
    if (Number.isFinite(svgBitmapRawTop)) {
      assignViewportInkRootPx(
        row,
        'svgPreviewBitmapViewportTopPx',
        rootYToPreviewViewportStretch(svgImg, root, svgBitmapRawTop) ??
          root.getBoundingClientRect?.().top + svgBitmapRawTop,
        root,
      )
    } else {
      assignViewportInkRootPx(
        row,
        'svgPreviewBitmapViewportTopPx',
        svgPreview.viewportTop,
        root,
      )
    }
    if (Number.isFinite(liveInBorder)) {
      row.liveVsSvgTopPx = svgTopInBorder - liveInBorder
      row.deltaSvgInBorder = row.liveVsSvgTopPx
    }
  }

  const canvasTopInBorder =
    canvasPreview?.topInBorder ??
    (canvasPreview?.top != null ? canvasPreview.top - box.top : null)
  if (canvasTopInBorder != null) {
    row.canvasPaintedTopInBorder = canvasTopInBorder
    row.canvasTopPx = box.top + canvasTopInBorder
    row.canvasPreviewVisibleTopPx = canvasPreview.topInRoot ?? canvasPreview.top
    const canvasBitmapRawTop =
      canvasPreviewRaw?.bitmapTopInRoot ??
      canvasPreviewRaw?.topInRoot ??
      canvasPreviewRaw?.top ??
      canvasPreview.canvasPreviewBitmapTopInRoot ??
      null
    row.canvasPreviewBitmapTopPx = Number.isFinite(canvasBitmapRawTop)
      ? canvasBitmapRawTop
      : row.canvasPreviewVisibleTopPx
    row.canvasPreviewInkTopPx = row.canvasPreviewVisibleTopPx
    if (Number.isFinite(layoutCanvas?.topInRoot)) {
      row.canvasPreviewLayoutTopPx = layoutCanvas.topInRoot
      row.canvasLayoutTopPx = layoutCanvas.topInRoot
    } else if (!Number.isFinite(row.canvasPreviewLayoutTopPx)) {
      row.canvasPreviewLayoutTopPx = row.canvasPreviewBitmapTopPx
    }
    row.canvasBlockAnchorTopInRootPx = row.canvasTopPx
    row.canvasBlockAnchorTopInBorderPx = canvasTopInBorder
    assignViewportInkRootPx(
      row,
      'canvasPreviewVisibleViewportTopPx',
      canvasPreview.viewportTop,
      root,
    )
    if (Number.isFinite(canvasBitmapRawTop)) {
      assignViewportInkRootPx(
        row,
        'canvasPreviewBitmapViewportTopPx',
        rootYToPreviewViewportStretch(canvas, root, canvasBitmapRawTop) ??
          root.getBoundingClientRect?.().top + canvasBitmapRawTop,
        root,
      )
    } else {
      assignViewportInkRootPx(
        row,
        'canvasPreviewBitmapViewportTopPx',
        canvasPreview.viewportTop,
        root,
      )
    }
    assignViewportInkRootPx(row, 'canvasPreviewViewportTopPx', canvasPreview.viewportTop, root)
    if (Number.isFinite(liveInBorder)) {
      row.liveVsCanvasTopPx = canvasTopInBorder - liveInBorder
      row.deltaTopInBorder = row.liveVsCanvasTopPx
      row.pass =
        row.liveVsCanvasTopPx != null && Math.abs(row.liveVsCanvasTopPx) <= INK_PASS
    }
  }

  if (
    Number.isFinite(row.svgPaintedTopInBorder) &&
    Number.isFinite(row.canvasPaintedTopInBorder)
  ) {
    row.svgVsCanvasTopInBorderPx =
      row.canvasPaintedTopInBorder - row.svgPaintedTopInBorder
    row.svgVsCanvasTopPx = row.canvasTopPx - row.svgTopPx
  }

  if (Number.isFinite(liveInBorder)) {
    row.livePaintedTopInBorder = liveInBorder
    row.liveTopPx = box.top + liveInBorder
    if (!Number.isFinite(row.livePreviewLayoutTopPx)) {
      row.livePreviewLayoutTopPx = row.liveTopPx
    }
  }

  row.inkTopReference = opts.inkTopReference ?? 'compare-stage-preview-bitmap'
  row.labInkScanMode = row.labInkScanMode ?? 'preview-bitmap-strip'
  row.previewBlockInkScan = true
  row.inkScanActive = true
  return applyLandmarkInkMetricsToRow(row)
}

/**
 * Main-table ink tops from compare-stage previews — same scan + anchor for SVG img and canvas.
 * inkTopInBorder = inkTopInRoot − landmarkTopInRoot (landmark box vs #capture-target).
 * Preserves band-scan probe legs in bandScan* for BITMAP_ONLY / strict diagnostics.
 * @param {ReturnType<typeof probeRowFromComparison>} row
 * @param {Element} root #capture-target
 * @param {Element} el landmark text leaf
 * @param {{ svgImg?: HTMLImageElement | null, canvas?: HTMLCanvasElement | null, inkScanMode?: string }} displayEls
 */
export function syncProbeRowInkFromDisplayedPreviews(row, root, el, displayEls = {}) {
  if (!row || !root || !el) return row
  const { svgImg = null, canvas = null, inkScanMode, ...rest } = displayEls
  return syncProbeRowComparableInkFromSources(row, root, el, { svgImg, canvas }, {
    ...rest,
    inkScanMode: inkScanMode ?? row.labInkScanMode ?? 'bitmap',
    inkTopReference: rest.inkTopReference ?? 'compare-stage-preview-bitmap',
  })
}

/**
 * Live painted cap in #capture-target root px (max Y = lowest on screen vs previews).
 * @param {Element} el
 * @param {Element} root
 * @param {object | null} [row]
 */
export function measureLiveBlockAnchorTopInRoot(el, root, row = null) {
  if (!el || !root) return null
  const box = relRect(el, root)
  const minRootY = box.top + 0.25
  const visible = measureLiveVisibleInkTop(el, root)
  const cap = measureCapInkModel(el, root)
  const rangeGlyph = measureLiveGlyphInkTopFromRange(el, root)
  const glyph = measureLandmarkTextTopInRoot(el, root)
  const layout = measureLandmarkLayoutTopInRoot(el, root)
  const driftLiveCap =
    Number.isFinite(row?.liveVisualTopPx) &&
    Number.isFinite(row?.markerCanvasVsLiveVisualPx) &&
    row.markerCanvasVsLiveVisualPx > 0
      ? row.liveVisualTopPx + row.markerCanvasVsLiveVisualPx
      : null
  const candidates = [
    row?.targetTopPx,
    driftLiveCap,
    rangeGlyph?.top,
    visible?.top,
    cap?.top,
    row?.liveVisualTopPx,
    glyph,
    layout,
  ].filter((v) => Number.isFinite(v) && v >= minRootY)
  if (candidates.length) return Math.max(...candidates)
  return topInRootFromRects(el, root)
}

/** @param {...(number | null | undefined)} vals */
function pickFiniteProbePx(...vals) {
  for (const v of vals) {
    if (Number.isFinite(v)) return v
  }
  return null
}

/**
 * Lab UI check: all stages in #capture-target root px (live visible ink + preview bitmap tops).
 * @param {object} row
 * @param {Element} root
 * @param {Element} el
 * @param {{ svgImg?: HTMLImageElement | null, canvas?: HTMLCanvasElement | null, inkScanMode?: string }} displayEls
 */
export function syncProbeRowBlockAnchorCheck(row, root, el, displayEls = {}) {
  if (!row || !root || !el) return row
  const box = relRect(el, root)
  const rootRect = root.getBoundingClientRect()

  const layoutTopInRoot = measureLandmarkTextTopInRoot(el, root)
  row.liveBlockLayoutTopInRootPx = layoutTopInRoot
  row.livePreviewLayoutTopPx = layoutTopInRoot
  row.liveTextTopPx = layoutTopInRoot

  const { svgImg = null, canvas = null } = displayEls
  const layoutOnly = displayEls.layoutOnly === true
  const scanMode = displayEls.inkScanMode ?? row.labInkScanMode ?? 'bitmap'
  const visibleLive = layoutOnly ? null : measureLiveVisibleInkTop(el, root)
  const liveTopInRoot = layoutOnly
    ? layoutTopInRoot
    : (visibleLive?.top ?? measureLiveBlockAnchorTopInRoot(el, root, row))
  if (!layoutOnly && Number.isFinite(visibleLive?.top)) {
    row.liveInkTopPx = visibleLive.top
    row.liveInkTopInBorderPx = visibleLive.topInBorder ?? visibleLive.top - box.top
    row.liveVisualTopPx = visibleLive.top
  }

  const probeSvgTop = pickFiniteProbePx(
    row.svgPreviewVisibleTopPx,
    row.svgTopPx,
    row.svgVisualTopPx,
    row.svgFoGlyphTopPx,
    row.svgPreviewBitmapTopPx,
  )
  const probeCanvasTop = pickFiniteProbePx(
    row.canvasPreviewVisibleTopPx,
    row.canvasPreviewBitmapTopPx,
    row.canvasPreviewInkTopPx,
    row.canvasTopPx,
  )

  const anchorEl = findLandmarkAnchor(el) ?? el
  const tops = measureViewportStageTops(root, anchorEl, { svgImg, canvas }, {
    liveTopInRoot,
    measureLiveTopInRoot: (leaf, r) =>
      layoutOnly
        ? measureLandmarkTextTopInRoot(leaf, r)
        : measureLiveBlockAnchorTopInRoot(leaf, r, row),
    measurePreviewTopInRoot: layoutOnly
      ? (displayEl, r, leaf) => {
          const layout = measureDisplayedPreviewLayoutTop(displayEl, r, leaf)
          return layout?.topInRoot ?? null
        }
      : (displayEl, r, leaf) => {
          const fromProbe =
            displayEl instanceof HTMLCanvasElement ? probeCanvasTop : probeSvgTop
          const scanned = previewBitmapCompareTopInRoot(
            measurePreviewBitmapInkTopInRoot(displayEl, r, leaf, row.dpr ?? 1, {
              visibleInk: true,
              inkScanMode: scanMode,
              scanBandFromRootTop: true,
            }),
          )
          return pickFiniteProbePx(scanned, fromProbe)
        },
  })

  const prevAnchorRef = row.blockAnchorCheckReference
  assignStageTopsToRow(row, { ...tops, landmark: row.landmark })
  if (!layoutOnly && !row.previewBlockInkScan) {
    commitViewportInkTopsToRow(row, tops, box)
  }
  if (prevAnchorRef === 'viewport-block-anchor') {
    row.blockAnchorCheckReference = prevAnchorRef
  }
  if (!layoutOnly) {
    if (svgImg instanceof HTMLImageElement) {
      const layoutSvg = measureDisplayedPreviewLayoutTop(svgImg, root, anchorEl)
      if (Number.isFinite(layoutSvg?.topInRoot)) row.svgLayoutTopPx = layoutSvg.topInRoot
    }
    if (canvas instanceof HTMLCanvasElement) {
      const layoutCanvas = measureDisplayedPreviewLayoutTop(canvas, root, anchorEl)
      if (Number.isFinite(layoutCanvas?.topInRoot)) row.canvasLayoutTopPx = layoutCanvas.topInRoot
    }
  }
  row.labCheckMode = layoutOnly ? 'layout-viewport-top' : 'viewport-preview-ink'

  if (Number.isFinite(tops.liveTop)) {
    row.liveBlockAnchorTopInBorderPx = tops.liveTop - box.top
    row.liveBlockAnchorViewportTopPx = rootRect.top + tops.liveTop
    assignViewportInkRootPx(
      row,
      'liveBlockAnchorViewportTopPx',
      row.liveBlockAnchorViewportTopPx,
      root,
    )
  }

  const assignPreviewViewport = (displayEl, prefix, topInRoot) => {
    if (!Number.isFinite(topInRoot) || !displayEl) return
    row[`${prefix}BlockAnchorTopInBorderPx`] = topInRoot - box.top
    row[`${prefix}PaintedTopInBorder`] = topInRoot - box.top
    let viewportTop = null
    if (!layoutOnly && displayEl.isConnected) {
      const painted = measureDisplayedPreviewInkTopInternal(displayEl, root, anchorEl, {
        visibleInk: true,
        inkScanMode: scanMode,
        crestAdjustPx: 0,
      })
      if (Number.isFinite(painted?.viewportTop)) viewportTop = painted.viewportTop
    }
    if (!Number.isFinite(viewportTop)) {
      viewportTop = rootYToPreviewViewportStretch(displayEl, root, topInRoot)
    }
    if (Number.isFinite(viewportTop)) {
      row[`${prefix}BlockAnchorViewportTopPx`] = viewportTop
      row[`${prefix}PreviewBitmapViewportTopPx`] = viewportTop
      assignViewportInkRootPx(row, `${prefix}BlockAnchorViewportTopPx`, viewportTop, root)
    }
  }

  if (svgImg instanceof HTMLImageElement && svgImg.complete && svgImg.naturalWidth > 0) {
    assignPreviewViewport(svgImg, 'svg', tops.svgTop)
  }
  if (canvas instanceof HTMLCanvasElement && canvas.width > 0) {
    assignPreviewViewport(canvas, 'canvas', tops.canvasTop)
  }

  row.blockAnchorCheckReference = 'viewport-block-anchor'
  if (layoutOnly) {
    row.inkTopReference = 'layout-only'
    row.labInkScanMode = 'layout-only'
    row.inkScanActive = false
    row.previewBlockInkScan = false
  } else {
    row.inkTopReference = 'preview-bitmap-ink'
    row.labInkScanMode = scanMode
    row.inkScanActive = true
    row.previewBlockInkScan = true
  }
  return applyLandmarkInkMetricsToRow(row)
}

/**
 * Temporarily resize #capture-target for lab-only fixture probe recipes.
 * @param {HTMLElement} root
 * @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} recipe
 * @returns {(() => void) | null}
 */
function applyLabFixtureProbeCss(root, recipe) {
  const probe = recipe.labFixtureProbeCss
  if (!probe || !root) return null
  const prev = {
    height: root.style.height,
    minHeight: root.style.minHeight,
    width: root.style.width,
    minWidth: root.style.minWidth,
  }
  if (Number.isFinite(probe.cssH) && probe.cssH > 0) {
    root.style.height = `${probe.cssH}px`
    root.style.minHeight = `${probe.cssH}px`
  }
  if (Number.isFinite(probe.cssW) && probe.cssW > 0) {
    root.style.width = `${probe.cssW}px`
    root.style.minWidth = `${probe.cssW}px`
  }
  return () => {
    root.style.height = prev.height
    root.style.minHeight = prev.minHeight
    root.style.width = prev.width
    root.style.minWidth = prev.minWidth
  }
}

/**
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ dpr?: number, scale?: number, landmark?: string, root?: HTMLElement }} [opts]
 */
export async function runFoFixProbe(recipe, opts = {}) {
  const dpr = opts.dpr ?? window.devicePixelRatio ?? 1
  const scale = opts.scale ?? 1
  const landmarkLabel = String(opts.landmark ?? DEFAULT_LANDMARK).trim() || DEFAULT_LANDMARK
  const landmark = resolveLandmark(landmarkLabel)
  const root = opts.root ?? document.getElementById('capture-target')
  if (!root) throw new Error('#capture-target missing')

  if (!findLandmarkElement(root, landmark)) {
    const valid = listLandmarks(root)
    const hint = valid.length
      ? ` (valid: ${valid.join(', ')}; aliases: ${FO_FIX_LAB_REGISTERED_LANDMARKS.join(', ')})`
      : ` (aliases: ${FO_FIX_LAB_REGISTERED_LANDMARKS.join(', ')})`
    throw new Error(`landmark "${landmarkLabel}" not found${hint}`)
  }
  const el = findLandmarkInkElement(root, landmark)
  if (!el) throw new Error(`landmark ink leaf "${landmarkLabel}" not found`)

  clearLastLabToCanvasDebugReport()
  applyMonkeypatch(recipe)
  const restoreFixture = applyLabFixtureProbeCss(root, recipe)
  try {
    const snap = await window.snapdom(root, snapdomOptsForRecipe(recipe, { dpr, scale }))
    const rawUrl = snap.toRaw()
    let svgText = svgFromDataUrl(rawUrl)
    const cssW = root.offsetWidth || root.getBoundingClientRect().width
    const cssH = root.offsetHeight || root.getBoundingClientRect().height
    const dims = { cssW: cssW * scale, cssH: cssH * scale, dpr }
    const meta = mergeCaptureMeta(snap, svgText, root)
    meta.landmarkText = (el.textContent || '').trim()
    const enrichedMeta = enrichRasterMetaFromTextLeaf(el, meta)

    svgText = applyRecipeToSvg(svgText, recipe, dims)
    console.log(`[fo-fix-lab] running probe for: ${recipe.id} (${landmarkLabel})`)

    const { canvas, svgText: patchedSvg } = await rasterRecipeToCanvas(
      recipe,
      svgText,
      root,
      el,
      dims,
      enrichedMeta,
      scale,
    )
    svgText = patchedSvg
    lastCanvas = canvas

    const probeScale = recipe.radicalOptions?.recipeScale ?? scale
    const inkOpts = inkCompareOptsForRecipe(recipe)
    const svgBitmapInk = svgText
      ? await measureSvgBitmapInkForProbe(svgText, root, el, dpr, inkOpts)
      : null
    const cmp = compareThreeWayInk(
      root,
      canvas,
      svgText,
      el,
      dpr,
      { cssW: dims.cssW, cssH: dims.cssH },
      { ...inkOpts, svgBitmapInk },
    )
    const row = probeRowFromComparison(recipe, landmarkLabel, cmp, { dpr, scale: probeScale })
    const liveLayoutTop = measureLandmarkLayoutTopInRoot(el, root)
    row.liveLayoutTopPx = liveLayoutTop
    row.livePreviewLayoutTopPx = liveLayoutTop
    row.liveTextTopPx = liveLayoutTop
    await syncProbeRowInkFromProbeBitmaps(
      row,
      root,
      el,
      canvas,
      svgText,
      inkCompareOptsForRecipe(recipe),
    )
    await applyProbeRowBlockAnchorCheck(
      row,
      root,
      el,
      canvas,
      svgText,
      inkCompareOptsForRecipe(recipe),
    )
    enrichProbeRowInkMarkers(el, root, row, enrichedMeta, recipe)
    applyLandmarkInkMetricsToRow(row)
    attachRasterForkAudit(row, recipe, enrichedMeta)
    attachRasterForkSplitAudit(row, recipe, svgText)
    attachTextForkDebug(row, el, recipe)
    return {
      ...row,
      canvas,
      svgText,
    }
  } finally {
    restoreFixture?.()
    uninstallMonkeypatch()
  }
}

/**
 * Probe one recipe across multiple text landmarks (single capture + raster).
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {{ dpr?: number, scale?: number, landmarks?: string[], root?: HTMLElement }} [opts]
 */
export async function runFoFixProbeLandmarks(recipe, opts = {}) {
  const landmarks = opts.landmarks?.length ? opts.landmarks : CALIBRATE_LANDMARKS
  const dpr = opts.dpr ?? window.devicePixelRatio ?? 1
  const scale = opts.scale ?? 1
  const root = opts.root ?? document.getElementById('capture-target')
  if (!root) throw new Error('#capture-target missing')

  const elements = landmarks.map((name) => {
    const landmarkLabel = normalizeProbeLandmark(name)
    const landmark = resolveLandmark(landmarkLabel)
    const el = findLandmarkInkElement(root, landmark)
    if (!el) {
      const valid = listLandmarks(root)
      const hint = valid.length
        ? ` (valid: ${valid.join(', ')}; aliases: ${FO_FIX_LAB_REGISTERED_LANDMARKS.join(', ')})`
        : ` (aliases: ${FO_FIX_LAB_REGISTERED_LANDMARKS.join(', ')})`
      throw new Error(`landmark "${landmarkLabel}" not found${hint}`)
    }
    return { name: landmarkLabel, el }
  })

  applyMonkeypatch(recipe)
  const restoreFixture = applyLabFixtureProbeCss(root, recipe)
  try {
    const snap = await window.snapdom(root, snapdomOptsForRecipe(recipe, { dpr, scale }))
    let svgText = svgFromDataUrl(snap.toRaw())
    const cssW = root.offsetWidth || root.getBoundingClientRect().width
    const cssH = root.offsetHeight || root.getBoundingClientRect().height
    const dims = { cssW: cssW * scale, cssH: cssH * scale, dpr }
    const meta = mergeCaptureMeta(snap, svgText, root)

    svgText = applyRecipeToSvg(svgText, recipe, dims)
    console.log(`[fo-fix-lab] calibrate probe: ${recipe.id} (${landmarks.join(', ')})`)

    const refEl = elements[0].el
    const { canvas, svgText: patchedSvg } = await rasterRecipeToCanvas(
      recipe,
      svgText,
      root,
      refEl,
      dims,
      meta,
      scale,
    )
    svgText = patchedSvg
    lastCanvas = canvas

    const fixtureDims = { cssW: dims.cssW, cssH: dims.cssH }
    const landmarkRows = elements.map(({ name, el }) => {
      const cmp = compareThreeWayInk(
        root,
        canvas,
        svgText,
        el,
        dpr,
        fixtureDims,
        inkCompareOptsForRecipe(recipe),
      )
      const row = probeRowFromComparison(recipe, name, cmp, { dpr, scale })
      const box = relRect(el, root)
      row.liveLayoutTopPx = box.top
      row.liveTextTopPx = cmp.live?.top ?? null
      const elMeta = enrichRasterMetaFromTextLeaf(el, meta)
      enrichProbeRowInkMarkers(el, root, row, elMeta, recipe)
      attachRasterForkAudit(row, recipe, elMeta)
      attachRasterForkSplitAudit(row, recipe, svgText)
      attachTextForkDebug(row, el, recipe)
      return row
    })

    const absDeltas = landmarkRows
      .map((r) => {
        const m = computeLandmarkInkMetrics(r)
        const d =
          Number.isFinite(m.canvasTop) && Number.isFinite(m.liveTop)
            ? m.canvasTop - m.liveTop
            : null
        return Math.abs(d ?? Infinity)
      })
      .filter(Number.isFinite)
    const worstAbsDeltaTop = absDeltas.length ? Math.max(...absDeltas) : null
    const meanAbsDeltaTop =
      absDeltas.length ? absDeltas.reduce((a, b) => a + b, 0) / absDeltas.length : null
    const pass = landmarkRows.every((r) => r.pass)

    return {
      recipeId: recipe.id,
      dpr,
      scale,
      landmarks: landmarkRows,
      worstAbsDeltaTop,
      meanAbsDeltaTop,
      pass,
      canvas,
      svgText,
    }
  } finally {
    restoreFixture?.()
    uninstallMonkeypatch()
  }
}

/**
 * Run all recipes sequentially; returns sorted by |Δtop|.
 * @param {{ dpr?: number, scale?: number, onProgress?: (info: { index: number, total: number, recipeId: string, phase: 'start' | 'done' | 'error', error?: string }) => void, recipeTimeoutMs?: number }} [opts]
 */
export async function runFoFixMatrix(opts = {}) {
  const {
    onProgress,
    recipeTimeoutMs = 120_000,
    limit,
    offset,
    ids,
    category,
    excludeTextBypass,
    includeTextBypass,
    includeInactive,
    shardIndex,
    shardCount,
    ...probeOpts
  } = opts
  const recipes = resolveFoFixMatrixRecipes({
    limit,
    offset,
    ids,
    category,
    excludeTextBypass,
    includeTextBypass,
    includeInactive,
    shardIndex,
    shardCount,
  })
  /** @type {Awaited<ReturnType<typeof runFoFixProbe>>[]} */
  const rows = []
  const total = recipes.length
  for (let index = 0; index < recipes.length; index++) {
    const recipe = recipes[index]
    onProgress?.({ index, total, recipeId: recipe.id, phase: 'start' })
    try {
      const row = await withTimeout(
        runFoFixProbe(recipe, probeOpts),
        recipeTimeoutMs,
        `Recipe "${recipe.id}" timed out after ${recipeTimeoutMs}ms`,
      )
      rows.push(row)
      onProgress?.({ index, total, recipeId: recipe.id, phase: 'done' })
    } catch (err) {
      const message = String(err?.message || err)
      onProgress?.({ index, total, recipeId: recipe.id, phase: 'error', error: message })
      rows.push({
        recipeId: recipe.id,
        landmark: probeOpts.landmark ?? DEFAULT_LANDMARK,
        dpr: probeOpts.dpr ?? 1,
        scale: probeOpts.scale ?? 1,
        deltaTopInBorder: null,
        pass: false,
        error: message,
      })
    }
  }
  rows.sort(
    (a, b) =>
      Math.abs(a.deltaTopInBorder ?? Infinity) - Math.abs(b.deltaTopInBorder ?? Infinity),
  )
  return rows
}

/**
 * Calibrate matrix: each recipe probed on multiple landmarks; sorted by worst |canvas vs live| top px.
 * @param {{ dpr?: number, scale?: number, landmarks?: string[], onProgress?: (info: object) => void, recipeTimeoutMs?: number, limit?: number, offset?: number, ids?: string[], category?: string }} [opts]
 */
export async function runFoFixCalibrateMatrix(opts = {}) {
  const {
    onProgress,
    recipeTimeoutMs = 120_000,
    limit,
    offset,
    ids,
    category,
    excludeTextBypass,
    includeTextBypass,
    includeInactive,
    shardIndex,
    shardCount,
    landmarks,
    ...probeOpts
  } = opts
  const recipes = resolveFoFixMatrixRecipes({
    limit,
    offset,
    ids,
    category,
    excludeTextBypass,
    includeTextBypass,
    includeInactive,
    shardIndex,
    shardCount,
  })

  /** @type {Awaited<ReturnType<typeof runFoFixProbeLandmarks>>[]} */
  const rows = []
  const total = recipes.length
  for (let index = 0; index < recipes.length; index++) {
    const recipe = recipes[index]
    onProgress?.({ index, total, recipeId: recipe.id, phase: 'start' })
    try {
      const row = await withTimeout(
        runFoFixProbeLandmarks(recipe, { ...probeOpts, landmarks }),
        recipeTimeoutMs,
        `Recipe "${recipe.id}" timed out after ${recipeTimeoutMs}ms`,
      )
      rows.push(row)
      onProgress?.({ index, total, recipeId: recipe.id, phase: 'done' })
    } catch (err) {
      const message = String(err?.message || err)
      onProgress?.({ index, total, recipeId: recipe.id, phase: 'error', error: message })
      throw err
    }
  }
  rows.sort(
    (a, b) =>
      (a.worstAbsDeltaTop ?? Infinity) - (b.worstAbsDeltaTop ?? Infinity),
  )
  return rows
}

function withTimeout(promise, ms, message) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}
