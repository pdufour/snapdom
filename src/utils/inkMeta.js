/**
 * Live ink position metadata from Range layout (capture) for structural raster alignment.
 * @module inkMeta
 */

import { getStyle } from './css.js'

/**
 * First text landmark inside capture root: prefer `<a>` text leaf, else any text leaf.
 * @param {Element} root
 * @returns {Element | null}
 */
export function findRepresentativeTextLeaf(root) {
  if (!root || !(root instanceof Element)) return null
  for (const el of root.querySelectorAll('a')) {
    if (el.childElementCount > 0) continue
    if ((el.textContent || '').trim()) return el
  }
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    if ((el.textContent || '').trim()) return el
  }
  return null
}

/**
 * Painted ink top within element border box from live Range union (document px).
 * @param {Element} el
 * @returns {{ topInBorder: number, topInBorderFrac: number, borderHeight: number } | null}
 */
export function measureRangeInkTopInBorder(el) {
  const box = el.getBoundingClientRect()
  if (!Number.isFinite(box.height) || box.height <= 0) return null
  const range = el.ownerDocument.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (!rects.length) return null
  let top = Infinity
  for (const rc of rects) {
    top = Math.min(top, rc.top)
  }
  if (!Number.isFinite(top)) return null
  const topInBorder = top - box.top
  return {
    topInBorder,
    topInBorderFrac: topInBorder / box.height,
    borderHeight: box.height,
  }
}

function canvasGlyphSample(el) {
  const t = (el.textContent || '').trim()
  if (!t) return 'Mg'
  if (t.length === 1) return `${t}${t}`
  return t[0] + t[t.length - 1]
}

function measureLayoutLineBoxPx(style, el) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  if (!(el.textContent || '').trim()) return null
  const pad =
    (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0)
  const h = el.getBoundingClientRect().height
  if (h <= pad) return null
  const content = h - pad
  return el.scrollHeight <= content + 2 ? content : null
}

function resolveLineHeightPx(style, el) {
  const fs = parseFloat(style.fontSize) || 16
  let px = NaN
  const lhUsed = style.lineHeight
  if (lhUsed && lhUsed !== 'normal') {
    const n = parseFloat(lhUsed)
    if (Number.isFinite(n) && n > 0) px = n
  }
  if (!Number.isFinite(px) || px <= 0) {
    const layout = measureLayoutLineBoxPx(style, el)
    px = layout != null && layout > 0 ? layout : fs * 1.35
  }
  return px
}

function measureFontBoxPx(cs, sample = 'Mg') {
  const doc = cs.ownerDocument || document
  const canvas = doc.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  ctx.font = `${style} ${weight} ${fs}px ${family}`
  const m = ctx.measureText(sample)
  const ascent =
    typeof m.fontBoundingBoxAscent === 'number'
      ? m.fontBoundingBoxAscent
      : m.actualBoundingBoxAscent
  const descent =
    typeof m.fontBoundingBoxDescent === 'number'
      ? m.fontBoundingBoxDescent
      : m.actualBoundingBoxDescent
  if (typeof ascent !== 'number' || typeof descent !== 'number') return null
  return {
    ascent,
    descent,
    height: ascent + descent,
    actualBoundingBoxAscent: m.actualBoundingBoxAscent,
    actualBoundingBoxDescent: m.actualBoundingBoxDescent,
  }
}

/**
 * Cap / strut model topInBorder within border box (font metrics + half-leading).
 * @param {Element} el
 * @returns {number | null} fraction in [0, 1] of border-box height
 */
export function measureCapInkTopInBorderFrac(el) {
  const cs = getStyle(el)
  const box = el.getBoundingClientRect()
  if (!Number.isFinite(box.height) || box.height <= 0) return null
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  if (!fontBox) return null

  const paddingTop = parseFloat(cs.paddingTop) || 0
  let lineHeightPx = resolveLineHeightPx(cs, el)
  const layoutLh = measureLayoutLineBoxPx(cs, el)
  if (layoutLh != null && layoutLh > 0) lineHeightPx = layoutLh

  const halfLeading = Math.max(0, (lineHeightPx - fontBox.height) / 2)
  const topInBorder =
    paddingTop + halfLeading + fontBox.ascent - fontBox.actualBoundingBoxAscent
  return topInBorder / box.height
}

