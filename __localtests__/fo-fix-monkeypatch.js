/**
 * Runtime monkeypatches for FO fix lab — harness only, no `src/` edits.
 * Patches install before `window.snapdom` capture and uninstall in `finally`.
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'
import { recipeCaptureCss } from './fo-fix-recipes.js'

/** modern-screenshot drawImageInterval default (ms). */
export const DECODE_INTERVAL_MS = 100

/** Lab Google Fonts substitute for system-ui / -apple-system stacks (embedFonts probe). */
export const GOOGLE_FONTS_LAB_FAMILY = 'Inter'
export const GOOGLE_FONTS_LAB_CSS_HREF =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'

const SYSTEM_FONT_STACK_RE =
  /system-ui|-apple-system|BlinkMacSystemFont|ui-sans-serif|ui-serif|ui-monospace|Segoe UI|Helvetica Neue|Roboto|Arial|sans-serif|monospace/i

/**
 * @param {string} familyList
 */
function isSystemFontStack(familyList) {
  return SYSTEM_FONT_STACK_RE.test(familyList ?? '')
}

/**
 * @param {string} familyList
 */
function googleFontsLabFamilyStack(familyList) {
  if (!isSystemFontStack(familyList)) return familyList
  return `'${GOOGLE_FONTS_LAB_FAMILY}', sans-serif`
}

function ensureGoogleFontsStylesheet() {
  if (document.querySelector('link[data-fo-lab-googlefonts]')) return null
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = GOOGLE_FONTS_LAB_CSS_HREF
  link.setAttribute('data-fo-lab-googlefonts', '1')
  document.head.appendChild(link)
  return link
}

/**
 * Rewrite system font stacks under capture root to Inter; await Google Fonts load.
 * @param {HTMLElement} root
 */
async function applyGoogleFontsToCaptureSubtree(root) {
  ensureGoogleFontsStylesheet()
  /** @type {Element[]} */
  const nodes = [root, ...root.querySelectorAll('*')]
  /** @type {Set<string>} */
  const loads = new Set()
  for (const node of nodes) {
    if (!(node instanceof HTMLElement)) continue
    const cs = getComputedStyle(node)
    if (!isSystemFontStack(cs.fontFamily)) continue
    const next = googleFontsLabFamilyStack(cs.fontFamily)
    node.style.fontFamily = next
    const fs = parseFloat(cs.fontSize) || 16
    const fw = cs.fontWeight || '400'
    const fst = cs.fontStyle || 'normal'
    loads.add(`${fst} ${fw} ${fs}px ${GOOGLE_FONTS_LAB_FAMILY}`)
  }
  try {
    await Promise.all([...loads].map((spec) => document.fonts.load(spec)))
    await document.fonts.ready
  } catch {
    /* non-blocking */
  }
}

function installGoogleFontsEmbedCapture() {
  /** @type {HTMLLinkElement | null} */
  let linkEl = null
  const origSnap = window.snapdom
  if (typeof origSnap !== 'function') return

  /** @param {HTMLElement} el @param {object} [opts] */
  async function wrappedSnap(el, opts) {
    linkEl = ensureGoogleFontsStylesheet()
    if (el instanceof HTMLElement) {
      await applyGoogleFontsToCaptureSubtree(el)
    }
    return origSnap(el, opts)
  }
  Object.assign(wrappedSnap, origSnap)
  window.snapdom = wrappedSnap
  uninstallStack.push(() => {
    window.snapdom = origSnap
    linkEl?.remove()
  })
}

/** pdufour/fix/h2 portable capture FO normalize (no container inline width/height). */
export const H2_CAPTURE_FO_NORMALIZE_CSS =
  'svg{display:block!important;overflow:visible!important}' +
  'foreignObject{overflow:visible!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
  'foreignObject *{box-sizing:border-box!important;' +
  'text-rendering:optimizeSpeed!important;font-kerning:none!important}'

/** h2 capture.js styleTag: bare `*` inside FO document (not foreignObject * in svg root style). */
export const H2_FO_INTERNAL_STAR_CSS =
  '*{box-sizing:border-box!important;' +
  'text-rendering:optimizeSpeed!important;font-kerning:none!important}'

/** h2 container.style aggressive reset (minus measured width/height). */
export const H2_CONTAINER_ZERO_FONT_CSS =
  'foreignObject>div{all:initial!important;box-sizing:border-box!important;' +
  'display:block!important;overflow:visible!important;' +
  'margin:0!important;border:none!important;padding:0!important;' +
  'vertical-align:top!important;line-height:0!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;' +
  'font-size:0!important}'

/** h2 capture.js XHTML wrapper reset (line-height:0, no font-size:0). */
export const H2_CONTAINER_RESET_CSS =
  'foreignObject>div{display:block!important;overflow:visible!important;' +
  'margin:0!important;border:none!important;padding:0!important;' +
  'vertical-align:top!important;line-height:0!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

