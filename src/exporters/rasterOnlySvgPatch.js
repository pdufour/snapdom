/**
 * Raster-only SVG string patches — applied to a fork of capture SVG immediately before
 * `Image.decode()` so serialized SVG / compareThreeWayInk stay on the original capture.
 *
 * Lab: `labToCanvasOpts.rasterOnlySvgPatch` in fo-fix-toCanvas.js
 * Product default: when capture meta has lh strut half-leading, `toCanvas` applies
 * `fo-y-half-leading-meta` before decode unless `experimentalRasterSvgPatch` is `'none'`.
 */

import { resolveLhStrutHalfLeadingPx } from '../utils/inkMeta.js'

/** @typedef {'inject-fo-lh-pin' | 'inject-flex-center' | 'viewbox-int-floor' | 'fo-y-nudge' | 'root-height-48' | 'combo-lh-center' | 'leading-trim-inject' | 'align-self-flex-start' | 'align-self-flex-start-leaf' | 'line-height-normal-important' | 'svg-root-translate-y-minus-half-leading' | 'foreignObject-overflow-hidden' | 'combo-lh-normal-flex-start' | 'remove-flex-display-a' | 'strut-translate-y' | 'clip-content-48' | 'fo-height-linebox' | 'fork-visibility-red-leaf' | 'inline-block-linepx-leaf' | 'combo-linebox-lh-pin-flex-start' | 'leading-trim-leaf' | 'lh-normal-leaf' | 'lh-used-leaf' | 'lh-meta-leaf' | 'lh-1-leaf' | 'lh-1em-leaf' | 'vertical-align-baseline-leaf' | 'combo-lh-normal-va-baseline-leaf' | 'combo-lh-used-va-baseline-leaf' | 'fo-align-items-flex-start' | 'text-leaf-inline-block-linebox' | 'combo-meta-lh-flex-start-fo' | 'leading-trim-text-box-leaf' | 'chromium-copy-lh-baseline-leaf' | 'strut-translate-y-meta'} RasterOnlySvgPatchId */

/** Wave-1 raster-fork recipe patch ids (short form). */
export const RASTER_ONLY_SVG_PATCH_IDS = /** @type {const} */ ([
  'inject-fo-lh-pin',
  'inject-flex-center',
  'viewbox-int-floor',
  'fo-y-nudge',
  'root-height-48',
  'combo-lh-center',
])

/** Wave-2 raster-fork recipe patch ids (short form). */
export const RASTER_ONLY_SVG_PATCH_W2_IDS = /** @type {const} */ ([
  'leading-trim-inject',
  'align-self-flex-start',
  'line-height-normal-important',
  'svg-root-translate-y-minus-half-leading',
  'foreignObject-overflow-hidden',
  'combo-lh-normal-flex-start',
])

/** Wave-5 fix shard raster-fork patch ids (short form). */
export const RASTER_ONLY_SVG_PATCH_W5_IDS = /** @type {const} */ ([
  'remove-flex-display-a',
])

/** Wave-6 fix shard raster-fork patch ids (short form). */
export const RASTER_ONLY_SVG_PATCH_W6_IDS = /** @type {const} */ ([
  'strut-translate-y',
  'clip-content-48',
  'fo-height-linebox',
  'fork-visibility-red-leaf',
  'inline-block-linepx-leaf',
  'align-self-flex-start-leaf',
  'combo-linebox-lh-pin-flex-start',
])

/** Text-leaf wave-1 raster-fork patch ids (scoped :is(span,a,p,h1,h2,h3,label), single-line). */
export const RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS = /** @type {const} */ ([
  'leading-trim-leaf',
  'lh-normal-leaf',
])

/** Text baseline wave-1 raster-fork patch ids (FO text leaves only). */
export const RASTER_ONLY_SVG_PATCH_BLH_W1_IDS = /** @type {const} */ ([
  'lh-used-leaf',
  'lh-normal-leaf',
  'lh-1-leaf',
  'lh-1em-leaf',
  'vertical-align-baseline-leaf',
  'combo-lh-normal-va-baseline-leaf',
  'combo-lh-used-va-baseline-leaf',
  'fo-align-items-flex-start',
  'fo-height-linebox',
  'combo-meta-lh-flex-start-fo',
])

/** Text baseline wave-2 raster-fork patch ids (meta/class lh + linebox). */
export const RASTER_ONLY_SVG_PATCH_BLH_W2_IDS = /** @type {const} */ ([
  'lh-meta-leaf',
  'text-leaf-inline-block-linebox',
  'combo-meta-lh-flex-start-fo',
  'leading-trim-text-box-leaf',
  'chromium-copy-lh-baseline-leaf',
  'strut-translate-y-meta',
])

/** Wave-7 text-only FO raster fork patch ids (lab tc-fix-w7-*). */
export const RASTER_ONLY_SVG_PATCH_W7_IDS = /** @type {const} */ ([
  'leaf-margin-reset-lh1',
  'fo-y-half-leading-meta',
  'split-fo-per-line',
  'chromium-font-render-leaf',
  'fo-box-linepx-overflow',
  'parent-lh-normal-leaf-pin',
  'flex-container-flex-start',
])

/** Wave-8 FO-y half-leading combo patch ids (lab tc-fix-w8-*). */
export const RASTER_ONLY_SVG_PATCH_W8_IDS = /** @type {const} */ ([
  'combo-fo-y-half-leading-linebox',
  'combo-fo-y-half-leading-box-overflow',
  'combo-fo-y-half-leading-overflow',
  'fo-y-ink-offset-meta',
  'fo-y-half-leading-fontbox-meta',
  'fo-y-half-leading-used-meta',
])

/** Wave-9 Range strut raster-fork patch ids (lab tc-fix-w9-*). */
export const RASTER_ONLY_SVG_PATCH_W9_IDS = /** @type {const} */ ([
  'fo-y-strut-range-meta',
  'fo-y-strut-range-linebox-meta',
])

/** Wave-10 half-leading refinement raster-fork patch ids (lab tc-fix-w10-*). */
export const RASTER_ONLY_SVG_PATCH_W10_IDS = /** @type {const} */ ([
  'combo-fo-y-half-leading-trim-text-box',
  'combo-fo-y-fo-adjust-linepx-clip',
  'combo-fo-y-half-leading-inline-block-leaf',
  'combo-fo-y-half-leading-linepx-height-only',
  'dual-fo-inner-y-half-leading',
  'fo-y-partial-half-leading-meta',
  'fo-y-half-leading-dpr-subpixel-meta',
  'viewbox-y-half-leading-meta',
  'viewbox-y-fo-adjust-meta',
])

/** Wave-11 decode combo patch ids (lab tc-fix-w11-*). */
export const RASTER_ONLY_SVG_PATCH_W11_IDS = /** @type {const} */ ([
  'combo-viewbox-y-fo-adjust-trim-text-box',
  'combo-viewbox-y-half-leading-trim-text-box',
  'combo-fo-y-strut-range-trim-text-box',
  'combo-fo-y-strut-range-inline-block-leaf',
  'combo-viewbox-y-fo-adjust-linepx-height-only',
  'combo-viewbox-y-fo-adjust-inline-block-leaf',
])

/** Wave-12 FO text @ canvas raster patch ids (lab tc-fix-w12-*). */
export const RASTER_ONLY_SVG_PATCH_W12_IDS = /** @type {const} */ ([
  'fo-y-strut-range-preserve-height',
  'combo-fo-y-half-leading-overflow-visible',
  'text-leaf-translate-y-half-leading-meta',
  'leaf-translate-y-strut-range-meta',
  'fo-y-half-leading-dpr-inverse-meta',
  'double-fo-outer-full-inner-linebox',
])

/** Wave-13 decode/raster text-only patch ids (lab tc-fix-w13-*). */
export const RASTER_ONLY_SVG_PATCH_W13_IDS = /** @type {const} */ ([
  'fo-y-w7-minus-range-subpixel-meta',
  'fo-y-half-leading-each-fo-meta',
  'fo-clip-path-linebox-meta',
  'fo-root-fs-lh-meta-px',
  'fo-y-half-leading-dpr-root-meta',
  'fo-y-partial-90-half-leading-meta',
  'combo-fo-y-half-leading-clip-linebox',
])

/** Wave-14 decode/raster text-only patch ids (lab tc-fix-w14-*). */
export const RASTER_ONLY_SVG_PATCH_W14_IDS = /** @type {const} */ ([
  'combo-fo-y-half-leading-glyph-padding-leaf',
  'anchor-parent-lh1-translate-y-half-leading-meta',
  'combo-fo-y-half-leading-svg-root-overflow-visible',
  'combo-fo-y-half-leading-clip-inset-zero',
  'fo-y-range-subpixel-only-meta',
  'combo-fo-y-half-leading-nested-fo-y-meta',
  'combo-va-baseline-range-subpixel-meta',
])

/** Wave-15 w7 residual / subpixel closure patch ids (lab tc-fix-w15-*). */
export const RASTER_ONLY_SVG_PATCH_W15_IDS = /** @type {const} */ ([
  'fo-y-half-leading-plus-range-subpixel-meta',
  'text-leaf-translate-y-range-subpixel-positive-meta',
  'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
  'combo-fo-y-half-leading-leaf-padding-top-subpixel-meta',
  'combo-fo-y-half-leading-viewbox-y-subpixel-meta',
  'text-leaf-translate-y-half-leading-minus-subpixel-meta',
])

/** Wave-17 text canvas raster fork patch ids (lab tc-fix-w17-*). */
export const RASTER_ONLY_SVG_PATCH_W17_IDS = /** @type {const} */ ([
  'fo-y-half-leading-root-fo-only-meta',
  'flex-inner-row-translate-y-half-leading-meta',
  'combo-w7-dominant-baseline-alphabetic-leaf',
  'combo-w7-text-box-edge-cap-alphabetic-leaf',
  'combo-w7-svg-decode-supersample-2x-meta',
  'combo-w7-flex-inner-row-flex-start',
  'combo-w7-minus-range-flex-inner-flex-start',
])

/** Wave-18 w7 residual closure patch ids (lab tc-fix-w18-*). */
export const RASTER_ONLY_SVG_PATCH_W18_IDS = /** @type {const} */ ([
  'combo-fo-y-half-leading-height-unset-overflow-visible',
  'text-leaf-relative-top-half-leading-meta',
  'text-leaf-relative-top-w7-minus-range-meta',
  'combo-fo-y-half-leading-crisp-edges',
  'combo-w7-minus-range-height-unset-overflow-visible',
])

/** Wave-20 w7 refine patch ids (lab tc-fix-w20-*). */
export const RASTER_ONLY_SVG_PATCH_W20_IDS = /** @type {const} */ ([
  'fo-y-half-leading-minus-subpixel-meta',
  'fo-y-half-leading-root-only',
])

