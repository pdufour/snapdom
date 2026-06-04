# Proposed FO raster fixes — honest status

**Prioritized list:** [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) (what to try next + what NOT to do).

**Verdict: NOT FIXED.** No wave, flag, or fork has beat `product-baseline` **2.797 px** |canvasΔ| @ dpr=1 mini Home with |svgΔ| &lt; 0.15 px and FO text intact.

All mechanisms below are **wired in `src/` default off** or **lab-only** until headed matrix + `npm run test:blackbox` justify promotion. **Do not enable in product** based on current evidence.

**No SVG text bypass.** Promotion uses `--matrix --no-text-bypass` only.

Planning detail for wave 2: [`PROPOSED-FIXES-WAVE2.md`](PROPOSED-FIXES-WAVE2.md).  
**Wave 3 (NEW directions):** [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md) · consolidated index: [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md).

---

## Summary table

| Wave | Focus | Best canvasΔ @ dpr=1 | Fixed? | Promote? |
|------|-------|---------------------:|:------:|:--------:|
| Baseline | — | **2.797** | No | — |
| Capture flags w1 | FO CSS bundles | 2.797 | No | No |
| Raster flags w1 | decode settle, backing | 2.797 | No | No |
| Wave 2 flags | 6 orthogonal hypotheses | 2.797 (flex-center **13.2**) | No | No |
| Wave 5 flags | lh pin, svg patch, backing, no-gbcr | 2.797 | No | No |
| tc-blh-w1 | dual capture+raster lh pin, baseline fix | 2.797 (baseline-fix **−11.2**) | No | No |
| Raster fork w1 | decode-only SVG patches | 2.797 (flex **−12.2**) | No | No |
| Raster fork w2 | lh/trim/flex-start forks | 2.797 | No | No |
| toCanvas-only flags | natural dims, disable gbcr, backing ceil | 1.797–2.797* | No | No |
| Ink meta align | capture frac + raster dy | −2.203 (overshoot) | No | No |
| vdrift draw nudge | gbcrFracY destY | 1.797–2.297* | Partial blit only | No |

