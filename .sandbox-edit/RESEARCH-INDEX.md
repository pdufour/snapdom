# FO raster research — artifact index

**Generated:** 2026-06-02 · **Canonical dir:** repo `.sandbox-edit/` (local probe output; typically untracked).

**Tracked docs:**

| Doc | Role |
|-----|------|
| [`__localtests__/FO-RASTER-RESEARCH-PROGRAM.md`](../__localtests__/FO-RASTER-RESEARCH-PROGRAM.md) | Program master: rounds 1–8, evidence ledger, decision tree |
| [`__localtests__/RESEARCH-GAPS.md`](../__localtests__/RESEARCH-GAPS.md) | Ranked open gaps v2 |
| [`__localtests__/README-FO-RASTER-RESEARCH.md`](../__localtests__/README-FO-RASTER-RESEARCH.md) | Master: BITMAP_ONLY, **2.797** plateau, ruled out, M1–M6 |
| [`__localtests__/README-TEXT-BASELINE-LINEHEIGHT.md`](../__localtests__/README-TEXT-BASELINE-LINEHEIGHT.md) | LH/baseline/strut, flex vs leaf, NOT FIXED |
| [`WHY-DRIFT-VARIES.md`](WHY-DRIFT-VARIES.md) | Metric / landmark / dpr variance vs constant BITMAP_ONLY class |
| [`RESEARCH-PIVOT.md`](RESEARCH-PIVOT.md) | Stop matrix churn; wave-3 probes; N1–N5 |
| [`__localtests__/PROPOSED-FIXES.md`](../__localtests__/PROPOSED-FIXES.md) | Waves 1–5 flags/forks — honest NOT FIXED |
| [`__localtests__/PROPOSED-FIXES-WAVE3.md`](../__localtests__/PROPOSED-FIXES-WAVE3.md) | Wave 3 probes, tc-flags-w3, prune, lh no-op |
| [`__localtests__/DECODE-PIPELINE.md`](../__localtests__/DECODE-PIPELINE.md) | Round 5: SVG→decode→drawImage audit, meta flow, half-leading entry points |
| [`__localtests__/RESEARCH-ROUND-6.md`](../__localtests__/RESEARCH-ROUND-6.md) | Round 6: glyph vs 48px, letter drift, wave-13, cross-browser FO |
| [`__localtests__/RESEARCH-ROUND-8.md`](../__localtests__/RESEARCH-ROUND-8.md) | Round 8: w7 ceiling, blackbox w7 regresses, matrix ingest, row dump, fix waves paused |
| [`RESEARCH-ROUND-7.md`](RESEARCH-ROUND-7.md) | Round 7: nav height invariant, wave-14 absent, decode 0px, Home=Products, metric reconcile, w7 0.203 |
| [`FO-RASTER-RESEARCH-PROGRAM.md`](FO-RASTER-RESEARCH-PROGRAM.md) | Program: rounds, standing probes, promotion bar, pause list |
| [`RESEARCH-METRICS.md`](RESEARCH-METRICS.md) | Range vs cap vs blackbox vs integer scan; dpr; w7 residual |
| [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) | Open P0–P2 actions after round 8 |
| [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) | Round 8: bitmap row, metric bridge, blackbox w7, matrix ingest |
| [`CONTINUE.md`](CONTINUE.md) | Next-session bullets |

---

## Markdown

| File | One-line summary |
|------|------------------|
| `RESEARCH-PIVOT.md` | Stop matrix/flags churn; 120-row plateau **2.797**; next experiments N1–N5. |
| `WHY-DRIFT-VARIES.md` | Why +2.797 / −1.727 / −0.91 coexist; per-landmark painted vs cap-model; dpr & blit. |
| `raster-fork-analysis.md` | Wave-1 raster-only fork — no fork beats **2.797**; flex-center catastrophic. |
| `RESEARCH-INDEX.md` | This file — index of sandbox artifacts. |
| `RESEARCH-ROUND-7.md` | Round 7 master — six angles; w7 0.203 = Range subpixel; wave-14 absent. |
| `research-round-8.json` | Round 8 master — w7 ceiling, blackbox w7, active matrix 56/0 pass, FO row dump. |

---

## JSON — verdict / three-way probes

