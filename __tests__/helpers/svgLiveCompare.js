import {
  resolveLineHeightPx,
  measureLayoutLineBoxPx,
  usesNormalLineHeight,
} from '../../src/utils/preciseLineHeight.js'

/**
 * Numeric length equality for geometry from browser APIs (`tolPx` 0).
 * Filters only IEEE float jitter — not an intentional pixel slack budget.
 */
export const LENGTH_EQ_EPS = 1e-6

/**
 * @param {number} a
 * @param {number} b
 * @param {number} [tolPx] Pass `> 0` only for deliberate regression slack; default exact.
 */
export function lengthsDifferByTol(a, b, tolPx = 0) {
  const d = Math.abs(a - b)
  if (tolPx > 0) return d > tolPx
  return d > LENGTH_EQ_EPS
}

/** @typedef {{ path: string, tag: string, prop: string, live: string, clone: string, snapClass: string|null, snapCss: string }} StyleDiff */
/** @typedef {{ path: string, tag: string, live: DOMRect, clone: DOMRect, deltaTop: number, deltaLeft: number, deltaHeight: number, deltaWidth: number }} LayoutDiff */
/** @typedef {{ path: string, tag: string, prop: string, live: number|string, clone: number|string, delta: number }} MetricDiff */

const SPACING_PROPS = [
  'margin-top',
  'margin-bottom',
  'padding-top',
  'padding-bottom',
  'line-height',
  'font-size',
  'font-weight',
]

export const CHECKOUT_COMPARE_PROPS = [
  'line-height',
  'height',
  'display',
  'font-size',
  'margin-bottom',
]

/**
 * @param {string} dataUrl
 * @returns {string}
 */
export function svgFromDataUrl(dataUrl) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (dataUrl.startsWith(prefix)) {
    return decodeURIComponent(dataUrl.slice(prefix.length))
  }
  return dataUrl
}

/**
 * @param {string} cssText
 * @returns {Map<string, Record<string, string>>}
 */
export function parseClassRules(cssText) {
  const map = new Map()
  if (!cssText) return map
  for (const m of cssText.matchAll(/\.(c\d+)\{([^}]+)\}/g)) {
    const props = {}
    for (const chunk of m[2].split(';')) {
      const i = chunk.indexOf(':')
      if (i < 0) continue
      const k = chunk.slice(0, i).trim()
      const v = chunk.slice(i + 1).trim()
      if (k && v) props[k] = v
    }
    map.set(m[1], props)
  }
  return map
}

function elementKids(el) {
  return [...el.children].filter((n) => n.nodeType === 1)
}

function nodePath(el, root) {
  const parts = []
  let n = el
  while (n && n !== root) {
    const parent = n.parentElement
    const sibs = elementKids(parent).filter((c) => c.tagName === n.tagName)
    const idx = sibs.indexOf(n)
    const hint = (n.textContent || '').trim().slice(0, 24).replace(/\s+/g, ' ')
    parts.unshift(`${n.tagName.toLowerCase()}[${idx}]${hint ? `:"${hint}"` : ''}`)
    n = parent
  }
  return parts.join(' > ')
}

function snapClassName(el) {
  return [...el.classList].find((c) => /^c\d+$/.test(c)) || null
}

function readProp(cs, prop) {
  return cs.getPropertyValue(prop).trim()
}

/**
 * Compare live subtree computed styles to SVG foreignObject clone.
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {string[]} [props]
 * @returns {{ diffs: StyleDiff[], matches: StyleDiff[], classMap: Map<string, Record<string, string>> }}
 */