\*See [metric note](#vdrift-1797--partial-blit-only) — depends on GBCR nudge state and probe path.

---

## Wave 1 — capture + raster flags (src, default off)

Headed matrix: `npm run debug:fo-experimental-flags-matrix` → [`.sandbox-edit/experimental-flags-matrix.json`](../.sandbox-edit/experimental-flags-matrix.json).

| Flag | Mechanism | canvasΔ | Result |
|------|-----------|--------:|--------|
| `experimentalFoTextLayout` | min-width:0, kerning, synthesis, align-self baseline bundle | 2.797 | Tie |
| `experimentalFoLeadingTrim` | leading-trim on FO * | 2.797 | Tie |
| `experimentalFoTextBoxEdgeAuto` | text-box-edge auto | 2.797 | Tie |
| `experimentalRasterDecodeSettle` | fonts.ready + decode interval | 2.797 | Tie |
| `experimentalRasterBackingCeil` | ceil backing store | 2.797 | Tie |
| `experimentalRasterDoubleDecode` | double img.decode() | 2.797 | Tie |
| capture-flags / raster-flags / all-flags combos | bundles | 2.797 | Tie |

**Verdict: `NOT_FIXED_AT_PLATEAU`.**

---

## Wave 2 — six orthogonal flags (src, default off)

Headed matrix: `npm run debug:tc-flags-w2-matrix`. Recipes: `fo-recipes-shards/recipes-tocanvas-flags-wave2.js`.

| Flag | Mechanism | canvasΔ | Result |
|------|-----------|--------:|--------|
| `experimentalFoChromiumText` | kerning, synthesis, box-sizing, min-width:0 | 2.797 | Tie |
| `experimentalFoFlexRowCenter` | flex row align-items:center | **13.203** | **Regress** |
| `experimentalCaptureIntViewBox` | floor viewBox at capture | 2.797 | Tie |
| `experimentalRasterCtxNoScale` | skip ctx.scale(dpr) | 2.797 | Tie |
| `experimentalRasterPreDecodeRaf` | offscreen + 2× rAF pre-decode | 2.797 | Tie |
| `experimentalFoTextGeometric` | text-rendering:geometricPrecision | 2.797 | Tie |
| all-on / capture-css-bundle | bundles | 12.203 | Regress |

**Verdict: `NOT_FIXED_AT_PLATEAU`.** Do not promote flex-row-center or CSS bundles.

---

## Wave 5 — lh pin + raster patch combos (src, default off)

Probe: `SNAPDOM_LOCAL_PORT=8799 node __localtests__/fo-experimental-flags-probe.mjs` → [`.sandbox-edit/fix-w5-flags.json`](../.sandbox-edit/fix-w5-flags.json).

| Flag | Mechanism | canvasΔ | Result |
|------|-----------|--------:|--------|
| `experimentalFoPinLineHeightFromLive` | pin FO lh from live strut | 2.797 | Tie |
| `experimentalRasterSvgPatch` | raster-only fork (`fo-lh-pin`, etc.) | 2.797 | Tie |
| `experimentalRasterBackingCeil` | ceil(out×dpr) backing | 2.797 | Tie |
| `experimentalRasterDisableGbcrNudge` | skip fractional drawImage dest | **+1 px worse** (2.797→3.797 class) | No |
| All 16 combos | — | 2.797 | Tie |

Promotion bar: |canvasΔ| &lt; 2.747 with |svgΔ| &lt; 0.15. **Promotion: none.**

Retry probe (pin + flex + trim): [`.sandbox-edit/fix-retry-summary.json`](../.sandbox-edit/fix-retry-summary.json) — **NO improvement**.

---

## Raster-only SVG fork — wave 1

Mechanism: clone SVG string immediately before `Image.decode()`; three-way SVG leg stays on original capture.

Implementation: `src/exporters/rasterOnlySvgPatch.js`, lab hook in `fo-fix-toCanvas.js`.

Matrix: `npm run debug:raster-fork-w1-matrix` → [`.sandbox-edit/raster-fork-wave1.json`](../.sandbox-edit/raster-fork-wave1.json).

| Patch id | canvasΔ | svgΔ moved? | Result |
|----------|--------:|:-----------:|--------|
| `inject-fo-lh-pin` | 2.797 | no | No-op (capture already has lh) |
| `viewbox-int-floor` | 2.797 | no | No-op |
| `root-height-48` | 2.797 | no | No-op |
| `fo-y-nudge` (+1 px FO y) | 3.797 | no | Worse |
| `inject-flex-center` | −12.203 | no | Catastrophic |
| `combo-lh-center` | −11.203 | no | Catastrophic |

**Verdict: `NO_FORK_BEATS_BASELINE`.** Analysis: [`.sandbox-edit/raster-fork-analysis.md`](../.sandbox-edit/raster-fork-analysis.md).

Product flag (default off): `experimentalRasterSvgPatch: 'inject-fo-lh-pin'` etc.

---

## Raster-only SVG fork — wave 2

Matrix: `npm run debug:raster-fork-w2-matrix` → [`.sandbox-edit/raster-fork-w2.json`](../.sandbox-edit/raster-fork-w2.json).

| Patch id | canvasΔ | Result |
|----------|--------:|--------|
| leading-trim-inject | 2.797 | Tie |
| align-self-flex-start | 2.797 | Tie |
| svg-root-translate-y-minus-half-leading | 2.797 | Tie |
| foreignObject-overflow-hidden | 2.797 | Tie |
| line-height-normal-important | 3.797 | Worse |
| combo-lh-normal-flex-start | 3.797 | Worse |

**Verdict: `NO_FORK_BEATS_BASELINE`.**

---

## toCanvas-only flags (product path probes)

Probe artifacts: [`.sandbox-edit/tocanvas-only-flags.json`](../.sandbox-edit/tocanvas-only-flags.json), [`.sandbox-edit/tocanvas-svg-fork.json`](../.sandbox-edit/tocanvas-svg-fork.json).

| Flag / patch | canvasΔ @ dpr=1 | Result |
|--------------|----------------:|--------|
| baseline (gbcr nudge active) | **1.797** | Partial mask — not zero error |
| `experimentalRasterNaturalDims` | 1.797 | Tie |
| `experimentalRasterBackingCeil` | 1.797 | Tie |
| `experimentalRasterDisableGbcrNudge` | **2.797** | Reveals full FO error (+1 px) |
| `experimentalRasterSvgPatch: fo-lh-pin` | 1.797 | Tie |
| `experimentalRasterSvgPatch: flex-center` | **−14.203** | Regress |

**Verdict: `FLAGS_MOVE_CANVAS_DELTA` but `anyImprovement: false`.** No promotable win.

---

## Ink meta align (capture + raster)

Probe: [`.sandbox-edit/ink-meta-align.json`](../.sandbox-edit/ink-meta-align.json).

| Variant | canvasΔ | Result |
|---------|--------:|--------|
| baseline | 2.797 | — |
| capture-meta-only | 2.797 | No-op |
| raster-align-only | 2.797 | No-op |
| ink-meta-align (both flags) | **−2.203** | **Partial overshoot** — draw dy from measured frac |

`fix-wave-latest.json` marks `fixed: true` — **misleading.** This is a **draw blit offset**, not FO paint fix. svg↔canvas gap unchanged in spirit; do **not** promote.

---

## vdrift 1.797 — partial blit only

Lab recipes `vdrift-fix-001/002` apply explicit `destY = −gbcrFracY` drawImage nudge.

| Recipe | canvasΔ @ dpr=2 | Mechanism |
|--------|----------------:|-----------|
| product-baseline | 3.297 | FO raster error + product nudge state |
| vdrift-fix-001 | 2.297 | −1 px from \|dy\| nudge |
| Estimated FO error if nudge removed | ~2.42 | True bitmap paint gap |

At dpr=1 product path, baseline often reads **1.797 px** because **gbcrFracY nudge is already applied**. Disabling nudge (`experimentalRasterDisableGbcrNudge`) restores **~2.797 px** class error.

**Not a structural fix** — redundant with product blit math; svg↔canvas gap persists.

Source: [`.sandbox-edit/vdrift-root-cause.json`](../.sandbox-edit/vdrift-root-cause.json).

---

## Text baseline wave 1 — tc-blh-w1 (src flags + product raster fork)

Headed matrix: `npm run debug:tc-blh-w1-matrix` or:

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --open-browser \
  --ids product-baseline,tc-blh-w1-pin-lh-used-value,tc-blh-w1-rfork-lh-used
```

Artifact: [`.sandbox-edit/lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json) (2026-06-02).

