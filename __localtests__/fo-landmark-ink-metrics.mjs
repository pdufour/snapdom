/**
 * FO fix lab — bitmap ink metrics (preview band scan) + layout fallback.
 * Layout helpers live in fo-landmark-layout-metrics.mjs.
 */

import {
  UI_LAYOUT_ALIGNED_THRESHOLD_PX,
  computeLandmarkLayoutMetrics,
  formatCanvasVsSvgLine,
  formatCanvasVsSvgSummaryLine,
  formatLabRowStageYLine,
  formatStageHigherOnScreenPhrase,
  formatStageOnScreenOffsetSuffix,
  formatStageVsLivePhrase,
  formatStageVsStagePhrase,
  formatViewportCheckMetrics as formatLayoutViewportCheckMetrics,
  formatViewportCheckVerdict as formatLayoutViewportCheckVerdict,
  INK_METRICS_SIGN_LEGEND,
  shouldShowCanvasVsSvgLine,
} from './fo-landmark-layout-metrics.mjs'

export {
  assignStageTopsToRow,
  buildRootToPreviewViewportMatrix,
  checkViewportStageTopsAcceptance,
  findLandmarkAnchor,
  formatCanvasVsSvgLine,
  formatCanvasVsSvgSummaryLine,
  formatLabRowStageYLine,
  formatStageHigherOnScreenPhrase,
  formatStageHigherThanLiveLine,
  formatStageOnScreenOffsetSuffix,
  formatStageVsLivePhrase,
  formatStageVsStagePhrase,
  formatViewportAcceptanceLine,
  higherOnScreenPx,
  INK_METRICS_SIGN_LEGEND,
  measureStageTopPx,
  measureViewportStageTops,
  previewViewportTopToRootPx,
  rootYToPreviewViewportStretch,
  shouldShowCanvasVsSvgLine,
  topInRootFromRects,
  UI_LAYOUT_ALIGNED_THRESHOLD_PX,
} from './fo-landmark-layout-metrics.mjs'

/** Bitmap ink parity band (#capture-target root px). */
export const UI_INK_ALIGNED_THRESHOLD_PX = 0.5

/** @param {...(number | null | undefined)} vals */
function pickFinite(...vals) {
  for (const v of vals) {
    if (Number.isFinite(v)) return v
  }
  return null
}

/**
 * Live compare ink uses visible DOM cap crest vs integer preview-band raster row.
 * @param {object | null | undefined} row
 */
export function rowLiveUsesVisibleCap(row) {
  if (!row) return false
  if (row.liveUsesVisibleCap === true) return true
  if (row.liveUsesVisibleCap === false) return false
  if (row.liveInkReference === 'preview-band-raster') return false
  const bitmap = pickFinite(row.livePreviewBitmapInkTopPx, row.livePreviewInkTopPx)
  const visible = pickFinite(row.liveRangeInkTopPx, row.liveVisualTopPx, row.liveInkTopPx)
  if (!Number.isFinite(bitmap) || !Number.isFinite(visible)) {
    return row.liveInkReference === 'visible-dom-cap'
  }
  if (Number.isInteger(bitmap) && !Number.isInteger(visible)) return true
  return row.liveInkReference === 'visible-dom-cap' && visible !== bitmap
}

/**
 * Runner split canvas visible metric vs raw FO bitmap row.
 * @param {object | null | undefined} row
 */
export function rowHasSplitCanvasVisible(row) {
  if (!row) return false
  const vis = row.canvasPreviewVisibleTopPx ?? row.canvasTopPx
  const bmp = pickFinite(row.canvasPreviewBitmapTopPx, row.canvasPreviewBitmapTopInRoot)
  return Number.isFinite(vis) && Number.isFinite(bmp) && vis !== bmp
}

/**
 * Reconciled SVG visible top vs raw FO img bitmap (decode lag or explicit split fields).
 * @param {object | null | undefined} row
 */
export function rowHasSplitSvgBitmap(row) {
  if (!row) return false
  const vis = pickFinite(row.svgPreviewVisibleTopPx, row.svgTopPx)
  const bmp = pickFinite(row.svgPreviewBitmapTopPx, row.svgImgBitmapTopInRoot)
  return Number.isFinite(vis) && Number.isFinite(bmp) && vis !== bmp
}

/** @param {object | null | undefined} row */
export function isInkScanRow(row) {
  if (!row) return false
  if (row.inkScanActive === true) return true
  if (row.previewBlockInkScan === true) return true
  const mode = row.labInkScanMode ?? row.inkScanMode ?? ''
  return mode !== 'layout-only' && mode !== 'layout'
}

