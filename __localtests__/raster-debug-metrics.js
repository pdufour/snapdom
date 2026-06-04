/**
 * Shared raster/capture debug metrics for checkout playground, structure report, and dumps.
 * Reuses ink/layout helpers from svgLiveCompare — no duplicate scan logic.
 */
import {
  compareLiveCanvasCapInk,
  compareCheckoutStructure,
  collectTextFlowMetrics,
  collectFlexLayoutDebug,
  measureCanvasInkForElement,
  measureCanvasInkRowProfile,
  measureCapInk,
} from '../__tests__/helpers/svgLiveCompare.js'
import { buildExtendedMetrics } from './metrics-extended.js'

/** SVG clone cap Δ below this → treated as parity (for failureClass). */
export const FLEX_MATRIX_CAP_OK_EPS = 0.03

/** Canvas |Δtop| above this → raster drift (matches blackbox ink gate order of magnitude). */
export const FLEX_MATRIX_CANVAS_DRIFT_EPS = 0.06

/** Debug classifier slack — matches blackbox ink gate order of magnitude. */
export const PARITY_DEBUG_BUDGET_PX = FLEX_MATRIX_CANVAS_DRIFT_EPS

/** Layout box.top live vs clone above this → layout bounce. */
export const FLEX_MATRIX_LAYOUT_BOUNCE_EPS = 0.01

/** Alias for glossary / classifiers (SVG cap OK). */
export const METRICS_CAP_OK_EPS = FLEX_MATRIX_CAP_OK_EPS

/** Alias for glossary / classifiers (canvas drift). */
export const METRICS_CANVAS_DRIFT_EPS = FLEX_MATRIX_CANVAS_DRIFT_EPS

/**
 * Minimal flex/layout repro nodes — general class names only (no checkout selectors).
 * @type {{ id: string, label: string, matrixLabel: string, tease: string }[]}
 */
export const FLEX_MATRIX_VARIANTS = [
  { id: 'block-text', label: 'Block text only', matrixLabel: 'Mx-block', tease: 'baseline, no flex' },
  { id: 'inline-block-text', label: 'Inline-block text', matrixLabel: 'Mx-inline', tease: 'no flex' },
  { id: 'flex-row-center', label: 'Flex row · align-items center', matrixLabel: 'Mx-f-center', tease: 'cross center' },
  { id: 'flex-stretch-nav', label: 'Flex row stretch + link text', matrixLabel: 'Mx-f-stretch', tease: 'checkout nav pattern' },
  { id: 'flex-stretch-lh', label: 'Flex stretch + line-height 1.35', matrixLabel: 'Mx-f-st-lh', tease: 'explicit lh' },
  { id: 'flex-stretch-self-start', label: 'Flex stretch · align-self flex-start', matrixLabel: 'Mx-f-self', tease: 'self overrides stretch' },
  { id: 'flex-col-stretch', label: 'Flex column stretch', matrixLabel: 'Mx-f-col', tease: 'column cross stretch' },
  { id: 'grid-stretch', label: 'Grid stretch text', matrixLabel: 'Mx-grid', tease: 'grid align-items stretch' },
  { id: 'nested-flex', label: 'Nested flex (header center + nav stretch)', matrixLabel: 'Mx-nested', tease: 'outer center, inner stretch' },
  { id: 'flex-padding-link', label: 'Flex stretch + padding on link', matrixLabel: 'Mx-f-pad', tease: 'padding on stretched item' },
  { id: 'flex-border-box', label: 'Flex stretch · border-box', matrixLabel: 'Mx-f-bb', tease: 'box-sizing border-box' },
  { id: 'flex-content-box', label: 'Flex stretch · content-box', matrixLabel: 'Mx-f-cb', tease: 'box-sizing content-box' },
  { id: 'flex-wrap', label: 'Flex stretch · wrapped text', matrixLabel: 'Mx-f-wrap', tease: 'multi-line wrap' },
  { id: 'flex-nowrap', label: 'Flex stretch · single line', matrixLabel: 'Mx-f-nowrap', tease: 'nowrap single line' },
  { id: 'inline-flex-center', label: 'Inline-flex center', matrixLabel: 'Mx-if-center', tease: 'inline-flex' },
  { id: 'flex-baseline', label: 'Flex row · align-items baseline', matrixLabel: 'Mx-f-base', tease: 'baseline cross' },
  { id: 'flex-end', label: 'Flex row · align-items flex-end', matrixLabel: 'Mx-f-end', tease: 'cross end' },
  { id: 'flex-stretch-span', label: 'Flex stretch on span leaf', matrixLabel: 'Mx-f-span', tease: 'span not anchor' },
  { id: 'flex-gap-wide', label: 'Flex stretch · gap 32px', matrixLabel: 'Mx-f-gap', tease: 'wide gap' },
  { id: 'flex-two-links', label: 'Flex stretch · two links', matrixLabel: 'Mx-f-two', tease: 'sibling stretch items' },
  { id: 'block-in-flex-center', label: 'Block inside flex center row', matrixLabel: 'Mx-b-in-f', tease: 'block child, not text leaf' },
  { id: 'flex-stretch-normal-lh', label: 'Flex stretch · line-height normal', matrixLabel: 'Mx-f-nlh', tease: 'normal lh on stretch' },
  { id: 'flex-flex-start', label: 'Flex row · align-items flex-start', matrixLabel: 'Mx-f-start', tease: 'cross flex-start' },
  { id: 'flex-stretch-lh-1', label: 'Flex stretch · line-height 1', matrixLabel: 'Mx-f-lh1', tease: 'unitless lh 1' },
  { id: 'flex-stretch-lh-px', label: 'Flex stretch · line-height 24px', matrixLabel: 'Mx-f-lhpx', tease: 'fixed px lh' },
]

/** Landmarks used in strategy matrix + blackbox ink gate (subset). */
export const CHECKOUT_MATRIX_LANDMARKS = [
  'Home',
  'Products',
  'Checkout',
  'Email Address',
  'Promo Code',
]

/** All checkout text landmarks for full dumps. */
export const CHECKOUT_DUMP_LANDMARKS = [
  'ShopDemo1',
  'Home',
  'Products',
  'Checkout',
  'Email Address',
  'Remember my details',
  'Promo Code',
]

/** Section title suffixes / nav labels → landmark text */
export const LANDMARK_SECTION_TITLES = {
  ShopDemo1: 'Logo',
  Home: 'Nav: Home',
  Products: 'Nav: Products',
  Checkout: 'Checkout (h2)',
  'Email Address': 'Email Address (label)',
  'Promo Code': 'Promo Code (label)',
}

/**
 * Playground / dump presets — `toCanvas({ rasterStrategy })` tokens (see toCanvas.parseRasterStrategy).
 * @type {{ id: string, label: string, toCanvas: { rasterStrategy?: string }|null }[]}
 */
export const RASTER_STRATEGY_PRESETS = [
  {
    id: 'default',
    label: 'Default (two-stage device when dpr>1, data URL)',
    toCanvas: null,
  },
  {
    id: 'default-data-url',
    label: 'Default + data URL load (ink-measurable, not blob)',
    toCanvas: { rasterStrategy: 'data' },
  },
  {
    id: 'two-stage',
    label: 'Two-stage device upscale (1:1 CSS temp → NN upscale)',
    toCanvas: { rasterStrategy: 'two-stage' },
  },
  {
    id: 'css-scale',
    label: 'Single-stage CSS + ctx.scale(dpr)',
    toCanvas: { rasterStrategy: 'css' },
  },
  {
    id: 'device-draw',
    label: 'Device draw (full backing store, no ctx.scale)',
    toCanvas: { rasterStrategy: 'device' },
  },
  {
    id: 'hidpi-svg',
    label: 'HiDPI SVG root × dpr (explicit)',
    toCanvas: { rasterStrategy: 'hidpi-svg' },
  },
  {
    id: 'css-fonts-offscreen',
    label: 'CSS + wait fonts + offscreen attach',
    toCanvas: { rasterStrategy: 'css,fonts,offscreen' },
  },
  {
    id: 'default-fonts',
    label: 'Default + wait fonts',
    toCanvas: { rasterStrategy: 'fonts' },
  },
  {
    id: 'blob-css',
    label: 'Blob re-encode + CSS draw (may taint canvas)',
    toCanvas: { rasterStrategy: 'blob,css' },
  },
]

/**
 * Human-readable raster path from canvas.__snapdomRasterMeta or inferred opts.
 * @param {object|null|undefined} meta
 * @param {{ rasterStrategy?: string, dpr?: number }|null} [fallback]
 */