/**
 * Capture-time ink meta for raster align (Range vs cap-model expected fraction).
 * @param {Element} root Capture root element (live DOM)
 * @returns {{
 *   inkTopFracInBorder: number,
 *   inkTopFracExpected: number,
 *   inkRefBorderH: number,
 *   inkTopInRootFrac: number | null,
 * } | null}
 */
/**
 * FO paint-origin half-leading from live line box vs font box (not gate-tuned px).
 * Uses ½(lh−fs) when lh > fs; when lh ≤ fs but font box exceeds lh (e.g. unitless lh:1), uses ½(fontBox−lh).
 * @param {number} lhPx
 * @param {number} fsPx
 * @param {number | null | undefined} fontBoxHeightPx
 * @returns {number | null}
 */
export function resolveLhStrutHalfLeadingPx(lhPx, fsPx, fontBoxHeightPx) {
  if (!Number.isFinite(lhPx) || lhPx <= 0 || !Number.isFinite(fsPx) || fsPx <= 0) return null
  const halfFromFs = (lhPx - fsPx) / 2
  if (halfFromFs > 0) return halfFromFs
  const fb = fontBoxHeightPx
  if (Number.isFinite(fb) && fb > lhPx) return (fb - lhPx) / 2
  return Number.isFinite(halfFromFs) ? halfFromFs : null
}

/**
 * Line-height strut meta from live text leaf for raster-only SVG forks (e.g. FO y half-leading).
 * @param {Element} root
 * @returns {{
 *   lhStrutLineHeightPx: number | null,
 *   lhStrutFontSizePx: number | null,
 *   lhStrutHalfLeadingPx: number | null,
 *   lhStrutFontBoxHeightPx: number | null,
 *   lhStrutRangeSubpixelPx: number | null,
 *   lhStrutFoYAdjustPx: number | null,
 *   lineHeightPx: number | null,
 * } | null}
 */
/**
 * Used line-height px from computed style only (no layout-box stretch height).
 * @param {CSSStyleDeclaration} style
 */
function resolveComputedLineHeightPxFromStyle(style) {
  const fs = parseFloat(style.fontSize) || 16
  const lh = style.lineHeight
  if (!lh || lh === 'normal') return null
  if (/px$/i.test(lh)) {
    const n = parseFloat(lh)
    if (Number.isFinite(n) && n > 0) return n
  }
  const mult = parseFloat(lh)
  if (Number.isFinite(mult) && mult > 0 && !String(lh).endsWith('%')) {
    return fs * mult
  }
  return null
}

/**
 * Strut line-height for FO half-leading: max used lh on text leaf and ancestors in capture root.
 * Flex cross-stretch often leaves leaf lh at 1×fs while a parent row sets the typographic strut.
 * Ancestors use computed lh only so flex stretch box height is not mistaken for line-height.
 * @param {Element} root
 * @param {Element} el
 */
export function resolveStrutLineHeightPxForTextLeaf(root, el) {
  let lineHeightPx = resolveLineHeightPx(getStyle(el), el)
  for (let p = el.parentElement; p && root.contains(p); p = p.parentElement) {
    const plh = resolveComputedLineHeightPxFromStyle(getStyle(p))
    if (plh != null && plh > lineHeightPx) lineHeightPx = plh
  }
  return lineHeightPx
}

