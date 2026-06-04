/**
 * Extended landmark metrics (checkout playground / dumps).
 * Kept separate from raster-debug-metrics.js to avoid circular imports.
 */
import {
  compareLiveCanvasCapInk,
  measureCapInk,
} from '../__tests__/helpers/svgLiveCompare.js'

export const EXTENDED_METRIC_CATEGORIES = [
  'all',
  'flags',
  'deltas',
  'paint',
  'layout',
  'text',
  'flex',
  'raster',
]

function findLandmarkEl(root, label) {
  const want = String(label || '').trim()
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0 && want !== 'Remember my details') continue
    if ((el.textContent || '').trim() === want) return el
  }
  return null
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string} label
 * @param {object} [opts]
 */
export function buildExtendedMetrics(root, svgMarkup, canvas, label, opts = {}) {
  const el = opts.el ?? findLandmarkEl(root, label)
  const dpr = opts.dpr ?? 1
  const cap = el ? measureCapInk(el, root) : null
  const canvasCompare =
    el && canvas ? compareLiveCanvasCapInk(root, canvas, el, dpr) : null
  const canvasTop = canvasCompare?.canvasVsCap?.top ?? null
  const capTop = cap?.topInBorder ?? null
  const deltaTop =
    canvasTop != null && capTop != null ? canvasTop - capTop : null
  const svgOkCanvasBad =
    deltaTop != null && Math.abs(deltaTop) > 0.06
  return {
    label,
    sectionTitle: opts.sectionTitle ?? label,
    flags: { svgOkCanvasBad },
    deltas: { canvasVsCapTop: deltaTop },
    paint: { cap, canvasCompare },
    layout: null,
    text: null,
    flex: null,
    raster: opts.rasterMeta ?? null,
    svgMarkupPresent: Boolean(svgMarkup),
  }
}

export function diffLiveSvgCanvas(root, svgMarkup, canvas, label, opts = {}) {
  return buildExtendedMetrics(root, svgMarkup, canvas, label, opts)
}

export function compareExtendedTable(bundles) {
  return (bundles || []).map((b) => ({
    label: b?.label ?? '—',
    canvasVsCapTop: b?.deltas?.canvasVsCapTop ?? null,
    svgOkCanvasBad: b?.flags?.svgOkCanvasBad ?? false,
  }))
}

export function compactExtendedTableRow(bundle) {
  return {
    label: bundle?.label ?? '—',
    canvasVsCapTop: bundle?.deltas?.canvasVsCapTop ?? null,
  }
}

export function formatExtendedSnapshotLines(bundle) {
  const d = bundle?.deltas?.canvasVsCapTop
  const line =
    d == null ? 'canvasVsCapTop: —' : `canvasVsCapTop: ${Number(d).toFixed(3)}`
  return [`${bundle?.label ?? '—'}`, line]
}

export function countExtendedMetricFields(bundle) {
  if (!bundle) return 0
  return Object.keys(bundle).length
}
