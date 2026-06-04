/**
 * Central catalog of lab toCanvas raster hooks, flags, and monkeypatch ids.
 * Wave-1 flags (`tc-flags-w1-*`): tocanvas-lab-flags-registry.js → resolveLabToCanvasFlags().
 * Wave-7 hooks (`w7-*`) map to fo-fix-toCanvas.js knobs via resolveLabHook().
 *
 * Recipes: labHook: 'w7-decode-interval-100' (merged in rasterLabToCanvas).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-hook-*'
 */
import { LAB_DECODE_INTERVAL_MS } from './fo-fix-toCanvas-load-pipeline.js'
import { LAB_TC_FLAGS_W1_IDS } from './tocanvas-lab-flags-registry.js'
import { LAB_DRAW_FIT_MODES } from './fo-fix-toCanvas-draw-fit.js'

/** @typedef {import('./fo-fix-recipe-shared.js').FoFixMonkeyPatch} FoFixMonkeyPatch */
/** @typedef {import('./fo-fix-recipe-shared.js').FoFixRasterPatch} FoFixRasterPatch */
/** @typedef {import('./fo-fix-recipe-shared.js').LabToCanvasOpts} LabToCanvasOpts */
/** @typedef {import('./fo-fix-toCanvas.js').LabToCanvasCtxOptions} LabToCanvasCtxOptions */
/** @typedef {import('./fo-fix-toCanvas.js').LabToCanvasTimingHooks} LabToCanvasTimingHooks */
/** @typedef {import('./fo-fix-toCanvas.js').LabToCanvasTimingStep} LabToCanvasTimingStep */

/** Lab rasterPatch values that route through fo-fix-lab-runner. */
export const LAB_RASTER_PATCHES = /** @type {const} */ ([
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
  'lab-toCanvas-bitmap-first',
  'lab-wait-0ms',
  'lab-wait-16ms',
  'lab-wait-100ms',
  'lab-wait-raf',
])

/** Canvas2D context knobs (recipe labToCanvasCtx or MP tc-ctx-*). */
export const LAB_CTX_FLAG_KEYS = /** @type {const} */ ([
  'willReadFrequently',
  'imageSmoothingEnabled',
  'imageSmoothingQuality',
  'globalAlpha',
  'resetTransformBeforeDraw',
  'clearBeforeDraw',
  'globalCompositeOperation',
  'contextAlpha',
  'premultiplyAlpha',
])

/** labToCanvasOpts backing / DPR / dimension keys. */
export const LAB_OPTS_FLAG_KEYS = /** @type {const} */ ([
  'backingRound',
  'dprSource',
  'stylePixels',
  'optDims',
  'ctxScale',
  'drawFit',
  'willReadFrequently',
  'colorSpace',
  'canvasColorSpace',
  'colorInterpolation',
  'alpha',
  'desynchronized',
  'decodeWaitMs',
  'decodeIntervalMs',
  'decodeDouble',
  'decodeRaf',
  'preDecodeAttach',
  'preDecodeRaf',
  'waitFontsReady',
  'drawDest',
  'roundDrawImage',
  'imageDataPost',
])

/** Post-draw ImageData probe modes (fo-fix-toCanvas applyLabImageDataPost). */
export const LAB_IMAGE_DATA_POST_MODES = /** @type {const} */ ([
  'putImageData-full-snapshot',
  'putImageData-full-dirty-rect',
  'getImageData-roundtrip',
  'getImageData-roundtrip-twice',
  'createImageData-copy-full',
  'createImageData-copy-half-w',
  'createImageData-empty',
  'pixel-row-backing-0',
  'pixel-row-backing-mid',
  'pixel-row-backing-last',
  'pixel-row-css-mid',
])

export { LAB_DRAW_FIT_MODES }

/** Async flush steps (fo-fix-toCanvas + tc-lab-w3-* MPs). */
export const LAB_TIMING_STEPS = /** @type {const} */ ([
  'microtask',
  'microtask2',
  'raf1',
  'raf2',
  'raf3',
  'timeout0',
  'timeout16',
  'timeout100',
  'idle',
  'perf1',
  'perf16',
])