| Recipe / flag | Mechanism | canvasΔ @ dpr=1 | svgΔ | Result |
|---------------|-----------|----------------:|-----:|--------|
| `product-baseline` | — | **2.797** | −0.008 | control |
| `experimentalFoPinLineHeightOnTextLeaf` | capture: pin used px lh on text leaves | 2.797 | −0.008 | Tie |
| `experimentalRasterSvgPatch: pin-lh-leaf` | raster fork: re-assert lh px at decode | 2.797 | −0.008 | Tie |
| FO CSS `vertical-align:baseline` (capture inject) | lab inject on text leaves | 2.797 | −0.008 | Tie |
| combo capture pin + rfork pin-lh | dual boundary pin | 2.797 | −0.008 | Tie |
| combo capture pin + rfork lh-normal | dual pin + lh:normal fork | 2.797 | −0.008 | Tie |
| `experimentalFoTextBaselineFix` | lh + va:baseline + **display:inline** | **−11.203** | +0.297 | **Regress** |

**Verdict: `NOT_FIXED`.** Dual capture+raster lh pin does not beat baseline — serialization already carries 21.6 px; decode fork is redundant on identical bytes. `experimentalFoTextBaselineFix` breaks stretch-nav layout via `display:inline`.

### Flag usage (default off)

```javascript
await snapdom.toCanvas(el, {
  experimentalFoPinLineHeightOnTextLeaf: true, // alias: experimentalFoPinLineHeightFromLive
})
await snapdom.toCanvas(el, {
  experimentalRasterSvgPatch: 'pin-lh-leaf', // or 'lh-normal-leaf', 'baseline-leaf', 'combo-lh-baseline'
})
await snapdom.toCanvas(el, {
  experimentalFoTextBaselineFix: true, // NOT recommended — layout regress on flex stretch nav
})
```

---

## Text-leaf / capture-side attempts (also NOT FIXED)

| Mechanism | Result |
|-----------|--------|
| Pin line-height from live Range strut | Tie 2.797 |
| `experimentalFoPinLineHeightOnTextLeaf` (used px from getComputedStyle) | Tie 2.797 |
| `experimentalRasterSvgPatch: pin-lh-leaf` (decode re-assert) | Tie 2.797 |
| Dual capture pin + raster fork (`tc-blh-w1-combo-capture-rfork-pin-lh`) | Tie 2.797 |
| Dual capture pin + raster fork lh-normal (`tc-blh-w1-combo-capture-rfork-lh-normal`) | Tie 2.797 |
| `experimentalFoTextBaselineFix` (lh + va:baseline + display:inline) | **−11.203** canvasΔ — layout break |
| align-self: baseline on flex items | Tie or layout change without canvas win |
| Chromium style copy block (modern-screenshot) | Tie 2.797 |
| FO normalize bundles (h2, fo-lab-w*) | Tie 2.797 |
| Device grid / int floor viewBox | Tie 2.797 |
| Decode interval / blob / bitmaprenderer transfer | Tie or null ink |