| File | One-line summary |
|------|------------------|
| `root-cause-dpr1.json` | **Root cause probe** @ dpr=1 — CONFIRMED half-leading strut in FO bitmap paint; canvasΔ **2.797** ≈ (lh−fs)/2. |
| `root-cause-dpr2.json` | Same probe @ dpr=2 — canvasΔ **3.297**; +0.5 px/dpr slack. |
| `research-win-root-cause.json` | Alias / earlier root-cause run (same probe family). |
| `research-win-2026-06-02.json` | **Research-win probe** — lh no-op proof, CSS reachability, ladder, hand-built static **2.797**, next `tc-research-w1-*` recipes. |
| `research-win-latest.json` | Symlink/copy of latest research-win JSON. |
| `checkout-landmark-scan.json` | Checkout Home/Products **2.797** @ dpr=1 — `constant_offset`, stage **raster**. |
| `drift-per-landmark.json` | Per-landmark lh/strut + three-way; nav painted **2.797** constant; labels **2.5**. |
| `experimental-flags-matrix.json` | Product w1 capture+raster flags @ dpr=1 — all tie **2.797**. |
| `fix-retry-summary.json` | Pin lh + flex center + leading-trim retry — NO improvement vs baseline. |
| `fix-w5-flags.json` | Wave-5 flag 16-combo matrix — promotion none, plateau **2.797**. |
| `fix-w6-summary.json` | Wave-6 batch c — vdrift **1.797** best (blit); w6 recipes tie **2.797**. |
| `fix-wave-latest.json` | ink-meta partial overshoot; SVG fork isolation; capture-meta alone no-op. |
| `ink-meta-align.json` | Capture+raster ink align — canvasΔ **−2.203** overshoot; partial NOT FIXED. |
| `line-box-strut-math.json` | **(lh−fs)/2 = 2.8** closest to **3.297** offset (0.497 residual); BITMAP_ONLY note. |
| `line-height-decouple.json` | FO lh inject moves canvas **~1 px**; svg flat at 21.6px — raster knob only. |
| `minimal-repro.json` | Hand-built FO (**572 B**) BITMAP_ONLY without snapdom; `static-inline-flex` smallest. |
| `path-ab-same-svg.json` | Same SVG bytes: inline vs decode+draw Δ **+3.305 px** — bitmap stage only. |
| `raster-fork-pixel-diff.json` | lh-pin **0/100k** pixels changed; flex-center catastrophic. |
| `raster-fork-w2.json` | Raster fork w2 @ dpr=1 — tie **2.797** except lh-normal **3.797**. |
| `raster-fork-wave1.json` | Raster fork w1 @ dpr=1 — `NO_FORK_BEATS_BASELINE`. |
| `raster-vs-svg-ink-probe.json` | **BITMAP_ONLY** @ dpr=2: svgΔ **−0.008**, canvasΔ **+3.297** mini Home. |
| `lh-fix-results.json` | tc-blh-w1 dual pin + flags @ dpr=1 — all tie **2.797** except baseline-fix **−11.203**. |
| `line-height-sweep-v2.json` | v2 lh sweep (normal,1,1em,1.35,21.6px,inherit) @ dpr=1 — **2.797** at 1.35 matches ½lh. |
| `line-height-sweep-v2-dpr2.json` | Same sweep @ dpr=2 — **3.297** at 1.35 (+0.5 blit layer). |
| `parent-leaf-lh-v2.json` | Parent vs leaf lh — identical canvasΔ when computed lh matches. |
| `flex-lh-decouple-v2.json` | align-items stretch/center/flex-start/baseline — canvasΔ **2.797–3.0**. |
| `flex-align-lh-probe.json` | stretch → **2.797**; flex-start/baseline → **~3** @ dpr=1 (wave 3). |
| `parent-leaf-lh-probe.json` | Parent vs leaf lh **1.35** — same **2.797** when leaf **21.6px**. |
| `line-height-sweep.json` | lh sweep @ dpr=1 — **2.797** at 1.35/21.6px; **3.5** wrong-lh plateau. |
| `line-height-sweep-dpr2.json` | lh sweep @ dpr=2 — **3.297** at 1.35; +0.5 vs dpr=1. |
| `flex-lh-decouple.json` | Parent 48px stretch; leaf lh only — **2.797** iff computed lh **21.6**. |
| `tc-lh-wave1-matrix.json` | **38** tc-blh-w1 + tc-text-w1 recipes @ dpr=1 — all tie **2.797** or worse. |
| `text-baseline-lh-matrix.json` | Multi-variant lh matrix on text leaf. |
| `drift-vs-half-leading-by-type.json` | canvasΔ vs half-leading by element kind. |
| `strut-math-v2.json` | Home/Products — computed ½lh **0.003** from canvasΔ; layout ½lh ruled out. |
| `fo-lh-serialized-v2.json` | FO `<a>` inline style lacks line-height; svg flat, canvas **2.797**. |
| `trim-dpr-v2.json` / `trim-dpr-v2-dpr2.json` | leading-trim / text-box-trim — no canvas change. |
| `font-metrics-v2.json` | measureText ascent vs ink — ~2.93 px, canvasΔ still **2.797**. |
| `text-baseline-flags.json` | Text baseline / lh-normal flags — baseline **1.797** with GBCR; flags → **2.797**. |
| `text-baseline-lh-correlation.json` | Truncation weak (r≈0.008); halfLeadingLhFs r≈0.891; synthesis HALF_LEADING_WEAK. |
| `text-baseline-lh-probe.json` | Live vs FO vs canvas lh/baseline decomposition for Home text leaf. |
| `text-leaf-probe.json` | Anchor GBCR vs text-leaf Range; live/svg/canvas roles on Home link. |
| `text-leaf-summary.json` | Text-leaf recipe matrix (w1 display/trim/lh) — all tie **2.797**. |
| `text-vs-block-probe.json` | **TEXT_ONLY_RASTER**: text canvas≠svg; block svg stable. |
| `lh-debug-v3.json` | v3 lh debug: class-rule lh, fork no-ops, gradual-ramp ink profile, timing stable. |
| `fo-serialized-lh-audit.json` | Serialized inline vs class lh + parent chain + lh inject variants. |
| `tocanvas-only-flags.json` | Product toCanvas @ dpr=1 — baseline **1.797**; disable gbcr → **2.797**. |
| `tocanvas-svg-fork.json` | `experimentalRasterSvgPatch` variants — svg flat; flex-center **−14 px**. |
| `typography-no-flex.json` | No-flex leaf canvasΔ **+3.5** — **GENERIC_FO_RASTER_BUG**. |
| `vdrift-root-cause.json` | vDrift destY −0.875 — blit only; true FO error ~**2.42** @ dpr=2 if nudge off. |
| `research-round-4-full.json` | Round 4 master — 10 new angles @ dpr=1; MS vs snapdom both **2.797**; synthesis. |
| `research-round-4-decode-context.json` | font-display / iframe decode — **0 px** spread on readable legs. |
| `research-round-4-text-metric.json` | Text node vs element Range — identical; svg ≈ live. |
| `research-round-4-strut-css.json` | ::first-line / line-box-contain / initial-letter — **0 px** spread. |
| `research-round-4-fo-subpixel.json` | FO floor/ceil invariant; y+1 → **+1 px** canvasΔ. |
| `research-round-4-modern-screenshot.json` | snapdom **2.797** vs modern-screenshot **2.797** — class-wide bug. |
| `research-round-4-minimal-repro.json` | DOM ladder — bare-span ~**3 px**; stretch nav **2.797**. |
| `research-round-4-synthesis.json` | Winning hypothesis + top 3 next fixes. |
| `research-round-5-full.json` | Round 5 master — decode timing, canvas backend, CIB, decode-layer 0 px, w12 spot. |
| `research-round-5-decode-timing.json` | fonts.ready / rAF / drawImageInterval — **0 px** spread; all **2.797**. |
| `research-round-5-canvas-backend.json` | willReadFrequently / desynchronized / srgb — **0 px** spread. |
| `research-round-5-fo-namespace.json` | Hand-built FO xmlns/requiredExtensions — **0 px** (chromium-only). |
| `research-round-5-fo-subpixel.json` | Fractional FO w×h vs integer — **0 px** spread. |
| `research-round-5-img-vs-bitmap.json` | CIB fails on SVG blob (snapdom + hand-built); img **2.797**. |
| `research-round-5-decode-layer.json` | Snapdom lab toCanvas vs chromium-only same SVG — **0 px** delta. |
| `research-round-5-wave12-spot.json` | w12 spot: w7 **0.203**; viewBox-y **5.797**; no gate pass. |
| `research-round-5-synthesis.json` | Round 5 top findings + next fixes. |
| `research-round-6.json` | Round 6 master — glyph vs 48px, letter drift, wave-13, cross-browser. |
| `research-round-6-glyph-vs48.json` | Stretch 48px vs lh 21.6; full-height scan; canvas bottom −4px vs Range. |
| `research-round-6-letter-drift.json` | Letter classes: caps 2.797, asc 1.797, desc 5.797 — 4px spread. |
| `research-round-6-wave13-spot.json` | Wave-13 spot — best w7 0.203; viewBox w13 5.797. |
| `research-round-6-chromium-fo-pages.json` | chromium-fo-only pages + glyphMetrics/canvasInkExtents. |
| `research-round-6-cross-browser.json` | Chrome/WebKit/Firefox FO canvasΔ — not Blink-only. |
| `research-round-6-synthesis.json` | Round 6 top findings + next fix direction. |
| `decode-pipeline-audit.json` | Decode pipeline — natural vs dest vs FO attrs; baseline vs w7. |
| `research-win-root-cause.json` | `fo-root-cause-probe.mjs` — path A/B, hypotheses, DOM ladder. |
| `research-round-7.json` | Round 7 master @ dpr=1 — nav height 0 spread; decode 0px; w7 0.203 = Range subpx. |
| `research-round-7-nav-height.json` | 48/56/64px stretch — canvasΔ **2.797** invariant; layout strut ruled out. |
| `research-round-7-wave-matrix.json` | wave-14 absent; wave-13 spot — best w7 **0.203**; range-subpx fork **0.797**. |
| `research-round-7-decode-delta.json` | snapdom vs chromium-only same SVG — **0 px** @ baseline + w7. |
| `research-round-7-landmark-parity.json` | Home/Products canvasΔ spread **0** — metric not landmark FO bug. |
| `research-round-7-metric-reconcile.json` | Range **+2.797** vs cap **−1.727** — reconcile **4.523 px**. |
| `research-round-7-w7-residual-scan.json` | w7 **−0.203** = integer row 14 vs Range **14.203** subpixel. |
| `research-round-7-synthesis.json` | Round 7 top findings + next 3 fix hypotheses. |
| `research-round-8-chromium-matrix.json` | Round 8 Chromium-only matrix — lh/align/FO-y variants @ dpr=1. |
| `research-round-8-chromium-matrix-cdp.json` | Round 8 CDP screenshots + box model (LayerTree N/A on Playwright CDP). |
| `fo-bitmap-row-profile-probe.json` | Round 8 — canvas row scan vs Range; baseline vs w7 profile. |
| `fo-dpr-sweep-probe.json` | Round 8 — canvasΔ @ dpr 1–2.5; BITMAP_ONLY class + dpr slack. |
| `fo-font-metrics-probe.json` | Round 8 — measureText ascent/descent vs half-leading predictors. |
| `fo-snapdom-vs-chromium-delta-probe.json` | Round 8 — SVG byte diff; decode Δ snapdom vs hand-built. |
| `fo-blackbox-metric-bridge-probe.json` | Round 8 — checkout Range vs structure-report cap/canvas. |
| `fo-cross-browser-extended-probe.json` | Round 8 — Firefox/WebKit × DPR sweep on hand-built FO. |

