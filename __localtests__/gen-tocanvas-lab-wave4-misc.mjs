#!/usr/bin/env node
/**
 * Wave-4 misc lab-toCanvas shard — knobs not covered by wave4-gen-{a..f}.
 * 80 recipes: tc-lab-w4-misc-001..080
 *
 * Run: node __localtests__/gen-tocanvas-lab-wave4-misc.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')
const OUT = join(SHARDS_DIR, 'recipes-tocanvas-lab-wave4-misc.js')
const COUNT = 80

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function tupleKey(r) {
  return JSON.stringify({
    inject: r.inject,
    rasterPatch: r.rasterPatch ?? null,
    css: r.css ?? '',
    svgRootRound: r.svgRootRound ?? null,
    monkeypatch: mpKey(r.monkeypatch),
    labPreRaster: r.labPreRaster ?? null,
    foSvgPatch: r.foSvgPatch ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    radicalPatch: r.radicalPatch ?? null,
    foAttrPatch: r.foAttrPatch ?? null,
    svgRootPatch: r.svgRootPatch ?? null,
    toCanvasHarness: r.toCanvasHarness ?? null,
    labToCanvasOpts: r.labToCanvasOpts ?? null,
    labToCanvasCtx: r.labToCanvasCtx ?? null,
    labToCanvasTiming: r.labToCanvasTiming ?? null,
    labRasterUrl: r.labRasterUrl ?? null,
    radicalOptions: r.radicalOptions ?? null,
  })
}

/** @returns {Promise<Set<string>>} */
async function scanUsedKeys() {
  const used = new Set()
  const files = readdirSync(SHARDS_DIR).filter(
    (f) => f.startsWith('recipes-tocanvas') && f.endsWith('.js') && !f.includes('wave4-misc'),
  )
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        used.add(tupleKey(r))
      }
    } catch (err) {
      console.warn(`[w4-misc] skip ${file}: ${/** @type {Error} */ (err).message}`)
    }
  }
  return used
}

/** @type {{ slug: string, idea: string, css: string, extra: Record<string, unknown> }[]} */
const CANDIDATES = []

/** @param {string} slug @param {string} idea @param {Record<string, unknown>} extra @param {string} [css] */
function add(slug, idea, extra, css = FO_BASELINE_CSS) {
  CANDIDATES.push({
    slug,
    idea,
    css,
    extra: { inject: 'both', rasterPatch: 'lab-toCanvas', category: 'tocanvas', active: true, ...extra },
  })
}

const FO_SVG = [
  'fe-color-matrix-identity',
  'filter-noop-defs',
  'filter-empty-nop',
  'fe-morphology-identity',
  'fe-component-transfer-identity',
  'fe-merge-empty',
  'fo-shape-rendering-auto',
  'svg-root-pattern-fill',
]

const SVG_MARKUP = [
  'strip-xml-declaration',
  'explicit-xmlns',
  'strip-identity-transforms',
  'explicit-xmlns-strip-transforms',
  'base64-roundtrip',
  'strip-all-transforms',
]

const RADICALS = [
  'lab-pin-half-leading-split-padding',
  'lab-pin-flex-cross-size-from-anchor',
  'lab-pin-normal-lh-from-probe',
  'math-pin-foreign-object-attrs-from-live-root',
  'h2-pin-width-from-live',
  'lab-pin-composite-stretch-lh-half',
  'h2-container-lang',
  'math-half-leading-with-floor-viewbox',
  'force-ltr-unicode-bidi',
  'h2-svg-footer-comment',
  'lab-pin-letter-spacing-from-live',
  'lab-pin-content-box-height',
]

const ROOT_ROUNDS = ['integer-viewbox', 'round-dims', 'int-floor']

for (const fo of FO_SVG) {
  add(`foSvg ${fo}`, `lab-toCanvas + foSvgPatch ${fo}`, { foSvgPatch: fo })
  add(`foSvg ${fo} H2`, `H2 normalize + foSvgPatch ${fo}`, {
    foSvgPatch: fo,
    css: H2_RASTER_NORMALIZE_CSS,
  })
}

