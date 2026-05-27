import { compareCheckoutStructure, LENGTH_EQ_EPS } from '../__tests__/helpers/svgLiveCompare.js'

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
 */
function buildTextStructureRows(liveMetrics, cloneMetrics, siblingGap) {
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

  const pushStr = (prop, live, clone) => {
    rows.push({ prop, live: live ?? null, clone: clone ?? null, delta: null })
  }

  // --- Layout boxes (capture root coords) ---
  pushNum('box.top', liveMetrics.box.top, cloneMetrics.box.top)
  pushNum('box.bottom', liveMetrics.box.bottom, cloneMetrics.box.bottom)
  pushNum('box.height', liveMetrics.box.height, cloneMetrics.box.height)

  // --- Painted glyphs: Range rects vs element border-box top ---
  if (liveMetrics.inkRelBorder && cloneMetrics.inkRelBorder) {
    pushNum(
      'paint.range.vs-border.top',
      liveMetrics.inkRelBorder.top,
      cloneMetrics.inkRelBorder.top,
    )
    pushNum(
      'paint.range.vs-border.bottom',
      liveMetrics.inkRelBorder.bottom,
      cloneMetrics.inkRelBorder.bottom,
    )
    pushNum(
      'paint.range.vs-border.height',
      liveMetrics.inkRelBorder.height,
      cloneMetrics.inkRelBorder.height,
    )
  }
  // Same ink, root-relative (for overlay alignment)
  if (liveMetrics.ink && cloneMetrics.ink) {
    pushNum('paint.range.root.top', liveMetrics.ink.top, cloneMetrics.ink.top)
    pushNum('paint.range.root.bottom', liveMetrics.ink.bottom, cloneMetrics.ink.bottom)
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

  rows.push({
    prop: 'line-height (computed string)',
    live: liveMetrics['line-height'] ?? null,
    clone: cloneMetrics['line-height'] ?? null,
    delta: null,
  })

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
 */
export function buildCheckoutStructureReport(root, svgMarkup) {
  if (!svgMarkup) {
    return { sections: [], tolerance: STRUCTURE_EXACT_TOLERANCE }
  }

  const { sections: raw, tolerance } = compareCheckoutStructure(
    root,
    svgMarkup,
    STRUCTURE_EXACT_TOLERANCE,
  )

  const sections = raw.map((sec) => ({
    title: sec.title,
    rows:
      sec.kind === 'input'
        ? buildInputStructureRows(sec.liveMetrics, sec.cloneMetrics, sec.usedHeight)
        : buildTextStructureRows(sec.liveMetrics, sec.cloneMetrics, sec.siblingGap),
  }))

  return { sections, tolerance }
}

/** @deprecated */
export function buildSvgStructureReport(root, svgMarkup) {
  const report = buildCheckoutStructureReport(root, svgMarkup)
  const email = report.sections.find((s) => s.title.includes('Email Address'))
  return { rows: email?.rows ?? [], tolerance: report.tolerance, svg: null }
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

  let warnCount = 0
  let body = ''

  for (const sec of sections) {
    let tbody = ''
    for (const r of sec.rows) {
      const numericWarn =
        typeof r.delta === 'number' &&
        Number.isFinite(r.delta) &&
        Math.abs(r.delta) > numericEps
      const stringWarn =
        (r.prop === 'line-height (computed string)' || r.prop === 'line-height') &&
        r.live !== r.clone
      const warn = numericWarn || stringWarn
      if (warn) warnCount++
      tbody += `<tr${warn ? ' class="warn"' : ''}>
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
        <thead><tr><th>Metric</th><th>Live</th><th>SVG clone</th><th>Δ</th></tr></thead>
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
      : warnCount === 0
        ? '<p class="structure-summary is-ok">All numeric metrics match exactly (IEEE float jitter only, ε = 10⁻⁶ px).</p>'
        : `<p class="structure-summary is-warn">${warnCount} metric${warnCount === 1 ? '' : 's'} differ beyond float-safe equality.</p>`

  return `
  <div class="structure-report">
    <h2>Live DOM vs SVG clone (structure)</h2>
    <p class="structure-summary"><strong>paint.range.*</strong> = Range client rects. <strong>font-metrics · …</strong> = Canvas <code>measureText</code> (ascent, descent, baselines, glyph bbox, advance). <strong>model.*</strong> = half-leading alignment. <strong>advance width · full line</strong> = layout width of the full label text.</p>
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

/**
 * @param {HTMLElement} host
 * @param {Element} root
 * @param {string|null} svgMarkup
 */
export function renderCheckoutStructureReport(host, root, svgMarkup) {
  if (!host) return
  host.innerHTML = renderCheckoutStructureHtml(buildCheckoutStructureReport(root, svgMarkup))
}

/** @deprecated */
export function renderSvgStructureReport(host, root, svgMarkup) {
  renderCheckoutStructureReport(host, root, svgMarkup)
}

/**
 * @param {Element} root
 * @param {Element} el
 * @param {number} dpr
 */
export function canvasRegionForEl(root, el, dpr) {
  const rootRect = root.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  return {
    x: Math.max(0, Math.floor((r.left - rootRect.left) * dpr)),
    y: Math.max(0, Math.floor((r.top - rootRect.top) * dpr)),
    w: Math.max(1, Math.ceil(r.width * dpr)),
    h: Math.max(1, Math.ceil(r.height * dpr)),
  }
}

/**
 * Dark-pixel ink band inside a canvas region (device pixels).
 * @param {HTMLCanvasElement} canvas
 * @param {{ x: number, y: number, w: number, h: number }} region
 * @param {{ glyph?: boolean, minRowCoverage?: number, lumMax?: number }} [opts]
 */
export function measureCanvasTextInk(canvas, region, opts = {}) {
  const { x, y, w, h } = region
  const minRowCoverage = opts.minRowCoverage ?? (opts.glyph !== false ? 0.06 : 0)
  const lumMax = opts.lumMax ?? 235
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const data = ctx.getImageData(x, y, w, h).data
  let top = null
  let bottom = null
  for (let row = 0; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
      if (data[i + 3] > 32 && lum < lumMax) dark++
    }
    if (w > 0 && dark / w >= minRowCoverage) {
      if (top === null) top = row
      bottom = row
    }
  }
  if (top === null) return null
  return {
    topPx: y + top,
    bottomPx: y + bottom + 1,
    heightPx: bottom - top + 1,
    relTopPx: top,
    relBottomPx: bottom + 1,
  }
}
