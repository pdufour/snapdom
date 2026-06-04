# Proposed FO raster fixes — Wave 3 (investigation + lab recipes)

**Verdict: NOT FIXED.** Wave 3 added **headed structural probes** and **8 tc-flags-w3 recipes**; all readable rows still tie **`product-baseline` at 2.797 px** @ dpr=1 mini Home (|svgΔ| ≈ 0.008 px).

**Not promotable:** text bypass, drawImage nudges (`vdrift`, ink-meta), flex-center / `display:inline` layout breaks.

Prioritized next work: [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) · pivot: [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md).

---

## Wave 3 scope (2026-06-02)

| Track | What | Result |
|-------|------|--------|
| **Structural probes** | Path A/B, no-flex, lh decouple, minimal repro, strut math, vdrift | **BITMAP_ONLY** reconfirmed; flex not sole cause |
| **LH deep probes** | `fo-lh-deep-probe-v2.mjs` — sweep, parent/leaf lh, flex align | lh **1.35 / 21.6px** → **2.797**; stretch-only plateau on mini nav |
| **tc-flags-w3** | 8 lab recipes (`recipes-tocanvas-flags-wave3.js`) | Expected tie **2.797** (same families as w1/w2) |
| **tc-blh-w1** | Capture + raster lh pin | Tie **2.797** — fork **no-op** on bytes ([`lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json)) |
| **Lab wave3 shards** | `tc-lab-w3-*` combinatorial (`gen-tocanvas-lab-wave3.mjs`) | Diagnostic only — do not matrix-churn for promotion |
| **Recipe prune** | `npm run fo:prune` | **48 → 18** active recipes; plateau unchanged ([`active-recipe-count.json`](../.sandbox-edit/active-recipe-count.json)) |

---

## Wave 3 structural probes (no matrix)

| Probe | Command | Artifact | Headline |
|-------|---------|----------|----------|
| **Root cause (unified)** | `npm run debug:fo-root-cause-probe` | `root-cause-dpr1.json`, `root-cause-dpr2.json` | **CONFIRMED** half-leading strut in FO bitmap paint; decode-path invariant |
| Path A/B same SVG | `node __localtests__/fo-path-ab-probe.mjs` | `path-ab-same-svg.json` | Inline FO vs decode+draw **+3.305 px** @ dpr=2 |
| Typography no-flex | `node __localtests__/fo-typography-no-flex.mjs` | `typography-no-flex.json` | **GENERIC_FO_RASTER_BUG** ~3–3.5 px without flex |
| Line-height decouple | `node __localtests__/line-height-decouple.mjs` | `line-height-decouple.json` | lh inject moves **canvas ~1 px**; svg flat at live lh |
| Minimal repro | `node __localtests__/fo-minimal-repro.mjs` | `minimal-repro.json` | 572 B hand-built FO — BITMAP_ONLY without snapdom |
| Strut math | `node __localtests__/line-box-strut-math.mjs` | `line-box-strut-math.json` | **(lh−fs)/2 = 2.8** best correlate; **0.497 px** residual |
| vdrift root cause | `node __localtests__/vdrift-root-cause-probe.mjs` | `vdrift-root-cause.json` | **DRAW_NUDGE_ONLY** — does not close svg↔canvas |
| Drift per landmark | `node __localtests__/fo-drift-per-landmark.mjs` | `drift-per-landmark.json` | Nav **2.797** constant; labels **2.5** |

Full batch notes: [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md) § Wave 3 results.

---

## LH deep probes (`fo-lh-deep-probe-v2.mjs`)

```bash
npm run compile
node __localtests__/fo-lh-deep-probe-v2.mjs
node __localtests__/fo-flex-align-lh-probe.mjs
node __localtests__/fo-parent-leaf-lh-probe.mjs
```

| Section | Artifact | Finding |
|---------|----------|---------|
| **lh-sweep** | `line-height-sweep-v2.json` | At live-like **1.35 / 21.6px**: canvasΔ **2.797**, residual vs half-leading **≈ 0**; `normal` → **3.5 px** |
| **parent/leaf lh** | `parent-leaf-lh-probe.json` | Parent vs leaf **1.35** — same **2.797** when leaf has 21.6px lh |
| **flex align** | `flex-align-lh-probe.json` | **stretch → 2.797**; flex-start/baseline → **~3 px** — align changes magnitude, not fix |
| **serialized audit** | `fo-lh-serialized-v2.json` | Live computed **21.6px**; inline FO style may omit explicit `line-height` yet **svg ≈ live** |

**Takeaway:** Correct lh in SVG does not fix bitmap paint. Raster fork `pin-lh-leaf` re-asserts what capture already encodes → **0 px** raster diff ([`raster-fork-pixel-diff.json`](../.sandbox-edit/raster-fork-pixel-diff.json)).

**Text-only principle:** Non-text raster knobs (decode, backing, GBCR nudge) tie **2.797**; only text strut/layout mechanisms can close svg↔canvas. vdrift **1.797** is drawImage blit — not a text fix. See [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) § Text-only principle.

---

## tc-flags-w3 recipes (8 active)

Shard: [`fo-recipes-shards/recipes-tocanvas-flags-wave3.js`](fo-recipes-shards/recipes-tocanvas-flags-wave3.js)

| Recipe id | Hypothesis |
|-----------|------------|
| `tc-flags-w3-vertical-align-middle` | `vertical-align:middle` on FO text leaves |
| `tc-flags-w3-anchor-display-block` | `display:block` on flex-row anchor children |
| `tc-flags-w3-content-box-lh` | `line-height:1` on text leaves |
| `tc-flags-w3-isolation-isolate` | `isolation:isolate` on `foreignObject` |
| `tc-flags-w3-combine-chromium-pin-lh` | Chromium text block + pin-content-lh |
| `tc-flags-w3-combine-decode-ceil` | decode-fonts + backing-ceil-grid |
| `tc-flags-w3-experimental-capture-all` | all `experimentalFo*` capture flags |
| `tc-flags-w3-experimental-raster-all` | all `experimentalRaster*` via `product-toCanvas` |

```bash
npm run debug:tc-flags-w3-matrix
# or
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-flags-w3-*'
```

**Expected:** all tie **2.797 px** unless layout-break (e.g. content-box lh moves svg).

---

## Lab wave3 combinatorial shards (diagnostic)

Generated: `node __localtests__/gen-tocanvas-lab-wave3.mjs` → `recipes-tocanvas-lab-wave3-*.js` (scale, patches, clip, timing, filter, …).

- **Purpose:** explore `fo-fix-toCanvas.js` knobs (`labToCanvasOpts`, draw-before steps, patches).
- **Promotion:** **none** until a row beats **2.747 px** with |svgΔ| < 0.15 on FO text.
- **Do not** run full `tc-lab-w3g-*` matrix as default workflow ([`RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md)).

