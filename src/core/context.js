/**
 * @typedef {"disabled"|"full"|"auto"|"soft"} CachePolicy
 */

import { normalizeCachePolicy } from './cache.js'

/**
 * Creates a normalized capture context for SnapDOM.
 * @param {Object} [options={}]
 * @param {boolean} [options.debug]
 * @param {boolean} [options.fast]
 * @param {number}  [options.scale]
 * @param {Array<string|RegExp>} [options.exclude]
 * @param {string}  [options.excludeMode]
 * @param {(node: Node)=>boolean} [options.filter]
 * @param {string}  [options.filterMode]
 * @param {boolean} [options.embedFonts]
 * @param {string|string[]} [options.iconFonts]
 * @param {string[]} [options.localFonts]
 * @param {string[]|undefined} [options.excludeFonts]
 * @param {string[]} [options.fontStylesheetDomains]      // extra domains to fetch cross-origin CSS from (#309)
 * @param {string|function} [options.fallbackURL]
 * @param {string}  [options.useProxy]
 * @param {number|null} [options.width]
 * @param {number|null} [options.height]
 * @param {"png"|"jpg"|"jpeg"|"webp"|"svg"} [options.format]
 * @param {"svg"|"img"|"canvas"|"blob"} [options.type]
 * @param {number}  [options.quality]
 * @param {number}  [options.dpr]
 * @param {string|null} [options.backgroundColor]
 * @param {string}  [options.filename]
 * @param {unknown} [options.cache] // "disabled"|"full"|"auto"|"soft"
 * @param {boolean} [options.outerTransforms] // NEW
 * @param {boolean} [options.outerShadows]      // NEW
 * @param {RegExp|((prop: string) => boolean)} [options.excludeStyleProps] - Skip props when snapshotting (#348). e.g. /^--/ to exclude CSS vars
 * @param {boolean} [options.resolvePicturePlaceholders] - Resolve &lt;picture&gt; placeholders / lazy data-src before clone (default true)
 * @param {{ timeout?: number, concurrency?: number, resolveLazySrc?: boolean, silent?: boolean }} [options.pictureResolver] - Fine-tune built-in picture resolver
 * @param {boolean} [options.experimentalFoTextLayout] - When true, append global structural FO text-layout CSS at capture (default false)
 * @param {boolean} [options.experimentalFoLeadingTrim] - When true, append leading-trim:both on foreignObject * at capture (default false)
 * @param {boolean} [options.experimentalFoTextBoxEdgeAuto] - When true, append text-box-edge:auto on FO text leaves at capture (default false)
 * @param {boolean} [options.experimentalFoPinLineHeightFromLive] - When true, pin FO text-leaf line-height to live used px from getComputedStyle (default false)
 * @param {boolean} [options.experimentalFoPinLineHeightOnTextLeaf] - Alias for experimentalFoPinLineHeightFromLive (default false)
 * @param {boolean} [options.experimentalFoTextLeafNormalize] - When true, pin text-leaf line-height, vertical-align, display from live getComputedStyle at inline (default false)
 * @param {boolean} [options.experimentalFoFlexRowAlignCenter] - When true, inject FO CSS reinforcing align-items:center on flex containers (default false)
 * @param {boolean} [options.experimentalFoChromiumText] - Wave-2: Chromium FO text block only (kerning, synthesis, box-sizing, min-width:0)
 * @param {boolean} [options.experimentalFoFlexRowCenter] - Wave-2: FO flex row align-items:center bundle (global FO selectors)
 * @param {boolean} [options.experimentalCaptureIntViewBox] - Wave-2: floor SVG viewBox components before raster
 * @param {boolean} [options.experimentalFoTextGeometric] - Wave-2: text-rendering geometricPrecision on FO *
 * @param {boolean} [options.experimentalFoTextBaselineFix] - Pin FO text-leaf line-height to live used px, vertical-align:baseline, display:inline (default false)
 * @param {boolean} [options.experimentalFoTextLineHeightNormal] - Set line-height:normal on FO text leaves at serialize (default false)
 * @param {boolean} [options.experimentalFoFlexTextLeafAlignStart] - align-self:flex-start on flex/grid text leaves at serialize (default false)
 * @param {boolean} [options.experimentalRasterCtxNoScale] - Wave-2: skip ctx.scale(dpr); draw in backing pixels
 * @param {boolean} [options.experimentalRasterPreDecodeRaf] - Wave-2: offscreen attach + 2× rAF before decode (all browsers)
 * @param {boolean} [options.experimentalRasterDecodeSettle] - When true, await fonts.ready + post-decode settle interval before drawImage (default false)
 * @param {boolean} [options.experimentalRasterBackingCeil] - When true, use Math.ceil(out*dpr) for canvas backing dimensions (default false)
 * @param {boolean} [options.experimentalRasterDoubleDecode] - When true, await img.decode() twice with 100ms interval before drawImage (default false)
 * @param {boolean} [options.experimentalRasterNaturalDims] - When true, drawImage dest uses natural dims scaled contain to outW/outH (default false)
 * @param {boolean} [options.experimentalRasterDisableGbcrNudge] - When true, skip fractional GBCR drawImage dest nudge (default false)
 * @param {import('../exporters/rasterOnlySvgPatch.js').ExperimentalRasterSvgPatch} [options.experimentalRasterSvgPatch] - Raster-only SVG fork patch before decode (default off; `'none'` disables)
 * @param {boolean} [options.experimentalCaptureInkMeta] - When true, store Range ink topInBorder fraction in capture meta (default false)
 * @param {boolean} [options.experimentalRasterInkAlign] - When true, adjust drawImage dest dy from capture ink meta (default false)
 * @param {boolean} [options.experimentalRasterMetaInkAlign] - When true, capture Range ink meta + raster dest dy align (default false)
 * @returns {Object}
 */
