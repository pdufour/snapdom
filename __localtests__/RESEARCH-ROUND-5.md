# FO raster research — Round 5 (2026-06-02)

**Headed probe:** `npm run compile && node __localtests__/fo-research-round-5-probe.mjs`  
**Artifacts:** `.sandbox-edit/research-round-5-*.json` (full + per-section)

**Status:** Parity **NOT fixed** @ **0.06 px** gate. Baseline **|canvasΔ| = 2.797 px** @ dpr=1 · **|svgΔ| = 0.008 px** (BITMAP_ONLY).

Round 5 extends rounds 1–4 with **decode-timing sweeps**, **canvas2d backend knobs**, **chromium-only xmlns**, **fractional FO dimensions**, **decode-layer snapdom delta**, **wave-12 spot-check**, and **createImageBitmap** vs `Image.decode`.

---

## Top 3 new findings (beyond rounds 1–4)

1. **Snapdom adds 0 px at decode-only layer** — Same `product-baseline` SVG bytes: lab `toCanvas` vs chromium-only `rasterSvgToCanvasEx` → **ΔcanvasΔ = 0 px** (`research-round-5-decode-layer.json`, verdict `SNAPDOM_ZERO_PX_AT_DECODE_LAYER`). Strut gap is **Chromium FO bitmap paint**, not snapdom blit/decode wrapper.

2. **Decode timing invariant (0 px spread)** — `fonts.ready` before/after decode, double-rAF before decode, 100 ms pre-decode wait, single vs triple `drawImage` @ 100 ms interval — all **2.797 px** (`research-round-5-decode-timing.json`). Extends round-4 decode-context; **upstream `drawImageInterval` does not close the plateau**.

3. **`createImageBitmap` cannot decode SVG blobs here** — On both full snapdom SVG (~31 KB) and **572 B hand-built FO**, `fetch(data:…svg)` → `createImageBitmap` throws *"The source image could not be decoded"* while `Image.decode` succeeds at **2.797 px** (`research-round-5-img-vs-bitmap.json`). Wave-12 `tc-fix-w12-bitmap-*` must use lab pipeline quirks — **not** a headed A/B for strut on raw SVG blobs.

---

## Best next fix direction

**Structural FO paint-origin** (not timing/backing/CIB):

| Priority | Recipe / action | Round-5 signal |
|----------|-----------------|----------------|
| **P0** | Calibrate **`tc-fix-w12-rfork-leaf-translate-y-half-leading`** | Ties w7 **0.203 px** — leaf `translateY` vs FO `y` attr |
| **P1** | **Do not promote** **`tc-fix-w12-rfork-viewbox-y-half-leading`** without rework | Spot **5.797 px** regression |
| **P2** | File **`CHROMIUM-FO-STRUT-BUG-DRAFT.md`** + round-5 decode-layer 0 px proof | Upstream Blink |
| **Metric** | Reconcile w7 **0.203 px** vs **0.06** gate | Range subpixel vs integer ink (`SOLUTION-PROXIMITY.md`) |

---

## Ruled out (round 5)

| Angle | Spread / result | Verdict |
|-------|----------------|---------|
| Decode timing (8 variants) | **0 px** | `DECODE_TIMING_INVARIANT` |
| Canvas2d backend (willReadFrequently, desynchronized, srgb) | **0 px** | `CANVAS_BACKEND_INVARIANT` |
| FO xmlns / requiredExtensions (hand-built) | **0 px** | `NAMESPACE_INVARIANT_CHROMIUM_ONLY` |
| FO fractional / floor / ceil width×height | **0 px** | `FO_SUBPIXEL_DIMS_INVARIANT` |
| Snapdom vs chromium-only same SVG | **0 px** decode delta | `SNAPDOM_ZERO_PX_AT_DECODE_LAYER` |

---

## Wave 10 / 11 / 12

| Wave | Committed matrix JSON | Round-5 note |
|------|----------------------|--------------|
| **10** | Lab gen shards only (`recipes-tocanvas-lab-wave10-*`) | Prior matrices tied **2.797** on non-text knobs |
| **11** | Recipes in `recipes-tocanvas-fix-wave11.js` | Decode combos — calibrate headed; no new round-5 matrix |
| **12** | **Not committed** — `recipes-tocanvas-fix-wave12.js` | **Spot-check** in probe: best **w7 0.203 px**; viewBox-y **5.797 px**; bitmap-w7 **null** (CIB decode fail) |

```bash
node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
  --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w12-*'
```

---

## Chromium angle

| Item | Detail |
|------|--------|
| **Draft** | [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) |
| **Filing** | **Draft** — no exact open dup (2026-06-02) |
| **Related** | [crbug.com/1218383](https://bugs.chromium.org/p/chromium/issues/detail?id=1218383) FO geometry; [crbug.com/467484](https://bugs.chromium.org/p/chromium/issues/detail?id=467484) canvas-in-FO |
| **Class probe** | `npm run debug:fo-chromium-class-probe` → hand-built = snapdom = MS **2.797 px** |
| **Decode layer** | Round-5 confirms **0 px** snapdom-specific offset on same SVG bytes |

**Pages:** [`chromium-fo-only/`](chromium-fo-only/) — `minimal-nav-fo-raster.html`, shared helpers (`rasterSvgToCanvasEx`).

---

## Open hypotheses

- **w12 viewBox-y** regression (**+5.797 px**) — paint-origin via viewBox needs different meta/sign than FO `y`.
- **w12 bitmap recipes** — `createImageBitmap` on SVG blob fails in headed round-5; lab pipeline may differ.
- **Integer gate vs w7 0.203 px** — metric reconciliation, not missing strut formula.
- **leading-trim / inner linebox clip** — still untested as promotable closure (round-1 recipe backlog).

---

## Commands

```bash
npm run compile
node __localtests__/fo-research-round-5-probe.mjs
node __localtests__/fo-research-round-5-probe.mjs --section decodeTiming
npm run debug:fo-chromium-class-probe
```

---

## See also

- [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md)
- [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md)
- Round 4: [`fo-research-round-4-probe.mjs`](fo-research-round-4-probe.mjs) · `.sandbox-edit/research-round-4-*.json`
- [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md)
