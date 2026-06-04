/**
 * FO fix lab — layout tops in #capture-target root px (GBCR / Range).
 * Preview stretch ↔ root uses `transformation-matrix` via fo-preview-root-map.mjs.
 */

import {
  previewViewportTopToRootPx as previewViewportTopToRootPxAffine,
  rootYToPreviewViewportStretch as rootYToPreviewViewportStretchAffine,
} from './fo-preview-coordinate-map.mjs'

export {
  buildRootToPreviewViewportMatrix,
  previewViewportTopToRootFromRects,
  rootYToPreviewViewportFromRects,
} from './fo-preview-root-map.mjs'

const DEFAULT_LAYOUT_PASS_THRESHOLD_PX = 0.06

/** Layout / block-anchor parity band (#capture-target root px). */
export const UI_LAYOUT_ALIGNED_THRESHOLD_PX = DEFAULT_LAYOUT_PASS_THRESHOLD_PX

/** @deprecated use {@link UI_LAYOUT_ALIGNED_THRESHOLD_PX} */
export const UI_ALIGNED_THRESHOLD_PX = UI_LAYOUT_ALIGNED_THRESHOLD_PX

/** @deprecated alias */
export const UI_ALIGN_EPS = UI_LAYOUT_ALIGNED_THRESHOLD_PX

/** @param {...(number | null | undefined)} vals */
function pickFinite(...vals) {
  for (const v of vals) {
    if (Number.isFinite(v)) return v
  }
  return null
}

/**
 * Block-row anchor: landmark link/H, else sibling `[data-ink-block]` in the same row.
 * @param {Element | null | undefined} landmarkEl
 * @returns {Element | null}
 */
export function findLandmarkAnchor(landmarkEl) {
  if (!landmarkEl || typeof Element === 'undefined') return landmarkEl ?? null
  if (!(landmarkEl instanceof Element)) return null
  if (landmarkEl.matches?.('a') && (landmarkEl.textContent || '').trim()) return landmarkEl
  const row = landmarkEl.closest?.('.mini-nav-row')
  if (row) {
    const link = row.querySelector('nav[data-landmark] a, nav a, [data-landmark] a')
    if (link instanceof Element && (link.textContent || '').trim()) return link
    const block = row.querySelector('[data-ink-block]')
    if (block instanceof Element) return block
  }
  if (landmarkEl.matches?.('[data-landmark]')) return landmarkEl
  return landmarkEl
}

/**
 * Anchor top in #capture-target root px (GBCR).
 * @param {Element | null | undefined} anchor
 * @param {Element | null | undefined} rootEl
 */
export function topInRootFromRects(anchor, rootEl) {
  if (
    typeof document === 'undefined' ||
    !(anchor instanceof Element) ||
    !(rootEl instanceof Element)
  ) {
    return null
  }
  const a = anchor.getBoundingClientRect()
  const r = rootEl.getBoundingClientRect()
  return a.top - r.top
}

/**
 * Viewport Y → #capture-target root px (transformation-matrix affine inverse).
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} rootEl
 * @param {number} viewportTop
 * @param {{ mode?: 'stretch' | 'contain' }} [opts]
 */
export function previewViewportTopToRootPx(displayEl, rootEl, viewportTop, opts = {}) {
  if (typeof document === 'undefined' || !displayEl || !rootEl) return null
  const mode = opts.mode === 'stretch' ? 'stretch' : 'contain'
  return previewViewportTopToRootPxAffine(displayEl, rootEl, viewportTop, { mode })
}

/**
 * Lab compare-stage previews fill the slot — affine stretch, not letterbox.
 * @param {HTMLCanvasElement | HTMLImageElement} displayEl
 * @param {Element} rootEl
 * @param {number} topInRoot
 */
export function rootYToPreviewViewportStretch(displayEl, rootEl, topInRoot) {
  if (typeof document === 'undefined' || !displayEl || !rootEl) return null
  return rootYToPreviewViewportStretchAffine(displayEl, rootEl, topInRoot, { mode: 'stretch' })
}

