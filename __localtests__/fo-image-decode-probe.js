/**
 * Browser-only FO inline vs SVG→Image→canvas ink probe (R1 / introspection).
 * Imported by checkout playground and inline-fo-vs-image harness.
 */
import { H2_RASTER_NORMALIZE_CSS as FO_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'
import { measureCanvasInkForElement } from '../__tests__/helpers/svgLiveCompare.js'

const DRAW_IMAGE_INTERVAL_MS = 100

export { FO_RASTER_NORMALIZE_CSS }

export function encodeSvgToDataURL(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}

export function injectFoNormalize(svgText, foCss = FO_RASTER_NORMALIZE_CSS) {
  if (/foreignObject\s*\*\{box-sizing:border-box/i.test(svgText)) return svgText
  return svgText.replace(
    /<svg\b([^>]*)>/i,
    (m) => `${m}<style type="text/css">${foCss}</style>`,
  )
}

export function patchSvgRootPixelSize(svgText, w, h) {
  const dw = String(Math.max(1, Math.round(w)))
  const dh = String(Math.max(1, Math.round(h)))
  return svgText.replace(/<svg\b([^>]*)>/i, (full, attrs) => {
    if (!/\bviewBox=["']/i.test(attrs)) return full
    let next = attrs
    if (/\bwidth=["']/i.test(next)) {
      next = next.replace(/\bwidth=["'][\d.]+[^"']*["']/i, `width="${dw}"`)
    } else next += ` width="${dw}"`
    if (/\bheight=["']/i.test(next)) {
      next = next.replace(/\bheight=["'][\d.]+[^"']*["']/i, `height="${dh}"`)
    } else next += ` height="${dh}"`
    return `<svg${next}>`
  })
}

/**
 * Image→canvas decode probe matching snapdom two-stage + drawImageInterval.
 * @param {object} [opts]
 * @param {boolean} [opts.retainDecodeCanvas] When true, return offscreen canvas (debug only).
 * @returns {Promise<{ capTopInBorder: number|null, naturalWidth: number|null, naturalHeight: number|null, deviceW: number, deviceH: number, canvas?: HTMLCanvasElement }>}
 */
export async function probeImageDecodeCapTop(svgMarkup, liveRoot, liveEl, dprVal, opts = {}) {
  const cssW = liveRoot.getBoundingClientRect().width
  const cssH = liveRoot.getBoundingClientRect().height
  const deviceW = Math.max(1, Math.round(cssW * dprVal))
  const deviceH = Math.max(1, Math.round(cssH * dprVal))
  let prepared = injectFoNormalize(svgMarkup)
  prepared = patchSvgRootPixelSize(prepared, deviceW, deviceH)

  const img = new Image()
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = encodeSvgToDataURL(prepared)
  await img.decode()
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {
      /* ignore */
    }
  }
  img.style.cssText = 'position:fixed;left:-99999px;top:-99999px'
  document.body.appendChild(img)
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

  const canvas = document.createElement('canvas')
  canvas.width = deviceW
  canvas.height = deviceH
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  const nw = img.naturalWidth
  const nh = img.naturalHeight
  const paint = () => {
    ctx.clearRect(0, 0, deviceW, deviceH)
    if (nw === deviceW && nh === deviceH) {
      ctx.drawImage(img, 0, 0)
    } else {
      ctx.drawImage(img, 0, 0, nw, nh, 0, 0, deviceW, deviceH)
    }
  }
  paint()
  await new Promise((r) => setTimeout(r, DRAW_IMAGE_INTERVAL_MS))
  paint()
  await new Promise((r) => setTimeout(r, DRAW_IMAGE_INTERVAL_MS))
  paint()
  try {
    img.remove()
  } catch {
    /* ok */
  }

  const ink = measureCanvasInkForElement(canvas, liveRoot, liveEl, dprVal)
  const out = {
    capTopInBorder: ink?.topInBorder ?? null,
    naturalWidth: nw,
    naturalHeight: nh,
    deviceW,
    deviceH,
  }
  if (opts.retainDecodeCanvas) {
    out.canvas = canvas
  }
  return out
}
