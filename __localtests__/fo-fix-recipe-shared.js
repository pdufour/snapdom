/**
 * FO fix lab shared types, rejected hypotheses, and recipe filter helpers.
 * Recipe data lives in fo-recipes-shards/*.js only.
 */

/**
 * Hypotheses rejected for product code — documented here for lab reference only.
 * @type {{ id: string, idea: string, reason: string }[]}
 */
export const REJECTED_HYPOTHESES = [
  {
    id: 'magic-translate-y',
    idea: 'transform: translate(0, 0.91) or translateY(-0.91px) on FO subtree',
    reason: 'Gate-tuned magic px derived from bounce-check failure rows — forbidden by no-magic-numbers / never-overfit.',
  },
  {
    id: 'nav-links-selector',
    idea: '.nav-links, nav a, .checkout-header { … }',
    reason: 'Tag/selector hacks tied to one fixture; would not generalize to other flex+text-leaf pages.',
  },
  {
    id: 'per-landmark-branches',
    idea: 'Different FO CSS for Home vs Products landmarks',
    reason: 'Per-label branches are overfit; fix must apply to a layout class, not landmark names.',
  },
  {
    id: 'putimage-nudge',
    idea: 'putImageData / drawImage dy:1 or destY:1/dpr row shift after decode',
    reason: 'Raster nudge helpers tuned to one ink metric without fixing FO paint — forbidden escape hatch.',
  },
  {
    id: 'hidden-2x-supersample',
    idea: 'HIDPI_RASTER_RATIO = 2 hidden multiplier beyond caller dpr',
    reason: 'Extra scale beyond export dpr/scale is gate shopping, not structural capture.',
  },
  {
    id: 'radical-fo-display-none',
    idea: 'display:none on foreignObject — vector-only fallback',
    reason: 'Removes all FO text paint; diagnostic only — never promotes to product.',
  },
  {
    id: 'radical-strip-all-fo-styles',
    idea: 'all:unset on FO * then minimal font re-apply',
    reason: 'Destroys layout cascade inside FO; collapsed boxes on checkout — harmful for general capture.',
  },
  {
    id: 'radical-supersample-3x',
    idea: 'Hidden 3× raster supersample beyond caller scale/dpr',
    reason: 'Lab diagnostic only — rule tension with no-magic-numbers if promoted without explicit caller opt-in.',
  },
  {
    id: 'magic-translate-svg-text',
    idea: 'translate(0, 0.91) or translateY(0.91px) on FO/SVG text via regex nudge',
    reason: 'Gate-tuned magic px from bounce-check rows — forbidden by no-magic-numbers / never-overfit.',
  },
  {
    id: 'zoom-1.0001',
    idea: 'zoom: 1.0001 on foreignObject subtree',
    reason: 'Sub-px zoom fudge tuned to ink metrics — gate shopping, not structural capture.',
  },
  {
    id: 'letter-spacing-0.01px',
    idea: 'letter-spacing: 0.01px on foreignObject *',
    reason: 'Gate-tuned typography nudge — forbidden magic px per no-magic-numbers.',
  },
  {
    id: 'padding-bottom-0.01px',
    idea: 'padding-bottom: 0.01px on foreignObject *',
    reason: 'Gate-tuned box nudge — forbidden magic px per no-magic-numbers.',
  },
  {
    id: 'radical-svg-text-nudge-regex',
    idea: 'Harness svgTextNudgeY hard-coded 0.91 on serialized <text>',
    reason: 'Must use layout-measured nudge only; hard-coded 0.91 is gate-tuned — skip unless layout-derived.',
  },
  {
    id: 'esoteric-010',
    idea: '-webkit-text-stroke: 0.01px on FO *',
    reason: 'Magic fractional px stroke — gate-tuned typography nudge; lab recipe skipped.',
  },
  {
    id: 'esoteric-027',
    idea: 'Visual DOM translateY(-0.91px) before raster',
    reason: 'Gate-tuned magic px from bounce-check rows — forbidden by no-magic-numbers / never-overfit.',
  },
]

