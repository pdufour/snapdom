/**
 * Browser-safe #capture-target root Y ↔ compare-stage preview mapping.
 *
 * Uses `transformation-matrix` (`compose`, `inverse`, `applyToPoint`) via
 * {@link ./fo-transformation-matrix.mjs} (npm devDependency; import map in `fo-fix-lab.html`).
 */

import { applyToPoint, compose, inverse, scale, translate } from './fo-transformation-matrix.mjs'

/**
 * Root CSS space → viewport affine for stretch or object-fit:contain preview slots.
 * @param {DOMRectReadOnly | { left: number, top: number, width: number, height: number }} displayRect
 * @param {number} rootWidthCss
 * @param {number} rootHeightCss
 * @param {{ intrinsicW?: number, intrinsicH?: number, mode?: 'stretch' | 'contain' }} [opts]
 */
export function buildRootToPreviewViewportMatrix(
  displayRect,
  rootWidthCss,
  rootHeightCss,
  opts = {},
) {
  if (!displayRect || !(rootHeightCss > 0) || !(rootWidthCss > 0)) return null
  if (!(displayRect.height > 0) || !(displayRect.width > 0)) return null

  const mode = opts.mode ?? 'stretch'
  if (mode === 'contain') {
    const intrinsicW = opts.intrinsicW ?? displayRect.width
    const intrinsicH = opts.intrinsicH ?? displayRect.height
    if (!(intrinsicW > 0) || !(intrinsicH > 0)) return null
    const s = Math.min(displayRect.width / intrinsicW, displayRect.height / intrinsicH)
    if (!Number.isFinite(s) || s <= 0) return null
    const offsetX = displayRect.left + (displayRect.width - intrinsicW * s) / 2
    const offsetY = displayRect.top + (displayRect.height - intrinsicH * s) / 2
    return compose(translate(offsetX, offsetY), scale(s, s))
  }

  const scaleX = displayRect.width / rootWidthCss
  const scaleY = displayRect.height / rootHeightCss
  if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY) || scaleX <= 0 || scaleY <= 0) {
    return null
  }
  return compose(translate(displayRect.left, displayRect.top), scale(scaleX, scaleY))
}

/**
 * Map root CSS Y to viewport Y on a preview filling the fixture slot (height stretch).
 * @param {DOMRectReadOnly | { top: number, height: number, width?: number, left?: number }} displayRect
 * @param {number} rootHeightCss #capture-target offsetHeight
 * @param {number} topInRoot
 */
export function rootYToPreviewViewportFromRects(displayRect, rootHeightCss, topInRoot) {
  if (!displayRect || !Number.isFinite(topInRoot) || !(rootHeightCss > 0)) return null
  const rootW = displayRect.width > 0 ? displayRect.width : rootHeightCss
  const matrix = buildRootToPreviewViewportMatrix(displayRect, rootW, rootHeightCss, {
    mode: 'stretch',
  })
  if (!matrix) return null
  return applyToPoint(matrix, { x: 0, y: topInRoot }).y
}

/**
 * Viewport Y → root px for stretch slot (rect-only; inverse of {@link rootYToPreviewViewportFromRects}).
 * @param {DOMRectReadOnly | { left: number, top: number, width: number, height: number }} displayRect
 * @param {number} rootHeightCss
 * @param {number} viewportTop
 */
export function previewViewportTopToRootFromRects(displayRect, rootHeightCss, viewportTop) {
  if (!displayRect || !Number.isFinite(viewportTop) || !(rootHeightCss > 0)) return null
  const rootW = displayRect.width > 0 ? displayRect.width : rootHeightCss
  const matrix = buildRootToPreviewViewportMatrix(displayRect, rootW, rootHeightCss, {
    mode: 'stretch',
  })
  if (!matrix) return null
  const inv = inverse(matrix)
  return applyToPoint(inv, { x: displayRect.left, y: viewportTop }).y
}
