# FO raster research — Round 8 (2026-06-03)

**Status:** NOT FIXED @ **0.06 px** integer gate · **Pause fix-wave recipe churn**

**Probe:** `npm run debug:fo-research-round-8-probe` → [`.sandbox-edit/research-round-8.json`](research-round-8.json)

**Companion probes (this session):** DPR sweep · paint-origin autopsy · three-way · chromium-only matrix

---

## Executive summary

Round 8 closes the **metric bridge** between lab Range ink (**+2.797 px**), mini cap-model (**−1.727 px**), and checkout blackbox cap (**−0.91 px**), and proves **w7 does not pass blackbox** even though lab Range reaches **−0.203 px**. The **w7 ceiling** is **integer ink row vs Range subpixel (0.203 px)** — confirmed on **both** snapdom lab and **Chromium-only** decode (**0 px** spread). **First-ink device row** shifts **3 rows** baseline→w7, matching **½(lh−fs)** strut correction. **Active matrix (56 rows)** best remains **|canvasΔ| = 0.203** — no promotable row ≤ **0.06 px**.

---

## Angle 1 — FO bitmap row dump (baseline vs w7)

| Quantity | Baseline | w7 |
|----------|----------|-----|
| First-ink device row | **17** | **14** |
| Range top (device px) | 14.203 | 14.203 |
| range − firstInkRow | **−2.797** | **+0.203** |
| Row shift baseline→w7 | — | **3 px** |

**Verdict:** `INTEGER_ROW_LANDS_BELOW_RANGE_SUBPIXEL` — w7 lands integer row **14**; live Range **14.203** → residual **0.203 px**.

Artifact: [`research-round-8-fo-row-dump.json`](research-round-8-fo-row-dump.json)

---

## Angle 2 — w7 ceiling (snapdom vs Chromium-only)

| Path | Baseline canvasΔ | w7 canvasΔ | snapdom − chromium |
|------|-----------------:|-----------:|-------------------:|
| Lab / page probe | +2.797 | **−0.203** | **0 px** |
| Chromium-only raster | +2.797 | **−0.203** | **0 px** |

`matchesRangeSubpixel`: **true** (|−0.203| ≈ Range fraction **0.203**)

**Verdict:** `W7_CEILING_IS_INTEGER_SCAN_NOT_DECODE` — not a snapdom decode artifact.

Artifact: [`research-round-8-w7-ceiling.json`](research-round-8-w7-ceiling.json)

---

## Angle 3 — Lab Range vs cap-model (metric bridge)

Mini Home @ dpr=1, GBCR nudge off:

| Recipe | Lab Range canvasΔ | Lab cap-model canvasΔ | Range−cap live offset |
|--------|------------------:|----------------------:|----------------------:|
| product-baseline | **+2.797** | **−1.727** | **−4.523 px** |
| w7 half-leading meta | **−0.203** | **−4.727** | **−4.523 px** (unchanged) |

**Shift baseline→w7:** Range **−3.0 px** · cap-model **−3.0 px** (parallel)

**Verdict:** `CAP_MODEL_DIVERGES_FROM_RANGE_AT_W7` — w7 fixes **Range** reference; cap-model gate still fails.

Artifact: [`research-round-8-lab-blackbox-cap.json`](research-round-8-lab-blackbox-cap.json)

---

## Angle 4 — Checkout blackbox cap vs w7 (empirical)

Headed `bounce-check` vs `bounce-check-experimental-run.mjs fo-y-half-leading-meta`:

| Landmark | Cap Δ baseline | Cap Δ w7 | Shift |
|----------|---------------:|---------:|------:|
| Home | **−0.91** | **−1.91** | **−1.0** |
| Products | **−0.91** | **−1.91** | **−1.0** |

**Verdict:** `BLACKBOX_CAP_DIVERGES_FROM_LAB_RANGE` — w7 **overshoots** checkout cap gate (more negative), does not pass **0.06 px**.

Artifact: [`research-round-8-blackbox-w7.json`](research-round-8-blackbox-w7.json)

---

## Angle 5 — DPR sweep (root-cause bridge)

| dpr | canvasΔ | svgΔ | ½(lh−fs) residual |
|-----|--------:|-----:|------------------:|
| 1 | **2.797** | −0.008 | **−0.003** |
| 2 | **3.297** | −0.008 | **+0.497** |

**+0.5 px** per dpr step — device/blit slack, not lh×dpr.

Artifact: [`research-round-8-dpr-bridge.json`](research-round-8-dpr-bridge.json) · [`root-cause-dpr1.json`](root-cause-dpr1.json) · [`root-cause-dpr2.json`](root-cause-dpr2.json)

---

## Angle 6 — Chromium-only page matrix

| Page | svgΔ | canvasΔ | Verdict |
|------|-----:|--------:|---------|
| minimal-nav-fo-raster | 0 | **2.797** | BITMAP_ONLY |
| minimal-typography-no-flex | 0 | **3.000** | BITMAP_ONLY |
| minimal-nav-fo-y-nudge | 0 | **2.797** | BITMAP_ONLY |

Artifact: [`chromium-fo-only-probe.json`](chromium-fo-only-probe.json)

---

## Angle 7 — Active matrix ingest (56 rows)

Best: `tc-fix-w7-rfork-fo-y-half-leading-meta` / src-mirror w7 — **|canvasΔ| = 0.203** · **0 pass** @ 0.06 gate.

Artifact: [`research-round-8-active-matrix.json`](research-round-8-active-matrix.json)

---

## Synthesis — what changes next

| Do | Don't |
|----|-------|
| Align **promotion gate** with explicit metric (Range vs cap vs fractional scan) | Add wave-20+ recipes without new mechanism |
| File / pursue **Blink FO paint-origin** with row-dump repro | Promote w7 on blackbox cap numbers alone |
| Headed **checkout Range-metric** experiment if product gate must move | Expect lab **+2.797** ≈ blackbox **−0.91** |

**Recommended next:** `metric-reconcile` — document which live reference blackbox should use before any w7 product flag.

See [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) · [`CONTINUE.md`](CONTINUE.md).