/**
 * @param {'live' | 'svg' | 'canvas'} stage
 * @param {Element} landmarkEl
 * @param {Element} rootEl
 * @param {HTMLCanvasElement | HTMLImageElement | null} [displayEl]
 * @param {{
 *   liveTopInRoot?: number | null,
 *   previewTopInRoot?: number | null,
 *   measurePreviewTopInRoot?: (displayEl: HTMLCanvasElement | HTMLImageElement, rootEl: Element, landmarkEl: Element) => number | null,
 * }} [deps]
 */
export function measureStageTopPx(stage, landmarkEl, rootEl, displayEl = null, deps = {}) {
  if (typeof document === 'undefined' || !landmarkEl || !rootEl) return null

  if (stage === 'live') {
    if (Number.isFinite(deps.liveTopInRoot)) return deps.liveTopInRoot
    return topInRootFromRects(landmarkEl, rootEl)
  }

  if (Number.isFinite(deps.previewTopInRoot)) return deps.previewTopInRoot

  if (displayEl && typeof deps.measurePreviewTopInRoot === 'function') {
    const top = deps.measurePreviewTopInRoot(displayEl, rootEl, landmarkEl)
    if (Number.isFinite(top)) return top
  }

  return null
}

/**
 * Live + svg/canvas layout tops in #capture-target root px.
 * @param {Element} rootEl
 * @param {Element} landmarkEl
 * @param {{ svgImg?: HTMLImageElement | null, canvas?: HTMLCanvasElement | null }} displayEls
 * @param {{
 *   liveTopInRoot?: number | null,
 *   measureLiveTopInRoot?: (landmarkEl: Element, rootEl: Element) => number | null,
 *   measurePreviewTopInRoot?: (displayEl: HTMLCanvasElement | HTMLImageElement, rootEl: Element, landmarkEl: Element) => number | null,
 * }} [deps]
 */
export function measureViewportStageTops(rootEl, landmarkEl, displayEls = {}, deps = {}) {
  const liveTopInRoot = pickFinite(
    deps.liveTopInRoot,
    typeof deps.measureLiveTopInRoot === 'function'
      ? deps.measureLiveTopInRoot(landmarkEl, rootEl)
      : null,
    topInRootFromRects(landmarkEl, rootEl),
  )

  const stageDeps = {
    liveTopInRoot,
    measurePreviewTopInRoot: deps.measurePreviewTopInRoot,
  }

  const svgTop = measureStageTopPx(
    'svg',
    landmarkEl,
    rootEl,
    displayEls.svgImg ?? null,
    stageDeps,
  )
  const canvasTop = measureStageTopPx(
    'canvas',
    landmarkEl,
    rootEl,
    displayEls.canvas ?? null,
    stageDeps,
  )

  return {
    liveTop: liveTopInRoot,
    svgTop,
    canvasTop,
  }
}

/**
 * @param {ReturnType<typeof computeLandmarkLayoutMetrics>} m
 * @param {{ maxSvgCanvasGapPx?: number }} [opts]
 */
export function checkViewportStageTopsAcceptance(m, opts = {}) {
  const maxGap = opts.maxSvgCanvasGapPx ?? 1
  const errors = []
  const { liveTop, svgTop, canvasTop } = m ?? {}
  if (!Number.isFinite(liveTop)) errors.push('liveTop missing')
  if (!Number.isFinite(svgTop)) errors.push('svgTop missing')
  if (!Number.isFinite(canvasTop)) errors.push('canvasTop missing')
  if (
    Number.isFinite(svgTop) &&
    Number.isFinite(canvasTop) &&
    Math.abs(svgTop - canvasTop) >= maxGap
  ) {
    errors.push(
      `|svgTop−canvasTop| ${Math.abs(svgTop - canvasTop).toFixed(3)}px (max ${maxGap})`,
    )
  }
  return { pass: errors.length === 0, errors }
}

/** @param {ReturnType<typeof computeLandmarkLayoutMetrics>} m */
export function formatViewportAcceptanceLine(m) {
  const fmt = (v) => (Number.isFinite(v) ? v.toFixed(1) : '—')
  return `live ${fmt(m?.liveTop)}  svg ${fmt(m?.svgTop)}  canvas ${fmt(m?.canvasTop)}`
}

/**
 * @param {object} row
 * @param {{ liveTop?: number | null, svgTop?: number | null, canvasTop?: number | null, landmark?: string }} tops
 */