for (const sm of SVG_MARKUP) {
  add(`markup ${sm}`, `lab-toCanvas + svgMarkupPatch ${sm}`, { svgMarkupPatch: sm })
  add(`markup ${sm} int-vb`, `integer-viewbox + svgMarkupPatch ${sm}`, {
    svgMarkupPatch: sm,
    svgRootRound: 'integer-viewbox',
  })
}

for (const rad of RADICALS) {
  add(`radical ${rad}`, `capture radicalPatch ${rad} + lab-toCanvas`, { radicalPatch: rad })
  add(`radical ${rad} leaf`, `radical ${rad} + flex leaf CSS`, {
    radicalPatch: rad,
    css: FO_BASELINE_CSS + LEAF,
  })
}

for (const rr of ROOT_ROUNDS) {
  add(`foAttr xy ${rr}`, `FO x/y +0.0001 + svgRootRound ${rr}`, {
    svgRootRound: rr,
    foAttrPatch: { x: '0.0001', y: '0.0001' },
  })
  add(`foAttr xywh ${rr}`, `FO x/y/w/h +0.0001 + svgRootRound ${rr}`, {
    svgRootRound: rr,
    foAttrPatch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' },
  })
}

const RASTERS = ['lab-toCanvas-decode', 'lab-toCanvas-frac']
const DRAW_MP = [
  'tc-lab-draw-two-stage',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-device-grid-floor',
  'tc-lab-draw-create-image-bitmap',
]

for (const rp of RASTERS) {
  for (const mp of DRAW_MP) {
    add(`${rp} ${mp}`, `${rp} fork + draw monkeypatch ${mp}`, {
      rasterPatch: rp,
      inject: 'raster',
      monkeypatch: mp,
    })
  }
  add(`${rp} markup base64`, `${rp} + base64-roundtrip reserialize`, {
    rasterPatch: rp,
    svgMarkupPatch: 'base64-roundtrip',
  })
  add(`${rp} radical math-floor-vb`, `${rp} + math-floor-viewbox-stash-frac`, {
    rasterPatch: rp,
    radicalPatch: 'math-floor-viewbox-stash-frac',
  })
}

add('harness natural omit', 'toCanvasHarness width/height omit — natural decode size', {
  toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
})
add('harness dpr2 target meta', 'dims + dpr 2 + meta target refs', {
  toCanvasHarness: {
    width: 'dims',
    height: 'dims',
    dpr: 2,
    meta: { w0: 'target', h0: 'target' },
  },
})
add('harness scale2 css meta', 'scale 2 + meta w0/h0 from css dims', {
  toCanvasHarness: {
    width: 'dims',
    height: 'dims',
    scale: 2,
    meta: { w0: 'css', h0: 'css' },
  },
})
add('harness width-only parsed h0', 'width=dims height omit parsed h0', {
  toCanvasHarness: {
    width: 'dims',
    height: 'omit',
    meta: { w0: 'parsed', h0: 'parsed' },
  },
})

add('labOpts backing floor contain', 'labToCanvasOpts backingRound floor + drawFit contain', {
  labToCanvasOpts: { backingRound: 'floor', drawFit: 'contain' },
})
add('labOpts natural no ctxScale', 'optDims natural + ctxScale false', {
  labToCanvasOpts: { optDims: 'natural', ctxScale: false },
})
add('labOpts device stylePixels', 'stylePixels device + dprSource device', {
  labToCanvasOpts: { stylePixels: 'device', dprSource: 'device' },
})
add('labOpts display-p3', 'colorSpace display-p3 on backing + context', {
  labToCanvasOpts: { colorSpace: 'display-p3', canvasColorSpace: 'display-p3' },
})
add('labOpts alpha false', 'alpha:false on 2D context/backing', {
  labToCanvasOpts: { alpha: false },
})
add('labOpts desync if-supported', 'desynchronized if supported', {
  labToCanvasOpts: { desynchronized: 'if-supported' },
})
add('labOpts willReadFrequently', 'willReadFrequently on toCanvas opts', {
  labToCanvasOpts: { willReadFrequently: true },
})
add('labOpts decodeWait 16', 'decodeWaitMs 16 (timing wait)', {
  labToCanvasOpts: { decodeWaitMs: 16 },
})
add('labOpts decodeWait 100', 'decodeWaitMs 100 (timing wait)', {
  labToCanvasOpts: { decodeWaitMs: 100 },
})
add('labOpts imageData roundtrip', 'imageDataPost getImageData roundtrip', {
  labToCanvasOpts: { imageDataPost: 'getImageData-roundtrip', willReadFrequently: true },
})
add('labOpts imageData pixel row css', 'imageDataPost pixel-row-css-mid', {
  labToCanvasOpts: { imageDataPost: 'pixel-row-css-mid' },
})

