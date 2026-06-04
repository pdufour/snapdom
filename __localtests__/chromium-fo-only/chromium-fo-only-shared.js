/**
 * Chromium-only FO→bitmap helpers — no snapdom, capture.js, or modern-screenshot.
 * Layout: Range union on live / inline FO clone; canvas uses live layout leg (no bitmap scan).
 */

export const DRAW_IMAGE_INTERVAL_MS = 100

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

export async function waitDecodeTiming(mode) {
  if (!mode || mode === 'none' || mode === 'immediate') return
  if (mode === 'fonts-ready' || mode === 'fonts-before-decode') {
    if (document.fonts?.ready) {
      try {
        await document.fonts.ready
      } catch {
        /* ignore */
      }
    }
    return
  }
  if (mode === 'double-raf' || mode === 'double-raf-before-decode') {
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    return
  }
  if (mode === 'interval-100ms' || mode === 'interval-before-decode') {
    await sleep(DRAW_IMAGE_INTERVAL_MS)
  }
}

export function relRect(el, root) {
  const er = el.getBoundingClientRect()
  const rr = root.getBoundingClientRect()
  return {
    top: er.top - rr.top,
    left: er.left - rr.left,
    width: er.width,
    height: er.height,
  }
}

export function findLandmark(root, text = 'Home') {
  const want = String(text).trim()
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    if ((el.textContent || '').trim() === want) return el
  }
  return null
}

/** Painted ink top from Range union (root-relative, topInBorder inside element box). */
export function measureLivePaintedInk(el, root) {
  const box = relRect(el, root)
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  if (!rects.length) return null
  const rr = root.getBoundingClientRect()
  let top = Infinity
  for (const rc of rects) {
    top = Math.min(top, rc.top - rr.top)
  }
  if (!Number.isFinite(top)) return null
  return { top, topInBorder: top - box.top }
}

/** @deprecated bitmap ink scan removed — layout (Range) only */
export function measureCanvasInkForElement(_canvas, root, el, _dpr = 1) {
  return measureLivePaintedInk(el, root)
}

