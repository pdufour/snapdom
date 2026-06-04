/**
 * Lab toCanvas wave4 — SVG data URL + canvas export MIME probes (tc-lab-w4-mime-001..045).
 *
 * Axes:
 * - SVG data URL: charset param + encoding (encodeURIComponent vs base64 vs double-encode).
 * - Post-draw canvas export: toDataURL(image/png) vs toDataURL(image/webp), with 1–2 passes.
 *
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-mime-*'
 */

/** @type {{ charset: 'none' | 'utf-8' | 'UTF-8', encoding: 'uri' | 'double-uri' | 'base64', slug: string }[]} */
const SVG_DATAURL = [
  { charset: 'none', encoding: 'uri', slug: 'no-charset uri' },
  { charset: 'none', encoding: 'base64', slug: 'no-charset base64' },
  { charset: 'none', encoding: 'double-uri', slug: 'no-charset double-uri' },
  { charset: 'utf-8', encoding: 'uri', slug: 'utf-8 uri' },
  { charset: 'utf-8', encoding: 'base64', slug: 'utf-8 base64' },
  { charset: 'utf-8', encoding: 'double-uri', slug: 'utf-8 double-uri' },
  { charset: 'UTF-8', encoding: 'uri', slug: 'UTF-8 uri' },
  { charset: 'UTF-8', encoding: 'base64', slug: 'UTF-8 base64' },
  { charset: 'UTF-8', encoding: 'double-uri', slug: 'UTF-8 double-uri' },
]

/** @type {{ exp: null | { mime: 'image/png' | 'image/webp', passes: number }, slug: string }[]} */
const CANVAS_EXPORT = [
  { exp: null, slug: 'no export' },
  { exp: { mime: 'image/png', passes: 1 }, slug: 'toDataURL png ×1' },
  { exp: { mime: 'image/png', passes: 2 }, slug: 'toDataURL png ×2' },
  { exp: { mime: 'image/webp', passes: 1 }, slug: 'toDataURL webp ×1' },
  { exp: { mime: 'image/webp', passes: 2 }, slug: 'toDataURL webp ×2' },
]

/** @type {{ slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = []

for (const svg of SVG_DATAURL) {
  for (const exp of CANVAS_EXPORT) {
    const slug = `${svg.slug} | ${exp.slug}`
    const idea =
      `SVG data URL (${svg.slug}) + ` +
      (exp.exp ? `${exp.slug} roundtrip after draw` : 'no post-draw export')

    /** @type {Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe>} */
    const extra = {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      labSvgDataUrl: { charset: svg.charset, encoding: svg.encoding },
    }

    if (exp.exp) {
      extra.labToCanvasOpts = {
        canvasExport: { mime: exp.exp.mime, passes: exp.exp.passes },
      }
    }

    SPECS.push({ slug, idea, extra })
  }
}

if (SPECS.length !== 45) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-mime.js: expected 45 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 45) {
  throw new Error('recipes-tocanvas-lab-wave4-mime.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, idx) => {
  const num = String(idx + 1).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4-mime-${num}`,
    label: `tc-lab-w4-mime #${num}: ${spec.slug}`,
    idea: spec.idea,
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas MIME probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 45) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-mime.js: expected 45 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    JSON.stringify(r.labSvgDataUrl ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-mime.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

