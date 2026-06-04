import {
  compareCheckoutStructure,
  LENGTH_EQ_EPS,
  measureCanvasInkForElement,
} from '../__tests__/helpers/svgLiveCompare.js'
import { describeRasterPath, readCanvasRasterMeta } from './raster-debug-metrics.js'

/** Report metadata: numeric rows use {@link LENGTH_EQ_EPS} float-safe equality (no px slack budget). */
const STRUCTURE_EXACT_TOLERANCE = 0

/**
 * Readable names for Canvas `TextMetrics`-derived snapshot fields ({@see measureFontBoxPx}).
 * @type {[snapshotKey: string, label: string][]}
 */
const CANVAS_FONT_METRIC_ROWS = [
  ['fontBoundingBoxAscent', 'Ascent (font bounding box)'],
  ['fontBoundingBoxDescent', 'Descent (font bounding box)'],
  ['actualBoundingBoxAscent', 'Ascent (glyph / ink bbox)'],
  ['actualBoundingBoxDescent', 'Descent (glyph / ink bbox)'],
  ['ascent', 'Ascent chosen for line-height model'],
  ['descent', 'Descent chosen for line-height model'],
  ['height', 'Font em-height (ascent + descent used)'],
  ['alphabeticBaseline', 'Baseline · alphabetic'],
  ['emHeightAscent', 'em-height ascent'],
  ['emHeightDescent', 'em-height descent'],
  ['hangingBaseline', 'Baseline · hanging'],
  ['ideographicBaseline', 'Baseline · ideographic'],
  ['actualBoundingBoxLeft', 'Glyph bbox · left overshoot'],
  ['actualBoundingBoxRight', 'Glyph bbox · right overshoot'],
  ['advanceWidth', 'Advance width (sample glyphs)'],
]

/**
 * @param {object|null} liveMetrics
 * @param {object|null} cloneMetrics
 * @param {{ live: number, clone: number }|null|undefined} siblingGap
 * @param {{ topInBorder: number, bottomInBorder?: number, height?: number }|null|undefined} canvasCapInk
 */
