import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, 'fo-recipes-shards/recipes-drift-batch66-triple.js')

/** @param {Record<string, unknown> | null | undefined} opts */
function labOptsToHarness(opts) {
  if (!opts || typeof opts !== 'object') return {}
  /** @type {Record<string, unknown>} */
  const h = {}
  if (opts.disableGbcrFracNudge === true) h.experimentalRasterDisableGbcrNudge = true
  if (opts.decodeSettle === true) h.experimentalRasterDecodeSettle = true
  if (opts.decodeDouble === true) h.experimentalRasterDoubleDecode = true
  if (opts.dprScaledSvgRootDraw === true) h.experimentalRasterDprScaledSvgRootDraw = true
  if (opts.preDecodeRaf === true || (opts.preDecodeAttach && opts.preDecodeRaf)) {
    h.experimentalRasterPreDecodeRaf = true
  }
  if (opts.drawDest === 'natural-dims') h.experimentalRasterNaturalDims = true
  if (opts.inkAlign === true) h.experimentalRasterInkAlign = true
  if (opts.backingRound === 'ceil') h.experimentalRasterBackingCeil = true
  if (opts.ctxScale === false) h.experimentalRasterCtxNoScale = true
  if (opts.rasterOnlySvgPatch && typeof opts.rasterOnlySvgPatch === 'string') {
    h.experimentalRasterSvgPatch = opts.rasterOnlySvgPatch
  }
  return h
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function convert555ToSpec(r) {
  const laneMatch = r.notes?.match(/lane=([^;]+)/)
  const lane = laneMatch ? `product-${laneMatch[1]}` : `product-${r.id.replace('drift-batch555-', '')}`

  const label = r.label.replace(/^drift-batch555 #\d+: /, '')
  const idea = r.idea.replace(/svgRootRound|integer-viewbox|int-floor|round-dims/gi, (m) => m).replace(
    /^/,
    'product path: ',
  )

  /** @type {Record<string, unknown>} */
  const extra = {
    inject: r.inject ?? 'both',
    css: 'SPEC_CSS',
  }

  if (r.monkeypatch) extra.monkeypatch = r.monkeypatch
  if (r.radicalPatch) extra.radicalPatch = r.radicalPatch
  if (r.harnessSnapdom) extra.harnessSnapdom = r.harnessSnapdom

  extra.rasterPatch = 'product-toCanvas'
  if (r.svgRootRound) extra.svgRootRound = r.svgRootRound

  const rp = r.rasterPatch ?? 'lab-toCanvas'
  if (rp === 'decode-interval') extra.labLoadPipeline = 'decode-interval'
  else if (rp === 'double-decode') {
    extra.labLoadPipeline = 'decode-interval'
  } else if (rp === 'fonts-ready') extra.labPreRaster = 'fonts-ready'
  else if (rp === 'fonts-ready-interval') {
    extra.labPreRaster = 'fonts-ready'
    extra.labLoadPipeline = 'decode-interval'
  } else if (rp === 'lab-decode-200ms') {
    extra.labRasterPatches = ['lab-decode-200ms']
  }

  if (Array.isArray(r.labRasterPatches) && r.labRasterPatches.length) {
    extra.labRasterPatches = r.labRasterPatches
  }
  if (r.labPreRaster && !extra.labPreRaster) extra.labPreRaster = r.labPreRaster
  if (r.labLoadPipeline && !extra.labLoadPipeline) extra.labLoadPipeline = r.labLoadPipeline

  const harness = labOptsToHarness(r.labToCanvasOpts)
  if (rp === 'double-decode') harness.experimentalRasterDoubleDecode = true
  if (Object.keys(harness).length) extra.harnessProductToCanvas = harness

  return { lane, label, idea: r.idea.startsWith('product') ? r.idea : `product mirror: ${r.idea}`, extra, cssRaw: r.css }
}

function cssToExpr(cssRaw, baseline, lhImp, trim, inline) {
  if (cssRaw === baseline) return 'FO_BASELINE_CSS'
  let expr = 'FO_BASELINE_CSS'
  const parts = []
  if (cssRaw.includes('leading-trim:both-edges')) parts.push('CAPTURE_LEADING_TRIM_BOTH_EDGES')
  if (cssRaw.includes('display:inline-block!important')) parts.push('CAPTURE_INLINE_BLOCK_LINEBOX_LEAF')
  if (cssRaw.includes('line-height:normal!important')) parts.push('CAPTURE_LH_NORMAL_IMPORTANT')
  if (parts.length === 0 && cssRaw !== baseline) {
    // H2 or composite — detect h2 normalize marker
    if (cssRaw.includes('min-width:0') && cssRaw.length > baseline.length + 50) return 'H2_RASTER_NORMALIZE_CSS'
    return 'FO_BASELINE_CSS'
  }
  for (const p of parts) expr += ` + ${p}`
  return expr
}

function renderSpec(spec) {
  const e = { ...spec.extra }
  const cssExpr = cssToExpr(spec.cssRaw, spec.cssRaw, null, null, null)
  e.css = cssExpr
  const lines = [
    '  {',
    `    lane: '${spec.lane}',`,
    `    label: '${spec.label.replace(/'/g, "\\'")}',`,
    `    idea: '${spec.idea.replace(/'/g, "\\'")}',`,
    '    extra: {',
  ]
  lines.push(`      inject: '${e.inject}',`)
  lines.push(`      css: ${e.css},`)
  if (e.monkeypatch) lines.push(`      monkeypatch: ${JSON.stringify(e.monkeypatch)},`)
  if (e.radicalPatch) lines.push(`      radicalPatch: '${e.radicalPatch}',`)
  if (e.harnessSnapdom) lines.push(`      harnessSnapdom: ${JSON.stringify(e.harnessSnapdom)},`)
  lines.push(`      rasterPatch: 'product-toCanvas',`)
  if (e.svgRootRound) lines.push(`      svgRootRound: '${e.svgRootRound}',`)
  if (e.labPreRaster) lines.push(`      labPreRaster: '${e.labPreRaster}',`)
  if (e.labLoadPipeline) lines.push(`      labLoadPipeline: '${e.labLoadPipeline}',`)
  if (e.labRasterPatches) lines.push(`      labRasterPatches: ${JSON.stringify(e.labRasterPatches)},`)
  if (e.harnessProductToCanvas) {
    lines.push('      harnessProductToCanvas: {')
    for (const [k, v] of Object.entries(e.harnessProductToCanvas)) {
      lines.push(`        ${k}: ${JSON.stringify(v)},`)
    }
    lines.push('      },')
  }
  lines.push('    },')
  lines.push('  }')
  return lines.join('\n')
}

const HEAD = `/**
 * Drift batch 66 — product path + triple stack alignment (drift-batch66-001..040).
 * Lane theme: product-toCanvas mirrors drift-batch555 SPECS (decode + normalize stacks).
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch66-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch66-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
`

const TAIL = `
]

if (SPECS.length !== 40) {
  throw new Error(\`recipes-drift-batch66-triple: expected 40 specs, got \${SPECS.length}\`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([

])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: \`drift-batch66-\${num}\`,
    label: \`drift-batch66 #\${i + 1}: \${spec.label}\`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch66',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(\`drift-batch66-\${num}\`),
    notes: \`Drift batch 66 lane=\${spec.lane}; product path triple-alignment; FO raster only.\`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    (r.labRasterPatches ?? []).join(','),
    r.labPreRaster ?? '',
    r.labLoadPipeline ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\\0')
  if (seen.has(key)) throw new Error(\`recipes-drift-batch66-triple: duplicate recipe key \${r.id}\`)
  seen.add(key)
}

export const DRIFT_BATCH66_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

async function main() {
  const mod = await import('./fo-recipes-shards/recipes-drift-batch555-triple.js')
  const recipes = mod.default
  if (recipes.length !== 40) throw new Error(`expected 40 from 555, got ${recipes.length}`)
  const specs = recipes.map(convert555ToSpec)
  const body = specs.map(renderSpec).join(',\n')
  fs.writeFileSync(OUT, HEAD + body + TAIL)
  // validate load
  const mod66 = await import(`./fo-recipes-shards/recipes-drift-batch66-triple.js?reload=${Date.now()}`)
  console.log('wrote', OUT, 'recipes', mod66.default.length)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