export function compareLiveToSvg(liveRoot, svgStr, props = CHECKOUT_COMPARE_PROPS) {
  const styleMatch = svgStr.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
  const classMap = parseClassRules(styleMatch?.[1] ?? '')

  const parsed = new DOMParser().parseFromString(svgStr, 'image/svg+xml')
  if (parsed.querySelector('parsererror')) {
    throw new Error('SVG parse error')
  }

  const iframe = document.createElement('iframe')
  iframe.setAttribute(
    'style',
    'position:absolute;left:-9999px;top:0;width:900px;height:900px;border:0',
  )
  document.body.appendChild(iframe)
  const win = iframe.contentWindow
  const idoc = iframe.contentDocument
  idoc.open()
  idoc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
  idoc.close()
  idoc.body.appendChild(idoc.importNode(parsed.documentElement, true))

  const cloneRoot =
    idoc.getElementById('capture-target') ||
    idoc.querySelector('.checkout-page') ||
    idoc.querySelector('foreignObject .checkout-page')

  const diffs = []
  const matches = []

  function walk(liveEl, cloneEl) {
    if (!liveEl || !cloneEl) return
    const p = nodePath(liveEl, liveRoot)
    const liveCs = getComputedStyle(liveEl)
    const cloneCs = win.getComputedStyle(cloneEl)
    const cls = snapClassName(cloneEl)
    const snap = cls ? classMap.get(cls) || {} : {}

    for (const prop of props) {
      const liveVal = readProp(liveCs, prop)
      const cloneVal = readProp(cloneCs, prop)
      const row = {
        path: p,
        tag: liveEl.tagName.toLowerCase(),
        prop,
        live: liveVal,
        clone: cloneVal,
        snapClass: cls,
        snapCss: snap[prop] ?? '(not in class)',
      }
      if (liveVal !== cloneVal) diffs.push(row)
      else matches.push(row)
    }

    const lk = elementKids(liveEl)
    const ck = elementKids(cloneEl).filter((n) => n.tagName !== 'STYLE')
    const n = Math.max(lk.length, ck.length)
    for (let i = 0; i < n; i++) {
      if (!lk[i] || !ck[i]) {
        diffs.push({
          path: `${p} > child[${i}]`,
          tag: '?',
          prop: '(structure)',
          live: lk[i]?.tagName ?? 'missing',
          clone: ck[i]?.tagName ?? 'missing',
          snapClass: null,
          snapCss: '',
        })
        continue
      }
      walk(lk[i], ck[i])
    }
  }

  if (liveRoot && cloneRoot) walk(liveRoot, cloneRoot)
  else {
    diffs.push({
      path: '#capture-target',
      tag: 'root',
      prop: '(root)',
      live: liveRoot ? 'found' : 'missing',
      clone: cloneRoot ? 'found' : 'missing',
      snapClass: null,
      snapCss: '',
    })
  }

  iframe.remove()
  return { diffs, matches, classMap }
}

/**
 * @param {Element} el
 * @param {Element} root
 */
function relRect(el, root) {
  const er = el.getBoundingClientRect()
  const rr = root.getBoundingClientRect()
  return {
    top: er.top - rr.top,
    left: er.left - rr.left,
    width: er.width,
    height: er.height,
    bottom: er.bottom - rr.top,
  }
}

function mountSvgClone(svgStr) {
  const parsed = new DOMParser().parseFromString(svgStr, 'image/svg+xml')
  if (parsed.querySelector('parsererror')) throw new Error('SVG parse error')
  const iframe = document.createElement('iframe')
  iframe.setAttribute(
    'style',
    'position:absolute;left:0;top:0;width:900px;height:900px;border:0;visibility:hidden',
  )
  document.body.appendChild(iframe)
  const win = iframe.contentWindow
  const idoc = iframe.contentDocument
  idoc.open()
  idoc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
  idoc.close()
  idoc.body.appendChild(idoc.importNode(parsed.documentElement, true))
  const cloneRoot =
    idoc.getElementById('capture-target') ||
    idoc.querySelector('.checkout-page')
  return { iframe, win, idoc, cloneRoot }
}

/**
 * Layout box comparison (positions relative to capture root).
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {number} [tolPx] Exact when 0 ({@link LENGTH_EQ_EPS}); use &gt;0 only for loose checks.
 * @returns {{ layoutDiffs: LayoutDiff[], cloneRoot: Element|null }}
 */