export function assignStageTopsToRow(row, tops) {
  if (!row) return row
  const { liveTop, svgTop, canvasTop, landmark } = tops
  if (landmark) row.landmark = landmark

  if (Number.isFinite(liveTop)) {
    row.liveBlockAnchorTopInRootPx = liveTop
    row.liveTopPx = liveTop
    row.liveBlockLayoutTopInRootPx = liveTop
    row.livePreviewLayoutTopPx = liveTop
  }
  if (Number.isFinite(svgTop)) {
    row.svgBlockAnchorTopInRootPx = svgTop
    row.svgTopPx = svgTop
    row.svgPreviewLayoutTopPx = svgTop
  }
  if (Number.isFinite(canvasTop)) {
    row.canvasBlockAnchorTopInRootPx = canvasTop
    row.canvasTopPx = canvasTop
    row.canvasPreviewLayoutTopPx = canvasTop
  }

  row.blockAnchorCheckReference = 'capture-target-root'
  row.labCheckMode = 'layout-root-top'
  row.inkScanActive = false
  row.labInkScanMode = 'layout-only'
  return row
}

/**
 * @param {object | null | undefined} row
 */
export function computeLandmarkLayoutMetrics(row) {
  const layoutCheckThresholdPx =
    Number.isFinite(row?.layoutCheckThresholdPx) && row.layoutCheckThresholdPx > 0
      ? row.layoutCheckThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const checkThresholdPx =
    Number.isFinite(row?.checkThresholdPx) && row.checkThresholdPx > 0
      ? row.checkThresholdPx
      : layoutCheckThresholdPx

  const empty = {
    landmark: null,
    liveTop: null,
    svgTop: null,
    canvasTop: null,
    layoutLiveTop: null,
    layoutSvgTop: null,
    layoutCanvasTop: null,
    liveTopInBorder: null,
    svgTopInBorder: null,
    canvasTopInBorder: null,
    deltaSvgVsLive: null,
    deltaCanvasVsLive: null,
    deltaCanvasVsSvg: null,
    deltaSvgVsCanvas: null,
    canvasHigherVsSvgPx: null,
    svgVsCanvasAligned: false,
    svgHigher: false,
    canvasHigher: false,
    svgHigherPx: null,
    canvasHigherPx: null,
    svgHigherOnScreenPx: null,
    canvasHigherOnScreenPx: null,
    uiAligned: false,
    layoutUiAligned: false,
    inkUiAligned: false,
    pass: false,
    inkPassThreshold: layoutCheckThresholdPx,
    checkThresholdPx,
    layoutCheckThresholdPx,
    inkCheckThresholdPx: layoutCheckThresholdPx,
    metricMode: /** @type {'layout'} */ ('layout'),
  }
  if (!row) return empty

  const hasRootStageTops =
    row.blockAnchorCheckReference === 'capture-target-root' ||
    row.blockAnchorCheckReference === 'viewport-block-anchor'

  const layoutLiveTop = hasRootStageTops
    ? pickFinite(
        row.livePreviewLayoutTopPx,
        row.liveLayoutTopPx,
        row.liveBlockLayoutTopInRootPx,
        row.liveTextTopPx,
        row.liveTopPx,
      )
    : pickFinite(row.livePreviewLayoutTopPx, row.liveLayoutTopPx, row.liveTopPx)
  const layoutSvgTop = hasRootStageTops
    ? pickFinite(row.svgLayoutTopPx, row.svgPreviewLayoutTopPx, row.svgTopPx)
    : pickFinite(row.svgPreviewLayoutTopPx, row.svgLayoutTopPx, row.svgTopPx)
  const layoutCanvasTop = hasRootStageTops
    ? pickFinite(row.canvasLayoutTopPx, row.canvasPreviewLayoutTopPx, row.canvasTopPx)
    : pickFinite(row.canvasPreviewLayoutTopPx, row.canvasLayoutTopPx, row.canvasTopPx)

  const liveTop = layoutLiveTop
  const svgTop = layoutSvgTop
  const canvasTop = layoutCanvasTop

  const liveTopInBorder = hasRootStageTops
    ? pickFinite(row.liveBlockAnchorTopInBorderPx, row.liveLayoutPaintedTopInBorder)
    : pickFinite(row.livePaintedTopInBorder, row.liveLayoutPaintedTopInBorder)
  const svgTopInBorder = hasRootStageTops
    ? pickFinite(row.svgBlockAnchorTopInBorderPx)
    : pickFinite(row.svgPaintedTopInBorder)
  const canvasTopInBorder = hasRootStageTops
    ? pickFinite(row.canvasBlockAnchorTopInBorderPx)
    : pickFinite(row.canvasPaintedTopInBorder)

  const deltaSvgVsLive =
    Number.isFinite(liveTop) && Number.isFinite(svgTop) ? svgTop - liveTop : null
  const deltaCanvasVsLive =
    Number.isFinite(liveTop) && Number.isFinite(canvasTop) ? canvasTop - liveTop : null
  const deltaCanvasVsSvg =
    Number.isFinite(svgTop) && Number.isFinite(canvasTop) ? canvasTop - svgTop : null
  const deltaSvgVsCanvas =
    Number.isFinite(deltaCanvasVsSvg) ? -deltaCanvasVsSvg : null

  const svgHigherPx = Number.isFinite(deltaSvgVsLive) ? -deltaSvgVsLive : null
  const canvasHigherPx = Number.isFinite(deltaCanvasVsLive) ? -deltaCanvasVsLive : null
  const canvasHigherVsSvgPx = Number.isFinite(deltaCanvasVsSvg) ? -deltaCanvasVsSvg : null

  const layoutSvgAligned =
    svgHigherPx == null || Math.abs(svgHigherPx) < layoutCheckThresholdPx
  const layoutCanvasAligned =
    canvasHigherPx == null || Math.abs(canvasHigherPx) < layoutCheckThresholdPx
  const layoutUiAligned = layoutSvgAligned && layoutCanvasAligned

  const svgVsCanvasAligned =
    canvasHigherVsSvgPx == null || Math.abs(canvasHigherVsSvgPx) < layoutCheckThresholdPx

  return {
    landmark: row.landmark ?? null,
    liveTop,
    svgTop,
    canvasTop,
    layoutLiveTop,
    layoutSvgTop,
    layoutCanvasTop,
    liveTopInBorder,
    svgTopInBorder,
    canvasTopInBorder,
    deltaSvgVsLive,
    deltaCanvasVsLive,
    deltaCanvasVsSvg,
    deltaSvgVsCanvas,
    canvasHigherVsSvgPx,
    svgVsCanvasAligned,
    svgHigher: svgHigherPx != null && svgHigherPx > layoutCheckThresholdPx,
    canvasHigher: canvasHigherPx != null && canvasHigherPx > layoutCheckThresholdPx,
    svgHigherPx,
    canvasHigherPx,
    svgHigherOnScreenPx: svgHigherPx,
    canvasHigherOnScreenPx: canvasHigherPx,
    uiAligned: layoutUiAligned,
    layoutUiAligned,
    inkUiAligned: layoutUiAligned,
    pass: layoutUiAligned,
    inkPassThreshold: layoutCheckThresholdPx,
    checkThresholdPx,
    layoutCheckThresholdPx,
    inkCheckThresholdPx: layoutCheckThresholdPx,
    metricMode: 'layout',
  }
}

