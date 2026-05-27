import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { snapdom } from '../src/api/snapdom.js'
import {
  svgFromDataUrl,
  compareLiveToSvg,
  compareLayoutToSvg,
  compareEmailFieldMetrics,
  compareLiveCanvasCapInk,
  compareCheckoutStructure,
  parseClassRules,
  sampleCanvasRegion,
  measureCapInk,
  LENGTH_EQ_EPS,
  lengthsDifferByTol,
} from './helpers/svgLiveCompare.js'
import {
  usesNormalLineHeight,
  measureLayoutLineBoxPx,
  measureNormalLineHeightPx,
} from '../src/utils/preciseLineHeight.js'
import { compareVisualDiff } from './helpers/visualDiff.js'

const CHECKOUT_CSS = `
  .checkout-page { background:#fff;color:#111;display:flex;flex-direction:column;font-size:24px;width:498px; }
  .checkout-header { display:flex;justify-content:space-between;align-items:center;padding:20px 30px;border-bottom:2px solid #eee; }
  .logo { font-weight:800;color:#2563eb;font-size:32px; }
  .checkout-header nav { display:flex;gap:20px;font-size:20px; }
  .checkout-header a { color:#666;text-decoration:none; }
  .checkout-main { padding:30px;flex:1; }
  .checkout-form { display:flex;flex-direction:column; }
  .checkout-form label { display:block;font-size:48px;font-weight:700;color:#444;margin:0 0 25px 0; }
  .checkout-form label span { display:block;margin-bottom:10px; }
  .checkout-form input:not([type="checkbox"]) { padding:12px 16px;border-radius:8px;border:2px solid #ddd;width:100%;font-size:50px;margin:0;box-sizing:border-box; }
  .checkout-checkbox { display:flex;align-items:center;gap:12px;font-weight:600;padding:10px 0;font-size:22px; }
  .checkout-checkbox input { margin:0;width:24px;height:24px; }
`

function mountCheckoutFixture({ stageHeight } = {}) {
  let style = document.getElementById('checkout-compare-style')
  if (!style) {
    style = document.createElement('style')
    style.id = 'checkout-compare-style'
    style.textContent = CHECKOUT_CSS
    document.head.appendChild(style)
  }

  const wrap = document.createElement('div')
  if (stageHeight) {
    wrap.style.cssText = `width:500px;height:${stageHeight}px;position:relative;overflow:hidden`
  }

  const root = document.createElement('div')
  root.id = 'capture-target'
  root.className = 'checkout-page'
  if (stageHeight) root.style.height = '100%'
  root.innerHTML = `
    <header class="checkout-header">
      <span class="logo">ShopDemo1</span>
      <nav><a href="#">Home</a><a href="#">Products</a></nav>
    </header>
    <main class="checkout-main">
      <h2 style="margin:0 0 20px;font-size:80px;font-weight:700;line-height:1.2">Checkout</h2>
      <form class="checkout-form">
        <label><span>Email Address</span><input type="email" placeholder="you@example.com"></label>
        <label class="checkout-checkbox"><input type="checkbox">Remember my details</label>
        <label><span>Promo Code</span><input type="text" placeholder="SAVE10"></label>
      </form>
    </main>
  `
  wrap.appendChild(root)
  document.body.appendChild(wrap)
  return { wrap, root }
}