add('labTiming raf decode draw', 'labToCanvasTiming decodeAfter raf1 drawBefore raf2', {
  labToCanvasTiming: { decodeAfter: ['raf1'], drawBefore: ['raf2'] },
})
add('labTiming microtask timeout', 'decodeAfter microtask2 drawBefore timeout16', {
  labToCanvasTiming: { decodeAfter: ['microtask2'], drawBefore: ['timeout16'] },
})
add('labTiming triple raf', 'decodeAfter raf3 before draw', {
  labToCanvasTiming: { decodeAfter: ['raf3'], drawBefore: ['raf1'] },
})

add('labCtx smooth off willRead', 'labToCanvasCtx imageSmoothingEnabled false + willReadFrequently', {
  labToCanvasCtx: { imageSmoothingEnabled: false, willReadFrequently: true },
})
add('labCtx reset alpha half', 'resetTransformBeforeDraw + globalAlpha 0.5', {
  labToCanvasCtx: { resetTransformBeforeDraw: true, globalAlpha: 0.5 },
})
add('labCtx smooth quality high', 'imageSmoothingQuality high', {
  labToCanvasCtx: { imageSmoothingQuality: 'high' },
})
add('labCtx clear before draw', 'clearBeforeDraw + resetTransform', {
  labToCanvasCtx: { clearBeforeDraw: true, resetTransformBeforeDraw: true },
})
add('labCtx dest-over', 'globalCompositeOperation destination-over', {
  labToCanvasCtx: { globalCompositeOperation: 'destination-over' },
})
add('labCtx premultiply none', 'premultiplyAlpha none', {
  labToCanvasCtx: { premultiplyAlpha: 'none' },
})

add('svgRootPatch width height', 'svgRootPatch explicit width/height attrs', {
  svgRootPatch: { width: '100%', height: '100%' },
})
add('labPreRaster device-grid', 'labPreRaster device-grid-floor before lab draw', {
  labPreRaster: 'device-grid-floor',
})
add('Chromium radical lh pin', 'Chromium copies + h2-pin-line-height-from-live', {
  css: FO_BASELINE_CSS + CHROMIUM_COPY,
  radicalPatch: 'h2-pin-line-height-from-live',
})
add('H2 foSvg fe-color-matrix int-vb', 'H2 + fe-color-matrix-identity + integer-viewbox', {
  css: H2_RASTER_NORMALIZE_CSS,
  foSvgPatch: 'fe-color-matrix-identity',
  svgRootRound: 'integer-viewbox',
})
add('markup strip-all radical remove-fe', 'strip-all-transforms + remove-fe-filters', {
  svgMarkupPatch: 'strip-all-transforms',
  radicalPatch: 'remove-fe-filters',
})
add('decode frac stack markup xmlns', 'lab-toCanvas-decode + explicit-xmlns-strip-transforms', {
  rasterPatch: 'lab-toCanvas-decode',
  inject: 'raster',
  svgMarkupPatch: 'explicit-xmlns-strip-transforms',
  css: H2_RASTER_NORMALIZE_CSS,
})
add('frac draw mp + h2-percent vb', 'lab-toCanvas-frac + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw', {
  rasterPatch: 'lab-toCanvas-frac',
  inject: 'raster',
  radicalPatch: 'h2-fo-percent-int-viewbox',
  monkeypatch: 'tc-lab-draw-h2-frac-draw',
})
add('capture inject radical width pin', 'inject capture radical h2-pin-width + raster lab-toCanvas', {
  inject: 'capture',
  radicalPatch: 'h2-pin-width-from-live',
  css: H2_RASTER_NORMALIZE_CSS,
})