/** @param {object | null | undefined} row */
export function applyLandmarkLayoutMetricsToRow(row) {
  if (!row) return row
  const m = computeLandmarkLayoutMetrics(row)
  if (Number.isFinite(m.liveTopInBorder)) row.livePaintedTopInBorder = m.liveTopInBorder
  if (Number.isFinite(m.svgTopInBorder)) row.svgPaintedTopInBorder = m.svgTopInBorder
  if (Number.isFinite(m.canvasTopInBorder)) row.canvasPaintedTopInBorder = m.canvasTopInBorder
  if (Number.isFinite(m.deltaSvgVsLive)) {
    row.liveVsSvgTopPx = m.deltaSvgVsLive
    row.deltaSvgInBorder = m.deltaSvgVsLive
  }
  if (Number.isFinite(m.deltaCanvasVsLive)) {
    row.liveVsCanvasTopPx = m.deltaCanvasVsLive
    row.deltaTopInBorder = m.deltaCanvasVsLive
  }
  if (Number.isFinite(m.deltaCanvasVsSvg)) {
    row.svgVsCanvasTopPx = m.deltaCanvasVsSvg
    if (Number.isFinite(m.svgTopInBorder) && Number.isFinite(m.canvasTopInBorder)) {
      row.svgVsCanvasTopInBorderPx = m.canvasTopInBorder - m.svgTopInBorder
    }
  }
  row.uiAligned = m.uiAligned
  row.layoutUiAligned = m.layoutUiAligned
  row.inkUiAligned = m.inkUiAligned
  row.pass = m.pass
  row.inkPassThreshold = m.inkPassThreshold
  row.checkThresholdPx = m.checkThresholdPx
  row.layoutCheckThresholdPx = m.layoutCheckThresholdPx
  row.inkCheckThresholdPx = m.inkCheckThresholdPx
  row.metricMode = m.metricMode
  row.inkScanActive = false
  row.labInkScanMode = 'layout-only'
  return row
}

