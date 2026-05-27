import {
  compareCheckoutStructure,
  LENGTH_EQ_EPS,
  measureCanvasInkForElement,
} from '../__tests__/helpers/svgLiveCompare.js'

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
      'paint.canvas.vs-border.height',
      liveMetrics.capInkRelBorder.height,
      canvasCapInk.height ?? null,
    )
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
 * @param {{ canvas?: HTMLCanvasElement|null, dpr?: number }} [opts]
 */
export function buildCheckoutStructureReport(root, svgMarkup, opts = {}) {
  if (!svgMarkup) {
    return { sections: [], tolerance: STRUCTURE_EXACT_TOLERANCE }
  }

  const { canvas = null, dpr = 1 } = opts
  const { sections: raw, tolerance } = compareCheckoutStructure(
    root,
    svgMarkup,
    STRUCTURE_EXACT_TOLERANCE,
  )

  const sections = raw.map((sec) => {
    let canvasCapInk = null
    if (canvas && sec.kind === 'text' && sec.liveEl) {
      canvasCapInk = measureCanvasInkForElement(canvas, root, sec.liveEl, dpr)
    }
    return {
      title: sec.title,
      rows:
        sec.kind === 'input'
          ? buildInputStructureRows(sec.liveMetrics, sec.cloneMetrics, sec.usedHeight)
          : buildTextStructureRows(
              sec.liveMetrics,
              sec.cloneMetrics,
              sec.siblingGap,
              canvasCapInk,
            ),
    }
  })

  return { sections, tolerance }
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
      : paintDriftCount === 0
        ? '<p class="structure-summary is-ok">No paint drift — <strong>paint.cap.*</strong> and <strong>paint.canvas.*</strong> match exactly.</p>'
        : `<p class="structure-summary is-warn">${paintDriftCount} paint-drift metric${paintDriftCount === 1 ? '' : 's'} (see <strong>paint.cap.*</strong> / <strong>paint.canvas.*</strong> rows).</p>`

  return `
  <div class="structure-report">
    <h2>Live DOM vs SVG clone (structure)</h2>
    <p class="structure-summary">Trust <strong>paint.cap.vs-border.top</strong> (glyph cap ink) and <strong>paint.canvas.vs-border.top</strong> (live cap vs raster). <strong>paint.range.*</strong> is the line box only (informational).</p>
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
 * @param {{ canvas?: HTMLCanvasElement|null, dpr?: number }} [opts]
 */
export function renderCheckoutStructureReport(host, root, svgMarkup, opts = {}) {
  if (!host) return
  host.innerHTML = renderCheckoutStructureHtml(buildCheckoutStructureReport(root, svgMarkup, opts))
}

/** @deprecated */
export function renderSvgStructureReport(host, root, svgMarkup, opts = {}) {
  renderCheckoutStructureReport(host, root, svgMarkup, opts)
}