export function captureLhStrutMetaForRoot(root) {
  const el = findRepresentativeTextLeaf(root)
  if (!el) return null
  const cs = getStyle(el)
  const fs = parseFloat(cs.fontSize)
  const leafLh = resolveLineHeightPx(cs, el)

  let lhOut = Number.isFinite(leafLh) && leafLh > 0 ? leafLh : null
  const fsOut = Number.isFinite(fs) && fs > 0 ? fs : null
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  const fontBoxH = fontBox?.height ?? null
  let half =
    lhOut != null && fsOut != null
      ? resolveLhStrutHalfLeadingPx(lhOut, fsOut, fontBoxH)
      : null

  // Flex stretch: leaf lh can equal fs while a flex row ancestor sets the typographic strut.
  if (fsOut != null) {
    const strutLh = resolveStrutLineHeightPxForTextLeaf(root, el)
    if (Number.isFinite(strutLh) && strutLh > 0) {
      const strutHalf = resolveLhStrutHalfLeadingPx(strutLh, fsOut, fontBoxH)
      if (Number.isFinite(strutHalf) && strutHalf > (half ?? 0)) {
        lhOut = strutLh
        half = strutHalf
      }
    }
  }

  const rangeInk = measureRangeInkTopInBorder(el)
  const rangeTopInBorder = rangeInk?.topInBorder ?? null
  const rangeSubpixelPx =
    rangeTopInBorder != null && Number.isFinite(rangeTopInBorder)
      ? rangeTopInBorder - Math.floor(rangeTopInBorder)
      : null
  const foYAdjustPx =
    Number.isFinite(half) && Number.isFinite(rangeSubpixelPx)
      ? half - rangeSubpixelPx
      : null
  const capTopInBorderPx = (() => {
    const frac = measureCapInkTopInBorderFrac(el)
    const h = el.getBoundingClientRect().height
    if (frac == null || !Number.isFinite(h) || h <= 0) return null
    return frac * h
  })()
  const inkTopOffsetFromFoTop =
    rangeTopInBorder != null && capTopInBorderPx != null
      ? rangeTopInBorder - capTopInBorderPx
      : null

  return {
    lhStrutLineHeightPx: lhOut,
    lhStrutFontSizePx: fsOut,
    lhStrutHalfLeadingPx: Number.isFinite(half) ? half : null,
    lhStrutFontBoxHeightPx: Number.isFinite(fontBoxH) ? fontBoxH : null,
    lhStrutRangeSubpixelPx: Number.isFinite(rangeSubpixelPx) ? rangeSubpixelPx : null,
    lhStrutFoYAdjustPx: Number.isFinite(foYAdjustPx) ? foYAdjustPx : null,
    inkTopOffsetFromFoTop: Number.isFinite(inkTopOffsetFromFoTop)
      ? inkTopOffsetFromFoTop
      : null,
    lineHeightPx: lhOut,
  }
}

export function captureInkMetaForRoot(root) {
  const el = findRepresentativeTextLeaf(root)
  if (!el) return null
  const rangeInk = measureRangeInkTopInBorder(el)
  const expectedFrac = measureCapInkTopInBorderFrac(el)
  if (!rangeInk || expectedFrac == null) return null

  const rootRect = root.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  const inkTopInRoot = rangeInk.topInBorder + (elRect.top - rootRect.top)
  const rootH = rootRect.height || root.offsetHeight || 0

  return {
    inkTopFracInBorder: rangeInk.topInBorderFrac,
    inkTopFracExpected: expectedFrac,
    inkRefBorderH: rangeInk.borderHeight,
    inkTopInRootFrac: rootH > 0 ? inkTopInRoot / rootH : null,
  }
}

/**
 * drawImage dest dy (CSS px) from captured ink fractions vs cap-model expected.
 * @param {object} meta
 * @param {number} outH Output CSS height
 * @param {number} refH Reference capture height (meta.h0)
 * @returns {number}
 */
export function rasterInkAlignDestDy(meta, outH, refH) {
  const measured = meta?.inkTopFracInBorder
  const expected = meta?.inkTopFracExpected
  if (!Number.isFinite(measured) || !Number.isFinite(expected)) return 0
  const borderH = Number.isFinite(meta.inkRefBorderH) ? meta.inkRefBorderH : refH
  const k = outH / Math.max(1, refH)
  return (measured - expected) * borderH * k
}
