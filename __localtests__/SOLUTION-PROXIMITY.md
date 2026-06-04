# FO canvas raster parity — solution proximity

**Updated:** 2026-06-03 (wave-18 headed calibrate — ties w7, no beat)  
**Verdict:** **NOT_FIXED @ 0.06 px** — w7 verified on mini lab Range (**|canvasΔ| = 0.203 px**). **Blackbox cap regresses with w7** (checkout Home **−0.91 → −1.91**). **METRIC_ARTIFACT** on flex nav integer scan; **dual-gate conflict** blocks promotion. Fix waves **paused** — see [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md).

| Doc | Role |
|-----|------|
| [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) | Master reference (problem, plateau, commands) |
| [`.sandbox-edit/fo-paint-origin-autopsy.json`](../.sandbox-edit/fo-paint-origin-autopsy.json) | Headed autopsy: live / SVG / bitmap rows, w7 vs baseline |
| [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) | Ranked gaps — metric reconcile vs Chromium filing vs fix-wave pause |
| [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) | Round 8 — w7 ceiling, blackbox w7, matrix ingest, row dump |

---

## Paint-origin autopsy (2026-06-02)

Headed probe: `node __localtests__/fo-paint-origin-autopsy.mjs --fixture all --dpr 1`

| Stage | Home mini-nav @ dpr=1 | Meaning |
|-------|----------------------:|---------|
| **Live Range top** (border box) | **14.203 px** | Ground truth (subpixel) |
| **SVG inline FO** | **14.195 px** | Capture OK (svgΔ −0.008) |
| **Baseline canvas** (integer ink row) | **17.0 px** (device row 17) | Missing ~2.8 px strut |
| **w7 canvas** (FO y −2.8 meta) | **14.0 px** (device row 14) | Strut restored; row Δ baseline→w7 = **3 px** |
| **w7 canvasΔ** (integer scan) | **−0.203 px** | = **−Range subpixel** (0.203) |
| **w7 canvasΔ** (fractional-threshold) | **−1.091 px** | Worse — AA gradual-ramp |

**Typography no-flex** (21.6 px line box, Range subpx=0): w7 integer **canvasΔ 0.000** ✓ · baseline **3.000 px**.

**Conclusion:** ~**2.8 px** half-leading `(lh−fs)/2` enters at **FO bitmap paint origin** (baseline canvasΔ ≈ 2.797). w7 `fo-y-half-leading-meta` shifts FO **y −2.8 px** and moves first-ink row **17→14**. Residual **0.203 px** on flex mini-nav equals **Range top fractional part** vs **integer device-row scan** — not a missing strut formula. w9 `fo-y-strut-range-no-gbcr` (FO y −2.597) regresses to **+0.797 px**.

---

## Stop fix churn (round 8, 2026-06-02)

**Pause `tc-fix-w*` recipe waves** until metric policy is resolved.

| Check | Result |
|-------|--------|
| Active matrix (56 recipes) | **0 pass** @ 0.06 px; best **\|−0.203\|** (w7) |
| w7 on mini lab Range | **−0.203 px** — integer scan vs Range subpixel |
| w7 on checkout blackbox cap | **−1.91 px** — **regresses** from **−0.91** |
| Snapdom vs Chromium @ w7 | **0 px** — not decode-layer |
| w15/w16 matrix JSON | **Absent** — no new signal |

