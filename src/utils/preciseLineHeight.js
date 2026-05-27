/**
 * Utilities for measuring and pinning line-height to its actual layout value.
 * @module utils/preciseLineHeight
 */

/** Single-line content box height (padding only) — test helper. */
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
 * Used `line-height: normal` for one line — inline probe, not flex-stretched layout box.
 * @param {Element} el
 * @param {CSSStyleDeclaration} style
 * @returns {number|null}
 */
export function measureNormalLineHeightPx(el, style) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  const text = (el.textContent || '').trim()
  if (!text) return null

  const probe = document.createElement('span')
  probe.textContent = text
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
    probe.style.setProperty(prop, style.getPropertyValue(prop))
  }
  document.documentElement.appendChild(probe)
  const h = probe.getBoundingClientRect().height
  probe.remove()
  return h > 0 ? h : null
}

export function resolveLineHeightPxForCapture(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  const text = (el.textContent || '').trim()
  if (!text) return null

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
  if (el.scrollHeight > el.clientHeight + 1.5) return null

  return h
}

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
  // Keep high precision to avoid drift
  return `${parseFloat(px.toFixed(6))}px`
}
