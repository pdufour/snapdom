/**
 * Browser-side decode→draw pipeline audit (SVG → URL → decode → drawImage).
 * Used by fo-decode-pipeline-audit.html / .mjs (headed Chrome).
 */
import { rasterInkAlignDestDy } from '../src/utils/inkMeta.js'
import { toCanvas as productToCanvas } from '../src/exporters/toCanvas.js'
import { toCanvas as labToCanvas } from './fo-fix-toCanvas.js'
import {
  compareThreeWayInk,
  enrichRasterMetaFromTextLeaf,
  findLandmarkElement,
  mergeCaptureMeta,
  parseCaptureMeta,
  runFoFixProbe,
  svgFromDataUrl,
} from './fo-fix-lab-runner.js'

/** @typedef {'data-url' | 'blob-url'} UrlKind */

/**
 * @param {CanvasImageSource} src
 */
function sourceDims(src) {
  if (src instanceof ImageBitmap) return { width: src.width, height: src.height }
  if (src instanceof HTMLImageElement) {
    return { naturalWidth: src.naturalWidth, naturalHeight: src.naturalHeight }
  }
  if (src instanceof HTMLCanvasElement) {
    return { width: src.width, height: src.height }
  }
  return {}
}

/**
 * @param {IArguments | unknown[]} args
 */
function serializeDrawImageArgs(args) {
  const a = [...args]
  const img = a[0]
  const imgInfo = sourceDims(/** @type {CanvasImageSource} */ (img))
  if (a.length === 3) {
    return { form: '3-arg', img: imgInfo, dx: a[1], dy: a[2] }
  }
  if (a.length === 5) {
    return { form: '5-arg', img: imgInfo, dx: a[1], dy: a[2], dw: a[3], dh: a[4] }
  }
  if (a.length === 9) {
    return {
      form: '9-arg',
      img: imgInfo,
      sx: a[1],
      sy: a[2],
      sw: a[3],
      sh: a[4],
      dx: a[5],
      dy: a[6],
      dw: a[7],
      dh: a[8],
    }
  }
  return { form: `${a.length}-arg`, rawLen: a.length }
}

export function installDrawImageProbe() {
  /** @type {ReturnType<typeof serializeDrawImageArgs>[]} */
  const calls = []
  const proto = CanvasRenderingContext2D.prototype
  const orig = proto.drawImage
  proto.drawImage = function drawImageProbe(...args) {
    calls.push(serializeDrawImageArgs(args))
    return orig.apply(this, args)
  }
  return () => {
    proto.drawImage = orig
    return calls
  }
}

/**
 * @param {string} svgText
 */
export function parseSvgPipelineAttrs(svgText) {
  try {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml')
    const svg = doc.documentElement
    const fo = doc.querySelector('foreignObject')
    const container = fo?.firstElementChild
    return {
      svgRoot: {
        width: svg.getAttribute('width'),
        height: svg.getAttribute('height'),
        viewBox: svg.getAttribute('viewBox'),
      },
      foreignObject: fo
        ? {
            x: fo.getAttribute('x'),
            y: fo.getAttribute('y'),
            width: fo.getAttribute('width'),
            height: fo.getAttribute('height'),
          }
        : null,
      foContainer: container
        ? {
            tag: container.tagName.toLowerCase(),
            width: container.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1] ?? null,
            height: container.getAttribute('style')?.match(/height:\s*([^;]+)/)?.[1] ?? null,
          }
        : null,
    }
  } catch (err) {
    return { error: String(err?.message || err) }
  }
}

/**
 * @param {string} svgText
 * @param {UrlKind} kind
 */
export async function decodeIntrinsicFromSvg(svgText, kind = 'data-url') {
  /** @type {string} */
  let url
  /** @type {(() => void) | null} */
  let revoke = null
  if (kind === 'blob-url') {
    const blob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
    url = URL.createObjectURL(blob)
    revoke = () => URL.revokeObjectURL(url)
  } else {
    url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
  }

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  // Match src/exporters/toCanvas.js — no crossOrigin on data:/blob: URLs.
  img.src = url
  try {
    await img.decode()
  } catch (err) {
    return {
      urlKind: kind,
      error: String(err?.message || err),
      naturalWidth: img.naturalWidth || null,
      naturalHeight: img.naturalHeight || null,
      complete: img.complete,
    }
  }
  if (revoke) revoke()
  return {
    urlKind: kind,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    complete: img.complete,
  }
}