/** @type {readonly string[]} */
const ALL_RASTER_ONLY_SVG_PATCH_IDS = [
  ...RASTER_ONLY_SVG_PATCH_IDS,
  ...RASTER_ONLY_SVG_PATCH_W2_IDS,
  ...RASTER_ONLY_SVG_PATCH_W5_IDS,
  ...RASTER_ONLY_SVG_PATCH_W6_IDS,
  ...RASTER_ONLY_SVG_PATCH_TEXT_LEAF_W1_IDS,
  ...RASTER_ONLY_SVG_PATCH_BLH_W1_IDS,
  ...RASTER_ONLY_SVG_PATCH_BLH_W2_IDS,
  ...RASTER_ONLY_SVG_PATCH_W7_IDS,
  ...RASTER_ONLY_SVG_PATCH_W8_IDS,
  ...RASTER_ONLY_SVG_PATCH_W9_IDS,
  ...RASTER_ONLY_SVG_PATCH_W10_IDS,
  ...RASTER_ONLY_SVG_PATCH_W11_IDS,
  ...RASTER_ONLY_SVG_PATCH_W12_IDS,
  ...RASTER_ONLY_SVG_PATCH_W13_IDS,
  ...RASTER_ONLY_SVG_PATCH_W14_IDS,
  ...RASTER_ONLY_SVG_PATCH_W15_IDS,
  ...RASTER_ONLY_SVG_PATCH_W17_IDS,
  ...RASTER_ONLY_SVG_PATCH_W18_IDS,
  ...RASTER_ONLY_SVG_PATCH_W20_IDS,
]

/** Structural line-height ratio for half-leading from font-size (checkout mini-nav default). */
const LINE_HEIGHT_RATIO = 1.35

const FO_LH_PIN_CSS = 'foreignObject *{line-height:21.6px!important}'

const FLEX_ROW_CENTER_CSS =
  'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important}' +
  'foreignObject *{display:flex!important;align-items:center!important}'

const LEADING_TRIM_CSS = 'foreignObject *{leading-trim:both!important}'

const FLEX_START_CSS = 'foreignObject *{align-self:flex-start!important}'

const FO_TEXT_LEAF_SELECTORS =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,' +
  'foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const FLEX_START_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{align-self:flex-start!important;height:auto!important}`

const FORK_VISIBILITY_RED_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{background-color:red!important}`

const LEADING_TRIM_LEAF_CSS =
  'foreignObject :is(span,a,p,h1,h2,h3,label){leading-trim:both!important;white-space:nowrap!important}'

const LH_NORMAL_CSS = 'foreignObject *{line-height:normal!important}'

const LH_NORMAL_LEAF_CSS =
  'foreignObject :is(span,a,p,h1,h2,h3,label){line-height:normal!important;white-space:nowrap!important}'

/** Text leaves — va:baseline only (display:inline overshoots nav ink ~+1px). */
const VA_BASELINE_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{vertical-align:baseline!important;display:inline!important;white-space:nowrap!important}`

const LH_1_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{line-height:1!important;white-space:nowrap!important}`

const LH_1EM_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{line-height:1em!important;white-space:nowrap!important}`

const COMBO_LH_NORMAL_VA_BASELINE_LEAF_CSS = LH_NORMAL_LEAF_CSS + VA_BASELINE_LEAF_CSS

const FO_ALIGN_ITEMS_FLEX_START_CSS = 'foreignObject{align-items:flex-start!important}'

const FO_OVERFLOW_HIDDEN_CSS = 'foreignObject{overflow:hidden!important}'

const FO_OVERFLOW_VISIBLE_CSS = 'foreignObject{overflow:visible!important}'

const FO_CRISP_EDGES_CSS =
  'foreignObject,foreignObject *{shape-rendering:crispEdges!important}'

const FO_A_INLINE_BLOCK_CSS = 'foreignObject a{display:inline-block!important}'

const STRUT_TRANSLATE_Y_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(calc((line-height - 1em)/2))!important}`

const CHROMIUM_COPY_LH_BASELINE_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{font-kerning:normal!important;vertical-align:baseline!important;white-space:nowrap!important}`

const LEADING_TRIM_TEXT_BOX_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{leading-trim:both!important;text-box-trim:trim-both!important;white-space:nowrap!important}`

const LEAF_MARGIN_RESET_LH1_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{margin-top:0!important;padding-top:0!important;line-height:1!important;white-space:nowrap!important}`

const CHROMIUM_FONT_RENDER_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{font-kerning:normal!important;font-synthesis:none!important;text-rendering:optimizeLegibility!important;font-size-adjust:from-font!important;white-space:nowrap!important}`

const FLEX_CONTAINER_FLEX_START_CSS =
  'foreignObject div[style*="display:flex"],foreignObject div[style*="display: flex"],' +
  'foreignObject div[style*="display:inline-flex"],foreignObject div[style*="display: inline-flex"]' +
  '{align-items:flex-start!important}'

const DOMINANT_BASELINE_ALPHABETIC_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{dominant-baseline:alphabetic!important;white-space:nowrap!important}`

const TEXT_BOX_EDGE_CAP_ALPHABETIC_LEAF_CSS =
  `${FO_TEXT_LEAF_SELECTORS}{text-box-edge:cap alphabetic!important;white-space:nowrap!important}`

/** Structural FO decode supersample ratio (bitmap raster fork — not gate-tuned). */
const FO_DECODE_SUPERSAMPLE_RATIO = 2

const FO_BOX_LINEPX_OVERFLOW_CSS =
  'foreignObject{box-sizing:border-box!important;overflow:hidden!important}'

const CLIP_CONTENT_48_CSS =
  'foreignObject{height:48px!important;max-height:48px!important;overflow:hidden!important}'

/** @param {string} svgText @param {string} cssBlock */
function injectFoCss(svgText, cssBlock) {
  if (!cssBlock) return svgText
  if (/<style[^>]*type=["']text\/css["']/i.test(svgText)) {
    return svgText.replace(
      /<style([^>]*)type=["']text\/css["']([^>]*)>/i,
      (m) => `${m}${cssBlock}`,
    )
  }
  return svgText.replace(
    /<svg\b([^>]*)>/i,
    (m) => `${m}<style type="text/css">${cssBlock}</style>`,
  )
}

/** @param {string} svgText */
function intFloorViewBoxPatch(svgText) {
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    const floored = parts.map((n) => Math.floor(n)).join(' ')
    const next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${floored}"`)
    return `<svg${next}>`
  })
}

/** @param {string} svgText @param {Record<string, string>} patch */
function svgRootAttrPatch(svgText, patch) {
  if (!patch || !Object.keys(patch).length) return svgText
  return svgText.replace(/<svg(\s[^>]*)?>/i, (full, attrs = '') => {
    let next = attrs
    for (const [key, value] of Object.entries(patch)) {
      const re = new RegExp(`\\b${key}=["'][^"']*["']`, 'i')
      if (re.test(next)) next = next.replace(re, `${key}="${value}"`)
      else next += ` ${key}="${value}"`
    }
    return `<svg${next}>`
  })
}

/** @param {string} svgText @param {number} ty */
function svgRootTransformTranslateY(svgText, ty) {
  const tyStr = `${ty}px`
  return svgText.replace(/<svg(\s[^>]*)?>/i, (full, attrs = '') => {
    const transformRe = /\btransform=["']([^"']*)["']/i
    if (transformRe.test(attrs)) {
      const next = attrs.replace(transformRe, (_m, existing) => {
        const trimmed = String(existing).trim()
        return `transform="${trimmed} translate(0 ${tyStr})"`
      })
      return `<svg${next}>`
    }
    return `<svg${attrs} transform="translate(0 ${tyStr})">`
  })
}

