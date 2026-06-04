# FO raster research program

**Status:** Active · **NOT FIXED @ 0.06 px gate** · Research-only (no new fix-recipe waves)  
**Last updated:** 2026-06-03  
**Canonical artifacts:** [`.sandbox-edit/`](../.sandbox-edit/) · index: [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md)

---

## Problem statement

**BITMAP_ONLY** class: serialized FO markup matches live DOM (|svgΔ| ≈ **0.008 px**), but FO→bitmap decode does not (|canvasΔ| ≈ **2.797 px** @ dpr=1 on flex mini-nav). Root cause: FO bitmap paint origin omits ~**½(lh−fs)** half-leading strut. Best lab fork w7 → **0.203 px** (Range subpixel vs integer scan — not promotable).

---

## Timeline — rounds 1–8

| Round | Focus | Key artifacts | Verdict |
|-------|--------|---------------|---------|
| **1** | Plateau discovery, 120+ recipes, lh pin no-op | `tc-lh-wave1-matrix.json`, `research-win-latest.json` | All tie **2.797** or worse |
| **2** | Raster forks, meta/linebox, strut-translate | `raster-fork-w2.json`, `ink-meta-align.json` | No fork beats baseline |
| **3** | Flex/lh decouple, text-only matrix | `flex-align-lh-probe.json`, `PROPOSED-FIXES-WAVE3.md` | Stretch **2.797**; flex-start ~**3** |
| **4** | Class-wide bug, modern-screenshot, CSS refutations | `research-round-4-*.json` | MS = snapdom = hand-built **2.797** |
| **5** | Decode pipeline audit, timing/backend/CIB | `research-round-5-*.json`, `DECODE-PIPELINE.md` | Snapdom decode **0 px** vs chromium-only |
| **6** | Glyph vs 48px, letter drift, cross-browser | `research-round-6.json`, `fo-glyph-bounds-probe.mjs` | Not Blink-only; desc **5.797** |
| **7** | Nav height, metric reconcile, w7 residual | `research-round-7.json`, `RESEARCH-ROUND-7.md` | w7 **0.203** = Range subpx |
| **8** | **Program expansion — research probes only** | `fo-*-probe.json` (5 new + extended cross-browser) | See § Round 8 probes |

### Round 8 probes (2026-06-03 — completed headed)

| Probe | Command | Output |
|-------|---------|--------|
| Round 8 master | `npm run debug:fo-research-round-8-probe` | `research-round-8*.json` |
| Bitmap row dump | (section in round-8 probe) | `research-round-8-fo-row-dump.json` |
| DPR bridge | `npm run debug:fo-root-cause-dpr-sweep` | `root-cause-dpr{1,2}.json`, `research-round-8-dpr-bridge.json` |
| Metric bridge | (round-8 + paint autopsy) | `research-round-8-lab-blackbox-cap.json`, `fo-paint-origin-autopsy.json` |
| Chromium matrix | `npm run debug:chromium-fo-round8` | `research-round-8-chromium-matrix.json` |
| Chromium-only pages | `npm run debug:chromium-fo-only` | `chromium-fo-only-probe.json` |
| Three-way guard | `npm run test:fo-three-way` | `fo-three-way-consistency.json` |

Optional (long-running): `debug:fo-bitmap-row-profile-probe`, `debug:fo-dpr-sweep-probe`, `debug:fo-blackbox-metric-bridge-probe`.

**Hard rule:** Round 8 adds **no new fix-recipe waves**. Probes inform evidence ledger and gap ranking only.

---

## Evidence ledger

### Confirmed

| ID | Claim | Source |
|----|-------|--------|
| C1 | FO bitmap omits ~½(lh−fs) strut @ dpr=1 | `root-cause-dpr1.json`, round 4/5/7 |
| C2 | **BITMAP_ONLY** — svg≈live, canvas≈live+2.8 | `chromium-fo-class-probe.json` |
| C3 | Hand-built = snapdom = modern-screenshot canvasΔ | round 4, round 5 decode-layer |
| C4 | Snapdom decode layer adds **0 px** vs chromium-only same SVG | `research-round-5-decode-layer.json` |
| C5 | lh re-pin / serialized lh correct — **0 px** bitmap diff | `research-win-latest.json`, lh-debug-v3 |
| C6 | w7 **0.203** = integer ink row vs Range **14.203** subpx | `research-round-7-w7-residual-scan.json` |
| C7 | Home = Products painted canvasΔ (landmark-invariant FO) | round 7 landmark parity |
| C8 | Cross-engine FO strut gap (Chrome/WebKit/Firefox) | round 6, cross-browser probes |
| C9 | `(lh−fs)/2` best predictor of canvasΔ magnitude | strut-range, font-metrics probes |
| C10 | FO y+1px → canvasΔ +1px (paint origin causal) | round 4 fo-subpixel |