export function compareLayoutToSvg(liveRoot, svgStr, tolPx = 0) {
  const { iframe, cloneRoot } = mountSvgClone(svgStr)
  const layoutDiffs = []

  function walk(liveEl, cloneEl) {
    if (!liveEl || !cloneEl) return
    const p = nodePath(liveEl, liveRoot)
    const lr = relRect(liveEl, liveRoot)
    const cr = relRect(cloneEl, cloneRoot)
    const row = {
      path: p,
      tag: liveEl.tagName.toLowerCase(),
      live: lr,
      clone: cr,
      deltaTop: cr.top - lr.top,
      deltaLeft: cr.left - lr.left,
      deltaHeight: cr.height - lr.height,
      deltaWidth: cr.width - lr.width,
    }
    if (
      lengthsDifferByTol(row.deltaTop, 0, tolPx) ||
      lengthsDifferByTol(row.deltaLeft, 0, tolPx) ||
      lengthsDifferByTol(row.deltaHeight, 0, tolPx) ||
      lengthsDifferByTol(row.deltaWidth, 0, tolPx)
    ) {
      layoutDiffs.push(row)
    }

    const lk = elementKids(liveEl)
    const ck = elementKids(cloneEl).filter((n) => n.tagName !== 'STYLE')
    for (let i = 0; i < Math.min(lk.length, ck.length); i++) walk(lk[i], ck[i])
  }

  if (liveRoot && cloneRoot) walk(liveRoot, cloneRoot)
  iframe.remove()
  return { layoutDiffs, cloneRoot }
}

/**
 * Ink bounds of text inside an element (Range client rects).
 * @param {Element} el
 * @param {Element} root
 */
export function measureTextInk(el, root) {
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = [...range.getClientRects()]
  if (!rects.length) return null
  const rr = root.getBoundingClientRect()
  let top = Infinity
  let bottom = -Infinity
  for (const r of rects) {
    top = Math.min(top, r.top)
    bottom = Math.max(bottom, r.bottom)
  }
  return {
    top: top - rr.top,
    bottom: bottom - rr.top,
    height: bottom - top,
  }
}

function findTextLeaf(root, text) {
  const want = text.trim()
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    if ((el.textContent || '').trim() === want) return el
  }
  return null
}

function resolveCloneElement(liveRoot, cloneRoot, liveEl) {
  if (!liveEl || !cloneRoot || !liveRoot.contains(liveEl)) return null
  /** @type {{ tag: string, idx: number }[]} */
  const path = []
  let n = liveEl
  while (n && n !== liveRoot) {
    const parent = n.parentElement
    if (!parent) return null
    const sibs = elementKids(parent).filter((c) => c.tagName === n.tagName)
    const idx = sibs.indexOf(n)
    if (idx < 0) return null
    path.unshift({ tag: n.tagName.toLowerCase(), idx })
    n = parent
  }
  let cur = cloneRoot
  for (const { tag, idx } of path) {
    const kids = elementKids(cur).filter((c) => c.tagName.toLowerCase() === tag)
    cur = kids[idx]
    if (!cur) return null
  }
  return cur
}

function findLiveCloneByText(liveRoot, cloneRoot, text) {
  const liveEl = findTextLeaf(liveRoot, text)
  const cloneEl =
    liveEl && cloneRoot ? resolveCloneElement(liveRoot, cloneRoot, liveEl) : null
  return { live: liveEl, clone: cloneEl }
}

/**
 * Range ink for the SVG-clone counterpart of a live element (matched by DOM path).
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {Element} liveEl
 */
export function measureSvgCloneTextInk(liveRoot, svgStr, liveEl) {
  const { iframe, cloneRoot } = mountSvgClone(svgStr)
  let ink = null
  if (liveEl && cloneRoot) {
    const cloneEl = resolveCloneElement(liveRoot, cloneRoot, liveEl)
    if (cloneEl) ink = measureTextInk(cloneEl, cloneRoot)
  }
  iframe.remove()
  return ink
}

/**
 * Probe string for Canvas `measureText` (ascender + descender in one glyph pair).
 * @param {Element} el
 */
function canvasGlyphSample(el) {
  const t = (el.textContent || '').trim()
  if (!t) return 'Mg'
  if (t.length === 1) return `${t}${t}`
  return t[0] + t[t.length - 1]
}

/**
 * Canvas `TextMetrics`: font bbox vs ink bbox (Mg or element-derived sample).
 * @param {CSSStyleDeclaration} cs
 * @param {string} [sample]
 * @returns {Record<string, number|string>|null}
 */
