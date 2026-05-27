/**
 * Utilities for measuring and pinning line-height to its actual layout value.
 * @module utils/preciseLineHeight
 */

/**
 * Returns the actual px height of the line box for a single-line element.
 * @param {CSSStyleDeclaration} style
 * @param {Element} el
 * @returns {number|null}
 */
 export function resolveLineHeightPxForCapture(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  const text = (el.textContent || '').trim()
  if (!text) return null

  // Author "normal" still has a used px value in computed style; prefer it over
  // getBoundingClientRect height which can round down and skew FO/canvas text paint.
  if (usesNormalLineHeight(style)) {
    const lhUsed = style.lineHeight
    if (lhUsed && lhUsed !== 'normal') {
      const px = parseFloat(lhUsed)
      if (Number.isFinite(px) && px > 0) return px
    }
  }

  const rect = el.getBoundingClientRect()
  const pt = parseFloat(style.paddingTop) || 0
  const pb = parseFloat(style.paddingBottom) || 0
  const bt = parseFloat(style.borderTopWidth) || 0
  const bb = parseFloat(style.borderBottomWidth) || 0

  // The content box height in layout
  const h = rect.height - pt - pb - bt - bb
  if (h <= 0) return null

  // If scrollHeight matches or is very close, it's likely a single line
  // We allow a small epsilon for sub-pixel layout
  if (el.scrollHeight > h + 1.5) return null

  return h
 }

 /** Alias for {@link resolveLineHeightPxForCapture} used by tests. */
 export const measureLayoutLineBoxPx = resolveLineHeightPxForCapture

 /**
 * Returns true if the element's computed line-height is "normal" or behaves like it.
 * @param {CSSStyleDeclaration} style
 * @returns {boolean}
 */
 export function usesNormalLineHeight(style) {
  const lh = style.lineHeight
  if (lh === 'normal') return true

  // Also check the raw property value if computed says something else (though unlikely for normal)
  const raw = style.getPropertyValue('line-height')
  if (raw === 'normal') return true

  return false
 }
/**
 * Formats a pixel value for use in CSS line-height.
 * @param {number} px
 * @returns {string}
 */
export function formatLineHeightPx(px) {
  if (!Number.isFinite(px)) return 'normal'
  // Keep enough precision to avoid drift but not too much to bloat CSS
  return `${parseFloat(px.toFixed(6))}px`
}
