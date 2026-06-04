/**
 * Lab preview ↔ #capture-target root px via affine transforms (element + rect helpers).
 *
 * Matrix builders live in {@link ./fo-preview-root-map.mjs} (`compose` / `inverse` / `applyToPoint`
 * from {@link ./fo-transformation-matrix.mjs}). Browser: npm import map in `fo-fix-lab.html`.
 */

import { applyToPoint, inverse } from './fo-transformation-matrix.mjs'
import { buildRootToPreviewViewportMatrix } from './fo-preview-root-map.mjs'

export { buildRootToPreviewViewportMatrix } from './fo-preview-root-map.mjs'

/**
 * @param {Element | null | undefined} displayEl
 * @param {Element | null | undefined} rootEl
 * @param {{ mode?: 'stretch' | 'contain', intrinsicW?: number, intrinsicH?: number }} [opts]
 */
export function resolvePreviewIntrinsicSize(displayEl, rootEl, opts = {}) {
  if (!displayEl) return { intrinsicW: 0, intrinsicH: 0 }
  const elRect = displayEl.getBoundingClientRect()
  const rootW = rootEl?.offsetWidth || elRect.width || 0
  let intrinsicW = opts.intrinsicW ?? elRect.width
  let intrinsicH = opts.intrinsicH ?? elRect.height
  if (displayEl instanceof HTMLImageElement && displayEl.naturalWidth > 0) {
    if (rootW > 0) {
      const inferred = displayEl.naturalWidth / rootW
      if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
        intrinsicW = displayEl.naturalWidth / inferred
        intrinsicH = displayEl.naturalHeight / inferred
      } else {
        intrinsicW = displayEl.naturalWidth
        intrinsicH = displayEl.naturalHeight
      }
    } else {
      intrinsicW = displayEl.naturalWidth
      intrinsicH = displayEl.naturalHeight
    }
  } else if (
    displayEl instanceof HTMLCanvasElement &&
    displayEl.width > 0 &&
    rootW > 0
  ) {
    const inferred = displayEl.width / rootW
    if (Number.isFinite(inferred) && inferred > 0.25 && inferred <= 8) {
      intrinsicW = displayEl.width / inferred
      intrinsicH = displayEl.height / inferred
    }
  }
  return { intrinsicW, intrinsicH, elRect, rootW, rootH: rootEl?.offsetHeight || elRect.height }
}

/**
 * @param {Element} displayEl
 * @param {Element} rootEl
 * @param {{ mode?: 'stretch' | 'contain' }} [opts]
 */
export function buildPreviewRootMapping(displayEl, rootEl, opts = {}) {
  if (typeof document === 'undefined' || !displayEl || !rootEl) return null
  const { intrinsicW, intrinsicH, elRect, rootW, rootH } = resolvePreviewIntrinsicSize(
    displayEl,
    rootEl,
    opts,
  )
  const mappingMode = opts.mode === 'contain' ? 'contain' : 'stretch'
  const rootToViewport = buildRootToPreviewViewportMatrix(elRect, rootW, rootH, {
    mode: mappingMode,
    intrinsicW,
    intrinsicH,
  })
  if (!rootToViewport) return null
  return {
    mode: mappingMode,
    rootToViewport,
    viewportToRoot: inverse(rootToViewport),
    elRect,
    rootW,
    rootH,
    intrinsicW,
    intrinsicH,
  }
}

/**
 * Map #capture-target root Y → viewport Y (compare-stage stretch or object-fit contain).
 * @param {Element} displayEl
 * @param {Element} rootEl
 * @param {number} topInRoot
 * @param {{ mode?: 'stretch' | 'contain' }} [opts]
 */
export function rootYToPreviewViewportStretch(displayEl, rootEl, topInRoot, opts = {}) {
  if (!Number.isFinite(topInRoot)) return null
  const mapping = buildPreviewRootMapping(displayEl, rootEl, { mode: opts.mode ?? 'stretch' })
  if (!mapping) return null
  const p = applyToPoint(mapping.rootToViewport, { x: 0, y: topInRoot })
  return p.y
}

/**
 * Map viewport Y → #capture-target root px (inverse of {@link rootYToPreviewViewportStretch}).
 * @param {Element} displayEl
 * @param {Element} rootEl
 * @param {number} viewportTop
 * @param {{ mode?: 'stretch' | 'contain' }} [opts]
 */
export function previewViewportTopToRootPx(displayEl, rootEl, viewportTop, opts = {}) {
  if (!Number.isFinite(viewportTop)) return null
  const mapping = buildPreviewRootMapping(displayEl, rootEl, opts)
  if (!mapping) return null
  const elRect = mapping.elRect
  const p = applyToPoint(mapping.viewportToRoot, { x: elRect.left, y: viewportTop })
  return p.y
}

/**
 * Map a point in preview element local CSS px → #capture-target root px.
 * @param {Element} displayEl
 * @param {Element} rootEl
 * @param {number} localX
 * @param {number} localY
 * @param {{ mode?: 'stretch' | 'contain' }} [opts]
 */
export function previewLocalToRootPx(displayEl, rootEl, localX, localY, opts = {}) {
  if (!Number.isFinite(localX) || !Number.isFinite(localY)) return null
  const mapping = buildPreviewRootMapping(displayEl, rootEl, opts)
  if (!mapping) return null
  const viewportX = mapping.elRect.left + localX
  const viewportY = mapping.elRect.top + localY
  const rootPt = applyToPoint(mapping.viewportToRoot, { x: viewportX, y: viewportY })
  return { x: rootPt.x, y: rootPt.y }
}

/**
 * @param {Element} displayEl preview img/canvas in #svg-slot or #view-canvas
 * @param {Element} rootEl `#capture-target`
 * @param {number} topInRoot
 */
export function rootYToPreviewViewportStretchEl(displayEl, rootEl, topInRoot) {
  return rootYToPreviewViewportStretch(displayEl, rootEl, topInRoot, { mode: 'stretch' })
}

/**
 * @param {Element} displayEl
 * @param {Element} rootEl
 * @param {number} viewportTop
 */
export function previewViewportTopToRootY(displayEl, rootEl, viewportTop) {
  return previewViewportTopToRootPx(displayEl, rootEl, viewportTop, { mode: 'stretch' })
}