function snapBackingPx(px, mode = 'round') {
  const n = Number(px) || 1
  if (mode === 'ceil') return Math.max(1, Math.ceil(n))
  if (mode === 'floor') return Math.max(1, Math.floor(n))
  return Math.max(1, Math.round(n))
}

/**
 * Mirror src/exporters/toCanvas.js computeRasterDrawRect + dim chain.
 * @param {object} opts
 */
export function computeProductDrawTrace(opts) {
  const {
    natW,
    natH,
    optW,
    optH,
    scale = 1,
    dpr = 1,
    meta = {},
    experimentalRasterNaturalDims = false,
    experimentalRasterDisableGbcrNudge = false,
    experimentalRasterInkAlign = false,
    experimentalRasterMetaInkAlign = false,
    experimentalRasterBackingCeil = false,
    experimentalRasterCtxNoScale = false,
  } = opts

  const backingRound = experimentalRasterBackingCeil ? Math.ceil : Math.round
  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

  let outW
  let outH
  const hasW = Number.isFinite(optW)
  const hasH = Number.isFinite(optH)
  if (hasW && hasH) {
    outW = Math.max(1, optW)
    outH = Math.max(1, optH)
  } else if (hasW) {
    outW = optW
    outH = refH * (optW / Math.max(1, refW))
  } else if (hasH) {
    outH = optH
    outW = refW * (optH / Math.max(1, refH))
  } else {
    outW = natW
    outH = natH
  }
  outW *= scale
  outH *= scale

  const physicalW = backingRound(outW * dpr)
  const physicalH = backingRound(outH * dpr)
  const ctxScale = !experimentalRasterCtxNoScale
  const paintW = ctxScale ? outW : physicalW
  const paintH = ctxScale ? outH : physicalH

  const nw = Math.max(1, natW)
  const nh = Math.max(1, natH)
  const gbcrActive =
    !experimentalRasterDisableGbcrNudge &&
    Number.isFinite(meta.gbcrFracX) &&
    Number.isFinite(meta.gbcrFracY)

  let dx = 0
  let dy = 0
  let dw = paintW
  let dh = paintH
  if (experimentalRasterNaturalDims) {
    const s = Math.min(paintW / nw, paintH / nh)
    dw = nw * s
    dh = nh * s
    dx = (paintW - dw) / 2
    dy = (paintH - dh) / 2
  }
  if (gbcrActive) {
    dx -= meta.gbcrFracX
    dy -= meta.gbcrFracY
  }
  const inkAlign = experimentalRasterInkAlign || experimentalRasterMetaInkAlign
  let inkAlignDy = 0
  if (inkAlign) {
    inkAlignDy = rasterInkAlignDestDy(meta, paintH, refH)
    dy += inkAlignDy
  }

  const useNineArg = experimentalRasterNaturalDims || gbcrActive
  const useDestNudge = !useNineArg && (dx !== 0 || dy !== 0)

  return {
    path: 'src/exporters/toCanvas.js',
    refW,
    refH,
    outW,
    outH,
    physicalW,
    physicalH,
    paintW,
    paintH,
    ctxScale,
    gbcrActive,
    gbcrNudge: gbcrActive ? { dx: -meta.gbcrFracX, dy: -meta.gbcrFracY } : null,
    inkAlignDy,
    draw: useNineArg
      ? { form: '9-arg', sx: 0, sy: 0, sw: nw, sh: nh, dx, dy, dw, dh }
      : useDestNudge
        ? { form: '5-arg-nudge', dx, dy, dw: paintW, dh: paintH }
        : { form: '5-arg', dx: 0, dy: 0, dw: paintW, dh: paintH },
    natVsDest: {
      naturalW: natW,
      naturalH: natH,
      destW: useNineArg ? dw : paintW,
      destH: useNineArg ? dh : paintH,
      naturalMatchesDest:
        Math.abs(natW - (useNineArg ? dw : paintW)) < 0.01 &&
        Math.abs(natH - (useNineArg ? dh : paintH)) < 0.01,
    },
  }
}

/**
 * Mirror fo-fix-toCanvas.js default drawMain (lab baseline knobs).
 * @param {object} opts
 */