export function measureFontBoxPx(cs, sample = 'Mg') {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  ctx.font = `${style} ${weight} ${fs}px ${family}`
  const m = ctx.measureText(sample)
  const fbA = m.fontBoundingBoxAscent
  const fbD = m.fontBoundingBoxDescent
  const abA = m.actualBoundingBoxAscent
  const abD = m.actualBoundingBoxDescent
  let ascent = typeof fbA === 'number' ? fbA : abA
  let descent = typeof fbD === 'number' ? fbD : abD
  if (typeof ascent !== 'number' || typeof descent !== 'number') return null

  /** @type {Record<string, number|string>} */
  const out = {
    ascent,
    descent,
    height: ascent + descent,
    sample,
    advanceWidth:
      typeof m.width === 'number' && Number.isFinite(m.width) ? m.width : null,
  }

  const extraNumericKeys = [
    'alphabeticBaseline',
    'emHeightAscent',
    'emHeightDescent',
    'fontBoundingBoxAscent',
    'fontBoundingBoxDescent',
    'hangingBaseline',
    'ideographicBaseline',
    'actualBoundingBoxAscent',
    'actualBoundingBoxDescent',
    'actualBoundingBoxLeft',
    'actualBoundingBoxRight',
  ]
  for (const key of extraNumericKeys) {
    try {
      const v = /** @type {Record<string, unknown>} */ (/** @type {unknown} */ (m))[key]
      if (typeof v === 'number' && Number.isFinite(v)) {
        out[key] = v
      }
    } catch {
      /* engine may omit */
    }
  }

  return out
}

/**
 * `measureText(text).width` for layout comparison (advance).
 * @param {CSSStyleDeclaration} cs
 * @param {string} text
 * @returns {number|null}
 */
export function measureCanvasAdvanceWidth(cs, text) {
  if (!text) return null
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const fs = parseFloat(cs.fontSize) || 16
  const weight = cs.fontWeight || '400'
  const style = cs.fontStyle || 'normal'
  const family = cs.fontFamily || 'sans-serif'
  ctx.font = `${style} ${weight} ${fs}px ${family}`
  const w = ctx.measureText(text).width
  return Number.isFinite(w) ? w : null
}

/**
 * Text top/bottom from font metrics + line-height (half-leading model), relative to root.
 * More stable than Range ink when line-height is pinned or fonts differ slightly.
 * @param {Element} el
 * @param {Element} root
 * @param {ReturnType<typeof measureFontBoxPx>|null} [fontBoxPre] optional (avoids duplicate measureText)
 */
export function measureFontMetricInk(el, root, fontBoxPre = null) {
  const cs = getComputedStyle(el)
  const box = relRect(el, root)
  const fontBox = fontBoxPre ?? measureFontBoxPx(cs, canvasGlyphSample(el))
  if (!fontBox) return null

  const borderTop = parseFloat(cs.borderTopWidth) || 0
  const paddingTop = parseFloat(cs.paddingTop) || 0
  let lineHeightPx = resolveLineHeightPx(cs, el)
  /** Match {@link pinLineHeightPx}: `normal` is pinned using painted layout box, not typed-OM / font fallback. */
  if (usesNormalLineHeight(cs, el)) {
    const layoutLh = measureLayoutLineBoxPx(cs, el)
    if (layoutLh != null && layoutLh > 0) {
      lineHeightPx = layoutLh
    }
  }
  const halfLeading = Math.max(0, (lineHeightPx - fontBox.height) / 2)
  const contentTop = box.top + borderTop + paddingTop
  const top = contentTop + halfLeading
  const bottom = top + fontBox.height
  /** Distance from baseline up/down (canvas fontBBox); baseline ≈ top of line + half-leading + ascent. */
  const baselineApproxFromBorderTop = borderTop + paddingTop + halfLeading + fontBox.ascent
  const baselineApproxRoot = box.top + baselineApproxFromBorderTop

  return {
    top,
    bottom,
    height: fontBox.height,
    halfLeading,
    lineHeightPx,
    contentTop,
    topInBox: borderTop + paddingTop + halfLeading,
    baselineApproxRoot,
    baselineApproxFromBorderTop,
    borders: { borderTop },
    paddings: { paddingTop },
    fontBox,
  }
}

/**
 * @param {Element} el
 * @param {Element} root
 */