/** Shown once in #metrics — ties on-screen direction to root Y. */
export const INK_METRICS_SIGN_LEGEND =
  '↑ on screen = smaller Y · ΔY = stage − live (+ = ink further down)'

/**
 * On-screen offset: refTop − stageTop (positive = stage ink higher on screen).
 * @param {number | null | undefined} refTop
 * @param {number | null | undefined} stageTop
 */
export function higherOnScreenPx(refTop, stageTop) {
  if (!Number.isFinite(refTop) || !Number.isFinite(stageTop)) return null
  return refTop - stageTop
}

/**
 * ΔY = stageTop − refTop = −(refTop − stageTop).
 * @param {number | null | undefined} higherOnScreenPx refTop − stageTop
 */
export function stageDeltaYFromHigher(higherOnScreenPx) {
  if (!Number.isFinite(higherOnScreenPx)) return null
  return -higherOnScreenPx
}

/** @param {number | null | undefined} higherOnScreenPx refTop − stageTop */
export function formatStageDeltaYSuffix(higherOnScreenPx) {
  const deltaY = stageDeltaYFromHigher(higherOnScreenPx)
  if (deltaY == null) return 'Y —'
  if (Math.abs(deltaY) < 0.005) return 'Y ≈0'
  const sign = deltaY > 0 ? '+' : '-'
  return `Y ${sign}${Math.abs(deltaY).toFixed(2)}`
}

/**
 * @param {number | null | undefined} higherOnScreenPx refTop − stageTop (+ = stage higher on screen)
 * @param {number} [matchThresholdPx]
 */
export function formatStageOnScreenOffsetSuffix(
  higherOnScreenPx,
  matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX,
) {
  if (!Number.isFinite(higherOnScreenPx)) return '—'
  const eps =
    Number.isFinite(matchThresholdPx) && matchThresholdPx > 0
      ? matchThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const ySuffix = formatStageDeltaYSuffix(higherOnScreenPx)
  if (Math.abs(higherOnScreenPx) < eps) return `matches live on screen (${ySuffix})`
  const px = Math.abs(higherOnScreenPx).toFixed(2)
  const dir =
    higherOnScreenPx > 0 ? `${px} px higher on screen` : `${px} px lower on screen`
  return `${dir} (${ySuffix})`
}

/**
 * @param {'SVG' | 'Canvas'} label
 * @param {number | null | undefined} higherOnScreenPx liveTop − stageTop (+ = stage higher on screen)
 * @param {number} [matchThresholdPx]
 * @param {{ ink?: boolean }} [options]
 */
export function formatStageHigherOnScreenPhrase(
  label,
  higherOnScreenPx,
  matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX,
  options = {},
) {
  if (!Number.isFinite(higherOnScreenPx)) return `${label}: —`
  const eps =
    Number.isFinite(matchThresholdPx) && matchThresholdPx > 0
      ? matchThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const subject = options.ink ? `${label} ink` : label
  const ySuffix = formatStageDeltaYSuffix(higherOnScreenPx)
  if (Math.abs(higherOnScreenPx) < eps) {
    return `${subject} matches live on screen (${ySuffix})`
  }
  const px = Math.abs(higherOnScreenPx).toFixed(2)
  return higherOnScreenPx > 0
    ? `${subject} ${px} px higher on screen than live (${ySuffix})`
    : `${subject} ${px} px lower on screen than live (${ySuffix})`
}

