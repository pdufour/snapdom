/**
 * Wave 6 — best knob combos per lab toCanvas fork (tc-lab-w6-fm-001..040).
 * 5 recipes × each wired fo-fix-toCanvas*.js fork that exports toCanvas (8 forks).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-fm-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = [
  // —— fo-fix-toCanvas.js (lab-toCanvas) ——
  {
    id: 'tc-lab-w6-fm-001',
    label: 'W6 fm lab-toCanvas baseline',
    idea: 'fo-fix-toCanvas.js — lab fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-002',
    label: 'W6 fm lab-toCanvas + FO baseline',
    idea: 'lab-toCanvas + FO_BASELINE_CSS (tc-lab-cmp-002 leader)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-003',
    label: 'W6 fm lab-toCanvas + int-vb',
    idea: 'lab-toCanvas + integer-viewbox + FO baseline (tc-lab-cmp-003)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-004',
    label: 'W6 fm lab-toCanvas + H2 normalize',
    idea: 'lab-toCanvas + H2_RASTER_NORMALIZE_CSS (tc-lab-cmp-006)',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-005',
    label: 'W6 fm lab-toCanvas int-vb + backing ceil',
    idea: 'integer-viewbox + H2 normalize + labToCanvasOpts backingRound ceil',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    svgRootRound: 'integer-viewbox',
    labToCanvasOpts: { backingRound: 'ceil' },
    category: 'tocanvas',
    active: true,
  },
  // —— fo-fix-toCanvas-decode-experimental.js (lab-toCanvas-decode) ——
  {
    id: 'tc-lab-w6-fm-006',
    label: 'W6 fm decode fork baseline',
    idea: 'fo-fix-toCanvas-decode-experimental — decode-interval fork baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-007',
    label: 'W6 fm decode + FO baseline',
    idea: 'lab-toCanvas-decode + FO_BASELINE_CSS (tc-lab-alt-002)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-008',
    label: 'W6 fm decode + int-vb',
    idea: 'lab-toCanvas-decode + integer-viewbox (tc-lab-alt-003)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-009',
    label: 'W6 fm decode + Chromium',
    idea: 'lab-toCanvas-decode + Chromium copies (tc-lab-alt-004)',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-010',
    label: 'W6 fm decode leaf + int-vb',
    idea: 'lab-toCanvas-decode + flex leaf strut + integer-viewbox (tc-lab-alt-010)',
    css: FO_BASELINE_CSS + LEAF,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-decode',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  // —— fo-fix-toCanvas-frac-draw.js (lab-toCanvas-frac) ——
  {
    id: 'tc-lab-w6-fm-011',
    label: 'W6 fm frac fork baseline',
    idea: 'fo-fix-toCanvas-frac-draw — fractional drawImage source baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-frac',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-012',
    label: 'W6 fm frac + h2-percent-vb',
    idea: 'lab-toCanvas-frac + h2-fo-percent-int-viewbox (tc-lab-alt-012)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-frac',
    radicalPatch: 'h2-fo-percent-int-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-013',
    label: 'W6 fm frac + math-floor-vb',
    idea: 'lab-toCanvas-frac + math-floor-viewbox-stash-frac (tc-lab-alt-013)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-frac',
    radicalPatch: 'math-floor-viewbox-stash-frac',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-014',
    label: 'W6 fm frac + H2 normalize',
    idea: 'lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS (tc-lab-alt-015)',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-frac',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-015',
    label: 'W6 fm frac full stack',
    idea: 'percent-vb + math-floor + H2 normalize + int-vb (tc-lab-alt-020)',
    css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-frac',
    radicalPatch: 'math-floor-viewbox-stash-frac',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
    notes: 'h2-percent int-vb implied via math-floor stash + int-vb stack on frac fork.',
  },
  // —— fo-fix-toCanvas-round-all.js (lab-toCanvas-round-all) ——
  {
    id: 'tc-lab-w6-fm-016',
    label: 'W6 fm round-all baseline',
    idea: 'fo-fix-toCanvas-round-all — round all layout/draw dims before blit',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-round-all',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-017',
    label: 'W6 fm round-all + FO baseline',
    idea: 'lab-toCanvas-round-all + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-round-all',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-018',
    label: 'W6 fm round-all + int-vb',
    idea: 'lab-toCanvas-round-all + integer-viewbox pre-raster snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-round-all',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-019',
    label: 'W6 fm round-all + H2 normalize',
    idea: 'lab-toCanvas-round-all + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-round-all',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-020',
    label: 'W6 fm round-all int-vb + leaf',
    idea: 'lab-toCanvas-round-all + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-round-all',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-natural-dims.js (lab-toCanvas-natural) ——
  {
    id: 'tc-lab-w6-fm-021',
    label: 'W6 fm natural fork baseline',
    idea: 'fo-fix-toCanvas-natural-dims — outW/outH axis-source fork baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-natural',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-022',
    label: 'W6 fm natural + FO baseline',
    idea: 'lab-toCanvas-natural + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-natural',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-023',
    label: 'W6 fm natural + int-vb',
    idea: 'lab-toCanvas-natural + integer-viewbox pre-raster snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-natural',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-024',
    label: 'W6 fm natural + H2 normalize',
    idea: 'lab-toCanvas-natural + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-natural',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-025',
    label: 'W6 fm natural forced outW/outH meta',
    idea: 'lab-toCanvas-natural forcing outW/outH from meta.w0/h0 (structural dim source toggle)',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-natural',
    labToCanvasOpts: { outWFrom: 'meta', outHFrom: 'meta', optDims: 'harness-css' },
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-wait-decode.js (lab-toCanvas-wait-decode) ——
  {
    id: 'tc-lab-w6-fm-026',
    label: 'W6 fm wait-decode baseline',
    idea: 'fo-fix-toCanvas-wait-decode — extra decode/rAF wait fork baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-wait-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-027',
    label: 'W6 fm wait-decode + FO baseline',
    idea: 'lab-toCanvas-wait-decode + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-wait-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-028',
    label: 'W6 fm wait-decode + int-vb',
    idea: 'lab-toCanvas-wait-decode + integer-viewbox',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-wait-decode',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-029',
    label: 'W6 fm wait-decode + H2 normalize',
    idea: 'lab-toCanvas-wait-decode + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-wait-decode',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-030',
    label: 'W6 fm wait-decode + Chromium copies',
    idea: 'lab-toCanvas-wait-decode + Chromium copies (FO *)',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-wait-decode',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-bitmap-first.js (lab-toCanvas-bitmap-first) ——
  {
    id: 'tc-lab-w6-fm-031',
    label: 'W6 fm bitmap-first baseline',
    idea: 'fo-fix-toCanvas-bitmap-first — createImageBitmap-first fork baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-bitmap-first',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-032',
    label: 'W6 fm bitmap-first + FO baseline',
    idea: 'lab-toCanvas-bitmap-first + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-bitmap-first',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-033',
    label: 'W6 fm bitmap-first + int-vb',
    idea: 'lab-toCanvas-bitmap-first + integer-viewbox',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-bitmap-first',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-034',
    label: 'W6 fm bitmap-first + H2 normalize',
    idea: 'lab-toCanvas-bitmap-first + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-bitmap-first',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-035',
    label: 'W6 fm bitmap-first + leaf + int-vb',
    idea: 'lab-toCanvas-bitmap-first + flex leaf strut + integer-viewbox',
    css: FO_BASELINE_CSS + LEAF,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-bitmap-first',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-unified.js (lab-toCanvas-unified) ——
  {
    id: 'tc-lab-w6-fm-036',
    label: 'W6 fm unified baseline',
    idea: 'fo-fix-toCanvas-unified — unified fork baseline',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-037',
    label: 'W6 fm unified + FO baseline',
    idea: 'lab-toCanvas-unified + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-038',
    label: 'W6 fm unified + int-vb',
    idea: 'lab-toCanvas-unified + integer-viewbox',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-039',
    label: 'W6 fm unified + H2 normalize',
    idea: 'lab-toCanvas-unified + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w6-fm-040',
    label: 'W6 fm unified + Chromium copies',
    idea: 'lab-toCanvas-unified + Chromium copies (FO *)',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-unified',
    category: 'tocanvas',
    active: true,
  },
]

const EXPECTED = 40

if (FO_FIX_RECIPES_SHARD.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-fork-matrix.js: expected ${EXPECTED} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
}

const FORKS = /** @type {const} */ ([
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
  'lab-toCanvas-natural',
  'lab-toCanvas-round-all',
  'lab-toCanvas-wait-decode',
  'lab-toCanvas-bitmap-first',
  'lab-toCanvas-unified',
])

for (const fork of FORKS) {
  const rows = FO_FIX_RECIPES_SHARD.filter((r) => r.rasterPatch === fork)
  if (rows.length !== 5) {
    throw new Error(
      `recipes-tocanvas-lab-wave6-fork-matrix.js: expected 5 recipes for ${fork}, got ${rows.length}`,
    )
  }
}

const seenKeys = new Set()
for (const r of FO_FIX_RECIPES_SHARD) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.rasterPatch ?? '',
    r.inject,
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-fork-matrix.js: duplicate recipe key ${r.id}`)
  }
  seenKeys.add(key)
}

export default FO_FIX_RECIPES_SHARD