export function collectTextFlowMetrics(el, root) {
  const cs = getComputedStyle(el)
  const box = relRect(el, root)
  const ink = measureTextInk(el, root)
  const fontBox = measureFontBoxPx(cs, canvasGlyphSample(el))
  const fontInk = measureFontMetricInk(el, root, fontBox)
  const inkRelBorder =
    ink && Number.isFinite(box.top)
      ? {
          top: ink.top - box.top,
          bottom: ink.bottom - box.top,
          height: ink.height,
        }
      : null
  const fullLine = ((el.textContent || '').trim() || '').slice(0, 500)
  const advanceWidthFull =
    fullLine.length > 0 ? measureCanvasAdvanceWidth(cs, fullLine) : null

  const out = {
    path: nodePath(el, root),
    tag: el.tagName.toLowerCase(),
    box,
    ink,
    inkRelBorder,
    fontInk,
    fontBox,
    advanceWidthFull,
    canvasAdvanceLabel: fullLine.length > 64 ? `${fullLine.slice(0, 64)}…` : fullLine,
  }
  for (const p of SPACING_PROPS) {
    out[p] = cs.getPropertyValue(p).trim()
  }
  for (const p of ['border-top-width', 'border-bottom-width']) {
    out[p] = cs.getPropertyValue(p).trim()
  }
  for (const p of [
    'font-family',
    'font-style',
    'letter-spacing',
    'text-rendering',
    'font-kerning',
    'color',
  ]) {
    out[p] = cs.getPropertyValue(p).trim()
  }
  return out
}

/**
 * Gap between two siblings' border boxes (margin-aware visual gap).
 * @param {Element} above
 * @param {Element} below
 */
export function siblingVisualGap(above, below) {
  const a = above.getBoundingClientRect()
  const b = below.getBoundingClientRect()
  return b.top - a.bottom
}

/**
 * Compare text flow metrics live vs SVG clone for paired elements.
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {(live: Element, clone: Document) => { liveEl: Element, cloneEl: Element }|null} picker
 * @param {number} [tolPx]
 */
export function compareTextMetricsToSvg(liveRoot, svgStr, picker, tolPx = 0) {
  const { iframe, idoc, cloneRoot } = mountSvgClone(svgStr)
  const picked = picker(liveRoot, idoc)
  const metricDiffs = /** @type {MetricDiff[]} */ ([])

  if (!picked || !cloneRoot) {
    iframe.remove()
    return { metricDiffs, liveMetrics: null, cloneMetrics: null }
  }

  const { liveEl, cloneEl } = picked
  const liveM = collectTextFlowMetrics(liveEl, liveRoot)
  const cloneM = collectTextFlowMetrics(cloneEl, cloneRoot)

  const numericKeys = [
    ['box.top', liveM.box.top, cloneM.box.top],
    ['box.bottom', liveM.box.bottom, cloneM.box.bottom],
    ['box.height', liveM.box.height, cloneM.box.height],
    ['ink.top', liveM.ink?.top, cloneM.ink?.top],
    ['ink.bottom', liveM.ink?.bottom, cloneM.ink?.bottom],
    ['ink.height', liveM.ink?.height, cloneM.ink?.height],
    ['fontBox.height', liveM.fontBox?.height, cloneM.fontBox?.height],
  ]

  for (const [prop, live, clone] of numericKeys) {
    if (live == null || clone == null) continue
    const delta = clone - live
    if (lengthsDifferByTol(clone, live, tolPx)) {
      metricDiffs.push({
        path: liveM.path,
        tag: liveM.tag,
        prop,
        live,
        clone,
        delta,
      })
    }
  }

  for (const p of SPACING_PROPS) {
    if (liveM[p] !== cloneM[p]) {
      metricDiffs.push({
        path: liveM.path,
        tag: liveM.tag,
        prop: p,
        live: liveM[p],
        clone: cloneM[p],
        delta: NaN,
      })
    }
  }

  iframe.remove()
  return { metricDiffs, liveMetrics: liveM, cloneMetrics: cloneM }
}

/**
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {string} [spanText]
 * @param {number} [tolPx]
 */