/** tc-lab-w3 timing monkeypatch ids (see fo-fix-monkeypatch LAB_W3_TIMING_HOOKS). */
export const LAB_W3_TIMING_MONKEYPATCH_IDS = /** @type {const} */ ([
  'tc-lab-w3-decode-microtask',
  'tc-lab-w3-decode-microtask2',
  'tc-lab-w3-decode-raf1',
  'tc-lab-w3-decode-raf2',
  'tc-lab-w3-decode-raf3',
  'tc-lab-w3-decode-timeout0',
  'tc-lab-w3-decode-timeout16',
  'tc-lab-w3-decode-timeout100',
  'tc-lab-w3-decode-idle',
  'tc-lab-w3-decode-perf1',
  'tc-lab-w3-decode-perf16',
  'tc-lab-w3-draw-microtask',
  'tc-lab-w3-draw-microtask2',
  'tc-lab-w3-draw-raf1',
  'tc-lab-w3-draw-raf2',
  'tc-lab-w3-draw-raf3',
  'tc-lab-w3-draw-timeout0',
  'tc-lab-w3-draw-timeout16',
  'tc-lab-w3-draw-timeout100',
  'tc-lab-w3-draw-idle',
  'tc-lab-w3-draw-perf1',
  'tc-lab-w3-draw-perf16',
  'tc-lab-w3-decode-raf2-draw-raf1',
  'tc-lab-w3-decode-mt-draw-mt',
  'tc-lab-w3-decode-t16-draw-t0',
  'tc-lab-w3-decode-raf3-draw-raf3',
  'tc-lab-w3-decode-idle-draw-idle',
  'tc-lab-w3-decode-perf16-draw-perf1',
  'tc-lab-w3-decode-mt2-draw-t100',
  'tc-lab-w3-decode-t100-draw-raf2',
  'tc-lab-w3-decode-raf1-draw-t16',
  'tc-lab-w3-decode-mt-draw-perf16',
  'tc-lab-w3-decode-chain-raf-mt-t0',
  'tc-lab-w3-draw-chain-raf-mt-t16',
  'tc-lab-w3-full-chain-decode-draw',
])

/** Structural tc / lab monkeypatch ids used with lab-toCanvas raster. */
export const LAB_MONKEYPATCH_IDS = /** @type {const} */ ([
  'decode-interval-prototype',
  'decode-wrap',
  'decode-interval-wrap',
  'image-decode-twice',
  'fonts-ready-delay',
  'raf-before-draw',
  'draw-image-pixelated',
  'drawImage-wrap',
  'measureText-prime',
  'createImageBitmap-high',
  'tc-lab-createImageBitmap-resize-low',
  'tc-lab-createImageBitmap-resize-medium',
  'tc-lab-createImageBitmap-resize-pixelated',
  'tc-lab-createImageBitmap-premul-none',
  'tc-lab-createImageBitmap-premul-premultiply',
  'tc-lab-createImageBitmap-high-premul-none',
  'tc-draw-image-round-all',
  'tc-decode-safari-raf',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-canvas-backing-round',
  'tc-lab-mp-draw-image-round-all',
  'tc-lab-mp-draw-image-ceil-all',
  'tc-lab-mp-draw-image-floor-dest-y',
  'tc-lab-mp-draw-image-smoothing-off',
  'tc-lab-mp-canvas-backing-ceil',
  'tc-lab-mp-canvas-backing-floor',
  'tc-lab-mp-canvas-backing-round',
  'tc-lab-mp-decode-interval-delay',
  'tc-lab-mp-decode-interval-prototype',
  'tc-lab-mp-decode-wrap',
  'tc-lab-mp-decode-safari-raf',
  'tc-lab-mp-decode-twice',
  'tc-lab-mp-ctx-transform-reset-draw',
  'tc-lab-mp-measure-text-prime-draw',
  'tc-lab-mp-create-image-bitmap-high',
  'tc-lab-mp-multipass',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
  'tc-lab-draw-create-image-bitmap-pixelated',
  'tc-lab-draw-device-grid-floor',
  'tc-ctx-will-read-frequently',
  'tc-ctx-getContext-will-read-proto',
  'tc-ctx-smooth-off',
  'tc-ctx-smooth-quality-low',
  'tc-ctx-smooth-quality-medium',
  'tc-ctx-smooth-quality-high',
  'tc-ctx-global-alpha-099',
  'tc-ctx-global-alpha-half',
  'tc-ctx-reset-transform-draw',
  'tc-ctx-reset-transform-smooth-off',
  'tc-ctx-full-smooth-off-will-read',
  ...LAB_W3_TIMING_MONKEYPATCH_IDS,
])