/**
 * Ink-aware landmark metrics — prefers bitmap tops when ink scan is active.
 * @param {object | null | undefined} row
 */
export function computeLandmarkInkMetrics(row) {
  const layout = computeLandmarkLayoutMetrics(row)
  if (!row || !isInkScanRow(row)) {
    return { ...layout, metricMode: 'layout', inkUiAligned: layout.layoutUiAligned }
  }

  const inkCheckThresholdPx =
    Number.isFinite(row.inkCheckThresholdPx) && row.inkCheckThresholdPx > 0
      ? row.inkCheckThresholdPx
      : UI_INK_ALIGNED_THRESHOLD_PX

  // Probe-time tops — runFoFixProbe / syncProbeRowInkFromProbeBitmaps (not post-mount preview resync).
  const liveTop = pickFinite(row.liveInkTopPx, row.liveTopPx, layout.liveTop)
  const svgTop = pickFinite(row.svgPreviewVisibleTopPx, row.svgTopPx, layout.svgTop)
  const canvasTop = pickFinite(
    row.canvasPreviewVisibleTopPx,
    row.canvasTopPx,
    layout.canvasTop,
  )

  // Bitmap sidecars — display / diagnostics only; do not override metric tops.
  const livePreviewBitmapTop = pickFinite(
    row.livePreviewBitmapInkTopPx,
    row.livePreviewInkTopPx,
  )
  const svgBitmapTop = pickFinite(row.svgPreviewBitmapTopPx, row.svgImgBitmapTopInRoot)
  const canvasBitmapTop = pickFinite(
    row.canvasPreviewBitmapTopPx,
    row.canvasPreviewBitmapTopInRoot,
    row.canvasPreviewInkTopPx,
  )

  const liveTopInBorder = pickFinite(
    row.liveInkTopInBorderPx,
    row.liveBlockAnchorTopInBorderPx,
    row.livePaintedTopInBorder,
    layout.liveTopInBorder,
  )
  const svgTopInBorder = pickFinite(
    row.svgPaintedTopInBorder,
    row.svgBlockAnchorTopInBorderPx,
    layout.svgTopInBorder,
  )
  const canvasTopInBorder = pickFinite(
    row.canvasBlockAnchorTopInBorderPx,
    row.canvasPaintedTopInBorder,
    layout.canvasTopInBorder,
  )

  const deltaSvgVsLive =
    Number.isFinite(liveTop) && Number.isFinite(svgTop) ? svgTop - liveTop : null
  const deltaCanvasVsLive =
    Number.isFinite(liveTop) && Number.isFinite(canvasTop) ? canvasTop - liveTop : null
  const deltaCanvasVsSvg =
    Number.isFinite(svgTop) && Number.isFinite(canvasTop) ? canvasTop - svgTop : null

  const svgHigherPx = Number.isFinite(deltaSvgVsLive) ? -deltaSvgVsLive : null
  const canvasHigherPx = Number.isFinite(deltaCanvasVsLive) ? -deltaCanvasVsLive : null
  const canvasHigherVsSvgPx = Number.isFinite(deltaCanvasVsSvg) ? -deltaCanvasVsSvg : null

  const inkSvgAligned =
    svgHigherPx == null || Math.abs(svgHigherPx) < inkCheckThresholdPx
  const inkCanvasAligned =
    canvasHigherPx == null || Math.abs(canvasHigherPx) < inkCheckThresholdPx
  const inkUiAligned = inkSvgAligned && inkCanvasAligned
  const svgVsCanvasAligned =
    canvasHigherVsSvgPx == null || Math.abs(canvasHigherVsSvgPx) < inkCheckThresholdPx

  return {
    ...layout,
    landmark: row.landmark ?? layout.landmark,
    liveTop,
    svgTop,
    canvasTop,
    livePreviewBitmapTop,
    svgBitmapTop,
    canvasBitmapTop,
    layoutLiveTop: layout.liveTop,
    layoutSvgTop: layout.svgTop,
    layoutCanvasTop: layout.canvasTop,
    liveTopInBorder,
    svgTopInBorder,
    canvasTopInBorder,
    deltaSvgVsLive,
    deltaCanvasVsLive,
    deltaCanvasVsSvg,
    deltaSvgVsCanvas: Number.isFinite(deltaCanvasVsSvg) ? -deltaCanvasVsSvg : null,
    canvasHigherVsSvgPx,
    svgVsCanvasAligned,
    svgHigher: svgHigherPx != null && svgHigherPx > inkCheckThresholdPx,
    canvasHigher: canvasHigherPx != null && canvasHigherPx > inkCheckThresholdPx,
    svgHigherPx,
    canvasHigherPx,
    svgHigherOnScreenPx: svgHigherPx,
    canvasHigherOnScreenPx: canvasHigherPx,
    uiAligned: inkUiAligned,
    layoutUiAligned: layout.layoutUiAligned,
    inkUiAligned,
    pass: inkUiAligned,
    inkPassThreshold: inkCheckThresholdPx,
    inkCheckThresholdPx,
    metricMode: 'ink',
  }
}

