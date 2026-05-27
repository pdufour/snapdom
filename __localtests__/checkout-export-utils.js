/**
 * Build downloadable SVG + side-by-side compare HTML for checkout repro.
 * @param {object} opts
 * @param {string} opts.svgMarkup - raw <svg>…</svg> string
 * @param {HTMLElement} opts.target - live capture root
 * @param {string} [opts.pageStyles] - authored CSS from the repro page
 * @param {object} [opts.meta] - capture metadata
 */
export function buildCompareHtml({ svgMarkup, target, pageStyles = '', meta = {}, visual = null }) {
  const liveHtml = target.outerHTML
  const escapedSvg = svgMarkup
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const w = meta.width ?? ''
  const h = meta.height ?? ''
  const when = meta.capturedAt ?? new Date().toISOString()
  const hasVisual = visual && visual.livePng && visual.capturePng && visual.diffPng
  const pct = hasVisual ? (visual.mismatchRatio * 100).toFixed(2) : ''

  const visualSection = hasVisual
    ? `
  <section class="visual-panel">
    <h2>Pixel diff (live screenshot vs capture canvas)</h2>
    <p class="visual-stats">
      <strong>${pct}%</strong> pixels differ
      (${visual.mismatchedPixels?.toLocaleString() ?? '?'} / ${visual.totalPixels?.toLocaleString() ?? '?'})
      ${visual.sizeMismatch ? ' · <em>images were resized to match</em>' : ''}
    </p>
    <div class="visual-grid">
      <figure>
        <figcaption>Live page</figcaption>
        <img src="${visual.livePng}" alt="Live screenshot" width="${w || ''}" />
      </figure>
      <figure>
        <figcaption>SnapDOM</figcaption>
        <img src="${visual.capturePng}" alt="SnapDOM canvas" width="${w || ''}" />
      </figure>
      <figure>
        <figcaption>Diff (red)</figcaption>
        <img src="${visual.diffPng}" alt="Visual diff heatmap" width="${w || ''}" />
      </figure>
    </div>
  </section>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Checkout capture compare</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 24px;
      font-family: -apple-system, system-ui, sans-serif;
      background: #f6f6f6; color: #111;
    }
    h1 { font-size: 20px; margin: 0 0 8px; }
    .meta { font-size: 12px; color: #666; margin-bottom: 24px; }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-items: start;
    }
    @media (max-width: 1100px) {
      .grid { grid-template-columns: 1fr; }
    }
    .panel {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      overflow: auto;
    }
    .panel h2 {
      margin: 0 0 12px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #444;
    }
    .live-host {
      width: ${w ? `${w}px` : '498px'};
      min-height: ${h ? `${h}px` : '280px'};
      background: #fff;
      border: 1px dashed #ccc;
    }
    .svg-host {
      width: ${w ? `${w}px` : 'auto'};
      max-width: 100%;
      background: #fff;
      border: 1px dashed #ccc;
    }
    .svg-host img, .svg-host object {
      display: block;
      max-width: 100%;
      height: auto;
    }
    pre.svg-source {
      margin: 12px 0 0;
      padding: 12px;
      background: #1e1e1e;
      color: #d4d4d4;
      font-size: 11px;
      line-height: 1.4;
      max-height: 320px;
      overflow: auto;
      white-space: pre-wrap;
      word-break: break-all;
      border-radius: 6px;
    }
    .visual-panel {
      margin-bottom: 24px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
    }
    .visual-panel h2 {
      margin: 0 0 8px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #444;
    }
    .visual-stats { font-size: 13px; color: #333; margin: 0 0 16px; }
    .visual-stats strong { color: #c62828; }
    .visual-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      align-items: start;
    }
    @media (max-width: 1100px) {
      .visual-grid { grid-template-columns: 1fr; }
    }
    .visual-grid figure { margin: 0; }
    .visual-grid figcaption {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 8px;
    }
    .visual-grid img {
      display: block;
      max-width: 100%;
      height: auto;
      border: 1px dashed #ccc;
      background: #fff;
    }
    /* Live panel uses same rules as repro */
    ${pageStyles}
  </style>
</head>
<body>
  <h1>Checkout — live vs SnapDOM SVG</h1>
  <p class="meta">Captured ${when}${w ? ` · ${w}×${h}px` : ''}</p>
  ${visualSection}

  <div class="grid">
    <section class="panel">
      <h2>Live DOM (reference)</h2>
      <div class="live-host" id="live-root">
        ${liveHtml}
      </div>
    </section>

    <section class="panel">
      <h2>Captured SVG (foreignObject)</h2>
      <div class="svg-host" id="svg-root"></div>
      <details>
        <summary>SVG source</summary>
        <pre class="svg-source">${escapedSvg}</pre>
      </details>
    </section>
  </div>

  <script>
    const svgMarkup = ${JSON.stringify(svgMarkup)};
    const host = document.getElementById('svg-root');
    host.innerHTML = svgMarkup;
  </script>
</body>
</html>
`
}

export function svgFromDataUrl(dataUrl) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (!dataUrl.startsWith(prefix)) return dataUrl
  return decodeURIComponent(dataUrl.slice(prefix.length))
}

export function parseSvgSize(svgMarkup) {
  const m =
    svgMarkup.match(/<svg[^>]*\bwidth="([\d.]+)"[^>]*\bheight="([\d.]+)"/i) ||
    svgMarkup.match(/<svg[^>]*\bheight="([\d.]+)"[^>]*\bwidth="([\d.]+)"/i)
  if (!m) return { width: null, height: null }
  return { width: Number(m[1]), height: Number(m[2]) }
}

export function collectPageStyles() {
  return [...document.querySelectorAll('style')]
    .map((s) => s.textContent || '')
    .filter((t) => !t.includes('compare-export'))
    .join('\n')
}

/**
 * @param {string} content
 * @param {string} filename
 * @param {string} mime
 */
export function downloadText(content, filename, mime = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.rel = 'noopener'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 500)
}