/**
 * @typedef {{
 *   label: string,
 *   idea: string,
 *   labToCanvasOpts?: LabToCanvasOpts,
 *   labToCanvasCtx?: LabToCanvasCtxOptions,
 *   labToCanvasTiming?: LabToCanvasTimingHooks,
 *   labPreRaster?: import('./fo-fix-recipe-shared.js').FoFixRecipe['labPreRaster'],
 * }} LabHookDefinition
 */

/** Wave-7 hooks — 25 structural probes implemented in fo-fix-toCanvas.js. */
export const LAB_W7_HOOKS = /** @type {Record<string, LabHookDefinition>} */ ({
  'w7-decode-interval-100': {
    label: 'decode interval 100ms',
    idea: `post-decode wait ${LAB_DECODE_INTERVAL_MS}ms (modern-screenshot default)`,
    labToCanvasOpts: { decodeIntervalMs: LAB_DECODE_INTERVAL_MS },
  },
  'w7-decode-off': {
    label: 'decode interval off',
    idea: 'skip post-decode drawImageInterval wait',
    labToCanvasOpts: { decodeIntervalMs: false },
  },
  'w7-decode-double': {
    label: 'decode twice',
    idea: 'await img.decode() a second time after first decode',
    labToCanvasOpts: { decodeDouble: true },
  },
  'w7-decode-raf': {
    label: 'decode double-raf',
    idea: 'double requestAnimationFrame flush after decode',
    labToCanvasOpts: { decodeRaf: true },
  },
  'w7-decode-double-raf': {
    label: 'decode twice + raf',
    idea: 'second decode pass then double-raf before raster dims',
    labToCanvasOpts: { decodeDouble: true, decodeRaf: true },
  },
  'w7-backing-floor': {
    label: 'backing floor',
    idea: 'floor canvas backing store width/height from out×dpr',
    labToCanvasOpts: { backingRound: 'floor' },
  },
  'w7-backing-ceil': {
    label: 'backing ceil',
    idea: 'ceil canvas backing store width/height from out×dpr',
    labToCanvasOpts: { backingRound: 'ceil' },
  },
  'w7-backing-round': {
    label: 'backing round',
    idea: 'round canvas backing store width/height from out×dpr',
    labToCanvasOpts: { backingRound: 'round' },
  },
  'w7-dpr-device': {
    label: 'dpr from device',
    idea: 'use window.devicePixelRatio instead of harness dpr',
    labToCanvasOpts: { dprSource: 'device' },
  },
  'w7-style-device': {
    label: 'style pixels device',
    idea: 'canvas.style width/height in device pixels (out×dpr)',
    labToCanvasOpts: { stylePixels: 'device' },
  },
  'w7-optdims-natural': {
    label: 'opt dims natural',
    idea: 'omit harness width/height — size from decoded natural dims',
    labToCanvasOpts: { optDims: 'natural' },
  },
  'w7-optdims-harness-device': {
    label: 'opt dims harness×dpr',
    idea: 'scale harness cssW/cssH by dpr before aspect fit',
    labToCanvasOpts: { optDims: 'harness-device' },
  },
  'w7-ctx-scale-off': {
    label: 'ctx scale off',
    idea: 'skip ctx.scale(dpr) — draw in backing-store pixel space',
    labToCanvasOpts: { ctxScale: false },
  },
  'w7-draw-fit-contain-center': {
    label: 'drawFit contain-center',
    idea: 'letterbox decoded bitmap with contain-center fit',
    labToCanvasOpts: { drawFit: 'contain-center' },
  },
  'w7-draw-fit-cover-center': {
    label: 'drawFit cover-center',
    idea: 'crop decoded bitmap with cover-center fit',
    labToCanvasOpts: { drawFit: 'cover-center' },
  },
  'w7-draw-round': {
    label: 'round drawImage dest',
    idea: 'Math.round outW/outH for 3-arg drawImage dest size',
    labToCanvasOpts: { roundDrawImage: true },
  },
  'w7-ctx-clear-before-draw': {
    label: 'clear before draw',
    idea: 'clearRect full backing store before fill/drawImage',
    labToCanvasCtx: { clearBeforeDraw: true },
  },
  'w7-ctx-smooth-off': {
    label: 'smoothing off',
    idea: 'imageSmoothingEnabled false before drawImage',
    labToCanvasCtx: { imageSmoothingEnabled: false },
  },
  'w7-ctx-will-read': {
    label: 'willReadFrequently',
    idea: 'getContext 2d with willReadFrequently true',
    labToCanvasCtx: { willReadFrequently: true },
  },
  'w7-ctx-reset-transform': {
    label: 'reset transform draw',
    idea: 'identity transform then re-apply dpr scale before draw',
    labToCanvasCtx: { resetTransformBeforeDraw: true },
  },
  'w7-ctx-composite-copy': {
    label: 'composite copy',
    idea: 'globalCompositeOperation copy for drawImage',
    labToCanvasCtx: { globalCompositeOperation: 'copy' },
  },
  'w7-ctx-premul-none-bitmap': {
    label: 'premul none bitmap',
    idea: 'draw via createImageBitmap premultiplyAlpha none',
    labToCanvasCtx: { premultiplyAlpha: 'none' },
  },
  'w7-ctx-alpha-false': {
    label: 'context alpha false',
    idea: 'getContext 2d with alpha false',
    labToCanvasCtx: { contextAlpha: false },
    labToCanvasOpts: { alpha: false },
  },
  'w7-imgdata-roundtrip': {
    label: 'ImageData roundtrip',
    idea: 'getImageData full canvas then putImageData flush',
    labToCanvasOpts: { imageDataPost: 'getImageData-roundtrip' },
  },
  'w7-imgdata-pixel-row-mid': {
    label: 'pixel row backing mid',
    idea: 'putImageData single row at floor(h/2) in backing store',
    labToCanvasOpts: { imageDataPost: 'pixel-row-backing-mid' },
  },
})

