import {
  collectTextFlowMetrics,
  compareEmailFieldMetrics,
  measureTextInk,
  parseClassRules,
} from '../__tests__/helpers/svgLiveCompare.js'
import { measureLayoutLineBoxPx, usesNormalLineHeight } from '../src/utils/preciseLineHeight.js'

/** Fresh vs stored canvas ink-top must match exactly (device px). */
const CANVAS_INK_TOP_MATCH_DEV_PX = 0
/** Live DOM vs SVG clone metric tolerance (CSS px). */
const SVG_METRIC_TOL_PX = 0.5

/**
 * @param {Element} root
 * @param {Element} el
 * @param {number} dpr
 */
function canvasRegionForEl(root, el, dpr) {
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
 */
export function measureCanvasTextInk(canvas, region) {
  const { x, y, w, h } = region
  const ctx = canvas.getContext('2d')
  const data = ctx.getImageData(x, y, w, h).data
  let top = null
  let bottom = null
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
      if (data[i + 3] > 32 && lum < 210) {
        if (top === null) top = row
        bottom = row
      }
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

/**
 * @param {HTMLCanvasElement} liveCanvas
 * @param {HTMLCanvasElement} capCanvas
 * @param {Element} root
 * @param {number} dpr
 */
export function compareEmailOnCanvases(liveCanvas, capCanvas, root, dpr) {
  const span = [...root.querySelectorAll('label span')].find(
    (s) => (s.textContent || '').trim() === 'Email Address',
  )
  const input = root.querySelector('input[type="email"]')
  const rows = []

  const addRow = (label, liveInk, capInk) => {
    const liveTopDev = liveInk?.relTopPx ?? null
    const capTopDev = capInk?.relTopPx ?? null
    const deltaTopDev =
      liveTopDev != null && capTopDev != null ? capTopDev - liveTopDev : null
    const liveHDev = liveInk?.heightPx ?? null
    const capHDev = capInk?.heightPx ?? null
    const deltaHeightDev =
      liveHDev != null && capHDev != null ? capHDev - liveHDev : null
    rows.push({
      label,
      liveTop: liveTopDev != null ? liveTopDev / dpr : null,
      capTop: capTopDev != null ? capTopDev / dpr : null,
      deltaTop: deltaTopDev != null ? deltaTopDev / dpr : null,
      deltaTopDev,
      liveHeight: liveHDev != null ? liveHDev / dpr : null,
      capHeight: capHDev != null ? capHDev / dpr : null,
      deltaHeight: deltaHeightDev != null ? deltaHeightDev / dpr : null,
      deltaHeightDev,
    })
  }

  if (span) {
    const reg = canvasRegionForEl(root, span, dpr)
    addRow(
      '“Email Address” label (pixels)',
      measureCanvasTextInk(liveCanvas, reg),
      measureCanvasTextInk(capCanvas, reg),
    )
  }

  if (input) {
    const reg = canvasRegionForEl(root, input, dpr)
    addRow(
      'Email input / placeholder (pixels)',
      measureCanvasTextInk(liveCanvas, reg),
      measureCanvasTextInk(capCanvas, reg),
    )
  }

  return { rows, span, input }
}

/**
 * What the stage toggle measures: live DOM text ink vs ink read from the SnapDOM canvas.
 * @param {Element} root
 * @param {HTMLCanvasElement} capCanvas
 * @param {number} dpr
 */
export function compareToggleInkToCanvas(root, capCanvas, dpr) {
  const rows = []

  const add = (label, el) => {
    if (!el) return
    const domInk = measureTextInk(el, root)
    const reg = canvasRegionForEl(root, el, dpr)
    const capInk = measureCanvasTextInk(capCanvas, reg)
    if (!domInk || !capInk) return
    const canvasTopCss = (reg.y + capInk.relTopPx) / dpr
    const deltaCss = canvasTopCss - domInk.top
    const domTopDev = Math.round(domInk.top * dpr)
    const capTopDev = reg.y + capInk.relTopPx
    const deltaDev = capTopDev - domTopDev
    rows.push({
      label,
      domTop: domInk.top,
      canvasTop: canvasTopCss,
      deltaTop: deltaCss,
      deltaTopDev: deltaDev,
      domTopDev,
      capTopDev,
    })
  }

  const span = [...root.querySelectorAll('label span')].find(
    (s) => (s.textContent || '').trim() === 'Email Address',
  )
  const input = root.querySelector('input[type="email"]')
  add('“Email Address” label (toggle)', span)
  add('Email input / placeholder (toggle)', input)
  return { rows, span, input }
}

/**
 * @param {Element} root
 * @param {string} svgMarkup
 */
export function analyzeEmailSvgMetrics(root, svgMarkup) {
  const { metricDiffs, liveMetrics, cloneMetrics } = compareEmailFieldMetrics(
    root,
    svgMarkup,
    'Email Address',
    SVG_METRIC_TOL_PX,
  )
  const styleMatch = svgMarkup.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
  const classMap = parseClassRules(styleMatch?.[1] ?? '')
  const span = [...root.querySelectorAll('label span')].find(
    (s) => (s.textContent || '').trim() === 'Email Address',
  )
  let snapClass = null
  let snapLh = null
  if (span && svgMarkup) {
    const m = [...svgMarkup.matchAll(/<span[^>]*class="([^"]+)"[^>]*>\s*Email/gi)][0]
    snapClass = m?.[1]?.split(/\s+/).find((c) => /^c\d+$/.test(c)) ?? null
    if (snapClass) snapLh = classMap.get(snapClass)?.['line-height'] ?? null
  }

  const spanCs = span ? getComputedStyle(span) : null
  const layoutBox = spanCs ? measureLayoutLineBoxPx(spanCs, span) : null
  const input = root.querySelector('input[type="email"]')
  const inputCs = input ? getComputedStyle(input) : null
  let phColor = null
  try {
    phColor = input && getComputedStyle(input, '::placeholder').color
  } catch { /* ignore */ }

  return {
    metricDiffs,
    liveMetrics,
    cloneMetrics,
    snapClass,
    snapLh,
    liveLh: spanCs?.lineHeight ?? null,
    liveLhNormal: spanCs ? usesNormalLineHeight(spanCs, span) : false,
    layoutBoxPx: layoutBox,
    inputHeight: inputCs?.height ?? null,
    placeholderColor: phColor,
  }
}

/**
 * @param {object} opts
 * @param {Element} opts.root
 * @param {number} opts.dpr
 * @param {HTMLCanvasElement} opts.liveCanvas
 * @param {HTMLCanvasElement} opts.capCanvas
 * @param {string|null} [opts.svgMarkup]
 */
export function buildEmailCompareReport(opts) {
  const { root, dpr, liveCanvas, capCanvas, svgMarkup = null } = opts
  const canvas = compareEmailOnCanvases(liveCanvas, capCanvas, root, dpr)
  const toggle = compareToggleInkToCanvas(root, capCanvas, dpr)
  const svg = svgMarkup ? analyzeEmailSvgMetrics(root, svgMarkup) : null

  const domInk = canvas.span ? measureTextInk(canvas.span, root) : null
  const domMetrics = canvas.span ? collectTextFlowMetrics(canvas.span, root) : null

  return { canvas, toggle, svg, domInk, domMetrics, dpr }
}

/**
 * @param {ReturnType<typeof buildEmailCompareReport>} report
 */
export function renderEmailCompareHtml(report) {
  const { canvas, toggle, svg, domInk, domMetrics, dpr } = report
  const fmt = (v) => (v == null ? '—' : `${Number(v).toFixed(2)}px`)
  const fmtDev = (v) => (v == null ? '—' : `${v} dev px`)
  const fmtDelta = (v) => {
    if (v == null) return '—'
    const n = Number(v)
    const sign = n > 0 ? '+' : ''
    return `${sign}${n.toFixed(2)}px`
  }

  let canvasRows = ''
  for (const r of canvas.rows) {
    const warn =
      r.deltaTopDev != null && r.deltaTopDev !== CANVAS_INK_TOP_MATCH_DEV_PX ? ' class="warn"' : ''
    canvasRows += `<tr${warn}>
      <td>${r.label}</td>
      <td>${fmt(r.liveTop)} <span style="color:#888;font-weight:400">(${fmtDev(r.liveTop != null ? Math.round(r.liveTop * dpr) : null)})</span></td>
      <td>${fmt(r.capTop)} <span style="color:#888;font-weight:400">(${fmtDev(r.capTop != null ? Math.round(r.capTop * dpr) : null)})</span></td>
      <td>${fmtDelta(r.deltaTop)} <span style="color:#888;font-weight:400">(${fmtDev(r.deltaTopDev)})</span></td>
      <td>${fmt(r.liveHeight)}</td>
      <td>${fmt(r.capHeight)}</td>
      <td>${fmtDelta(r.deltaHeight)}</td>
    </tr>`
  }

  let toggleRows = ''
  for (const r of toggle.rows) {
    const warn =
      r.deltaTopDev != null && r.deltaTopDev !== CANVAS_INK_TOP_MATCH_DEV_PX ? ' class="warn"' : ''
    toggleRows += `<tr${warn}>
      <td>${r.label}</td>
      <td>${fmt(r.domTop)} (${fmtDev(r.domTopDev)})</td>
      <td>${fmt(r.canvasTop)} (${fmtDev(r.capTopDev)})</td>
      <td>${fmtDelta(r.deltaTop)} (${fmtDev(r.deltaTopDev)})</td>
    </tr>`
  }

  let svgRows = ''
  if (svg?.metricDiffs?.length) {
    for (const d of svg.metricDiffs) {
      svgRows += `<tr class="warn">
        <td>${d.prop}</td>
        <td>${typeof d.live === 'number' ? d.live.toFixed(2) : d.live}</td>
        <td>${typeof d.clone === 'number' ? d.clone.toFixed(2) : d.clone}</td>
        <td>${typeof d.delta === 'number' ? fmtDelta(d.delta) : '—'}</td>
      </tr>`
    }
  } else {
    svgRows = `<tr><td colspan="4">No SVG metric diffs &gt; ${SVG_METRIC_TOL_PX}px (layout/ink match)</td></tr>`
  }

  const why = []
  if (svg) {
    if (svg.liveLhNormal && svg.snapLh) {
      why.push(
        `Live uses <code>line-height: normal</code> (layout box ≈ ${fmt(svg.layoutBoxPx)}); capture pins <code>${svg.snapLh}</code> on <code>.${svg.snapClass || '?'}</code>.`,
      )
    }
    if (svg.placeholderColor) {
      why.push(`Placeholder color in live: <code>${svg.placeholderColor}</code>.`)
    }
    if (svg.inputHeight) {
      why.push(`Live input used height: <code>${svg.inputHeight}</code>.`)
    }
  }
  if (domInk && domMetrics?.ink) {
    why.push(
      `Live DOM ink: top ${fmt(domInk.top)} · height ${fmt(domInk.height)} · computed line-height <code>${domMetrics['line-height'] || domMetrics.lineHeight || '?'}</code>.`,
    )
  }
  const tabLabel = canvas.rows.find((r) => r.label.includes('label'))
  const toggleLabel = toggle.rows.find((r) => r.label.includes('label'))
  if (tabLabel?.deltaTopDev === CANVAS_INK_TOP_MATCH_DEV_PX && toggleLabel?.deltaTopDev !== CANVAS_INK_TOP_MATCH_DEV_PX) {
    why.push(
      `<strong>Why label 0px in tab diff but you see ~${Math.abs(toggleLabel.deltaTopDev)}px on toggle:</strong> the first table compares <em>tab screenshot vs canvas</em> (same dark-pixel row). Toggle uses <em>DOM text bounds vs canvas</em> — different rulers; trust the <strong>toggle table</strong> for what Space/show canvas shows.`,
    )
  }
  if (toggleLabel?.deltaTopDev != null && toggleLabel.deltaTopDev !== CANVAS_INK_TOP_MATCH_DEV_PX) {
    why.push(
      `<strong>Toggle:</strong> label ink ${fmtDev(toggleLabel.deltaTopDev)} (${fmtDelta(toggleLabel.deltaTop)} CSS) — SnapDOM canvas vs live DOM.`,
    )
  }
  const tabInput = canvas.rows.find((r) => r.label.includes('input'))
  if (tabInput?.deltaTopDev) {
    why.push(
      `<strong>Input +${tabInput.deltaTopDev} dev px:</strong> placeholder text often shifts 1px between tab raster and SnapDOM (color/weight), even when the label matches.`,
    )
  }

  return `
  <section class="email-compare-panel">
    <h3>Email Address — vertical alignment</h3>
    <p class="email-compare-note">
      <strong>Toggle table</strong> = live DOM vs SnapDOM canvas (green/red guides).
      <strong>Tab diff table</strong> = tab screenshot vs canvas — can disagree with toggle; label may be 0px here while toggle shows ~1px.
    </p>
    <h4>Toggle (live DOM vs SnapDOM canvas)</h4>
    <table class="email-compare-table">
      <thead>
        <tr>
          <th>Region</th>
          <th>DOM ink top</th>
          <th>Canvas ink top</th>
          <th>Δ top</th>
        </tr>
      </thead>
      <tbody>${toggleRows}</tbody>
    </table>
    <h4>Tab screenshot vs SnapDOM canvas</h4>
    <table class="email-compare-table">
      <thead>
        <tr>
          <th>Region</th>
          <th>Tab ink top</th>
          <th>SnapDOM ink top</th>
          <th>Δ top</th>
          <th>Tab ink h</th>
          <th>SnapDOM ink h</th>
          <th>Δ h</th>
        </tr>
      </thead>
      <tbody>${canvasRows}</tbody>
    </table>
    <h4>Live DOM vs SVG clone (structure)</h4>
    <table class="email-compare-table">
      <thead><tr><th>Metric</th><th>Live</th><th>SVG clone</th><th>Δ</th></tr></thead>
      <tbody>${svgRows}</tbody>
    </table>
    ${why.length ? `<ul class="email-compare-why">${why.map((w) => `<li>${w}</li>`).join('')}</ul>` : ''}
  </section>`
}

/**
 * @param {HTMLElement} host
 * @param {HTMLCanvasElement} liveCanvas
 * @param {HTMLCanvasElement} capCanvas
 * @param {Element} root
 * @param {number} dpr
 */
export function renderEmailCropCanvases(host, liveCanvas, capCanvas, root, dpr) {
  host.innerHTML = ''
  const span = [...root.querySelectorAll('label span')].find(
    (s) => (s.textContent || '').trim() === 'Email Address',
  )
  if (!span) return

  const pad = Math.round(4 * dpr)
  const reg = canvasRegionForEl(root, span, dpr)
  const w = reg.w + pad * 2
  const h = reg.h + pad * 2

  const wrap = document.createElement('div')
  wrap.className = 'email-crop-grid'

  for (const [label, src] of [
    ['Live tab crop', liveCanvas],
    ['SnapDOM crop', capCanvas],
  ]) {
    const fig = document.createElement('figure')
    const cap = document.createElement('figcaption')
    cap.textContent = label
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, w, h)
    ctx.drawImage(src, reg.x - pad, reg.y - pad, w, h, 0, 0, w, h)
    c.style.width = `${w / dpr}px`
    c.style.height = `${h / dpr}px`
    fig.appendChild(cap)
    fig.appendChild(c)
    wrap.appendChild(fig)
  }
  host.appendChild(wrap)
}
