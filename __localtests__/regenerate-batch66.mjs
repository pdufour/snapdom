import fs from 'node:fs'
const STATIC_HEADER = `/**
 * Drift batch 66 — product path + triple stack alignment (drift-batch66-001..040).
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important;' +
  'text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}' +
  'foreignObject *{box-sizing:border-box!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
`

const HEADER = STATIC_HEADER

const PATCHES = [
  ['settle', { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['dpr', { experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta' }],
  ['interval', { labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['interval-dpr', { labLoadPipeline: 'decode-interval', experimentalRasterDprScaledSvgRootDraw: true }],
  ['fonts', { labPreRaster: 'fonts-ready', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['fonts-half', { labPreRaster: 'fonts-ready-interval', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['drift004', { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'box-sizing-border-box-decode' }],
  ['drift006', { labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'double-fo-outer-inner-linebox' }],
  ['drift008', { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'remove-flex-display-a-decode' }],
  ['drift010', { labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'leading-trim-text-box-leaf' }],
  ['mp-h2', { monkeypatch: 'h2-fo-normalize-full', experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['mp-gf-int', { monkeypatch: 'googlefonts-embed-capture', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true }, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['mp-h2-gf', { monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], harnessSnapdom: { embedFonts: true }, experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta' }],
  ['mp-cap', { monkeypatch: 'capture-recipe-css', experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['mp-cap-dpr', { monkeypatch: 'capture-recipe-css', labLoadPipeline: 'decode-interval', experimentalRasterDprScaledSvgRootDraw: true }],
  ['rad-inline', { radicalPatch: 'lab-pin-inline-box-height-from-clientrects', experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['rad-ink', { radicalPatch: 'lab-pin-ink-top-in-border-padding', labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['rad-inline-fonts', { radicalPatch: 'lab-pin-inline-box-height-from-clientrects', labPreRaster: 'fonts-ready', experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta' }],
  ['rad-ink-trim', { radicalPatch: 'lab-pin-ink-top-in-border-padding', experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'leading-trim-text-box-leaf' }],
  ['rad-drift016', { radicalPatch: 'lab-pin-inline-box-height-from-clientrects', experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'strut-translate-y-meta' }],
  ['trim', { cssExtra: 'CAPTURE_LEADING_TRIM_BOTH_EDGES', harnessSnapdom: { experimentalFoLeadingTrim: true }, experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['inline', { cssExtra: 'CAPTURE_INLINE_BLOCK_LINEBOX_LEAF', harnessSnapdom: { experimentalFoTextLeafNormalize: true }, labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['flex', { harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true }, labPreRaster: 'fonts-ready', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['chromium', { cssExtra: 'CHROMIUM_COPY', harnessSnapdom: { experimentalFoChromiumText: true }, experimentalRasterDecodeSettle: true, experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta' }],
  ['textlayout', { harnessSnapdom: { experimentalFoTextLayout: true }, labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'fo-y-half-leading-meta' }],
  ['drift017', { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-height-unset-overflow-visible' }],
  ['drift018', { labLoadPipeline: 'decode-interval', experimentalRasterSvgPatch: 'viewbox-y-half-leading-meta' }],
  ['drift019', { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'combo-fo-y-linebox-height' }],
]

function baseSpec(i, [slug, cfg]) {
  const lines = []
  lines.push(`  {`)
  lines.push(`    lane: 'base-${slug}',`)
  lines.push(`    label: 'base product ${slug}',`)
  lines.push(`    idea: 'product-toCanvas base lane ${slug}',`)
  lines.push(`    extra: {`)
  lines.push(`      inject: 'both',`)
  if (cfg.cssExtra === 'CHROMIUM_COPY') lines.push(`      css: FO_BASELINE_CSS + CHROMIUM_COPY,`)
  else if (cfg.cssExtra === 'CAPTURE_LEADING_TRIM_BOTH_EDGES') lines.push(`      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,`)
  else if (cfg.cssExtra === 'CAPTURE_INLINE_BLOCK_LINEBOX_LEAF') lines.push(`      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,`)
  else lines.push(`      css: FO_BASELINE_CSS,`)
  if (cfg.monkeypatch) lines.push(`      monkeypatch: ${JSON.stringify(cfg.monkeypatch)},`)
  if (cfg.radicalPatch) lines.push(`      radicalPatch: '${cfg.radicalPatch}',`)
  if (cfg.harnessSnapdom) lines.push(`      harnessSnapdom: ${JSON.stringify(cfg.harnessSnapdom)},`)
  lines.push(`      rasterPatch: 'product-toCanvas',`)
  if (cfg.labLoadPipeline) lines.push(`      labLoadPipeline: '${cfg.labLoadPipeline}',`)
  if (cfg.labPreRaster) lines.push(`      labPreRaster: '${cfg.labPreRaster}',`)
  lines.push(`      harnessProductToCanvas: {`)
  for (const [k, v] of Object.entries(cfg)) {
    if (['cssExtra', 'monkeypatch', 'radicalPatch', 'harnessSnapdom', 'labLoadPipeline', 'labPreRaster'].includes(k)) continue
    lines.push(`        ${k}: ${JSON.stringify(v)},`)
  }
  lines.push(`      },`)
  lines.push(`    },`)
  lines.push(`  }`)
  return lines.join('\n')
}

// wf + drift from fix script via running it on a temp - read fix-555-66-shards WINNER66 by importing as text
import { WINNER66, renderSpec } from './fix-555-66-shards.mjs'

function renderWf(spec) { return renderSpec(spec) }


const drift022 = `  {
    lane: 'product-drift022-clip-inset',
    label: 'product + tc-drift-022 clip-inset + decode-interval',
    idea: 'product decode-interval + fo-clip-inset-zero-linebox rfork (drift-022)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-clip-inset-zero-linebox' },
    },
  }`

const drift026 = `  {
    lane: 'product-drift026-remove-flex',
    label: 'product + tc-drift-026 remove-flex + decode-settle',
    idea: 'product decodeSettle + remove-flex-display-a-decode rfork (drift-026)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'flex-container-flex-start' },
    },
  }`

const specs = [
  ...PATCHES.map((p, i) => baseSpec(i, p)),
  drift022,
  drift026,
  ...WINNER66.map(renderWf),
]

const FOOTER = `
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

const out = '/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-drift-batch66-triple.js'
const tmp = out + '.tmp'
const body = HEADER + 'const SPECS = [\n' + specs.join(',\n') + FOOTER
fs.writeFileSync(tmp, body)
fs.renameSync(tmp, out)
console.log('wrote batch66', specs.length)