**Next work:** [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) ranks **metric reconciliation** (#1) and **checkout vs mini w7 shift** (#2) above new FO-y recipes or wave-20 fixes.

Probe: `npm run debug:fo-research-round-8-probe` → [`.sandbox-edit/research-round-8.json`](../.sandbox-edit/research-round-8.json)

### Wave-19 confirm (2026-06-02)

Headed `npm run debug:tc-fix-w19-matrix-calibrate` → [`.sandbox-edit/tc-fix-w19-matrix.json`](../.sandbox-edit/tc-fix-w19-matrix.json) · **STOP_CHURN**

| w19 recipe (Home+Products) | worst \|canvasΔ\| | Note |
|-----------------------------|-------------------:|------|
| FO y **−(½lh−subpx)** | **0.797** | Overshoot — same as w13/w17 |
| w7 integer baseline | **0.203** | Reference |
| leaf / combo subpx | **0.203** | Tie w7 — no integer gate pass |
| w7 + **fractional-com** scan | **1.613** | Metric-only — worse |
| w7 + **fractional-threshold** | **1.123** | Metric-only — worse |

**Recommend STOP** on w7 residual recipe churn. See [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) § Wave-19 STOP.

---

## 1. Problem

Checkout / mini **flex + text-leaf** captures show **BITMAP_ONLY** drift:

| Leg | Home mini nav @ dpr=1 | Meaning |
|-----|----------------------:|---------|
| **Live** painted `Range` top in border | ~**14.203 px** | Ground truth |
| **SVG** (serialized FO / inline measure) | ~**14.195 px** | Capture OK |
| **Canvas** (decode + `drawImage`) | ~**17.0 px** baseline · **14.0 px** w7 | FO→bitmap gap / w7 fix |
| **\|canvasΔ\|** baseline | **+2.797 px** | Plateau |
| **\|canvasΔ\|** w7 | **0.203 px** | Fails gate (0.06) by 0.143 |
| **\|svgΔ\|** live↔svg | **−0.008 px** | Serialization ≈ live |

**BITMAP_ONLY:** same SVG bytes paint like live when measured inline; after `Image.decode()` → canvas they do not (baseline). w7 closes svg↔canvas to **−0.195 px**.

---

## 2. Pass gate

| Metric | Threshold | Home @ dpr=1 (w7) | Products @ dpr=1 (w7) | Pass? |
|--------|-----------|------------------:|----------------------:|:-----:|
| **\|canvasΔ\|** integer scan | ≤ **0.06 px** | **0.203 px** | **0.203 px** | ❌ |
| **\|svgΔ\|** | ≤ **0.15 px** | **0.008 px** | **0.008 px** | ✓ |

**Best structural lab recipe:** `tc-fix-w7-rfork-fo-y-half-leading-meta` — not promotable on integer gate alone. Pinned in `FO_FIX_FORCE_ACTIVE_IDS` (lab dropdown); otherwise archived by merged index-half.

**Blackbox** (`npm run test:blackbox`) uses structure-band ink — not numerically equal to lab +2.797; see [WHY-DRIFT-VARIES.md](../.sandbox-edit/WHY-DRIFT-VARIES.md).

---

## 3. How close we are

| Milestone | \|canvasΔ\| @ dpr=1 | Distance to 0.06 px gate | Promotable? |
|-----------|-------------------:|-------------------------:|:------------|
| **Baseline** (`product-baseline`) | **2.797** | **~2.74 px** | — |
| **w7 FO y −½(lh−fs)** | **0.203** | **0.143 px** | **Lab only** — metric residual |
| **Typography no-flex w7** | **0.000** | **0 px** | Validates structural fix |
| **w9 Range−subpixel FO y** | **0.797** | regress | No |
| **SVG leg** | **0.008** | **0 px** | Stage solved |
| **Parity stage** | **`raster`** | — | Root cause identified |

**Overall: ~85–90%** of FO strut class explained and fixable structurally; remaining flex-stretch gap is **subpixel metric**, not ~2.8 px paint bug.

---

## Upstream path (Chromium)

| Step | Action |
|------|--------|
| 1 | File bug from [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) — hand-built FO repro + three-way ink @ dpr 1 |
| 2 | Attach `npm run debug:fo-chromium-class-probe` JSON — proves snapdom + modern-screenshot match **2.797 px** (class-wide) |
| 3 | Until Blink fix: lab-only w7 `fo-y-half-leading-meta` — **not** product default; integer gate still **0.203 px** on stretch nav |
| 4 | Do not promote drawImage nudges (vdrift **1.797**) or text bypass as structural parity |

**No exact open Chromium dup** (2026-06-02): related FO geometry/taint/mask issues only — see draft § Related issues.

Probe: `node __localtests__/fo-chromium-class-probe.mjs` → `.sandbox-edit/chromium-fo-class-probe.json`

**Round 5 (2026-06-02):** Same serialized SVG — snapdom lab `toCanvas` vs chromium-only raster → **0 px** canvasΔ difference (`research-round-5-decode-layer.json`). Confirms filing evidence: **not** snapdom decode wrapper. Wave-12 spot (not full matrix): **w7 0.203 px** still best; **`tc-fix-w12-rfork-viewbox-y-half-leading` → 5.797 px** regression.

Probe: `node __localtests__/fo-research-round-5-probe.mjs` → `.sandbox-edit/research-round-5-*.json` · doc: [`RESEARCH-ROUND-5.md`](RESEARCH-ROUND-5.md)

---

## Wave-18 (2026-06-03, headed batch)

Artifact: [`.sandbox-edit/tc-fix-w18-matrix.json`](../.sandbox-edit/tc-fix-w18-matrix.json) · `npm run debug:tc-fix-w18-matrix-calibrate`

| Recipe | worst \|canvasΔ\| | Note |
|--------|------------------:|------|
| w7 height unset + overflow, leaf `top`, split decode-only, crispEdges | **0.203** | tie w7 |
| FO y / leaf `top` −(½lh−subpx) | **0.797** | regress (same as w13/w19 FO-y) |
| `displayInkQuarterRound` | **0.203** gate / **−0.25** display | not for promotion |

Split decode audit (`tc-fix-w18-rfork-split-decode-only-w7`): `probeSvgUnchangedForMeasure: true`, `doubleApplySuspect: false` — fork applies on decode URL only.

## 4–8. (Prior sections unchanged in substance)

See git history for full matrix rollup. Key updates:

- **Fractional ink scan** added to `fo-fix-lab-runner.js` (`scanCanvasInkTopFromImageData`, `measureCanvasInkForElementDualScan`) — lab only; does **not** close w7 gap (AA ramp makes fractional-threshold worse).
- **Do not promote** w9 combined FO-y + subpixel without headed proof on integer scan.

---

## Validation

| Command | Result |
|---------|--------|
| `npm run compile` | ✓ |
| `node __localtests__/fo-paint-origin-autopsy.mjs --fixture all --dpr 1` | w7 −0.203 · no-flex 0.000 · verdict METRIC_ARTIFACT |
| `node __localtests__/fo-fix-lab.mjs --calibrate --ids 'tc-fix-w7-*'` | w7 best structural; gate 0.203 |
| `node __localtests__/fo-fix-lab.mjs --calibrate --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w19-*' --open-browser` | w7 **−0.203**; w19 FO-y **+0.797**; w19 leaf/combo **−0.203** |
| `npm run test:fo-three-way` | baseline BITMAP_ONLY ✓ |
| `npm run debug:chromium-fo-only` | **2.797 px** without snapdom ✓ |
| `npm run test:fo-w7-ui-path` | UI + matrix URL **−0.203** ✓ |
| `npm run debug:tc-fix-w15-matrix-calibrate` | w15 batch **0.203** (ties w7); draw/subpixel forks do not move integer ink row |
| `npm run debug:tc-fix-w18-matrix-calibrate` | w18 **0.203** tie w7; FO-y−subpx **0.797**; split decode no double-apply |

**Wave-15 calibrate (2026-06-02):** Best **|canvasΔ| = 0.203 px** on Home+Products @ dpr=1 — `strutRangeSubpixelDrawDy`, FO y ±subpixel combos, and leaf padding all **tie w7**; `tc-fix-w15-w7-y-meta-ink-frac-draw` **13.797 px** regression. Artifact: `.sandbox-edit/tc-fix-w15-matrix.json`.

**Next (gate still open):** product opt-in `experimentalRasterSvgPatch: 'fo-y-half-leading-meta'` only; [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md); `npm run test:blackbox` / `npm run test:blackbox:w7` — do not weaken `bounce-check.mjs`.

Headed Chrome only — no `HEADLESS=1` for ink gates.