export { H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

export const H2_CAPTURE_PLUS_CONTAINER_CSS =
  H2_CAPTURE_FO_NORMALIZE_CSS + H2_CONTAINER_RESET_CSS

/** Global FO structural CSS injected after capture via snapdom wrap (lab only). */
export const POST_CAPTURE_FO_CSS =
  'foreignObject *{box-sizing:border-box!important;' +
  'min-width:0!important;min-height:0!important}'

/** @typedef {import('./fo-fix-recipes.js').FoFixRecipe} FoFixRecipe */

/** @type {(() => void)[]} */
const uninstallStack = []

/** @type {FoFixRecipe | null} */
let activeRecipe = null

/**
 * @param {string} svgText
 * @param {string} cssBlock
 */
export function injectFoCssIntoSvg(svgText, cssBlock) {
  if (!cssBlock) return svgText
  if (/<style[^>]*type=["']text\/css["']/i.test(svgText)) {
    return svgText.replace(
      /<style([^>]*)type=["']text\/css["']([^>]*)>/i,
      (m) => `${m}${cssBlock}`,
    )
  }
  return svgText.replace(
    /<svg\b([^>]*)>/i,
    (m) => `${m}<style type="text/css">${cssBlock}</style>`,
  )
}

/**
 * @param {string} dataUrl
 */
function svgFromDataUrl(dataUrl) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (dataUrl.startsWith(prefix)) return decodeURIComponent(dataUrl.slice(prefix.length))
  const comma = dataUrl.indexOf(',')
  if (comma < 0) return dataUrl
  const meta = dataUrl.slice(0, comma)
  const body = dataUrl.slice(comma + 1)
  if (meta.includes(';base64')) {
    return atob(body)
  }
  return decodeURIComponent(body)
}

/**
 * @param {string} svgText
 */
function svgToDataUrl(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}

/**
 * @param {string} url
 * @param {string} cssBlock
 */
function injectFoCssIntoDataUrl(url, cssBlock) {
  if (!cssBlock || typeof url !== 'string') return url
  if (!url.startsWith('data:image/svg+xml')) return url
  const svg = injectFoCssIntoSvg(svgFromDataUrl(url), cssBlock)
  return svgToDataUrl(svg)
}

/**
 * @param {object} result
 * @param {string} cssBlock
 */
function wrapSnapResultToRaw(result, cssBlock) {
  if (!cssBlock || !result) return
  const origToRaw =
    typeof result.toRaw === 'function' ? result.toRaw.bind(result) : null
  if (origToRaw) {
    result.toRaw = () => injectFoCssIntoDataUrl(origToRaw(), cssBlock)
  }
  if (typeof result.url === 'string') {
    const rawUrl = result.url
    try {
      Object.defineProperty(result, 'url', {
        get: () => injectFoCssIntoDataUrl(rawUrl, cssBlock),
        configurable: true,
      })
    } catch {
      /* non-blocking */
    }
  }
}

/**
 * @param {string} cssBlock
 */
function installCaptureCssWrap(cssBlock) {
  const origSnap = window.snapdom
  if (typeof origSnap !== 'function') return

  /** @param {HTMLElement} el @param {object} [opts] */
  async function wrappedSnap(el, opts) {
    const result = await origSnap(el, opts)
    wrapSnapResultToRaw(result, cssBlock)
    return result
  }
  Object.assign(wrappedSnap, origSnap)
  window.snapdom = wrappedSnap
  uninstallStack.push(() => {
    window.snapdom = origSnap
  })
}

function installDecodeIntervalPrototype() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return

  proto.decode = async function decodeIntervalPatched() {
    await origDecode.call(this)
    await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
    return origDecode.call(this)
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installDrawImagePixelated() {
  const proto = CanvasRenderingContext2D.prototype
  const origDrawImage = proto.drawImage
  proto.drawImage = function drawImagePixelatedPatched(...args) {
    const prev = this.imageSmoothingEnabled
    this.imageSmoothingEnabled = false
    try {
      return origDrawImage.apply(this, args)
    } finally {
      this.imageSmoothingEnabled = prev
    }
  }
  uninstallStack.push(() => {
    proto.drawImage = origDrawImage
  })
}

function installDecodeWrap() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  proto.decode = async function decodeWrapPatched() {
    try {
      return await origDecode.call(this)
    } catch {
      return undefined
    }
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installDecodeThenInterval() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  proto.decode = async function decodeThenIntervalPatched() {
    await origDecode.call(this)
    await new Promise((resolve) => setTimeout(resolve, DECODE_INTERVAL_MS))
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installImageDecodeTwice() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  proto.decode = async function decodeTwicePatched() {
    await origDecode.call(this)
    return origDecode.call(this)
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installFontsReadyBeforeDecode() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  proto.decode = async function fontsReadyDecodePatched() {
    try {
      await document.fonts.ready
    } catch {
      /* non-blocking */
    }
    return origDecode.call(this)
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installDoubleRafBeforeDecode() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  const waitRaf = () => new Promise((resolve) => requestAnimationFrame(resolve))
  proto.decode = async function rafBeforeDecodePatched() {
    await waitRaf()
    await waitRaf()
    return origDecode.call(this)
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

function installDrawImageFloorDestY() {
  const proto = CanvasRenderingContext2D.prototype
  const origDrawImage = proto.drawImage
  proto.drawImage = function drawImageFloorDestYPatched(...args) {
    if (args.length >= 9 && typeof args[6] === 'number') {
      args[6] = Math.floor(args[6])
    }
    return origDrawImage.apply(this, args)
  }
  uninstallStack.push(() => {
    proto.drawImage = origDrawImage
  })
}

function installMeasureTextBeforeDrawImage() {
  const proto = CanvasRenderingContext2D.prototype
  const origDrawImage = proto.drawImage
  proto.drawImage = function measureTextPrimeDrawImagePatched(...args) {
    try {
      const bodyCs = getComputedStyle(document.body)
      const fs = parseFloat(bodyCs.fontSize) || 16
      this.font = `${bodyCs.fontStyle} ${bodyCs.fontWeight} ${fs}px ${bodyCs.fontFamily}`
      this.measureText('Mg')
    } catch {
      /* non-blocking */
    }
    return origDrawImage.apply(this, args)
  }
  uninstallStack.push(() => {
    proto.drawImage = origDrawImage
  })
}

function installCreateImageBitmapResizeHigh() {
  const orig = window.createImageBitmap
  if (typeof orig !== 'function') return
  window.createImageBitmap = async function createImageBitmapHighPatched(...args) {
    const next = patchCreateImageBitmapArgs(args, { resizeQuality: 'high' })
    // @ts-ignore - runtime overload forwarding
    return orig.apply(window, next)
  }
  uninstallStack.push(() => {
    window.createImageBitmap = orig
  })
}

/**
 * Patch createImageBitmap(...) args by merging options into last arg (or appending an options object).
 * Works for both overloads:
 * - (source, options?)
 * - (source, sx, sy, sw, sh, options?)
 * @param {any[]} args
 * @param {Record<string, any>} patch
 */
function patchCreateImageBitmapArgs(args, patch) {
  const next = [...args]
  const last = next[next.length - 1]
  const lastIsOpts = last && typeof last === 'object' && !(last instanceof Blob) && !(last instanceof ImageData)
  if (lastIsOpts) {
    next[next.length - 1] = { ...last, ...patch }
    return next
  }
  // If caller used the 6-arg crop overload without options (length===5), append options.
  next.push({ ...patch })
  return next
}

/** @param {'low'|'medium'|'high'|'pixelated'} resizeQuality */
function installCreateImageBitmapResizeQuality(resizeQuality) {
  const orig = window.createImageBitmap
  if (typeof orig !== 'function') return
  window.createImageBitmap = async function createImageBitmapResizeQualityPatched(...args) {
    const next = patchCreateImageBitmapArgs(args, { resizeQuality })
    // @ts-ignore - runtime overload forwarding
    return orig.apply(window, next)
  }
  uninstallStack.push(() => {
    window.createImageBitmap = orig
  })
}

/** @param {'default'|'none'|'premultiply'} premultiplyAlpha */
function installCreateImageBitmapPremultiplyAlpha(premultiplyAlpha) {
  const orig = window.createImageBitmap
  if (typeof orig !== 'function') return
  window.createImageBitmap = async function createImageBitmapPremulPatched(...args) {
    const next = patchCreateImageBitmapArgs(args, { premultiplyAlpha })
    // @ts-ignore - runtime overload forwarding
    return orig.apply(window, next)
  }
  uninstallStack.push(() => {
    window.createImageBitmap = orig
  })
}

/**
 * @param {{ resizeQuality?: 'low'|'medium'|'high'|'pixelated', premultiplyAlpha?: 'default'|'none'|'premultiply' }} opts
 */
function installCreateImageBitmapOptions(opts) {
  const orig = window.createImageBitmap
  if (typeof orig !== 'function') return
  window.createImageBitmap = async function createImageBitmapOptionsPatched(...args) {
    const next = patchCreateImageBitmapArgs(args, opts)
    // @ts-ignore - runtime overload forwarding
    return orig.apply(window, next)
  }
  uninstallStack.push(() => {
    window.createImageBitmap = orig
  })
}

/** tc: round all numeric drawImage args after the image source (lab raster / toCanvas probe). */
function installDrawImageRoundAll() {
  const proto = CanvasRenderingContext2D.prototype
  const origDrawImage = proto.drawImage
  proto.drawImage = function drawImageRoundAllPatched(...args) {
    const next = args.map((a, i) =>
      i > 0 && typeof a === 'number' ? Math.round(a) : a,
    )
    return origDrawImage.apply(this, next)
  }
  uninstallStack.push(() => {
    proto.drawImage = origDrawImage
  })
}

/** tc: Safari #394-style double-RAF after img.decode before raster draw (product toCanvas parity). */
function installDecodeSafariRaf() {
  const proto = HTMLImageElement.prototype
  const origDecode = proto.decode
  if (typeof origDecode !== 'function') return
  proto.decode = async function decodeSafariRafPatched() {
    await origDecode.call(this)
    const wasInDoc = this.isConnected
    if (!wasInDoc) {
      this.style.cssText =
        'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
      document.body.appendChild(this)
    }
    try {
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      )
    } finally {
      if (!wasInDoc) {
        try {
          this.remove()
        } catch {
          /* non-blocking */
        }
      }
    }
  }
  uninstallStack.push(() => {
    proto.decode = origDecode
  })
}

/** tc: ceil canvas backing-store width/height on assignment (HiDPI grid snap probe). */
function installCanvasBackingCeil() {
  const proto = HTMLCanvasElement.prototype
  const descW = Object.getOwnPropertyDescriptor(proto, 'width')
  const descH = Object.getOwnPropertyDescriptor(proto, 'height')
  if (!descW?.set || !descH?.set) return
  Object.defineProperty(proto, 'width', {
    ...descW,
    set(v) {
      descW.set.call(this, Math.max(1, Math.ceil(Number(v) || 1)))
    },
  })
  Object.defineProperty(proto, 'height', {
    ...descH,
    set(v) {
      descH.set.call(this, Math.max(1, Math.ceil(Number(v) || 1)))
    },
  })
  uninstallStack.push(() => {
    Object.defineProperty(proto, 'width', descW)
    Object.defineProperty(proto, 'height', descH)
  })
}

/**
 * Wave-4: OffscreenCanvas / bitmaprenderer lab draw hooks.
 * These patches are lab-only and intentionally main-thread (no workers).
 *
 * @typedef {{
 *   pixelated?: boolean,
 *   resetTransform?: boolean,
 *   willReadFrequently?: boolean,
 *   backingSnap?: 'none' | 'floor' | 'ceil',
 *   domTwoStage?: boolean,
 *   domFallback?: boolean,
 * }} LabW4OffscreenOpts
 */

/** @param {number} px @param {'none'|'floor'|'ceil'|undefined} mode */
function snapPx(px, mode) {
  const n = Number(px) || 1
  if (mode === 'floor') return Math.max(1, Math.floor(n))
  if (mode === 'ceil') return Math.max(1, Math.ceil(n))
  return Math.max(1, n)
}

/**
 * @param {CanvasRenderingContext2D} dest
 * @param {HTMLImageElement|CanvasImageSource} src
 * @param {number} dw
 * @param {number} dh
 * @param {LabW4OffscreenOpts} opts
 */
function offscreenTransferBlit(dest, src, dw, dh, opts) {
  const w = snapPx(dest.canvas?.width ?? dw, opts.backingSnap)
  const h = snapPx(dest.canvas?.height ?? dh, opts.backingSnap)

  const canOffscreen = typeof OffscreenCanvas !== 'undefined'
  const useDom =
    !canOffscreen && opts.domFallback

  /** @type {OffscreenCanvas | HTMLCanvasElement} */
  let off
  /** @type {OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D | null} */
  let octx
  if (useDom) {
    off = document.createElement('canvas')
    off.width = w
    off.height = h
    octx = off.getContext('2d', opts.willReadFrequently ? { willReadFrequently: true } : undefined)
  } else {
    if (!canOffscreen) return false
    off = new OffscreenCanvas(w, h)
    octx = off.getContext('2d', opts.willReadFrequently ? { willReadFrequently: true } : undefined)
  }
  if (!octx) return false
  if (opts.pixelated) octx.imageSmoothingEnabled = false

  octx.drawImage(src, 0, 0, w, h)

  const prev = opts.resetTransform && typeof dest.getTransform === 'function' ? dest.getTransform() : null
  if (opts.resetTransform && typeof dest.setTransform === 'function') {
    dest.setTransform(1, 0, 0, 1, 0, 0)
  }

  if (opts.domTwoStage) {
    const stage = document.createElement('canvas')
    stage.width = w
    stage.height = h
    const sctx = stage.getContext('2d')
    if (!sctx) return false
    if (opts.pixelated) sctx.imageSmoothingEnabled = false
    if (off instanceof OffscreenCanvas && typeof off.transferToImageBitmap === 'function') {
      const bmp = off.transferToImageBitmap()
      sctx.drawImage(bmp, 0, 0)
      bmp.close()
    } else {
      sctx.drawImage(/** @type {HTMLCanvasElement} */ (off), 0, 0)
    }
    dest.drawImage(stage, 0, 0, dw, dh)
  } else if (off instanceof OffscreenCanvas && typeof off.transferToImageBitmap === 'function') {
    const bmp = off.transferToImageBitmap()
    dest.drawImage(bmp, 0, 0)
    bmp.close()
  } else {
    dest.drawImage(/** @type {HTMLCanvasElement} */ (off), 0, 0)
  }

  if (prev && typeof dest.setTransform === 'function') dest.setTransform(prev)
  return true
}

/**
 * Patch 5-arg drawImage(img, 0,0,dw,dh) to blit via OffscreenCanvas transferToImageBitmap.
 * @param {LabW4OffscreenOpts} opts
 */
function installW4OffscreenTransfer(opts) {
  const proto = CanvasRenderingContext2D.prototype
  const orig = proto.drawImage
  proto.drawImage = function w4OffscreenTransferPatched(...args) {
    if (
      args.length === 5 &&
      args[0] instanceof HTMLImageElement &&
      args[1] === 0 &&
      args[2] === 0 &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number'
    ) {
      const ok = offscreenTransferBlit(
        this,
        /** @type {HTMLImageElement} */ (args[0]),
        args[3],
        args[4],
        opts,
      )
      if (ok) return
    }
    return orig.apply(this, args)
  }
  uninstallStack.push(() => {
    proto.drawImage = orig
  })
}

/**
 * Wave-4 bitmaprenderer transfer: createImageBitmap(img) after decode, then
 * bitmaprenderer transferFromImageBitmap into same-size staging canvas.
 * @param {{ then2d?: boolean }} opts
 */
function installW4BitmapRendererTransfer(opts = {}) {
  const imgProto = HTMLImageElement.prototype
  const origDecode = imgProto.decode
  if (typeof origDecode !== 'function') return

  imgProto.decode = async function w4BitmaprendererDecodePatched() {
    await origDecode.call(this)
    if (typeof createImageBitmap !== 'function') return
    try {
      this.__w4Bitmap = await createImageBitmap(this)
    } catch {
      /* non-blocking */
    }
  }

  const ctxProto = CanvasRenderingContext2D.prototype
  const origDrawImage = ctxProto.drawImage
  ctxProto.drawImage = function w4BitmaprendererDrawPatched(...args) {
    if (
      args.length === 5 &&
      args[0] instanceof HTMLImageElement &&
      args[0].__w4Bitmap &&
      this.canvas
    ) {
      const bmp = args[0].__w4Bitmap
      const stage = document.createElement('canvas')
      stage.width = this.canvas.width
      stage.height = this.canvas.height
      const br = stage.getContext('bitmaprenderer')
      if (br?.transferFromImageBitmap) {
        br.transferFromImageBitmap(bmp)
        if (opts.then2d) {
          return origDrawImage.call(
            this,
            stage,
            0,
            0,
            /** @type {number} */ (args[3]),
            /** @type {number} */ (args[4]),
          )
        }
        const prev = typeof this.getTransform === 'function' ? this.getTransform() : null
        if (typeof this.setTransform === 'function') {
          this.setTransform(1, 0, 0, 1, 0, 0)
        }
        try {
          return origDrawImage.call(this, stage, 0, 0)
        } finally {
          if (prev && typeof this.setTransform === 'function') this.setTransform(prev)
        }
      }
    }
    return origDrawImage.apply(this, args)
  }

  uninstallStack.push(() => {
    imgProto.decode = origDecode
    ctxProto.drawImage = origDrawImage
  })
}

/** Wave-4: after decode, draw to OffscreenCanvas then createImageBitmap(off) for final drawImage. */
function installW4OffscreenCreateImageBitmap() {
  const imgProto = HTMLImageElement.prototype
  const origDecode = imgProto.decode
  if (typeof origDecode !== 'function') return

  imgProto.decode = async function w4OffscreenCreateImageBitmapDecodePatched() {
    await origDecode.call(this)
    if (typeof OffscreenCanvas === 'undefined' || typeof createImageBitmap !== 'function') return
    const w = Math.max(1, this.naturalWidth || 1)
    const h = Math.max(1, this.naturalHeight || 1)
    const off = new OffscreenCanvas(w, h)
    const octx = off.getContext('2d')
    if (!octx) return
    octx.drawImage(this, 0, 0)
    try {
      this.__w4OffBmp = await createImageBitmap(off)
    } catch {
      /* non-blocking */
    }
  }

  const ctxProto = CanvasRenderingContext2D.prototype
  const origDrawImage = ctxProto.drawImage
  ctxProto.drawImage = function w4OffscreenCreateImageBitmapDrawPatched(...args) {
    if (args[0] instanceof HTMLImageElement && args[0].__w4OffBmp) {
      args[0] = args[0].__w4OffBmp
    }
    return origDrawImage.apply(this, args)
  }

  uninstallStack.push(() => {
    imgProto.decode = origDecode
    ctxProto.drawImage = origDrawImage
  })
}

/** Inject h2 internal FO style tag with bare `*` selector (inside foreignObject>div). */
export function h2InjectFoInternalStarStyle(svgText) {
  const block = `<style type="text/css">${H2_FO_INTERNAL_STAR_CSS}</style>`
  return svgText.replace(
    /<foreignObject([^>]*)>[\s\S]*?<div([^>]*)>/i,
    (full, foAttrs, divAttrs) => {
      if (full.includes(H2_FO_INTERNAL_STAR_CSS.slice(0, 20))) return full
      return `<foreignObject${foAttrs}><div${divAttrs}>${block}`
    },
  )
}

/** h2-1: FO at origin, 100% size; floor viewBox min x/y; stash fractional shift on root data attrs. */
export function h2FoPercentIntViewbox(svgText) {
  let out = svgText.replace(
    /<foreignObject(\s[^>]*)?>/gi,
    '<foreignObject x="0" y="0" width="100%" height="100%">',
  )
  return out.replace(/<svg(\s[^>]*)>/i, (full, attrs) => {
    const vbMatch = attrs.match(/\bviewBox=["']([^"']+)["']/i)
    if (!vbMatch) return full
    const parts = vbMatch[1].trim().split(/\s+/).map(Number)
    if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return full
    const rawMinX = parts[0]
    const rawMinY = parts[1]
    const intX = Math.floor(rawMinX)
    const intY = Math.floor(rawMinY)
    const fracX = Number((rawMinX - intX).toFixed(4))
    const fracY = Number((rawMinY - intY).toFixed(4))
    const vb = `${intX} ${intY} ${parts[2]} ${parts[3]}`
    let next = attrs.replace(/\bviewBox=["'][^"']+["']/i, `viewBox="${vb}"`)
    next += ` data-h2-frac-x="${fracX}" data-h2-frac-y="${fracY}"`
    return `<svg${next}>`
  })
}

/** h2 capture.js svgFooter comment (cache-bust probe). */
export function h2SvgFooterComment(svgText) {
  const tag = `<!-- snapdom-id:${Date.now()} -->`
  if (svgText.includes('snapdom-id:')) return svgText
  return svgText.replace(/<\/svg>\s*$/i, `${tag}</svg>`)
}

/**
 * @param {Element} el
 */
function isFlexOrGridItem(el) {
  const p = el.parentElement
  if (!p) return false
  const pd = getComputedStyle(p).display || ''
  return pd.includes('flex') || pd.includes('grid')
}

/**
 * @param {Element} el
 * @param {CSSStyleDeclaration} style
 */
function effectiveCrossAlign(el, style) {
  const self = style.alignSelf || 'auto'
  if (self !== 'auto' && self !== 'normal') return self
  const p = el.parentElement
  if (!p) return 'stretch'
  return getComputedStyle(p).alignItems || 'normal'
}

/**
 * @param {Element} el
 * @param {CSSStyleDeclaration} style
 */
function isFlexCrossStretchItem(el, style) {
  if (!isFlexOrGridItem(el)) return false
  const cross = effectiveCrossAlign(el, style)
  if (cross === 'stretch') return true
  if (cross === 'normal') {
    const p = el.parentElement
    const pd = p ? getComputedStyle(p).display || '' : ''
    return pd.includes('flex')
  }
  return false
}

function usesNormalLineHeight(style) {
  if (style.lineHeight === 'normal') return true
  return style.getPropertyValue('line-height') === 'normal'
}

/**
 * @param {Element} el
 * @param {CSSStyleDeclaration} style
 */
function measureNormalLineHeightPx(el, style) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  const text = (el.textContent || '').trim()
  if (!text) return null
  const probe = document.createElement('span')
  probe.textContent = text
  probe.style.cssText =
    'position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;' +
    'display:inline-block;margin:0;padding:0;border:0;line-height:normal;white-space:nowrap;'
  for (const prop of [
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'font-stretch',
    'font-variant',
    'letter-spacing',
    'word-spacing',
    'text-transform',
  ]) {
    probe.style.setProperty(prop, style.getPropertyValue(prop))
  }
  document.documentElement.appendChild(probe)
  const h = probe.getBoundingClientRect().height
  probe.remove()
  return h > 0 ? h : null
}

/**
 * @param {Element} el
 * @param {CSSStyleDeclaration} style
 */
function resolveLineHeightPxForCapture(el, style) {
  if (!(el instanceof Element) || el.childElementCount > 0) return null
  if (!(el.textContent || '').trim()) return null
  const rect = el.getBoundingClientRect()
  const pt = parseFloat(style.paddingTop) || 0
  const pb = parseFloat(style.paddingBottom) || 0
  const bt = parseFloat(style.borderTopWidth) || 0
  const bb = parseFloat(style.borderBottomWidth) || 0
  const h = rect.height - pt - pb - bt - bb
  if (h <= 0 || el.scrollHeight > el.clientHeight + 1.5) return null
  return h
}

/** @param {number} px */
export function formatLineHeightPx(px) {
  if (!Number.isFinite(px)) return 'normal'
  return `${parseFloat(px.toFixed(6))}px`
}

/**
 * @param {string} styleAttr
 * @param {Record<string, string>} patch
 */
function mergeInlineStyleAttr(styleAttr, patch) {
  const map = new Map()
  const body = (styleAttr || '').replace(/^style=["']|["']$/g, '')
  for (const chunk of body.split(';')) {
    const idx = chunk.indexOf(':')
    if (idx < 0) continue
    const k = chunk.slice(0, idx).trim()
    const v = chunk.slice(idx + 1).trim()
    if (k) map.set(k, v)
  }
  for (const [k, v] of Object.entries(patch)) map.set(k, v)
  const merged = [...map.entries()].map(([k, v]) => `${k}:${v}`).join(';')
  return `style="${merged}"`
}

/**
 * @param {string} openTag
 * @param {Record<string, string>} patch
 */
function patchOpenTagStyle(openTag, patch) {
  const styleMatch = openTag.match(/\sstyle=["']([^"']*)["']/i)
  if (styleMatch) {
    const merged = mergeInlineStyleAttr(`style="${styleMatch[1]}"`, patch)
    return openTag.replace(/\sstyle=["'][^"']*["']/i, ` ${merged}`)
  }
  const inner = Object.entries(patch)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')
  return openTag.replace(/>$/, ` style="${inner}">`)
}

/**
 * Walk live text leaves in document order; patch matching FO text leaves in SVG.
 * @param {string} svgText
 * @param {HTMLElement} liveRoot
 * @param {(liveEl: Element, liveCs: CSSStyleDeclaration) => Record<string, string> | null} styleForLeaf
 */
export function patchFoTextLeavesFromLive(svgText, liveRoot, styleForLeaf) {
  /** @type {Element[]} */
  const liveLeaves = []
  for (const el of liveRoot.querySelectorAll('*')) {
    if (el.childElementCount > 0) continue
    if (!(el.textContent || '').trim()) continue
    liveLeaves.push(el)
  }
  let leafIdx = 0
  const re = /(<([a-z][a-z0-9]*)[^>]*>)([^<]+)(<\/\2>)/gi
  return svgText.replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, (foBlock) =>
    foBlock.replace(re, (full, open, _tag, text, close) => {
      if (!String(text).trim()) return full
      const liveEl = liveLeaves[leafIdx++]
      if (!liveEl) return full
      const cs = getComputedStyle(liveEl)
      const patch = styleForLeaf(liveEl, cs)
      if (!patch || !Object.keys(patch).length) return full
      return patchOpenTagStyle(open, patch) + text + close
    }),
  )
}

/** blh-w1: line-height:normal on FO text leaves (live order → SVG leaves). */
export function blhW1LhNormalLeaf(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, () => ({ 'line-height': 'normal' }))
}

/** blh-w1: line-height:1 on FO text leaves. */
export function blhW1Lh1Leaf(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, () => ({ 'line-height': '1' }))
}

/** blh-w1: line-height equal to live computed font-size (structural 1em px). */
export function blhW1LhFontsizePx(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (_el, cs) => {
    const fs = cs.fontSize
    if (!fs) return null
    return { 'line-height': fs }
  })
}

/** blh-w1: vertical-align:baseline on FO text leaves. */
export function blhW1VerticalAlignBaseline(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, () => ({ 'vertical-align': 'baseline' }))
}

/** h2 styles.js: pin line-height from layout / normal probe on text leaves. */
export function h2PinLineHeightFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, style) => {
    if (isFlexCrossStretchItem(el, style) && usesNormalLineHeight(style)) {
      const px = measureNormalLineHeightPx(el, style)
      return px != null ? { 'line-height': formatLineHeightPx(px) } : null
    }
    if (!isFlexCrossStretchItem(el, style)) {
      const lhVal = style.getPropertyValue('line-height')
      const isRelative = lhVal && !lhVal.endsWith('px') && lhVal !== '0'
      if (usesNormalLineHeight(style) || isRelative) {
        const px = resolveLineHeightPxForCapture(el, style)
        return px != null ? { 'line-height': formatLineHeightPx(px) } : null
      }
    }
    return null
  })
}

