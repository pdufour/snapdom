/** Display precision for FO lab ink/layout px metrics (live, SVG, canvas). */
export const INK_METRIC_DECIMALS = 4

/** @param {number | null | undefined} v */
export function roundInkPx(v) {
  if (v == null || !Number.isFinite(v)) return null
  const factor = 10 ** INK_METRIC_DECIMALS
  return Math.round(v * factor) / factor
}

/** @param {number | null | undefined} v */
export function fmtInkPx(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(INK_METRIC_DECIMALS)
}

/** @param {number | null | undefined} v */
export function fmtInkSignedPx(v) {
  if (v == null || !Number.isFinite(v)) return '—'
  const n = v.toFixed(INK_METRIC_DECIMALS)
  return v > 0 ? `+${n}px` : `${n}px`
}
