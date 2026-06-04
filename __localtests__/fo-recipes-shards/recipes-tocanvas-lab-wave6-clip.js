/**
 * Wave 6 — lab-toCanvas measured-box clip matrix (tc-lab-w6-clip-001..040).
 *
 * Clip rect is layout-derived: runner measures live GBCR at raster time and passes
 * `meta.measuredBox` into the lab toCanvas fork.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-clip-*'
 */

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = (() => {
  const CLIPS = /** @type {const} */ ([
    'measured-box',
    'measured-box-inset-1px',
    'measured-box-inset-2px',
    'measured-box-inset-4px',
    'measured-box-outset-1px',
    'measured-box-outset-2px',
    'measured-box-outset-4px',
    'measured-box-inset-8px',
    'measured-box-outset-8px',
    'measured-box-inset-16px',
  ])

  const VARIANTS = /** @type {const} */ ([
    { bg: null, clipAfterBg: false, slug: 'no-bg pre' },
    { bg: null, clipAfterBg: true, slug: 'no-bg post' },
    { bg: '#fff', clipAfterBg: false, slug: 'bg pre' },
    { bg: '#fff', clipAfterBg: true, slug: 'bg post' },
  ])

  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
  const out = []
  let n = 0
  for (const clip of CLIPS) {
    for (const v of VARIANTS) {
      n++
      const id = String(n).padStart(3, '0')
      out.push({
        id: `tc-lab-w6-clip-${id}`,
        label: `W6 clip ${id}: ${clip} (${v.slug})`,
        idea: `lab-toCanvas: clip to live measuredBox (${clip})`,
        css: '',
        inject: 'both',
        rasterPatch: 'lab-toCanvas',
        category: 'tocanvas',
        active: true,
        backgroundColor: v.bg ?? undefined,
        labToCanvasOpts: {
          clip,
          clipAfterBg: v.clipAfterBg,
        },
      })
    }
  }
  return out
})()

const EXPECTED = 40

if (FO_FIX_RECIPES_SHARD.length !== EXPECTED) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-clip.js: expected ${EXPECTED} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
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
    r.backgroundColor ?? '',
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-clip.js: duplicate recipe key ${r.id}`)
  }
  seenKeys.add(key)
}

export default FO_FIX_RECIPES_SHARD