function buildTextStructureRows(liveMetrics, cloneMetrics, siblingGap, canvasCapInk = null) {
  if (!liveMetrics || !cloneMetrics) return []

  /** @type {{ prop: string, live: string|number|null, clone: string|number|null, delta: number|null }[]} */
  const rows = []

  const pushNum = (prop, live, clone) => {
    rows.push({
      prop,
      live: live ?? null,
      clone: clone ?? null,
      delta: live != null && clone != null ? clone - live : null,
    })
  }

  /** Ink px at 2dp — matches table display, avoids float jitter warnings. */
  const pushInkPx = (prop, live, clone) => {
    const r = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 100) / 100 : v)
    pushNum(prop, r(live), r(clone))
  }

  const pushStr = (prop, live, clone) => {
    rows.push({ prop, live: live ?? null, clone: clone ?? null, delta: null })
  }

  // --- Layout boxes (capture root coords) ---
  pushNum('box.top', liveMetrics.box.top, cloneMetrics.box.top)
  pushNum('box.bottom', liveMetrics.box.bottom, cloneMetrics.box.bottom)
  pushNum('box.height', liveMetrics.box.height, cloneMetrics.box.height)
  pushNum('box.width', liveMetrics.box.width, cloneMetrics.box.width)
  pushNum('box.left', liveMetrics.box.left, cloneMetrics.box.left)

  // --- Line box from Range (informational — often equals line-height box, not cap ink) ---
  if (liveMetrics.inkRelBorder && cloneMetrics.inkRelBorder) {
    pushNum(
      'paint.line-box.vs-border.top',
      liveMetrics.inkRelBorder.top,
      cloneMetrics.inkRelBorder.top,
    )
    pushNum(
      'paint.line-box.vs-border.height',
      liveMetrics.inkRelBorder.height,
      cloneMetrics.inkRelBorder.height,
    )
  }

  // --- Cap / glyph ink (font metrics · actualBoundingBoxAscent) ---
  if (liveMetrics.capInkRelBorder && cloneMetrics.capInkRelBorder) {
    pushInkPx(
      'paint.cap.vs-border.top',
      liveMetrics.capInkRelBorder.top,
      cloneMetrics.capInkRelBorder.top,
    )
    pushInkPx(
      'paint.cap.vs-border.bottom',
      liveMetrics.capInkRelBorder.bottom,
      cloneMetrics.capInkRelBorder.bottom,
    )
    pushInkPx(
      'paint.cap.vs-border.height',
      liveMetrics.capInkRelBorder.height,
      cloneMetrics.capInkRelBorder.height,
    )
  }
  if (liveMetrics.capInkRelBorder && canvasCapInk) {
    pushInkPx(
      'paint.canvas.vs-border.top',
      liveMetrics.capInkRelBorder.top,
      canvasCapInk.topInBorder,
    )
    pushInkPx(
      'paint.canvas.vs-border.bottom',
      liveMetrics.capInkRelBorder.bottom,
      canvasCapInk.bottomInBorder ?? null,
    )
    pushInkPx(
      'paint.canvas.vs-border.height',
      liveMetrics.capInkRelBorder.height,
      canvasCapInk.height ?? null,
    )
    const padTop = parseFloat(liveMetrics['padding-top']) || 0
    const borderTop = parseFloat(liveMetrics['border-top-width']) || 0
    const contentTop = borderTop + padTop
    if (canvasCapInk.topInBorder != null) {
      pushInkPx(
        'paint.canvas.vs-padding.top',
        padTop,
        canvasCapInk.topInBorder - padTop,
      )
      pushInkPx(
        'paint.canvas.vs-content.top',
        contentTop,
        canvasCapInk.topInBorder - contentTop,
      )
    }
    if (canvasCapInk.bottomInBorder != null && liveMetrics.box?.height != null) {
      const padBottom = parseFloat(liveMetrics['padding-bottom']) || 0
      const borderBottom = parseFloat(liveMetrics['border-bottom-width']) || 0
      const contentBottomInBorder =
        liveMetrics.box.height - borderBottom - padBottom
      pushInkPx(
        'paint.canvas.vs-content.bottom',
        contentBottomInBorder,
        canvasCapInk.bottomInBorder,
      )
    }
  }
  // Same cap ink, root-relative (for overlay alignment)
  if (liveMetrics.capInk && cloneMetrics.capInk) {
    pushInkPx('paint.cap.root.top', liveMetrics.capInk.top, cloneMetrics.capInk.top)
    pushInkPx('paint.cap.root.bottom', liveMetrics.capInk.bottom, cloneMetrics.capInk.bottom)
  }
  if (liveMetrics.capInk && canvasCapInk) {
    pushInkPx('paint.canvas.root.top', liveMetrics.capInk.top, canvasCapInk.top)
  }

  // --- Legacy alias (line box) ---
  if (liveMetrics.inkRelBorder && cloneMetrics.inkRelBorder) {
    pushNum(
      'paint.range.vs-border.top',
      liveMetrics.inkRelBorder.top,
      cloneMetrics.inkRelBorder.top,
    )
  }
  if (liveMetrics.ink && cloneMetrics.ink) {
    pushNum('paint.range.root.top', liveMetrics.ink.top, cloneMetrics.ink.top)
  }

  // --- Canvas measureText · full font metrics (ascent/descent/baselines/advance) ---
  if (liveMetrics.fontBox && cloneMetrics.fontBox) {
    pushStr(
      'canvas.sample (measureText)',
      String(liveMetrics.fontBox.sample),
      String(cloneMetrics.fontBox.sample),
    )
    const lf = /** @type {Record<string, number|string>} */ (liveMetrics.fontBox)
    const cf = /** @type {Record<string, number|string>} */ (cloneMetrics.fontBox)
    for (const [key, label] of CANVAS_FONT_METRIC_ROWS) {
      const lv = lf[key]
      const cv = cf[key]
      if (typeof lv === 'number' && typeof cv === 'number') {
        pushNum(`font-metrics · ${label}`, lv, cv)
      }
    }
    pushStr(
      'advance width · full-line label (trunc)',
      liveMetrics.canvasAdvanceLabel ?? null,
      cloneMetrics.canvasAdvanceLabel ?? null,
    )
    if (
      typeof liveMetrics.advanceWidthFull === 'number' ||
      typeof cloneMetrics.advanceWidthFull === 'number'
    ) {
      pushNum(
        'advance width · full line',
        typeof liveMetrics.advanceWidthFull === 'number'
          ? liveMetrics.advanceWidthFull
          : null,
        typeof cloneMetrics.advanceWidthFull === 'number'
          ? cloneMetrics.advanceWidthFull
          : null,
      )
    }
  }

  // --- Half-leading line model + baseline heuristic ---
  if (liveMetrics.fontInk && cloneMetrics.fontInk) {
    pushNum(
      'model.line-height.px',
      liveMetrics.fontInk.lineHeightPx,
      cloneMetrics.fontInk.lineHeightPx,
    )
    pushNum(
      'model.half-leading',
      liveMetrics.fontInk.halfLeading,
      cloneMetrics.fontInk.halfLeading,
    )
    pushNum(
      'model.glyph-top.root',
      liveMetrics.fontInk.top,
      cloneMetrics.fontInk.top,
    )
    pushNum(
      'model.glyph-bottom.root',
      liveMetrics.fontInk.bottom,
      cloneMetrics.fontInk.bottom,
    )
    pushNum(
      'model.top-in-border',
      liveMetrics.fontInk.topInBox,
      cloneMetrics.fontInk.topInBox,
    )
    pushNum(
      'model.baseline~.vs-border',
      liveMetrics.fontInk.baselineApproxFromBorderTop,
      cloneMetrics.fontInk.baselineApproxFromBorderTop,
    )
    pushNum(
      'model.baseline~.root',
      liveMetrics.fontInk.baselineApproxRoot,
      cloneMetrics.fontInk.baselineApproxRoot,
    )
    pushNum(
      'model.content-top.root',
      liveMetrics.fontInk.contentTop,
      cloneMetrics.fontInk.contentTop,
    )
  }

  // Keep the raw computed line-height string visible: it catches “normal vs px” drift even
  // when other derived metrics look close.
  rows.push({
    prop: 'line-height (computed string)',
    live: liveMetrics['line-height'] ?? null,
    clone: cloneMetrics['line-height'] ?? null,
    delta: null,
  })
  if (liveMetrics.fontInk) {
    pushNum(
      'line-height.used.px (model)',
      liveMetrics.fontInk.lineHeightPx,
      cloneMetrics.fontInk?.lineHeightPx ?? null,
    )
    pushNum(
      'line-height.half-leading',
      liveMetrics.fontInk.halfLeading,
      cloneMetrics.fontInk?.halfLeading ?? null,
    )
  }

  for (const p of [
    'border-top-width',
    'border-bottom-width',
    'padding-top',
    'padding-bottom',
    'margin-top',
    'margin-bottom',
    'font-size',
    'font-weight',
    'font-style',
    'text-rendering',
    'letter-spacing',
    'font-family',
    'font-kerning',
  ]) {
    pushStr(p, liveMetrics[p] ?? null, cloneMetrics[p] ?? null)
  }

  if (siblingGap) {
    pushNum('span-input', siblingGap.live, siblingGap.clone)
  }

  return rows
}