### Refuted (as root cause)

| ID | Hypothesis | Source |
|----|------------|--------|
| R1 | Snapdom serialization/layout wrong | svgΔ ≈ 0; hand-built matches |
| R2 | Decode timing (fonts.ready, rAF, interval) | round 5 decode-timing **0 px** spread |
| R3 | Canvas2d backend flags | round 5 canvas-backend **0 px** spread |
| R4 | FO subpixel floor/ceil attrs alone | round 4/5 **0 px** spread |
| R5 | leading-trim / text-box-trim fixes bitmap | trim-dpr-v2, round 4 strut-css |
| R6 | 48px stretch layout strut (vs 21.6 lh) | round 6/7 nav height **0 px** spread |
| R7 | Per-landmark FO bug (Home vs Products) | round 7 **0 px** spread |
| R8 | vdrift GBCR nudge as text fix | blit-only; disable → **2.797** class |
| R9 | createImageBitmap path (vs Image.decode) | CIB fails on SVG blob; same class on img |
| R10 | Chromium-only (Blink exclusive) | WebKit **3.42**, Firefox **3.5** @ dpr=1 |

### Open

| ID | Question | Next probe / action |
|----|----------|---------------------|
| O1 | Exact Blink paint bridge line omitting strut | Upstream source read + crbug filing |
| O2 | Range subpixel **0.203** vs 0.06 gate closure | Fractional ink scan; metric bridge |
| O3 | Letter-class spread (cap **2.797** vs desc **5.797**) | Row profile + glyph bounds |
| O4 | dpr fractional slack (+0.5 @ dpr 1→2) | DPR sweep probe |
| O5 | Blackbox cap-model vs Range reconcile **4.523 px** | Blackbox metric bridge |
| O6 | WebKit/Firefox magnitude variance mechanism | Cross-browser extended @ multiple dpr |
| O7 | FO clip vs preview h/p cutoff | Glyph-not-clipped probe |
| O8 | Promotable structural fix without magic FO y | Blocked pending upstream or new mechanism |

---

## Decision tree: fix in snapdom vs file Chromium

```
START: |canvasΔ| > 0.06 on headed FO raster (no text bypass)
│
├─ svgΔ ≈ 0 AND hand-built FO same canvasΔ?
│   ├─ YES → NOT a snapdom capture bug
│   │         ├─ snapdom decode vs chromium-only same SVG → 0 px?
│   │         │   ├─ YES → FILE CHROMIUM (Blink FO bitmap strut)
│   │         │   └─ NO  → Fix snapdom decode/toCanvas (lab-proven first)
│   │         └─ w7 FO-y nudge closes to ~0.2 px?
│   │             ├─ YES → Documents mechanism; lab-only until upstream fix
│   │             └─ NO  → Research: wrong strut model; more probes
│   └─ NO  → Fix snapdom capture/serialization (src/ after lab proof)
│
├─ Fix requires hard-coded px from bounce-check row?
│   └─ YES → STOP (never-overfit); report gap
│
├─ Fix is global structural CSS on foreignObject* (foNormalize class)?
│   └─ YES → Lab matrix → promote src/ if general + passes blackbox
│
└─ Text bypass (fillText, SVG text)?
    └─ User must explicitly opt in — never default promotion path
```

**Current position (2026-06-02):** C2 + C3 + C4 true → **file Chromium** primary; snapdom may apply **lab-only** w7 for diagnostics; no promotable product fix.

---

## Literature & upstream

- Bug draft: [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md) — 10+ related crbugs + LayoutNG strut concept
- Gaps (ranked): [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md)
- Proximity: [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md)

---

## Index docs (keep in sync)

| Doc | Role |
|-----|------|
| This file | Program master — timeline, ledger, decision tree |
| [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) | Technical deep-dive |
| [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) | Ranked open questions |
| [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md) | JSON artifact index |
| [`GEMINI.md`](../GEMINI.md) · [`.cursor/rules/fo-raster-research.mdc`](../.cursor/rules/fo-raster-research.mdc) | Agent rules |

---

## Commands (headed)

```bash
npm run compile

# Round 8 probes
node __localtests__/fo-bitmap-row-profile-probe.mjs
node __localtests__/fo-dpr-sweep-probe.mjs
node __localtests__/fo-font-metrics-probe.mjs
node __localtests__/fo-snapdom-vs-chromium-delta-probe.mjs
node __localtests__/fo-blackbox-metric-bridge-probe.mjs
node __localtests__/fo-cross-browser-extended-probe.mjs

# Prior rounds
node __localtests__/fo-research-round-7-probe.mjs
npm run debug:fo-chromium-class-probe
npm run test:blackbox
```