/**
 * Pin line-height from live content metrics (not flex-stretched border-box height).
 * Stretch cross-axis leaves: normal line-height probe; others: content line box px.
 */
export function labPinContentLineHeightFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, style) => {
    if (isFlexCrossStretchItem(el, style)) {
      const px = measureNormalLineHeightPx(el, style)
      return px != null ? { 'line-height': formatLineHeightPx(px) } : null
    }
    const px = resolveLineHeightPxForCapture(el, style)
    if (px != null) return { 'line-height': formatLineHeightPx(px) }
    const lhVal = style.getPropertyValue('line-height')
    const n = parseFloat(lhVal)
    if (lhVal.endsWith('px') && Number.isFinite(n) && n > 0) {
      return { 'line-height': formatLineHeightPx(n) }
    }
    return null
  })
}

/** h2 styles.js: pin border-box width from getBoundingClientRect on text leaves. */
export function h2PinWidthFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el) => {
    const w = el.getBoundingClientRect().width
    if (!Number.isFinite(w) || w <= 0) return null
    return { width: formatLineHeightPx(w) }
  })
}

/** h2 isFlexCrossStretchTextLeaf inline overrides. */
export function h2FlexStretchLeafFromLive(svgText, liveRoot) {
  return patchFoTextLeavesFromLive(svgText, liveRoot, (el, style) => {
    if (!isFlexCrossStretchItem(el, style) || !usesNormalLineHeight(style)) return null
    const px = measureNormalLineHeightPx(el, style)
    /** @type {Record<string, string>} */
    const patch = {}
    if (px != null) patch['line-height'] = formatLineHeightPx(px)
    const selfAlign = style.alignSelf || 'auto'
    if (selfAlign === 'auto' || selfAlign === 'normal' || selfAlign === 'stretch') {
      patch['align-self'] = 'flex-start'
    }
    patch.height = 'auto'
    patch['min-height'] = 'auto'
    return patch
  })
}

