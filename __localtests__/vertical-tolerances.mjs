/**
 * Shared vertical drift budgets for loop / playground gates.
 * Layout boxes stay tight; paint metrics allow sub-pixel / dpr-2 raster slack.
 */

/** @readonly */
export const VERTICAL_DRIFT = {
  /** Float-safe layout equality (browser APIs). */
  layoutExact: 1e-6,
  /** Sub-pixel jitter on box.top / height / bottom. */
  layoutSlack: 0.02,
  /** Real layout regression (nav jump, flex pin bug). */
  layoutFail: 1.0,

  /** Glyph cap model (paint.cap.*). */
  capSlack: 1.0,
  capFail: 2.0,

  /** Canvas ink scan at dpr 2 (integer pixels vs float cap). */
  canvasSlack: 1.0,
  canvasFail: 2.0,

  /** Label → input visual gap. */
  gapSlack: 0.5,
  gapFail: 1.5,

  /** Pinned px value vs expected (rounding). */
  lhPinSlack: 0.5,

  navLhPin: { min: 22, max: 26 },

  /** Layout border-box width (kerning / wrapping must not shrink/grow). */
  boxWidthSlack: 0.02,
  boxWidthFail: 1.0,

  /** Canvas measureText advance for full label text. */
  advanceSlack: 0.5,
  advanceFail: 2.0,
}

/** Float-safe exact — no loop margin (IEEE layout jitter only). */
export const EXACT_EPS = 1e-6

/**
 * Loop gate: zero margin of error (exact within {@link EXACT_EPS}).
 * @readonly
 */
export const LOOP_DRIFT = {
  layoutSlack: 0,
  layoutFail: EXACT_EPS,
  capSlack: 0,
  capFail: EXACT_EPS,
  gapSlack: 0,
  gapFail: EXACT_EPS,
  boxWidthSlack: 0,
  boxWidthFail: EXACT_EPS,
  advanceSlack: 0,
  advanceFail: EXACT_EPS,
  maxAnyPx: EXACT_EPS,
  navLhPin: { min: 22, max: 26 },
  lhPinSlack: EXACT_EPS,
  /** Canvas raster at dpr 2 — reported only, not exact-gated. */
  canvasFail: EXACT_EPS,
}

/**
 * @param {number|null|undefined} delta
 * @param {{ slack: number, fail: number }} budget
 * @returns {'ok'|'warn'|'fail'}
 */
export function classifyVerticalDelta(delta, budget) {
  if (delta == null || !Number.isFinite(delta)) return 'ok'
  const a = Math.abs(delta)
  const failAt = budget.fail ?? EXACT_EPS
  const slackAt = budget.slack ?? 0
  if (a > failAt) return 'fail'
  if (slackAt > 0 && a > slackAt) return 'warn'
  return 'ok'
}

/**
 * @param {number|null|undefined} delta
 * @param {{ slack: number, fail: number }} budget
 */
export function formatVerticalVerdict(delta, budget) {
  const v = classifyVerticalDelta(delta, budget)
  if (v === 'ok') return null
  const a = delta == null ? NaN : Math.abs(delta)
  return `${v}: |Δ|=${a.toFixed(2)}px (slack≤${budget.slack}, fail>${budget.fail})`
}