export function compareEmailFieldMetrics(
  liveRoot,
  svgStr,
  labelText = 'Email Address',
  tolPx = 0,
) {
  const { iframe, cloneRoot } = mountSvgClone(svgStr)
  const { live: liveEl, clone: cloneEl } = findLiveCloneByText(
    liveRoot,
    cloneRoot,
    labelText,
  )

  const metricDiffs = /** @type {MetricDiff[]} */ ([])
  let liveMetrics = null
  let cloneMetrics = null

  let spanInputGap = null

  if (liveEl && cloneEl) {
    liveMetrics = collectTextFlowMetrics(liveEl, liveRoot)
    cloneMetrics = collectTextFlowMetrics(cloneEl, cloneRoot)

    const numericKeys = [
      ['box.top', liveMetrics.box.top, cloneMetrics.box.top],
      ['box.bottom', liveMetrics.box.bottom, cloneMetrics.box.bottom],
      ['ink.top', liveMetrics.ink?.top, cloneMetrics.ink?.top],
      ['ink.bottom', liveMetrics.ink?.bottom, cloneMetrics.ink?.bottom],
    ]
    for (const [prop, live, clone] of numericKeys) {
      if (live == null || clone == null) continue
      const delta = clone - live
      if (lengthsDifferByTol(clone, live, tolPx)) {
        metricDiffs.push({
          path: liveMetrics.path,
          tag: liveEl.tagName.toLowerCase(),
          prop,
          live,
          clone,
          delta,
        })
      }
    }
    const boxInkAligned =
      !lengthsDifferByTol(liveMetrics.box.top, cloneMetrics.box.top, tolPx) &&
      !lengthsDifferByTol(liveMetrics.box.bottom, cloneMetrics.box.bottom, tolPx) &&
      !lengthsDifferByTol(liveMetrics.ink?.top ?? 0, cloneMetrics.ink?.top ?? 0, tolPx) &&
      !lengthsDifferByTol(liveMetrics.ink?.bottom ?? 0, cloneMetrics.ink?.bottom ?? 0, tolPx)

    for (const p of SPACING_PROPS) {
      if (p === 'line-height' && boxInkAligned) {
        const cloneLh = parseFloat(cloneMetrics[p])
        const inkH = liveMetrics.ink?.height
        if (
          Number.isFinite(cloneLh) &&
          inkH &&
          !lengthsDifferByTol(cloneLh, inkH, tolPx)
        ) {
          continue
        }
      }
      if (liveMetrics[p] !== cloneMetrics[p]) {
        metricDiffs.push({
          path: liveMetrics.path,
          tag: liveEl.tagName.toLowerCase(),
          prop: p,
          live: liveMetrics[p],
          clone: cloneMetrics[p],
          delta: NaN,
        })
      }
    }

    const liveInput = liveEl.parentElement?.querySelector('input:not([type=checkbox])')
    const cloneInput = cloneEl.parentElement?.querySelector('input:not([type=checkbox])')
    if (liveInput && cloneInput) {
      const liveGap = siblingVisualGap(liveEl, liveInput)
      const cloneGap = siblingVisualGap(cloneEl, cloneInput)
      const delta = cloneGap - liveGap
      spanInputGap = { live: liveGap, clone: cloneGap, delta }
      if (lengthsDifferByTol(cloneGap, liveGap, tolPx)) {
        metricDiffs.push({
          path: `${liveMetrics.path} → input`,
          tag: 'gap',
          prop: 'span-input',
          live: liveGap,
          clone: cloneGap,
          delta,
        })
      }
    }
  }

  iframe.remove()
  return { metricDiffs, liveMetrics, cloneMetrics, spanInputGap }
}

/**
 * Full checkout page: live DOM vs SVG clone structure (one iframe mount).
 * @param {Element} liveRoot
 * @param {string} svgStr
 * @param {number} [tolPx]
 */