export function computeLabDrawTrace(opts) {
  const {
    natW,
    natH,
    optW,
    optH,
    scale = 1,
    dpr = 1,
    meta = {},
    labToCanvasOpts = {},
  } = opts

  const backingRound = labToCanvasOpts.backingRound ?? 'round'
  const ctxScale = labToCanvasOpts.ctxScale ?? true
  const disableGbcr = Boolean(labToCanvasOpts.disableGbcrFracNudge)
  const inkAlign = Boolean(labToCanvasOpts.inkAlign)
  const inkOffsetFromFoTop = Boolean(labToCanvasOpts.inkOffsetFromFoTop)
  const strutRangeSubpixelDrawDy = Boolean(labToCanvasOpts.strutRangeSubpixelDrawDy)
  const drawDest = labToCanvasOpts.drawDest ?? 'paint-box'
  const vDriftFix = Boolean(labToCanvasOpts.vDriftFix)

  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH
  let outW = Math.max(1, optW)
  let outH = Math.max(1, optH)
  outW *= scale
  outH *= scale

  const backingW = snapBackingPx(outW * dpr, backingRound)
  const backingH = snapBackingPx(outH * dpr, backingRound)
  const paintW = ctxScale ? backingW / dpr : backingW
  const paintH = ctxScale ? backingH / dpr : backingH
  let dw = paintW
  let dh = paintH

  let dx = 0
  let dy = 0
  const hasGbcr = Number.isFinite(meta.gbcrFracX) && Number.isFinite(meta.gbcrFracY)
  if (!disableGbcr && hasGbcr) {
    if (vDriftFix) {
      dx = -meta.gbcrFracX
      dy = -meta.gbcrFracY
    } else if (labToCanvasOpts.measuredDest === 'gbcr-frac') {
      dx = meta.gbcrFracX
      dy = meta.gbcrFracY
    }
  }

  /** @type {Record<string, number>} */
  const halfLeadingEntries = {}
  let inkAlignDy = 0
  if (inkAlign) {
    inkAlignDy = rasterInkAlignDestDy(meta, paintH, refH)
    dy += inkAlignDy
    halfLeadingEntries.inkAlignDestDy = inkAlignDy
  }
  if (inkOffsetFromFoTop) {
    const off = Number.isFinite(meta.inkTopOffsetFromFoTop)
      ? -meta.inkTopOffsetFromFoTop
      : Number.isFinite(meta.lhStrutHalfLeadingPx)
        ? -meta.lhStrutHalfLeadingPx
        : 0
    dy += off
    halfLeadingEntries.inkOffsetFromFoTopDy = off
  }
  if (strutRangeSubpixelDrawDy) {
    const sub = Number.isFinite(meta.lhStrutRangeSubpixelPx) ? meta.lhStrutRangeSubpixelPx : 0
    dy += sub
    halfLeadingEntries.strutRangeSubpixelDy = sub
  }

  if (drawDest === 'natural-dims') {
    dw = natW
    dh = natH
  }

  const useNineArg =
    drawDest === 'natural-dims' ||
    (!disableGbcr && hasGbcr && (vDriftFix || labToCanvasOpts.measuredDest === 'gbcr-frac'))

  return {
    path: '__localtests__/fo-fix-toCanvas.js',
    refW,
    refH,
    outW,
    outH,
    backingW,
    backingH,
    paintW,
    paintH,
    gbcrNudge: !disableGbcr && hasGbcr ? { dx, dy: dy - inkAlignDy } : null,
    inkAlignDy,
    halfLeadingEntries,
    draw: useNineArg
      ? { form: '9-arg', sx: 0, sy: 0, sw: natW, sh: natH, dx, dy, dw, dh }
      : { form: '5-arg', dx, dy, dw, dh },
    natVsDest: {
      naturalW: natW,
      naturalH: natH,
      destW: dw,
      destH: dh,
    },
  }
}

/**
 * Where half-leading can enter the raster path (besides FO y patch).
 * @param {object} meta
 * @param {object} labToCanvasOpts
 */
