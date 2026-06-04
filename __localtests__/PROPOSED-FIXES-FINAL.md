# Proposed FO raster fixes — consolidated index

**Verdict: NOT FIXED @ 0.06 px integer gate.** Mini Home @ dpr=1: **|canvasΔ| ≈ 2.797 px** baseline · **w7 `fo-y-half-leading-meta` → 0.203 px** (METRIC_ARTIFACT). **|svgΔ| ≈ 0.008 px** (BITMAP_ONLY). No promotable recipe closes the integer ink gate with FO text intact.

This page indexes all fix-planning docs. For problem statement and ruled-out families, start with [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md).

---

## Wave-19 STOP (2026-06-02) — w7 residual closed as metric artifact

**Headed calibrate:** `npm run debug:tc-fix-w19-matrix-calibrate` → [`.sandbox-edit/tc-fix-w19-matrix.json`](../.sandbox-edit/tc-fix-w19-matrix.json)

| Recipe (integer scan) | Home + Products worst \|canvasΔ\| | vs w7 0.203 |
|----------------------|----------------------------------:|:-----------:|
| `tc-fix-w19-rfork-y-half-minus-range-subpx` (FO y −(½lh−subpx)) | **0.797** | regress |
| `tc-fix-w19-rfork-leaf-half-minus-range-subpx` | **0.203** | tie |
| `tc-fix-w19-rfork-combo-w7-leaf-subpx` | **0.203** | tie |
| `tc-fix-w19-w7-integer-baseline` | **0.203** | tie |
| `tc-fix-w19-w7-fractional-com-scan` (metric only) | **1.613** | worse |
| `tc-fix-w19-w7-fractional-threshold-scan` (metric only) | **1.123** | worse |

**Conclusion:** w7 **−0.203 px** = live Range **14.203** vs integer canvas row **14** — not a missing strut formula. Subtracting Range subpixel from FO y **overshoots** (+0.797). Fractional ink scan does **not** pass 0.06 on w7 paint.

**STOP churn on w7 residual.** Next product steps (not more decode matrix):

1. **Promote w7 lab flag** — `experimentalRasterSvgPatch: 'fo-y-half-leading-meta'` (default off; closes ~2.8 px strut class).
2. **File Chromium bug** — [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) + class probe JSON.
3. **Blackbox** — `npm run test:blackbox` (structure-band ink; do not retune gate to 0.203 lab metric).

Do **not** add lh-pin / viewBox / drawImage nudge waves for the 0.203 gap.

---

## Wave documents

| Wave | Doc | Status |
|------|-----|--------|
| **1–5 + BLH** | [`PROPOSED-FIXES.md`](PROPOSED-FIXES.md) | All wired/default-off or lab-only; **tie 2.797** |
| **2 (flags detail)** | [`PROPOSED-FIXES-WAVE2.md`](PROPOSED-FIXES-WAVE2.md) | Six orthogonal flags — **NOT FIXED** |
| **3 (investigation)** | [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md) | **2026-06-02** — structural probes, **tc-flags-w3**, lh sweeps, prune **48→18** — **NOT FIXED** |

---

## Wave 3 headline (see [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md))

Wave 3 **confirmed** BITMAP_ONLY and falsified flex-only coupling. **tc-blh-w1** / raster `pin-lh-leaf` tie **2.797** (lh already correct in SVG; fork **0 px** diff). **tc-flags-w3** (8 recipes) expected to tie same plateau.

**Prioritized next work (honest):**

| Priority | Direction |
|:--------:|-----------|
| **P0** | FO paint-origin autopsy at decode on **typography-no-flex** (text strut row profile) |
| **P1** | **FO height = line box** + **strut translate** on text leaves (not stretch 48px FO) |
| **P2** | leading-trim / text-box-edge on text leaves at **capture** (move svg + canvas together) |
| **P3** | Metric reconciliation lab **+2.797** vs blackbox **~−0.91** |
| **Stop** | decode/backing/viewBox matrix churn; lh-pin no-op reruns; vdrift as “fix”; **w7 0.203 subpixel residual** (wave-19 STOP) |

---

## Text / lh research

[`README-TEXT-BASELINE-LINEHEIGHT.md`](README-TEXT-BASELINE-LINEHEIGHT.md) — half-leading, flex vs leaf, per-landmark drift, experimental flags.

---

## Artifacts

Probe JSON: [`.sandbox-edit/`](../.sandbox-edit/) · [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md)

Pivot (stop matrix churn): [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md)