/** @param {string} svgText @returns {number | null} */
function parseFontSizePxFromSvg(svgText) {
  const fontShorthand = svgText.match(/font:\s*(?:[\w-]+\s+)*([\d.]+)px/i)
  if (fontShorthand) {
    const n = parseFloat(fontShorthand[1])
    if (Number.isFinite(n) && n > 0) return n
  }
  const fontSizeDecl = svgText.match(/font-size:\s*([\d.]+)px/i)
  if (fontSizeDecl) {
    const n = parseFloat(fontSizeDecl[1])
    if (Number.isFinite(n) && n > 0) return n
  }
  const fontSizeAttr = svgText.match(/\bfont-size=["']([\d.]+)px["']/i)
  if (fontSizeAttr) {
    const n = parseFloat(fontSizeAttr[1])
    if (Number.isFinite(n) && n > 0) return n
  }
  return null
}

/** @param {number} fontSizePx */
function halfLeadingPxFromFontSize(fontSizePx) {
  const linePx = fontSizePx * LINE_HEIGHT_RATIO
  return (linePx - fontSizePx) / 2
}

/** @param {string} svgText @param {number | string} heightPx */
function setForeignObjectHeightAttr(svgText, heightPx) {
  const h = String(heightPx)
  return svgText.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    let next = attrs
    if (/\bheight=["']/i.test(next)) next = next.replace(/\bheight=["'][^"']+["']/i, `height="${h}"`)
    else next += ` height="${h}"`
    return `<foreignObject${next}>`
  })
}

/** @param {string} svgText */
function foreignObjectHeightPatch(svgText, heightPx) {
  let out = setForeignObjectHeightAttr(svgText, heightPx)
  out = injectFoCss(out, CLIP_CONTENT_48_CSS)
  return out
}

const FO_HEIGHT_LINEBOX_CSS =
  'foreignObject{overflow:hidden!important}' +
  `${FO_TEXT_LEAF_SELECTORS}{align-self:flex-start!important}`

/**
 * Resolve text-leaf line-height px from raster meta (live probe) or serialized inline style.
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function resolveLineHeightPxForFoHeightLinebox(svgText, meta) {
  const fromMeta = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
  if (Number.isFinite(fromMeta) && fromMeta > 0) return fromMeta

  const patched = patchFoTextLeavesInSvg(svgText, (map) => {
    const px = resolveUsedLineHeightPxFromStyleMap(map)
    if (px == null) return null
    return { 'line-height': formatLineHeightPx(px) }
  })
  if (patched !== svgText) {
    const m = patched.match(/line-height:\s*([\d.]+)px/i)
    if (m) {
      const n = parseFloat(m[1])
      if (Number.isFinite(n) && n > 0) return n
    }
  }

  const fontSizePx = parseFontSizePxFromSvg(svgText)
  if (fontSizePx != null) return fontSizePx * LINE_HEIGHT_RATIO
  return null
}

/** Shrink FO viewport to text line box height (from live meta or serialized lh). */
function foHeightLineboxPatch(svgText, meta) {
  const lhPx = resolveLineHeightPxForFoHeightLinebox(svgText, meta)
  if (lhPx == null) return svgText
  const h = parseFloat(lhPx.toFixed(6))
  let out = setForeignObjectHeightAttr(svgText, h)
  out = injectFoCss(out, FO_HEIGHT_LINEBOX_CSS)
  return out
}

/** Raster fork wiring check — extreme red bg on FO text leaves (decode path only). */
function forkVisibilityRedLeafPatch(svgText) {
  return injectFoCss(svgText, FORK_VISIBILITY_RED_LEAF_CSS)
}

/**
 * Text leaves: display:inline-block + height/line-height from live line-height px (meta at decode).
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function inlineBlockLinePxLeafPatch(svgText, meta) {
  const linePx = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
  if (!Number.isFinite(linePx) || linePx <= 0) return svgText
  const h = formatLineHeightPx(linePx)
  return patchFoTextLeavesInSvg(
    svgText,
    () => ({
      display: 'inline-block',
      height: h,
      'line-height': h,
      'vertical-align': 'top',
      'align-self': 'flex-start',
    }),
    meta,
  )
}

/** FO height linebox + pin used lh on leaves + flex-start on text leaves. */
function comboLineboxLhPinFlexStartPatch(svgText, meta) {
  let out = foHeightLineboxPatch(svgText, meta)
  out = lhUsedLeafPatch(out, meta)
  out = injectFoCss(out, FLEX_START_LEAF_CSS)
  return out
}

/** @param {number} px */
function formatLineHeightPx(px) {
  if (!Number.isFinite(px)) return 'normal'
  return `${parseFloat(px.toFixed(6))}px`
}

/**
 * @param {string} styleAttr
 * @returns {Map<string, string>}
 */
function parseInlineStyleMap(styleAttr) {
  /** @type {Map<string, string>} */
  const map = new Map()
  if (!styleAttr) return map
  for (const chunk of String(styleAttr).split(';')) {
    const idx = chunk.indexOf(':')
    if (idx < 0) continue
    const k = chunk.slice(0, idx).trim().toLowerCase()
    const v = chunk.slice(idx + 1).trim()
    if (k) map.set(k, v)
  }
  return map
}

/**
 * Resolve used line-height px from serialized inline style on a text leaf.
 * @param {Map<string, string>} map
 */
function resolveUsedLineHeightPxFromStyleMap(map) {
  const lh = map.get('line-height')
  const fsRaw = map.get('font-size')
  const fs = fsRaw ? parseFloat(fsRaw) : NaN
  if (lh && lh !== 'normal') {
    if (/px$/i.test(lh)) {
      const n = parseFloat(lh)
      if (Number.isFinite(n) && n > 0) return n
    }
    const mult = parseFloat(lh)
    if (Number.isFinite(mult) && mult > 0 && Number.isFinite(fs) && fs > 0 && !lh.endsWith('%')) {
      return fs * mult
    }
  }
  return null
}

/**
 * Index snapdom class rules in serialized SVG (e.g. `.c12{line-height:21.6px}`).
 * @param {string} svgText
 * @param {string} property css property name
 */
function buildClassPropertyIndex(svgText, property) {
  /** @type {Map<string, string>} */
  const index = new Map()
  const propRe = property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  for (const block of svgText.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
    const css = block[1] || ''
    const ruleRe = /\.([^\s{]+)\s*\{([^}]*)\}/g
    let m
    while ((m = ruleRe.exec(css))) {
      const cls = m[1].replace(/^\./, '')
      const decls = m[2] || ''
      const valRe = new RegExp(`${propRe}\\s*:\\s*([^;!}]+)`, 'i')
      const vm = decls.match(valRe)
      if (vm) index.set(cls, vm[1].trim())
    }
  }
  return index
}

/**
 * Used lh px: live raster meta → inline style → snapdom class rules → font-size × ratio.
 * @param {Map<string, string>} map
 * @param {Element | null | undefined} el
 * @param {{ classLhIndex?: Map<string, string>, meta?: object }} [ctx]
 */
function resolveLineHeightPxForTextLeaf(map, el, ctx = {}) {
  const fromMeta = ctx.meta?.lhStrutLineHeightPx ?? ctx.meta?.lineHeightPx
  if (Number.isFinite(fromMeta) && fromMeta > 0) return fromMeta

  const fromInline = resolveUsedLineHeightPxFromStyleMap(map)
  if (fromInline != null) return fromInline

  const classLhIndex = ctx.classLhIndex
  if (el && classLhIndex?.size) {
    const classes = (el.getAttribute('class') || '').split(/\s+/).filter(Boolean)
    for (const cls of classes) {
      const raw = classLhIndex.get(cls)
      if (!raw || raw === 'normal') continue
      if (/px$/i.test(raw)) {
        const n = parseFloat(raw)
        if (Number.isFinite(n) && n > 0) return n
      }
      const fsRaw = map.get('font-size')
      const fs = fsRaw ? parseFloat(fsRaw) : NaN
      const mult = parseFloat(raw)
      if (Number.isFinite(mult) && mult > 0 && Number.isFinite(fs) && fs > 0) {
        return fs * mult
      }
    }
  }

  const fsRaw = map.get('font-size')
  const fs = fsRaw ? parseFloat(fsRaw) : NaN
  if (Number.isFinite(fs) && fs > 0) return fs * LINE_HEIGHT_RATIO
  return null
}

/**
 * @param {Element} el
 * @param {Record<string, string>} patch
 */
function mergeInlineStyleOnElement(el, patch) {
  const map = parseInlineStyleMap(el.getAttribute('style') || '')
  for (const [k, v] of Object.entries(patch)) map.set(k.toLowerCase(), v)
  const merged = [...map.entries()].map(([k, v]) => `${k}:${v}`).join(';')
  el.setAttribute('style', merged)
}

/**
 * Patch FO text leaves in serialized SVG (no live DOM).
 * @param {string} svgText
 * @param {(styleMap: Map<string, string>, el: Element, ctx: { classLhIndex: Map<string, string>, meta?: object }) => Record<string, string> | null} styleForLeaf
 * @param {object} [meta]
 */
function patchFoTextLeavesInSvg(svgText, styleForLeaf, meta = {}) {
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return svgText
  }
  const classLhIndex = buildClassPropertyIndex(svgText, 'line-height')
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo) return svgText
    const ctx = { classLhIndex, meta }
    for (const el of fo.querySelectorAll('*')) {
      if (el.childElementCount > 0) continue
      if (!(el.textContent || '').trim()) continue
      const map = parseInlineStyleMap(el.getAttribute('style') || '')
      const patch = styleForLeaf(map, el, ctx)
      if (!patch || !Object.keys(patch).length) continue
      mergeInlineStyleOnElement(el, patch)
    }
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    return svgText
  }
}

/** Re-assert used line-height px (inline, class rules, or live meta). */
function lhUsedLeafPatch(svgText, meta) {
  return patchFoTextLeavesInSvg(
    svgText,
    (map, el, ctx) => {
      const px = resolveLineHeightPxForTextLeaf(map, el, ctx)
      if (px == null) return null
      return { 'line-height': formatLineHeightPx(px) }
    },
    meta,
  )
}

/** Pin live meta lh px on every FO text leaf at decode. */
function lhMetaLeafPatch(svgText, meta) {
  const lhPx = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
  if (!Number.isFinite(lhPx) || lhPx <= 0) return lhUsedLeafPatch(svgText, meta)
  return patchFoTextLeavesInSvg(
    svgText,
    () => ({ 'line-height': formatLineHeightPx(lhPx) }),
    meta,
  )
}

/** Text leaf inline-block box sized to live line-height (not flex stretch). */
function textLeafInlineBlockLineboxPatch(svgText, meta) {
  return patchFoTextLeavesInSvg(
    svgText,
    (map, el, ctx) => {
      const lhPx = resolveLineHeightPxForTextLeaf(map, el, ctx)
      if (lhPx == null) return null
      const h = formatLineHeightPx(lhPx)
      return {
        display: 'inline-block',
        height: h,
        'line-height': h,
        'align-self': 'flex-start',
        'vertical-align': 'top',
      }
    },
    meta,
  )
}

/** Meta lh inline + FO flex-start cross-axis at decode. */
function comboMetaLhFlexStartFoPatch(svgText, meta) {
  let out = lhMetaLeafPatch(svgText, meta)
  out = injectFoCss(out, FO_ALIGN_ITEMS_FLEX_START_CSS + FLEX_START_CSS)
  return foHeightLineboxPatch(out, meta)
}

/** Strut translate from live half-leading (meta), not gate-tuned px. */
function strutTranslateYMetaPatch(svgText, meta) {
  const half =
    meta?.lhStrutHalfLeadingPx ??
    (() => {
      const lh = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
      const fs = meta?.lhStrutFontSizePx
      if (Number.isFinite(lh) && Number.isFinite(fs) && fs > 0) return (lh - fs) / 2
      return null
    })()
  if (!Number.isFinite(half) || half === 0) {
    return injectFoCss(svgText, STRUT_TRANSLATE_Y_CSS)
  }
  const ty = formatLineHeightPx(half)
  const css = `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(${ty})!important}`
  return injectFoCss(svgText, css)
}

/** Chromium copy + meta/class lh + baseline on text leaves. */
function chromiumCopyLhBaselineLeafPatch(svgText, meta) {
  let out = injectFoCss(svgText, CHROMIUM_COPY_LH_BASELINE_LEAF_CSS)
  out = lhMetaLeafPatch(out, meta)
  return out
}

/** Pin used lh px + vertical-align:baseline + display:inline on text leaves at decode. */
function comboLhUsedVaBaselineLeafPatch(svgText, meta) {
  return patchFoTextLeavesInSvg(
    svgText,
    (map, el, ctx) => {
      /** @type {Record<string, string>} */
      const patch = { 'vertical-align': 'baseline', display: 'inline' }
      const px = resolveLineHeightPxForTextLeaf(map, el, ctx)
      if (px != null) patch['line-height'] = formatLineHeightPx(px)
      return patch
    },
    meta,
  )
}

/**
 * Default raster fork id when capture stored lh strut meta (½(lh−fs) from live text leaf).
 * @param {object | undefined} meta
 * @returns {RasterOnlySvgPatchId | null}
 */
export function defaultRasterSvgPatchFromMeta(meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half <= 0) return null
  const sub = meta?.lhStrutRangeSubpixelPx
  if (Number.isFinite(sub) && sub > 0) return 'fo-y-half-leading-minus-subpixel-meta'
  return 'fo-y-half-leading-meta'
}

/**
 * Resolve raster-only SVG patch id for decode fork (product + lab mirror).
 * Explicit `'none'` / `'false'` disables. Unset patch uses {@link defaultRasterSvgPatchFromMeta}.
 * @param {string | undefined | null | false} patch
 * @param {object | undefined} meta
 * @returns {RasterOnlySvgPatchId | null}
 */
export function resolveRasterSvgPatchId(patch, meta) {
  const trimmed = typeof patch === 'string' ? patch.trim() : ''
  const explicitOff = trimmed === 'none' || trimmed === 'false'
  if (explicitOff) return null
  const explicit = resolveExperimentalRasterSvgPatch(patch)
  if (explicit) return explicit
  return trimmed ? null : defaultRasterSvgPatchFromMeta(meta)
}

/**
 * Resolve half-leading px from live raster meta (lhStrutHalfLeadingPx or lh/fs/font box).
 * @param {object | undefined} meta
 */
function firstPositiveMetaPx(...values) {
  for (const v of values) {
    if (Number.isFinite(v) && v > 0) return v
  }
  return null
}

function resolveHalfLeadingPxFromMeta(meta) {
  const stored = meta?.lhStrutHalfLeadingPx
  if (Number.isFinite(stored) && stored > 0) return stored
  const lh = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
  const fs = meta?.lhStrutFontSizePx
  const fontBoxH = meta?.lhStrutFontBoxHeightPx
  if (Number.isFinite(lh) && Number.isFinite(fs) && fs > 0) {
    const derived = resolveLhStrutHalfLeadingPx(lh, fs, fontBoxH)
    if (Number.isFinite(derived) && derived > 0) return derived
  }
  return null
}