/**
 * Global raster / capture context rows (shown once at top of report).
 * @param {{ canvas?: HTMLCanvasElement|null, dpr?: number, scale?: number, strategyId?: string, captureMeta?: object|null }} opts
 */
function buildRasterContextRows(opts = {}) {
  const { canvas = null, dpr = 1, scale = 1, strategyId = null, captureMeta = null } = opts
  const meta = readCanvasRasterMeta(canvas)
  const rows = []

  const pushStr = (prop, val) => {
    rows.push({ prop, live: val, clone: null, delta: null })
  }
  const pushNum = (prop, live, clone = null) => {
    rows.push({
      prop,
      live: live ?? null,
      clone,
      delta: live != null && clone != null ? clone - live : null,
    })
  }

  pushStr('raster.path', describeRasterPath(meta, { dpr }))
  if (strategyId) pushStr('raster.strategyId', strategyId)
  if (meta?.rasterizedAt) pushStr('raster.timestamp', meta.rasterizedAt)
  pushNum('capture.dpr', dpr)
  pushNum('capture.scale', scale)
  if (captureMeta?.targetW != null) pushNum('meta.targetW', captureMeta.targetW)
  if (captureMeta?.targetH != null) pushNum('meta.targetH', captureMeta.targetH)
  if (meta) {
    pushNum('canvas.backing.width', meta.deviceW)
    pushNum('canvas.backing.height', meta.deviceH)
    pushNum('canvas.css.width', meta.cssW)
    pushNum('canvas.css.height', meta.cssH)
    pushNum('canvas.natural.width', meta.imgNaturalWidth)
    pushNum('canvas.natural.height', meta.imgNaturalHeight)
    if (meta.stage1W != null) pushNum('raster.stage1.width', meta.stage1W)
    if (meta.stage1H != null) pushNum('raster.stage1.height', meta.stage1H)
    pushStr('raster.drawMode', meta.drawMode)
    pushStr('raster.twoStageDevice', meta.twoStageDevice ? 'yes' : 'no')
    pushStr('raster.hiDpiSvgRoot', meta.useHiDpiSvgRoot ? 'yes' : 'no')
    if (meta.rasterStrategy) pushStr('raster.strategy tokens', meta.rasterStrategy)
  } else if (canvas) {
    pushNum('canvas.backing.width', canvas.width)
    pushNum('canvas.backing.height', canvas.height)
  }

  return rows
}

