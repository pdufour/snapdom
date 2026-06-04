# FO raster research — master reference

**Status (2026-06-02, wave-7 structural fork): parity is NOT fixed** at the **≤ 0.06 px** integer ink gate. Baseline mini Home nav @ `dpr=1` on `product-baseline` FO raster: **|canvasΔ| = 2.797 px**. Best structural lab row `tc-fix-w7-rfork-fo-y-half-leading-meta` — lab `rasterOnlySvgPatch: 'fo-y-half-leading-meta'`; product opt-in `experimentalRasterSvgPatch: 'fo-y-half-leading-meta'` (default off) — **|canvasΔ| = 0.203 px** (strut ~½(lh−fs) at FO bitmap paint origin; residual ≈ Range subpixel vs integer scan — see [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md)). Serialized FO ink still matches live on baseline (**|svgΔ| ≈ 0.008 px**). Wave-6 matrix tied **2.797**; wave-11 decode combos (`tc-fix-w11-*`, `rasterOnlySvgPatch.js` `RASTER_ONLY_SVG_PATCH_W11_IDS`) — calibrate with `--ids 'tc-fix-w7-*,tc-fix-w10-*,tc-fix-w11-*'`; **no row ≤ 0.06 px**. Non-promotable partials: `tc-fix-w6-meta-ink-align` **2.203 px** (inkAlign blit), vdrift **1.797 px**.

