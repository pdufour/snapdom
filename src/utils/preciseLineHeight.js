const __lhCache = new Map()
let __lhMeasureSpan = null
let __lhCanvas = null
let __lhCtx = null

const FONT_PROBE_PROPS = [
  'font-size',
  'font-family',
  'font-weight',
  'font-style',
  'font-kerning',
  'font-feature-settings',
  'font-variation-settings',
  'letter-spacing',
  'font-stretch',
  'font-optical-sizing',
  'text-rendering',
]

/**
 * @param {CSSStyleDeclaration} style
 */
function applyFontProbeStyles(probe, style) {
  for (const prop of FONT_PROBE_PROPS) {
    try {
      const v = style.getPropertyValue(prop)
      if (v) probe.style.setProperty(prop, v)
    } catch { /* ignore */ }
  }
}

function getMeasureCtx() {
  if (!__lhCanvas && typeof document !== 'undefined') {
    __lhCanvas = document.createElement('canvas')
    __lhCtx = __lhCanvas.getContext('2d')
  }
  return __lhCtx
}

/**
 * Font bounding box from canvas (fractional px; avoids layout rounding).
 * @param {CSSStyleDeclaration} style
 * @returns {number}
 */
function measureLineHeightFromFont(style) {
  const ctx = getMeasureCtx()
  if (!ctx) return NaN

  const fs = parseFloat(style.fontSize) || 16
  const weight = style.fontWeight || '400'
  const fontStyle = style.fontStyle || 'normal'
  const family = style.fontFamily || 'sans-serif'
  ctx.font = `${fontStyle} ${weight} ${fs}px ${family}`

  const m = ctx.measureText('Mg')
  const a = m.fontBoundingBoxAscent
  const d = m.fontBoundingBoxDescent
  if (typeof a === 'number' && typeof d === 'number' && a + d > 0) return a + d

  const aa = m.actualBoundingBoxAscent
  const ad = m.actualBoundingBoxDescent
  if (typeof aa === 'number' && typeof ad === 'number' && aa + ad > 0) return aa + ad

  return NaN
}

/**
 * Layout probe span (fallback).
 * @param {CSSStyleDeclaration} style
 */
function measureLineHeightFromProbe(style) {
  const fs = parseFloat(style.fontSize) || 16
  const ff = style.fontFamily || 'sans-serif'
  const styleKey = FONT_PROBE_PROPS.map((p) => `${p}:${style.getPropertyValue(p)}`).join('|')
  const key = `${fs}px|${ff}|${styleKey}`

  if (__lhCache.has(key)) return __lhCache.get(key)

  if (typeof document === 'undefined') {
    return parseFloat(String(fs)) * 1.2
  }

  if (!__lhMeasureSpan) {
    __lhMeasureSpan = document.createElement('span')
    __lhMeasureSpan.textContent = 'Mg'
    __lhMeasureSpan.style.cssText =
      'padding:0;margin:0;border:none;display:inline-block;line-height:normal;position:absolute;visibility:hidden;white-space:nowrap;top:-9999px;left:-9999px;'
    const parent = document.body || document.documentElement
    if (parent) parent.appendChild(__lhMeasureSpan)
  }

  __lhMeasureSpan.style.fontSize = `${fs}px`
  __lhMeasureSpan.style.fontFamily = ff
  applyFontProbeStyles(__lhMeasureSpan, style)

  let height = __lhMeasureSpan.getBoundingClientRect().height
  if (!height) height = parseFloat(String(fs)) * 1.2

  __lhCache.set(key, height)
  return height
}

/**
 * Calculates line height using the same font properties as `style`.
 * @param {number|string} fontSize
 * @param {string} fontFamily
 * @param {CSSStyleDeclaration} [style]
 */
export function getPreciseLineHeight(fontSize, fontFamily, style = null) {
  if (style) {
    const fromFont = measureLineHeightFromFont(style)
    if (Number.isFinite(fromFont) && fromFont > 0) return fromFont
    return measureLineHeightFromProbe(style)
  }
  const fs = typeof fontSize === 'number' ? fontSize : parseFloat(fontSize)
  return fs * 1.2
}

/**
 * @param {Element} el
 * @returns {number}
 */