/**
 * @param {ReturnType<typeof collectFlexLayoutDebug>|null} liveDbg
 * @param {ReturnType<typeof collectFlexLayoutDebug>|null} cloneDbg
 */
function buildFlexDebugRows(liveDbg, cloneDbg) {
  if (!liveDbg || !cloneDbg) return []

  /** @type {{ prop: string, live: string|number|null, clone: string|number|null, delta: number|null }[]} */
  const rows = []
  const pushStr = (prop, live, clone) => {
    rows.push({ prop, live: live ?? null, clone: clone ?? null, delta: null })
  }
  const pushNum = (prop, live, clone) => {
    rows.push({
      prop,
      live: live ?? null,
      clone: clone ?? null,
      delta: live != null && clone != null ? clone - live : null,
    })
  }
  const pushBool = (prop, live, clone) => {
    pushStr(prop, live ? 'yes' : 'no', clone ? 'yes' : 'no')
  }

  const maxLen = Math.max(liveDbg.chain.length, cloneDbg.chain.length)
  for (let i = 0; i < maxLen; i++) {
    const L = liveDbg.chain[i]
    const C = cloneDbg.chain[i]
    const p = `flex[${i}]`
    if (!L && !C) continue
    pushStr(`${p}.tag`, L?.tag ?? null, C?.tag ?? null)
    pushStr(`${p}.display`, L?.display ?? null, C?.display ?? null)
    if (L?.flexDirection || C?.flexDirection) {
      pushStr(`${p}.flex-direction`, L?.flexDirection ?? null, C?.flexDirection ?? null)
      pushStr(`${p}.align-items`, L?.alignItems ?? null, C?.alignItems ?? null)
      pushStr(`${p}.justify-content`, L?.justifyContent ?? null, C?.justifyContent ?? null)
      pushStr(`${p}.gap`, L?.gap ?? null, C?.gap ?? null)
    }
    if (L?.flexItem || C?.flexItem) {
      pushStr(`${p}.parent.display`, L?.parentDisplay ?? null, C?.parentDisplay ?? null)
      pushStr(
        `${p}.parent.align-items`,
        L?.parentAlignItems ?? null,
        C?.parentAlignItems ?? null,
      )
      pushStr(`${p}.align-self`, L?.alignSelf ?? null, C?.alignSelf ?? null)
      pushStr(
        `${p}.effective-cross-align`,
        L?.effectiveCrossAlign ?? null,
        C?.effectiveCrossAlign ?? null,
      )
      pushBool(`${p}.cross-stretch-item`, !!L?.crossStretchItem, !!C?.crossStretchItem)
    }
    pushNum(`${p}.line-height.px`, L?.lineHeightPx ?? null, C?.lineHeightPx ?? null)
    pushNum(`${p}.layout-line-box.px`, L?.layoutLineBoxPx ?? null, C?.layoutLineBoxPx ?? null)
    pushNum(`${p}.border-box.height`, L?.borderBoxH ?? null, C?.borderBoxH ?? null)
  }

  const ls = liveDbg.summary
  const cs = cloneDbg.summary
  pushBool('flex.summary.cross-stretch-item', ls.crossStretchItem, cs.crossStretchItem)
  pushStr(
    'flex.summary.effective-cross-align',
    ls.effectiveCrossAlign,
    cs.effectiveCrossAlign,
  )
  pushNum('flex.summary.line-height.px', ls.lineHeightPx, cs.lineHeightPx)
  pushNum('flex.summary.layout-line-box.px', ls.layoutLineBoxPx, cs.layoutLineBoxPx)
  pushNum('flex.summary.border-box.height', ls.borderBoxH, cs.borderBoxH)
  pushNum('flex.summary.content.height', ls.contentH, cs.contentH)
  pushNum(
    'flex.summary.border-box − line-box',
    ls.borderBoxMinusLinePx,
    cs.borderBoxMinusLinePx,
  )
  pushNum('flex.summary.half-leading', ls.halfLeading, cs.halfLeading)
  pushNum('flex.summary.ink.vs-border.top', ls.inkVsBorderTop, cs.inkVsBorderTop)
  pushNum('flex.summary.cap.vs-border.top', ls.capVsBorderTop, cs.capVsBorderTop)

  return rows
}