/**
 * Shift foreignObject y by −halfLeading from live meta (moves FO up vs stretch box).
 * Applied by default when capture meta has lhStrutHalfLeadingPx (see resolveRasterSvgPatchId).
 * Residual ≈ Range subpixel vs integer ink scan when half-leading alone closes the strut class.
 * @param {string} svgText
 * @param {object | undefined} meta
 * @param {number} [fraction=1] meta-derived fraction (structural, not gate-tuned)
 */
function foYHalfLeadingMetaPatch(svgText, meta, fraction = 1) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0 || !Number.isFinite(fraction) || fraction === 0) {
    return svgText
  }
  return foreignObjectYNudgePatch(svgText, -half * fraction)
}

/** FO y shift by −font-box half-leading from live meta (measureText font bounding box). */
function foYHalfLeadingFontBoxMetaPatch(svgText, meta) {
  const half =
    meta?.lhStrutHalfLeadingFontBoxPx ?? resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -half)
}

/** FO y shift by −used half-leading (layout line box + font box from live leaf). */
function foYHalfLeadingUsedMetaPatch(svgText, meta) {
  const half =
    meta?.lhStrutHalfLeadingUsedPx ?? resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -half)
}

/** FO y −½(lh−fs) then shrink FO height to live line px + overflow clip. */
function comboFoYHalfLeadingLineboxPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  out = foHeightLineboxPatch(out, meta)
  return out
}

/** FO y −½(lh−fs) then FO height=line px + border-box + overflow hidden. */
function comboFoYHalfLeadingBoxOverflowPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  out = foBoxLinepxOverflowPatch(out, meta)
  return out
}

/** FO y −½(lh−fs) then overflow:hidden on FO (no height attr change). */
function comboFoYHalfLeadingOverflowPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  out = injectFoCss(out, FO_OVERFLOW_HIDDEN_CSS)
  return out
}

/**
 * Shift FO y by −inkTopOffsetFromFoTop from live meta (Range ink vs cap model in border box).
 * Falls back to −halfLeading when offset missing.
 */
function foYInkOffsetMetaPatch(svgText, meta) {
  const offset =
    meta?.inkTopOffsetFromFoTop ??
    resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(offset) || offset === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -offset)
}

/**
 * Resolve Range-measured strut half-leading for FO y shift (first line rect vs fs / font box).
 * @param {object | undefined} meta
 */
function resolveRangeStrutHalfLeadingPxFromMeta(meta) {
  const foYAdjust = meta?.lhStrutFoYAdjustPx
  if (Number.isFinite(foYAdjust)) return foYAdjust
  const half = resolveHalfLeadingPxFromMeta(meta)
  const sub = meta?.lhStrutRangeSubpixelPx
  if (Number.isFinite(half) && Number.isFinite(sub)) return half - sub
  const fromRange =
    meta?.lhStrutRangeHalfLeadingPx ?? meta?.lhStrutRangeOffsetPx
  if (Number.isFinite(fromRange)) return fromRange
  return half
}

/** FO y shift by −Range line half-leading from live meta (getClientRects line height). */
function foYStrutRangeMetaPatch(svgText, meta) {
  const half = resolveRangeStrutHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -half)
}

/** FO y shift by −(Range top − line box top) from live meta (strut within layout line box). */
function foYStrutRangeLineboxMetaPatch(svgText, meta) {
  const rangeTop = meta?.lhStrutRangeTopInBorderPx
  const lineBoxTop = meta?.lhStrutLineBoxTopInBorderPx
  const offset =
    Number.isFinite(rangeTop) && Number.isFinite(lineBoxTop)
      ? rangeTop - lineBoxTop
      : resolveRangeStrutHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(offset) || offset === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -offset)
}

/**
 * Midpoint between font-box and (lh−fs)/2 half-leading from live meta.
 * @param {object | undefined} meta
 */
function resolvePartialHalfLeadingPxFromMeta(meta) {
  const fsHalf = resolveHalfLeadingPxFromMeta(meta)
  const fbHalf = meta?.lhStrutHalfLeadingFontBoxPx
  if (Number.isFinite(fsHalf) && Number.isFinite(fbHalf)) return (fsHalf + fbHalf) / 2
  return fsHalf
}

/** FO y shift by −½(fontBoxHalf + fsHalf) from live meta. */
function foYPartialHalfLeadingMetaPatch(svgText, meta) {
  const half = resolvePartialHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -half)
}

/** Structural 0.9× half-leading nudge from live meta (not gate-tuned px). */
const PARTIAL_HALF_LEADING_FRACTION = 0.9

/** FO y shift by −0.9×½(lh−fs) from live meta. */
function foYPartial90HalfLeadingMetaPatch(svgText, meta) {
  return foYHalfLeadingMetaPatch(svgText, meta, PARTIAL_HALF_LEADING_FRACTION)
}

/** FO y −(½(lh−fs) − Range subpixel) from live meta (w7 residual closure). */
function foYHalfLeadingMinusSubpixelMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const sub = meta?.lhStrutRangeSubpixelPx
  const adjust = Number.isFinite(sub) ? half - sub : half
  if (adjust === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -adjust)
}

/** @deprecated alias — use foYHalfLeadingMinusSubpixelMetaPatch */
function foYW7MinusRangeSubpixelMetaPatch(svgText, meta) {
  return foYHalfLeadingMinusSubpixelMetaPatch(svgText, meta)
}

/**
 * FO y −½(lh−fs) on every foreignObject in tree (DOM walk, not first-tag regex only).
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function foYHalfLeadingEachFoMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return foreignObjectYNudgePatch(svgText, -half)
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return foreignObjectYNudgePatch(svgText, -half)
    const fos = doc.querySelectorAll('foreignObject')
    if (!fos.length) return svgText
    for (const fo of fos) {
      const yAttr = fo.getAttribute('y')
      const y = yAttr != null ? parseFloat(yAttr) : 0
      const base = Number.isFinite(y) ? y : 0
      fo.setAttribute('y', String(parseFloat((base - half).toFixed(6))))
    }
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    return foreignObjectYNudgePatch(svgText, -half)
  }
}

/** @param {string} svgText @param {object | undefined} meta */
function resolveFoBorderHeightPxFromMetaOrSvg(svgText, meta) {
  const fromMeta =
    meta?.foBorderBoxH ?? meta?.boxHeightPx ?? meta?.contentBoxPx ?? meta?.lhStrutFoHeightPx
  if (Number.isFinite(fromMeta) && fromMeta > 0) return fromMeta
  const m = svgText.match(/<foreignObject[^>]*\bheight=["']([\d.]+)/i)
  if (m) {
    const n = parseFloat(m[1])
    if (Number.isFinite(n) && n > 0) return n
  }
  return null
}

/** FO clip-path inset to typographic line box (no height attr change). */
function foClipPathLineboxMetaPatch(svgText, meta) {
  const linePx = resolveLineHeightPxForFoHeightLinebox(svgText, meta)
  const foH = resolveFoBorderHeightPxFromMetaOrSvg(svgText, meta)
  if (!Number.isFinite(linePx) || !Number.isFinite(foH) || foH <= linePx) return svgText
  const inset = (foH - linePx) / 2
  const top = formatLineHeightPx(inset)
  const bottom = formatLineHeightPx(inset)
  const css = `foreignObject{clip-path:inset(${top} 0 ${bottom} 0)!important}`
  return injectFoCss(svgText, css)
}

/** Pin font-size + line-height on FO root from live meta px (not 1.35 ratio). */
function foRootFsLhMetaPxPatch(svgText, meta) {
  const fs = meta?.lhStrutFontSizePx
  const lh = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
  if (!Number.isFinite(fs) || !Number.isFinite(lh) || fs <= 0 || lh <= 0) return svgText
  const css =
    `foreignObject{font-size:${formatLineHeightPx(fs)}!important;` +
    `line-height:${formatLineHeightPx(lh)}!important}`
  return injectFoCss(svgText, css)
}

/** @param {string} svgText @param {'width' | 'height'} dim */
function parseSvgRootDimPx(svgText, dim) {
  const re = new RegExp(`<svg[^>]*\\b${dim}=["']([\\d.]+)`, 'i')
  const m = svgText.match(re)
  if (!m) return null
  const n = parseFloat(m[1])
  return Number.isFinite(n) && n > 0 ? n : null
}

/** Scale SVG root width/height by export dpr (HiDPI backing alignment). */
function svgRootScaleByDprPatch(svgText, dpr) {
  if (!Number.isFinite(dpr) || dpr <= 1) return svgText
  const w = parseSvgRootDimPx(svgText, 'width')
  const h = parseSvgRootDimPx(svgText, 'height')
  if (w == null && h == null) return svgText
  /** @type {Record<string, string>} */
  const patch = {}
  if (w != null) patch.width = String(parseFloat((w * dpr).toFixed(6)))
  if (h != null) patch.height = String(parseFloat((h * dpr).toFixed(6)))
  return svgRootAttrPatch(svgText, patch)
}

/** FO y −½(lh−fs) + SVG root width/height × export dpr. */
function foYHalfLeadingDprRootMetaPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  const dpr = meta?.lhStrutExportDpr ?? meta?.exportDpr ?? 1
  return svgRootScaleByDprPatch(out, dpr)
}

/** FO y −½(lh−fs) + clip-path inset to line box. */
function comboFoYHalfLeadingClipLineboxPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return foClipPathLineboxMetaPatch(out, meta)
}

/** FO y −½(lh−fs) + padding-top:Range subpixel on text leaves (glyph box padding probe). */
function comboFoYHalfLeadingGlyphPaddingLeafPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  const sub = meta?.lhStrutRangeSubpixelPx
  if (!Number.isFinite(sub) || sub === 0) return out
  const pad = formatLineHeightPx(sub)
  const css =
    `${FO_TEXT_LEAF_SELECTORS}{padding-top:${pad}!important;white-space:nowrap!important}`
  return injectFoCss(out, css)
}

/** Parent div line-height:1 + translateY(−½(lh−fs)) on anchor text leaves only. */
function anchorParentLh1TranslateYHalfLeadingMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const ty = formatLineHeightPx(-half)
  const css =
    'foreignObject div{line-height:1!important}' +
    `foreignObject a{transform:translateY(${ty})!important;white-space:nowrap!important}`
  return injectFoCss(svgText, css)
}

/** FO y −½(lh−fs) + SVG root overflow:visible (paint slack vs FO clip). */
function comboFoYHalfLeadingSvgRootOverflowVisiblePatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return svgRootAttrPatch(out, { style: 'overflow:visible' })
}

/** FO y −½(lh−fs) + clip-path:inset(0) on FO (no linebox inset). */
function comboFoYHalfLeadingClipInsetZeroPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, 'foreignObject{clip-path:inset(0)!important}')
}

/** FO y shift by −lhStrutRangeSubpixelPx only (no full half-leading). */
function foYRangeSubpixelOnlyMetaPatch(svgText, meta) {
  const sub = meta?.lhStrutRangeSubpixelPx
  if (!Number.isFinite(sub) || sub === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -sub)
}