function readLineHeightFromStyleMap(el) {
  if (!el || typeof el.computedStyleMap !== 'function') return NaN
  try {
    const map = el.computedStyleMap()
    if (!map.has('line-height')) return NaN
    const v = map.get('line-height')
    if (v && typeof v.to === 'function') {
      const px = v.to('px')
      if (px && Number.isFinite(px.value) && px.value > 0) return px.value
    }
    if (v && typeof v.value === 'number' && v.unit === 'px' && v.value > 0) return v.value
  } catch { /* ignore */ }
  return NaN
}

/**
 * Single-line content box height (for debug compare only).
 * @param {CSSStyleDeclaration} style
 * @param {Element} el
 * @returns {number|null}
 */
export function measureLayoutLineBoxPx(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  if (!(el.textContent || '').trim()) return null
  const pad =
    (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0)
  const h = el.getBoundingClientRect().height
  if (h <= pad) return null
  const content = h - pad
  return el.scrollHeight <= content + 2 ? content : null
}

/**
 * Resolves used line-height in CSS pixels from computed style.
 * @param {CSSStyleDeclaration} style
 * @param {Element} [el]
 * @returns {number}
 */
export function resolveLineHeightPx(style, el = null) {
  const fs = parseFloat(style.fontSize) || 16
  let px = readLineHeightFromStyleMap(el)

  const lhUsed = style.lineHeight
  if (!Number.isFinite(px) && lhUsed && lhUsed !== 'normal') {
    const n = parseFloat(lhUsed)
    if (Number.isFinite(n) && n > 0) px = n
  }

  if (!Number.isFinite(px)) {
    const gp = (style.getPropertyValue('line-height') || '').trim()
    if (gp && gp !== 'normal') {
      if (gp.endsWith('px')) px = parseFloat(gp)
      else if (gp.endsWith('%')) px = (parseFloat(gp) / 100) * fs
      else if (/^\d+(\.\d+)?$/.test(gp)) px = parseFloat(gp) * fs
    }
  }

  if (!Number.isFinite(px) || px <= 0) {
    const fromFont = measureLineHeightFromFont(style)
    px = Number.isFinite(fromFont) && fromFont > 0
      ? fromFont
      : measureLineHeightFromProbe(style)
  }

  return px
}

const EXPLICIT_LH_RE = /^[\d.]+(?:px|em|rem|%|ch|ex|lh|rlh|cm|mm|in|pt|pc)$/i
const UNITLESS_LH_RE = /^[\d.]+$/

/**
 * True when cascade used `line-height: normal` (not an authored px/%/number).
 * @param {CSSStyleDeclaration} style
 * @param {Element} [el]
 */
export function usesNormalLineHeight(style, el = null) {
  if (el instanceof HTMLElement && el.style?.lineHeight) return false

  const gp = (style.getPropertyValue('line-height') || '').trim()
  if (!gp || gp === 'normal' || style.lineHeight === 'normal') return true
  if (EXPLICIT_LH_RE.test(gp) || UNITLESS_LH_RE.test(gp)) return false

  // Some engines resolve `normal` to px in getPropertyValue; treat as normal when
  // it matches font-metric line box and the element has no inline line-height.
  if (el instanceof Element) {
    const used = parseFloat(style.lineHeight)
    if (Number.isFinite(used)) {
      const fromFont = measureLineHeightFromFont(style)
      if (Number.isFinite(fromFont) && Math.abs(used - fromFont) < 1.5) return true
      const layout = measureLayoutLineBoxPx(style, el)
      if (layout != null && Math.abs(used - layout) < 0.75) return true
    }
  }

  return false
}

/**
 * Line-height pinned into capture CSS (font metrics, not layout box height).
 * @param {CSSStyleDeclaration} style
 * @param {Element} [el]
 * @returns {number}
 */
export function resolveLineHeightPxForCapture(style, el = null) {
  return resolveLineHeightPx(style, el)
}

/** Fractional line-height precision in captured CSS. */
export const LINE_HEIGHT_PX_PRECISION = 6

/**
 * @param {number} px
 * @returns {string}
 */
export function formatLineHeightPx(px) {
  if (!Number.isFinite(px) || px <= 0) return 'normal'
  const fixed = px.toFixed(LINE_HEIGHT_PX_PRECISION)
  const trimmed = fixed.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '')
  return `${trimmed}px`
}