/** Stretch-leaf cross-axis pin then live line-height pin on FO text leaves. */
export function h2PinLhFlexStretchLeafFromLive(svgText, liveRoot) {
  return h2PinLineHeightFromLive(h2FlexStretchLeafFromLive(svgText, liveRoot), liveRoot)
}

/** Live width pin then live line-height pin on FO text leaves. */
export function h2PinWidthLineHeightFromLive(svgText, liveRoot) {
  return h2PinLineHeightFromLive(h2PinWidthFromLive(svgText, liveRoot), liveRoot)
}

/** Stretch-leaf cross-axis pin, live width pin, then live line-height pin on FO text leaves. */
export function h2PinLhStretchWidthFromLive(svgText, liveRoot) {
  return h2PinLineHeightFromLive(
    h2PinWidthFromLive(h2FlexStretchLeafFromLive(svgText, liveRoot), liveRoot),
    liveRoot,
  )
}

/** h2 container lang on FO>div. */
export function h2ContainerLang(svgText) {
  const lang = document.documentElement.lang || 'en'
  return svgText.replace(
    /(<div)(\s[^>]*xmlns=["']http:\/\/www\.w3\.org\/1999\/xhtml["'][^>]*)(>)/gi,
    (full, open, attrs, close) => {
      if (/\blang=["']/i.test(attrs)) return full
      return `${open}${attrs} lang="${lang}"${close}`
    },
  )
}

/**
 * Parse h2-1 fractional viewBox shift from meta or serialized SVG data attrs.
 * @param {object} [meta]
 * @param {string} [url]
 */
export function parseH2ViewBoxFrac(meta, url) {
  if (meta && Number.isFinite(meta.fracX)) {
    return { fracX: meta.fracX, fracY: Number.isFinite(meta.fracY) ? meta.fracY : 0 }
  }
  let svg = ''
  if (typeof url === 'string' && url.startsWith('data:image/svg+xml')) {
    try {
      svg = svgFromDataUrl(url)
    } catch {
      svg = ''
    }
  }
  const fx = svg.match(/\bdata-h2-frac-x=["']([\d.]+)["']/i)?.[1]
  const fy = svg.match(/\bdata-h2-frac-y=["']([\d.]+)["']/i)?.[1]
  if (fx != null) {
    return { fracX: parseFloat(fx) || 0, fracY: parseFloat(fy) || 0 }
  }
  const vb = svg.match(/\bviewBox=["']([^"']+)["']/i)?.[1]
  if (vb) {
    const parts = vb.trim().split(/\s+/).map(Number)
    if (parts.length === 4) {
      return {
        fracX: parts[0] - Math.floor(parts[0]),
        fracY: parts[1] - Math.floor(parts[1]),
      }
    }
  }
  return { fracX: 0, fracY: 0 }
}

/**
 * @param {string} svgText
 * @param {string} patch
 * @param {HTMLElement} [liveRoot]
 */
export function applyH2RadicalSvgPatch(svgText, patch, liveRoot) {
  switch (patch) {
    case 'h2-fo-internal-star-normalize':
      return h2InjectFoInternalStarStyle(svgText)
    case 'h2-fo-percent-int-viewbox':
      return h2FoPercentIntViewbox(svgText)
    case 'h2-svg-footer-comment':
      return h2SvgFooterComment(svgText)
    case 'h2-pin-line-height-from-live':
      return liveRoot ? h2PinLineHeightFromLive(svgText, liveRoot) : svgText
    case 'h2-pin-width-from-live':
      return liveRoot ? h2PinWidthFromLive(svgText, liveRoot) : svgText
    case 'h2-flex-stretch-leaf-from-live':
      return liveRoot ? h2FlexStretchLeafFromLive(svgText, liveRoot) : svgText
    case 'h2-pin-lh-flex-stretch-leaf-from-live':
      return liveRoot ? h2PinLhFlexStretchLeafFromLive(svgText, liveRoot) : svgText
    case 'h2-pin-width-line-height-from-live':
      return liveRoot ? h2PinWidthLineHeightFromLive(svgText, liveRoot) : svgText
    case 'h2-pin-lh-stretch-width-from-live':
      return liveRoot ? h2PinLhStretchWidthFromLive(svgText, liveRoot) : svgText
    case 'h2-container-lang':
      return h2ContainerLang(svgText)
    case 'blh-w1-lh-normal-leaf':
      return liveRoot ? blhW1LhNormalLeaf(svgText, liveRoot) : svgText
    case 'blh-w1-lh-1-leaf':
      return liveRoot ? blhW1Lh1Leaf(svgText, liveRoot) : svgText
    case 'blh-w1-lh-fontsize-px':
      return liveRoot ? blhW1LhFontsizePx(svgText, liveRoot) : svgText
    case 'blh-w1-vertical-align-baseline':
      return liveRoot ? blhW1VerticalAlignBaseline(svgText, liveRoot) : svgText
    default:
      return svgText
  }
}

/** Wave 9: 40 lab-toCanvas monkeypatch probes (tc-lab-w9-mp-001..040). */
const W9_MP_SPECS = [
  // drawImage rounding / filtering
  { id: 'tc-lab-w9-mp-001', install: () => installDrawImageRoundAll() },
  { id: 'tc-lab-w9-mp-002', install: () => installDrawImageCeilAll() },
  { id: 'tc-lab-w9-mp-003', install: () => installDrawImageFloorDestY() },
  { id: 'tc-lab-w9-mp-004', install: () => installDrawImagePixelated() },
  { id: 'tc-lab-w9-mp-005', install: () => installCtxTransformResetBeforeDrawImage() },
  { id: 'tc-lab-w9-mp-006', install: () => installMeasureTextBeforeDrawImage() },

  // decode / timing
  { id: 'tc-lab-w9-mp-007', install: () => installDecodeIntervalPrototype() },
  { id: 'tc-lab-w9-mp-008', install: () => installDecodeWrap() },
  { id: 'tc-lab-w9-mp-009', install: () => installDecodeThenInterval() },
  { id: 'tc-lab-w9-mp-010', install: () => installDecodeSafariRaf() },
  { id: 'tc-lab-w9-mp-011', install: () => installImageDecodeTwice() },

  // canvas backing store
  { id: 'tc-lab-w9-mp-012', install: () => installCanvasBackingCeil() },
  { id: 'tc-lab-w9-mp-013', install: () => installCanvasBackingFloor() },
  { id: 'tc-lab-w9-mp-014', install: () => installCanvasBackingRound() },

  // createImageBitmap
  { id: 'tc-lab-w9-mp-015', install: () => installCreateImageBitmapResizeHigh() },

  // lab draw mechanisms
  { id: 'tc-lab-w9-mp-016', install: () => installLabDrawDeviceGridFloor() },
  { id: 'tc-lab-w9-mp-017', install: () => installLabDrawH2FracDraw() },
  { id: 'tc-lab-w9-mp-018', install: () => installLabDrawTwoStage() },
  {
    id: 'tc-lab-w9-mp-019',
    install: () =>
      installLabDrawSupersampleDownscale({
        id: 'tc-lab-w9-mp-019',
        radicalOptions: { scaleMultiplier: 2 },
      }),
  },

  // lab ctx override knobs
  { id: 'tc-lab-w9-mp-020', install: () => installLabToCanvasCtx({ willReadFrequently: true }) },
  { id: 'tc-lab-w9-mp-021', install: () => installLabToCanvasCtx({ imageSmoothingEnabled: false }) },
  { id: 'tc-lab-w9-mp-022', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'low' }) },
  { id: 'tc-lab-w9-mp-023', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'medium' }) },
  { id: 'tc-lab-w9-mp-024', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'high' }) },
  { id: 'tc-lab-w9-mp-025', install: () => installLabToCanvasCtx({ resetTransformBeforeDraw: true }) },
  { id: 'tc-lab-w9-mp-026', install: () => installLabToCanvasCtx({ globalAlpha: 0.99 }) },
  { id: 'tc-lab-w9-mp-027', install: () => installLabToCanvasCtx({ globalAlpha: 0.5 }) },

  // timing hooks inside lab-toCanvas fork
  { id: 'tc-lab-w9-mp-028', install: () => installLabToCanvasTiming({ drawBefore: ['microtask'] }) },
  { id: 'tc-lab-w9-mp-029', install: () => installLabToCanvasTiming({ drawBefore: ['raf1'] }) },
  { id: 'tc-lab-w9-mp-030', install: () => installLabToCanvasTiming({ decodeAfter: ['raf2'] }) },
  { id: 'tc-lab-w9-mp-031', install: () => installLabToCanvasTiming({ decodeAfter: ['timeout16'] }) },
  {
    id: 'tc-lab-w9-mp-032',
    install: () =>
      installLabToCanvasTiming({
        decodeAfter: ['raf2', 'timeout0', 'microtask'],
        drawBefore: ['raf1', 'timeout16', 'idle'],
      }),
  },

  // combinations (still structural; no magic px)
  {
    id: 'tc-lab-w9-mp-033',
    install: () => {
      installDecodeIntervalPrototype()
      installCanvasBackingCeil()
    },
  },
  {
    id: 'tc-lab-w9-mp-034',
    install: () => {
      installDecodeSafariRaf()
      installDecodeThenInterval()
    },
  },
  {
    id: 'tc-lab-w9-mp-035',
    install: () => {
      installDrawImageRoundAll()
      installCtxTransformResetBeforeDrawImage()
    },
  },
  {
    id: 'tc-lab-w9-mp-036',
    install: () => {
      installDrawImagePixelated()
      installCanvasBackingRound()
    },
  },
  {
    id: 'tc-lab-w9-mp-037',
    install: () => {
      installCreateImageBitmapResizeHigh()
      installLabToCanvasCtx({ imageSmoothingEnabled: false })
    },
  },
  {
    id: 'tc-lab-w9-mp-038',
    install: () => {
      installLabDrawDeviceGridFloor()
      installCanvasBackingFloor()
    },
  },
  {
    id: 'tc-lab-w9-mp-039',
    install: () => {
      installDecodeWrap()
      installLabToCanvasTiming({ drawBefore: ['microtask'] })
    },
  },
  {
    id: 'tc-lab-w9-mp-040',
    install: () => {
      installImageDecodeTwice()
      installLabToCanvasTiming({ drawBefore: ['raf1'] })
    },
  },
]

/** Wave10: 50 lab-toCanvas monkeypatch probes (tc-lab-w10-mp-001..050). */
const W10_MP_SPECS = [
  // drawImage numeric rounding family
  { id: 'tc-lab-w10-mp-001', install: () => installDrawImageFloorAll() },
  { id: 'tc-lab-w10-mp-002', install: () => installDrawImageRoundDestRect() },
  { id: 'tc-lab-w10-mp-003', install: () => installDrawImageCeilDestRect() },
  { id: 'tc-lab-w10-mp-004', install: () => installDrawImageFloorDestRect() },
  { id: 'tc-lab-w10-mp-005', install: () => installDrawImageSmoothingHigh() },
  { id: 'tc-lab-w10-mp-006', install: () => installDrawImageAlphaOne() },
  { id: 'tc-lab-w10-mp-007', install: () => installDrawImagePixelated() },
  { id: 'tc-lab-w10-mp-008', install: () => installDrawImageRoundAll() },
  { id: 'tc-lab-w10-mp-009', install: () => installCtxTransformResetBeforeDrawImage() },
  { id: 'tc-lab-w10-mp-010', install: () => installMeasureTextBeforeDrawImage() },

  // decode / timing family
  { id: 'tc-lab-w10-mp-011', install: () => installDecodeIntervalPrototype() },
  { id: 'tc-lab-w10-mp-012', install: () => installDecodeWrap() },
  { id: 'tc-lab-w10-mp-013', install: () => installDecodeThenInterval() },
  { id: 'tc-lab-w10-mp-014', install: () => installDecodeSafariRaf() },
  { id: 'tc-lab-w10-mp-015', install: () => installImageDecodeTwice() },
  { id: 'tc-lab-w10-mp-016', install: () => installDecodeMicrotaskFlush() },
  { id: 'tc-lab-w10-mp-017', install: () => installFontsReadyBeforeDecode() },
  { id: 'tc-lab-w10-mp-018', install: () => installDoubleRafBeforeDecode() },

  // canvas sizing / backing store family
  { id: 'tc-lab-w10-mp-019', install: () => installCanvasBackingCeil() },
  { id: 'tc-lab-w10-mp-020', install: () => installCanvasBackingFloor() },
  { id: 'tc-lab-w10-mp-021', install: () => installCanvasBackingRound() },

  // createImageBitmap family
  { id: 'tc-lab-w10-mp-022', install: () => installCreateImageBitmapResizeHigh() },
  { id: 'tc-lab-w10-mp-023', install: () => installLabDrawCreateImageBitmap('high') },
  { id: 'tc-lab-w10-mp-024', install: () => installLabDrawCreateImageBitmap('pixelated') },

  // lab draw families
  { id: 'tc-lab-w10-mp-025', install: () => installLabDrawDeviceGridFloor() },
  { id: 'tc-lab-w10-mp-026', install: () => installLabDrawH2FracDraw() },
  { id: 'tc-lab-w10-mp-027', install: () => installLabDrawTwoStage() },
  {
    id: 'tc-lab-w10-mp-028',
    install: () =>
      installLabDrawSupersampleDownscale({
        id: 'tc-lab-w10-mp-028',
        radicalOptions: { scaleMultiplier: 2 },
      }),
  },

  // lab ctx overrides (structural knobs; no magic px)
  { id: 'tc-lab-w10-mp-029', install: () => installLabToCanvasCtx({ imageSmoothingEnabled: false }) },
  { id: 'tc-lab-w10-mp-030', install: () => installLabToCanvasCtx({ imageSmoothingEnabled: true }) },
  { id: 'tc-lab-w10-mp-031', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'low' }) },
  { id: 'tc-lab-w10-mp-032', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'medium' }) },
  { id: 'tc-lab-w10-mp-033', install: () => installLabToCanvasCtx({ imageSmoothingQuality: 'high' }) },
  { id: 'tc-lab-w10-mp-034', install: () => installLabToCanvasCtx({ willReadFrequently: true }) },
  { id: 'tc-lab-w10-mp-035', install: () => installLabToCanvasCtx({ resetTransformBeforeDraw: true }) },

  // combinations
  {
    id: 'tc-lab-w10-mp-036',
    install: () => {
      installDecodeIntervalPrototype()
      installCanvasBackingCeil()
    },
  },
  {
    id: 'tc-lab-w10-mp-037',
    install: () => {
      installFontsReadyBeforeDecode()
      installDecodeIntervalPrototype()
    },
  },
  {
    id: 'tc-lab-w10-mp-038',
    install: () => {
      installDecodeSafariRaf()
      installDecodeMicrotaskFlush()
    },
  },
  {
    id: 'tc-lab-w10-mp-039',
    install: () => {
      installDrawImageFloorAll()
      installCtxTransformResetBeforeDrawImage()
    },
  },
  {
    id: 'tc-lab-w10-mp-040',
    install: () => {
      installDrawImageRoundDestRect()
      installDrawImageSmoothingHigh()
    },
  },
  {
    id: 'tc-lab-w10-mp-041',
    install: () => {
      installDrawImageCeilDestRect()
      installDrawImageAlphaOne()
    },
  },
  {
    id: 'tc-lab-w10-mp-042',
    install: () => {
      installCreateImageBitmapResizeHigh()
      installDrawImageSmoothingHigh()
    },
  },
  {
    id: 'tc-lab-w10-mp-043',
    install: () => {
      installLabDrawTwoStage()
      installDecodeIntervalPrototype()
    },
  },
  {
    id: 'tc-lab-w10-mp-044',
    install: () => {
      installLabDrawDeviceGridFloor()
      installDrawImageFloorAll()
    },
  },
  {
    id: 'tc-lab-w10-mp-045',
    install: () => {
      installLabDrawH2FracDraw()
      installDrawImageRoundAll()
    },
  },

  // existing toCanvas lab transform knobs (wave6)
  { id: 'tc-lab-w10-mp-046', install: () => installLabW6DrawTransform('save-restore-draw') },
  { id: 'tc-lab-w10-mp-047', install: () => installLabW6DrawTransform('translate-half') },
  { id: 'tc-lab-w10-mp-048', install: () => installLabW6DrawTransform('translate-neg-half') },
  { id: 'tc-lab-w10-mp-049', install: () => installLabW6DrawTransform('aspect-matrix-fit') },
  { id: 'tc-lab-w10-mp-050', install: () => installLabW6DrawTransform('flip-x-center') },
]