export function listHalfLeadingEntryPoints(meta, labToCanvasOpts = {}) {
  /** @type {{ stage: string, mechanism: string, px: number | null, active: boolean }[]} */
  const entries = [
    {
      stage: 'svg-fork',
      mechanism: 'foreignObject y − lhStrutHalfLeadingPx (fo-y-half-leading-meta)',
      px: meta?.lhStrutHalfLeadingPx ?? null,
      active: labToCanvasOpts.rasterOnlySvgPatch === 'fo-y-half-leading-meta',
    },
    {
      stage: 'drawImage',
      mechanism: 'inkAlign → rasterInkAlignDestDy (Range vs cap-model)',
      px: null,
      active: Boolean(labToCanvasOpts.inkAlign),
    },
    {
      stage: 'drawImage',
      mechanism: 'inkOffsetFromFoTop / −lhStrutHalfLeadingPx',
      px: meta?.lhStrutHalfLeadingPx ?? null,
      active: Boolean(labToCanvasOpts.inkOffsetFromFoTop),
    },
    {
      stage: 'drawImage',
      mechanism: 'strutRangeSubpixelDrawDy',
      px: meta?.lhStrutRangeSubpixelPx ?? null,
      active: Boolean(labToCanvasOpts.strutRangeSubpixelDrawDy),
    },
    {
      stage: 'drawImage',
      mechanism: 'gbcrFracY nudge (product default −gbcrFracY)',
      px: meta?.gbcrFracY ?? null,
      active: true,
    },
    {
      stage: 'drawImage',
      mechanism: 'natural-dims contain centering dy',
      px: null,
      active: labToCanvasOpts.drawDest === 'natural-dims',
    },
    {
      stage: 'fo-layout',
      mechanism: 'serialized line-height / strut inside FO (not drawImage)',
      px: meta?.lhStrutHalfLeadingPx ?? null,
      active: true,
    },
  ]
  return entries
}

/**
 * @param {import('./fo-fix-recipes.js').FoFixRecipe} recipe
 * @param {object} ctx
 * @param {{ svgText: string, canvas: HTMLCanvasElement }} probe
 */
