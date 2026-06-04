/**
 * Shared boot for round-8 Chromium-only matrix variant pages (no snapdom).
 */
import {
  NAV_FO_MATRIX_VARIANTS,
  buildNavFoSvgVariant,
  navFoVariantFixtureCss,
  probeChromiumFoOnly,
} from './chromium-fo-only-shared.js'

export function applyVariantFixtureStyles(root, variant) {
  const css = navFoVariantFixtureCss(variant)
  root.style.font = css.rootFont
  const row = root.querySelector('.row')
  const link = root.querySelector('.row a')
  if (row) row.style.alignItems = css.rowAlign
  if (link) link.style.alignItems = css.linkAlign
}

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

/**
 * @param {string} variantId — key of {@link NAV_FO_MATRIX_VARIANTS}
 * @param {object} [opts]
 * @param {HTMLElement} [opts.rootEl]
 */
export function mountVariantNavFoRasterPage(variantId, opts = {}) {
  const variant = NAV_FO_MATRIX_VARIANTS[variantId]
  if (!variant) throw new Error(`unknown variant "${variantId}"`)

  const root = opts.rootEl ?? document.getElementById('fixture')
  const outCanvas = document.getElementById('canvas-out')
  const params = new URLSearchParams(location.search)
  const dpr = Math.max(0.5, Number(params.get('dpr')) || 1)
  const landmark = (params.get('landmark') || 'Home').trim()
  const autoRun = params.get('autorun') !== '0'
  const useBitmapDefault = params.get('bitmap') === '1'
  const bitmapCheck = document.getElementById('use-bitmap')
  if (bitmapCheck) bitmapCheck.checked = useBitmapDefault

  applyVariantFixtureStyles(root, variant)

  function showCanvas(canvas, cssW, cssH) {
    if (!outCanvas) return
    outCanvas.width = canvas.width
    outCanvas.height = canvas.height
    outCanvas.style.width = `${cssW}px`
    outCanvas.style.height = `${cssH}px`
    const ctx = outCanvas.getContext('2d')
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, outCanvas.width, outCanvas.height)
    ctx.drawImage(canvas, 0, 0)
  }

  async function runRaster() {
    const useBitmap = bitmapCheck?.checked ?? false
    const result = await probeChromiumFoOnly({
      root,
      landmark,
      dpr,
      buildSvg: (cssW, cssH) => buildNavFoSvgVariant(cssW, cssH, variant),
      rasterOpts: { useCreateImageBitmap: useBitmap },
    })

    const { cssW, cssH } = result.fixtureDims
    showCanvas(result.canvas, cssW, cssH)

    const t = result.threeWay
    const pathLabel = document.getElementById('path-label')
    if (pathLabel) pathLabel.textContent = `path: ${result.rasterPath}`
    const metrics = document.getElementById('metrics')
    if (metrics) {
      metrics.textContent =
        `variant: ${variantId} · ${variant.label}\n` +
        `verdict: ${result.verdict}\n` +
        `live topInBorder: ${fmt(t.livePaintedTopInBorder)}\n` +
        `svg  topInBorder: ${fmt(t.svgPaintedTopInBorder)} · svgΔ: ${fmt(t.liveVsSvgTopPx)}\n` +
        `canvas topInBorder: ${fmt(t.canvasPaintedTopInBorder)} · canvasΔ: ${fmt(t.liveVsCanvasTopPx)}\n` +
        `halfLeadingLhFs: ${fmt(result.glyphMetrics?.halfLeadingLhFsPx)} · dpr=${dpr}`
    }

    const payload = {
      pageId: `variant-${variantId}`,
      variantId,
      variant,
      landmark,
      dpr,
      fixtureDims: result.fixtureDims,
      rasterPath: result.rasterPath,
      svgBytes: result.svgBytes,
      threeWay: result.threeWay,
      verdict: result.verdict,
      bitmapOnly: result.bitmapOnly,
      glyphMetrics: result.glyphMetrics,
      canvasInkExtents: result.canvasInkExtents,
      foDeltaY: variant.foDeltaY ?? 0,
    }

    const report = document.getElementById('report')
    if (report) {
      report.hidden = false
      report.textContent = JSON.stringify(payload, null, 2)
    }
    return payload
  }

  document.getElementById('raster-btn')?.addEventListener('click', () => {
    runRaster().catch((err) => {
      const metrics = document.getElementById('metrics')
      if (metrics) metrics.textContent = `Error: ${err.message}`
    })
  })

  window.__chromiumFoOnlyProbe = {
    ready: false,
    pageId: `variant-${variantId}`,
    variantId,
    async run() {
      return runRaster()
    },
  }

  const boot = autoRun
    ? runRaster()
    : Promise.resolve({ pageId: `variant-${variantId}`, skipped: true })

  boot
    .then(() => {
      window.__chromiumFoOnlyProbe.ready = true
    })
    .catch((err) => {
      const metrics = document.getElementById('metrics')
      if (metrics) metrics.textContent = `Error: ${err.message}`
      window.__chromiumFoOnlyProbe.bootError = String(err)
      window.__chromiumFoOnlyProbe.ready = true
    })

  return { variantId, variant, runRaster }
}