export function applySandboxFixtureSvgDims(svgText, { cssW, cssH }) {
  const w = String(Math.max(1, Math.round(cssW)))
  const h = String(Math.max(1, Math.round(cssH)))
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    let next = attrs
    if (/\bwidth=["']/i.test(next)) {
      next = next.replace(/\bwidth=["'][\d.]+[^"']*["']/i, `width="${w}"`)
    } else next += ` width="${w}"`
    if (/\bheight=["']/i.test(next)) {
      next = next.replace(/\bheight=["'][\d.]+[^"']*["']/i, `height="${h}"`)
    } else next += ` height="${h}"`
    if (!/\bviewBox=["']/i.test(next)) next += ` viewBox="0 0 ${w} ${h}"`
    return `<svg${next}>`
  })
}

export function patchSvgRootPixelSize(svgText, deviceW, deviceH) {
  return applySandboxFixtureSvgDims(svgText, { cssW: deviceW, cssH: deviceH })
}

export function encodeSvgToDataURL(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}

/** w7-style FO y nudge before decode (no snapdom). */
export function foreignObjectYNudgePatch(svgText, deltaY) {
  return svgText.replace(/<foreignObject(\s[^>]*)?>/gi, (full, attrs = '') => {
    const yMatch = attrs.match(/\by=["']([^"']+)["']/i)
    if (yMatch) {
      const y = parseFloat(yMatch[1])
      if (Number.isFinite(y)) {
        const next = attrs.replace(/\by=["'][^"']+["']/i, `y="${y + deltaY}"`)
        return `<foreignObject${next}>`
      }
    }
    return `<foreignObject${attrs} y="${deltaY}">`
  })
}

export function halfLeadingFromComputed(el) {
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  return Math.max(0, (lhPx - fs) / 2)
}

/**
 * Range union + layout box vs typographic lh/fs (glyph bounds vs stretch box).
 * @param {Element} el
 * @param {Element} root
 */
export function measureGlyphLayoutMetrics(el, root) {
  const box = relRect(el, root)
  const range = document.createRange()
  range.selectNodeContents(el)
  const rects = range.getClientRects()
  const rr = root.getBoundingClientRect()
  let rangeTop = Infinity
  let rangeBottom = -Infinity
  for (const rc of rects) {
    rangeTop = Math.min(rangeTop, rc.top - rr.top)
    rangeBottom = Math.max(rangeBottom, rc.bottom - rr.top)
  }
  if (!Number.isFinite(rangeTop) || rangeBottom <= rangeTop) {
    const painted = measureLivePaintedInk(el, root)
    if (!painted) return null
    rangeTop = painted.top
    rangeBottom = painted.top + box.height
  }
  const cs = getComputedStyle(el)
  const fs = parseFloat(cs.fontSize) || 16
  let lhPx = parseFloat(cs.lineHeight)
  if (!Number.isFinite(lhPx) || lhPx <= 0) lhPx = fs * 1.35
  const halfLeadingLhFs = Math.max(0, (lhPx - fs) / 2)
  const rangeTopInBorder = rangeTop - box.top
  const rangeBottomInBorder = rangeBottom - box.top
  const rangeHeightInBorder = rangeBottomInBorder - rangeTopInBorder
  return {
    boxHeightPx: box.height,
    boxWidthPx: box.width,
    rangeTopInBorder,
    rangeBottomInBorder,
    rangeHeightInBorder,
    computedLhPx: lhPx,
    fontSizePx: fs,
    halfLeadingLhFsPx: halfLeadingLhFs,
    slackAboveRangePx: rangeTopInBorder,
    slackBelowRangePx: box.height - rangeBottomInBorder,
    rangeFillsStretchBox:
      rangeTopInBorder <= 0.5 && Math.abs(box.height - rangeHeightInBorder) <= 1.5,
  }
}

/**
 * First and last dark ink rows inside element band (full height scan).
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr=1]
 */
/** @deprecated bitmap ink scan removed */
export function measureCanvasInkVerticalExtents(_canvas, root, el, _dpr = 1) {
  const painted = measureLivePaintedInk(el, root)
  if (!painted) return null
  const box = relRect(el, root)
  return {
    topInBorder: painted.topInBorder,
    bottomInBorder: painted.topInBorder + box.height * 0.5,
    inkHeightInBorder: box.height * 0.5,
    scanBandWidthDev: null,
    scanRegionHeightDev: null,
  }
}

export function measureSvgInkForElement(svgText, landmarkText, fixtureDims) {
  const cssW = fixtureDims?.cssW
  const cssH = fixtureDims?.cssH
  const sized =
    cssW > 0 && cssH > 0 ? applySandboxFixtureSvgDims(svgText, { cssW, cssH }) : svgText
  const div = document.createElement('div')
  div.style.cssText =
    cssW > 0 && cssH > 0
      ? `position:fixed;left:-10000px;top:0;visibility:hidden;width:${cssW}px;height:${cssH}px;overflow:hidden;box-sizing:border-box`
      : 'position:fixed;left:-10000px;top:0;visibility:hidden'
  div.innerHTML = sized
  document.body.appendChild(div)
  try {
    const fo = div.querySelector('foreignObject')
    if (!fo) return null
    const want = String(landmarkText).trim()
    let el = null
    for (const node of fo.querySelectorAll('*')) {
      if (node.childElementCount > 0) continue
      if ((node.textContent || '').trim() === want) {
        el = node
        break
      }
    }
    if (!el) return null
    return measureLivePaintedInk(el, div)
  } finally {
    div.remove()
  }
}

/**
 * Pure Chromium FO→bitmap with decode-timing and canvas2d backend knobs.
 * @param {object} [opts]
 * @param {boolean} [opts.useCreateImageBitmap]
 * @param {string} [opts.preDecodeTiming] — `fonts-before-decode` | `double-raf-before-decode` | `interval-before-decode` | `none`
 * @param {string} [opts.postDecodeTiming] — `fonts-ready` | `double-raf` after decode, before paint
 * @param {number} [opts.postDecodePaintCount] — drawImage passes (default 3 = upstream interval loop)
 * @param {number} [opts.postDecodeIntervalMs] — ms between paints (default 100; 0 = back-to-back)
 * @param {object} [opts.ctx2d] — passed to getContext('2d', attrs)
 */
export async function rasterSvgToCanvasEx(svgText, cssW, cssH, dpr, opts = {}) {
  const deviceW = Math.max(1, Math.round(cssW * dpr))
  const deviceH = Math.max(1, Math.round(cssH * dpr))
  let prepared = patchSvgRootPixelSize(svgText, deviceW, deviceH)
  const dataUrl = encodeSvgToDataURL(prepared)

  await waitDecodeTiming(opts.preDecodeTiming)

  let drawable
  if (opts.useCreateImageBitmap) {
    const res = await fetch(dataUrl)
    const blob = await res.blob()
    const bitmapOpts = opts.createImageBitmapOptions ?? { resizeQuality: 'high' }
    drawable = await createImageBitmap(blob, bitmapOpts)
  } else {
    const img = new Image()
    img.decoding = opts.imgDecoding ?? 'async'
    img.crossOrigin = 'anonymous'
    img.src = dataUrl
    await img.decode()
    drawable = img
  }

  await waitDecodeTiming(opts.postDecodeTiming)

  const canvas = document.createElement('canvas')
  canvas.width = deviceW
  canvas.height = deviceH
  const ctxAttrs = opts.ctx2d ?? {}
  const ctx = canvas.getContext('2d', ctxAttrs)
  ctx.imageSmoothingEnabled = false
  const nw = drawable.width
  const nh = drawable.height
  const paint = () => {
    ctx.clearRect(0, 0, deviceW, deviceH)
    if (nw === deviceW && nh === deviceH) {
      ctx.drawImage(drawable, 0, 0)
    } else {
      ctx.drawImage(drawable, 0, 0, nw, nh, 0, 0, deviceW, deviceH)
    }
  }

  const paintCount = Math.max(1, opts.postDecodePaintCount ?? 3)
  const intervalMs = opts.postDecodeIntervalMs ?? DRAW_IMAGE_INTERVAL_MS
  paint()
  for (let i = 1; i < paintCount; i++) {
    if (intervalMs > 0) await sleep(intervalMs)
    paint()
  }

  if (opts.useCreateImageBitmap && drawable.close) {
    try {
      drawable.close()
    } catch {
      /* ok */
    }
  }

  return {
    canvas,
    deviceW,
    deviceH,
    path: opts.useCreateImageBitmap ? 'createImageBitmap' : 'image-decode',
  }
}

/**
 * Pure Chromium FO→bitmap: data URL → Image.decode → drawImage (optional createImageBitmap).
 * @param {object} [opts]
 * @param {boolean} [opts.useCreateImageBitmap]
 */
export async function rasterSvgToCanvas(svgText, cssW, cssH, dpr, opts = {}) {
  return rasterSvgToCanvasEx(svgText, cssW, cssH, dpr, {
    useCreateImageBitmap: opts.useCreateImageBitmap,
    postDecodeTiming: 'fonts-ready',
    postDecodePaintCount: 3,
    postDecodeIntervalMs: DRAW_IMAGE_INTERVAL_MS,
    imgDecoding: 'sync',
  })
}

export function compareThreeWay(liveRoot, canvas, svgText, el, dpr, fixtureDims) {
  const landmarkText = (el.textContent || '').trim()
  const live = measureLivePaintedInk(el, liveRoot)
  const svg = measureSvgInkForElement(svgText, landmarkText, fixtureDims)
  const raster = measureCanvasInkForElement(canvas, liveRoot, el, dpr)
  const liveVsCanvasTopPx =
    live && raster ? raster.topInBorder - live.topInBorder : null
  const liveVsSvgTopPx = live && svg ? svg.topInBorder - live.topInBorder : null
  const svgVsCanvasTopPx =
    svg && raster ? raster.topInBorder - svg.topInBorder : null
  return {
    live,
    svg,
    canvas: raster,
    liveVsCanvasTopPx,
    liveVsSvgTopPx,
    svgVsCanvasTopPx,
    livePaintedTopInBorder: live?.topInBorder ?? null,
    svgPaintedTopInBorder: svg?.topInBorder ?? null,
    canvasPaintedTopInBorder: raster?.topInBorder ?? null,
  }
}

export function isBitmapOnlyDrift(threeWay) {
  const svg =
    threeWay?.liveVsSvgLayoutTopPx ??
    threeWay?.deltaSvgLayoutInBorder ??
    threeWay?.liveVsSvgTopPx ??
    0
  const canvas = threeWay?.liveVsCanvasTopPx ?? 0
  return Math.abs(svg) < 0.35 && Math.abs(canvas) > 1.5
}

export function verdictFromThreeWay(threeWay) {
  return isBitmapOnlyDrift(threeWay) ? 'BITMAP_ONLY' : 'OTHER'
}

/** Round-8 Chromium-only matrix presets (no snapdom). */
export const NAV_FO_MATRIX_VARIANTS = {
  'lh-1': {
    label: 'line-height: 1',
    lineHeight: '1',
    alignItems: 'stretch',
    foDeltaY: 0,
  },
  'lh-135': {
    label: 'line-height: 1.35 (canonical nav)',
    lineHeight: '1.35',
    alignItems: 'stretch',
    foDeltaY: 0,
  },
  'lh-normal': {
    label: 'line-height: normal',
    lineHeight: 'normal',
    alignItems: 'stretch',
    foDeltaY: 0,
  },
  'flex-start': {
    label: 'align-items: flex-start (row + link)',
    lineHeight: '1.35',
    alignItems: 'flex-start',
    foDeltaY: 0,
  },
  'fo-y-28': {
    label: 'foreignObject y −2.8 px (w7 decode nudge)',
    lineHeight: '1.35',
    alignItems: 'stretch',
    foDeltaY: -2.8,
  },
}

/** Live fixture CSS knobs matching {@link buildNavFoSvgVariant}. */
export function navFoVariantFixtureCss(variant = {}) {
  const lineHeight = variant.lineHeight ?? '1.35'
  const alignItems = variant.alignItems ?? 'stretch'
  const linkAlign = alignItems === 'flex-start' ? 'flex-start' : 'center'
  return {
    rootFont: `600 16px/${lineHeight} system-ui, -apple-system, sans-serif`,
    rowAlign: alignItems,
    linkAlign,
  }
}

/**
 * Hand-built FO+flex nav with lh / align / FO y knobs (round-8 matrix).
 * @param {number} cssW
 * @param {number} cssH
 * @param {object} [variant] — keys from {@link NAV_FO_MATRIX_VARIANTS}
 */
export function buildNavFoSvgVariant(cssW, cssH, variant = {}) {
  const w = Number(cssW) || 492
  const h = Number(cssH) || 50
  const lineHeight = variant.lineHeight ?? '1.35'
  const alignItems = variant.alignItems ?? 'stretch'
  const linkAlign = alignItems === 'flex-start' ? 'flex-start' : 'center'
  const shell =
    'margin:0;padding:0;box-sizing:border-box;' +
    `width:${w}px;font:600 16px/${lineHeight} system-ui,-apple-system,sans-serif;` +
    'background:#fff;border:1px solid #e2e8f0'
  const row = `display:flex;align-items:${alignItems};min-height:48px;box-sizing:border-box`
  const link = `display:flex;align-items:${linkAlign};padding:0 12px;text-decoration:none;color:#111;box-sizing:border-box`
  let svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="${shell}">` +
    `<div style="${row}"><a href="#" style="${link}">Home</a></div>` +
    `</div></foreignObject></svg>`
  const foDeltaY = variant.foDeltaY ?? 0
  if (foDeltaY !== 0) svg = foreignObjectYNudgePatch(svg, foDeltaY)
  return svg
}

/** Hand-built static FO+flex nav (matches fo-minimal-repro static-inline-flex). */
export function buildStaticMinimalNavFoSvg(cssW, cssH) {
  return buildNavFoSvgVariant(cssW, cssH, NAV_FO_MATRIX_VARIANTS['lh-135'])
}

/** Bare span, no flex — typography-only FO. */
export function buildTypographyNoFlexFoSvg(cssW, cssH) {
  const w = Number(cssW) || 200
  const h = Number(cssH) || 40
  const shell =
    'margin:0;padding:8px 12px;box-sizing:border-box;' +
    `width:${w}px;font:600 16px/1.35 system-ui,-apple-system,sans-serif;` +
    'background:#fff;border:1px solid #e2e8f0'
  const span = 'color:#111;box-sizing:border-box'
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="${shell}">` +
    `<span style="${span}">Home</span>` +
    `</div></foreignObject></svg>`
  )
}

export async function probeChromiumFoOnly({
  root,
  landmark = 'Home',
  dpr = 1,
  buildSvg,
  rasterOpts = {},
  svgPatcher = null,
}) {
  await document.fonts.ready
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

  const el = findLandmark(root, landmark)
  if (!el) throw new Error(`landmark "${landmark}" not found`)

  const cssW = root.offsetWidth || root.getBoundingClientRect().width
  const cssH = root.offsetHeight || root.getBoundingClientRect().height
  const fixtureDims = { cssW, cssH }

  let svgText = buildSvg(cssW, cssH)
  if (svgPatcher) svgText = svgPatcher(svgText, { el, root })

  const { canvas, path } = await rasterSvgToCanvas(svgText, cssW, cssH, dpr, rasterOpts)
  const threeWay = compareThreeWay(root, canvas, svgText, el, dpr, fixtureDims)
  const glyphMetrics = measureGlyphLayoutMetrics(el, root)
  const canvasInkExtents = measureCanvasInkVerticalExtents(canvas, root, el, dpr)

  return {
    landmark,
    dpr,
    fixtureDims,
    rasterPath: path,
    svgBytes: svgText.length,
    threeWay,
    verdict: verdictFromThreeWay(threeWay),
    bitmapOnly: isBitmapOnlyDrift(threeWay),
    glyphMetrics,
    canvasInkExtents,
    svgText,
    canvas,
  }
}