/** va:baseline on text leaves + FO y −Range subpixel from capture meta (closes baseline-leaf +0.09 overshoot). */
function comboVaBaselineRangeSubpixelMetaPatch(svgText, meta) {
  let out = injectFoCss(svgText, VA_BASELINE_LEAF_CSS)
  return foYRangeSubpixelOnlyMetaPatch(out, meta)
}

/**
 * FO y −½(lh−fs) on every foreignObject + inner nested FO y −½(lh−fs) when present.
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function comboFoYHalfLeadingNestedFoYMetaPatch(svgText, meta) {
  return foYHalfLeadingEachFoMetaPatch(svgText, meta)
}

/** FO y −(½(lh−fs) + Range subpixel) — extra strut nudge vs w7 (opposite of w13 subtract). */
function foYHalfLeadingPlusRangeSubpixelMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const sub = meta?.lhStrutRangeSubpixelPx
  const adjust = Number.isFinite(sub) ? half + sub : half
  return foreignObjectYNudgePatch(svgText, -adjust)
}

/** Text leaf translateY(+Range subpixel) — moves ink down without FO y attr change. */
function textLeafTranslateYRangeSubpixelPositiveMetaPatch(svgText, meta) {
  const sub = meta?.lhStrutRangeSubpixelPx
  if (!Number.isFinite(sub) || sub === 0) return svgText
  const ty = formatLineHeightPx(sub)
  const css = `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(${ty})!important}`
  return injectFoCss(svgText, css)
}

/** FO y −½(lh−fs) + text leaf translateY(+Range subpixel). */
function comboFoYHalfLeadingLeafTranslateYSubpixelPositivePatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return textLeafTranslateYRangeSubpixelPositiveMetaPatch(out, meta)
}

/** FO y −½(lh−fs) + padding-top:Range subpixel on text leaves. */
function comboFoYHalfLeadingLeafPaddingTopSubpixelPatch(svgText, meta) {
  const sub = meta?.lhStrutRangeSubpixelPx
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  if (!Number.isFinite(sub) || sub === 0) return out
  const pad = formatLineHeightPx(sub)
  const css = `${FO_TEXT_LEAF_SELECTORS}{padding-top:${pad}!important}`
  return injectFoCss(out, css)
}

/** FO y −½(lh−fs) + viewBox minY −Range subpixel (subpixel paint slack). */
function comboFoYHalfLeadingViewBoxYSubpixelMetaPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  const sub = meta?.lhStrutRangeSubpixelPx
  if (!Number.isFinite(sub) || sub === 0) return out
  return viewBoxYNudgePatch(out, -sub)
}

/** Text leaf translateY(−(½(lh−fs) − Range subpixel)) — w13 adjust on leaf transform only. */
function textLeafTranslateYHalfLeadingMinusSubpixelMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const sub = meta?.lhStrutRangeSubpixelPx
  const adjust = Number.isFinite(sub) ? half - sub : half
  if (adjust === 0) return svgText
  const ty = formatLineHeightPx(-adjust)
  const css = `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(${ty})!important}`
  return injectFoCss(svgText, css)
}

/** FO y −½(lh−fs) on root (first) foreignObject only — A/B vs all-FO nudge. */
function foYHalfLeadingRootFoOnlyMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  let replaced = false
  return svgText.replace(/<foreignObject(\s[^>]*)?>/i, (full, attrs = '') => {
    if (replaced) return full
    replaced = true
    const yMatch = attrs.match(/\by=["']([^"']+)["']/i)
    if (yMatch) {
      const y = parseFloat(yMatch[1])
      if (Number.isFinite(y)) {
        const next = attrs.replace(/\by=["'][^"']+["']/i, `y="${y - half}"`)
        return `<foreignObject${next}>`
      }
    }
    return `<foreignObject${attrs} y="${-half}">`
  })
}

/**
 * Inner flex row transform translate(0,−½(lh−fs)) at decode (XHTML div in FO).
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function flexInnerRowTranslateYHalfLeadingMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const ty = formatLineHeightPx(-half)
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    const css =
      'foreignObject div[style*="display:flex"],foreignObject div[style*="display: flex"],' +
      'foreignObject div[style*="display:inline-flex"],foreignObject div[style*="display: inline-flex"]' +
      `{transform:translate(0,${ty})!important}`
    return injectFoCss(svgText, css)
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo) return svgText
    const flexRow = [...fo.querySelectorAll('div')].find((el) => {
      const style = el.getAttribute('style') || ''
      return /display\s*:\s*(inline-)?flex/i.test(style)
    })
    if (!flexRow) {
      const css =
        'foreignObject div[style*="display:flex"],foreignObject div[style*="display: flex"]' +
        `{transform:translate(0,${ty})!important}`
      return injectFoCss(svgText, css)
    }
    flexRow.setAttribute('transform', `translate(0 ${ty})`)
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    const css =
      'foreignObject div[style*="display:flex"]{transform:translate(0,' +
      `${ty})!important}`
    return injectFoCss(svgText, css)
  }
}

/** FO y −½(lh−fs) + dominant-baseline:alphabetic on text leaves. */
function comboW7DominantBaselineAlphabeticLeafPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, DOMINANT_BASELINE_ALPHABETIC_LEAF_CSS)
}

/** FO y −½(lh−fs) + text-box-edge:cap alphabetic on text leaves (when supported). */
function comboW7TextBoxEdgeCapAlphabeticLeafPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, TEXT_BOX_EDGE_CAP_ALPHABETIC_LEAF_CSS)
}

/** Scale SVG root 2× for decode; pair with dprScaledSvgRootDraw for downscale blit. */
function svgRootDecodeSupersample2xPatch(svgText) {
  return svgRootScaleByDprPatch(svgText, FO_DECODE_SUPERSAMPLE_RATIO)
}

/** FO y −½(lh−fs) + SVG root 2× decode supersample. */
function comboW7SvgDecodeSupersample2xMetaPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return svgRootDecodeSupersample2xPatch(out)
}

/** FO y −½(lh−fs) + align-items:flex-start on inner flex rows (decode CSS). */
function comboW7FlexInnerRowFlexStartPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, FLEX_CONTAINER_FLEX_START_CSS)
}

/** FO y −(½(lh−fs)−Range subpixel) + inner flex row flex-start. */
function comboW7MinusRangeFlexInnerFlexStartPatch(svgText, meta) {
  let out = foYW7MinusRangeSubpixelMetaPatch(svgText, meta)
  return injectFoCss(out, FLEX_CONTAINER_FLEX_START_CSS)
}

/**
 * Meta-derived FO y nudge (px) for lab fork audit — not gate-tuned.
 * @param {string | null | undefined} patchId
 * @param {object | undefined} meta
 * @returns {number | null}
 */
export function resolveRasterForkFoYNudgePx(patchId, meta) {
  const id = normalizeRasterOnlySvgPatchId(
    typeof patchId === 'string' ? patchId : '',
  )
  if (!id) return null
  const half = resolveHalfLeadingPxFromMeta(meta)
  const sub = meta?.lhStrutRangeSubpixelPx
  switch (id) {
    case 'fo-y-half-leading-meta':
      return Number.isFinite(half) ? -half : null
    case 'fo-y-half-leading-minus-subpixel-meta':
    case 'fo-y-w7-minus-range-subpixel-meta':
    case 'combo-w7-minus-range-flex-inner-flex-start':
    case 'combo-w7-minus-range-height-unset-overflow-visible':
      return Number.isFinite(half)
        ? -(Number.isFinite(sub) ? half - sub : half)
        : null
    case 'fo-y-half-leading-root-only':
    case 'fo-y-half-leading-root-fo-only-meta':
      return Number.isFinite(half) ? -half : null
    case 'text-leaf-relative-top-half-leading-meta':
    case 'text-leaf-relative-top-w7-minus-range-meta':
      return null
    case 'combo-w7-dominant-baseline-alphabetic-leaf':
    case 'combo-w7-text-box-edge-cap-alphabetic-leaf':
    case 'combo-w7-svg-decode-supersample-2x-meta':
    case 'combo-w7-flex-inner-row-flex-start':
      return Number.isFinite(half) ? -half : null
    case 'fo-y-half-leading-plus-range-subpixel-meta':
      return Number.isFinite(half)
        ? -(Number.isFinite(sub) ? half + sub : half)
        : null
    case 'fo-y-range-subpixel-only-meta':
    case 'combo-va-baseline-range-subpixel-meta':
      return Number.isFinite(sub) ? -sub : null
    case 'fo-y-half-leading-dpr-subpixel-meta': {
      const adjust = resolveHalfLeadingMinusDprSubpixelPx(meta)
      return Number.isFinite(adjust) ? -adjust : null
    }
    case 'fo-y-strut-range-meta':
    case 'fo-y-strut-range-preserve-height': {
      const adjust = resolveRangeStrutHalfLeadingPxFromMeta(meta)
      return Number.isFinite(adjust) ? -adjust : null
    }
    default:
      return null
  }
}

/**
 * FO y shift by −(½(lh−fs) − RangeSubpixel/dpr) from live meta + export dpr.
 * @param {object | undefined} meta
 */
function resolveHalfLeadingMinusDprSubpixelPx(meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half)) return null
  const sub = meta?.lhStrutRangeSubpixelPx
  const dpr = meta?.lhStrutExportDpr ?? meta?.exportDpr ?? 1
  const safeDpr = Number.isFinite(dpr) && dpr > 0 ? dpr : 1
  if (Number.isFinite(sub)) return half - sub / safeDpr
  return meta?.lhStrutFoYAdjustPx ?? half
}

/** FO y −½(lh−fs) with Range subpixel scaled by export dpr (meta at decode). */
function foYHalfLeadingDprSubpixelMetaPatch(svgText, meta) {
  const adjust = resolveHalfLeadingMinusDprSubpixelPx(meta)
  if (!Number.isFinite(adjust) || adjust === 0) return svgText
  return foreignObjectYNudgePatch(svgText, -adjust)
}

/** @param {string} svgText @param {number} deltaY */
function viewBoxYNudgePatch(svgText, deltaY) {
  if (!Number.isFinite(deltaY) || deltaY === 0) return svgText
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    parts[1] = parts[1] + deltaY
    const next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${parts.join(' ')}"`)
    return `<svg${next}>`
  })
}

/** viewBox minY −½(lh−fs) instead of foreignObject y (Chromium paint-origin test). */
function viewBoxYHalfLeadingMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  return viewBoxYNudgePatch(svgText, -half)
}

/** viewBox minY −lhStrutFoYAdjustPx (Range-aware half-leading). */
function viewBoxYFoAdjustMetaPatch(svgText, meta) {
  const adjust = resolveRangeStrutHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(adjust) || adjust === 0) return svgText
  return viewBoxYNudgePatch(svgText, -adjust)
}

/** FO y −½(lh−fs) + leading-trim/text-box-trim on text leaves. */
function comboFoYHalfLeadingTrimTextBoxPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, LEADING_TRIM_TEXT_BOX_LEAF_CSS)
}