/** @param {object | null | undefined} row */
export function applyLandmarkInkMetricsToRow(row) {
  if (!row) return row
  const m = computeLandmarkInkMetrics(row)
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
  row.inkCheckThresholdPx = m.inkCheckThresholdPx
  row.metricMode = m.metricMode
  if (isInkScanRow(row) && m.metricMode === 'ink') {
    row.inkScanActive = true
    row.labInkScanMode = row.labInkScanMode ?? 'preview-bitmap'
    if (Number.isFinite(m.liveTop)) {
      row.liveTopPx = m.liveTop
      row.liveInkTopPx = m.liveTop
    }
    if (Number.isFinite(m.svgTop)) {
      const rawBitmap = row.svgPreviewBitmapTopPx
      row.svgTopPx = m.svgTop
      row.svgPreviewVisibleTopPx = m.svgTop
      row.svgBlockAnchorTopInRootPx = m.svgTop
      if (Number.isFinite(rawBitmap) && rowHasSplitSvgBitmap(row)) {
        row.svgImgBitmapTopInRoot = rawBitmap
      }
    }
    if (Number.isFinite(m.canvasTop)) {
      const rawBitmap = row.canvasPreviewBitmapTopPx
      row.canvasTopPx = m.canvasTop
      row.canvasPreviewVisibleTopPx = m.canvasTop
      row.canvasBlockAnchorTopInRootPx = m.canvasTop
      if (Number.isFinite(rawBitmap) && rowHasSplitCanvasVisible(row)) {
        row.canvasPreviewBitmapTopInRoot = rawBitmap
      } else if (!Number.isFinite(row.canvasPreviewBitmapTopPx)) {
        row.canvasPreviewBitmapTopPx = m.canvasTop
      }
    }
  }
  return row
}

/** @param {ReturnType<typeof computeLandmarkInkMetrics>} m */
export function formatViewportCheckVerdict(m) {
  if (!m || m.metricMode !== 'ink' || !Number.isFinite(m.liveTop)) {
    return formatLayoutViewportCheckVerdict(m)
  }
  const eps = m.inkCheckThresholdPx ?? UI_INK_ALIGNED_THRESHOLD_PX
  const lines = [
    formatStageHigherOnScreenPhrase('SVG', m.svgHigherOnScreenPx, eps, { ink: true }),
    formatStageHigherOnScreenPhrase('Canvas', m.canvasHigherOnScreenPx, eps, { ink: true }),
  ]
  const canvasVsSvg = formatCanvasVsSvgLine(m, eps)
  if (canvasVsSvg) lines.push(canvasVsSvg)
  return lines.join('\n')
}

/** @param {ReturnType<typeof computeLandmarkInkMetrics>} m */
export function formatViewportCheckMetrics(m) {
  if (!m || m.metricMode !== 'ink') {
    return formatLayoutViewportCheckMetrics(m)
  }
  const fmt = (v) => (Number.isFinite(v) ? v.toFixed(3) : '—')
  const eps = m.inkCheckThresholdPx ?? UI_INK_ALIGNED_THRESHOLD_PX
  const lines = [
    `Landmark: ${m.landmark ?? '—'} · #capture-target root px · bitmap ink (preview band)`,
    INK_METRICS_SIGN_LEGEND,
    `Live ink Y:   ${fmt(m.liveTop)} px`,
    `SVG ink Y:    ${fmt(m.svgTop)} px`,
    `Canvas ink Y: ${fmt(m.canvasTop)} px`,
  ]
  if (
    Number.isFinite(m.svgHigherOnScreenPx) &&
    Math.abs(m.svgHigherOnScreenPx) >= eps
  ) {
    lines.push(formatStageHigherOnScreenPhrase('SVG', m.svgHigherOnScreenPx, eps, { ink: true }))
  }
  if (
    Number.isFinite(m.canvasHigherOnScreenPx) &&
    Math.abs(m.canvasHigherOnScreenPx) >= eps
  ) {
    lines.push(formatStageHigherOnScreenPhrase('Canvas', m.canvasHigherOnScreenPx, eps, { ink: true }))
  }
  const canvasVsSvg = formatCanvasVsSvgLine(m, eps)
  if (canvasVsSvg) lines.push(canvasVsSvg)
  lines.push(`Ink aligned (ε ${eps}px): ${m.inkUiAligned ? 'yes' : 'no'}`)
  return lines.join('\n')
}

