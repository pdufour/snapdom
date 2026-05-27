/**
 * Single-line content box height (for pinning line-height to layout).
 * Returns null if not a single-line leaf or empty.
 * @param {CSSStyleDeclaration} style
 * @param {Element} el
 * @returns {number|null}
 */
export function measureLayoutLineBoxPx(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  if (!(el.textContent || '').trim()) return null

  // For single-line leaves, getBoundingClientRect().height includes padding and borders.
  // We want to compare the content box height with the scrollHeight (content + padding).
  const h = el.getBoundingClientRect().height
  if (h <= 0) return null

  const pt = parseFloat(style.paddingTop) || 0
  const pb = parseFloat(style.paddingBottom) || 0
  const bt = parseFloat(style.borderTopWidth) || 0
  const bb = parseFloat(style.borderBottomWidth) || 0

  const contentHeight = h - pt - pb - bt - bb
  if (contentHeight <= 0) return null

  // Heuristic for single line: scrollHeight (content+padding) should be ~ h - borders
  const sh = el.scrollHeight
  const TOL = 2
  if (Math.abs(sh - (h - bt - bb)) > TOL) return null

  return contentHeight
}

/**
 * Returns true if the author's CSS effectively uses 'normal' line-height.
 * We use this to decide whether to "pin" the calculated layout box height
 * into the captured style as a fixed px value.
 * @param {CSSStyleDeclaration} cs
 * @param {Element} el
 */
export function usesNormalLineHeight(cs, el) {
  // If the author set line-height explicitly in the inline style, it's not 'normal'.
  if (el instanceof HTMLElement && el.style.lineHeight) return false

  // If the computed value comes from a stylesheet and is not 'normal',
  // we might still want to pin it if it's > 1 and causing half-leading drift.
  // However, the current logic specifically targets 'normal' or when we want to be exact.

  // Actually, checking if it was 'normal' in author CSS is hard from getComputedStyle.
  // We check the property value if it was 'normal'.
  const gp = cs.getPropertyValue('line-height')
  return gp === 'normal' || gp === ''
}

/**
 * Format a numeric line-height as a px string or unitless number with up to 6 decimal places.
 * @param {number} v - The line-height in pixels.
 * @param {number} [fs] - Optional font-size in pixels for unitless conversion.
 */
export function formatLineHeightPx(v, fs) {
  if (!Number.isFinite(v)) return 'normal'
  if (fs && fs > 0) {
    return (v / fs).toFixed(6).replace(/\.?0+$/, '')
  }
  return v.toFixed(6).replace(/\.?0+$/, '') + 'px'
}

/**
 * Resolves the line-height in pixels for capture purposes.
 * Prefers the measured layout box for single-line leaves.
 * @param {CSSStyleDeclaration} cs
 * @param {Element} el
 */
export function resolveLineHeightPxForCapture(cs, el) {
  const fs = parseFloat(cs.fontSize) || 16
  const layoutLh = measureLayoutLineBoxPx(cs, el)
  if (layoutLh != null && layoutLh > 0) {
    return layoutLh
  }

  const lhUsed = cs.lineHeight
  if (lhUsed && lhUsed !== 'normal') {
    const n = parseFloat(lhUsed)
    if (Number.isFinite(n) && n > 0) return n
  }

  const gp = (cs.getPropertyValue('line-height') || '').trim()
  if (gp && gp !== 'normal') {
    if (gp.endsWith('px')) return parseFloat(gp)
    if (gp.endsWith('%')) return (parseFloat(gp) / 100) * fs
    if (/^\d+(\.\d+)?$/.test(gp)) return parseFloat(gp) * fs
  }

  // Fallback to 1.2 * fontSize if we can't determine it
  return fs * 1.2
}
