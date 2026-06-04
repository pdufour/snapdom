/**
 * Wave 7 — per-fork probe matrix (tc-lab-w7-fk-001..025).
 * 5 recipes × each wave7 toCanvas fork (5 forks).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-fk-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = [
  // —— fo-fix-toCanvas-w7-decode-sweep.js (lab-toCanvas-w7-decode-sweep) ——
  {
    id: 'tc-lab-w7-fk-001',
    label: 'W7 fk decode-sweep baseline',
    idea: 'Wave7 decode sweep fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-decode-sweep',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-002',
    label: 'W7 fk decode-sweep + FO baseline',
    idea: 'decode sweep fork + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-decode-sweep',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-003',
    label: 'W7 fk decode-sweep + int-vb',
    idea: 'decode sweep fork + integer-viewbox snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-decode-sweep',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-004',
    label: 'W7 fk decode-sweep + H2 normalize',
    idea: 'decode sweep fork + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-decode-sweep',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-005',
    label: 'W7 fk decode-sweep int-vb + leaf',
    idea: 'decode sweep fork + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-decode-sweep',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-w7-draw-round.js (lab-toCanvas-w7-draw-round) ——
  {
    id: 'tc-lab-w7-fk-006',
    label: 'W7 fk draw-round baseline',
    idea: 'Wave7 draw-round fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-draw-round',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-007',
    label: 'W7 fk draw-round + FO baseline',
    idea: 'draw-round fork + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-draw-round',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-008',
    label: 'W7 fk draw-round + int-vb',
    idea: 'draw-round fork + integer-viewbox snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-draw-round',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-009',
    label: 'W7 fk draw-round + H2 normalize',
    idea: 'draw-round fork + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-draw-round',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-010',
    label: 'W7 fk draw-round int-vb + leaf',
    idea: 'draw-round fork + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-draw-round',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-w7-backing-floor.js (lab-toCanvas-w7-backing-floor) ——
  {
    id: 'tc-lab-w7-fk-011',
    label: 'W7 fk backing-floor baseline',
    idea: 'Wave7 backing-floor fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-backing-floor',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-012',
    label: 'W7 fk backing-floor + FO baseline',
    idea: 'backing-floor fork + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-backing-floor',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-013',
    label: 'W7 fk backing-floor + int-vb',
    idea: 'backing-floor fork + integer-viewbox snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-backing-floor',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-014',
    label: 'W7 fk backing-floor + H2 normalize',
    idea: 'backing-floor fork + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-backing-floor',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-015',
    label: 'W7 fk backing-floor int-vb + leaf',
    idea: 'backing-floor fork + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-backing-floor',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-w7-ctx-default.js (lab-toCanvas-w7-ctx-default) ——
  {
    id: 'tc-lab-w7-fk-016',
    label: 'W7 fk ctx-default baseline',
    idea: 'Wave7 ctx-default fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-ctx-default',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-017',
    label: 'W7 fk ctx-default + FO baseline',
    idea: 'ctx-default fork + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-ctx-default',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-018',
    label: 'W7 fk ctx-default + int-vb',
    idea: 'ctx-default fork + integer-viewbox snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-ctx-default',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-019',
    label: 'W7 fk ctx-default + H2 normalize',
    idea: 'ctx-default fork + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-ctx-default',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-020',
    label: 'W7 fk ctx-default int-vb + leaf',
    idea: 'ctx-default fork + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-ctx-default',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },

  // —— fo-fix-toCanvas-w7-wait-raf.js (lab-toCanvas-w7-wait-raf) ——
  {
    id: 'tc-lab-w7-fk-021',
    label: 'W7 fk wait-raf baseline',
    idea: 'Wave7 wait-raf fork baseline (no extra capture CSS)',
    css: '',
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-wait-raf',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-022',
    label: 'W7 fk wait-raf + FO baseline',
    idea: 'wait-raf fork + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-wait-raf',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-023',
    label: 'W7 fk wait-raf + int-vb',
    idea: 'wait-raf fork + integer-viewbox snap',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-wait-raf',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-024',
    label: 'W7 fk wait-raf + H2 normalize',
    idea: 'wait-raf fork + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-wait-raf',
    category: 'tocanvas',
    active: true,
  },
  {
    id: 'tc-lab-w7-fk-025',
    label: 'W7 fk wait-raf int-vb + leaf',
    idea: 'wait-raf fork + integer-viewbox + flex leaf strut + H2 normalize',
    css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas-w7-wait-raf',
    svgRootRound: 'integer-viewbox',
    category: 'tocanvas',
    active: true,
  },
]

const EXPECTED = 25
if (FO_FIX_RECIPES_SHARD.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-fork.js: expected ${EXPECTED} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
}

const FORKS = /** @type {const} */ ([
  'lab-toCanvas-w7-decode-sweep',
  'lab-toCanvas-w7-draw-round',
  'lab-toCanvas-w7-backing-floor',
  'lab-toCanvas-w7-ctx-default',
  'lab-toCanvas-w7-wait-raf',
])

for (const fork of FORKS) {
  const rows = FO_FIX_RECIPES_SHARD.filter((r) => r.rasterPatch === fork)
  if (rows.length !== 5) {
    throw new Error(
      `recipes-tocanvas-lab-wave7-fork.js: expected 5 recipes for ${fork}, got ${rows.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave7-fork.js: duplicate recipe key ${r.id}`)
  }
  seenKeys.add(key)
}

export default FO_FIX_RECIPES_SHARD

