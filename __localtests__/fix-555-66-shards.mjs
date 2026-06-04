import fs from 'node:fs'

const WINNER555 = [
  { lane: 'wf-031-batch1-029-int-vb-settle', label: 'wf batch1-029: dpr root + int-vb + decode-settle', idea: 'drift-batch1-029 rfork: dprScaledSvgRootDraw + integer-viewbox + decodeSettle', extra: { inject: 'raster', css: 'FO_BASELINE', rasterPatch: 'lab-toCanvas', svgRootRound: 'integer-viewbox', labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true, decodeSettle: true } } },
  { lane: 'wf-032-batch1-029-int-floor-interval', label: 'wf batch1-029: dpr root + int-floor + decode-interval', idea: 'drift-batch1-029 rfork: dpr root + int-floor + decode-interval timing', extra: { inject: 'raster', css: 'FO_BASELINE', rasterPatch: 'decode-interval', svgRootRound: 'int-floor', labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true } } },
  { lane: 'wf-033-batch1-029-round-dims-fonts', label: 'wf batch1-029: dpr root + round-dims + fonts-ready', idea: 'drift-batch1-029 rfork: dpr root + round-dims + fonts-ready pre-raster', extra: { inject: 'both', css: 'FO_BASELINE', rasterPatch: 'lab-toCanvas', svgRootRound: 'round-dims', labPreRaster: 'fonts-ready', labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true } } },
  { lane: 'wf-034-batch1-030-h2-int-vb-w7', label: 'wf batch1-030: h2 capture + int-vb + w7 meta', idea: 'drift-batch1-030 rfork: H2_RASTER_NORMALIZE_CSS capture + integer-viewbox + w7 meta', extra: { inject: 'both', css: 'H2', rasterPatch: 'lab-toCanvas', svgRootRound: 'integer-viewbox', labToCanvasOpts: { w7: true } } },
  { lane: 'wf-035-batch1-030-h2-int-floor-w7-dpr', label: 'wf batch1-030: h2 capture + int-floor + w7 dpr', idea: 'drift-batch1-030 rfork: h2 foNormalize + int-floor + fo-y-half-leading-dpr-root-meta', extra: { inject: 'both', css: 'H2', rasterPatch: 'lab-toCanvas', svgRootRound: 'int-floor', labToCanvasOpts: { w7dpr: true } } },
  { lane: 'wf-036-tc-drift-039-round-dims-w7-dpr', label: 'wf tc-fix-drift-039: lh-normal + round-dims + w7 dpr', idea: 'tc-fix-drift-039 rfork: lh normal capture + round-dims + w7 dpr root', extra: { inject: 'both', css: 'LH', rasterPatch: 'lab-toCanvas', svgRootRound: 'round-dims', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { w7dpr: true } } },
  { lane: 'wf-037-batch2-036-googlefonts-int-vb', label: 'wf batch2-036: googlefonts + int-vb + dpr interval w7', idea: 'drift-batch2-036 rfork: googlefonts embed + integer-viewbox + decode-interval + w7 dpr', extra: { inject: 'capture', css: 'FO_BASELINE', monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', harnessSnapdom: { embedFonts: true }, labToCanvasOpts: { w7dprInterval: true } } },
  { lane: 'wf-038-batch2-036-googlefonts-round-settle', label: 'wf batch2-036: googlefonts + round-dims + decode-settle w7 dpr', idea: 'drift-batch2-036 rfork: googlefonts + round-dims + decodeSettle + w7 dpr root', extra: { inject: 'both', css: 'FO_BASELINE', monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'lab-toCanvas', svgRootRound: 'round-dims', harnessSnapdom: { embedFonts: true }, labToCanvasOpts: { w7dprSettle: true } } },
  { lane: 'wf-039-batch1-040-full-int-floor-interval', label: 'wf batch1-040: full stack + int-floor + decode-interval', idea: 'drift-batch1-040 rfork: h2+googlefonts + int-floor + decode-interval + w7 dpr', extra: { inject: 'both', css: 'H2', monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'decode-interval', svgRootRound: 'int-floor', harnessSnapdom: { embedFonts: true }, labToCanvasOpts: { w7dprSettle: true } } },
  { lane: 'wf-040-batch1-040-full-round-double-decode', label: 'wf batch1-040: full stack + round-dims + double-decode', idea: 'drift-batch1-040 rfork: full stack + round-dims + double-decode + decodeSettle', extra: { inject: 'both', css: 'H2', monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'double-decode', svgRootRound: 'round-dims', harnessSnapdom: { embedFonts: true }, labToCanvasOpts: { w7dprSettle: true } } },
]

const WINNER66 = [
  { lane: 'wf-031-batch1-029-product-settle-w7', label: 'wf batch1-029: product dpr + decode-settle + w7', idea: 'drift-batch1-029 rfork: product dpr root + decodeSettle + fo-y-half-leading-meta', extra: { inject: 'both', css: 'FO_BASELINE', rasterPatch: 'product-toCanvas', harnessProductToCanvas: { experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: 'wf-032-batch1-029-product-interval', label: 'wf batch1-029: product dpr + decode-interval', idea: 'drift-batch1-029 rfork: product dpr root + decode-interval pipeline', extra: { inject: 'raster', css: 'FO_BASELINE', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-033-batch1-030-h2-product-interval-w7-dpr', label: 'wf batch1-030: h2 + product interval + w7 dpr', idea: 'drift-batch1-030 rfork: h2 capture + product decode-interval + w7 dpr meta', extra: { inject: 'both', css: 'H2', monkeypatch: 'h2-fo-normalize-full', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-034-batch1-030-h2-product-settle', label: 'wf batch1-030: h2 capture + product decode-settle + w7', idea: 'drift-batch1-030 rfork: h2 foNormalize + product decodeSettle + w7 meta + fonts-ready', extra: { inject: 'both', css: 'H2', monkeypatch: 'h2-fo-normalize-full', rasterPatch: 'product-toCanvas', labPreRaster: 'fonts-ready', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: 'wf-035-tc-drift-039-product-settle-w7', label: 'wf tc-fix-drift-039: lh-normal + product settle + w7', idea: 'tc-fix-drift-039 rfork: lh normal capture + product decodeSettle + w7 meta', extra: { inject: 'both', css: 'LH', rasterPatch: 'product-toCanvas', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: 'wf-036-tc-drift-039-product-interval-w7-dpr', label: 'wf tc-fix-drift-039: lh-normal + product interval + w7 dpr', idea: 'tc-fix-drift-039 rfork: lh normal + product decode-interval + w7 dpr root', extra: { inject: 'both', css: 'LH', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-037-batch2-036-googlefonts-product-interval-w7-dpr', label: 'wf batch2-036: googlefonts + product interval + w7 dpr', idea: 'drift-batch2-036 rfork: googlefonts embed + product decode-interval + w7 dpr meta', extra: { inject: 'capture', css: 'FO_BASELINE', monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-038-batch2-036-googlefonts-product-settle-dpr', label: 'wf batch2-036: googlefonts + product settle + dpr w7', idea: 'drift-batch2-036 rfork: googlefonts + product decodeSettle + w7 meta + dpr root', extra: { inject: 'both', css: 'FO_BASELINE', monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'product-toCanvas', harnessSnapdom: { embedFonts: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-039-batch1-040-product-full-settle', label: 'wf batch1-040: product full stack + decode-settle', idea: 'drift-batch1-040 rfork: h2+googlefonts + product decodeSettle + w7 dpr root', extra: { inject: 'both', css: 'H2', monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', harnessSnapdom: { embedFonts: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: 'wf-040-batch1-040-product-full-interval', label: 'wf batch1-040: product full stack + decode-interval', idea: 'drift-batch1-040 rfork: h2+googlefonts + product decode-interval + w7 dpr', extra: { inject: 'both', css: 'H2', monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterDecodeSettle: true } } },
]



const ORIG030C_66 = {
  lane: 'product-drift024-double-fo',
  label: 'product + tc-drift-024 double-fo + decode-interval',
  idea: 'product decode-interval + double-fo-outer-inner-linebox rfork (drift-024)',
  extra: {
    inject: 'both',
    css: 'FO_BASELINE',
    rasterPatch: 'product-toCanvas',
    labLoadPipeline: 'decode-interval',
    harnessProductToCanvas: { experimentalRasterSvgPatch: 'double-fo-outer-inner-linebox' },
  },
}

const ORIG030B_66 = {
  lane: 'product-drift026-remove-flex',
  label: 'product + tc-drift-026 remove-flex + decode-settle',
  idea: 'product decodeSettle + remove-flex-display-a-decode rfork (drift-026)',
  extra: {
    inject: 'both',
    css: 'FO_BASELINE',
    rasterPatch: 'product-toCanvas',
    harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'remove-flex-display-a-decode' },
  },
}

const ORIG030_66 = {
  lane: 'product-drift022-clip-inset',
  label: 'product + tc-drift-022 clip-inset + decode-interval',
  idea: 'product decode-interval + fo-clip-inset-zero-linebox rfork (drift-022)',
  extra: {
    inject: 'both',
    css: 'FO_BASELINE',
    rasterPatch: 'product-toCanvas',
    labLoadPipeline: 'decode-interval',
    harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-clip-inset-zero-linebox' },
  },
}

function cssJs(t) {
  if (t === 'FO_BASELINE') return 'FO_BASELINE_CSS'
  if (t === 'H2') return 'H2_RASTER_NORMALIZE_CSS'
  if (t === 'LH') return 'FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT'
  throw new Error('css ' + t)
}
function labOptsToJs(o) {
  if (o.w7) return '{ ...W7_META }'
  if (o.w7dpr) return '{ ...W7_DPR_ROOT }'
  if (o.w7dprInterval) return '{ rasterOnlySvgPatch: \'fo-y-half-leading-meta\', disableGbcrFracNudge: true, dprScaledSvgRootDraw: true }'
  if (o.w7dprSettle) return '{ ...W7_DPR_ROOT, decodeSettle: true }'
  const parts = Object.entries(o).map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
  return `{ ${parts.join(', ')} }`
}
function renderExtra(extra) {
  const lines = ['    extra: {']
  lines.push(`      inject: '${extra.inject}',`)
  lines.push(`      css: ${cssJs(extra.css)},`)
  if (extra.monkeypatch) lines.push(`      monkeypatch: ${JSON.stringify(extra.monkeypatch)},`)
  if (extra.rasterPatch) lines.push(`      rasterPatch: '${extra.rasterPatch}',`)
  if (extra.svgRootRound) lines.push(`      svgRootRound: '${extra.svgRootRound}',`)
  if (extra.labPreRaster) lines.push(`      labPreRaster: '${extra.labPreRaster}',`)
  if (extra.labLoadPipeline) lines.push(`      labLoadPipeline: '${extra.labLoadPipeline}',`)
  if (extra.harnessSnapdom) lines.push(`      harnessSnapdom: ${JSON.stringify(extra.harnessSnapdom)},`)
  if (extra.labToCanvasOpts) lines.push(`      labToCanvasOpts: ${labOptsToJs(extra.labToCanvasOpts)},`)
  if (extra.harnessProductToCanvas) {
    lines.push('      harnessProductToCanvas: {')
    for (const [k, v] of Object.entries(extra.harnessProductToCanvas)) lines.push(`        ${k}: ${JSON.stringify(v)},`)
    lines.push('      },')
  }
  lines.push('    },')
  return lines.join('\n')
}
function renderSpec(spec) {
  return `  {\n    lane: '${spec.lane}',\n    label: '${spec.label.replace(/'/g, "\\'")}',\n    idea: '${spec.idea.replace(/'/g, "\\'")}',\n${renderExtra(spec.extra)}\n  }`
}

function parseSpecsFromFile(path) {
  const src = fs.readFileSync(path, 'utf8')
  const start = src.indexOf('const SPECS = [')
  if (start < 0) throw new Error('no SPECS in ' + path)
  const innerStart = start + 'const SPECS = ['.length
  const inner = src.slice(innerStart)
  const specs = []
  let pos = 0
  while (pos < inner.length) {
    const objStart = inner.indexOf('\n  {', pos)
    if (objStart < 0) break
    let depth = 0
    let i = objStart + 1
    for (; i < inner.length; i++) {
      const ch = inner[i]
      if (ch === '{') depth++
      else if (ch === '}') {
        depth--
        if (depth === 0) {
          const chunk = inner.slice(objStart + 1, i + 1).trim()
          if (/lane:\s*'/.test(chunk)) specs.push('  ' + chunk)
          pos = i + 1
          break
        }
      }
    }
    if (i >= inner.length) break
    if (specs.length >= 45) break
  }
  return { src, start, specs }
}

function tail555() {
  return `
]

if (SPECS.length !== 40) {
  throw new Error(\`recipes-drift-batch555-triple: expected 40 specs, got \${SPECS.length}\`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([

])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: \`drift-batch555-\${num}\`,
    label: \`drift-batch555 #\${i + 1}: \${spec.label}\`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch555',
    active: DRIFT_BATCH_KEEP_ACTIVE.size === 0 || DRIFT_BATCH_KEEP_ACTIVE.has(\`drift-batch555-\${num}\`),
    notes: \`Drift batch 555 lane=\${spec.lane}; SVG root + decode triple-alignment; FO raster only.\`,
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
  if (seen.has(key)) throw new Error(\`recipes-drift-batch555-triple: duplicate recipe key \${r.id}\`)
  seen.add(key)
}

export const DRIFT_BATCH555_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

function tail66() {
  return `
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
    active: DRIFT_BATCH_KEEP_ACTIVE.size === 0 || DRIFT_BATCH_KEEP_ACTIVE.has(\`drift-batch66-\${num}\`),
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
}

function rebuild555() {
  const path = '/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-drift-batch555-triple.js'
  const { src, start, specs } = parseSpecsFromFile(path)
  const kept = specs.filter((s) => !/lane:\s*'wf-/.test(s) && !/lane:\s*'fork-/.test(s)).slice(0, 30)
  const block = `const SPECS = [\n${kept.join(',\n')},\n${WINNER555.map(renderSpec).join(',\n')}`
  const head = src.slice(0, start)
  fs.writeFileSync(path, head + block + tail555())
  console.log('555 kept', kept.length)
}

function rebuild66() {
  const path = '/Users/pauldufour/Repos/snapdom/__localtests__/fo-recipes-shards/recipes-drift-batch66-triple.js'
  const { src, start, specs } = parseSpecsFromFile(path)
  const kept = specs
    .filter((s) => !/lane:\s*'wf-/.test(s) && !/lane:\s*'fork-/.test(s) && !/product-drift022/.test(s) && !/product-drift026/.test(s))
    .slice(0, 30)
  const block = `const SPECS = [\n${kept.join(',\n')},\n${renderSpec(ORIG030_66)},\n${renderSpec(ORIG030B_66)},\n${WINNER66.map(renderSpec).join(',\n')}`
  const head = src.slice(0, start)
  fs.writeFileSync(path, head + block + tail66())
  console.log('66 kept', kept.length)
}

import { pathToFileURL } from 'node:url'
if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  rebuild555()
  rebuild66()
}

export { WINNER66, WINNER555, renderSpec, tail66, tail555, ORIG030_66, ORIG030B_66 }