/**
 * @typedef {'capture' | 'raster' | 'both'} FoFixInjectScope
 * @typedef {'none' | 'device-grid-floor' | 'canvas-pixelated' | 'double-decode' | 'triple-decode' | 'two-stage' | 'fonts-ready' | 'fonts-ready-interval' | 'double-raf' | 'raf-before-draw' | 'decode-interval' | 'decode-interval-raf' | 'decode-microtask-twice' | 'offscreen-canvas' | 'will-read-frequently' | 'direct' | 'blob-url' | 'blob-url-early-revoke' | 'blob-url-decode-interval' | 'blob-url-fetch-revoke' | 'create-image-bitmap' | 'create-image-bitmap-pixelated' | 'create-image-bitmap-premultiply' | 'svg-dataurl-double-encode' | 'v2-double-svg-encode' | 'bitmap-close' | 'load-event' | 'load-event-interval' | 'pre-decode-dom' | 'flip-y' | 'double-raster-average' | 'double-raster-difference' | 'canvas-filter-invert' | 'supersample-downscale' | 'h2-supersample-dpr-lt2' | 'h2-frac-draw' | 'decode-via-blob' | 'canvas-from-live' | 'no-fo-capture' | 'composite-copy' | 'phantom-font-prime' | 'context-alpha-false-desync' | 'scale-down-up' | 'html-to-canvas-direct' | 'html2canvas-live-draw' | 'bitmaprenderer-transfer' | 'img-srcset-1x' | 'webp-roundtrip' | 'triple-raf-flush' | 'canvas-putImageData-live-snapshot' | 'element-capture-bitmap' | 'product-toCanvas' | 'lab-toCanvas' | 'lab-toCanvas-decode' | 'lab-toCanvas-frac' | 'lab-toCanvas-natural' | 'lab-toCanvas-round-all' | 'lab-toCanvas-w7-decode-sweep' | 'lab-toCanvas-w7-draw-round' | 'lab-toCanvas-w7-backing-floor' | 'lab-toCanvas-w7-ctx-default' | 'lab-toCanvas-w7-wait-raf' | 'lab-toCanvas-wait-decode' | 'lab-toCanvas-bitmap-first' | 'lab-toCanvas-w8-pipeline-blob' | 'lab-toCanvas-w8-force-bitmap' | 'lab-toCanvas-w8-ctx-smooth-off' | 'lab-toCanvas-w8-backing-ceil' | 'lab-toCanvas-w8-dpr-device' | 'lab-toCanvas-w8-reset-transform' | 'lab-toCanvas-w8-drawfit-contain' | 'lab-toCanvas-w8-ignore-meta' | 'lab-toCanvas-unified' | 'lab-wait-0ms' | 'lab-wait-1ms' | 'lab-wait-16ms' | 'lab-wait-33ms' | 'lab-wait-50ms' | 'lab-wait-100ms' | 'lab-wait-150ms' | 'lab-wait-200ms' | 'lab-wait-300ms' | 'lab-wait-500ms' | 'lab-decode-200ms' | 'lab-decode-100ms' | 'lab-decode-off' | 'lab-decode-double' | 'lab-decode-raf' | 'lab-draw-round' | 'lab-draw-frac' | 'lab-backing-floor' | 'lab-backing-ceil' | 'lab-ctx-smooth-off' | 'wait-fonts-500ms' | 'iframe-serialized-svg-decode' | 'node-layer-datauri-blob'} FoFixRasterPatch
 * @typedef {'fe-color-matrix-identity' | 'filter-empty-nop' | 'filter-noop-defs' | 'fe-morphology-identity' | 'fe-component-transfer-identity' | 'fe-merge-empty' | 'fe-displacement-map-identity' | 'fe-turbulence-composite' | 'svg-root-pattern-fill' | 'fo-border-linear-gradient-stroke' | 'svg-filter-pattern-border-bundle' | 'fo-shape-rendering-auto'} FoFixSvgFoPatch
 * @typedef {'strip-xml-declaration' | 'explicit-xmlns' | 'strip-identity-transforms' | 'explicit-xmlns-strip-transforms' | 'base64-roundtrip' | 'strip-all-transforms'} FoFixSvgMarkupPatch
 * @typedef {'integer-viewbox' | 'round-dims' | 'int-floor'} FoFixSvgRootRound
 * @typedef {'replace-fo-with-svg-text' | 'strip-all-fo-styles' | 'fo-to-image-placeholder' | 'fo-to-image-href-live' | 'parse-svg-dom-reserialize' | 'fo-replaced-with-div' | 'measure-nudge-svg-root' | 'clone-node-capture' | 'integer-snap-all-rects' | 'remove-fe-filters' | 'force-ltr-unicode-bidi' | 'fo-display-none' | 'radical-css-bundle' | 'zero-alpha-anchor' | 'fillText-replace' | 'fo-nbsp-trailing-span' | 'fo-per-letter-spans' | 'fo-explicit-xhtml-xmlns' | 'fo-wrap-in-switch' | 'svg-purge-whitespace' | 'split-fo-horizontal' | 'strip-svg-styles' | 'fo-innerhtml-minimal' | 'split-fo-per-child' | 'fo-unwrap-to-g' | 'capture-without-fo' | 'svg-only-text-layer' | 'clone-deep-styles-strip' | 'remove-filters-and-masks' | 'fe-drop-shadow-zero' | 'text-as-path' | 'fo-height-1px-overflow-visible' | 'chrome-legacy-webkit-bundle' | 'empty-svg-switch-default' | 'h2-fo-internal-star-normalize' | 'h2-fo-percent-int-viewbox' | 'h2-svg-footer-comment' | 'h2-pin-line-height-from-live' | 'h2-pin-width-from-live' | 'h2-flex-stretch-leaf-from-live' | 'h2-pin-lh-flex-stretch-leaf-from-live' | 'h2-pin-width-line-height-from-live' | 'h2-pin-lh-stretch-width-from-live' | 'h2-container-lang' | 'blh-w1-lh-normal-leaf' | 'blh-w1-lh-1-leaf' | 'blh-w1-lh-fontsize-px' | 'blh-w1-vertical-align-baseline' | 'lab-pin-text-ascent-descent-from-range' | 'lab-pin-font-size-from-live' | 'lab-pin-letter-spacing-from-live' | 'lab-pin-inline-box-height-from-clientrects' | 'lab-pin-flex-cross-size-from-anchor' | 'lab-pin-half-leading-padding-top' | 'lab-pin-half-leading-split-padding' | 'lab-pin-line-height-from-layout-box' | 'lab-pin-height-from-gbcr' | 'lab-pin-width-from-gbcr' | 'lab-pin-ink-top-in-border-padding' | 'lab-pin-content-box-height' | 'lab-pin-normal-lh-from-probe' | 'math-pin-fo-container-dims-from-live-root' | 'math-pin-foreign-object-attrs-from-live-root' | 'lab-pin-composite-stretch-lh-half' | 'lab-pin-composite-gbcr-lh-half' | 'math-floor-viewbox-stash-frac' | 'math-pin-fo-container-and-attrs-from-live-root' | 'lab-pin-range-then-clientrects-height' | 'lab-pin-normal-lh-then-half-leading' | 'math-half-leading-with-floor-viewbox' | 'lab-svg-root-font-size-from-live'} FoFixRadicalPatch
 * @typedef {'flex' | 'font' | 'overflow' | 'contain' | 'strut' | 'line-height' | 'text' | 'text-fix' | 'raster' | 'tocanvas' | 'tocanvas-custom' | 'tc-only-w1' | 'tc-text-w1' | 'tc-blh-w1' | 'tc-flags-w2' | 'tc-flags-w3' | 'tc-flags-w4' | 'tc-fix-w5' | 'experimental-src-mirror' | 'bundle' | 'decode' | 'svg' | 'color' | 'isolation' | 'radical' | 'radical-v2' | 'radical-different' | 'crazy' | 'extreme' | 'paint-context' | 'loop-auto' | 'h2-port' | 'h2-retry' | 'retry2' | 'retry3' | 'h2-weird' | 'esoteric' | 'lab-try' | 'fo-try' | 'fo-try2' | 'fo-try3' | 'fo-try4' | 'rank' | 'rank-probe' | 'monkeypatch' | 'no-text-bypass' | 'float-precision' | 'gap' | 'wild' | 'orthogonal' | 'different' | 'other' | 'other3' | 'merge' | 'fresh' | 'fresh2' | 'fresh3' | 'fresh4' | 'retry' | 'vary' | 'vary2' | 'vary3' | 'vary4' | 'vary5' | 'gen-par' | 'math-layout' | 'brainstorm' | 'drift-batch1' | 'drift-batch2' | 'drift-batch3' | 'drift-batch4' | 'drift-batch5' | 'drift-batch222' | 'drift-batch32222' | 'drift-batch0000' | 'drift-batch3333' | 'drift-batch555' | 'drift-batch66' | 'drift-batch3939' | 'drift-batch777'} FoFixCategory
 * @typedef {{ passes: number, clearBetween?: boolean, clearFirst?: boolean, alphas?: number[], destOverFrom?: number | 'last' | 'all-but-first' | false | null }} LabMultipassOpts
 * @typedef {'capture-recipe-css' | 'googlefonts-embed-capture' | 'h2-fo-normalize-full' | 'h2-fo-internal-star-capture' | 'h2-container-reset-capture' | 'h2-full-plus-container-capture' | 'h2-raster-normalize-capture' | 'decode-interval-prototype' | 'decode-wrap' | 'decode-interval-wrap' | 'image-decode-twice' | 'fonts-ready-delay' | 'raf-before-draw' | 'draw-image-pixelated' | 'drawImage-wrap' | 'measureText-prime' | 'createImageBitmap-high' | 'tc-draw-image-round-all' | 'tc-decode-safari-raf' | 'tc-canvas-backing-ceil' | 'tc-canvas-backing-floor' | 'tc-canvas-backing-round' | 'tc-lab-mp-multipass' | 'tc-lab-draw-h2-frac-draw' | 'tc-lab-draw-two-stage' | 'tc-lab-draw-supersample-downscale' | 'tc-lab-draw-create-image-bitmap' | 'tc-lab-draw-create-image-bitmap-pixelated' | 'tc-lab-draw-device-grid-floor' | 'tc-lab-w6-save-restore-draw' | 'tc-lab-w6-translate-half' | 'tc-lab-w6-translate-neg-half' | 'tc-lab-w6-translate-quarter' | 'tc-lab-w6-scale-unity' | 'tc-lab-w6-scale-dpr-compensate' | 'tc-lab-w6-rotate-identity' | 'tc-lab-w6-rotate-180-center' | 'tc-lab-w6-rotate-90-center' | 'tc-lab-w6-resetTransform-before-draw' | 'tc-lab-w6-setTransform-identity' | 'tc-lab-w6-reset-then-identity' | 'tc-lab-w6-aspect-matrix-fit' | 'tc-lab-w6-aspect-matrix-fill' | 'tc-lab-w6-aspect-matrix-stretch' | 'tc-lab-w6-aspect-fit-half' | 'tc-lab-w6-flip-x-center' | 'tc-lab-w6-flip-y-center' | 'tc-lab-w6-double-save' | 'tc-lab-w6-getTransform-reapply' | 'tc-lab-w3-decode-microtask' | 'tc-lab-w3-decode-microtask2' | 'tc-lab-w3-decode-raf1' | 'tc-lab-w3-decode-raf2' | 'tc-lab-w3-decode-raf3' | 'tc-lab-w3-decode-timeout0' | 'tc-lab-w3-decode-timeout16' | 'tc-lab-w3-decode-timeout100' | 'tc-lab-w3-decode-idle' | 'tc-lab-w3-decode-perf1' | 'tc-lab-w3-decode-perf16' | 'tc-lab-w3-draw-microtask' | 'tc-lab-w3-draw-microtask2' | 'tc-lab-w3-draw-raf1' | 'tc-lab-w3-draw-raf2' | 'tc-lab-w3-draw-raf3' | 'tc-lab-w3-draw-timeout0' | 'tc-lab-w3-draw-timeout16' | 'tc-lab-w3-draw-timeout100' | 'tc-lab-w3-draw-idle' | 'tc-lab-w3-draw-perf1' | 'tc-lab-w3-draw-perf16' | 'tc-lab-w3-decode-raf2-draw-raf1' | 'tc-lab-w3-decode-mt-draw-mt' | 'tc-lab-w3-decode-t16-draw-t0' | 'tc-lab-w3-decode-raf3-draw-raf3' | 'tc-lab-w3-decode-idle-draw-idle' | 'tc-lab-w3-decode-perf16-draw-perf1' | 'tc-lab-w3-decode-mt2-draw-t100' | 'tc-lab-w3-decode-t100-draw-raf2' | 'tc-lab-w3-decode-raf1-draw-t16' | 'tc-lab-w3-decode-mt-draw-perf16' | 'tc-lab-w3-decode-chain-raf-mt-t0' | 'tc-lab-w3-draw-chain-raf-mt-t16' | 'tc-lab-w3-full-chain-decode-draw' | 'tc-lab-w6-save-restore-draw' | 'tc-lab-w6-translate-half' | 'tc-lab-w6-translate-neg-half' | 'tc-lab-w6-translate-quarter' | 'tc-lab-w6-scale-unity' | 'tc-lab-w6-scale-dpr-compensate' | 'tc-lab-w6-rotate-identity' | 'tc-lab-w6-rotate-180-center' | 'tc-lab-w6-rotate-90-center' | 'tc-lab-w6-resetTransform-before-draw' | 'tc-lab-w6-setTransform-identity' | 'tc-lab-w6-reset-then-identity' | 'tc-lab-w6-aspect-matrix-fit' | 'tc-lab-w6-aspect-matrix-fill' | 'tc-lab-w6-aspect-matrix-stretch' | 'tc-lab-w6-aspect-fit-half' | 'tc-lab-w6-flip-x-center' | 'tc-lab-w6-flip-y-center' | 'tc-lab-w6-double-save' | 'tc-lab-w6-getTransform-reapply' | 'tc-ctx-will-read-frequently' | 'tc-ctx-getContext-will-read-proto' | 'tc-ctx-smooth-off' | 'tc-ctx-smooth-quality-low' | 'tc-ctx-smooth-quality-medium' | 'tc-ctx-smooth-quality-high' | 'tc-ctx-global-alpha-099' | 'tc-ctx-global-alpha-half' | 'tc-lab-w6-shadow-soft' | 'tc-lab-w6-shadow-soft-red' | 'tc-lab-w6-shadow-blur-1' | 'tc-lab-w6-shadow-blur-4' | 'tc-lab-w6-shadow-offset-0-0' | 'tc-lab-w6-shadow-offset-1-0' | 'tc-lab-w6-shadow-offset-2-2' | 'tc-ctx-reset-transform-draw' | 'tc-ctx-reset-transform-smooth-off' | 'tc-ctx-full-smooth-off-will-read' | 'snapdom-post-fo-css' | 'snapdom-post-fo-baseline'} FoFixMonkeyPatch
 * @typedef {{
 *   backingRound?: 'none' | 'floor' | 'ceil' | 'round',
 *   dprSource?: 'harness' | 'device',
 *   stylePixels?: 'css' | 'device',
 *   optDims?: 'harness-css' | 'harness-device' | 'natural',
 *   ctxScale?: boolean,
 *   drawFit?: import('./fo-fix-toCanvas-draw-fit.js').LabDrawFitMode,
 *   draw9Frac?: import('./fo-fix-toCanvas-draw-fit.js').LabDraw9FracMode,
 *   useFracDraw?: boolean,
 *   outWFrom?: 'natural' | 'meta' | 'opt' | 'inherit',
 *   outHFrom?: 'natural' | 'meta' | 'opt' | 'inherit',
 *   suppressOptW?: boolean,
 *   suppressOptH?: boolean,
 *   willReadFrequently?: boolean,
 *   colorSpace?: 'srgb' | 'display-p3',
 *   canvasColorSpace?: 'srgb' | 'display-p3',
 *   colorInterpolation?: 'srgb' | 'linearrgb',
 *   alpha?: boolean,
 *   desynchronized?: boolean | 'if-supported',
 *   dprMax?: number,
 *   imageDataPost?:
 *     | 'putImageData-full-snapshot'
 *     | 'putImageData-full-dirty-rect'
 *     | 'getImageData-roundtrip'
 *     | 'getImageData-roundtrip-twice'
 *     | 'createImageData-copy-full'
 *     | 'createImageData-copy-half-w'
 *     | 'createImageData-empty'
 *     | 'pixel-row-backing-0'
 *     | 'pixel-row-backing-mid'
 *     | 'pixel-row-backing-last'
 *     | 'pixel-row-css-mid',
 *   decodeWaitMs?: number,
 *   decodeIntervalMs?: number | false,
 *   decodeDouble?: boolean,
 *   decodeRaf?: boolean,
 *   preDecodeAttach?: boolean,
 *   preDecodeRaf?: boolean,
 *   waitFontsReady?: boolean,
 *   decodePasses?: number,
 *   drawDest?: 'paint-box' | 'backing-over-dpr' | 'natural-dims',
 *   roundDrawImage?: boolean,
 *   measuredDest?: string,
 *   vDriftFix?: boolean,
 *   disableGbcrFracNudge?: boolean,
 *   inkAlign?: boolean,
 *   inkAlignSubpixelOnly?: boolean,
 *   inkOffsetFromFoTop?: boolean,
 *   strutRangeSubpixelDrawDy?: boolean,
 *   strutRangeSubpixelHalfDrawDy?: boolean,
 *   metaInkTopFracDrawDy?: boolean,
 *   decodeSettle?: boolean,
 *   forceCreateImageBitmap?: boolean,
 *   dprScaledSvgRootDraw?: boolean,
 *   clip?: string,
 *   rasterOnlySvgPatch?: string,
 *   Lab audit: decode URL fork only; inline SVG measure leg must stay unpatchted.
 *   rasterForkDecodeOnly?: boolean,
 *   Lab display: round ink tops to 0.25px for matrix UI only — not promotion gate.
 *   displayInkQuarterRound?: boolean,
 *   debugForkTrace?: boolean,
 * }} LabToCanvasOpts
 *
 * @typedef {{
 *   smooth?: boolean,
 *   alpha?: number,
 *   waitMs?: number,
 *   roundDraw?: boolean,
 *   useNaturalDims?: boolean,
 * }} RecipeFlags
 *
 * @typedef {{
 *   clip?: string,
 *   clipAfterBg?: boolean,
 *   ctxFilter?: string,
 *   loadPipeline?: string,
 *   imageCrossOrigin?: 'anonymous' | 'use-credentials' | 'unset',
 *   imageReferrerPolicy?: ReferrerPolicy | 'unset',
 *   imageDecoding?: 'sync' | 'async' | 'auto' | 'unset',
 *   imageFetchPriority?: 'high' | 'low' | 'auto' | 'unset',
 * }} LabToCanvasOpts
 *
 * @typedef {string} LabLoadPipeline
 *
 * @typedef {{
 *   id: string,
 *   label: string,
 *   idea: string,
 *   css: string,
 *   inject: FoFixInjectScope,
 *   category?: FoFixCategory,
 *   rasterPatch?: FoFixRasterPatch,
 *   foSvgPatch?: FoFixSvgFoPatch,
 *   foAttrPatch?: Record<string, string>,
 *   svgMarkupPatch?: FoFixSvgMarkupPatch,
 *   svgRootPatch?: Record<string, string>,
 *   svgRootRound?: FoFixSvgRootRound,
 *   radicalPatch?: FoFixRadicalPatch,
 *   radicalOptions?: { scaleMultiplier?: number, recipeScale?: number, labMultipass?: LabMultipassOpts },
 *   monkeypatch?: FoFixMonkeyPatch | FoFixMonkeyPatch[],
 *   labSvgDataUrl?: {
 *     charset?: 'none' | 'utf-8' | 'UTF-8',
 *     encoding?: 'uri' | 'double-uri' | 'base64',
 *   },
 *   labHook?: string, // Lab-only hook id (resolved by __localtests__/tocanvas-lab-hooks-registry.js).
 *   labToCanvasFlag?: string, // tc-flags-w1-* (resolved by tocanvas-lab-flags-registry.js).
 *   labToCanvasFlags?: string[],
 *   labToCanvasOpts?: LabToCanvasOpts,
 *   labRasterPatches?: string[],
 *   recipeFlags?: RecipeFlags,
 *   labToCanvasBitmapOpts?: import('./fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapOpts,
 *   labToCanvasCtx?: import('./fo-fix-toCanvas.js').LabToCanvasCtxOptions,
 *   labToCanvasTiming?: import('./fo-fix-toCanvas.js').LabToCanvasTimingHooks,
 *   labLoadPipeline?: LabLoadPipeline,
 *   backgroundColor?: string,
 *   labPreRaster?: 'device-grid-floor' | 'int-viewbox-floor',
 *   textBypass?: boolean,
 *   active?: boolean,
 *   notes?: string,
 *   toCanvasHarness?: {
 *     width?: 'dims' | 'omit' | number,
 *     height?: 'dims' | 'omit' | number,
 *     scale?: number,
 *     dpr?: number,
 *     swapDims?: boolean,
 *     swapMeta?: boolean,
 *     meta?: {
 *       w0?: 'parsed' | 'target' | 'css' | 'omit' | number,
 *       h0?: 'parsed' | 'target' | 'css' | 'omit' | number,
 *     },
 *   },
 *   harnessSnapdom?: Record<string, unknown>,
 *   harnessProductToCanvas?: Record<string, unknown>,
 *   labFixtureProbeCss?: { cssW?: number, cssH?: number },
 *   Lab matrix ink scan mode (default integer). Does not change FO paint — metric path only.
 *   labInkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com',
 * }} FoFixRecipe
 */