/** @param {'SVG' | 'Canvas'} label @param {number | null | undefined} higherOnScreenPx liveTop − stageTop */
export function formatStageVsLivePhrase(
  label,
  higherOnScreenPx,
  matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX,
  options = {},
) {
  return formatStageHigherOnScreenPhrase(label, higherOnScreenPx, matchThresholdPx, options)
}

/** @param {'SVG' | 'Canvas'} label @param {number | null | undefined} higherOnScreenPx liveTop − stageTop */
export function formatStageHigherThanLiveLine(label, higherOnScreenPx) {
  if (!Number.isFinite(higherOnScreenPx)) return `${label}: —`
  return formatStageHigherOnScreenPhrase(label, higherOnScreenPx)
}

/**
 * @param {string} stageLabel
 * @param {string} refLabel
 * @param {number | null | undefined} higherOnScreenPx refTop − stageTop (+ = stage higher on screen)
 * @param {number} [matchThresholdPx]
 */
export function formatStageVsStagePhrase(
  stageLabel,
  refLabel,
  higherOnScreenPx,
  matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX,
) {
  if (!Number.isFinite(higherOnScreenPx)) return `${stageLabel} vs ${refLabel}: —`
  const eps =
    Number.isFinite(matchThresholdPx) && matchThresholdPx > 0
      ? matchThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const ySuffix = formatStageDeltaYSuffix(higherOnScreenPx)
  if (Math.abs(higherOnScreenPx) < eps) {
    return `${stageLabel} matches ${refLabel} on screen (${ySuffix})`
  }
  const px = Math.abs(higherOnScreenPx).toFixed(2)
  return higherOnScreenPx > 0
    ? `${stageLabel} ${px} px higher on screen than ${refLabel} (${ySuffix})`
    : `${stageLabel} ${px} px lower on screen than ${refLabel} (${ySuffix})`
}

/**
 * Canvas-vs-SVG is redundant when canvas matches live — svg-vs-live already implies the gap.
 * @param {{ canvasHigherOnScreenPx?: number | null, svgTop?: number | null, canvasTop?: number | null }} m
 * @param {number} [matchThresholdPx]
 */
export function shouldShowCanvasVsSvgLine(m, matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX) {
  if (!Number.isFinite(m?.svgTop) || !Number.isFinite(m?.canvasTop)) return false
  const eps =
    Number.isFinite(matchThresholdPx) && matchThresholdPx > 0
      ? matchThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  if (!Number.isFinite(m.canvasHigherOnScreenPx)) return true
  return Math.abs(m.canvasHigherOnScreenPx) >= eps
}

/**
 * Canvas vs SVG on-screen phrase (same convention as stage-vs-live).
 * @param {{ svgTop?: number | null, canvasTop?: number | null, canvasHigherVsSvgPx?: number | null }} m
 * @param {number} [matchThresholdPx]
 */
export function formatCanvasVsSvgLine(m, matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX) {
  if (!shouldShowCanvasVsSvgLine(m, matchThresholdPx)) return null
  const eps =
    Number.isFinite(matchThresholdPx) && matchThresholdPx > 0
      ? matchThresholdPx
      : UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const higher =
    Number.isFinite(m.canvasHigherVsSvgPx) && m.canvasHigherVsSvgPx != null
      ? m.canvasHigherVsSvgPx
      : higherOnScreenPx(m.svgTop, m.canvasTop)
  return formatStageVsStagePhrase('Canvas', 'SVG', higher, eps)
}

/**
 * @deprecated Prefer formatCanvasVsSvgLine(m) — kept for call sites that only have tops.
 * @param {number | null | undefined} canvasTop
 * @param {number | null | undefined} svgTop
 * @param {number} [matchThresholdPx]
 */
export function formatCanvasVsSvgSummaryLine(
  canvasTop,
  svgTop,
  matchThresholdPx = UI_LAYOUT_ALIGNED_THRESHOLD_PX,
) {
  return formatCanvasVsSvgLine(
    { svgTop, canvasTop, canvasHigherVsSvgPx: higherOnScreenPx(svgTop, canvasTop) },
    matchThresholdPx,
  )
}