export function compareCheckoutStructure(liveRoot, svgStr, tolPx = 0) {
  const { iframe, cloneRoot } = mountSvgClone(svgStr)
  /** @type {{ title: string, kind: 'text'|'input', liveMetrics: object, cloneMetrics: object, siblingGap?: { live: number, clone: number }|null, usedHeight?: { live: string, clone: string }|null }[]} */
  const sections = []

  /**
   * @param {string} title
   * @param {Element|null|undefined} liveEl
   * @param {Element|null|undefined} cloneEl
   * @param {{ kind?: 'text'|'input', gapToInput?: boolean }} [opts]
   */
  function addSection(title, liveEl, cloneEl, opts = {}) {
    if (!liveEl || !cloneEl || !cloneRoot) return
    const kind = opts.kind ?? 'text'
    const liveMetrics = collectTextFlowMetrics(liveEl, liveRoot)
    const cloneMetrics = collectTextFlowMetrics(cloneEl, cloneRoot)
    let siblingGap = null
    if (opts.gapToInput) {
      const liveInput = liveEl.parentElement?.querySelector('input:not([type=checkbox])')
      const cloneInput = cloneEl.parentElement?.querySelector('input:not([type=checkbox])')
      if (liveInput && cloneInput) {
        siblingGap = {
          live: siblingVisualGap(liveEl, liveInput),
          clone: siblingVisualGap(cloneEl, cloneInput),
        }
      }
    }
    let usedHeight = null
    if (kind === 'input') {
      const win = cloneEl.ownerDocument.defaultView
      usedHeight = {
        live: getComputedStyle(liveEl).height,
        clone: win ? win.getComputedStyle(cloneEl).height : '',
      }
    }
    sections.push({ title, kind, liveEl, liveMetrics, cloneMetrics, siblingGap, usedHeight })
  }

  const findLabel = (text) => findLiveCloneByText(liveRoot, cloneRoot, text)

  addSection('Logo', liveRoot.querySelector('.logo'), cloneRoot?.querySelector('.logo'))
  addSection('Checkout (h2)', liveRoot.querySelector('h2'), cloneRoot?.querySelector('h2'))

  const email = findLabel('Email Address')
  addSection('Email Address (label)', email.live, email.clone, { gapToInput: true })
  addSection(
    'Email input',
    liveRoot.querySelector('input[type="email"]'),
    cloneRoot?.querySelector('input[type="email"]'),
    { kind: 'input' },
  )

  addSection(
    'Remember my details',
    liveRoot.querySelector('.checkout-checkbox'),
    cloneRoot?.querySelector('.checkout-checkbox'),
  )

  const promo = findLabel('Promo Code')
  addSection('Promo Code (label)', promo.live, promo.clone, { gapToInput: true })

  const liveInputs = [...liveRoot.querySelectorAll('input:not([type=checkbox])')]
  const cloneInputs = [...(cloneRoot?.querySelectorAll('input:not([type=checkbox])') || [])]
  addSection('Promo input', liveInputs.at(-1), cloneInputs.at(-1), { kind: 'input' })

  iframe.remove()
  return { sections, tolerance: tolPx }
}

/**
 * Sample text color in a region of a canvas (for visual regression).
 * @param {HTMLCanvasElement} canvas
 * @param {{ x: number, y: number, w: number, h: number }} region
 */
export function sampleCanvasRegion(canvas, region) {
  const ctx = canvas.getContext('2d')
  const { x, y, w, h } = region
  const data = ctx.getImageData(x, y, w, h).data
  let dark = 0
  let total = 0
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3]
    if (a < 32) continue
    total++
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    if (lum < 128) dark++
  }
  return { dark, total, ratio: total ? dark / total : 0 }
}

/**
 * RMSE between two canvases (same dimensions).
 * @param {HTMLCanvasElement} a
 * @param {HTMLCanvasElement} b
 */
export function canvasRmse(a, b) {
  if (a.width !== b.width || a.height !== b.height) {
    return { rmse: Infinity, mismatchSize: true }
  }
  const da = a.getContext('2d').getImageData(0, 0, a.width, a.height).data
  const db = b.getContext('2d').getImageData(0, 0, b.width, b.height).data
  let sum = 0
  const n = da.length / 4
  for (let i = 0; i < da.length; i += 4) {
    const dr = da[i] - db[i]
    const dg = da[i + 1] - db[i + 1]
    const db_ = da[i + 2] - db[i + 2]
    const dalpha = da[i + 3] - db[i + 3]
    sum += dr * dr + dg * dg + db_ * db_ + dalpha * dalpha
  }
  return { rmse: Math.sqrt(sum / (n * 4)), mismatchSize: false }
}

/**
 * Classes for label/span in checkout capture must not freeze line-height or height.
 * @param {Map<string, Record<string, string>>} classMap
 * @param {string} svgStr
 */
export function assertNoPinnedTextMetricsInSvg(classMap, svgStr) {
  const violations = []
  for (const [cls, props] of classMap) {
    const lh = props['line-height']
    const h = props.height
    if (lh && lh !== 'normal' && /^\d/.test(lh)) {
      violations.push(`${cls} line-height:${lh}`)
    }
    if (h && h !== 'auto' && /^\d/.test(h)) {
      violations.push(`${cls} height:${h}`)
    }
  }
  if (violations.length) {
    throw new Error(
      `SVG classes must not pin line-height/height on text flow nodes:\n${violations.join('\n')}`,
    )
  }
  if (!svgStr.includes('capture-target') && !svgStr.includes('checkout-page')) {
    throw new Error('SVG missing capture root')
  }
}