export function describeRasterPath(meta, fallback = null) {
  if (meta?.pathLabel) return meta.pathLabel
  const rs = meta?.rasterStrategy ?? fallback?.rasterStrategy ?? '(default)'
  const dpr = meta?.dpr ?? fallback?.dpr ?? 1
  if (meta?.twoStageDevice) return `two-stage device (dpr=${dpr})`
  if (meta?.useHiDpiSvgRoot) return `HiDPI SVG root × dpr (dpr=${dpr})`
  if (meta?.drawMode === 'css') return `css draw + ctx.scale(dpr) [${rs}]`
  if (meta?.drawMode === 'device') return `device draw [${rs}]`
  return `rasterStrategy=${rs} dpr=${dpr}`
}

/**
 * @param {HTMLCanvasElement|null|undefined} canvas
 */
export function readCanvasRasterMeta(canvas) {
  if (!canvas) return null
  const m = canvas.__snapdomRasterMeta
  if (!m || typeof m !== 'object') return null
  return { ...m }
}

/**
 * @param {object|null} liveMetrics from collectTextFlowMetrics
 * @param {{ topInBorder?: number, bottomInBorder?: number }|null} canvasInk
 */
export function inkVsBoxDeltas(liveMetrics, canvasInk) {
  if (!liveMetrics || !canvasInk) return null
  const cs = liveMetrics
  const padTop = parseFloat(cs['padding-top']) || 0
  const padBottom = parseFloat(cs['padding-bottom']) || 0
  const borderTop = parseFloat(cs['border-top-width']) || 0
  const borderBottom = parseFloat(cs['border-bottom-width']) || 0
  const contentTop = borderTop + padTop
  const boxH = liveMetrics.box?.height ?? null
  const top = canvasInk.topInBorder
  const bottom = canvasInk.bottomInBorder
  const contentBottomInBorder =
    boxH != null ? boxH - borderBottom - padBottom : null
  return {
    vsBorder: { top, bottom },
    vsPadding: {
      top: top != null ? top - padTop : null,
      bottom:
        bottom != null && boxH != null ? bottom - (boxH - padBottom) : null,
    },
    vsContent: {
      top: top != null ? top - contentTop : null,
      bottom:
        bottom != null && contentBottomInBorder != null
          ? bottom - contentBottomInBorder
          : null,
    },
  }
}

/**
 * @param {number|null|undefined} n
 * @param {number} [digits]
 */
export function roundMetric(n, digits = 3) {
  if (n == null || !Number.isFinite(n)) return null
  const f = 10 ** digits
  return Math.round(n * f) / f
}

/**
 * Layout boxes relative to capture root (CSS px).
 * @param {Element} el
 * @param {Element} root
 */
export function collectLayoutBoxSnapshot(el, root) {
  if (!el?.getBoundingClientRect) return null
  const cs = getComputedStyle(el)
  const rootRect = root.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const borderTop = parseFloat(cs.borderTopWidth) || 0
  const borderLeft = parseFloat(cs.borderLeftWidth) || 0
  const borderBottom = parseFloat(cs.borderBottomWidth) || 0
  const borderRight = parseFloat(cs.borderRightWidth) || 0
  const padTop = parseFloat(cs.paddingTop) || 0
  const padLeft = parseFloat(cs.paddingLeft) || 0
  const padBottom = parseFloat(cs.paddingBottom) || 0
  const padRight = parseFloat(cs.paddingRight) || 0
  const marginTop = parseFloat(cs.marginTop) || 0
  const marginLeft = parseFloat(cs.marginLeft) || 0
  const marginBottom = parseFloat(cs.marginBottom) || 0
  const marginRight = parseFloat(cs.marginRight) || 0

  const boxTop = r.top - rootRect.top
  const boxLeft = r.left - rootRect.left
  const boxW = r.width
  const boxH = r.height

  return {
    border: {
      top: roundMetric(boxTop),
      left: roundMetric(boxLeft),
      width: roundMetric(boxW),
      height: roundMetric(boxH),
      bottom: roundMetric(boxTop + boxH),
      right: roundMetric(boxLeft + boxW),
    },
    padding: {
      top: roundMetric(padTop),
      right: roundMetric(padRight),
      bottom: roundMetric(padBottom),
      left: roundMetric(padLeft),
    },
    content: {
      top: roundMetric(boxTop + borderTop + padTop),
      left: roundMetric(boxLeft + borderLeft + padLeft),
      width: roundMetric(Math.max(0, boxW - borderLeft - borderRight - padLeft - padRight)),
      height: roundMetric(Math.max(0, boxH - borderTop - borderBottom - padTop - padBottom)),
    },
    margin: {
      top: roundMetric(marginTop),
      right: roundMetric(marginRight),
      bottom: roundMetric(marginBottom),
      left: roundMetric(marginLeft),
    },
    position: cs.position,
    transform: cs.transform === 'none' ? null : cs.transform,
    scroll: {
      scrollTop: el.scrollTop,
      scrollLeft: el.scrollLeft,
    },
  }
}

/**
 * @param {ReturnType<typeof collectTextFlowMetrics>|null} metrics
 */
