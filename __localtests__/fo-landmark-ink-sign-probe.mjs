#!/usr/bin/env node
/**
 * Unit probe — ink on-screen sign + phrasing (live/svg/canvas tops).
 *
 *   node __localtests__/fo-landmark-ink-sign-probe.mjs
 */
import {
  computeLandmarkInkMetrics,
  formatCanvasVsSvgSummaryLine,
  formatStageHigherOnScreenPhrase,
  formatStageVsStagePhrase,
  formatViewportCheckMetrics,
  formatViewportCheckVerdict,
  higherOnScreenPx,
  INK_METRICS_SIGN_LEGEND,
} from './fo-landmark-ink-metrics.mjs'

const EPS = 0.5
const LIVE = 14.5
const SVG = 15
const CANVAS = 14

function assertEq(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}\n  expected: ${expected}\n  actual:   ${actual}`)
  }
}

function assertIncludes(text, needle, label) {
  if (!text.includes(needle)) {
    throw new Error(`${label}\n  missing: ${needle}\n  in: ${text}`)
  }
}

function main() {
  const svgHigher = higherOnScreenPx(LIVE, SVG)
  const canvasHigher = higherOnScreenPx(LIVE, CANVAS)
  const canvasHigherVsSvg = higherOnScreenPx(SVG, CANVAS)

  assertEq(svgHigher, -0.5, 'svgHigherOnScreenPx')
  assertEq(canvasHigher, 0.5, 'canvasHigherOnScreenPx')
  assertEq(canvasHigherVsSvg, 1, 'canvasHigherVsSvgPx')

  const svgPhrase = formatStageHigherOnScreenPhrase('SVG', svgHigher, EPS, { ink: true })
  const canvasPhrase = formatStageHigherOnScreenPhrase('Canvas', canvasHigher, EPS, {
    ink: true,
  })
  const canvasVsSvgPhrase = formatStageVsStagePhrase('Canvas', 'SVG', canvasHigherVsSvg, EPS)
  const canvasSvgSummary = formatCanvasVsSvgSummaryLine(CANVAS, SVG, EPS)

  assertEq(
    svgPhrase,
    'SVG ink 0.50 px lower on screen than live (Y +0.50)',
    'SVG vs live phrase',
  )
  assertEq(
    canvasPhrase,
    'Canvas ink 0.50 px higher on screen than live (Y -0.50)',
    'Canvas vs live phrase',
  )
  assertEq(
    canvasVsSvgPhrase,
    'Canvas 1.00 px higher on screen than SVG (Y -1.00)',
    'Canvas vs SVG phrase',
  )
  assertEq(canvasSvgSummary, canvasVsSvgPhrase, 'canvas vs SVG summary matches stage phrase')

  for (const phrase of [svgPhrase, canvasPhrase, canvasVsSvgPhrase, canvasSvgSummary]) {
    assertIncludes(phrase, 'on screen', 'phrase mentions on screen')
  }
  assertIncludes(svgPhrase, '(Y +0.50)', 'SVG Y delta')
  assertIncludes(canvasPhrase, '(Y -0.50)', 'Canvas Y delta')

  const row = {
    landmark: 'Home',
    inkScanActive: true,
    labInkScanMode: 'preview-bitmap-ink',
    liveInkTopPx: LIVE,
    svgPreviewVisibleTopPx: SVG,
    svgTopPx: SVG,
    canvasPreviewVisibleTopPx: CANVAS,
    canvasTopPx: CANVAS,
  }
  const m = computeLandmarkInkMetrics(row)

  assertEq(m.svgHigherOnScreenPx, -0.5, 'computeLandmarkInkMetrics svgHigher')
  assertEq(m.canvasHigherOnScreenPx, 0.5, 'computeLandmarkInkMetrics canvasHigher')
  assertEq(m.canvasHigherVsSvgPx, 1, 'computeLandmarkInkMetrics canvasHigherVsSvg')

  const metrics = formatViewportCheckMetrics(m)
  assertIncludes(metrics, INK_METRICS_SIGN_LEGEND, 'metrics legend')
  for (const line of [svgPhrase, canvasPhrase, canvasSvgSummary]) {
    if (!metrics.includes(line)) {
      throw new Error(`formatViewportCheckMetrics missing line: ${line}\n${metrics}`)
    }
  }

  const verdict = formatViewportCheckVerdict(m)
  assertEq(
    verdict,
    [svgPhrase, canvasPhrase, canvasVsSvgPhrase].join('\n'),
    'formatViewportCheckVerdict',
  )

  // Honest bitmap rows: svg/canvas compare tops = scan rows (no decode reconcile).
  const bitmapRow = {
    landmark: 'Home',
    inkScanActive: true,
    labInkScanMode: 'preview-bitmap-ink',
    liveInkTopPx: 14,
    svgTopPx: 16,
    svgPreviewVisibleTopPx: 16,
    svgPreviewBitmapTopPx: 16,
    canvasTopPx: 14,
    canvasPreviewBitmapTopPx: 14,
    livePreviewBitmapInkTopPx: 14,
    previewBitmapRowsAgree: false,
    svgImgDecodeLagPx: 2,
  }
  const bitmapM = computeLandmarkInkMetrics(bitmapRow)
  const bitmapVerdict = formatViewportCheckVerdict(bitmapM)
  assertIncludes(
    bitmapVerdict,
    'Canvas ink matches live on screen (Y ≈0)',
    'formatViewportCheckVerdict canvas bitmap matches live preview-band',
  )
  assertIncludes(
    bitmapVerdict,
    'SVG ink 2.00 px lower on screen than live (Y +2.00)',
    'formatViewportCheckVerdict honest svg bitmap row',
  )

  // Visible live cap (14.5) vs integer preview-band raster (14) — structural, not reconcile.
  const visibleLiveRow = {
    landmark: 'Home',
    inkScanActive: true,
    labInkScanMode: 'preview-bitmap-ink',
    liveInkTopPx: 14.5,
    liveUsesVisibleCap: true,
    liveInkReference: 'visible-dom-cap',
    livePreviewBitmapInkTopPx: 14,
    livePreviewInkTopPx: 14,
    svgPreviewVisibleTopPx: 14,
    svgTopPx: 14,
    canvasPreviewVisibleTopPx: 14,
    canvasTopPx: 14,
    canvasPreviewBitmapTopPx: 14,
    previewBitmapRowsAgree: true,
  }
  const visibleLiveM = computeLandmarkInkMetrics(visibleLiveRow)
  assertEq(visibleLiveM.liveTop, 14.5, 'visible live ink top')
  assertEq(visibleLiveM.canvasTop, 14, 'canvas bitmap scan row')
  assertEq(visibleLiveM.canvasHigherOnScreenPx, 0.5, 'canvasHigherOnScreenPx visible live')
  const visibleLiveVerdict = formatViewportCheckVerdict(visibleLiveM)
  assertIncludes(
    visibleLiveVerdict,
    'Canvas ink 0.50 px higher on screen than live (Y -0.50)',
    'formatViewportCheckVerdict visible live vs canvas bitmap',
  )
  assertIncludes(
    visibleLiveVerdict,
    'SVG ink 0.50 px higher on screen than live (Y -0.50)',
    'formatViewportCheckVerdict visible live vs svg bitmap',
  )

  console.log('fo-landmark-ink-sign-probe: OK')
  console.log('\nBefore (ambiguous):')
  console.log('  SVG 0.50px lower than live  (Y 15 > 14.5 — reads backwards)')
  console.log('\nAfter (user example live=14.5, svg=15, canvas=14):')
  console.log(`  ${svgPhrase}`)
  console.log(`  ${canvasPhrase}`)
  console.log('\nExample #metrics output:\n' + metrics)
}

main()