/** @param {ReturnType<typeof computeLandmarkInkMetrics>} m */
export function formatLabRowStageYLineInk(m) {
  const fmt = (v) => (Number.isFinite(v) ? v.toFixed(2) : '—')
  if (!m || !Number.isFinite(m.liveTop)) return formatLabRowStageYLine(m)
  const eps = m.inkCheckThresholdPx ?? UI_INK_ALIGNED_THRESHOLD_PX
  const svgSuffix = formatStageOnScreenOffsetSuffix(m.svgHigherOnScreenPx, eps)
  const canvasSuffix = formatStageOnScreenOffsetSuffix(m.canvasHigherOnScreenPx, eps)
  return `Live Y (ink): ${fmt(m.liveTop)} | SVG Y: ${fmt(m.svgTop)} (${svgSuffix}) | Canvas Y: ${fmt(m.canvasTop)} (${canvasSuffix})`
}

/**
 * Canonical ink tops after compare-stage viewport check (independent svg/canvas scans).
 * @param {object} row
 * @param {{ liveTop?: number | null, svgTop?: number | null, canvasTop?: number | null }} tops
 * @param {{ top?: number } | null} [box]
 */
export function commitViewportInkTopsToRow(row, tops, box = null) {
  if (!row || !tops) return row
  const border = (top) =>
    Number.isFinite(top) && box && Number.isFinite(box.top) ? top - box.top : null
  if (Number.isFinite(tops.liveTop)) {
    row.liveTopPx = tops.liveTop
    row.liveInkTopPx = tops.liveTop
    row.liveVisualTopPx = tops.liveTop
    row.liveBlockAnchorTopInRootPx = tops.liveTop
    const b = border(tops.liveTop)
    if (b != null) {
      row.liveInkTopInBorderPx = b
      row.livePaintedTopInBorder = b
      row.liveBlockAnchorTopInBorderPx = b
    }
  }
  if (Number.isFinite(tops.svgTop)) {
    row.svgTopPx = tops.svgTop
    row.svgPreviewVisibleTopPx = tops.svgTop
    row.svgBlockAnchorTopInRootPx = tops.svgTop
    if (Number.isFinite(tops.svgBitmapRaw)) {
      row.svgPreviewBitmapTopPx = tops.svgBitmapRaw
    } else if (!Number.isFinite(row.svgPreviewBitmapTopPx)) {
      row.svgPreviewBitmapTopPx = tops.svgTop
    }
    const b = border(tops.svgTop)
    if (b != null) {
      row.svgPaintedTopInBorder = b
      row.svgBlockAnchorTopInBorderPx = b
    }
  }
  if (Number.isFinite(tops.canvasTop)) {
    row.canvasTopPx = tops.canvasTop
    row.canvasPreviewVisibleTopPx = tops.canvasTop
    row.canvasPreviewInkTopPx = tops.canvasTop
    row.canvasBlockAnchorTopInRootPx = tops.canvasTop
    if (Number.isFinite(tops.canvasBitmapRaw)) {
      row.canvasPreviewBitmapTopPx = tops.canvasBitmapRaw
    } else if (!Number.isFinite(row.canvasPreviewBitmapTopPx)) {
      row.canvasPreviewBitmapTopPx = tops.canvasTop
    }
    const b = border(tops.canvasTop)
    if (b != null) {
      row.canvasPaintedTopInBorder = b
      row.canvasBlockAnchorTopInBorderPx = b
    }
  }
  row.blockAnchorCheckReference = 'viewport-block-anchor'
  row.inkScanActive = true
  row.labCheckMode = 'viewport-preview-ink'
  row.inkTopReference = 'preview-bitmap-ink'
  row.labInkScanMode = 'preview-bitmap-ink'
  row.previewBlockInkScan = true
  return row
}

export {
  applyLandmarkLayoutMetricsToRow,
  computeLandmarkLayoutMetrics,
} from './fo-landmark-layout-metrics.mjs'