/**
 * Radical patches that bypass FO text raster (SVG `<text>`, fillText overlay, path vectorization).
 * Diagnostic only — do not promote to product. Excluded from `--category no-text-bypass` matrix.
 * @type {ReadonlySet<FoFixRadicalPatch>}
 */
export const TEXT_BYPASS_RADICAL_PATCHES = new Set([
  'replace-fo-with-svg-text',
  'svg-only-text-layer',
  'text-as-path',
  'fillText-replace',
])

/** @param {FoFixRecipe | null | undefined} recipe */
export function isTextBypassRecipe(recipe) {
  if (!recipe) return false
  if (recipe.textBypass === true) return true
  const patch = recipe.radicalPatch
  return patch != null && TEXT_BYPASS_RADICAL_PATCHES.has(/** @type {FoFixRadicalPatch} */ (patch))
}

/** Recipe id prefixes excluded from default FO-raster matrix (font force / text-transform cheats). */
const MATRIX_NON_STRUCTURAL_ID_PREFIXES = [
  'font-size-pin',
  'font-pin',
  'type-text-transform',
  'crazy-font',
]

/**
 * Default matrix exclusion: text bypass + font-pin / text-transform-force / crazy-font probes.
 * @param {FoFixRecipe | null | undefined} recipe
 */
export function isMatrixNonStructuralRecipe(recipe) {
  if (!recipe) return false
  if (isTextBypassRecipe(recipe)) return true
  const id = recipe.id
  return MATRIX_NON_STRUCTURAL_ID_PREFIXES.some((pfx) => id.startsWith(pfx))
}