---

## JSON — misc / runner

| File | One-line summary |
|------|------------------|
| `run-text-leaf-b.mjs` | Ad-hoc runner for text-leaf probe batch (local). |

---

## Run logs (`_run-*.log`, `*-run*.log`, `fix-*.log`)

Present when probes were run locally; not always in repo. Typical names:

| Pattern | Probe |
|---------|--------|
| `_run-raster-vs-svg.log` | `fo-raster-vs-svg-ink-probe.mjs` |
| `_run-path-ab.log` | `fo-path-ab-probe.mjs` |
| `_run-typography-no-flex.log` | `fo-typography-no-flex.mjs` |
| `_run-line-height-decouple.log` | `line-height-decouple.mjs` |
| `_run-minimal-repro.log` | `fo-minimal-repro.mjs` |
| `_run-vdrift-root-cause.log` | `vdrift-root-cause-probe.mjs` |
| `_run-line-box-strut-math.log` | `line-box-strut-math.mjs` |
| `_run-raster-fork-w2.log` | `fo-raster-fork-wave2-matrix.mjs` |
| `flags-w2-run-*.log` | tc-flags-w2 matrix attempts |
| `tc-only-run-*.log` | toCanvas-only flags probe |
| `fix-w5-c.log` / `fix-w6-c.log` | wave 5/6 headed matrix logs |
| `fix-retry-*.log` | fix-retry probe runs |
| `text-leaf-b.log` | text-leaf matrix run |

---

## Mirror / related (not in repo `.sandbox-edit/`)

Some probes also write under `__localtests__/.sandbox-edit/` (gitignored), e.g. `half-leading-mini-probe.json`, `half-leading-matrix.json` — referenced by [`text-baseline-lh-correlation.json`](text-baseline-lh-correlation.json).

**Authoritative JSON for wave-3 batch:** repo **`.sandbox-edit/`** paths in the table above.