export const LAB_W7_HOOK_IDS = /** @type {(keyof typeof LAB_W7_HOOKS)[]} */ (
  Object.keys(LAB_W7_HOOKS)
)

if (LAB_W7_HOOK_IDS.length !== 25) {
  throw new Error(
    `tocanvas-lab-hooks-registry.js: expected 25 w7 hooks, got ${LAB_W7_HOOK_IDS.length}`,
  )
}

/** Wave-2 tc-flags probes — distinct from wave-1 baseline/pin-lh/decode-fonts/backing/draw-from-backing. */
export const LAB_W2_FLAGS = /** @type {Record<string, LabHookDefinition>} */ ({
  'w2-chromium-text-block': {
    label: 'Chromium text block',
    idea: 'FO CSS: font-kerning:normal, font-synthesis:none, box-sizing:border-box, min-width:0 on FO *',
  },
  'w2-flex-row-center': {
    label: 'flex row align-items center',
    idea: 'FO CSS: flex containers align-items:center — counter cross-axis stretch in FO flex rows',
  },
  'w2-int-viewbox-floor': {
    label: 'int-floor viewBox only',
    idea: 'labPreRaster int-viewbox-floor — floor viewBox components before lab toCanvas (no decode bundle)',
    labPreRaster: 'int-viewbox-floor',
  },
  'w2-ctx-no-scale': {
    label: 'ctx scale off',
    idea: 'labToCanvas ctxScale:false — draw in backing-store device pixels',
    labToCanvasOpts: { ctxScale: false },
  },
  'w2-double-raf-predecode': {
    label: 'attach + 2× rAF pre-decode',
    idea: 'Offscreen DOM attach + double-raf before img.decode() on default lab path',
    labToCanvasOpts: { preDecodeAttach: true, preDecodeRaf: true },
  },
  'w2-text-geometric': {
    label: 'text geometric + antialiased',
    idea: 'FO CSS text-rendering:geometricPrecision and -webkit-font-smoothing:antialiased on FO *',
  },
})

export const LAB_W2_FLAG_IDS = /** @type {(keyof typeof LAB_W2_FLAGS)[]} */ (
  Object.keys(LAB_W2_FLAGS)
)

