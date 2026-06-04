/**
 * Lab toCanvas fork — decode / timing raster probes (tc-lab-dec-001..040).
 * ALL rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Decode: monkeypatch on Image.decode; blob paths via recipe.labRasterUrl.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-dec-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, category: 'tocanvas' | 'raster-decode', css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { labRasterUrl?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-tc decode baseline',
    idea: 'Lab toCanvas fork — product-parity decode + Safari double-RAF (no extra decode MP)',
    category: 'tocanvas',
    extra: { inject: 'raster' },
  },
  {
    n: 2,
    slug: 'decode-interval-wrap',
    idea: 'modern-screenshot drawImageInterval wait after img.decode (decode-interval-wrap MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'decode-interval-wrap' },
  },
  {
    n: 3,
    slug: 'decode-interval-prototype',
    idea: 'Image.decode prototype — decode + 100ms + second decode (decode-interval-prototype MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'decode-interval-prototype' },
  },
  {
    n: 4,
    slug: 'double-decode image-decode-twice',
    idea: 'PNG round-trip style double decode before lab toCanvas draw (image-decode-twice MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'image-decode-twice' },
  },
  {
    n: 5,
    slug: 'triple-decode stack',
    idea: 'Triple decode analog — image-decode-twice + decode-interval-wrap after first decode',
    category: 'raster-decode',
    extra: {
      inject: 'raster',
      monkeypatch: ['image-decode-twice', 'decode-interval-wrap'],
    },
  },
  {
    n: 6,
    slug: 'fonts-ready-delay',
    idea: 'document.fonts.ready before img.decode on lab toCanvas path (fonts-ready-delay MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'fonts-ready-delay' },
  },
  {
    n: 7,
    slug: 'raf-before-draw',
    idea: 'Double RAF before img.decode — offscreen flush gate (raf-before-draw MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'raf-before-draw' },
  },
  {
    n: 8,
    slug: 'tc-decode-safari-raf',
    idea: 'Safari-style double-RAF after decode before drawImage (tc-decode-safari-raf MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'tc-decode-safari-raf' },
  },
  {
    n: 9,
    slug: 'decode-wrap',
    idea: 'Swallow img.decode rejection — lab fork resilience probe (decode-wrap MP)',
    category: 'raster-decode',
    extra: { inject: 'raster', monkeypatch: 'decode-wrap' },
  },
  {
    n: 10,
    slug: 'integer-viewbox',
    idea: 'Integer viewBox snap on SVG root before lab toCanvas (no decode MP)',
    category: 'tocanvas',
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    n: 11,
    slug: 'round-dims',
    idea: 'Round SVG root width/height attrs before lab toCanvas (no decode MP)',
    category: 'tocanvas',
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    n: 12,
    slug: 'int-vb decode-interval-wrap',
    idea: 'integer-viewbox + drawImageInterval wait after decode',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'decode-interval-wrap',
    },
  },
  {
    n: 13,
    slug: 'round-dims decode-interval-wrap',
    idea: 'round-dims root snap + decode-interval-wrap',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: 'decode-interval-wrap',
    },
  },
  {
    n: 14,
    slug: 'int-vb decode-interval-prototype',
    idea: 'integer-viewbox + Image.decode prototype interval (double decode + wait)',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 15,
    slug: 'round-dims image-decode-twice',
    idea: 'round-dims + double img.decode before lab toCanvas draw',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: 'image-decode-twice',
    },
  },
  {
    n: 16,
    slug: 'int-vb tc-decode-safari-raf',
    idea: 'integer-viewbox + Safari post-decode double-RAF MP',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-decode-safari-raf',
    },
  },
  {
    n: 17,
    slug: 'round-dims fonts-ready-delay',
    idea: 'round-dims + document.fonts.ready before decode',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: 'fonts-ready-delay',
    },
  },
  {
    n: 18,
    slug: 'int-vb raf-before-draw',
    idea: 'integer-viewbox + double RAF before decode',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'raf-before-draw',
    },
  },
  {
    n: 19,
    slug: 'round-dims raf + interval',
    idea: 'round-dims + raf-before-draw + decode-interval-wrap combo',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: ['raf-before-draw', 'decode-interval-wrap'],
    },
  },
  {
    n: 20,
    slug: 'int-vb prototype + safari-raf',
    idea: 'integer-viewbox + decode-interval-prototype + tc-decode-safari-raf stack',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: ['decode-interval-prototype', 'tc-decode-safari-raf'],
    },
  },
  {
    n: 21,
    slug: 'blob-url decode-interval',
    idea: 'Object URL raster src + decode-interval-wrap on lab toCanvas',
    category: 'raster-decode',
    extra: {
      inject: 'raster',
      labRasterUrl: 'blob-url',
      monkeypatch: 'decode-interval-wrap',
    },
  },
  {
    n: 22,
    slug: 'decode-via-blob',
    idea: 'Fetch data URL → blob URL before decode on lab toCanvas path',
    category: 'raster-decode',
    extra: { inject: 'raster', labRasterUrl: 'decode-via-blob' },
  },
  {
    n: 23,
    slug: 'blob-url int-vb interval',
    idea: 'blob-url src + integer-viewbox + decode-interval-wrap',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      labRasterUrl: 'blob-url',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'decode-interval-wrap',
    },
  },
  {
    n: 24,
    slug: 'decode-via-blob round-dims prototype',
    idea: 'decode-via-blob roundtrip + round-dims + decode-interval-prototype',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      labRasterUrl: 'decode-via-blob',
      svgRootRound: 'round-dims',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 25,
    slug: 'blob-url-decode-interval int-vb',
    idea: 'blob-url-decode-interval harness path + integer-viewbox',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      labRasterUrl: 'blob-url-decode-interval',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 26,
    slug: 'int-floor decode-interval-wrap',
    idea: 'int-floor root dims + decode-interval-wrap on lab toCanvas',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      monkeypatch: 'decode-interval-wrap',
    },
  },
  {
    n: 27,
    slug: 'round-dims double + interval',
    idea: 'round-dims + image-decode-twice + decode-interval-wrap',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: ['image-decode-twice', 'decode-interval-wrap'],
    },
  },
  {
    n: 28,
    slug: 'int-vb fonts + interval',
    idea: 'integer-viewbox + fonts-ready-delay + decode-interval-wrap',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: ['fonts-ready-delay', 'decode-interval-wrap'],
    },
  },
  {
    n: 29,
    slug: 'int-floor fonts-ready',
    idea: 'int-floor + fonts-ready-delay before lab toCanvas decode',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      monkeypatch: 'fonts-ready-delay',
    },
  },
  {
    n: 30,
    slug: 'round-dims safari-raf',
    idea: 'round-dims + tc-decode-safari-raf post-decode flush',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-decode-safari-raf',
    },
  },
  {
    n: 31,
    slug: 'load-event decode-wrap',
    idea: 'load-event parity — decode-wrap + raf-before-draw (onload vs decode gate)',
    category: 'raster-decode',
    extra: {
      inject: 'raster',
      monkeypatch: ['decode-wrap', 'raf-before-draw'],
    },
  },
  {
    n: 32,
    slug: 'decode-microtask-twice',
    idea: 'decode-microtask-twice — labToCanvasTiming decodeAfter microtask2 flush',
    category: 'raster-decode',
    extra: {
      inject: 'raster',
      labToCanvasTiming: { decodeAfter: ['microtask2'] },
    },
  },
  {
    n: 33,
    slug: 'int-vb decode-wrap',
    idea: 'integer-viewbox + decode-wrap swallow on img.decode',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'decode-wrap',
    },
  },
  {
    n: 34,
    slug: 'round-dims decode-wrap safari',
    idea: 'round-dims + decode-wrap + tc-decode-safari-raf',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: ['decode-wrap', 'tc-decode-safari-raf'],
    },
  },
  {
    n: 35,
    slug: 'FO baseline raster interval',
    idea: 'FO_BASELINE_CSS at capture + decode-interval-wrap (raster inject only)',
    category: 'raster-decode',
    css: FO_BASELINE_CSS,
    extra: { inject: 'raster', monkeypatch: 'decode-interval-wrap' },
  },
  {
    n: 36,
    slug: 'FO baseline round-dims prototype',
    idea: 'FO_BASELINE_CSS + round-dims + decode-interval-prototype',
    category: 'raster-decode',
    css: FO_BASELINE_CSS,
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 37,
    slug: 'int-vb double safari',
    idea: 'integer-viewbox + image-decode-twice + tc-decode-safari-raf',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: ['image-decode-twice', 'tc-decode-safari-raf'],
    },
  },
  {
    n: 38,
    slug: 'round-dims fonts prototype',
    idea: 'round-dims + fonts-ready-delay + decode-interval-prototype',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      monkeypatch: ['fonts-ready-delay', 'decode-interval-prototype'],
    },
  },
  {
    n: 39,
    slug: 'blob int-vb prototype',
    idea: 'blob-url + integer-viewbox + decode-interval-prototype on lab toCanvas',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      labRasterUrl: 'blob-url',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 40,
    slug: 'int-vb capstone decode stack',
    idea: 'integer-viewbox + raf-before-draw + fonts-ready + decode-interval-wrap capstone',
    category: 'raster-decode',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      monkeypatch: ['raf-before-draw', 'fonts-ready-delay', 'decode-interval-wrap'],
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-fork-decode.js: expected 40 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-tocanvas-lab-fork-decode.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra, category } = spec
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && specCss === undefined
  const { labRasterUrl, ...restExtra } = extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-dec-${num}`,
    label: `tc-lab-dec #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category,
    active: true,
    notes: `Lab toCanvas decode/timing; ${spec.slug}; FO raster only — no text bypass.`,
    ...(labRasterUrl ? { labRasterUrl } : {}),
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-fork-decode.js: expected 40 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch,
    mp,
    r.labRasterUrl ?? '',
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    r.foSvgPatch ?? '',
    r.svgMarkupPatch ?? '',
    JSON.stringify(r.labToCanvasTiming ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    console.warn(`[recipes-tocanvas-lab-fork-decode] duplicate recipe key at ${r.id}`)
    continue
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