See [`README-TEXT-BASELINE-LINEHEIGHT.md`](README-TEXT-BASELINE-LINEHEIGHT.md).

---

## Wave BLH — text-leaf lh pin + raster fork (implemented 2026-06-02)

**Status: wired in `src/` (default off). Verdict: NOT FIXED.**

### Flags (opt-in, default false)

| Flag | Location | Mechanism |
|------|----------|-----------|
| `experimentalFoPinLineHeightOnTextLeaf` | capture (`styles.js`) | Alias for `experimentalFoPinLineHeightFromLive` — pin text-leaf `line-height` to live **used** px from `getComputedStyle` |
| `experimentalFoPinLineHeightFromLive` | capture | Same as above (legacy name) |
| `experimentalFoTextBaselineFix` | capture | Pin used px lh + `vertical-align:baseline` on text leaves at serialize |
| `experimentalFoTextLineHeightNormal` | capture | `line-height:normal` on text leaves at serialize |
| `experimentalRasterSvgPatch: 'pin-lh-leaf'` | toCanvas | Raster fork: re-assert used lh px on text leaves before decode |
| `experimentalRasterSvgPatch: 'lh-normal-leaf'` | toCanvas | Raster fork: `line-height:normal` on text leaves before decode |
| `experimentalRasterSvgPatch: 'baseline-leaf'` | toCanvas | Raster fork: `vertical-align:baseline` on text leaves |
| `experimentalRasterSvgPatch: 'combo-lh-baseline'` | toCanvas | Raster fork: lh-normal + va-baseline combo |

SVG measurement leg uses **original unpatched** capture; fork applies only on bitmap decode path.

### Headed matrix validation (mini Home @ dpr=1)

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --open-browser \
  --ids product-baseline,tc-blh-w1-pin-lh-used-value,tc-blh-w1-rfork-lh-used,tc-blh-w1-combo-capture-rfork-pin-lh,tc-blh-w1-combo-capture-baseline-fix
```

| Recipe | svgΔ | canvasΔ | Pass (≤0.15 svg, ≤0.06 canvas)? |
|--------|-----:|--------:|:---------------------------------:|
| `product-baseline` | −0.008 | **2.797** | ✗ |
| `tc-blh-w1-pin-lh-used-value` | −0.008 | **2.797** | ✗ tie |
| `tc-blh-w1-rfork-lh-used` | −0.008 | **2.797** | ✗ tie |
| `tc-blh-w1-combo-capture-rfork-pin-lh` | −0.008 | **2.797** | ✗ tie |
| `tc-blh-w1-combo-capture-baseline-fix` | +0.297 | **−11.203** | ✗ **regress** |

Dual capture+raster pin does not beat baseline — serialization already carries 21.6 px lh; raster re-assert is a no-op on identical bytes. `experimentalFoTextBaselineFix` regresses layout (canvas −11 px).

**Verdict: NOT_FIXED.** No promotion.

---

## Explicitly not promotable

| Row type | Why |
|----------|-----|
| `brain-l01-026`, text-bypass, fillText, svg-text | Skips FO text raster |
| vdrift / gbcrFracY / ink-meta draw dy | Blit nudge only |
| flex-center, capture-css-bundle | Layout break |
| Magic translateY tuned to gate rows | forbidden (never-overfit) |

---

## Promotion criteria (unchanged)

1. Beat **2.797 px** |canvasΔ| on **multiple** landmarks (Home + Products minimum).
2. |svgΔ| stays **&lt; 0.15 px** — no svg leg regression.
3. **svg↔canvas gap collapses** — not canvas-only draw offset.
4. FO text stays in `foreignObject`.
5. Pass `npm run test:blackbox` headed.

**Current best promotable row: `product-baseline` at 2.797 px** — i.e. no fix.

---

## If a fix emerges

1. Validate with **one** headed calibrate (`product-baseline` vs candidate).
2. Re-run wave-3 probes (path A/B, minimal repro, strut math).
3. `npm run test:blackbox`.
4. Promote from lab to `src/` per [`no-speculative-src-edits`](../.cursor/rules/no-speculative-src-edits.mdc).

Do **not** resume 100-row matrix churn without new structural hypothesis ([`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md)).