/** FO y −lhStrutFoYAdjustPx + height=linePx + overflow clip. */
function comboFoYFoAdjustLinepxClipPatch(svgText, meta) {
  let out = foYStrutRangeMetaPatch(svgText, meta)
  return foBoxLinepxOverflowPatch(out, meta)
}

/** FO y −½(lh−fs) + inline-block line box on text leaves. */
function comboFoYHalfLeadingInlineBlockLeafPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return textLeafInlineBlockLineboxPatch(out, meta)
}

/** FO y −½(lh−fs) + FO height=linePx only (no overflow CSS). */
function comboFoYHalfLeadingLinepxHeightOnlyPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  const lhPx = resolveLineHeightPxForFoHeightLinebox(svgText, meta)
  if (lhPx == null) return out
  return setForeignObjectHeightAttr(out, parseFloat(lhPx.toFixed(6)))
}

/** viewBox minY −lhStrutFoYAdjustPx + leading-trim/text-box-trim on text leaves. */
function comboViewBoxYFoAdjustTrimTextBoxPatch(svgText, meta) {
  let out = viewBoxYFoAdjustMetaPatch(svgText, meta)
  return injectFoCss(out, LEADING_TRIM_TEXT_BOX_LEAF_CSS)
}

/** viewBox minY −½(lh−fs) + leading-trim/text-box-trim on text leaves. */
function comboViewBoxYHalfLeadingTrimTextBoxPatch(svgText, meta) {
  let out = viewBoxYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, LEADING_TRIM_TEXT_BOX_LEAF_CSS)
}

/** FO y −lhStrutFoYAdjustPx + leading-trim/text-box-trim on text leaves. */
function comboFoYStrutRangeTrimTextBoxPatch(svgText, meta) {
  let out = foYStrutRangeMetaPatch(svgText, meta)
  return injectFoCss(out, LEADING_TRIM_TEXT_BOX_LEAF_CSS)
}

/** FO y −lhStrutFoYAdjustPx without height/clip attr changes (Range strut, preserve stretch box). */
function foYStrutRangePreserveHeightPatch(svgText, meta) {
  return foYStrutRangeMetaPatch(svgText, meta)
}

/** FO y −½(lh−fs) + overflow:visible on FO (no clip side-effects). */
function comboFoYHalfLeadingOverflowVisiblePatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, FO_OVERFLOW_VISIBLE_CSS)
}

/** Remove fixed height on foreignObject (stretch box from capture attrs). */
function foreignObjectHeightUnsetPatch(svgText) {
  return svgText.replace(/<foreignObject(\s[^>]*)>/gi, (full, attrs = '') => {
    const next = attrs.replace(/\s+height=["'][^"']*["']/gi, '')
    return `<foreignObject${next}>`
  })
}

/** FO y −½(lh−fs) + unset FO height + overflow:visible. */
function comboFoYHalfLeadingHeightUnsetOverflowVisiblePatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  out = foreignObjectHeightUnsetPatch(out)
  return injectFoCss(out, FO_OVERFLOW_VISIBLE_CSS)
}

/** FO y −(½(lh−fs)−subpx) + unset FO height + overflow:visible. */
function comboW7MinusRangeHeightUnsetOverflowVisiblePatch(svgText, meta) {
  let out = foYW7MinusRangeSubpixelMetaPatch(svgText, meta)
  out = foreignObjectHeightUnsetPatch(out)
  return injectFoCss(out, FO_OVERFLOW_VISIBLE_CSS)
}

/** Text leaf position:relative;top:−½(lh−fs) — half-leading on leaf, not FO y attr. */
function textLeafRelativeTopHalfLeadingMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const ty = formatLineHeightPx(-half)
  const css = `${FO_TEXT_LEAF_SELECTORS}{position:relative!important;top:${ty}!important}`
  return injectFoCss(svgText, css)
}

/** Text leaf position:relative;top:−(½(lh−fs)−Range subpixel). */
function textLeafRelativeTopW7MinusRangeMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const sub = meta?.lhStrutRangeSubpixelPx
  const adjust = Number.isFinite(sub) ? half - sub : half
  if (adjust === 0) return svgText
  const ty = formatLineHeightPx(-adjust)
  const css = `${FO_TEXT_LEAF_SELECTORS}{position:relative!important;top:${ty}!important}`
  return injectFoCss(svgText, css)
}

/** FO y −½(lh−fs) + shape-rendering:crispEdges on FO subtree. */
function comboFoYHalfLeadingCrispEdgesPatch(svgText, meta) {
  let out = foYHalfLeadingMetaPatch(svgText, meta)
  return injectFoCss(out, FO_CRISP_EDGES_CSS)
}

/** Text leaf translateY(−½(lh−fs)) from live meta — not foreignObject y attr. */
function textLeafTranslateYHalfLeadingMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const ty = formatLineHeightPx(-half)
  const css = `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(${ty})!important}`
  return injectFoCss(svgText, css)
}

/** Text leaf translateY(−lhStrutFoYAdjustPx) from Range meta. */
function leafTranslateYStrutRangeMetaPatch(svgText, meta) {
  const adjust = resolveRangeStrutHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(adjust) || adjust === 0) return svgText
  const ty = formatLineHeightPx(-adjust)
  const css = `${FO_TEXT_LEAF_SELECTORS}{transform:translateY(${ty})!important}`
  return injectFoCss(svgText, css)
}

/**
 * FO y shift by −½(lh−fs)/exportDpr from live meta (HiDPI SVG root scale).
 * @param {object | undefined} meta
 */
function foYHalfLeadingDprInverseMetaPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  const dpr = meta?.lhStrutExportDpr ?? meta?.exportDpr ?? 1
  const safeDpr = Number.isFinite(dpr) && dpr > 0 ? dpr : 1
  return foreignObjectYNudgePatch(svgText, -(half / safeDpr))
}

/**
 * Outer FO keeps stretch box; inner FO wraps text leaf with typographic line height only.
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function doubleFoOuterFullInnerLineboxPatch(svgText, meta) {
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return svgText
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo) return svgText
    const leaf = [...fo.querySelectorAll('*')].find(
      (el) => el.childElementCount === 0 && (el.textContent || '').trim(),
    )
    if (!leaf?.parentElement) return svgText
    const parent = leaf.parentElement
    const xmlns = 'http://www.w3.org/1999/xhtml'
    const innerFo = doc.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    innerFo.setAttribute('x', '0')
    innerFo.setAttribute('y', '0')
    innerFo.setAttribute('width', '100%')
    const linePx = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
    if (Number.isFinite(linePx) && linePx > 0) {
      innerFo.setAttribute('height', String(parseFloat(linePx.toFixed(6))))
    }
    innerFo.setAttribute('overflow', 'hidden')
    const wrapper = doc.createElementNS(xmlns, 'div')
    wrapper.setAttribute('xmlns', xmlns)
    parent.insertBefore(innerFo, leaf)
    innerFo.appendChild(wrapper)
    wrapper.appendChild(leaf)
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    return svgText
  }
}

/** FO y −lhStrutFoYAdjustPx + inline-block line box on text leaves. */
function comboFoYStrutRangeInlineBlockLeafPatch(svgText, meta) {
  let out = foYStrutRangeMetaPatch(svgText, meta)
  return textLeafInlineBlockLineboxPatch(out, meta)
}

/** viewBox minY −lhStrutFoYAdjustPx + FO height=linePx only (no overflow CSS). */
function comboViewBoxYFoAdjustLinepxHeightOnlyPatch(svgText, meta) {
  let out = viewBoxYFoAdjustMetaPatch(svgText, meta)
  const lhPx = resolveLineHeightPxForFoHeightLinebox(svgText, meta)
  if (lhPx == null) return out
  return setForeignObjectHeightAttr(out, parseFloat(lhPx.toFixed(6)))
}

/** viewBox minY −lhStrutFoYAdjustPx + inline-block line box on text leaves. */
function comboViewBoxYFoAdjustInlineBlockLeafPatch(svgText, meta) {
  let out = viewBoxYFoAdjustMetaPatch(svgText, meta)
  return textLeafInlineBlockLineboxPatch(out, meta)
}

/**
 * Outer FO keeps stretch box; inner wrapper on text leaf gets translateY(−½(lh−fs)).
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function dualFoInnerYHalfLeadingPatch(svgText, meta) {
  const half = resolveHalfLeadingPxFromMeta(meta)
  if (!Number.isFinite(half) || half === 0) return svgText
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return svgText
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo) return svgText
    const leaf = [...fo.querySelectorAll('*')].find(
      (el) => el.childElementCount === 0 && (el.textContent || '').trim(),
    )
    if (!leaf?.parentElement) return svgText
    const parent = leaf.parentElement
    const xmlns = 'http://www.w3.org/1999/xhtml'
    const innerFo = doc.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    innerFo.setAttribute('x', '0')
    innerFo.setAttribute('y', String(-half))
    innerFo.setAttribute('width', '100%')
    const linePx = meta?.lhStrutLineHeightPx ?? meta?.lineHeightPx
    if (Number.isFinite(linePx) && linePx > 0) {
      innerFo.setAttribute('height', String(parseFloat(linePx.toFixed(6))))
    }
    const wrapper = doc.createElementNS(xmlns, 'div')
    wrapper.setAttribute('xmlns', xmlns)
    parent.insertBefore(innerFo, leaf)
    innerFo.appendChild(wrapper)
    wrapper.appendChild(leaf)
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    return svgText
  }
}

/** Parent flex/grid nodes: lh normal; text leaves: pin used lh from meta. */
function parentLhNormalLeafPinPatch(svgText, meta) {
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return lhMetaLeafPatch(svgText, meta)
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return lhMetaLeafPatch(svgText, meta)
    const fo = doc.querySelector('foreignObject')
    if (!fo) return lhMetaLeafPatch(svgText, meta)
    for (const el of fo.querySelectorAll('*')) {
      const isTextLeaf = el.childElementCount === 0 && (el.textContent || '').trim()
      if (isTextLeaf) continue
      mergeInlineStyleOnElement(el, { 'line-height': 'normal' })
    }
    const serialized = new XMLSerializer().serializeToString(doc.documentElement)
    return lhMetaLeafPatch(serialized, meta)
  } catch {
    return lhMetaLeafPatch(svgText, meta)
  }
}

/**
 * One foreignObject per Range line rect (meta.foLineRects from live probe).
 * @param {string} svgText
 * @param {object | undefined} meta
 */