export function collectTextMetricsSnapshot(metrics) {
  if (!metrics) return null
  return {
    fontFamily: metrics['font-family'] ?? null,
    fontSize: metrics['font-size'] ?? null,
    fontWeight: metrics['font-weight'] ?? null,
    lineHeightComputed: metrics['line-height'] ?? null,
    lineHeightPx: metrics.fontInk?.lineHeightPx ?? null,
    halfLeading: metrics.fontInk?.halfLeading ?? metrics.capInk?.halfLeading ?? null,
    letterSpacing: metrics['letter-spacing'] ?? null,
    fontKerning: metrics['font-kerning'] ?? null,
    textRendering: metrics['text-rendering'] ?? null,
    verticalAlign: metrics['vertical-align'] ?? null,
    whiteSpace: metrics['white-space'] ?? null,
    leadingTrim: metrics['leading-trim'] ?? null,
  }
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {Element} liveEl
 * @param {string} sectionTitle
 */
export function resolveSvgCloneMetrics(root, svgMarkup, liveEl, sectionTitle) {
  if (!svgMarkup || !liveEl) return { cloneMetrics: null, cloneFlex: null }
  const { sections } = compareCheckoutStructure(root, svgMarkup, 0)
  const sec = sections.find(
    (s) => s.title === sectionTitle || s.title.includes(sectionTitle),
  )
  let cloneFlex = null
  if (sec?.cloneMetrics) {
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;border:0'
    document.body.appendChild(iframe)
    try {
      const doc = iframe.contentDocument
      doc.open()
      doc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
      doc.close()
      const parsed = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml')
      doc.body.appendChild(doc.importNode(parsed.documentElement, true))
      const cloneRoot =
        doc.getElementById('capture-target') ||
        doc.querySelector('.checkout-page') ||
        doc.getElementById('matrix-target') ||
        doc.querySelector('[data-matrix-root]')
      const matrixLabel = liveEl.getAttribute('data-matrix-label')
      let cloneNode = matrixLabel
        ? cloneRoot?.querySelector(`[data-matrix-label="${matrixLabel}"]`)
        : null
      if (!cloneNode) {
        const want = (liveEl.textContent || '').trim()
        for (const node of cloneRoot?.querySelectorAll('*') || []) {
          if (node.childElementCount > 0) continue
          if ((node.textContent || '').trim() === want) {
            cloneNode = node
            break
          }
        }
      }
      if (cloneNode && cloneRoot) {
        cloneFlex = collectFlexLayoutDebug(cloneNode, cloneRoot)
      }
    } finally {
      iframe.remove()
    }
  }
  return { cloneMetrics: sec?.cloneMetrics ?? null, cloneFlex }
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} dpr
 */
export function measureCanvasRowScanDebug(canvas, root, el, dpr = 1) {
  const rootRect = root.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const leftCss = r.left - rootRect.left
  const topCss = r.top - rootRect.top
  const regionW = Math.max(1, Math.round(r.width * dpr))
  const regionH = Math.max(1, Math.round(r.height * dpr))
  const insetDev = Math.round(Math.min(16, Math.max(4, r.width * 0.05)) * dpr)
  const bandDev = Math.min(regionW - insetDev, Math.max(8, Math.round(28 * dpr)))
  const region = {
    x: Math.max(0, Math.round(leftCss * dpr) + insetDev),
    y: Math.max(0, Math.round(topCss * dpr)),
    w: Math.max(1, bandDev),
    h: regionH,
  }
  const profile = measureCanvasInkRowProfile(canvas, region)
  if (!profile) return null
  const borderTopCss = 0
  return {
    firstInkRowDevice: profile.firstInkRow,
    firstInkRowSubDevice: profile.firstInkRowSub,
    firstInkRowVsBorderTopCss:
      profile.firstInkRow == null
        ? null
        : roundMetric(profile.firstInkRow / dpr - borderTopCss),
    peakDensity: profile.peakDensity,
    region,
  }
}

/**
 * @param {object|null} liveMetrics
 * @param {object|null} cloneMetrics
 * @param {{ deltaTopInBorder?: number|null }|null} capCmp
 * @param {{ topInBorder?: number }|null} canvasInk
 */
export function buildMetricsDeltas(liveMetrics, cloneMetrics, capCmp, canvasInk) {
  const capLive = liveMetrics?.capInkRelBorder?.top ?? null
  const capClone = cloneMetrics?.capInkRelBorder?.top ?? null
  const capCanvas = canvasInk?.topInBorder ?? null

  const layoutLiveTop = liveMetrics?.box?.top ?? null
  const layoutCloneTop = cloneMetrics?.box?.top ?? null

  const capDeltaSvg =
    capLive != null && capClone != null ? roundMetric(capClone - capLive) : null
  const canvasDeltaTop = capCmp?.deltaTopInBorder ?? null
  const capDeltaCanvas =
    capLive != null && capCanvas != null ? roundMetric(capCanvas - capLive) : null

  const svgOk =
    capDeltaSvg == null || Math.abs(capDeltaSvg) <= METRICS_CAP_OK_EPS
  const canvasBad =
    canvasDeltaTop != null && Math.abs(canvasDeltaTop) >= METRICS_CANVAS_DRIFT_EPS

  return {
    liveToSvg: {
      layout: {
        top:
          layoutLiveTop != null && layoutCloneTop != null
            ? roundMetric(layoutCloneTop - layoutLiveTop)
            : null,
        left:
          liveMetrics?.box?.left != null && cloneMetrics?.box?.left != null
            ? roundMetric(cloneMetrics.box.left - liveMetrics.box.left)
            : null,
        width:
          liveMetrics?.box?.width != null && cloneMetrics?.box?.width != null
            ? roundMetric(cloneMetrics.box.width - liveMetrics.box.width)
            : null,
        height:
          liveMetrics?.box?.height != null && cloneMetrics?.box?.height != null
            ? roundMetric(cloneMetrics.box.height - liveMetrics.box.height)
            : null,
      },
      cap: { top: capDeltaSvg },
    },
    liveToCanvas: {
      layout: {
        top: null,
        left: null,
        width: null,
        height: null,
      },
      cap: { top: roundMetric(canvasDeltaTop) },
      ink: capDeltaCanvas,
    },
    svgToCanvas: {
      capTop:
        capClone != null && capCanvas != null
          ? roundMetric(capCanvas - capClone)
          : null,
      canvasInkTop: roundMetric(capCanvas),
    },
    flags: {
      svgOkCanvasBad: svgOk && canvasBad,
      svgCapOk: svgOk,
      canvasDrift: canvasBad,
    },
  }
}

/**
 * @param {ReturnType<typeof buildMetricsDeltas>|null} deltas
 * @param {number|null} layoutBounceTop
 */
export function classifyLandmarkFailure(deltas, layoutBounceTop = null) {
  if (!deltas) return 'missing'
  const capΔ = deltas.liveToSvg.cap.top
  const canvasΔ = deltas.liveToCanvas.cap.top
  const bounce =
    layoutBounceTop == null ? 0 : Math.abs(layoutBounceTop)
  if (deltas.flags.svgOkCanvasBad) return 'svg-ok-canvas-bad'
  return classifyFlexVariantFailure(capΔ, canvasΔ, bounce)
}

/**
 * @param {HTMLCanvasElement|null} canvas
 * @param {object|null} rasterMeta
 * @param {{ dpr?: number, scale?: number, captureMeta?: object|null }} [opts]
 */
export function collectRasterDebugSnapshot(canvas, rasterMeta, opts = {}) {
  const meta = rasterMeta ?? readCanvasRasterMeta(canvas)
  const img =
    canvas?.parentElement?.querySelector?.('img') ||
    (canvas?.tagName === 'IMG' ? canvas : null)
  const phaseMs = {}
  if (meta?.timeline?.length) {
    for (const step of meta.timeline) {
      phaseMs[step.phase] = step.ms
    }
  }
  return {
    pathLabel: describeRasterPath(meta, {
      dpr: opts.dpr ?? meta?.dpr,
      rasterStrategy: meta?.rasterStrategy,
    }),
    rasterStrategy: meta?.rasterStrategy ?? null,
    dpr: meta?.dpr ?? opts.dpr ?? null,
    scale: meta?.scale ?? opts.scale ?? null,
    metaTargetW: meta?.metaTargetW ?? opts.captureMeta?.targetW ?? null,
    metaTargetH: meta?.metaTargetH ?? opts.captureMeta?.targetH ?? null,
    metaW0: meta?.metaW0 ?? null,
    metaH0: meta?.metaH0 ?? null,
    backingStore: meta
      ? { width: meta.deviceW, height: meta.deviceH }
      : canvas
        ? { width: canvas.width, height: canvas.height }
        : null,
    cssDisplaySize: meta
      ? { width: meta.cssW, height: meta.cssH }
      : canvas
        ? {
            width: parseFloat(canvas.style.width) || null,
            height: parseFloat(canvas.style.height) || null,
          }
        : null,
    imgNatural:
      img && 'naturalWidth' in img
        ? { width: img.naturalWidth, height: img.naturalHeight }
        : {
            width: meta?.imgNaturalWidth ?? null,
            height: meta?.imgNaturalHeight ?? null,
          },
    stage1: meta?.stage1W != null ? { width: meta.stage1W, height: meta.stage1H } : null,
    stage2: meta?.twoStageDevice
      ? { width: meta.deviceW, height: meta.deviceH }
      : null,
    drawMode: meta?.drawMode ?? null,
    twoStageDevice: !!meta?.twoStageDevice,
    useHiDpiSvgRoot: !!meta?.useHiDpiSvgRoot,
    svgLoadKind: meta?.svgLoadKind ?? null,
    imageSmoothingEnabled: meta?.imageSmoothingEnabled ?? null,
    imageSmoothingQuality: meta?.imageSmoothingQuality ?? null,
    paintPassCount: meta?.paintPassCount ?? null,
    totalMs: meta?.totalMs ?? null,
    phaseMs,
    timeline: meta?.timeline ?? null,
    rasterizedAt: meta?.rasterizedAt ?? null,
  }
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string} landmarkText
 * @param {{ dpr?: number, rasterMeta?: object|null, scale?: number, captureMeta?: object|null }} [opts]
 */
export function buildComprehensiveMetricsBundle(root, svgMarkup, canvas, landmarkText, opts = {}) {
  const dpr = opts.dpr ?? 1
  const el =
    opts.el ??
    findCheckoutTextLeaf(root, landmarkText) ??
    findMatrixTextLeaf(root, landmarkText)
  if (!el) {
    return {
      landmark: landmarkText,
      missing: true,
      failureClass: 'missing',
      capturedAt: new Date().toISOString(),
    }
  }

  const sectionTitle =
    opts.sectionTitle ?? LANDMARK_SECTION_TITLES[landmarkText] ?? landmarkText
  const liveMetrics = collectTextFlowMetrics(el, root)
  const liveLayout = collectLayoutBoxSnapshot(el, root)
  const liveFlex = collectFlexLayoutDebug(el, root)
  const liveText = collectTextMetricsSnapshot(liveMetrics)
  for (const p of ['vertical-align', 'white-space', 'leading-trim']) {
    if (liveText && liveText[p.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] == null) {
      const cs = getComputedStyle(el)
      if (p === 'vertical-align') liveText.verticalAlign = cs.verticalAlign
      if (p === 'white-space') liveText.whiteSpace = cs.whiteSpace
      if (p === 'leading-trim') {
        liveText.leadingTrim =
          cs.getPropertyValue('leading-trim').trim() ||
          cs.getPropertyValue('text-box-trim').trim() ||
          null
      }
    }
  }

  const { cloneMetrics, cloneFlex } = resolveSvgCloneMetrics(
    root,
    svgMarkup,
    el,
    sectionTitle,
  )
  const svgLayout = cloneMetrics ? collectLayoutBoxSnapshot(el, root) : null
  if (cloneMetrics?.box && svgLayout) {
    svgLayout.border = {
      top: roundMetric(cloneMetrics.box.top),
      left: roundMetric(cloneMetrics.box.left),
      width: roundMetric(cloneMetrics.box.width),
      height: roundMetric(cloneMetrics.box.height),
      bottom: roundMetric(cloneMetrics.box.bottom),
      right: roundMetric(cloneMetrics.box.left + cloneMetrics.box.width),
    }
  }

  let canvasInk = null
  let capCmp = null
  let canvasTainted = false
  let rowScan = null
  if (canvas) {
    try {
      canvasInk = measureCanvasInkForElement(canvas, root, el, dpr)
      capCmp = compareLiveCanvasCapInk(root, canvas, el, dpr)
      rowScan = measureCanvasRowScanDebug(canvas, root, el, dpr)
    } catch (e) {
      if (e?.name === 'SecurityError') canvasTainted = true
      else throw e
    }
  }

  const inkEdges = inkVsBoxDeltas(liveMetrics, canvasInk)
  const deltas = buildMetricsDeltas(liveMetrics, cloneMetrics, capCmp, canvasInk)
  const layoutBounceTop = deltas.liveToSvg.layout.top
  const failureClass = classifyLandmarkFailure(deltas, layoutBounceTop)
  const rasterMeta = opts.rasterMeta ?? readCanvasRasterMeta(canvas)

  const paint = {
    live: {
      capVsBorder: liveMetrics?.capInkRelBorder ?? null,
      lineVsBorder: liveMetrics?.inkRelBorder ?? null,
      capRoot: liveMetrics?.capInk ?? null,
    },
    svg: {
      capVsBorder: cloneMetrics?.capInkRelBorder ?? null,
      lineVsBorder: cloneMetrics?.inkRelBorder ?? null,
      capRoot: cloneMetrics?.capInk ?? null,
    },
    canvas: {
      capVsBorder: canvasInk
        ? {
            top: canvasInk.topInBorder,
            bottom: canvasInk.bottomInBorder,
            height: canvasInk.height,
          }
        : null,
      inkEdges,
      rowScan,
      tainted: canvasTainted,
    },
    capDeltaClone: deltas.liveToSvg.cap.top,
    canvasVsBorderTop: deltas.liveToCanvas.cap.top,
    canvasVsCapTop: deltas.svgToCanvas.capTop,
  }

  const bundle = {
    landmark: landmarkText,
    sectionTitle,
    capturedAt: new Date().toISOString(),
    missing: false,
    failureClass,
    flags: deltas.flags,
    layout: {
      live: liveLayout,
      svg: svgLayout,
    },
    flex: {
      live: liveFlex,
      svg: cloneFlex,
    },
    text: {
      live: liveText,
      svg: collectTextMetricsSnapshot(cloneMetrics),
    },
    paint,
    raster: collectRasterDebugSnapshot(canvas, rasterMeta, opts),
    deltas,
    canvasTainted,
    rasterMeta,
    layoutBox: liveLayout?.border ?? null,
    lineHeight: {
      computed: liveText?.lineHeightComputed ?? null,
      modelPx: liveText?.lineHeightPx ?? null,
      halfLeading: liveText?.halfLeading ?? null,
    },
    inkEdges,
    flexSummary: liveFlex?.summary ?? null,
    paintLegacy: {
      capVsBorderTop: paint.live.capVsBorder?.top ?? null,
      cloneCapVsBorderTop: paint.svg.capVsBorder?.top ?? null,
      capDeltaClone: paint.capDeltaClone,
      canvasVsBorderTop: paint.canvasVsBorderTop,
      canvasVsCapTop: paint.canvasVsCapTop,
      canvasInkRootTop: canvasInk?.top ?? null,
      liveCapRootTop: liveMetrics?.capInk?.top ?? null,
    },
  }
  bundle.paint = { ...bundle.paintLegacy, ...bundle.paint }
  bundle.extended = buildExtendedMetrics(root, svgMarkup, canvas, landmarkText, {
    ...opts,
    el,
    sectionTitle,
  })
  return bundle
}

export {
  buildExtendedMetrics,
  diffLiveSvgCanvas,
  compareExtendedTable,
  compactExtendedTableRow,
  formatExtendedSnapshotLines,
  countExtendedMetricFields,
  EXTENDED_METRIC_CATEGORIES,
} from './metrics-extended.js'

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string[]} landmarks
 * @param {object} [opts]
 */