---

## Recipe corpus prune (2026-06-02)

| Metric | Value |
|--------|------:|
| Active before | 48 |
| Active after | **18** |
| Deactivated this run | 30 |
| Denylist total | 16664 |

```bash
npm run fo:prune        # rank + deactivate bottom half / null-ink
npm run fo:prune:run    # matrix slice for ranking
```

Prune **does not change the plateau** — it shrinks default matrix noise. Top matrix ids after prune are still mostly pre-prune leaders (see `active-recipe-count.json`).

---

## Active vs pruned recipes (`fo-fix-recipes.js`)

| Concept | Behavior |
|---------|----------|
| **Active** | Index `< FO_FIX_DEACTIVATED_FROM_INDEX` and not in `fo-fix-deactivated-ids.json` |
| **Inactive** | Bottom half of shard merge order + denylist entries |
| **Explicit ids** | `--ids 'tc-blh-w1-*'` runs even if inactive |
| **Categories** | `tc-flags-w3`, `tc-blh-w1`, `product-baseline`, … — see shard headers |

**Preferred edit surface for raster/LH:** [`fo-fix-toCanvas.js`](fo-fix-toCanvas.js) with `rasterPatch: 'lab-toCanvas'`, then `harnessProductToCanvasToLabOpts()` for product flag mirrors.

---

## Wave 3 fix directions (honest)

| Priority | Direction | Status |
|:--------:|-----------|--------|
| **P0** | FO paint-origin autopsy at decode (no-flex fixture) | Not done — see RESEARCH-PIVOT **N4** |
| **P1** | Metric reconciliation lab +2.797 vs blackbox −0.91 | Not done — **N5** |
| **P2** | Chromium filing pack (minimal repro + CONSTANT_SHIFT) | Draft — **N3** |
| **P3** | More lh pin / raster fork / tc-flags-w3 matrix | **Ruled out** at plateau |
| **—** | SVG-text / fillText / vdrift / ink-meta | **Not promotable** |

---

## Related

| Doc | Role |
|-----|------|
| [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) | Master reference |
| [`README-TEXT-BASELINE-LINEHEIGHT.md`](README-TEXT-BASELINE-LINEHEIGHT.md) | LH/strut detail |
| [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md) | Waves 1–5 + BLH tables |
| [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) | P0/P1/P2 prioritized list |