// —— dedicated rasterPatch wait probes (not in wave4-gen pools) ——
const WAIT_RASTERS = [
  'lab-wait-0ms',
  'lab-wait-1ms',
  'lab-wait-16ms',
  'lab-wait-33ms',
  'lab-wait-50ms',
  'lab-wait-100ms',
  'lab-wait-200ms',
  'lab-wait-500ms',
]
for (const rp of WAIT_RASTERS) {
  add(`${rp} baseline`, `${rp} rasterPatch wait before draw`, { rasterPatch: rp, inject: 'raster' })
  add(`${rp} H2`, `${rp} + H2 normalize CSS`, {
    rasterPatch: rp,
    inject: 'raster',
    css: H2_RASTER_NORMALIZE_CSS,
  })
  add(`${rp} integer-vb`, `${rp} + integer-viewbox`, {
    rasterPatch: rp,
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  })
}

const usedKeys = await scanUsedKeys()
/** @type {typeof CANDIDATES} */
const picked = []

for (const c of CANDIDATES) {
  if (picked.length >= COUNT) break
  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe} */
  const probe = {
    id: 'probe',
    label: 'probe',
    idea: c.idea,
    css: c.css,
    ...c.extra,
  }
  const key = tupleKey(probe)
  if (usedKeys.has(key)) continue
  usedKeys.add(key)
  picked.push(c)
}

if (picked.length < COUNT) {
  throw new Error(`[w4-misc] need ${COUNT} unique candidates, got ${picked.length} from ${CANDIDATES.length}`)
}

const specLines = picked
  .map((c, i) => {
    const n = i + 1
    const extraKeys = Object.keys(c.extra)
    const extraBody = extraKeys
      .map((k) => {
        const v = c.extra[k]
        return `      ${k}: ${JSON.stringify(v)},`
      })
      .join('\n')
    return `  {
    n: ${n},
    slug: ${JSON.stringify(c.slug)},
    idea: ${JSON.stringify(c.idea)},
    css: ${JSON.stringify(c.css)},
    extra: {
${extraBody}
    },
  },`
  })
  .join('\n')

const fileBody = `/**
 * Lab toCanvas wave-4 misc — gap-fill probes (tc-lab-w4-misc-001..080).
 * Knobs not primary in wave4-gen-{a..f}: foSvgPatch, svgMarkupPatch, radicalPatch,
 * foAttrPatch, toCanvasHarness, labToCanvasOpts/Ctx/Timing, decode/frac + draw MP stacks.
 * rasterPatch: lab-toCanvas | lab-toCanvas-decode | lab-toCanvas-frac → fo-fix-toCanvas*.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-misc-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${COUNT}) {
  throw new Error(\`recipes-tocanvas-lab-wave4-misc.js: expected ${COUNT} specs, got \${SPECS.length}\`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== ${COUNT}) {
  throw new Error('recipes-tocanvas-lab-wave4-misc.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: \`tc-lab-w4-misc-\${num}\`,
    label: \`w4-misc #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css,
    inject: extra.inject ?? 'both',
    category: 'tocanvas',
    active: true,
    notes: 'Wave-4 misc gap-fill; FO raster only — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== ${COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave4-misc.js: expected ${COUNT} recipes, got \${RECIPES.length}\`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = tupleKey(r)
  if (seen.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave4-misc.js: duplicate recipe key at \${r.id}\`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

writeFileSync(OUT, fileBody)
console.log(`[w4-misc] wrote ${OUT} (${picked.length} recipes)`)