export function buildAllLandmarkMetricsBundles(root, svgMarkup, canvas, landmarks, opts = {}) {
  return landmarks.map((lm) =>
    buildComprehensiveMetricsBundle(root, svgMarkup, canvas, lm, opts),
  )
}

/**
 * Wide row for console.table / CLI summary.
 * @param {ReturnType<typeof buildComprehensiveMetricsBundle>} bundle
 */
export function compactMetricsTableRow(bundle) {
  if (bundle.missing) {
    return {
      landmark: bundle.landmark,
      failureClass: 'missing',
      layoutΔtop: '—',
      capΔsvg: '—',
      canvasΔtop: '—',
      svgOkCanvasBad: '',
    }
  }
  const d = bundle.deltas
  const fmt = (n) =>
    n == null ? '—' : `${n >= 0 ? '+' : ''}${Number(n).toFixed(2)}`
  return {
    landmark: bundle.landmark,
    failureClass: bundle.failureClass,
    layoutΔtop: fmt(d?.liveToSvg?.layout?.top),
    capΔsvg: fmt(d?.liveToSvg?.cap?.top),
    canvasΔtop: fmt(d?.liveToCanvas?.cap?.top),
    padΔtop:
      bundle.inkEdges?.vsPadding?.top == null
        ? '—'
        : bundle.inkEdges.vsPadding.top.toFixed(2),
    svgOkCanvasBad: d?.flags?.svgOkCanvasBad ? 'YES' : '',
    path: bundle.raster?.pathLabel ?? '—',
  }
}

/**
 * @param {Element} root
 * @param {string} text
 */
export function findCheckoutTextLeaf(root, text) {
  const want = text.trim()
  for (const el of root.querySelectorAll('*')) {
    if (el.childElementCount > 0 && text !== 'Remember my details') continue
    if ((el.textContent || '').trim() === want) return el
  }
  return null
}

/**
 * Full metric bundle for one landmark (live / SVG clone / canvas raster).
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string} landmarkText
 * @param {{ dpr?: number, rasterMeta?: object|null, layoutTol?: number }} [opts]
 */
export function buildLandmarkMetricsBundle(root, svgMarkup, canvas, landmarkText, opts = {}) {
  return buildComprehensiveMetricsBundle(root, svgMarkup, canvas, landmarkText, opts)
}

/**
 * Compact row for strategy comparison tables.
 * @param {ReturnType<typeof buildLandmarkMetricsBundle>} bundle
 */
export function compactLandmarkRow(bundle) {
  if (bundle.missing) {
    return {
      landmark: bundle.landmark,
      layout: '—',
      capΔ: '—',
      canvasΔtop: '—',
      canvasΔleft: '—',
    }
  }
  const row = compactMetricsTableRow(bundle)
  return {
    landmark: row.landmark,
    layout: bundle.layoutBox
      ? `t${bundle.layoutBox.top.toFixed(2)}`
      : '—',
    capΔ: row.capΔsvg,
    canvasΔtop: row.canvasΔtop,
    padΔtop: row.padΔtop,
  }
}

/**
 * @param {object[]} strategyResults from compareRasterStrategies
 */
export function formatStrategyCompareMarkdown(strategyResults) {
  const lines = ['| Strategy | Landmark | cap Δ clone | canvas Δ top | canvas Δ pad |', '|---|---|---:|---:|---:|']
  for (const run of strategyResults) {
    for (const row of run.rows || []) {
      lines.push(
        `| ${run.label} | ${row.landmark} | ${row.capΔ} | ${row.canvasΔtop} | ${row.padΔtop} |`,
      )
    }
  }
  return lines.join('\n')
}

/**
 * @param {Element} root
 * @param {string} matrixLabel value of data-matrix-label
 */
export function findMatrixTextLeaf(root, matrixLabel) {
  if (!root) return null
  const el = root.querySelector(`[data-matrix-label="${matrixLabel}"]`)
  if (!el) return null
  return el
}

/**
 * @param {Element} liveRoot
 * @param {string} svgMarkup
 * @param {Element} liveEl
 */