async function auditRecipeRasterPaths(recipe, ctx, probeRow, baselineFoY = null) {
  const { root, el, dpr, scale, dims, meta, svgText } = ctx
  const labToCanvasOpts = { ...(recipe.labToCanvasOpts ?? {}) }
  const patchId = labToCanvasOpts.rasterOnlySvgPatch ?? null

  const postSvg = svgText
  const postAttrs = parseSvgPipelineAttrs(postSvg)
  const postFoY = postAttrs.foreignObject?.y != null ? parseFloat(postAttrs.foreignObject.y) : null
  const foYDelta =
    baselineFoY != null && postFoY != null && Number.isFinite(baselineFoY) && Number.isFinite(postFoY)
      ? postFoY - baselineFoY
      : patchId
        ? -(meta?.lhStrutHalfLeadingPx ?? 0)
        : null

  const decodeData = await decodeIntrinsicFromSvg(postSvg, 'data-url')
  const decodeBlob = await decodeIntrinsicFromSvg(postSvg, 'blob-url')
  if (decodeBlob.error && decodeData.error) {
    throw new Error(
      `${recipe.id}: decode failed data=${decodeData.error} blob=${decodeBlob.error}`,
    )
  }
  const natW = decodeBlob.naturalWidth || decodeData.naturalWidth || 1
  const natH = decodeBlob.naturalHeight || decodeData.naturalHeight || 1

  const productTrace = computeProductDrawTrace({
    natW,
    natH,
    optW: dims.cssW,
    optH: dims.cssH,
    scale,
    dpr,
    meta,
  })

  const labTrace = computeLabDrawTrace({
    natW,
    natH,
    optW: dims.cssW,
    optH: dims.cssH,
    scale,
    dpr,
    meta,
    labToCanvasOpts,
  })

  /** Product toCanvas via blob (matches rasterProductToCanvas). */
  let productCanvas = null
  /** @type {ReturnType<typeof serializeDrawImageArgs>[]} */
  let productDrawActual = []
  try {
    const uninstallProduct = installDrawImageProbe()
    const blob = new Blob([postSvg], { type: 'image/svg+xml;charset=utf-8' })
    const blobUrl = URL.createObjectURL(blob)
    try {
      productCanvas = await productToCanvas(blobUrl, {
        width: dims.cssW,
        height: dims.cssH,
        scale,
        dpr,
        meta,
      })
    } finally {
      URL.revokeObjectURL(blobUrl)
    }
    productDrawActual = uninstallProduct()
  } catch (err) {
    productDrawActual = [{ form: 'error', error: String(err?.message || err) }]
  }

  /** Lab toCanvas (w7 path). */
  let labCanvas = null
  /** @type {ReturnType<typeof serializeDrawImageArgs>[]} */
  let labDrawActual = []
  try {
    const uninstallLab = installDrawImageProbe()
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(postSvg)}`
    labCanvas = await labToCanvas(dataUrl, {
      width: dims.cssW,
      height: dims.cssH,
      scale,
      dpr,
      meta,
      labToCanvasOpts: { ...labToCanvasOpts, debugLh: true },
    })
    labDrawActual = uninstallLab()
  } catch (err) {
    labDrawActual = [{ form: 'error', error: String(err?.message || err) }]
  }

  const fixtureDims = { cssW: dims.cssW, cssH: dims.cssH }
  const cmp = compareThreeWayInk(root, probeRow.canvas, postSvg, el, dpr, fixtureDims)

  return {
    recipeId: recipe.id,
    rasterPatch: recipe.rasterPatch ?? 'none',
    labToCanvasOpts: labToCanvasOpts,
    meta: {
      w0: meta.w0,
      h0: meta.h0,
      gbcrFracX: meta.gbcrFracX,
      gbcrFracY: meta.gbcrFracY,
      lhStrutHalfLeadingPx: meta.lhStrutHalfLeadingPx ?? null,
      lhStrutLineHeightPx: meta.lhStrutLineHeightPx ?? null,
      lhStrutFontSizePx: meta.lhStrutFontSizePx ?? null,
      inkTopFracInBorder: meta.inkTopFracInBorder ?? null,
      inkTopFracExpected: meta.inkTopFracExpected ?? null,
    },
    svgAttrs: { post: postAttrs, foYDeltaPx: foYDelta, patchId, baselineFoY },
    decode: { dataUrl: decodeData, blobUrl: decodeBlob },
    dims: { cssW: dims.cssW, cssH: dims.cssH, dpr, scale },
    drawComputed: { product: productTrace, lab: labTrace },
    drawActual: {
      product: productDrawActual,
      lab: labDrawActual,
    },
    halfLeadingEntryPoints: listHalfLeadingEntryPoints(meta, labToCanvasOpts),
    canvasBacking: {
      product: productCanvas
        ? { width: productCanvas.width, height: productCanvas.height }
        : null,
      lab: labCanvas ? { width: labCanvas.width, height: labCanvas.height } : null,
      probe: { width: probeRow.canvas.width, height: probeRow.canvas.height },
    },
    ink: {
      liveVsSvgTopPx: cmp.liveVsSvgTopPx,
      liveVsCanvasTopPx: cmp.liveVsCanvasTopPx,
      svgVsCanvasTopPx:
        cmp.svg?.topInBorder != null && cmp.canvas?.topInBorder != null
          ? cmp.canvas.topInBorder - cmp.svg.topInBorder
          : null,
    },
  }
}

/**
 * Full headed audit — product-baseline vs w7.
 * @param {{ root: HTMLElement, landmark?: string, dpr?: number, scale?: number }} opts
 */
export async function runDecodePipelineAudit(opts) {
  const root = opts.root
  const landmark = (opts.landmark || 'Home').trim()
  const dpr = Math.max(0.5, Number(opts.dpr) || 1)
  const scale = Math.max(0.25, Number(opts.scale) || 1)
  const el = findLandmarkElement(root, landmark)
  if (!el) throw new Error(`landmark not found: ${landmark}`)

  await document.fonts.ready
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))

  const { snapdom } = await import('/dist/snapdom.mjs')
  window.snapdom = snapdom

  const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
  const recipeIds = ['product-baseline', 'tc-fix-w7-rfork-fo-y-half-leading-meta']

  /** @type {Map<string, Awaited<ReturnType<typeof runFoFixProbe>>>} */
  const probes = new Map()
  for (const id of recipeIds) {
    const recipe = getFoFixRecipe(id)
    if (!recipe) throw new Error(`missing recipe ${id}`)
    probes.set(id, await runFoFixProbe(recipe, { root, landmark, dpr, scale }))
  }

  const baselineProbe = probes.get('product-baseline')
  const baselineFoAttrs = baselineProbe
    ? parseSvgPipelineAttrs(baselineProbe.svgText)
    : null
  const baselineFoY =
    baselineFoAttrs?.foreignObject?.y != null
      ? parseFloat(baselineFoAttrs.foreignObject.y)
      : null

  const cssW = root.offsetWidth || root.getBoundingClientRect().width
  const cssH = root.offsetHeight || root.getBoundingClientRect().height
  const dims = { cssW, cssH, dpr }

  /** @type {Awaited<ReturnType<typeof auditRecipeRasterPaths>>[]} */
  const variants = []
  for (const id of recipeIds) {
    const recipe = getFoFixRecipe(id)
    const probeRow = probes.get(id)
    if (!recipe || !probeRow) continue
    const meta = enrichRasterMetaFromTextLeaf(
      el,
      mergeCaptureMeta(null, probeRow.svgText, root),
    )
    variants.push(
      await auditRecipeRasterPaths(
        recipe,
        {
          root,
          el,
          landmark,
          dpr,
          scale,
          dims,
          meta,
          svgText: probeRow.svgText,
        },
        probeRow,
        id === 'product-baseline' ? null : baselineFoY,
      ),
    )
  }

  const baseline = variants.find((v) => v.recipeId === 'product-baseline')
  const w7 = variants.find((v) => v.recipeId === 'tc-fix-w7-rfork-fo-y-half-leading-meta')

  return {
    probe: 'fo-decode-pipeline-audit',
    fixture: 'mini-nav',
    landmark,
    dpr,
    scale,
    pipelineStages: [
      'capture SVG string (snapdom.toRaw data URL)',
      'optional rasterOnlySvgPatch on SVG bytes (lab w7: fo-y-half-leading-meta)',
      'URL handoff: data: (lab default) or blob: (product toCanvas in runner)',
      'HTMLImageElement decode → naturalWidth / naturalHeight',
      'dim chain: meta.w0/h0, opt width/height, scale, dpr → backing + paint box',
      'computeRasterDrawRect / lab drawMain → drawImage dest rect',
      'half-leading: FO y patch (svg-fork) OR draw dy knobs (inkAlign, gbcr, offset)',
    ],
    variants,
    comparison: {
      baselineCanvasDeltaPx: baseline?.ink?.liveVsCanvasTopPx ?? null,
      w7CanvasDeltaPx: w7?.ink?.liveVsCanvasTopPx ?? null,
      canvasDeltaImprovementPx:
        baseline?.ink?.liveVsCanvasTopPx != null && w7?.ink?.liveVsCanvasTopPx != null
          ? baseline.ink.liveVsCanvasTopPx - w7.ink.liveVsCanvasTopPx
          : null,
      baselineSvgDeltaPx: baseline?.ink?.liveVsSvgTopPx ?? null,
      w7FoYDeltaPx: w7?.svgAttrs?.foYDeltaPx ?? null,
      w7FoYExpectedFromMetaPx:
        w7?.meta?.lhStrutHalfLeadingPx != null ? -w7.meta.lhStrutHalfLeadingPx : null,
      w7HalfLeadingMetaPx: w7?.meta?.lhStrutHalfLeadingPx ?? null,
      productGbcrDyPx: baseline?.drawComputed?.product?.gbcrNudge?.dy ?? null,
      labProbeUsesDataUrl: true,
      productUsesBlobUrl: true,
    },
    synthesis: {
      bitmapStageConfirmed:
        Math.abs(baseline?.ink?.liveVsSvgTopPx ?? 99) < 0.35 &&
        Math.abs(baseline?.ink?.liveVsCanvasTopPx ?? 0) > 1,
      halfLeadingPrimaryFork:
        'fo-y-half-leading-meta adjusts foreignObject y inside lab toCanvas decode (probe.svgText is pre-fork)',
      probeSvgPreRasterFork:
        'runFoFixProbe svgText excludes rasterOnlySvgPatch bytes — FO y delta in attrs may read 0',
      drawPathHalfLeadingInactiveOnW7:
        !w7?.labToCanvasOpts?.inkAlign &&
        !w7?.labToCanvasOpts?.inkOffsetFromFoTop,
      naturalVsDestMatch: baseline?.drawComputed?.product?.natVsDest?.naturalMatchesDest ?? null,
    },
  }
}