function splitFoPerLinePatch(svgText, meta) {
  const lineRects = meta?.foLineRects
  if (!Array.isArray(lineRects) || !lineRects.length) return svgText
  if (typeof DOMParser === 'undefined' || typeof XMLSerializer === 'undefined') {
    return svgText
  }
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    if (doc.querySelector('parsererror')) return svgText
    const fo = doc.querySelector('foreignObject')
    if (!fo || lineRects.length < 2) return svgText
    const parent = fo.parentNode
    if (!parent) return svgText
    const xmlns = 'http://www.w3.org/1999/xhtml'
    const innerHtml = fo.innerHTML
    const foAttrs = [...fo.attributes]
      .filter((a) => a.name !== 'width' && a.name !== 'height' && a.name !== 'x' && a.name !== 'y')
      .map((a) => `${a.name}="${a.value}"`)
      .join(' ')
    for (const rect of lineRects) {
      const w = rect.width
      const h = rect.height
      const x = rect.x
      const y = rect.y
      if (![w, h, x, y].every((n) => Number.isFinite(n) && n > 0)) continue
      const nextFo = doc.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
      nextFo.setAttribute('x', String(x))
      nextFo.setAttribute('y', String(y))
      nextFo.setAttribute('width', String(w))
      nextFo.setAttribute('height', String(h))
      for (const chunk of foAttrs.split(/\s+/).filter(Boolean)) {
        const eq = chunk.indexOf('=')
        if (eq < 0) continue
        const name = chunk.slice(0, eq)
        const value = chunk.slice(eq + 1).replace(/^"|"$/g, '')
        if (!['x', 'y', 'width', 'height'].includes(name)) nextFo.setAttribute(name, value)
      }
      const wrapper = doc.createElementNS(xmlns, 'div')
      wrapper.setAttribute('xmlns', xmlns)
      wrapper.innerHTML = innerHtml
      nextFo.appendChild(wrapper)
      parent.insertBefore(nextFo, fo)
    }
    parent.removeChild(fo)
    const root = doc.documentElement
    return root ? new XMLSerializer().serializeToString(root) : svgText
  } catch {
    return svgText
  }
}

/** FO height = live line px + border-box + overflow hidden. */
function foBoxLinepxOverflowPatch(svgText, meta) {
  const lhPx = resolveLineHeightPxForFoHeightLinebox(svgText, meta)
  let out = svgText
  if (lhPx != null) {
    out = setForeignObjectHeightAttr(out, parseFloat(lhPx.toFixed(6)))
  }
  return injectFoCss(out, FO_BOX_LINEPX_OVERFLOW_CSS)
}

/** @param {string} svgText @param {number} delta */
function foreignObjectYNudgePatch(svgText, delta) {
  return svgText.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const yMatch = attrs.match(/\by=["']([^"']+)["']/i)
    if (yMatch) {
      const y = parseFloat(yMatch[1])
      if (Number.isFinite(y)) {
        const next = attrs.replace(/\by=["'][^"']+["']/i, `y="${y + delta}"`)
        return `<foreignObject${next}>`
      }
    }
    return `<foreignObject${attrs} y="${delta}">`
  })
}

const FORK_ID_PREFIXES = [
  'tc-fix-w20-rfork-',
  'tc-fix-w19-rfork-',
  'tc-fix-w18-rfork-',
  'tc-fix-w17-rfork-',
  'tc-fix-w16-rfork-',
  'tc-fix-w15-rfork-',
  'tc-fix-w14-rfork-',
  'tc-fix-w13-rfork-',
  'tc-fix-w12-rfork-',
  'tc-fix-w10-rfork-',
  'tc-fix-w9-rfork-',
  'tc-fix-w8-rfork-',
  'tc-fix-w7-rfork-',
  'tc-fix-w6-rfork-',
  'tc-fork-w2-',
  'tc-fork-w1-',
  'tc-text-w1-rfork-',
  'tc-blh-w1-rfork-',
  'tc-blh-w2-rfork-',
]

/**
 * Normalize patch id (accepts tc-fork-w1-* / tc-fork-w2-* recipe ids or short slugs).
 * @param {string} patchId
 * @returns {RasterOnlySvgPatchId | null}
 */
export function normalizeRasterOnlySvgPatchId(patchId) {
  if (!patchId || typeof patchId !== 'string') return null
  let trimmed = patchId.trim()
  for (const prefix of FORK_ID_PREFIXES) {
    if (trimmed.startsWith(prefix)) {
      trimmed = trimmed.slice(prefix.length)
      break
    }
  }
  if (ALL_RASTER_ONLY_SVG_PATCH_IDS.includes(trimmed)) {
    return /** @type {RasterOnlySvgPatchId} */ (trimmed)
  }
  return null
}

/** Product `experimentalRasterSvgPatch` enum (default `none` = off). */
export const EXPERIMENTAL_RASTER_SVG_PATCH_VALUES = /** @type {const} */ ([
  'none',
  'fo-lh-pin',
  'pin-lh-leaf',
  'lh-normal-leaf',
  'baseline-leaf',
  'combo-lh-baseline',
  'lh-1-leaf',
  'lh-1em-leaf',
  'fo-flex-start',
  'flex-center',
  'viewbox-floor',
  'root-height-48',
  'line-height-normal',
  'combo-lh-normal-flex-start',
  'combo-lh-center',
  'fo-height-linebox',
  'combo-lh-flexstart',
  'fo-y-half-leading-meta',
  'fo-y-range-subpixel-only-meta',
  'combo-va-baseline-range-subpixel-meta',
  'combo-baseline-leaf-subpixel-meta',
])

/** @typedef {typeof EXPERIMENTAL_RASTER_SVG_PATCH_VALUES[number]} ExperimentalRasterSvgPatch */

/** Product `experimentalRasterSvgPatch` slugs → lab patch ids (or null when off). */
const EXPERIMENTAL_RASTER_SVG_PATCH_ALIASES = /** @type {const} */ ({
  'fo-lh-pin': 'inject-fo-lh-pin',
  'pin-lh-leaf': 'lh-used-leaf',
  'lh-normal-leaf': 'lh-normal-leaf',
  'baseline-leaf': 'vertical-align-baseline-leaf',
  'combo-baseline-leaf-subpixel-meta': 'combo-va-baseline-range-subpixel-meta',
  'combo-va-baseline-range-subpixel-meta': 'combo-va-baseline-range-subpixel-meta',
  'combo-lh-baseline': 'combo-lh-used-va-baseline-leaf',
  'lh-1-leaf': 'lh-1-leaf',
  'lh-1em-leaf': 'lh-1em-leaf',
  'fo-flex-start': 'fo-align-items-flex-start',
  'flex-center': 'inject-flex-center',
  'viewbox-floor': 'viewbox-int-floor',
  'root-height-48': 'root-height-48',
  'line-height-normal': 'line-height-normal-important',
  'combo-lh-normal-flex-start': 'combo-lh-normal-flex-start',
  'combo-lh-center': 'combo-lh-center',
  'fo-height-linebox': 'fo-height-linebox',
  'combo-lh-flexstart': 'combo-meta-lh-flex-start-fo',
  'fo-y-half-leading-meta': 'fo-y-half-leading-meta',
})

/**
 * Map lab `rasterOnlySvgPatch` slug to product `experimentalRasterSvgPatch` enum value.
 * @param {string | undefined | null} labPatch
 * @returns {ExperimentalRasterSvgPatch | undefined}
 */
export function productExperimentalRasterSvgPatchFromLab(labPatch) {
  if (labPatch == null || typeof labPatch !== 'string') return undefined
  const trimmed = labPatch.trim()
  if (!trimmed || trimmed === 'none' || trimmed === 'false') return undefined
  if (trimmed in EXPERIMENTAL_RASTER_SVG_PATCH_ALIASES) {
    return /** @type {ExperimentalRasterSvgPatch} */ (trimmed)
  }
  if (EXPERIMENTAL_RASTER_SVG_PATCH_VALUES.includes(/** @type {string} */ (trimmed))) {
    return /** @type {ExperimentalRasterSvgPatch} */ (trimmed)
  }
  const labId = normalizeRasterOnlySvgPatchId(trimmed)
  if (!labId) return undefined
  for (const [product, resolved] of Object.entries(EXPERIMENTAL_RASTER_SVG_PATCH_ALIASES)) {
    if (resolved === labId) {
      return /** @type {ExperimentalRasterSvgPatch} */ (product)
    }
  }
  if (EXPERIMENTAL_RASTER_SVG_PATCH_VALUES.includes(/** @type {string} */ (labId))) {
    return /** @type {ExperimentalRasterSvgPatch} */ (labId)
  }
  return undefined
}

/**
 * @param {string | undefined | null} patch
 * @returns {RasterOnlySvgPatchId | null}
 */
export function resolveExperimentalRasterSvgPatch(patch) {
  if (patch == null || patch === false || patch === '') return null
  if (typeof patch !== 'string') return null
  const trimmed = patch.trim()
  if (!trimmed || trimmed === 'none' || trimmed === 'false') return null
  const aliased = EXPERIMENTAL_RASTER_SVG_PATCH_ALIASES[/** @type {keyof typeof EXPERIMENTAL_RASTER_SVG_PATCH_ALIASES} */ (trimmed)]
  if (aliased) return aliased
  return normalizeRasterOnlySvgPatchId(trimmed)
}

/**
 * Clone-safe SVG patch applied only on the raster fork (before decode).
 * @param {string} svgText
 * @param {string} patchId — short slug or tc-fork-w1-* / tc-fork-w2-* recipe id
 * @param {{ meta?: object }} [opts]
 * @returns {string}
 */