/** @type {Record<string, { install: (recipe?: FoFixRecipe) => void }>} */
const PATCHES = {
  'capture-recipe-css': {
    install(recipe) {
      const css =
        recipe?.id === 'product-baseline'
          ? FO_BASELINE_CSS
          : recipe
            ? recipeCaptureCss(recipe)
            : FO_BASELINE_CSS
      installCaptureCssWrap(css)
    },
  },
  'h2-fo-normalize-full': {
    install() {
      installCaptureCssWrap(H2_CAPTURE_FO_NORMALIZE_CSS)
    },
  },
  'h2-fo-internal-star-capture': {
    install() {
      const css = H2_CAPTURE_FO_NORMALIZE_CSS + H2_FO_INTERNAL_STAR_CSS.replace(/\*/g, 'foreignObject *')
      installCaptureCssWrap(css)
    },
  },
  'h2-container-reset-capture': {
    install() {
      installCaptureCssWrap(H2_CONTAINER_RESET_CSS)
    },
  },
  'h2-full-plus-container-capture': {
    install() {
      installCaptureCssWrap(H2_CAPTURE_PLUS_CONTAINER_CSS)
    },
  },
  'h2-raster-normalize-capture': {
    install() {
      installCaptureCssWrap(H2_RASTER_NORMALIZE_CSS)
    },
  },
  'decode-interval-prototype': {
    install() {
      installDecodeIntervalPrototype()
    },
  },
  'draw-image-pixelated': {
    install() {
      installDrawImagePixelated()
    },
  },
  'decode-wrap': {
    install() {
      installDecodeWrap()
    },
  },
  'decode-interval-wrap': {
    install() {
      installDecodeThenInterval()
    },
  },
  'image-decode-twice': {
    install() {
      installImageDecodeTwice()
    },
  },
  'fonts-ready-delay': {
    install() {
      installFontsReadyBeforeDecode()
    },
  },
  'raf-before-draw': {
    install() {
      installDoubleRafBeforeDecode()
    },
  },
  'drawImage-wrap': {
    install() {
      installDrawImageFloorDestY()
    },
  },
  'measureText-prime': {
    install() {
      installMeasureTextBeforeDrawImage()
    },
  },
  'createImageBitmap-high': {
    install() {
      installCreateImageBitmapResizeHigh()
    },
  },
  'tc-lab-createImageBitmap-resize-low': {
    install() {
      installCreateImageBitmapResizeQuality('low')
    },
  },
  'tc-lab-createImageBitmap-resize-medium': {
    install() {
      installCreateImageBitmapResizeQuality('medium')
    },
  },
  'tc-lab-createImageBitmap-resize-pixelated': {
    install() {
      installCreateImageBitmapResizeQuality('pixelated')
    },
  },
  'tc-lab-createImageBitmap-premul-none': {
    install() {
      installCreateImageBitmapPremultiplyAlpha('none')
    },
  },
  'tc-lab-createImageBitmap-premul-premultiply': {
    install() {
      installCreateImageBitmapPremultiplyAlpha('premultiply')
    },
  },
  'tc-lab-createImageBitmap-high-premul-none': {
    install() {
      installCreateImageBitmapOptions({ resizeQuality: 'high', premultiplyAlpha: 'none' })
    },
  },
  'tc-draw-image-round-all': {
    install() {
      installDrawImageRoundAll()
    },
  },
  'tc-decode-safari-raf': {
    install() {
      installDecodeSafariRaf()
    },
  },
  'tc-canvas-backing-ceil': {
    install() {
      installCanvasBackingCeil()
    },
  },
  'tc-lab-w4-offscreen-transfer': {
    install() {
      installW4OffscreenTransfer({})
    },
  },
  'tc-lab-w4-offscreen-transfer-pixelated': {
    install() {
      installW4OffscreenTransfer({ pixelated: true })
    },
  },
  'tc-lab-w4-offscreen-transfer-reset-transform': {
    install() {
      installW4OffscreenTransfer({ resetTransform: true })
    },
  },
  'tc-lab-w4-offscreen-dom-two-stage': {
    install() {
      installW4OffscreenTransfer({ domTwoStage: true, domFallback: true })
    },
  },
  'tc-lab-w4-bitmaprenderer-transfer': {
    install() {
      installW4BitmapRendererTransfer({ then2d: false })
    },
  },
  'tc-lab-w4-bitmaprenderer-then-canvas-2d': {
    install() {
      installW4BitmapRendererTransfer({ then2d: true })
    },
  },
  'tc-lab-w4-offscreen-create-image-bitmap': {
    install() {
      installW4OffscreenCreateImageBitmap()
    },
  },
  'tc-lab-w4-offscreen-fallback-dom-canvas': {
    install() {
      installW4OffscreenTransfer({ domFallback: true })
    },
  },
  'tc-lab-w4-offscreen-transfer-will-read': {
    install() {
      installW4OffscreenTransfer({ willReadFrequently: true })
    },
  },
  'tc-lab-w4-offscreen-backing-floor': {
    install() {
      installW4OffscreenTransfer({ backingSnap: 'floor' })
    },
  },
  'tc-lab-w4-offscreen-backing-ceil': {
    install() {
      installW4OffscreenTransfer({ backingSnap: 'ceil' })
    },
  },
  'snapdom-post-fo-css': {
    install() {
      installCaptureCssWrap(FO_BASELINE_CSS + POST_CAPTURE_FO_CSS)
    },
  },
  'snapdom-post-fo-baseline': {
    install() {
      installCaptureCssWrap(FO_BASELINE_CSS)
    },
  },
  'googlefonts-embed-capture': {
    install() {
      installGoogleFontsEmbedCapture()
    },
  },
  ...Object.fromEntries(
    W9_MP_SPECS.map((s) => [
      s.id,
      {
        install() {
          s.install()
        },
      },
    ]),
  ),
  ...Object.fromEntries(
    W10_MP_SPECS.map((s) => [
      s.id,
      {
        install() {
          s.install()
        },
      },
    ]),
  ),
}