/** @param {ReturnType<typeof computeLandmarkLayoutMetrics>} m */
export function formatLabRowStageYLine(m) {
  const fmt = (v) => (Number.isFinite(v) ? v.toFixed(2) : '—')
  if (!m || !Number.isFinite(m.liveTop)) {
    return `Live Y: — | SVG Y: — | Canvas Y: —`
  }
  const eps = m.layoutCheckThresholdPx ?? UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const svgSuffix = formatStageOnScreenOffsetSuffix(m.svgHigherOnScreenPx, eps)
  const canvasSuffix = formatStageOnScreenOffsetSuffix(m.canvasHigherOnScreenPx, eps)
  return `Live Y (layout): ${fmt(m.liveTop)} | SVG Y: ${fmt(m.svgTop)} (${svgSuffix}) | Canvas Y: ${fmt(m.canvasTop)} (${canvasSuffix})`
}

/** @param {ReturnType<typeof computeLandmarkLayoutMetrics>} m */
export function formatViewportCheckVerdict(m) {
  if (!m || !Number.isFinite(m.liveTop)) {
    return 'Check: need live + preview tops (run recipe with SVG/canvas mounted)'
  }
  const eps = m.layoutCheckThresholdPx ?? UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const svgLine = formatStageHigherOnScreenPhrase('SVG', m.svgHigherOnScreenPx, eps)
  const canvasLine = formatStageHigherOnScreenPhrase('Canvas', m.canvasHigherOnScreenPx, eps)
  const lines = [svgLine, canvasLine]
  const canvasVsSvg = formatCanvasVsSvgLine(m, eps)
  if (canvasVsSvg) lines.push(canvasVsSvg)
  return lines.join('\n')
}

/** @param {ReturnType<typeof computeLandmarkLayoutMetrics>} m */
export function formatViewportCheckMetrics(m) {
  if (!m) return '—'
  const fmt = (v) => (Number.isFinite(v) ? v.toFixed(3) : '—')
  const eps = m.layoutCheckThresholdPx ?? UI_LAYOUT_ALIGNED_THRESHOLD_PX
  const lines = [
    `Landmark: ${m.landmark ?? '—'} · #capture-target root px · layout (GBCR)`,
    INK_METRICS_SIGN_LEGEND,
    `Live top Y:   ${fmt(m.liveTop)} px`,
    `SVG top Y:    ${fmt(m.svgTop)} px`,
    `Canvas top Y: ${fmt(m.canvasTop)} px`,
  ]
  if (
    Number.isFinite(m.svgHigherOnScreenPx) &&
    Math.abs(m.svgHigherOnScreenPx) >= eps
  ) {
    lines.push(formatStageHigherOnScreenPhrase('SVG', m.svgHigherOnScreenPx, eps))
  }
  if (
    Number.isFinite(m.canvasHigherOnScreenPx) &&
    Math.abs(m.canvasHigherOnScreenPx) >= eps
  ) {
    lines.push(formatStageHigherOnScreenPhrase('Canvas', m.canvasHigherOnScreenPx, eps))
  }
  const canvasVsSvg = formatCanvasVsSvgLine(m, eps)
  if (canvasVsSvg) lines.push(canvasVsSvg)
  lines.push(`Layout aligned (ε ${eps}px): ${m.layoutUiAligned ? 'yes' : 'no'}`)
  return lines.join('\n')
}

/** Layout-only helpers for probes that previously toggled ink scan off. */
export function computeLandmarkLayoutMetricsFromRow(row) {
  return computeLandmarkLayoutMetrics({
    ...row,
    inkScanActive: false,
    labInkScanMode: 'layout-only',
    labCheckMode: row?.labCheckMode ?? 'layout-root-top',
  })
}

export function applyLandmarkLayoutMetricsFromRow(row) {
  if (!row) return row
  row.inkScanActive = false
  row.labInkScanMode = 'layout-only'
  return applyLandmarkLayoutMetricsToRow(row)
}

export * from './fo-landmark-ink-metrics.mjs'