/**
 * @param {object|null} liveMetrics
 * @param {object|null} cloneMetrics
 * @param {{ live: string, clone: string }|null|undefined} usedHeight
 */
function buildInputStructureRows(liveMetrics, cloneMetrics, usedHeight) {
  if (!liveMetrics || !cloneMetrics) return []

  /** @type {{ prop: string, live: string|number|null, clone: string|number|null, delta: number|null }[]} */
  const rows = []

  const pushNum = (prop, live, clone) => {
    rows.push({
      prop,
      live: live ?? null,
      clone: clone ?? null,
      delta: live != null && clone != null ? clone - live : null,
    })
  }

  pushNum('box.top', liveMetrics.box.top, cloneMetrics.box.top)
  pushNum('box.bottom', liveMetrics.box.bottom, cloneMetrics.box.bottom)
  pushNum('box.height', liveMetrics.box.height, cloneMetrics.box.height)
  pushNum('box.width', liveMetrics.box.width, cloneMetrics.box.width)
  pushNum('box.left', liveMetrics.box.left, cloneMetrics.box.left)
  if (usedHeight) {
    const liveH = parseFloat(usedHeight.live)
    const cloneH = parseFloat(usedHeight.clone)
    rows.push({
      prop: 'height',
      live: usedHeight.live,
      clone: usedHeight.clone,
      delta: Number.isFinite(liveH) && Number.isFinite(cloneH) ? cloneH - liveH : null,
    })
  }

  return rows
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {{
 *   canvas?: HTMLCanvasElement|null,
 *   dpr?: number,
 *   scale?: number,
 *   strategyId?: string,
 *   captureMeta?: object|null,
 * }} [opts]
 */
export function buildCheckoutStructureReport(root, svgMarkup, opts = {}) {
  if (!svgMarkup) {
    return { sections: [], tolerance: STRUCTURE_EXACT_TOLERANCE, meta: null }
  }

  const {
    canvas = null,
    dpr = 1,
    scale = 1,
    strategyId = null,
    captureMeta = null,
  } = opts
  const { sections: raw, tolerance } = compareCheckoutStructure(
    root,
    svgMarkup,
    STRUCTURE_EXACT_TOLERANCE,
  )

  const contextRows = buildRasterContextRows({
    canvas,
    dpr,
    scale,
    strategyId,
    captureMeta,
  })

  const sections = raw.map((sec) => {
    let canvasCapInk = null
    if (canvas && sec.kind === 'text' && sec.liveEl) {
      try {
        canvasCapInk = measureCanvasInkForElement(canvas, root, sec.liveEl, dpr)
      } catch (e) {
        if (e?.name !== 'SecurityError') throw e
      }
    }
    const textRows =
      sec.kind === 'input'
        ? buildInputStructureRows(sec.liveMetrics, sec.cloneMetrics, sec.usedHeight)
        : buildTextStructureRows(
            sec.liveMetrics,
            sec.cloneMetrics,
            sec.siblingGap,
            canvasCapInk,
          )
    const flexRows =
      sec.kind === 'text'
        ? buildFlexDebugRows(sec.liveFlexDebug ?? null, sec.cloneFlexDebug ?? null)
        : []
    return {
      title: sec.title,
      rows: [...textRows, ...flexRows],
    }
  })

  if (contextRows.length) {
    sections.unshift({ title: 'Raster / capture context', rows: contextRows })
  }

  const meta = readCanvasRasterMeta(canvas)
  return {
    sections,
    tolerance,
    meta: {
      strategyId,
      rasterPath: describeRasterPath(meta, { dpr }),
      rasterizedAt: meta?.rasterizedAt ?? null,
      dpr,
      scale,
    },
  }
}

/** @deprecated */
export function buildSvgStructureReport(root, svgMarkup) {
  const report = buildCheckoutStructureReport(root, svgMarkup)
  const email = report.sections.find((s) => s.title.includes('Email Address'))
  return { rows: email?.rows ?? [], tolerance: report.tolerance, svg: null }
}

/** Rows that indicate real vertical paint/layout drift (not cosmetic CSS string diffs). */
function isPaintDriftMetric(prop) {
  if (prop === 'paint.cap.vs-border.top') return true
  if (prop === 'paint.cap.root.top') return true
  if (prop === 'paint.canvas.vs-border.top') return true
  if (prop === 'paint.canvas.vs-padding.top') return true
  if (prop === 'paint.canvas.vs-content.top') return true
  if (prop === 'paint.canvas.root.top') return true
  if (prop === 'span-input') return true
  return false
}

/** Informational rows (line box, derived model, legacy aliases). */
function isInfoMetric(prop) {
  if (prop.startsWith('paint.line-box.')) return true
  if (prop.startsWith('paint.range.')) return true
  if (prop.startsWith('model.')) return true
  if (prop === 'line-height (computed string)') return true
  if (prop.startsWith('flex[') || prop.startsWith('flex.summary.')) return true
  if (prop.startsWith('raster.') && !prop.includes('path')) return true
  if (prop.startsWith('line-height.')) return true
  if (prop.startsWith('canvas.') || prop.startsWith('meta.') || prop.startsWith('capture.')) {
    return true
  }
  return false
}

/**
 * @param {{ sections: { title: string, rows: object[] }[], tolerance: number }} report
 */
export function renderCheckoutStructureHtml(report) {
  const { sections, tolerance } = report
  const numericEps = tolerance <= 0 ? LENGTH_EQ_EPS : tolerance
  const fmtVal = (v) => {
    if (v == null) return '—'
    if (typeof v === 'number') return Number(v).toFixed(2)
    return String(v)
  }
  const fmtDelta = (d) => {
    if (d == null || Number.isNaN(d)) return '—'
    const sign = d > 0 ? '+' : ''
    return `${sign}${d.toFixed(2)}px`
  }

  let paintDriftCount = 0
  let body = ''

  for (const sec of sections) {
    let tbody = ''
    for (const r of sec.rows) {
      const numericWarn =
        isPaintDriftMetric(r.prop) &&
        typeof r.delta === 'number' &&
        Number.isFinite(r.delta) &&
        Math.abs(r.delta) > numericEps
      if (numericWarn) paintDriftCount++
      const rowClass = numericWarn
        ? 'warn'
        : isInfoMetric(r.prop)
          ? 'info'
          : ''
      tbody += `<tr${rowClass ? ` class="${rowClass}"` : ''}>
        <td>${r.prop}</td>
        <td>${fmtVal(r.live)}</td>
        <td>${fmtVal(r.clone)}</td>
        <td>${fmtDelta(r.delta)}</td>
      </tr>`
    }
    body += `
    <section class="structure-section">
      <h3>${sec.title}</h3>
      <table class="structure-table">
        <thead><tr><th>Metric</th><th>Live</th><th>Compare</th><th>Δ</th></tr></thead>
        <tbody>${tbody}</tbody>
      </table>
    </section>`
  }

  if (!sections.length) {
    body = '<p class="structure-empty">Run Capture to compare live DOM vs SVG clone.</p>'
  }

  const summary =
    sections.length === 0
      ? ''
      : paintDriftCount === 0
        ? '<p class="structure-summary is-ok">No paint drift — <strong>paint.cap.*</strong> and <strong>paint.canvas.*</strong> match exactly.</p>'
        : `<p class="structure-summary is-warn">${paintDriftCount} paint-drift metric${paintDriftCount === 1 ? '' : 's'} (see <strong>paint.cap.*</strong> / <strong>paint.canvas.*</strong> rows).</p>`

  return `
  <div class="structure-report">
    <h2>Live DOM vs SVG clone (structure)</h2>
    <p class="structure-summary">Trust <strong>paint.cap.*</strong> (live vs <strong>SVG clone</strong>) and <strong>paint.canvas.*</strong> (live cap vs <strong>canvas raster</strong> — middle column is not the SVG clone). <strong>paint.range.*</strong> is informational.</p>
    ${summary}
    ${body}
  </div>`
}

/** @deprecated */
export function renderSvgStructureHtml(report) {
  return renderCheckoutStructureHtml(
    report.sections
      ? report
      : {
          sections: [{ title: 'Email Address (label)', rows: report.rows ?? [] }],
          tolerance: report.tolerance ?? STRUCTURE_EXACT_TOLERANCE,
        },
  )
}

export { buildLandmarkMetricsBundle, compactLandmarkRow } from './raster-debug-metrics.js'

/**
 * @param {HTMLElement} host
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {Parameters<typeof buildCheckoutStructureReport>[2]} [opts]
 */
export function renderCheckoutStructureReport(host, root, svgMarkup, opts = {}) {
  if (!host) return
  host.innerHTML = renderCheckoutStructureHtml(buildCheckoutStructureReport(root, svgMarkup, opts))
}

/** @deprecated */
export function renderSvgStructureReport(host, root, svgMarkup, opts = {}) {
  renderCheckoutStructureReport(host, root, svgMarkup, opts)
}