**No SVG text bypass** for promotion — real DOM text stays inside `foreignObject` through FO raster. See [FO lab: no text bypass](../GEMINI.md#fo-lab-no-text-bypass).

---

## Research findings (latest)

**Probe:** `node __localtests__/fo-research-win-probe.mjs` (headed) → [`.sandbox-edit/research-win-2026-06-02.json`](../.sandbox-edit/research-win-2026-06-02.json) · [`.sandbox-edit/research-win-latest.json`](../.sandbox-edit/research-win-latest.json)

### Root cause verdict — **LIKELY** (Chromium FO strut paint)

| Evidence | Result |
|----------|--------|
| **BITMAP_ONLY** @ dpr=1 (GBCR nudge off) | svgΔ **−0.008** · canvasΔ **+2.797** |
| **Half-leading match** | (21.6−16)/2 = **2.8 px** · residual **−0.003 px** (static FO @ lh=1.35) |
| **Hand-built static FO** (no snapdom) | canvasΔ **2.797** · svgΔ **0** |
| **Why lh recipes tie** | `lh-21.6!important` @ decode → **0** bitmap px diff · canvasΔ **2.797**; `lh:1` / `normal` → **3.797** |
| **Decode CSS reachability** | Red background **visible** (**7469** px diff) — fork reaches decode |
| **Incremental ladder** | flex-center / stretch / mini-nav **2.797**; block-text **~3.0** — stretch not the trigger |
| **FO geometry** | `fo-height-linebox` changes bitmap (**14k** px diff) · canvasΔ still **2.797** |

### Winning hypothesis (single sentence)

**Chromium `foreignObject`→bitmap text paint omits ~½(`line-height`−`font-size`) strut above the glyph box while inline FO DOM and serialized markup keep correct `line-height` — closure needs decode-time strut/leading-trim/line-box restack, not lh re-pin or `drawImage` nudges.**

### Next 3 experiments (recipe ids to add in lab)

| Rank | Recipe id | Mechanism |
|------|-----------|-----------|
| 1 | `tc-research-w1-leading-trim-both-edges` | `leading-trim: both` + `text-box-trim: trim-both` on FO text leaves @ decode |
| 2 | `tc-research-w1-fo-linebox-clip-overflow` | FO `overflow:hidden` + height from capture **meta lineHeightPx** |
| 3 | `tc-research-w1-strut-neutralize-flex-center` | FO-only `align-items:center` + used lh pin |

---

| Doc | Role |
|-----|------|
| [`DEBUGGING-FO-LAB.md`](DEBUGGING-FO-LAB.md) | **Lab debugging** — ink markers, w7 fork, matrix flags, regression probes |
| [`FO-RASTER-RESEARCH-PROGRAM.md`](FO-RASTER-RESEARCH-PROGRAM.md) | **Program master** — rounds 1–8, evidence ledger, decision tree |
| [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) | Ranked open gaps v2 (17 items) |
| [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md) | **Distance to gate** — baseline 2.797 px, vdrift 1.797, % progress, next 3 experiments |
| [`README-TEXT-BASELINE-LINEHEIGHT.md`](README-TEXT-BASELINE-LINEHEIGHT.md) | Line-height, strut, `tc-blh-w1-*`, lh sweeps |
| [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) | Prioritized fixes + what NOT to do |
| [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md) | Wave 1–5 tables, forks, artifacts |
| [`.sandbox-edit/WHY-DRIFT-VARIES.md`](../.sandbox-edit/WHY-DRIFT-VARIES.md) | Why +2.797 vs −1.727 vs −0.91 coexist |
| [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) | Ranked gaps — filing Chromium vs metric reconciliation vs fix-wave pause |
| [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md) | Stop matrix churn; next experiments |
| [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md) | Probe JSON one-liners |
| [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md) | Wave 3 probes, tc-flags-w3, prune, lh no-op |

---

## Problem statement

Checkout and mini **flex + text-leaf** fixtures show stable **live↔canvas** text ink drift while layout boxes and serialized FO markup match live within sub-pixel tolerance.

| Stage | Typical Home (mini nav) | Verdict |
|-------|-------------------------|---------|
| Live vs serialized SVG FO | **−0.008 px** | Capture OK |
| Live vs canvas bitmap | **+2.797 px** @ dpr=1 · **+3.297 px** @ dpr=2 | Raster gap |
| SVG vs canvas | **~2.8–3.3 px** | **BITMAP_ONLY** |

**BITMAP_ONLY:** inline / mounted serialized FO paints like live; `Image.decode()` → `drawImage()` bitmap does not. Drift enters at **FO→bitmap**, not snapdom capture serialization.

Evidence: [`path-ab-same-svg.json`](../.sandbox-edit/path-ab-same-svg.json), [`raster-vs-svg-ink-probe.json`](../.sandbox-edit/raster-vs-svg-ink-probe.json), [`minimal-repro.json`](../.sandbox-edit/minimal-repro.json).

---

## Stage classification

Use three-way ink on the same capture bytes (headed Chrome, `product-baseline`):

| Leg | What it measures | Typical Home topInBorder | Δ vs live |
|-----|------------------|-------------------------:|----------:|
| **Live** | Painted `Range` in link border box | **~14.203 px** | — |
| **SVG** | FO in serialized SVG (inline / DOM measure) | **~14.195 px** | **~−0.008 px** |
| **Canvas** | FO after decode + draw | **~17.0 px** @ dpr=1 · **~17.5 px** @ dpr=2 | **+2.797 / +3.297 px** |

**Classification rule:** if \|svgΔ\| < 0.15 px and \|canvasΔ\| ≫ 0.15 px → **`raster`** (parity stage in lab matrix). Capture and serialization are **not** the bottleneck.

**Path A/B** ([`path-ab-same-svg.json`](../.sandbox-edit/path-ab-same-svg.json)): one SVG string — inline measure **14.195 px** vs decode+draw **17.5 px** → **+3.305 px** at bitmap stage only.

---

## Key numbers (mini Home nav, `product-baseline`)

| Metric | dpr=1 | dpr=2 | Notes |
|--------|------:|------:|-------|
| Live painted top | ~14.203 px | ~14.203 px | Ground truth |
| SVG painted top | ~14.195 px | ~14.195 px | ≈ live |
| Canvas painted top | ~17.0 px | ~17.5 px | FO bitmap |
| **\|canvasΔ\|** | **2.797 px** | **3.297 px** | Plateau reference |
| **\|svgΔ\|** | **0.008 px** | **0.008 px** | Capture OK |
| Half-leading `(lh−fs)/2` | 2.8 px | 2.8 px | Best correlate (~0.5 px residual @ dpr=2) |
| Computed `line-height` | 21.6 px | 21.6 px | Serializes correctly |
| Flex stretch used line box | 48 px | 48 px | Not required for bug (no-flex ~3 px) |

**Gates (different tools):**

| Gate | Threshold | Context |
|------|-----------|---------|
| Lab matrix promotion | Beat **2.747 px** \|canvasΔ\| (2.797 − 0.05); \|svgΔ\| < **0.15 px** | `fo-fix-lab.mjs --matrix --no-text-bypass` |
| Blackbox structure band | Per-landmark canvas ink budget (e.g. sub-px class on `paint.canvas.vs-border.top`) | `npm run test:blackbox` — **not** the same as +2.797 painted Range |

Do not expect lab **+2.797** and blackbox **~−0.91** to match numerically — see [WHY-DRIFT-VARIES.md](../.sandbox-edit/WHY-DRIFT-VARIES.md).

**Metric trap:** product `toCanvas` with **GBCR `gbcrFracY` nudge** active often reports **1.797 px** @ dpr=1; disabling nudge (`experimentalRasterDisableGbcrNudge`) restores **~2.797 px** class error.

---

## Half-leading strut theory

On stretch nav `<a>` (16px font, lh 1.35 → **21.6px**):

```
halfLeadingLhFs   = (lineHeightPx − fontSizePx) / 2   → (21.6 − 16) / 2 = 2.8 px
halfStrutContent  = (contentBoxPx − lineHeightPx) / 2 → (48 − 21.6) / 2 = 13.2 px  (stretch slack)
```

| Correlates to canvas offset @ dpr=2 | Value | \|offset − metric\| |
|-------------------------------------|------:|--------------------:|
| **(lh − fs) / 2** | **2.8 px** | **0.497 px** ← closest |
| (contentBox − lh) / 2 | 13.2 px | 9.9 px ← ruled out |
| cap-model half-leading | ~1.8 px | ~1.5 px |

**Interpretation:** FO→bitmap paint origin behaves as if **half of the lh−fs strut** (~2.8 px) is missing or shifted vs inline FO — with **~0.5 px** residual, not exact equality. Stretch **48px** vs **21.6px** lh is a **layout context**, not the serialized error (svg still ≈ live at 21.6px lh).

Source: [`line-box-strut-math.json`](../.sandbox-edit/line-box-strut-math.json), [`README-TEXT-BASELINE-LINEHEIGHT.md`](README-TEXT-BASELINE-LINEHEIGHT.md).

---

## Why ~120 recipes tie at 2.797 px

Matrix rollup (~**128 rows**, FO raster only @ dpr=1 mini Home):

| Outcome | Count | Notes |
|---------|------:|-------|
| Tie baseline **2.797 px** | **~120** | svgΔ ≈ −0.008 |
| Beat baseline (promotable?) | **3** | 2× vdrift → **1.797** (blit); 1× text bypass (not promotable) |
| Null ink | **58+** | Mostly `tc-lab-w7-uni-*` — wiring/taint, not discovery |
| Catastrophic | handful | flex-center, writing-mode |

**Why line-height / lh patches are no-ops:**

1. **Serialized SVG already has correct lh** — \|svgΔ\| ≈ 0.008 px at live **21.6px**; capture pin and `inject-fo-lh-pin` change **0 pixels** on the svg leg ([`raster-fork-pixel-diff.json`](../.sandbox-edit/raster-fork-pixel-diff.json)).
2. **Decode-time lh inject moves canvas ~1 px** but not svg↔canvas together ([`line-height-decouple.json`](../.sandbox-edit/line-height-decouple.json)) — raster-side layout restack, not a fix.
3. **All `tc-blh-w1-*` and `tc-fork-w1-*` lh variants** tie **2.797** or regress ([`lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json)).
4. **Drift is in FO bitmap paint**, before meaningful `drawImage` compensation — path A/B and vdrift probes.

So recipes “tie” because they **do not change what Chromium paints inside FO decode** — only blit nudges or bypass paths change the reported canvasΔ.

---

## Text-only principle

**Only text-related FO layout/strut changes can close the svg↔canvas gap.** Non-text raster knobs correctly tie at **2.797 px** because the bug is **FO text strut paint during bitmap raster**, not generic decode/backing/draw plumbing.

| Category | Examples | canvasΔ @ dpr=1 | Why |
|----------|----------|----------------:|-----|
| **Non-text raster** | decode interval, `fonts.ready`, backing ceil/round, `createImageBitmap`, viewBox floor, meta w0/h0 | **2.797** | Blit/geometry — does not restack text strut inside FO decode |
| **Text CSS (correct lh)** | capture pin, `pin-lh-leaf` rfork, `tc-blh-w1-pin-lh-used-value` | **2.797** | **No-op fork** — serialized SVG already has live **21.6px** lh; re-assert changes **0 bytes** ([`raster-fork-pixel-diff.json`](../.sandbox-edit/raster-fork-pixel-diff.json)) |
| **Text CSS (wrong lh)** | `lh-normal-leaf`, lh sweep `normal` | **3.5+** or ~**1 px** shift | Moves canvas sensitivity — does not close plateau with correct strut |
| **Blit nudge (non-text)** | vdrift / `gbcrFracY` | **1.797** | Masks ~**1 px** of drawImage dest — **does not fix** text strut ([`vdrift-root-cause.json`](../.sandbox-edit/vdrift-root-cause.json)) |
| **TEXT_ONLY_RASTER** | text vs block in same FO | text drifts, block stable | Drift is text-class ([`text-vs-block-probe.json`](../.sandbox-edit/text-vs-block-probe.json)) |

**In scope for next experiments:** line-height on text leaves (used px, normal, 1), vertical-align/baseline, leading-trim/text-box-edge, inline/inline-block line box, `align-self:flex-start` on flex text leaves, FO height = typographic line box (not stretch 48px), strut `translateY(calc((line-height - 1em)/2))`, capture pin lh from live on text leaves only.

**Out of scope:** decode timing alone, backing ceil alone, drawImage nudge alone, SVG-text/fillText bypass.

**Lab tooling:**

```bash
# Text-only matrix + fork lh audit columns
node __localtests__/fo-fix-lab.mjs --matrix --text-only --open-browser
# Same ids explicitly:
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*,tc-text-w1-*,product-baseline' --debug-lh --open-browser
```

Non-text `tc-blh-w1-raster-*` / decode-settle combos are **inactive** in the shard — use `--ids` to rerun.

---

`npm run fo:prune` shrinks the **default active** lab corpus **48 → 18** recipes; **plateau unchanged** ([`active-recipe-count.json`](../.sandbox-edit/active-recipe-count.json)). Inactive recipes remain in shards / denylist — use `--ids` to rerun.

---

## What we ruled out

| Family | Result |
|--------|--------|
| Capture / serialization | svg ≈ live |
| FO `x`/`y`, `viewBox`, `pad`, `meta.w0/h0` | Default geometry — not ~3 px |
| Decode timing (interval, double decode, rAF, fonts.ready) | Tie **2.797** |
| Backing round/ceil, device grid, int viewBox floor | Tie **2.797** |
| Raster-only SVG fork w1/w2 (lh-pin, viewbox, flex-start, leading-trim) | Tie **2.797** or regress |
| Wave 1–5 experimental flags (default **off** in product) | Tie **2.797** |
| Flex-only coupling | **Falsified** — [`typography-no-flex.json`](../.sandbox-edit/typography-no-flex.json) |
| Half-leading CSS pin / translateY −strut | Tie or layout break |
| Fractional truncation on lh alone | r ≈ 0 vs canvasΔ |
| ink-meta-align | Overshoot — draw offset |
| Text bypass / SVG-text / fillText | Low canvasΔ — **not promotable** |
| DPR/backing rounding as sole cause | ≤ **0.5 px** — not ~3 px |

Do **not** invest in more flag/recipe matrix churn without a new structural hypothesis.

---

## What we tried (recipes, flags, lab hooks)

| Surface | IDs / flags | Implementation |
|---------|-------------|----------------|
| **Lab raster fork** | `tc-fork-w1-*` | `recipes-tocanvas-raster-fork-wave1.js` → `fo-fix-toCanvas.js` `labToCanvasOpts.rasterOnlySvgPatch` |
| **Text baseline wave 1** | `tc-blh-w1-*` | `recipes-tocanvas-text-baseline-wave1.js` — capture pin + rfork lh/va combos |
| **Text baseline wave 2** | `tc-blh-w2-*` | `recipes-tocanvas-text-baseline-wave2.js` — meta lh, linebox, strut translate from live meta |
| **Product flags** | `experimentalFo*`, `experimentalRaster*` | `src/` default off; mirrored via `harnessProductToCanvasToLabOpts()` in lab |
| **Wave 2 flags** | `tc-flags-w2-*` | `recipes-tocanvas-flags-wave2.js` |
| **Wave 3 flags** | `tc-flags-w3-*` (8 recipes) | `recipes-tocanvas-flags-wave3.js` — tie **2.797** expected |
| **LH deep probes** | `fo-lh-deep-probe-v2.mjs` | → `line-height-sweep-v2.json`, `flex-align-lh-probe.json`, … |
| **vdrift recipes** | `vdrift-fix-*` | `vDriftFix` / `gbcrFracY` in lab `toCanvas` |
| **Ink meta** | `experimentalCaptureInkMeta` + `experimentalRasterInkAlign` | Partial overshoot |

Full tables: [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md). **Preferred lab edit surface for raster experiments:** [`fo-fix-toCanvas.js`](fo-fix-toCanvas.js) (promote to `src/exporters/toCanvas.js` only after matrix proof).

---

## Current status

**Proximity snapshot:** [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md) — baseline **2.797 px** canvasΔ; best structural w7 **0.203 px**; svgΔ **0.008 px** on baseline; **NOT_FIXED** @ **0.06 px** integer gate.

| Item | Status |
|------|--------|
| **Parity** | **NOT_FIXED** — gate **0.06 px**; best structural **0.203 px** (w7) |
| **w7 flag** | Lab: `tc-fix-w7-rfork-fo-y-half-leading-meta` · product: `experimentalRasterSvgPatch: 'fo-y-half-leading-meta'` (off) · pinned `FO_FIX_FORCE_ACTIVE_IDS` |
| **Wave-6 matrix (53 rows)** | Baseline **2.797**; structural forks tie or regress |
| **Wave-11 combos** | `tc-fix-w11-*` — viewBox/Range-strut + trim/linebox; calibrate headed |
| **Best partial (non-promotable)** | **w7 0.203** structural · **meta-ink-align 2.203** / **vdrift 1.797** blit-only |
| **Best promotable** | **None** |
| **src/ experimental flags** | Wired, **default off** — matrices tied plateau |
| **Blackbox** | Still fails on structure-band canvas ink until real FO paint fix |

### Headed validation (2026-06-02, text-only matrix)

Command: `node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'product-baseline,tc-blh-w1-*,tc-text-w1-*' --open-browser`

| Recipe group | Best canvasΔ | svgΔ | Verdict |
|--------------|-------------:|-----:|---------|
| `product-baseline` | **2.797** | −0.008 | control |
| `tc-blh-w1-*` (pin, rfork, flex-start, combos) | **2.797** tie | −0.008 | no-op / tie |
| `tc-blh-w1-rfork-lh-normal-leaf` / lh-1 | **3.797** | −0.008 | worse |
| `tc-blh-w1-rfork-vertical-align-baseline` | **−10.203** | −0.008 | layout break |
| `tc-text-w1-*` | **2.797** tie (or 3.797 lh-normal) | −0.008 | no closure |

Wave 2 (`tc-blh-w2-*`): `lh-meta-leaf` and `chromium-copy-lh-baseline-leaf` tie **2.797**; `strut-translate-y-meta` **5.797** (worse); `inline-block-linebox` **−11.203** (layout break). **NOT promotable.**

---

## Research Round 5 (2026-06-02) — decode pipeline audit

Headed probe: `npm run debug:fo-decode-pipeline-audit` → [`.sandbox-edit/decode-pipeline-audit.json`](../.sandbox-edit/decode-pipeline-audit.json)

Full write-up: [`DECODE-PIPELINE.md`](DECODE-PIPELINE.md) — SVG → blob/data URL → `Image.decode` → `drawImage`; meta (`gbcrFrac`, `inkAlign`, `dpr`, `scale`); half-leading entry points besides FO y.

| Compare | Path | Notes |
|---------|------|-------|
| **product-baseline** | Lab `rasterSvgUrl` (data URL, no gbcr draw) + explicit **product** `toCanvas.js` (blob, −gbcrFrac) | Matrix row ≠ production draw when gbcr active |
| **w7** | `fo-fix-toCanvas.js` + `fo-y-half-leading-meta` SVG fork | FO `y` −½(lh−fs) at decode; drawImage dy unchanged |

Probe logs **naturalWidth/height** vs computed/actual **draw dest rect** vs **FO root attrs** (pre/post patch).

### Updated root cause confidence

**HIGH** — Half-leading correction belongs in **FO bitmap paint origin** (SVG fork), not decode URL kind or natural≠dest blit (natural matches dest on baseline). Residual w7 **~0.203 px** = Range subpixel vs integer ink scan, not missing drawImage dy.

---

## Research Round 4 (2026-06-02)

Headed probe: `node __localtests__/fo-research-round-4-probe.mjs` → [`.sandbox-edit/research-round-4-full.json`](../.sandbox-edit/research-round-4-full.json) (+ section JSON).

### New findings (not in prior docs)

| Angle | Result @ dpr=1 mini Home |
|-------|--------------------------|
| **modern-screenshot vs snapdom** | Both **2.797 px** canvasΔ — **CLASS_WIDE_FO_RASTER_BUG**, not snapdom-specific |
| **FO y+1px nudge** | canvasΔ **+1 px** exactly (2.797→3.797) — 2.797 is **not** FO rect snap alone |
| **FO floor/ceil x/y/w/h** | **0 px** spread — subpixel FO geometry not sole cause |
| **font-display block/swap/optional** | **0 px** spread @ 2.797 |
| **font fallback chain** | Obscure `font-family` + `fonts.ready` — **0 px** spread |
| **Stacked invisible FO** | **0 px** change — drift is **per-FO strut**, not global translate |
| **requiredExtensions / xmlns** | **0 px** spread (strip-xhtml → null canvas ink — taint/unreadable) |
| **::first-line / line-box-contain / initial-letter** | **0 px** spread — strut CSS knobs refuted |
| **writing-mode rtl / vertical-lr** | Drift class persists @ 2.797 when readable |
| **Minimal repro ladder** | **bare-span** drifts @ **~3 px** without flex; **2.797** bucket only on stretch/center nav link |

**iframe-decode-retry** rows returned **null canvasΔ** (ink unreadable — likely taint); main-doc + font-display legs still tie **2.797**.

### Updated root cause confidence

**HIGH** — BITMAP_ONLY + half-leading residual **−0.003 px** @ lh=1.35 dpr=1; **modern-screenshot** reproduces identical drift → **Chromium FO bitmap strut paint**, not snapdom capture/decode wiring.

### Refuted this round

- Decode context (font-display, fonts-before-ready) explains plateau
- ::first-line / line-box-contain / initial-letter / leading-trim fix strut paint
- requiredExtensions / xmlns attributes affect raster
- Font metrics swap after decode causes plateau
- FO x/y floor/ceil cascade is sole cause of 2.797 px
- Global canvas translate (stacked FO experiment)

---

## Research Round 5 (2026-06-02)

Headed probe: `npm run debug:fo-research-round-5-probe` → [`.sandbox-edit/research-round-5-full.json`](../.sandbox-edit/research-round-5-full.json) · doc: [`RESEARCH-ROUND-5.md`](RESEARCH-ROUND-5.md)

| Angle | Result @ dpr=1 mini Home |
|-------|--------------------------|
| **Decode timing** (fonts.ready, rAF, 100 ms pre/post, single vs triple draw) | **0 px** spread — all **2.797** |
| **Canvas2d backend** (willReadFrequently, desynchronized, srgb) | **0 px** spread |
| **FO xmlns / requiredExtensions** (hand-built chromium-only) | **0 px** spread |
| **FO fractional w×h** | **0 px** spread (extends round-4 integer floor/ceil) |
| **Snapdom decode layer** | lab toCanvas vs chromium-only same SVG — **0 px** ΔcanvasΔ |
| **createImageBitmap** | Fails on SVG blob (snapdom + hand-built); `Image.decode` **2.797** |
| **Wave-12 spot** (matrix not committed) | w7 **0.203**; viewBox-y **5.797**; bitmap-w7 null |

**Best next fix:** leaf `translateY` half-leading (ties w7) + file Chromium draft; **do not** promote viewBox-y without rework.

---

## Research Round 7 (2026-06-02)

Headed probe: `npm run debug:fo-research-round-7-probe` → [`.sandbox-edit/research-round-7.json`](../.sandbox-edit/research-round-7.json) · doc: [`.sandbox-edit/RESEARCH-ROUND-7.md`](../.sandbox-edit/RESEARCH-ROUND-7.md)

| Angle | Result @ dpr=1 mini Home |
|-------|--------------------------|
| **Nav min-height 48/56/64 px** | canvasΔ spread **0 px** — stretch ruled out |
| **wave-14 matrix on disk** | **Absent** — wave-13 spot; best w7 **0.203** |
| **Snapdom vs chromium decode** | **0 px** on same SVG (baseline + w7) |
| **Home vs Products** | canvasΔ spread **0** — metric not landmark bug |
| **Range vs cap/blackbox** | **+2.797** vs **−1.727** — reconcile **4.523 px** |
| **w7 residual 0.203** | **Confirmed** = Range subpixel; integer row 14 vs 14.203 |

**Best next fix:** refine FO y to `halfLeading − rangeSubpixel` (w13 fork regressed +0.797); do not re-tune stretch height.

---

## Research Round 8 (2026-06-02) — fix waves paused

Headed probe: `npm run debug:fo-research-round-8-probe` → [`.sandbox-edit/research-round-8.json`](../.sandbox-edit/research-round-8.json) · doc: [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) · gaps: [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md)

| Angle | Result |
|-------|--------|
| **w7 ceiling (−0.203)** | snapdom = chromium **0 px**; residual = Range subpixel **0.203** |
| **Blackbox w7 enabled** | Checkout Home cap **−0.91 → −1.91** — **regresses**; ≠ lab Range **−0.203** |
| **Active matrix ingest** | **56** recipes, **0 pass**; best w7 **\|−0.203\|** |
| **FO row dump vs Range** | Baseline row **17** → w7 **14**; w7 range−row **+0.203** |

**Stop fix churn:** no wave-20 recipes until metric reconciliation (rank #1 in [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md)).

### Top 3 experiments to try next

1. **Raster-only FO clip to line-height box** — pin text-leaf FO subtree `height`/`max-height` to computed lh (21.6px) at decode. Expected: canvasΔ **2.797 → ~0–0.5 px** if bitmap paint origin follows clipped lh box.
2. **Capture: FO wrapper height = lh under stretch** — structural capture pin (not flex-start layout break). Expected: canvasΔ **2.797 → ~0 px** if FO bitmap stops using 48px stretch slack.
3. **CDP paint-origin autopsy** on `align-items:center` row (21.6px leaf, canvasΔ ≈ 2.797) — row profile + FO-internal Range before decode; file Chromium bug pack if inline FO = live but decode adds +2.797.

---

## Recommended next steps

From [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md) (investigation, not matrix dumps):

1. **N4 — FO paint-origin autopsy** at decode on **typography-no-flex** fixture (inline FO vs bitmap row profile).
2. **N5 — Metric reconciliation** — which probe must move for a real fix vs blackbox gate.
3. **Chromium bug pack** — [`chromium-bug-pack/`](../.sandbox-edit/chromium-bug-pack/) minimal repro without snapdom. **Bug draft:** [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) — no exact open crbug dup; related issues listed there.
4. **Chromium class probe** — `npm run debug:fo-chromium-class-probe` → [`.sandbox-edit/chromium-fo-class-probe.json`](../.sandbox-edit/chromium-fo-class-probe.json) (hand-built vs snapdom vs modern-screenshot @ dpr 1+2).
5. **Stop** blind 100-row recipe churn unless user requests diagnostics.

Prioritized fix list: [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md).

---

## Root cause (2026-06-02 investigation)

**Verdict: CONFIRMED — half-leading strut missing in FO bitmap paint** (stage: **`raster` / BITMAP_ONLY**). Not a capture/serialization bug; not decode-path-specific; not flex-coupled alone.

### Mechanism

When Chromium rasterizes serialized `foreignObject` text via `Image.decode()` → `drawImage()`, **text ink paints ~`(lineHeight − fontSize) / 2` lower** than:

1. Live DOM `Range` painted top in border box
2. Inline/mounted serialized FO SVG (same bytes, no decode)

On mini Home @ **16px / lh 1.35 → 21.6px**:

| Quantity | Value |
|----------|------:|
| Half-leading `(lh − fs) / 2` | **2.8 px** |
| **canvasΔ** @ dpr=1 | **2.797 px** |
| Residual `canvasΔ − halfLeading` | **−0.003 px** |
| **svgΔ** | **−0.008 px** |

**Interpretation:** FO→bitmap uses a paint origin as if the **top half-leading strut (~2.8 px) is absent** vs inline FO layout. Stretch **48px** used line box is context only — drift appears on **bare text** without flex (`domLadder.bare-text` → **3 px** canvasΔ).

### Evidence table (headed `fo-root-cause-probe.mjs`)

| Test | Result | Implication |
|------|--------|-------------|
| Path A/B same SVG | **+2.805 px** svg↔canvas | Drift at FO→bitmap, not serialization |
| Serialized lh audit | **21.6px matches live** | Capture OK — lh-pin recipes are no-ops |
| Decode path sweep | **0 px spread** (img / blob / CIB / iframe) | Not decode mechanism |
| DOM ladder | Drift from **bare-text** upward | Flex stretch not required |
| lh=1 inject | canvasΔ **3.797** (worse) | Half-leading not sole knob — strut class bug |
| FO height=21.6px | canvasΔ **2.797** (unchanged) | Stretch FO height not root cause |
| GBCR nudge off | canvasΔ **2.797** (full class) | vdrift **1.797** = drawImage mask only |
| lh-pin raster fork | **0 px** bitmap diff | Fork runs; re-asserts existing lh bytes |
| DPR 1 vs 2 | **2.797 → 3.297** (+0.5 px) | +0.5 px/dpr slack, not lh×dpr |
| Hand-built minimal FO | See [`minimal-repro.json`](../.sandbox-edit/minimal-repro.json) | Chromium repro without snapdom |

Artifacts: [`.sandbox-edit/root-cause-dpr1.json`](../.sandbox-edit/root-cause-dpr1.json), [`root-cause-dpr2.json`](../.sandbox-edit/root-cause-dpr2.json).

```bash
npm run debug:fo-root-cause-probe
# or
node __localtests__/fo-root-cause-probe.mjs --dpr-sweep
```

### Falsified hypotheses

| Hypothesis | Falsification |
|------------|---------------|
| Wrong lh in serialized SVG | Audit: live **21.6px** = serialized **21.6px**, svgΔ ≈ 0 |
| Flex stretch 48px sole cause | Bare span/text drifts ~3 px without flex ancestor |
| FO height=21.6px fixes bitmap | Decode inject unchanged canvasΔ |
| lh=1 eliminates drift | Worse (~3.8 px); does not collapse to 0 |
| Decode path (blob/CIB) differs | All tie **2.797** on default path ink |
| Raster fork broken | lh-pin changes SVG bytes; bitmap identical (lh redundant) |
| drawImage nudge is structural fix | GBCR off → full **2.797** class error remains |

### Why ~120 recipes tie at 2.797 px

1. **Serialized SVG already encodes correct lh** — changing capture or decode lh-pin moves **0 pixels** on bitmap.
2. **Drift is inside Chromium FO text bitmap paint** — before meaningful `drawImage` compensation.
3. Recipes touch timing, backing, viewBox, flex CSS, flags — none restack the **strut paint origin** Chromium uses at FO decode.
4. Only **blit nudges** (`vdrift` / `gbcrFracY` → **1.797**) or **text bypass** change reported canvasΔ — not promotable.

### Promising fix direction

**Structural FO text strut paint at decode** — align FO bitmap paint origin with inline FO line box (e.g. `leading-trim` / `text-box-edge` at raster, FO viewport clip to line metrics, upstream Chromium fix). **Not:** capture lh pin, raster lh fork re-assert, or `drawImage` nudges.

---

## Confirmed mechanisms (summary)

1. **BITMAP_ONLY** — svg ≈ live; canvas does not.
2. **TEXT_ONLY_RASTER** — block ink stable; text drifts ([`text-vs-block-probe.json`](../.sandbox-edit/text-vs-block-probe.json)).
3. **GENERIC_FO_RASTER_BUG** — no flex ancestor still ~3 px.
4. **Engine repro** — hand-built FO SVG without snapdom ([`minimal-repro.json`](../.sandbox-edit/minimal-repro.json)).
5. **Class-wide** — checkout Home/Products **2.797 px** @ dpr=1 ([`checkout-landmark-scan.json`](../.sandbox-edit/checkout-landmark-scan.json)).
6. **CONSTANT_SHIFT** — sharp ~1 device-row onset ([`ink-row-profile-dpr1.json`](../.sandbox-edit/ink-row-profile-dpr1.json)).
7. **Half-leading correlate** — (lh−fs)/2 ≈ 2.8 px vs ~3 px offset.
8. **Per-landmark painted drift** — nav **2.797** constant; labels **2.5** ([`drift-per-landmark.json`](../.sandbox-edit/drift-per-landmark.json)).
9. **Flex align** — `stretch` → **2.797**; `flex-start` / `baseline` → **~3 px** — cross-axis affects magnitude, not closure ([`flex-align-lh-probe.json`](../.sandbox-edit/flex-align-lh-probe.json)).

---

## Tooling pitfalls (sandbox proxy lies)

| ID | Hazard | Effect |
|----|--------|--------|
| **M1** | `svg-fo-proxy` sets `miss: false` | Canvas column duplicates SVG FO DOM ink |
| **M2** | Taint → `canvasVs = svgVs` fallback | Same lie without `inkProbe` label |
| **M3** | Readable probe uses `data:` direct, display uses `blob:` | Different raster paths |
| **M4** | `--probe-mini-display` defaults `patch=blob-url` | False pass |
| **M5** | **Raster OK** decoupled from ink diagnosis | Confusing UX |
| **M6** | `?patch=` ineffective for Product/Lab engines | Surprising but documented |

**Safe interpretation:**

1. **Product engine**, **`patch=none`**, headed Chrome; no `inkProbe` in diagnosis.
2. Ground truth: `node __localtests__/fo-raster-vs-svg-ink-probe.mjs` or `fo-fix-lab.mjs --matrix` @ dpr=1.
3. Do **not** gate promotion on sandbox **Canvas vs live** when `[ink: svg≈canvas est.]` or taint notes appear.

Details: [`README-fo-svg-sandbox.md`](README-fo-svg-sandbox.md), [`.sandbox-edit/sandbox-metric-integrity.md`](../.sandbox-edit/sandbox-metric-integrity.md) (if present).

---

## How to reproduce (headed Chrome)

```bash
npm run compile

# Ground truth three-way ink
node __localtests__/fo-raster-vs-svg-ink-probe.mjs
node __localtests__/fo-path-ab-probe.mjs

# Research-win comprehensive probe (angles A–G)
node __localtests__/fo-research-win-probe.mjs
node __localtests__/fo-research-win-probe.mjs --json .sandbox-edit/research-win-2026-06-02.json

# Wave 3 structural probes
node __localtests__/fo-typography-no-flex.mjs
node __localtests__/fo-text-vs-block-probe.mjs
node __localtests__/line-box-strut-math.mjs
node __localtests__/fo-drift-per-landmark.mjs
node __localtests__/line-height-decouple.mjs
node __localtests__/fo-minimal-repro.mjs
node __localtests__/vdrift-root-cause-probe.mjs

# Chromium upstream (class probe, channel compare, filing draft)
npm run debug:fo-chromium-class-probe
node __localtests__/fo-chromium-class-probe.mjs --channels chrome,chromium

# Research round 4 — new angles (headed)
node __localtests__/fo-research-round-4-probe.mjs

# Research round 5 — decode timing, canvas backend, decode-layer 0px (headed)
npm run debug:fo-research-round-5-probe

# Research round 7 — nav height, wave-14 ingest, metric reconcile, w7 0.203 (headed)
npm run debug:fo-research-round-7-probe

# Research round 8 — w7 ceiling, blackbox w7, matrix ingest (headed)
npm run debug:fo-research-round-8-probe

node __localtests__/fo-root-cause-probe.mjs

# Wave 3 LH / flex / serialization (headed)
node __localtests__/fo-lh-deep-probe-v2.mjs
node __localtests__/fo-flex-align-lh-probe.mjs
node __localtests__/fo-parent-leaf-lh-probe.mjs

# Recipe prune (active corpus 48 → 18)
npm run fo:prune:run
npm run fo:prune

# Flag / fork matrices → .sandbox-edit/*.json
npm run debug:fo-experimental-flags-matrix
npm run debug:tc-flags-w2-matrix
npm run debug:tc-flags-w3-matrix
npm run debug:tc-blh-w1-matrix
npm run debug:raster-fork-w1-matrix
npm run debug:raster-fork-w2-matrix
SNAPDOM_LOCAL_PORT=8799 node __localtests__/fo-experimental-flags-probe.mjs --json .sandbox-edit/fix-w5-flags.json

# Recipe lab (promotion ranking — FO raster only)
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass
node __localtests__/fo-fix-lab.mjs --matrix --text-only --open-browser
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-fork-w1-*'

# Blackbox gate (after any src promotion)
npm run test:blackbox
```

**Never use `HEADLESS=1`** for ink/canvas promotion decisions.

**Sandbox URL (if using IDE loop):** `http://127.0.0.1:8765/__localtests__/fo-svg-sandbox.html?fixture=mini&engine=product&patch=none`

---

## Chromium upstream (2026-06-02)

Engine/upstream pass (extends FO class probe — not lh-pin recipe matrix).

| Finding | Detail |
|---------|--------|
| **Class-wide** | Hand-built static FO, snapdom, and modern-screenshot all report **canvasΔ ≈ 2.797 px** @ dpr=1 on mini flex+text — **not snapdom-specific** |
| **BITMAP_ONLY** | **svgΔ ≈ 0.008 px** — serialized FO matches live; drift is FO→bitmap paint |
| **Mechanism** | Missing **~½(lh−fs)** half-leading strut at FO bitmap paint origin; residual **≈ −0.003 px** @ 16px / lh 1.35 |
| **Workaround** | Lab w7 `fo-y-half-leading-meta` (FO `y` −2.8px) → **~0.203 px** canvasΔ on stretch nav — documents mechanism, not upstream fix |
| **Chrome vs Chromium** | `fo-chromium-class-probe.mjs --channels chrome,chromium` — expect **< 0.08 px** spread on hand-built canvasΔ |
| **CSS/DOM refuted** | `text-rendering`, `direction`, `writing-mode`, strut CSS knobs — **0 px** canvasΔ spread (round-4 + class probe) |
| **Open bug** | No exact Chromium dup — draft: [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) |
| **Standalone repro** | [`fixtures/chromium-fo-strut-repro.svg`](fixtures/chromium-fo-strut-repro.svg) · [`fixtures/chromium-fo-strut-repro.html`](fixtures/chromium-fo-strut-repro.html) |

**Probes:** `npm run debug:fo-chromium-class-probe` → `.sandbox-edit/chromium-fo-class-probe.json`

### Filing checklist (Chromium)

1. Headed repro + full **`chrome://version`** string (not headless).  
2. Attach **`fixtures/chromium-fo-strut-repro.svg`** and three-way ink @ **dpr=1** (live / inline FO / canvas).  
3. State **BITMAP_ONLY** and **½(lh−fs)** correlate (~2.8 px).  
4. Note **snapdom + modern-screenshot + hand-built** share canvasΔ.  
5. Optional: channel compare JSON (`--channels chrome,chromium`).  
6. Link related issues from draft; mark **no exact dup**.  
7. Do **not** propose FO `y` nudge as the engine fix (lab w7 only).

Full text, upstream source paths, and modern-screenshot links: [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md).

---

## vdrift 1.797 — partial, not a fix

Product `toCanvas` applies fractional **GBCR drawImage dest nudge** (`gbcrFracY ≈ 0.875` → `destY ≈ −0.875` CSS px @ dpr=2). Partial mask only:

| Path | canvasΔ @ dpr=2 Home |
|------|---------------------|
| `product-baseline` (nudge active) | **3.297 px** FO error; product path may read **1.797–2.297** |
| `vdrift-fix-001` | **2.297 px** (−1 px from baseline — matches \|dy\|, not re-raster) |
| FO error if nudge removed | **~2.42 px** class |

**Do not promote** drawImage nudges as structural fixes. Source: [`vdrift-root-cause.json`](../.sandbox-edit/vdrift-root-cause.json).

---

## Artifact index

Probe JSON: repo [`.sandbox-edit/`](../.sandbox-edit/) (local, typically untracked). One-line index: [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md) (mirror: [`__localtests__/.sandbox-edit/RESEARCH-INDEX.md`](.sandbox-edit/RESEARCH-INDEX.md)).

---

## Related docs

| Doc | Role |
|-----|------|
| [`README-fo-fix-lab.md`](README-fo-fix-lab.md) | Lab harness, parity stages |
| [`README-fo-svg-sandbox.md`](README-fo-svg-sandbox.md) | IDE edit loop, patch pitfalls |
| [`.sandbox-edit/raster-fork-analysis.md`](../.sandbox-edit/raster-fork-analysis.md) | Raster-only fork wave-1 analysis |
| [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md) | Waves 1–5, forks, honest NOT FIXED |
| [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md) | Wave 3 probes, tc-flags-w3, prune, lh fork no-op |
| [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) | P0/P1/P2 prioritized next work |
| [`PROPOSED-FIXES-WAVE2.md`](PROPOSED-FIXES-WAVE2.md) | Wave-2 flag planning detail |