function measureCloneCapInk(liveRoot, svgMarkup, liveEl) {
  const iframe = document.createElement('iframe')
  iframe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;border:0'
  document.body.appendChild(iframe)
  try {
    const doc = iframe.contentDocument
    doc.open()
    doc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
    doc.close()
    const parsed = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml')
    doc.body.appendChild(doc.importNode(parsed.documentElement, true))
    const cloneRoot =
      doc.getElementById('matrix-target') ||
      doc.getElementById('capture-target') ||
      doc.querySelector('[data-matrix-root]')
    if (!cloneRoot || !liveEl) return null
    const label = liveEl.getAttribute('data-matrix-label')
    const cloneEl = label
      ? cloneRoot.querySelector(`[data-matrix-label="${label}"]`)
      : null
    if (!cloneEl) return null
    return measureCapInk(cloneEl, cloneRoot)
  } finally {
    iframe.remove()
  }
}

/**
 * @param {number|null} capDeltaClone
 * @param {number|null} canvasDeltaTop
 * @param {number|null} layoutBounceTop
 */
export function classifyFlexVariantFailure(capDeltaClone, canvasDeltaTop, layoutBounceTop) {
  const cap = capDeltaClone == null ? 0 : Math.abs(capDeltaClone)
  const canvas = canvasDeltaTop == null ? 0 : Math.abs(canvasDeltaTop)
  const bounce = layoutBounceTop == null ? 0 : Math.abs(layoutBounceTop)

  if (bounce > FLEX_MATRIX_LAYOUT_BOUNCE_EPS && cap <= FLEX_MATRIX_CAP_OK_EPS) {
    return 'layout-bounce'
  }
  if (cap <= FLEX_MATRIX_CAP_OK_EPS && canvas >= FLEX_MATRIX_CANVAS_DRIFT_EPS) {
    return 'raster-only'
  }
  if (cap > FLEX_MATRIX_CAP_OK_EPS && canvas >= FLEX_MATRIX_CANVAS_DRIFT_EPS) {
    return 'mixed'
  }
  if (cap > FLEX_MATRIX_CAP_OK_EPS) {
    return 'svg-clone'
  }
  if (canvas >= FLEX_MATRIX_CANVAS_DRIFT_EPS) {
    return 'canvas-drift'
  }
  return 'ok'
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {{ id: string, label: string, matrixLabel: string, tease?: string }} variant
 * @param {{ dpr?: number }} [opts]
 */
export function buildFlexVariantRow(root, svgMarkup, canvas, variant, opts = {}) {
  const dpr = opts.dpr ?? 1
  const el = findMatrixTextLeaf(root, variant.matrixLabel)
  if (!el) {
    return {
      variantId: variant.id,
      label: variant.label,
      tease: variant.tease ?? '',
      missing: true,
      failureClass: 'missing',
    }
  }

  const liveMetrics = collectTextFlowMetrics(el, root)
  const liveFlex = collectFlexLayoutDebug(el, root)
  const liveCap = measureCapInk(el, root)
  const cloneCap = svgMarkup ? measureCloneCapInk(root, svgMarkup, el) : null
  const capDeltaClone =
    liveCap?.topInBorder != null && cloneCap?.topInBorder != null
      ? cloneCap.topInBorder - liveCap.topInBorder
      : null

  let canvasDeltaTop = null
  let canvasTainted = false
  if (canvas) {
    try {
      const cmp = compareLiveCanvasCapInk(root, canvas, el, dpr)
      canvasDeltaTop = cmp.deltaTopInBorder
    } catch (e) {
      if (e?.name === 'SecurityError') canvasTainted = true
      else throw e
    }
  }

  const cloneMetrics = svgMarkup
    ? (() => {
        const iframe = document.createElement('iframe')
        iframe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;border:0'
        document.body.appendChild(iframe)
        try {
          const doc = iframe.contentDocument
          doc.open()
          doc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
          doc.close()
          const parsed = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml')
          doc.body.appendChild(doc.importNode(parsed.documentElement, true))
          const cloneRoot =
            doc.getElementById('matrix-target') ||
            doc.getElementById('capture-target') ||
            doc.querySelector('[data-matrix-root]')
          const cloneEl = cloneRoot?.querySelector(
            `[data-matrix-label="${variant.matrixLabel}"]`,
          )
          return cloneEl && cloneRoot
            ? collectTextFlowMetrics(cloneEl, cloneRoot)
            : null
        } finally {
          iframe.remove()
        }
      })()
    : null

  const layoutBounceTop =
    liveMetrics?.box?.top != null && cloneMetrics?.box?.top != null
      ? cloneMetrics.box.top - liveMetrics.box.top
      : null

  const flexParent = liveFlex?.chain?.find((c) => (c.display || '').includes('flex')) ?? null
  const flexItem = liveFlex?.chain?.[0] ?? null

  const failureClass = classifyFlexVariantFailure(
    capDeltaClone,
    canvasDeltaTop,
    layoutBounceTop,
  )
  const svgOkCanvasBad =
    capDeltaClone != null &&
    Math.abs(capDeltaClone) <= FLEX_MATRIX_CAP_OK_EPS &&
    canvasDeltaTop != null &&
    Math.abs(canvasDeltaTop) >= FLEX_MATRIX_CANVAS_DRIFT_EPS

  const metricsBundle =
    svgMarkup && canvas
      ? buildComprehensiveMetricsBundle(root, svgMarkup, canvas, variant.matrixLabel, {
          dpr,
          rasterMeta: readCanvasRasterMeta(canvas),
          el,
          sectionTitle: variant.label,
        })
      : null

  return {
    variantId: variant.id,
    label: variant.label,
    tease: variant.tease ?? '',
    matrixLabel: variant.matrixLabel,
    flexParent: flexParent
      ? `${flexParent.tag}${flexParent.classHint ? '.' + flexParent.classHint : ''}`
      : '—',
    alignItems: flexParent?.alignItems ?? '—',
    alignSelf: flexItem?.alignSelf ?? '—',
    crossStretch: !!liveFlex?.summary?.crossStretchItem,
    lineHeight: liveMetrics?.['line-height'] ?? '—',
    lineHeightPx: liveFlex?.summary?.lineHeightPx ?? null,
    capDeltaClone,
    canvasDeltaTop,
    layoutBounceTop,
    failureClass:
      svgOkCanvasBad && failureClass === 'raster-only'
        ? 'svg-ok-canvas-bad'
        : failureClass,
    rasterOnly: failureClass === 'raster-only' || svgOkCanvasBad,
    svgOkCanvasBad,
    canvasTainted,
    metricsBundle,
    hypothesisNotes: '',
  }
}

/**
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {{ dpr?: number, variants?: typeof FLEX_MATRIX_VARIANTS }} [opts]
 */
export function buildFlexMatrixReport(root, svgMarkup, canvas, opts = {}) {
  const variants = opts.variants ?? FLEX_MATRIX_VARIANTS
  const dpr = opts.dpr ?? 1
  const rows = variants.map((v) =>
    buildFlexVariantRow(root, svgMarkup, canvas, v, { dpr }),
  )
  const rasterOnly = rows.filter((r) => r.failureClass === 'raster-only')
  const stretchRasterOnly = rasterOnly.filter((r) => r.crossStretch)
  const noStretchRasterOnly = rasterOnly.filter((r) => !r.crossStretch)
  return {
    capturedAt: new Date().toISOString(),
    dpr,
    variantCount: rows.length,
    rows,
    summary: {
      rasterOnlyCount: rasterOnly.length,
      rasterOnlyStretch: stretchRasterOnly.length,
      rasterOnlyNoStretch: noStretchRasterOnly.length,
      okCount: rows.filter((r) => r.failureClass === 'ok').length,
      svgCloneCount: rows.filter((r) => r.failureClass === 'svg-clone').length,
      mixedCount: rows.filter((r) => r.failureClass === 'mixed').length,
    },
  }
}

/**
 * @param {ReturnType<typeof buildFlexMatrixReport>['rows']} rows
 */
export function flexMatrixRowsForConsole(rows) {
  return rows.map((r) => ({
    id: r.variantId,
    stretch: r.crossStretch ? 'yes' : 'no',
    capΔ: r.capDeltaClone == null ? '—' : r.capDeltaClone.toFixed(3),
    canvasΔ: r.canvasDeltaTop == null ? '—' : r.canvasDeltaTop.toFixed(3),
    bounce: r.layoutBounceTop == null ? '—' : r.layoutBounceTop.toFixed(3),
    class: r.failureClass,
  }))
}

/**
 * @param {ReturnType<typeof buildFlexMatrixReport>} report
 */
export function formatFlexMatrixMarkdown(report) {
  const lines = [
    '| variantId | flexParent | alignItems | crossStretch | capΔtop | canvasΔtop | failureClass |',
    '|---|---|---|---|---:|---:|---|',
  ]
  for (const r of report.rows) {
    if (r.missing) {
      lines.push(`| ${r.variantId} | — | — | — | — | — | missing |`)
      continue
    }
    const cap = r.capDeltaClone == null ? '—' : r.capDeltaClone.toFixed(3)
    const canvas = r.canvasDeltaTop == null ? '—' : r.canvasDeltaTop.toFixed(3)
    lines.push(
      `| ${r.variantId} | ${r.flexParent} | ${r.alignItems} | ${r.crossStretch ? 'yes' : 'no'} | ${cap} | ${canvas} | ${r.failureClass} |`,
    )
  }
  lines.push('')
  lines.push(
    `Summary: raster-only ${report.summary.rasterOnlyCount} (stretch ${report.summary.rasterOnlyStretch}, non-stretch ${report.summary.rasterOnlyNoStretch})`,
  )
  return lines.join('\n')
}

/**
 * Border / padding / ink boxes relative to capture root (CSS px).
 * @param {Element} el
 * @param {Element} root
 */
export function buildGeometrySnapshot(el, root) {
  if (!el || el.nodeType !== 1) return null
  const cs = getComputedStyle(el)
  const metrics = collectTextFlowMetrics(el, root)
  const box = metrics?.box
  if (!box) return null

  const borderTop = parseFloat(cs.borderTopWidth) || 0
  const borderRight = parseFloat(cs.borderRightWidth) || 0
  const borderBottom = parseFloat(cs.borderBottomWidth) || 0
  const borderLeft = parseFloat(cs.borderLeftWidth) || 0

  const cap = measureCapInk(el, root)
  const flex = collectFlexLayoutDebug(el, root)

  return {
    borderBox: { ...box },
    paddingBox: {
      top: box.top + borderTop,
      left: box.left + borderLeft,
      width: Math.max(0, box.width - borderLeft - borderRight),
      height: Math.max(0, box.height - borderTop - borderBottom),
    },
    ink: metrics?.ink
      ? {
          top: metrics.ink.top,
          bottom: metrics.ink.bottom,
          height: metrics.ink.height,
          vsBorderTop: metrics.inkRelBorder?.top ?? null,
        }
      : null,
    cap: cap
      ? {
          top: cap.top,
          bottom: cap.bottom,
          height: cap.height,
          topInBorder: cap.topInBorder,
          bottomInBorder: cap.bottomInBorder,
          halfLeading: cap.halfLeading,
        }
      : null,
    lineHeight: {
      computed: cs.lineHeight,
      modelPx: metrics?.fontInk?.lineHeightPx ?? null,
      halfLeading: metrics?.fontInk?.halfLeading ?? cap?.halfLeading ?? null,
    },
    flexChain: flex?.chain ?? null,
    flexSummary: flex?.summary ?? null,
  }
}

/**
 * Device-pixel scan band for canvas ink row debug (matches measureCanvasInkForElement).
 * @param {Element} el
 * @param {Element} root
 * @param {number} dpr
 */
export function canvasInkScanRegionForElement(el, root, dpr = 1) {
  const rootRect = root.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const insetCss = Math.min(16, Math.max(4, r.width * 0.05))
  const leftCss = r.left - rootRect.left
  const topCss = r.top - rootRect.top
  const regionW = Math.max(1, Math.round(r.width * dpr))
  const regionH = Math.max(1, Math.round(r.height * dpr))
  const insetDev = Math.round(insetCss * dpr)
  const bandDev = Math.min(regionW - insetDev, Math.max(8, Math.round(28 * dpr)))
  const boxLeft = Math.round(leftCss * dpr)
  return {
    x: Math.max(0, boxLeft + insetDev),
    y: Math.max(0, Math.round(topCss * dpr)),
    w: Math.max(1, bandDev),
    h: regionH,
    borderTopCss: topCss,
    borderTopDev: Math.round(topCss * dpr),
  }
}

/**
 * Row-scan debug: first ink row vs expected border top (device + CSS px).
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr]
 */
export function buildCanvasInkRowScan(canvas, root, el, dpr = 1) {
  const region = canvasInkScanRegionForElement(el, root, dpr)
  let profile = null
  try {
    profile = measureCanvasInkRowProfile(canvas, region)
  } catch (e) {
    if (e?.name === 'SecurityError') return { tainted: true, region }
    throw e
  }
  if (!profile) return { region, profile: null }
  const firstRow = profile.firstInkRow
  const firstInkDevY = firstRow == null ? null : region.y + firstRow
  const expectedBorderTopDev = region.borderTopDev
  const deltaFirstInkVsBorderDev =
    firstInkDevY == null ? null : firstInkDevY - expectedBorderTopDev
  const deltaFirstInkVsBorderCss =
    deltaFirstInkVsBorderDev == null ? null : deltaFirstInkVsBorderDev / dpr
  const histogram = profile.profile.map((v, i) => ({
    row: i,
    density: Math.round(v * 1000) / 1000,
    isInk: v >= profile.minRowCoverage,
  }))
  return {
    region,
    firstInkRow: firstRow,
    firstInkRowSub: profile.firstInkRowSub,
    firstInkDevY,
    expectedBorderTopDev,
    deltaFirstInkVsBorderDev,
    deltaFirstInkVsBorderCss,
    peakDensity: profile.peakDensity,
    histogramSample: histogram.filter((_, i) => i < 12 || i % 2 === 0),
    histogramRows: histogram.length,
  }
}

/**
 * @param {{ layoutDeltaTop?: number|null, capDeltaClone?: number|null, canvasVsBorderTop?: number|null }} metrics
 * @param {number} [budgetPx]
 * @returns {'ok'|'layout'|'cap'|'raster-only'|'mixed'}
 */
export function classifyFailureClass(metrics, budgetPx = PARITY_DEBUG_BUDGET_PX) {
  const layoutFail =
    metrics.layoutDeltaTop != null && Math.abs(metrics.layoutDeltaTop) > budgetPx
  const capFail = metrics.capDeltaClone != null && Math.abs(metrics.capDeltaClone) > budgetPx
  const canvasFail =
    metrics.canvasVsBorderTop != null && Math.abs(metrics.canvasVsBorderTop) > budgetPx

  if (!layoutFail && !capFail && !canvasFail) return 'ok'
  if (layoutFail && !capFail && !canvasFail) return 'layout'
  if (!layoutFail && capFail && !canvasFail) return 'cap'
  if (!layoutFail && !capFail && canvasFail) return 'raster-only'
  if (!layoutFail && capFail && canvasFail) return 'mixed'
  if (layoutFail) return 'layout'
  return 'mixed'
}

function numDelta(a, b) {
  if (a == null || b == null || !Number.isFinite(a) || !Number.isFinite(b)) return null
  return b - a
}

/**
 * Side-by-side live / SVG clone / canvas with deltas (debug only).
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string} landmarkText
 * @param {{ dpr?: number, rasterMeta?: object|null }} [opts]
 */
export function buildPipelineStageDiff(root, svgMarkup, canvas, landmarkText, opts = {}) {
  const dpr = opts.dpr ?? 1
  const el = findCheckoutTextLeaf(root, landmarkText)
  if (!el) return { landmark: landmarkText, missing: true }

  const live = buildGeometrySnapshot(el, root)
  let clone = null
  if (svgMarkup) {
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;border:0'
    document.body.appendChild(iframe)
    try {
      const doc = iframe.contentDocument
      doc.open()
      doc.write('<!DOCTYPE html><html><body style="margin:0"></body></html>')
      doc.close()
      const parsed = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml')
      doc.body.appendChild(doc.importNode(parsed.documentElement, true))
      const cloneRoot =
        doc.getElementById('capture-target') || doc.querySelector('.checkout-page')
      const want = landmarkText.trim()
      for (const node of cloneRoot?.querySelectorAll('*') || []) {
        if (node.childElementCount > 0 && landmarkText !== 'Remember my details') continue
        if ((node.textContent || '').trim() === want) {
          clone = buildGeometrySnapshot(node, cloneRoot)
          break
        }
      }
    } finally {
      iframe.remove()
    }
  }

  const bundle = buildLandmarkMetricsBundle(root, svgMarkup, canvas, landmarkText, opts)
  let capCmp = null
  if (canvas) {
    try {
      capCmp = compareLiveCanvasCapInk(root, canvas, el, dpr)
    } catch (e) {
      if (e?.name === 'SecurityError') capCmp = { tainted: true }
      else throw e
    }
  }

  let canvasStage = null
  let rowScan = null
  if (canvas && !capCmp?.tainted) {
    const meta = opts.rasterMeta ?? readCanvasRasterMeta(canvas)
    canvasStage = {
      backingStore: { width: canvas.width, height: canvas.height },
      cssSize: { width: canvas.width / dpr, height: canvas.height / dpr },
      natural: {
        width: meta?.imgNaturalWidth ?? null,
        height: meta?.imgNaturalHeight ?? null,
      },
      rasterMeta: meta,
      ink: capCmp?.canvas
        ? {
            top: capCmp.canvas.top,
            bottom: capCmp.canvas.bottom,
            topInBorder: capCmp.canvas.topInBorder,
            bottomInBorder: capCmp.canvas.bottomInBorder,
          }
        : null,
      capVsLive: capCmp?.deltaTopInBorder ?? null,
    }
    rowScan = buildCanvasInkRowScan(canvas, root, el, dpr)
  } else if (capCmp?.tainted) {
    canvasStage = { tainted: true }
  }

  const layoutDeltaTop = numDelta(live?.borderBox?.top, clone?.borderBox?.top)
  const capDeltaClone = numDelta(live?.cap?.topInBorder, clone?.cap?.topInBorder)
  const canvasVsBorderTop = bundle.paint?.canvasVsBorderTop ?? null

  const failureClass = classifyFailureClass({
    layoutDeltaTop,
    capDeltaClone,
    canvasVsBorderTop,
  })

  const deltas = {
    layout: {
      liveVsClone: {
        borderTop: layoutDeltaTop,
        borderHeight: numDelta(live?.borderBox?.height, clone?.borderBox?.height),
        capTopInBorder: capDeltaClone,
      },
    },
    cap: {
      cloneCapVsLive: capDeltaClone,
      highlighted: capDeltaClone != null && Math.abs(capDeltaClone) > PARITY_DEBUG_BUDGET_PX,
    },
    canvas: {
      canvasVsLiveCap:
        live?.cap?.topInBorder != null && canvasStage?.ink?.topInBorder != null
          ? canvasStage.ink.topInBorder - live.cap.topInBorder
          : null,
      canvasVsBorderTop,
      canvasOnlyFailure:
        (layoutDeltaTop == null || Math.abs(layoutDeltaTop) <= PARITY_DEBUG_BUDGET_PX) &&
        (capDeltaClone == null || Math.abs(capDeltaClone) <= PARITY_DEBUG_BUDGET_PX) &&
        canvasVsBorderTop != null &&
        Math.abs(canvasVsBorderTop) > PARITY_DEBUG_BUDGET_PX,
      rowScanDeltaTopCss: rowScan?.deltaFirstInkVsBorderCss ?? null,
    },
  }

  return {
    landmark: landmarkText,
    failureClass,
    stages: {
      live: { ...live, stage: 'live-dom' },
      svgClone: clone ? { ...clone, stage: 'svg-fo-clone' } : null,
      canvas: canvasStage,
    },
    sideBySide: {
      capTopInBorder: {
        live: live?.cap?.topInBorder ?? null,
        clone: clone?.cap?.topInBorder ?? null,
        canvas: canvasStage?.ink?.topInBorder ?? null,
      },
      borderBoxTop: {
        live: live?.borderBox?.top ?? null,
        clone: clone?.borderBox?.top ?? null,
      },
      lineHeightPx: {
        live: live?.lineHeight?.modelPx ?? null,
        clone: clone?.lineHeight?.modelPx ?? null,
      },
    },
    deltas,
    rowScan,
    bundle,
    rasterTimeline: canvasStage?.rasterMeta?.timeline ?? null,
  }
}

/**
 * Device-pixel probe for `toCanvas({ debugInkProbe })`.
 * @param {Element} root
 * @param {Element} el
 * @param {number} [dpr]
 */
export function buildDebugInkProbeRegion(root, el, dpr = 1) {
  const { x, y, w, h } = canvasInkScanRegionForElement(el, root, dpr)
  return { x, y, w, h }
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {Element} root
 * @param {Element} el
 * @param {string} label
 * @param {number} [dpr]
 */
export function exportLandmarkCropPng(canvas, root, el, label, dpr = 1) {
  const rootRect = root.getBoundingClientRect()
  const r = el.getBoundingClientRect()
  const padCss = 6
  const left = Math.max(0, r.left - rootRect.left - padCss)
  const top = Math.max(0, r.top - rootRect.top - padCss)
  const wCss = r.width + padCss * 2
  const hCss = r.height + padCss * 2
  const x = Math.max(0, Math.floor(left * dpr))
  const y = Math.max(0, Math.floor(top * dpr))
  const w = Math.min(canvas.width - x, Math.ceil(wCss * dpr))
  const h = Math.min(canvas.height - y, Math.ceil(hCss * dpr))
  const out = document.createElement('canvas')
  out.width = w
  out.height = h
  const ctx = out.getContext('2d')
  ctx.drawImage(canvas, x, y, w, h, 0, 0, w, h)
  return {
    label,
    dataUrl: out.toDataURL('image/png'),
    width: w,
    height: h,
    cssW: w / dpr,
    cssH: h / dpr,
    deviceRect: { x, y, w, h },
  }
}

const INTROSPECT_DELTA_EPS = PARITY_DEBUG_BUDGET_PX

/**
 * Walk capture → SVG string → inline FO clone → canvas / image-decode with sizes and cap tops.
 * `imageDecode` may be supplied by {@link probeImageDecodeCapTop} (async, playground).
 *
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {string} landmarkText
 * @param {{
 *   dpr?: number,
 *   rasterMeta?: object|null,
 *   imageDecode?: { capTopInBorder?: number|null, naturalWidth?: number|null, ms?: number }|null,
 * }} [opts]
 */
export function buildIntrospectPipelineReport(
  root,
  svgMarkup,
  canvas,
  landmarkText,
  opts = {},
) {
  const t0 = performance.now()
  const dpr = opts.dpr ?? 1
  const svgBytes = svgMarkup ? new TextEncoder().encode(svgMarkup).length : 0
  const blobBytesEstimate = svgMarkup
    ? Math.ceil((svgBytes * 4) / 3)
    : null

  const pipeline = buildPipelineStageDiff(root, svgMarkup, canvas, landmarkText, {
    dpr,
    rasterMeta: opts.rasterMeta ?? (canvas ? readCanvasRasterMeta(canvas) : null),
  })

  const capLive = pipeline.sideBySide?.capTopInBorder?.live ?? null
  const capClone = pipeline.sideBySide?.capTopInBorder?.clone ?? null
  const capCanvas = pipeline.sideBySide?.capTopInBorder?.canvas ?? null
  const capImageDecode = opts.imageDecode?.capTopInBorder ?? null

  /** @type {{ id: string, capTopInBorder: number|null, deltaFromLive: number|null, absDelta: number|null }[]} */
  const capStages = [
    {
      id: 'live-dom',
      capTopInBorder: capLive,
      deltaFromLive: 0,
      absDelta: 0,
    },
    {
      id: 'svg-fo-clone',
      capTopInBorder: capClone,
      deltaFromLive: pipeline.deltas?.cap?.cloneCapVsLive ?? null,
      absDelta:
        pipeline.deltas?.cap?.cloneCapVsLive != null
          ? Math.abs(pipeline.deltas.cap.cloneCapVsLive)
          : null,
    },
    {
      id: 'image-decode-canvas',
      capTopInBorder: capImageDecode,
      deltaFromLive:
        capLive != null && capImageDecode != null ? capImageDecode - capLive : null,
      absDelta:
        capLive != null && capImageDecode != null
          ? Math.abs(capImageDecode - capLive)
          : null,
    },
    {
      id: 'snapdom-canvas',
      capTopInBorder: capCanvas,
      deltaFromLive: pipeline.deltas?.canvas?.canvasVsLiveCap ?? null,
      absDelta:
        pipeline.deltas?.canvas?.canvasVsLiveCap != null
          ? Math.abs(pipeline.deltas.canvas.canvasVsLiveCap)
          : null,
    },
  ]

  let firstDeltaStage = null
  for (const stage of capStages) {
    if (stage.id === 'live-dom') continue
    if (stage.absDelta != null && stage.absDelta > INTROSPECT_DELTA_EPS) {
      firstDeltaStage = stage.id
      break
    }
  }

  const imageVsInline =
    capClone != null && capImageDecode != null ? capImageDecode - capClone : null

  return {
    landmark: landmarkText,
    failureClass: pipeline.failureClass,
    at: new Date().toISOString(),
    sizes: {
      svgUtf8Bytes: svgBytes,
      blobBase64EstimateBytes: blobBytesEstimate,
      canvasBackingStore:
        canvas != null ? { width: canvas.width, height: canvas.height } : null,
    },
    devicePixelRatio: dpr,
    rasterMeta: opts.rasterMeta ?? pipeline.stages?.canvas?.rasterMeta ?? null,
    capStages,
    firstDeltaStage,
    interpretation: {
      captureOk:
        pipeline.deltas?.cap?.cloneCapVsLive == null ||
        Math.abs(pipeline.deltas.cap.cloneCapVsLive) <= INTROSPECT_DELTA_EPS,
      decodeShift:
        imageVsInline != null && Math.abs(imageVsInline) > INTROSPECT_DELTA_EPS,
      snapdomMatchesDecode:
        capImageDecode != null &&
        capCanvas != null &&
        Math.abs(capCanvas - capImageDecode) <= INTROSPECT_DELTA_EPS,
      note:
        firstDeltaStage === 'image-decode-canvas'
          ? 'Delta appears at SVG→Image decode (inline FO clone still matches live).'
          : firstDeltaStage === 'snapdom-canvas' && capImageDecode == null
            ? 'Run with imageDecode probe to separate decode vs snapdom raster.'
            : firstDeltaStage === 'svg-fo-clone'
              ? 'Delta already in serialized FO clone — capture/styles, not raster.'
              : firstDeltaStage == null
                ? 'All cap stages within budget vs live.'
                : `First stage above ${INTROSPECT_DELTA_EPS}px budget: ${firstDeltaStage}`,
    },
    pipeline,
    timingsMs: {
      report: Math.round((performance.now() - t0) * 100) / 100,
      imageDecode: opts.imageDecode?.ms ?? null,
    },
    imageDecode: opts.imageDecode ?? null,
  }
}

/**
 * @param {number|null|undefined} n
 * @param {number} [digits]
 */
export function formatDebugDeltaPx(n, digits = 2) {
  if (n == null || !Number.isFinite(n)) return '—'
  return `${n >= 0 ? '+' : ''}${Number(n).toFixed(digits)}px`
}

/**
 * One-line human summary for playground / CLI / blackbox stderr.
 * @param {ReturnType<typeof buildLandmarkMetricsBundle>|ReturnType<typeof buildIntrospectPipelineReport>|null} bundleOrReport
 * @param {{ introspect?: ReturnType<typeof buildIntrospectPipelineReport>|null }} [opts]
 */
export function explainFailureFromBundle(bundleOrReport, opts = {}) {
  const bundle = bundleOrReport?.bundle ?? bundleOrReport?.pipeline?.bundle ?? bundleOrReport
  const introspect = opts.introspect ?? (bundleOrReport?.firstDeltaStage != null ? bundleOrReport : null)
  if (!bundle || bundle.missing) {
    return `${bundleOrReport?.landmark ?? '?'}: missing (capture first)`
  }
  const lm = bundle.landmark ?? introspect?.landmark ?? '?'
  const fc = bundle.failureClass ?? introspect?.failureClass ?? '—'
  const canvasΔ =
    bundle.paint?.canvasVsBorderTop ?? bundle.deltas?.liveToCanvas?.cap?.top ?? null
  const capΔ =
    bundle.paint?.capDeltaClone ?? bundle.deltas?.liveToSvg?.cap?.top ?? null
  const layoutΔ = bundle.deltas?.liveToSvg?.layout?.top ?? null

  let stage = introspect?.firstDeltaStage ?? null
  if (!stage) {
    if (fc === 'raster-only' || bundle.flags?.svgOkCanvasBad) stage = 'image-decode-canvas'
    else if (fc === 'svg-clone' || fc === 'cap') stage = 'svg-fo-clone'
    else if (fc === 'layout') stage = 'layout'
    else if (fc === 'ok') stage = 'none'
  }

  const parts = [
    `${lm}: ${fc}`,
    `stage=${stage ?? '?'}`,
    `canvasΔ=${formatDebugDeltaPx(canvasΔ)}`,
    `capΔsvg=${formatDebugDeltaPx(capΔ)}`,
    `layoutΔ=${formatDebugDeltaPx(layoutΔ)}`,
  ]
  if (introspect?.interpretation?.decodeShift) {
    parts.push('decodeShift=yes')
  }
  if (introspect?.imageDecode?.naturalWidth != null) {
    parts.push(`naturalW=${introspect.imageDecode.naturalWidth}`)
  }
  return parts.join(' | ')
}

/**
 * @param {string} landmarkText
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {HTMLCanvasElement|null} canvas
 * @param {{ dpr?: number, rasterMeta?: object|null, introspect?: object|null }} [opts]
 */
export function explainFailure(landmarkText, root, svgMarkup, canvas, opts = {}) {
  const bundle = buildLandmarkMetricsBundle(root, svgMarkup, canvas, landmarkText, opts)
  return explainFailureFromBundle(bundle, { introspect: opts.introspect ?? null })
}

/**
 * Live cap model vs canvas alpha row scan (same band as blackbox ink).
 * @param {string} landmarkText
 * @param {Element} root
 * @param {HTMLCanvasElement|null} canvas
 * @param {{ dpr?: number }} [opts]
 */
export function debugInkRowScan(landmarkText, root, canvas, opts = {}) {
  const dpr = opts.dpr ?? 1
  const el = findCheckoutTextLeaf(root, landmarkText)
  if (!el) return { landmark: landmarkText, error: 'landmark not found' }
  if (!canvas) return { landmark: landmarkText, error: 'canvas required' }

  const liveCap = measureCapInk(el, root)
  let canvasScan = null
  let canvasCap = null
  let tainted = false
  try {
    canvasScan = buildCanvasInkRowScan(canvas, root, el, dpr)
    canvasCap = measureCanvasInkForElement(canvas, root, el, dpr)
  } catch (e) {
    if (e?.name === 'SecurityError') tainted = true
    else throw e
  }

  const liveTop = liveCap?.topInBorder ?? null
  const canvasTop = canvasCap?.topInBorder ?? canvasScan?.deltaFirstInkVsBorderCss != null
    ? liveTop != null
      ? liveTop + (canvasScan?.deltaFirstInkVsBorderCss ?? 0)
      : null
    : null
  const deltaTop =
    liveTop != null && canvasTop != null ? canvasTop - liveTop : canvasScan?.deltaFirstInkVsBorderCss ?? null

  return {
    landmark: landmarkText,
    warnThresholdPx: PARITY_DEBUG_BUDGET_PX,
    live: {
      mode: 'cap-model',
      topInBorder: liveTop,
      firstInkRowDev: null,
    },
    canvas: {
      mode: 'alpha-scan',
      topInBorder: canvasTop,
      firstInkRowDev: canvasScan?.firstInkRow ?? null,
      rowScan: canvasScan,
      tainted,
    },
    deltaTopInBorder: deltaTop,
    warn: deltaTop != null && Math.abs(deltaTop) > PARITY_DEBUG_BUDGET_PX,
  }
}

export {
  buildThreeWayCapCompare,
  buildThreeWayInkRowScan,
  buildSvgFromLiveRoot,
} from './fo-three-way-probe.js'

/**
 * @param {string} landmarkText
 * @param {Element} root
 * @param {string|null} svgMarkup
 * @param {Element} [liveEl]
 * @param {{ dpr?: number }} [opts]
 */
export async function compareThreeWay(landmarkText, root, svgMarkup, liveEl, opts = {}) {
  const el = liveEl ?? findCheckoutTextLeaf(root, landmarkText)
  if (!el) return { error: 'landmark not found', landmark: landmarkText }
  const dpr = opts.dpr ?? 1
  const { buildThreeWayCapCompare, buildThreeWayInkRowScan } = await import(
    './fo-three-way-probe.js'
  )
  const cap = await buildThreeWayCapCompare(root, svgMarkup, el, dpr)
  const inkRows = await buildThreeWayInkRowScan(root, svgMarkup, el, dpr)
  return { landmark: landmarkText, dpr, cap, inkRows }
}