export function applyRasterOnlySvgPatch(svgText, patchId, opts = {}) {
  const id = resolveExperimentalRasterSvgPatch(patchId)
  if (!id) return svgText

  let out = svgText
  switch (id) {
    case 'inject-fo-lh-pin':
      out = injectFoCss(out, FO_LH_PIN_CSS)
      break
    case 'inject-flex-center':
      out = injectFoCss(out, FLEX_ROW_CENTER_CSS)
      break
    case 'viewbox-int-floor':
      out = intFloorViewBoxPatch(out)
      break
    case 'fo-y-nudge':
      out = foreignObjectYNudgePatch(out, 1)
      break
    case 'root-height-48':
      out = svgRootAttrPatch(out, { height: '48' })
      break
    case 'combo-lh-center':
      out = injectFoCss(out, FO_LH_PIN_CSS + FLEX_ROW_CENTER_CSS)
      break
    case 'leading-trim-inject':
      out = injectFoCss(out, LEADING_TRIM_CSS)
      break
    case 'align-self-flex-start':
      out = injectFoCss(out, FLEX_START_CSS)
      break
    case 'align-self-flex-start-leaf':
      out = injectFoCss(out, FLEX_START_LEAF_CSS)
      break
    case 'line-height-normal-important':
      out = injectFoCss(out, LH_NORMAL_CSS)
      break
    case 'svg-root-translate-y-minus-half-leading': {
      const fontSizePx = parseFontSizePxFromSvg(out)
      if (fontSizePx != null) {
        const halfLeading = halfLeadingPxFromFontSize(fontSizePx)
        out = svgRootTransformTranslateY(out, -halfLeading)
      }
      break
    }
    case 'foreignObject-overflow-hidden':
      out = injectFoCss(out, FO_OVERFLOW_HIDDEN_CSS)
      break
    case 'combo-lh-normal-flex-start':
      out = injectFoCss(out, LH_NORMAL_CSS + FLEX_START_CSS)
      break
    case 'remove-flex-display-a':
      out = injectFoCss(out, FO_A_INLINE_BLOCK_CSS)
      break
    case 'strut-translate-y':
      out = injectFoCss(out, STRUT_TRANSLATE_Y_CSS)
      break
    case 'clip-content-48':
      out = svgRootAttrPatch(out, { height: '48' })
      out = foreignObjectHeightPatch(out, 48)
      break
    case 'fo-height-linebox':
      out = foHeightLineboxPatch(out, opts.meta)
      break
    case 'fork-visibility-red-leaf':
      out = forkVisibilityRedLeafPatch(out)
      break
    case 'inline-block-linepx-leaf':
      out = inlineBlockLinePxLeafPatch(out, opts.meta)
      break
    case 'combo-linebox-lh-pin-flex-start':
      out = comboLineboxLhPinFlexStartPatch(out, opts.meta)
      break
    case 'leading-trim-leaf':
      out = injectFoCss(out, LEADING_TRIM_LEAF_CSS)
      break
    case 'lh-normal-leaf':
      out = injectFoCss(out, LH_NORMAL_LEAF_CSS)
      break
    case 'lh-used-leaf':
      out = lhUsedLeafPatch(out, opts.meta)
      break
    case 'lh-meta-leaf':
      out = lhMetaLeafPatch(out, opts.meta)
      break
    case 'text-leaf-inline-block-linebox':
      out = textLeafInlineBlockLineboxPatch(out, opts.meta)
      break
    case 'combo-meta-lh-flex-start-fo':
      out = comboMetaLhFlexStartFoPatch(out, opts.meta)
      break
    case 'leading-trim-text-box-leaf':
      out = injectFoCss(out, LEADING_TRIM_TEXT_BOX_LEAF_CSS)
      break
    case 'chromium-copy-lh-baseline-leaf':
      out = chromiumCopyLhBaselineLeafPatch(out, opts.meta)
      break
    case 'strut-translate-y-meta':
      out = strutTranslateYMetaPatch(out, opts.meta)
      break
    case 'lh-1-leaf':
      out = injectFoCss(out, LH_1_LEAF_CSS)
      break
    case 'lh-1em-leaf':
      out = injectFoCss(out, LH_1EM_LEAF_CSS)
      break
    case 'vertical-align-baseline-leaf':
      out = injectFoCss(out, VA_BASELINE_LEAF_CSS)
      break
    case 'combo-lh-normal-va-baseline-leaf':
      out = injectFoCss(out, COMBO_LH_NORMAL_VA_BASELINE_LEAF_CSS)
      break
    case 'combo-lh-used-va-baseline-leaf':
      out = comboLhUsedVaBaselineLeafPatch(out, opts.meta)
      break
    case 'fo-align-items-flex-start':
      out = injectFoCss(out, FO_ALIGN_ITEMS_FLEX_START_CSS)
      break
    case 'leaf-margin-reset-lh1':
      out = injectFoCss(out, LEAF_MARGIN_RESET_LH1_CSS)
      break
    case 'fo-y-half-leading-meta':
      out = foYHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'split-fo-per-line':
      out = splitFoPerLinePatch(out, opts.meta)
      break
    case 'chromium-font-render-leaf':
      out = injectFoCss(out, CHROMIUM_FONT_RENDER_LEAF_CSS)
      break
    case 'fo-box-linepx-overflow':
      out = foBoxLinepxOverflowPatch(out, opts.meta)
      break
    case 'parent-lh-normal-leaf-pin':
      out = parentLhNormalLeafPinPatch(out, opts.meta)
      break
    case 'flex-container-flex-start':
      out = injectFoCss(out, FLEX_CONTAINER_FLEX_START_CSS)
      break
    case 'combo-fo-y-half-leading-linebox':
      out = comboFoYHalfLeadingLineboxPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-box-overflow':
      out = comboFoYHalfLeadingBoxOverflowPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-overflow':
      out = comboFoYHalfLeadingOverflowPatch(out, opts.meta)
      break
    case 'fo-y-ink-offset-meta':
      out = foYInkOffsetMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-fontbox-meta':
      out = foYHalfLeadingFontBoxMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-used-meta':
      out = foYHalfLeadingUsedMetaPatch(out, opts.meta)
      break
    case 'fo-y-strut-range-meta':
      out = foYStrutRangeMetaPatch(out, opts.meta)
      break
    case 'fo-y-strut-range-linebox-meta':
      out = foYStrutRangeLineboxMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-trim-text-box':
      out = comboFoYHalfLeadingTrimTextBoxPatch(out, opts.meta)
      break
    case 'combo-fo-y-fo-adjust-linepx-clip':
      out = comboFoYFoAdjustLinepxClipPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-inline-block-leaf':
      out = comboFoYHalfLeadingInlineBlockLeafPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-linepx-height-only':
      out = comboFoYHalfLeadingLinepxHeightOnlyPatch(out, opts.meta)
      break
    case 'dual-fo-inner-y-half-leading':
      out = dualFoInnerYHalfLeadingPatch(out, opts.meta)
      break
    case 'fo-y-partial-half-leading-meta':
      out = foYPartialHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-dpr-subpixel-meta':
      out = foYHalfLeadingDprSubpixelMetaPatch(out, opts.meta)
      break
    case 'viewbox-y-half-leading-meta':
      out = viewBoxYHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'viewbox-y-fo-adjust-meta':
      out = viewBoxYFoAdjustMetaPatch(out, opts.meta)
      break
    case 'combo-viewbox-y-fo-adjust-trim-text-box':
      out = comboViewBoxYFoAdjustTrimTextBoxPatch(out, opts.meta)
      break
    case 'combo-viewbox-y-half-leading-trim-text-box':
      out = comboViewBoxYHalfLeadingTrimTextBoxPatch(out, opts.meta)
      break
    case 'combo-fo-y-strut-range-trim-text-box':
      out = comboFoYStrutRangeTrimTextBoxPatch(out, opts.meta)
      break
    case 'combo-fo-y-strut-range-inline-block-leaf':
      out = comboFoYStrutRangeInlineBlockLeafPatch(out, opts.meta)
      break
    case 'combo-viewbox-y-fo-adjust-linepx-height-only':
      out = comboViewBoxYFoAdjustLinepxHeightOnlyPatch(out, opts.meta)
      break
    case 'combo-viewbox-y-fo-adjust-inline-block-leaf':
      out = comboViewBoxYFoAdjustInlineBlockLeafPatch(out, opts.meta)
      break
    case 'fo-y-strut-range-preserve-height':
      out = foYStrutRangePreserveHeightPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-overflow-visible':
      out = comboFoYHalfLeadingOverflowVisiblePatch(out, opts.meta)
      break
    case 'text-leaf-translate-y-half-leading-meta':
      out = textLeafTranslateYHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'leaf-translate-y-strut-range-meta':
      out = leafTranslateYStrutRangeMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-dpr-inverse-meta':
      out = foYHalfLeadingDprInverseMetaPatch(out, opts.meta)
      break
    case 'double-fo-outer-full-inner-linebox':
      out = doubleFoOuterFullInnerLineboxPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-minus-subpixel-meta':
      out = foYHalfLeadingMinusSubpixelMetaPatch(out, opts.meta)
      break
    case 'fo-y-w7-minus-range-subpixel-meta':
      out = foYHalfLeadingMinusSubpixelMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-root-only':
      out = foYHalfLeadingRootFoOnlyMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-each-fo-meta':
      out = foYHalfLeadingEachFoMetaPatch(out, opts.meta)
      break
    case 'fo-clip-path-linebox-meta':
      out = foClipPathLineboxMetaPatch(out, opts.meta)
      break
    case 'fo-root-fs-lh-meta-px':
      out = foRootFsLhMetaPxPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-dpr-root-meta':
      out = foYHalfLeadingDprRootMetaPatch(out, opts.meta)
      break
    case 'fo-y-partial-90-half-leading-meta':
      out = foYPartial90HalfLeadingMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-clip-linebox':
      out = comboFoYHalfLeadingClipLineboxPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-glyph-padding-leaf':
      out = comboFoYHalfLeadingGlyphPaddingLeafPatch(out, opts.meta)
      break
    case 'anchor-parent-lh1-translate-y-half-leading-meta':
      out = anchorParentLh1TranslateYHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-svg-root-overflow-visible':
      out = comboFoYHalfLeadingSvgRootOverflowVisiblePatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-clip-inset-zero':
      out = comboFoYHalfLeadingClipInsetZeroPatch(out, opts.meta)
      break
    case 'fo-y-range-subpixel-only-meta':
      out = foYRangeSubpixelOnlyMetaPatch(out, opts.meta)
      break
    case 'combo-va-baseline-range-subpixel-meta':
      out = comboVaBaselineRangeSubpixelMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-nested-fo-y-meta':
      out = comboFoYHalfLeadingNestedFoYMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-plus-range-subpixel-meta':
      out = foYHalfLeadingPlusRangeSubpixelMetaPatch(out, opts.meta)
      break
    case 'text-leaf-translate-y-range-subpixel-positive-meta':
      out = textLeafTranslateYRangeSubpixelPositiveMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta':
      out = comboFoYHalfLeadingLeafTranslateYSubpixelPositivePatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-leaf-padding-top-subpixel-meta':
      out = comboFoYHalfLeadingLeafPaddingTopSubpixelPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-viewbox-y-subpixel-meta':
      out = comboFoYHalfLeadingViewBoxYSubpixelMetaPatch(out, opts.meta)
      break
    case 'text-leaf-translate-y-half-leading-minus-subpixel-meta':
      out = textLeafTranslateYHalfLeadingMinusSubpixelMetaPatch(out, opts.meta)
      break
    case 'fo-y-half-leading-root-fo-only-meta':
      out = foYHalfLeadingRootFoOnlyMetaPatch(out, opts.meta)
      break
    case 'flex-inner-row-translate-y-half-leading-meta':
      out = flexInnerRowTranslateYHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'combo-w7-dominant-baseline-alphabetic-leaf':
      out = comboW7DominantBaselineAlphabeticLeafPatch(out, opts.meta)
      break
    case 'combo-w7-text-box-edge-cap-alphabetic-leaf':
      out = comboW7TextBoxEdgeCapAlphabeticLeafPatch(out, opts.meta)
      break
    case 'combo-w7-svg-decode-supersample-2x-meta':
      out = comboW7SvgDecodeSupersample2xMetaPatch(out, opts.meta)
      break
    case 'combo-w7-flex-inner-row-flex-start':
      out = comboW7FlexInnerRowFlexStartPatch(out, opts.meta)
      break
    case 'combo-w7-minus-range-flex-inner-flex-start':
      out = comboW7MinusRangeFlexInnerFlexStartPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-height-unset-overflow-visible':
      out = comboFoYHalfLeadingHeightUnsetOverflowVisiblePatch(out, opts.meta)
      break
    case 'text-leaf-relative-top-half-leading-meta':
      out = textLeafRelativeTopHalfLeadingMetaPatch(out, opts.meta)
      break
    case 'text-leaf-relative-top-w7-minus-range-meta':
      out = textLeafRelativeTopW7MinusRangeMetaPatch(out, opts.meta)
      break
    case 'combo-fo-y-half-leading-crisp-edges':
      out = comboFoYHalfLeadingCrispEdgesPatch(out, opts.meta)
      break
    case 'combo-w7-minus-range-height-unset-overflow-visible':
      out = comboW7MinusRangeHeightUnsetOverflowVisiblePatch(out, opts.meta)
      break
    default:
      break
  }
  return out
}
