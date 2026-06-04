/**
 * Lab toCanvas wave 3 — async timing / compositor flush probes (tc-lab-w3-time-001..070).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Timing: labToCanvasTiming hooks via tc-lab-w3-* monkeypatches (raf chains, microtasks,
 * setTimeout 0/16/100, performance.now gates, requestIdleCallback when supported).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-time-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'decode queueMicrotask',
    idea: 'After img.decode — one queueMicrotask before lab toCanvas sizing/draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-microtask' },
  },
  {
    n: 2,
    slug: 'decode queueMicrotask x2',
    idea: 'After decode — two queueMicrotask ticks (decode-microtask-twice style on lab fork)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-microtask2' },
  },
  {
    n: 3,
    slug: 'decode single rAF',
    idea: 'One requestAnimationFrame after decode before canvas blit',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf1' },
  },
  {
    n: 4,
    slug: 'decode double rAF',
    idea: 'Two chained requestAnimationFrame ticks after decode (compositor settle)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf2' },
  },
  {
    n: 5,
    slug: 'decode triple rAF',
    idea: 'Triple requestAnimationFrame flush after decode before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf3' },
  },
  {
    n: 6,
    slug: 'decode setTimeout 0',
    idea: 'setTimeout(0) macrotask after decode before lab toCanvas draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-timeout0' },
  },
  {
    n: 7,
    slug: 'decode setTimeout 16',
    idea: 'setTimeout(16) ~one frame after decode before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-timeout16' },
  },
  {
    n: 8,
    slug: 'decode setTimeout 100',
    idea: 'setTimeout(100) drawImageInterval-style wait after decode on lab fork',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-timeout100' },
  },
  {
    n: 9,
    slug: 'decode requestIdleCallback',
    idea: 'requestIdleCallback after decode when harness supports it (else single rAF)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-idle' },
  },
  {
    n: 10,
    slug: 'decode performance.now >=1ms',
    idea: 'Spin microtasks until performance.now delta >= 1ms after decode',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-perf1' },
  },
  {
    n: 11,
    slug: 'decode performance.now >=16ms',
    idea: 'performance.now gate ~one frame (16ms) after decode before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-perf16' },
  },
  {
    n: 12,
    slug: 'draw queueMicrotask',
    idea: 'queueMicrotask immediately before ctx.drawImage on lab fork',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-microtask' },
  },
  {
    n: 13,
    slug: 'draw queueMicrotask x2',
    idea: 'Two queueMicrotasks before drawImage blit',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-microtask2' },
  },
  {
    n: 14,
    slug: 'draw single rAF',
    idea: 'One requestAnimationFrame before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-raf1' },
  },
  {
    n: 15,
    slug: 'draw double rAF',
    idea: 'Double requestAnimationFrame chain before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-raf2' },
  },
  {
    n: 16,
    slug: 'draw triple rAF',
    idea: 'Triple requestAnimationFrame flush before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-raf3' },
  },
  {
    n: 17,
    slug: 'draw setTimeout 0',
    idea: 'setTimeout(0) before drawImage on lab toCanvas path',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-timeout0' },
  },
  {
    n: 18,
    slug: 'draw setTimeout 16',
    idea: 'setTimeout(16) one-frame delay before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-timeout16' },
  },
  {
    n: 19,
    slug: 'draw setTimeout 100',
    idea: 'setTimeout(100) before drawImage — upstream drawImageInterval analogue',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-timeout100' },
  },
  {
    n: 20,
    slug: 'draw requestIdleCallback',
    idea: 'requestIdleCallback before drawImage when supported',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-idle' },
  },
  {
    n: 21,
    slug: 'draw performance.now >=1ms',
    idea: 'performance.now >= 1ms gate before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-perf1' },
  },
  {
    n: 22,
    slug: 'draw performance.now >=16ms',
    idea: 'performance.now >= 16ms gate before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-perf16' },
  },
  {
    n: 23,
    slug: 'decode raf2 + draw raf1',
    idea: 'Double rAF after decode then single rAF before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf2-draw-raf1' },
  },
  {
    n: 24,
    slug: 'decode mt + draw mt',
    idea: 'queueMicrotask after decode and before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-mt-draw-mt' },
  },
  {
    n: 25,
    slug: 'decode t16 + draw t0',
    idea: 'setTimeout(16) after decode + setTimeout(0) before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-t16-draw-t0' },
  },
  {
    n: 26,
    slug: 'decode raf3 + draw raf3',
    idea: 'Triple rAF after decode and triple rAF before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf3-draw-raf3' },
  },
  {
    n: 27,
    slug: 'decode idle + draw idle',
    idea: 'requestIdleCallback after decode and before draw (idle when supported)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-idle-draw-idle' },
  },
  {
    n: 28,
    slug: 'decode perf16 + draw perf1',
    idea: 'performance.now 16ms decode gate + 1ms draw gate',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-perf16-draw-perf1' },
  },
  {
    n: 29,
    slug: 'decode mt2 + draw t100',
    idea: 'Two microtasks after decode + 100ms timeout before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-mt2-draw-t100' },
  },
  {
    n: 30,
    slug: 'decode t100 + draw raf2',
    idea: '100ms after decode + double rAF before drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-t100-draw-raf2' },
  },
  {
    n: 31,
    slug: 'decode raf1 + draw t16',
    idea: 'Single rAF after decode + setTimeout(16) before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-raf1-draw-t16' },
  },
  {
    n: 32,
    slug: 'decode mt + draw perf16',
    idea: 'queueMicrotask after decode + performance.now 16ms before draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-mt-draw-perf16' },
  },
  {
    n: 33,
    slug: 'decode chain raf mt t0',
    idea: 'Chained decode flush: rAF → microtask → setTimeout(0)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-decode-chain-raf-mt-t0' },
  },
  {
    n: 34,
    slug: 'draw chain raf2 mt t16',
    idea: 'Chained draw flush: double rAF → microtask → setTimeout(16)',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-draw-chain-raf-mt-t16' },
  },
  {
    n: 35,
    slug: 'full decode+draw chain',
    idea: 'Decode raf2+t0+mt then draw raf1+t16+idle — full compositor settle probe',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-w3-full-chain-decode-draw' },
  },
  {
    n: 36,
    slug: 'MP raf-before-draw (decode)',
    idea: 'Legacy MP: double rAF patched on img.decode before lab toCanvas',
    extra: { inject: 'raster', monkeypatch: 'raf-before-draw' },
  },
  {
    n: 37,
    slug: 'MP decode-interval-wrap',
    idea: 'Legacy MP: 100ms setTimeout after each decode on lab fork',
    extra: { inject: 'raster', monkeypatch: 'decode-interval-wrap' },
  },
  {
    n: 38,
    slug: 'MP image-decode-twice',
    idea: 'Legacy MP: await img.decode() twice before lab toCanvas draw',
    extra: { inject: 'raster', monkeypatch: 'image-decode-twice' },
  },
  {
    n: 39,
    slug: 'MP tc-decode-safari-raf',
    idea: 'Legacy MP: Safari-style off-DOM double rAF after decode',
    extra: { inject: 'raster', monkeypatch: 'tc-decode-safari-raf' },
  },
  {
    n: 40,
    slug: 'MP fonts-ready-delay',
    idea: 'Legacy MP: document.fonts.ready before img.decode on lab path',
    extra: { inject: 'raster', monkeypatch: 'fonts-ready-delay' },
  },
  {
    n: 41,
    slug: 'MP decode-wrap',
    idea: 'Legacy MP: wrap decode with extra promise tick',
    extra: { inject: 'raster', monkeypatch: 'decode-wrap' },
  },
  {
    n: 42,
    slug: 'MP tc-lab-mp-decode-interval-delay',
    idea: 'Lab alias MP: decode-interval 100ms on prototype decode',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-mp-decode-interval-delay' },
  },
  {
    n: 43,
    slug: 'decode raf2 + FO baseline',
    idea: 'Double rAF after decode + FO_BASELINE_CSS on capture',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-raf2' },
  },
  {
    n: 44,
    slug: 'draw raf3 + FO baseline',
    idea: 'Triple rAF before draw + FO baseline structural CSS',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-draw-raf3' },
  },
  {
    n: 45,
    slug: 'decode t100 + FO baseline',
    idea: '100ms decode wait + FO baseline',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-timeout100' },
  },
  {
    n: 46,
    slug: 'draw idle + FO baseline',
    idea: 'requestIdleCallback before draw + FO baseline',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-draw-idle' },
  },
  {
    n: 47,
    slug: 'full chain + FO baseline',
    idea: 'Full decode/draw timing chain + FO_BASELINE_CSS',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-full-chain-decode-draw' },
  },
  {
    n: 48,
    slug: 'raf-before-draw + FO baseline',
    idea: 'Legacy double-rAF decode MP + FO baseline',
    extra: { inject: 'both', monkeypatch: 'raf-before-draw' },
  },
  {
    n: 49,
    slug: 'decode raf3 + integer-viewbox',
    idea: 'Triple rAF after decode + integer-viewbox snap',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-raf3',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 50,
    slug: 'draw t16 + integer-viewbox',
    idea: 'setTimeout(16) before draw + integer-viewbox',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-draw-timeout16',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 51,
    slug: 'decode perf16 + round-dims',
    idea: 'performance.now 16ms decode gate + round-dims root snap',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-perf16',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 52,
    slug: 'draw raf2 + int-floor',
    idea: 'Double rAF before draw + int-floor root dims',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-draw-raf2',
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 53,
    slug: 'decode idle + device-grid',
    idea: 'requestIdleCallback after decode + labPreRaster device-grid-floor',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-lab-w3-decode-idle',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 54,
    slug: 'decode mt2-draw t100 + int-vb',
    idea: 'Combined mt2/t100 timing + integer-viewbox',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-mt2-draw-t100',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 55,
    slug: 'draw perf16 + Chromium copy',
    idea: 'performance.now 16ms draw gate + Chromium font-kerning copy',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-draw-perf16' },
  },
  {
    n: 56,
    slug: 'decode raf2 + Chromium copy',
    idea: 'Double rAF after decode + Chromium copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-raf2' },
  },
  {
    n: 57,
    slug: 'decode t16-draw t0 + Chromium',
    idea: 't16 decode + t0 draw + Chromium FO * copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-t16-draw-t0' },
  },
  {
    n: 58,
    slug: 'decode raf3-draw raf3 + Chromium',
    idea: 'Triple rAF decode and draw + Chromium copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-raf3-draw-raf3' },
  },
  {
    n: 59,
    slug: 'decode idle-draw idle + Chromium',
    idea: 'Idle callback decode and draw + Chromium copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-decode-idle-draw-idle' },
  },
  {
    n: 60,
    slug: 'full chain + Chromium',
    idea: 'Full timing chain + FO baseline + Chromium font copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-full-chain-decode-draw' },
  },
  {
    n: 61,
    slug: 'decode mt + tc-decode-safari-raf',
    idea: 'W3 decode microtask + legacy Safari off-DOM double rAF decode MP',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-w3-decode-microtask', 'tc-decode-safari-raf'],
    },
  },
  {
    n: 62,
    slug: 'draw raf1 + raf-before-draw',
    idea: 'Draw single rAF + legacy double-rAF-on-decode MP stacked',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-w3-draw-raf1', 'raf-before-draw'],
    },
  },
  {
    n: 63,
    slug: 'decode t100 + decode-interval-wrap',
    idea: 'Lab timing 100ms decode hook + legacy decode-interval-wrap MP',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-w3-decode-timeout100', 'decode-interval-wrap'],
    },
  },
  {
    n: 64,
    slug: 'draw t0 + image-decode-twice',
    idea: 'setTimeout(0) before draw + double decode MP',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-w3-draw-timeout0', 'image-decode-twice'],
    },
  },
  {
    n: 65,
    slug: 'decode chain + fonts-ready',
    idea: 'Decode raf/mt/t0 chain + fonts.ready before decode MP',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-w3-decode-chain-raf-mt-t0', 'fonts-ready-delay'],
    },
  },
  {
    n: 66,
    slug: 'draw chain + FO baseline',
    idea: 'Draw raf2/mt/t16 chain + FO baseline capture CSS',
    extra: { inject: 'both', monkeypatch: 'tc-lab-w3-draw-chain-raf-mt-t16' },
  },
  {
    n: 67,
    slug: 'decode perf1 + integer-viewbox + baseline',
    idea: '1ms perf gate after decode + integer-viewbox + FO baseline',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-perf1',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 68,
    slug: 'draw mt2 + round-dims + baseline',
    idea: 'Two microtasks before draw + round-dims + FO baseline',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-draw-microtask2',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 69,
    slug: 'decode raf1-draw raf2 + baseline',
    idea: 'Single rAF decode + double rAF draw + FO baseline',
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-raf2-draw-raf1',
    },
  },
  {
    n: 70,
    slug: 'decode perf16-draw perf1 + Chromium int-vb',
    idea: 'perf gates decode/draw + Chromium copies + integer-viewbox',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: {
      inject: 'both',
      monkeypatch: 'tc-lab-w3-decode-perf16-draw-perf1',
      svgRootRound: 'integer-viewbox',
    },
  },
]

if (SPECS.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-timing.js: expected 70 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 70) {
  throw new Error('recipes-tocanvas-lab-wave3-timing.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-time-${num}`,
    label: `tc-lab-w3-time #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas wave3 timing; ${spec.slug}; FO raster only.`,
    ...extra,
  }
})

if (RECIPES.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-timing.js: expected 70 recipes, got ${RECIPES.length}`,
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
    JSON.stringify(r.monkeypatch ?? null),
    r.svgRootRound ?? '',
    r.labPreRaster ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-timing.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