if (LAB_W2_FLAG_IDS.length !== 6) {
  throw new Error(
    `tocanvas-lab-hooks-registry.js: expected 6 w2 flags, got ${LAB_W2_FLAG_IDS.length}`,
  )
}

/** Wave-4 tc-flags probes — distinct from w1/w2 (table wrapper, flex-start, lh reset, root fs, anchors). */
export const LAB_W4_FLAGS = /** @type {Record<string, LabHookDefinition>} */ ({
  'w4-fo-wrapper-display-table': {
    label: 'FO wrapper display:table',
    idea: 'FO inner wrapper display:table on flex-item >div',
  },
  'w4-align-self-flex-start': {
    label: 'align-self flex-start',
    idea: 'align-self:flex-start on all FO flex descendants',
  },
  'w4-line-height-normal-important': {
    label: 'line-height normal !important',
    idea: 'line-height:normal!important on foreignObject *',
  },
  'w4-font-size-root-match': {
    label: 'svg root font-size match',
    idea: 'Pin capture SVG root font-size from live capture root computed font-size',
  },
  'w4-remove-flex-on-anchor': {
    label: 'anchor inline-block',
    idea: 'foreignObject a display:inline-block — not flex on anchors',
  },
  'w4-double-fo-normalize': {
    label: 'double foNormalize extended',
    idea: 'Duplicate FO_BASELINE + H2_RASTER_NORMALIZE CSS inject blocks',
  },
})

export const LAB_W4_FLAG_IDS = /** @type {(keyof typeof LAB_W4_FLAGS)[]} */ (
  Object.keys(LAB_W4_FLAGS)
)

if (LAB_W4_FLAG_IDS.length !== 6) {
  throw new Error(
    `tocanvas-lab-hooks-registry.js: expected 6 w4 flags, got ${LAB_W4_FLAG_IDS.length}`,
  )
}

/**
 * @param {string} hookId
 * @returns {LabHookDefinition | null}
 */
export function getLabHook(hookId) {
  if (!hookId) return null
  return LAB_W7_HOOKS[hookId] ?? LAB_W2_FLAGS[hookId] ?? LAB_W4_FLAGS[hookId] ?? null
}

/**
 * Merge registry hook + recipe overrides for rasterLabToCanvas.
 * @param {string | undefined} hookId
 * @param {import('./fo-fix-recipe-shared.js').FoFixRecipe | null | undefined} recipe
 */
export function resolveLabHook(hookId, recipe) {
  const base = hookId ? getLabHook(hookId) : null
  if (!base && !recipe) {
    return {
      labToCanvasOpts: undefined,
      labToCanvasCtx: undefined,
      labToCanvasTiming: undefined,
    }
  }

  return {
    labToCanvasOpts: {
      ...base?.labToCanvasOpts,
      ...recipe?.labToCanvasOpts,
    },
    labToCanvasCtx: {
      ...base?.labToCanvasCtx,
      ...recipe?.labToCanvasCtx,
    },
    labToCanvasTiming: {
      decodeAfter:
        recipe?.labToCanvasTiming?.decodeAfter ?? base?.labToCanvasTiming?.decodeAfter,
      drawBefore:
        recipe?.labToCanvasTiming?.drawBefore ?? base?.labToCanvasTiming?.drawBefore,
    },
    labPreRaster: recipe?.labPreRaster ?? base?.labPreRaster,
  }
}

/** @type {Readonly<Record<string, unknown>>} */
export const TOCANVAS_LAB_HOOKS_CATALOG = {
  rasterPatches: LAB_RASTER_PATCHES,
  ctxFlags: LAB_CTX_FLAG_KEYS,
  optsFlags: LAB_OPTS_FLAG_KEYS,
  imageDataPostModes: LAB_IMAGE_DATA_POST_MODES,
  drawFitModes: LAB_DRAW_FIT_MODES,
  timingSteps: LAB_TIMING_STEPS,
  monkeypatchIds: LAB_MONKEYPATCH_IDS,
  w7HookIds: LAB_W7_HOOK_IDS,
  w1FlagIds: LAB_TC_FLAGS_W1_IDS,
  w2FlagIds: LAB_W2_FLAG_IDS,
  w4FlagIds: LAB_W4_FLAG_IDS,
}