const CAPTURE_CSS_PATCH_IDS = new Set([
  'capture-recipe-css',
  'h2-fo-normalize-full',
  'h2-fo-internal-star-capture',
  'h2-container-reset-capture',
  'h2-full-plus-container-capture',
  'h2-raster-normalize-capture',
  'snapdom-post-fo-css',
  'snapdom-post-fo-baseline',
])

/**
 * @param {string | string[]} patchId
 */
export function installMonkeypatch(patchId) {
  const ids = Array.isArray(patchId) ? patchId : [patchId]
  for (const id of ids) {
    const patch = PATCHES[id]
    if (!patch) throw new Error(`[fo-fix-monkeypatch] unknown patch: ${id}`)
    patch.install(activeRecipe ?? undefined)
  }
}

/**
 * Apply monkeypatch(es) from a recipe (`recipe.monkeypatch` id or list).
 * @param {FoFixRecipe} recipe
 */
export function applyMonkeypatch(recipe) {
  const mp = recipe?.monkeypatch ?? recipe?.monkeyPatch
  if (!mp) return
  activeRecipe = recipe
  const ids = Array.isArray(mp) ? mp : [mp]
  installMonkeypatch(ids)
}

/** Restore all prototypes / window.snapdom from the current probe. */
export function uninstallMonkeypatch() {
  while (uninstallStack.length) {
    const undo = uninstallStack.pop()
    try {
      undo?.()
    } catch {
      /* non-blocking */
    }
  }
  activeRecipe = null
}

/**
 * True when capture-time CSS is injected via monkeypatch (skip post-capture inject).
 * @param {FoFixRecipe} recipe
 */
export function recipeMonkeypatchHandlesCapture(recipe) {
  const mp = recipe?.monkeypatch ?? recipe?.monkeyPatch
  if (!mp) return false
  const ids = Array.isArray(mp) ? mp : [mp]
  return ids.some((id) => CAPTURE_CSS_PATCH_IDS.has(id))
}

export function listMonkeypatchIds() {
  return Object.keys(PATCHES)
}