export function createContext(options = {}) {
  let resolvedFormat = options.format ?? 'png'
  if (resolvedFormat === 'jpg') resolvedFormat = 'jpeg'
  /** @type {CachePolicy} */
  const cachePolicy = normalizeCachePolicy(options.cache)

  return {
    // Debug & perf
    debug: options.debug ?? false,
    fast: options.fast ?? true,
    scale: options.scale ?? 1,

    // DOM filters
    exclude: options.exclude ?? [],
    excludeMode: options.excludeMode ?? 'hide',
    filter: options.filter ?? null,
    filterMode: options.filterMode ?? 'hide',

    // Placeholders
    placeholders: options.placeholders !== false, // default true

    // Fonts
    embedFonts: options.embedFonts ?? false,
    iconFonts: Array.isArray(options.iconFonts) ? options.iconFonts
      : (options.iconFonts ? [options.iconFonts] : []),
    localFonts: Array.isArray(options.localFonts) ? options.localFonts : [],
    excludeFonts: options.excludeFonts ?? undefined,
    fontStylesheetDomains: Array.isArray(options.fontStylesheetDomains) ? options.fontStylesheetDomains : [],
    fallbackURL: options.fallbackURL ?? undefined,

    /** @type {CachePolicy} */
    cache: cachePolicy,

    // Network
    useProxy: typeof options.useProxy === 'string' ? options.useProxy : '',

    // Output
    width: options.width ?? null,
    height: options.height ?? null,
    format: resolvedFormat,
    type: options.type ?? 'svg',
    quality: options.quality ?? 0.92,
    dpr: options.dpr ?? (window.devicePixelRatio || 1),
    backgroundColor:
      options.backgroundColor ?? (['jpeg', 'webp'].includes(resolvedFormat) ? '#ffffff' : null),
    filename: options.filename ?? 'snapDOM',

    // NEW flags (user-friendly)
    outerTransforms: options.outerTransforms ?? true,
    outerShadows: options.outerShadows ?? false,

    // Safari warmup (WebKit #219770): iterations to prime font/decode pipeline. 1–3.
    safariWarmupAttempts: Math.min(3, Math.max(1, (options.safariWarmupAttempts ?? 3) | 0)),

    // #348: exclude style props from snapshot (reduces cost when :root has thousands of CSS vars)
    excludeStyleProps: options.excludeStyleProps ?? null,

    // Built-in picture / lazy-src resolver (see src/modules/pictureResolver.js)
    resolvePicturePlaceholders: options.resolvePicturePlaceholders !== false,
    pictureResolver:
      options.pictureResolver && typeof options.pictureResolver === 'object'
        ? options.pictureResolver
        : {},

    // Experimental parity probes (default off — lab-validated before promotion)
    experimentalFoTextLayout: options.experimentalFoTextLayout === true,
    experimentalFoLeadingTrim: options.experimentalFoLeadingTrim === true,
    experimentalFoTextBoxEdgeAuto: options.experimentalFoTextBoxEdgeAuto === true,
    experimentalFoPinLineHeightFromLive:
      options.experimentalFoPinLineHeightFromLive === true ||
      options.experimentalFoPinLineHeightOnTextLeaf === true,
    experimentalFoPinLineHeightOnTextLeaf:
      options.experimentalFoPinLineHeightOnTextLeaf === true ||
      options.experimentalFoPinLineHeightFromLive === true,
    experimentalFoTextLeafNormalize: options.experimentalFoTextLeafNormalize === true,
    experimentalFoFlexRowAlignCenter: options.experimentalFoFlexRowAlignCenter === true,
    experimentalFoChromiumText: options.experimentalFoChromiumText === true,
    experimentalFoFlexRowCenter: options.experimentalFoFlexRowCenter === true,
    experimentalCaptureIntViewBox: options.experimentalCaptureIntViewBox === true,
    experimentalFoTextGeometric: options.experimentalFoTextGeometric === true,
    experimentalFoTextBaselineFix: options.experimentalFoTextBaselineFix === true,
    experimentalFoTextLineHeightNormal: options.experimentalFoTextLineHeightNormal === true,
    experimentalFoNonEmptyLineHeightNormal:
      options.experimentalFoNonEmptyLineHeightNormal === true,
    experimentalFoFlexTextLeafAlignStart: options.experimentalFoFlexTextLeafAlignStart === true,
    experimentalRasterCtxNoScale: options.experimentalRasterCtxNoScale === true,
    experimentalRasterPreDecodeRaf: options.experimentalRasterPreDecodeRaf === true,
    experimentalRasterDecodeSettle: options.experimentalRasterDecodeSettle === true,
    experimentalRasterBackingCeil: options.experimentalRasterBackingCeil === true,
    experimentalRasterDoubleDecode: options.experimentalRasterDoubleDecode === true,
    experimentalRasterNaturalDims: options.experimentalRasterNaturalDims === true,
    experimentalRasterDisableGbcrNudge: options.experimentalRasterDisableGbcrNudge === true,
    experimentalRasterSvgPatch: (() => {
      const v =
        typeof options.experimentalRasterSvgPatch === 'string'
          ? options.experimentalRasterSvgPatch.trim()
          : ''
      if (!v || v === 'none') return undefined
      return v
    })(),
    experimentalRasterMetaInkAlign: options.experimentalRasterMetaInkAlign === true,
    experimentalCaptureInkMeta:
      options.experimentalCaptureInkMeta === true ||
      options.experimentalRasterMetaInkAlign === true,
    experimentalRasterInkAlign:
      options.experimentalRasterInkAlign === true ||
      options.experimentalRasterMetaInkAlign === true,

    // Plugins (reservado)
    // plugins: normalizePlugins(...),
  }
}