describe('checkout SVG vs live alignment', () => {
  /** @type {HTMLElement|null} */
  let wrap = null
  /** @type {HTMLElement|null} */
  let root = null

  beforeEach(() => {
    ;({ wrap, root } = mountCheckoutFixture())
  })

  afterEach(() => {
    wrap?.remove()
    wrap = null
    root = null
  })

  const TEXT_LANDMARK_TITLES = [
    'Logo',
    'Nav: Home',
    'Nav: Products',
    'Checkout (h2)',
    'Email Address (label)',
    'Remember my details',
    'Promo Code (label)',
  ]

  it('all checkout elements match layout box vs SVG clone exactly', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { layoutDiffs } = compareLayoutToSvg(root, svg, 0)
    expect(
      layoutDiffs,
      layoutDiffs.length ? JSON.stringify(layoutDiffs.slice(0, 12), null, 2) : '',
    ).toEqual([])
  })

  it('max layout drift across all elements is zero (exact)', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { layoutDiffs } = compareLayoutToSvg(root, svg, 0)
    let max = 0
    /** @type {import('./helpers/svgLiveCompare.js').LayoutDiff|null} */
    let worst = null
    let worstKey = ''
    for (const d of layoutDiffs) {
      for (const [key, val] of [
        ['top', d.deltaTop],
        ['left', d.deltaLeft],
        ['width', d.deltaWidth],
        ['height', d.deltaHeight],
      ]) {
        const a = Math.abs(val)
        if (a > max) {
          max = a
          worst = d
          worstKey = key
        }
      }
    }
    expect(
      max,
      worst ? `${worst.path} Δ${worstKey}=${max}px` : 'no drift',
    ).toBeLessThanOrEqual(LENGTH_EQ_EPS)
  })

  it('all text nodes preserve letter-spacing and font-kerning vs SVG clone', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { diffs } = compareLiveToSvg(root, svg, ['letter-spacing', 'font-kerning'])
    expect(diffs, JSON.stringify(diffs.slice(0, 12), null, 2)).toEqual([])
  })

  it('landmarks preserve border-box width and kerning-related styles vs SVG clone', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { sections } = compareCheckoutStructure(root, svg)
    for (const title of TEXT_LANDMARK_TITLES) {
      const sec = sections.find((s) => s.title === title)
      expect(sec, title).toBeTruthy()
      const liveBox = sec.liveMetrics.box
      const cloneBox = sec.cloneMetrics.box
      expect(lengthsDifferByTol(cloneBox.width, liveBox.width, 0)).toBe(false)
      expect(lengthsDifferByTol(cloneBox.left, liveBox.left, 0)).toBe(false)
      expect(sec.cloneMetrics['letter-spacing']).toBe(sec.liveMetrics['letter-spacing'])
      expect(sec.cloneMetrics['font-kerning']).toBe(sec.liveMetrics['font-kerning'])
      const liveAdv = sec.liveMetrics.advanceWidthFull
      const cloneAdv = sec.cloneMetrics.advanceWidthFull
      if (typeof liveAdv === 'number' && typeof cloneAdv === 'number') {
        expect(lengthsDifferByTol(cloneAdv, liveAdv, 0)).toBe(false)
      }
    }
  })

  it('nav links match box and cap ink vs SVG clone (intrinsic normal line-height pin)', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { sections } = compareCheckoutStructure(root, svg)
    const classMap = parseClassRules(svg)
    for (const title of ['Nav: Home', 'Nav: Products']) {
      const sec = sections.find((s) => s.title === title)
      expect(sec, title).toBeTruthy()
      const liveEl = sec.liveEl
      const liveBox = sec.liveMetrics.box
      const cloneBox = sec.cloneMetrics.box
      expect(Math.abs(cloneBox.top - liveBox.top)).toBeLessThanOrEqual(LENGTH_EQ_EPS)
      expect(Math.abs(cloneBox.height - liveBox.height)).toBeLessThanOrEqual(LENGTH_EQ_EPS)
      expect(sec.liveMetrics['line-height']).toBe('normal')

      const intrinsic = measureNormalLineHeightPx(liveEl, getComputedStyle(liveEl))
      expect(intrinsic).not.toBeNull()
      const cls = [...svg.matchAll(new RegExp(`<a[^>]*class="([^"]+)"[^>]*>${title.replace('Nav: ', '')}<`, 'g'))][0]?.[1]
        ?.split(/\s+/)
        .find((c) => /^c\d+$/.test(c))
      expect(cls).toBeTruthy()
      const rules = classMap.get(cls)
      const lh = rules?.['line-height']
      expect(lh).toMatch(/^\d+(\.\d+)?px$/)
      expect(Math.abs(parseFloat(lh) - (intrinsic ?? 0))).toBeLessThanOrEqual(LENGTH_EQ_EPS)
      expect(rules?.['align-self']).toBe('flex-start')

      const liveCap = sec.liveMetrics.capInkRelBorder?.top
      const cloneCap = sec.cloneMetrics.capInkRelBorder?.top
      if (liveCap != null && cloneCap != null) {
        expect(Math.abs(cloneCap - liveCap)).toBeLessThanOrEqual(LENGTH_EQ_EPS)
      }
    }
  })

  it('pins line-height to painted layout box when author uses normal', async () => {
    const span = root.querySelector('label span')
    const cs = getComputedStyle(span)
    expect(usesNormalLineHeight(cs)).toBe(true)
    const layout = measureLayoutLineBoxPx(cs, span)
    expect(layout).not.toBeNull()

    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const classMap = parseClassRules(svg)
    const cls = [...svg.matchAll(/<span[^>]*class="([^"]+)"[^>]*>Email/g)][0]?.[1]
      ?.split(/\s+/)
      .find((c) => /^c\d+$/.test(c))
    expect(cls).toBeTruthy()
    const lh = classMap.get(cls)?.['line-height']
    expect(lh).toMatch(/^\d+(\.\d+)?px$/)
    expect(Math.abs(parseFloat(lh) - (layout ?? 0))).toBeLessThanOrEqual(LENGTH_EQ_EPS)
  })

  it('matches text ink, margins, and span→input gap for Email Address', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { metricDiffs, liveMetrics, cloneMetrics } = compareEmailFieldMetrics(
      root,
      svg,
      'Email Address',
    )

    expect(liveMetrics).toBeTruthy()
    expect(cloneMetrics).toBeTruthy()
    expect(liveMetrics['margin-bottom']).toBe('10px')
    expect(cloneMetrics['margin-bottom']).toBe('10px')
    expect(metricDiffs, JSON.stringify({ metricDiffs, liveMetrics, cloneMetrics }, null, 2)).toEqual([])
  })

  it('matches layout boxes for Email field exactly', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { layoutDiffs } = compareLayoutToSvg(root, svg)
    const emailDiffs = layoutDiffs.filter((d) => d.path.includes('Email Address'))
    expect(emailDiffs, JSON.stringify(emailDiffs, null, 2)).toEqual([])
  })

  it('preserves text input used height in SVG clone', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { diffs } = compareLiveToSvg(root, svg)
    const inputH = diffs.filter((d) => d.tag === 'input' && d.prop === 'height')
    expect(inputH, JSON.stringify(inputH, null, 2)).toEqual([])
  })

  it('matches in stage-sized container (checkout-example proportions)', async () => {
    wrap?.remove()
    ;({ wrap, root } = mountCheckoutFixture({ stageHeight: 600 }))

    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const { metricDiffs } = compareEmailFieldMetrics(root, svg, 'Email Address')
    expect(metricDiffs, JSON.stringify(metricDiffs, null, 2)).toEqual([])
  })

  it('matches Email cap ink on canvas raster', async () => {
    const span = root.querySelector('label span')
    const canvas = await snapdom.toCanvas(root, { embedFonts: true, dpr: 1, scale: 1 })
    const { deltaTopInBorder, live, canvas: raster } = compareLiveCanvasCapInk(
      root,
      canvas,
      span,
      1,
    )
    expect(live).toBeTruthy()
    expect(raster).toBeTruthy()
    expect(
      deltaTopInBorder,
      JSON.stringify({ deltaTopInBorder, live, raster }, null, 2),
    ).toBeLessThanOrEqual(LENGTH_EQ_EPS)
  })

  it('canvas raster includes Email Address ink band at live metrics', async () => {
    const span = root.querySelector('label span')
    const cap = measureCapInk(span, root)
    expect(cap).toBeTruthy()

    const canvas = await snapdom.toCanvas(root, { embedFonts: true, dpr: 1, scale: 1 })
    const spanRect = span.getBoundingClientRect()
    const rootRect = root.getBoundingClientRect()
    const region = {
      x: Math.max(0, Math.floor(spanRect.left - rootRect.left)),
      y: Math.max(0, Math.floor(cap.top - 1)),
      w: Math.ceil(spanRect.width),
      h: Math.ceil(cap.height + 2),
    }
    const sample = sampleCanvasRegion(canvas, region)
    expect(sample.total).toBeGreaterThan(50)
    expect(sample.ratio).toBeGreaterThan(0.03)
  })

  it('pins empty input color to ::placeholder paint', async () => {
    const input = root.querySelector('input[type="email"]')
    expect(input.value).toBe('')
    let livePhColor = ''
    try {
      livePhColor = getComputedStyle(input, '::placeholder').color
    } catch { /* unsupported */ }
    expect(livePhColor).toBeTruthy()

    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    const classMap = parseClassRules(svg)
    const inputTag = svg.match(/<input[^>]*type="email"[^>]*>/)?.[0]
    const cls = inputTag?.match(/class="([^"]+)"/)?.[1]?.split(/\s+/).find((c) => /^c\d+$/.test(c))
    expect(cls).toBeTruthy()
    expect(classMap.get(cls)?.color).toBe(livePhColor)
  })

  it('repeated canvas captures are pixel-stable', async () => {
    const opts = { embedFonts: true, dpr: 2, scale: 1, debug: false }
    const a = await snapdom.toCanvas(root, opts)
    const b = await snapdom.toCanvas(root, opts)
    const { mismatchRatio, sizeMismatch, mismatchedPixels, totalPixels } =
      compareVisualDiff(a, b)
    expect(sizeMismatch).toBe(false)
    expect(mismatchRatio, `${mismatchedPixels}/${totalPixels} pixels`).toBeLessThan(0.02)
  })

  it('pins explicit line-height on h2 with line-height:1.2', async () => {
    const svg = svgFromDataUrl(await snapdom.toRaw(root, { embedFonts: true }))
    expect(svg).toMatch(/line-height:\s*96px/i)
    const { diffs } = compareLiveToSvg(root, svg)
    const h2Lh = diffs.filter((d) => d.prop === 'line-height' && d.tag === 'h2')
    expect(h2Lh).toEqual([])
  })
})
