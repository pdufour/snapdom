/**
 * Wave-8 lab-toCanvas edge cases — tc-lab-w8-edge-001..070.
 *
 * Focus: harness dimension weirdness (zero/1px, odd/even, swapped), and DPR clamps (no hidden multipliers).
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-edge-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  // —— zero width/height guards (Math.max(1, refW/refH) aspect math) ——
  {
    n: 1,
    slug: 'zero width optW',
    idea: 'width=0; height=dims; ensure refW guard avoids division by zero',
    extra: { toCanvasHarness: { width: 0, height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 2,
    slug: 'zero height optH',
    idea: 'height=0; width=dims; ensure refH guard avoids division by zero',
    extra: { toCanvasHarness: { width: 'dims', height: 0, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 3,
    slug: 'zero width omit h0',
    idea: 'width=0; height=dims; omit meta.h0 so refH falls back to naturalHeight',
    extra: { toCanvasHarness: { width: 0, height: 'dims', meta: { w0: 'parsed', h0: 'omit' } } },
  },
  {
    n: 4,
    slug: 'zero height omit w0',
    idea: 'height=0; width=dims; omit meta.w0 so refW falls back to naturalWidth',
    extra: { toCanvasHarness: { width: 'dims', height: 0, meta: { w0: 'omit', h0: 'parsed' } } },
  },
  {
    n: 5,
    slug: 'zero width meta w0=0',
    idea: 'width=0; force meta.w0=0 to exercise Math.max(1, refW) guard',
    extra: { toCanvasHarness: { width: 0, height: 'dims', meta: { w0: 0, h0: 'parsed' } } },
  },
  {
    n: 6,
    slug: 'zero height meta h0=0',
    idea: 'height=0; force meta.h0=0 to exercise Math.max(1, refH) guard',
    extra: { toCanvasHarness: { width: 'dims', height: 0, meta: { w0: 'parsed', h0: 0 } } },
  },
  {
    n: 7,
    slug: 'zero width natural dims',
    idea: 'optDims=natural (omit optW/optH); meta refs parsed; verify 1px floor still holds',
    extra: {
      toCanvasHarness: { width: 0, height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'natural' },
    },
  },
  {
    n: 8,
    slug: 'zero height natural dims',
    idea: 'optDims=natural; meta refs parsed; verify 1px floor still holds',
    extra: {
      toCanvasHarness: { width: 'dims', height: 0, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'natural' },
    },
  },
  {
    n: 9,
    slug: 'zero width dpr 2 floor',
    idea: 'width=0; dpr=2 with floor backing round',
    extra: {
      toCanvasHarness: { width: 0, height: 'dims', dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 10,
    slug: 'zero height dpr 2 ceil',
    idea: 'height=0; dpr=2 with ceil backing round',
    extra: {
      toCanvasHarness: { width: 'dims', height: 0, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },

  // —— 1×1 output canvases ——
  {
    n: 11,
    slug: '1x1 explicit',
    idea: 'width=1 height=1 (css px); parsed meta refs',
    extra: { toCanvasHarness: { width: 1, height: 1, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 12,
    slug: '1x1 dpr 2',
    idea: 'width=1 height=1; dpr=2 backing store; css pixels still 1×1',
    extra: { toCanvasHarness: { width: 1, height: 1, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 13,
    slug: '1x1 stylePixels device',
    idea: 'width=1 height=1; stylePixels=device (canvas style tracks device px)',
    extra: {
      toCanvasHarness: { width: 1, height: 1, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { stylePixels: 'device' },
    },
  },
  {
    n: 14,
    slug: '1x1 harness-device opt dims',
    idea: 'width=1 height=1; optDims=harness-device so optW/optH get multiplied by dpr',
    extra: {
      toCanvasHarness: { width: 1, height: 1, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'harness-device' },
    },
  },
  {
    n: 15,
    slug: '1x1 ctxScale off',
    idea: 'width=1 height=1; dpr=2 but ctxScale=false (no ctx.scale(dpr,dpr))',
    extra: {
      toCanvasHarness: { width: 1, height: 1, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { ctxScale: false },
    },
  },
  {
    n: 16,
    slug: '1x1 swap meta refs',
    idea: 'width=1 height=1; swap w0/h0 refs',
    extra: {
      toCanvasHarness: {
        width: 1,
        height: 1,
        meta: { w0: 'target', h0: 'css' },
        swapMeta: true,
      },
    },
  },
  {
    n: 17,
    slug: '1x1 omit meta refs',
    idea: 'width=1 height=1; omit meta refs so refW/refH fall back to natural size',
    extra: { toCanvasHarness: { width: 1, height: 1, meta: { w0: 'omit', h0: 'omit' } } },
  },
  {
    n: 18,
    slug: '1x1 natural dims',
    idea: 'width=1 height=1; optDims=natural (forces optW/optH undefined)',
    extra: {
      toCanvasHarness: { width: 1, height: 1, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'natural' },
    },
  },
  {
    n: 19,
    slug: '1x1 backingRound floor',
    idea: 'width=1 height=1; backingRound=floor to pin to min 1 backing px',
    extra: {
      toCanvasHarness: { width: 1, height: 1, dpr: 1.5, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 20,
    slug: '1x1 backingRound round',
    idea: 'width=1 height=1; backingRound=round at fractional dpr',
    extra: {
      toCanvasHarness: { width: 1, height: 1, dpr: 1.5, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'round' },
    },
  },

  // —— huge DPR + explicit clamp in labToCanvasOpts (dprMax) ——
  {
    n: 21,
    slug: 'dpr 16 clamp 8',
    idea: 'dpr=16 via harness, clamped to 8 in lab-toCanvas',
    extra: { toCanvasHarness: { dpr: 16 }, labToCanvasOpts: { dprMax: 8 } },
  },
  {
    n: 22,
    slug: 'dpr 16 clamp 4',
    idea: 'dpr=16 via harness, clamped to 4',
    extra: { toCanvasHarness: { dpr: 16 }, labToCanvasOpts: { dprMax: 4 } },
  },
  {
    n: 23,
    slug: 'dpr 16 clamp 2',
    idea: 'dpr=16 via harness, clamped to 2',
    extra: { toCanvasHarness: { dpr: 16 }, labToCanvasOpts: { dprMax: 2 } },
  },
  {
    n: 24,
    slug: 'dpr 8 clamp 2 natural',
    idea: 'dpr=8, clamp 2; optDims=natural',
    extra: { toCanvasHarness: { dpr: 8 }, labToCanvasOpts: { dprMax: 2, optDims: 'natural' } },
  },
  {
    n: 25,
    slug: 'dpr 12 clamp 3 floor',
    idea: 'dpr=12 clamp 3; backingRound=floor',
    extra: { toCanvasHarness: { dpr: 12 }, labToCanvasOpts: { dprMax: 3, backingRound: 'floor' } },
  },
  {
    n: 26,
    slug: 'dpr 12 clamp 3 ceil',
    idea: 'dpr=12 clamp 3; backingRound=ceil',
    extra: { toCanvasHarness: { dpr: 12 }, labToCanvasOpts: { dprMax: 3, backingRound: 'ceil' } },
  },
  {
    n: 27,
    slug: 'dpr 10 clamp 2 stylePixels device',
    idea: 'dpr=10 clamp 2; stylePixels=device',
    extra: { toCanvasHarness: { dpr: 10 }, labToCanvasOpts: { dprMax: 2, stylePixels: 'device' } },
  },
  {
    n: 28,
    slug: 'dpr 10 clamp 2 ctxScale off',
    idea: 'dpr=10 clamp 2; ctxScale=false',
    extra: { toCanvasHarness: { dpr: 10 }, labToCanvasOpts: { dprMax: 2, ctxScale: false } },
  },
  {
    n: 29,
    slug: 'dpr 100 clamp 4',
    idea: 'absurd dpr=100 to ensure clamp dominates',
    extra: { toCanvasHarness: { dpr: 100 }, labToCanvasOpts: { dprMax: 4 } },
  },
  {
    n: 30,
    slug: 'dpr 100 clamp 1',
    idea: 'absurd dpr=100 clamped back to dpr=1',
    extra: { toCanvasHarness: { dpr: 100 }, labToCanvasOpts: { dprMax: 1 } },
  },

  // —— odd/even output dimensions (aspect math + backing rounding) ——
  {
    n: 31,
    slug: 'odd width even height',
    idea: 'width=301 height=200',
    extra: { toCanvasHarness: { width: 301, height: 200, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 32,
    slug: 'even width odd height',
    idea: 'width=300 height=201',
    extra: { toCanvasHarness: { width: 300, height: 201, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 33,
    slug: 'odd width odd height',
    idea: 'width=301 height=201',
    extra: { toCanvasHarness: { width: 301, height: 201, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 34,
    slug: 'odd dims dpr 1.5 floor',
    idea: 'odd dims + fractional dpr with backingRound=floor',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 1.5, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 35,
    slug: 'odd dims dpr 1.5 ceil',
    idea: 'odd dims + fractional dpr with backingRound=ceil',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 1.5, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 36,
    slug: 'odd dims dpr 1.5 round',
    idea: 'odd dims + fractional dpr with backingRound=round',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 1.5, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'round' },
    },
  },
  {
    n: 37,
    slug: 'odd dims harness-device',
    idea: 'odd dims + optDims=harness-device multiplies optW/optH by dpr',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'harness-device' },
    },
  },
  {
    n: 38,
    slug: 'odd dims stylePixels device',
    idea: 'odd dims + stylePixels=device',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { stylePixels: 'device' },
    },
  },
  {
    n: 39,
    slug: 'even dims fractional dpr',
    idea: 'even dims (300×200) + fractional dpr 1.25',
    extra: { toCanvasHarness: { width: 300, height: 200, dpr: 1.25, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 40,
    slug: 'odd dims fractional dpr',
    idea: 'odd dims (301×201) + fractional dpr 1.25',
    extra: { toCanvasHarness: { width: 301, height: 201, dpr: 1.25, meta: { w0: 'parsed', h0: 'parsed' } } },
  },

  // —— swap width/height at harness boundary ——
  {
    n: 41,
    slug: 'swap dims (dims)',
    idea: 'swap width/height after resolving dims.cssW/cssH',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', swapDims: true } },
  },
  {
    n: 42,
    slug: 'swap dims (explicit)',
    idea: 'swap width/height with explicit 320×180',
    extra: { toCanvasHarness: { width: 320, height: 180, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 43,
    slug: 'swap dims with width omit',
    idea: 'swap dims when width is omitted (undefined) and height is set',
    extra: { toCanvasHarness: { width: 'omit', height: 'dims', swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 44,
    slug: 'swap dims with height omit',
    idea: 'swap dims when height is omitted (undefined) and width is set',
    extra: { toCanvasHarness: { width: 'dims', height: 'omit', swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } } },
  },
  {
    n: 45,
    slug: 'swap dims dpr 2 floor',
    idea: 'swap dims + dpr 2 + floor backingRound',
    extra: {
      toCanvasHarness: { width: 320, height: 180, dpr: 2, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },
  {
    n: 46,
    slug: 'swap dims dpr 2 stylePixels device',
    idea: 'swap dims + dpr 2 + stylePixels=device',
    extra: {
      toCanvasHarness: { width: 320, height: 180, dpr: 2, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { stylePixels: 'device' },
    },
  },
  {
    n: 47,
    slug: 'swap dims natural dims',
    idea: 'swap dims + optDims=natural',
    extra: {
      toCanvasHarness: { width: 320, height: 180, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { optDims: 'natural' },
    },
  },
  {
    n: 48,
    slug: 'swap dims ctxScale off',
    idea: 'swap dims + dpr 2 + ctxScale=false',
    extra: {
      toCanvasHarness: { width: 320, height: 180, dpr: 2, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { ctxScale: false },
    },
  },
  {
    n: 49,
    slug: 'swap dims fractional dpr ceil',
    idea: 'swap dims + dpr 1.5 + backingRound=ceil',
    extra: {
      toCanvasHarness: { width: 319, height: 181, dpr: 1.5, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 50,
    slug: 'swap dims fractional dpr round',
    idea: 'swap dims + dpr 1.5 + backingRound=round',
    extra: {
      toCanvasHarness: { width: 319, height: 181, dpr: 1.5, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { backingRound: 'round' },
    },
  },

  // —— swap meta reference widths/heights (w0/h0) ——
  {
    n: 51,
    slug: 'swap meta parsed refs',
    idea: 'swap parsed meta w0/h0',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' }, swapMeta: true } },
  },
  {
    n: 52,
    slug: 'swap meta numeric refs',
    idea: 'swap numeric meta refs w0=400 h0=200',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 400, h0: 200 }, swapMeta: true } },
  },
  {
    n: 53,
    slug: 'swap meta target/css refs',
    idea: 'swap meta with mixed target/css',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'target', h0: 'css' }, swapMeta: true } },
  },
  {
    n: 54,
    slug: 'swap meta with width only',
    idea: 'width only, swap meta refs (aspect from refH after swap)',
    extra: { toCanvasHarness: { width: 'dims', height: 'omit', meta: { w0: 400, h0: 200 }, swapMeta: true } },
  },
  {
    n: 55,
    slug: 'swap meta with height only',
    idea: 'height only, swap meta refs (aspect from refW after swap)',
    extra: { toCanvasHarness: { width: 'omit', height: 'dims', meta: { w0: 400, h0: 200 }, swapMeta: true } },
  },
  {
    n: 56,
    slug: 'swap meta omit both refs',
    idea: 'swapMeta true but refs omitted (no-op swap)',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'omit', h0: 'omit' }, swapMeta: true } },
  },
  {
    n: 57,
    slug: 'swap meta dpr 2 clamp 2',
    idea: 'swap meta + dpr 2 with clamp 2',
    extra: { toCanvasHarness: { dpr: 2, meta: { w0: 500, h0: 250 }, swapMeta: true }, labToCanvasOpts: { dprMax: 2 } },
  },
  {
    n: 58,
    slug: 'swap meta dpr 16 clamp 2',
    idea: 'swap meta + dpr 16 clamped to 2',
    extra: { toCanvasHarness: { dpr: 16, meta: { w0: 500, h0: 250 }, swapMeta: true }, labToCanvasOpts: { dprMax: 2 } },
  },
  {
    n: 59,
    slug: 'swap meta odd dims',
    idea: 'odd output dims + swap meta numeric refs',
    extra: { toCanvasHarness: { width: 301, height: 201, meta: { w0: 401, h0: 199 }, swapMeta: true } },
  },
  {
    n: 60,
    slug: 'swap meta backing round floor',
    idea: 'swap meta + fractional dpr + backingRound=floor',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 1.5, meta: { w0: 401, h0: 199 }, swapMeta: true },
      labToCanvasOpts: { backingRound: 'floor' },
    },
  },

  // —— mixed stress combos (swap + dpr clamp + zero/odd) ——
  {
    n: 61,
    slug: 'swap dims+meta dpr 16 clamp 4',
    idea: 'swap dims + swap meta + dpr 16 clamped to 4',
    extra: {
      toCanvasHarness: { width: 320, height: 180, dpr: 16, swapDims: true, swapMeta: true, meta: { w0: 400, h0: 200 } },
      labToCanvasOpts: { dprMax: 4 },
    },
  },
  {
    n: 62,
    slug: 'swap dims+meta odd dims dpr 8 clamp 2',
    idea: 'odd dims + swap dims+meta + dpr 8 clamp 2',
    extra: {
      toCanvasHarness: { width: 301, height: 201, dpr: 8, swapDims: true, swapMeta: true, meta: { w0: 401, h0: 199 } },
      labToCanvasOpts: { dprMax: 2 },
    },
  },
  {
    n: 63,
    slug: 'swap dims width=0 dpr 8 clamp 2',
    idea: 'width=0 height=dims swapped → width=dims height=0; clamp dpr 2',
    extra: {
      toCanvasHarness: { width: 0, height: 'dims', dpr: 8, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { dprMax: 2 },
    },
  },
  {
    n: 64,
    slug: 'swap dims height=0 dpr 8 clamp 2',
    idea: 'height=0 width=dims swapped → width=0 height=dims; clamp dpr 2',
    extra: {
      toCanvasHarness: { width: 'dims', height: 0, dpr: 8, swapDims: true, meta: { w0: 'parsed', h0: 'parsed' } },
      labToCanvasOpts: { dprMax: 2 },
    },
  },
  {
    n: 65,
    slug: 'swap meta w0/h0 = 0',
    idea: 'swap meta numeric refs including zero to probe Math.max(1, ref*)',
    extra: { toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 0, h0: 200 }, swapMeta: true } },
  },
  {
    n: 66,
    slug: 'swap meta refs + width only',
    idea: 'width-only; meta numeric refs swapped; aspect computed from swapped refH',
    extra: { toCanvasHarness: { width: 240, height: 'omit', meta: { w0: 400, h0: 200 }, swapMeta: true } },
  },
  {
    n: 67,
    slug: 'swap meta refs + height only',
    idea: 'height-only; meta numeric refs swapped; aspect computed from swapped refW',
    extra: { toCanvasHarness: { width: 'omit', height: 135, meta: { w0: 400, h0: 200 }, swapMeta: true } },
  },
  {
    n: 68,
    slug: 'swap dims+meta omit width',
    idea: 'swap dims with width omitted; swap meta numeric refs',
    extra: { toCanvasHarness: { width: 'omit', height: 'dims', swapDims: true, swapMeta: true, meta: { w0: 400, h0: 200 } } },
  },
  {
    n: 69,
    slug: 'swap dims+meta omit height',
    idea: 'swap dims with height omitted; swap meta numeric refs',
    extra: { toCanvasHarness: { width: 'dims', height: 'omit', swapDims: true, swapMeta: true, meta: { w0: 400, h0: 200 } } },
  },
  {
    n: 70,
    slug: 'swap dims+meta fractional dpr',
    idea: 'swap dims+meta at fractional dpr with backingRound=ceil',
    extra: {
      toCanvasHarness: { width: 319, height: 181, dpr: 1.5, swapDims: true, swapMeta: true, meta: { w0: 401, h0: 199 } },
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
]

if (SPECS.length !== 70) {
  throw new Error(`recipes-tocanvas-lab-wave8-edge.js: expected 70 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 70) {
  throw new Error('recipes-tocanvas-lab-wave8-edge.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { extra } = spec
  const inject = extra.inject ?? 'both'
  return {
    id: `tc-lab-w8-edge-${num}`,
    label: `tc-lab-w8-edge #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extra.css ?? '',
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave8 edge harness probes; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 70) {
  throw new Error(`recipes-tocanvas-lab-wave8-edge.js: expected 70 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.toCanvasHarness ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    JSON.stringify(r.labToCanvasTiming ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave8-edge.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

