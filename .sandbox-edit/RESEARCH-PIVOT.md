# Research pivot — stop matrix/flags churn

**Date:** 2026-06-02 (updated wave 3)  
**Scope:** Investigation only. No new recipe matrices.  
**Context:** Experimental src/ flags landed (default off) but plateau persists; wave-3 probes ran headed.

**Sources read:** [`README-FO-RASTER-RESEARCH.md`](../__localtests__/README-FO-RASTER-RESEARCH.md), [`WHY-DRIFT-VARIES.md`](./WHY-DRIFT-VARIES.md), [`drift-per-landmark.json`](./drift-per-landmark.json), [`path-ab-same-svg.json`](./path-ab-same-svg.json), [`line-height-decouple.json`](./line-height-decouple.json), [`typography-no-flex.json`](./typography-no-flex.json).

---

## Wave 3 results (2026-06-02, headed)

### 1. Experimental flags in `src/` — **NOT FIXED**

Flags landed (committed, default off): `experimentalFoTextLayout`, `experimentalFoLeadingTrim`, `experimentalFoTextBoxEdgeAuto`, `experimentalRasterDecodeSettle`. Headed probe: [`experimental-flags-probe.json`](./experimental-flags-probe.json).

| Variant | canvasΔ @ dpr=1 Home | Δ from baseline |
|---------|---------------------:|----------------:|
| baseline | **2.797** | 0 |
| experimentalFoTextLayout | 2.797 | 0 |
| experimentalFoLeadingTrim | 2.797 | 0 |
| experimentalFoTextBoxEdgeAuto | 2.797 | 0 |
| experimentalRasterDecodeSettle | 2.797 | 0 |
| leadingTrim+textBoxEdge | 2.797 | 0 |
| textLayout+decodeSettle | 2.797 | 0 |

svgΔ ≈ −0.008 px on all rows. **Verdict: NOT_FIXED_AT_PLATEAU** — do not promote flags; plateau unchanged.

### 2. Typography no-flex — drift **does not vanish**

[`typography-no-flex-probe.json`](./typography-no-flex-probe.json): single `#text-leaf` inline-block span, **no flex ancestor**.

| Fixture | canvasΔ @ dpr=1 | svgΔ | Verdict |
|---------|----------------:|-----:|---------|
| no-flex text leaf | **3.000** | 0.000 | GENERIC_FO_RASTER_BUG |
| mini-nav flex-stretch (ref) | 2.797 | −0.008 | (reference) |

**Flex-coupling hypothesis falsified** for this control: FO→bitmap drift exists without flex stretch. Magnitude similar (~3 px class).

### 3. Path A/B same SVG — **BITMAP_ONLY reconfirmed**

[`path-ab-same-svg.json`](./path-ab-same-svg.json): one `product-baseline` capture, same bytes for both paths @ dpr=2.

| Path | Method | Home topInBorder |
|------|--------|-----------------:|
| A | inline FO (`measureSvgInkForElement`) | 14.195 px |
| B | decode+draw (`snap.toCanvas`) | 17.500 px |
| **Δ B−A** | | **+3.305 px** |

live↔svg −0.008 px · live↔canvas +3.297 px. **Verdict: BITMAP_SHIFTS_VS_INLINE** — drift enters at FO→bitmap, not serialization.

### 4. Line-height decouple — lh moves raster, **does not close gap**

[`line-height-decouple.json`](./line-height-decouple.json): FO CSS inject only @ dpr=2.

| lh inject | Home canvasΔ | Home svgΔ |
|-----------|-------------:|----------:|
| 21.6px | 3.297 | −0.008 |
| 48px | 4.297 | +0.297 |
| from-live (21.6px) | 3.297 | −0.008 |

1 px canvasΔ spread across lh variants — lh-sensitive at margin, but ~3.3 px baseline drift persists. Not a root fix.

---

## What 120+ recipes proved (plateau **2.797**)

The parallel matrix rollup (`parallel-investigation-rollup.json`) probed **128 rows** (120 non-baseline recipes + control). Result:

| Outcome | Count | Notes |
|---------|------:|-------|
| Tie `product-baseline` at **2.797** px (dpr=1 mini Home) | **120** | FO raster only; svgΔ ≈ −0.008 (≈ live) |
| Beat baseline (promotable?) | **3** | 2× vdrift draw-nudge → **1.797**; 1× `brain-l01-026` → **−0.203** (text bypass / alternate raster) |
| Null ink (unreadable canvas) | **58** | Mostly `tc-lab-w7-uni-*`; taint or broken wiring, not discovery |
| Catastrophic regressions | handful | e.g. `brain-l12-005` +22 px, sideways writing-mode +12 px |

**Confirmed mechanism (not speculation):**

1. **BITMAP_ONLY** — Serialized FO / inline SVG ink matches live (|svgΔ| < 0.01 px). Canvas ink does not (~+2.8–3.3 px). Layout boxes match live within ~0.05 px (`raster-vs-svg-ink-probe.json`, `fo-wrapper-boxmodel.json`).
2. **CONSTANT_SHIFT** — First-dark canvas row sits ~3.3 px below live Range top with **1 device-row** sharp onset, not gradual half-leading smear (`ink-row-profile.json`).
3. **Decode / timing / flex / overflow / compositing / line-height pins / fonts.ready / text-rendering** — all ruled out or no-op at +2.797 among readable paths (`decode-path-ab.json`, `flex-stretch-vs-baseline.json`, `line-height-ab.json`, etc.).
4. **vdrift 1.797** — Partial **drawImage dest nudge** only; svg↔canvas gap ~1.8–2.3 px remains; redundant with product `gbcrFracY` (`vdrift-root-cause.json`, `fix-retry-validation.json`).
5. **Handbuilt minimal SVG** reproduces identical drift without snapdom capture — engine FO→bitmap issue, not serialization artifact (`handbuilt-vs-capture.json`).
6. **Class-wide** — not nav-only; form labels and headings also fail under blackbox metric (`root-cause-scope.json`, `non-nav-landmarks-investigation.json`).

**Bottom line:** Recipe matrix exploration has **hit a hard plateau**. Adding more FO CSS injects, decode forks, or backing-round flags does not move the **svg↔canvas** gap. The only rows that beat 2.797 are **draw blit nudges** (partial) or **text bypass** (not promotable).

---

## Top 3 open root-cause questions

These are the unanswered *why* questions — not “which recipe wins.”

### 1. Where inside Chromium’s FO→bitmap path does ink shift ~3 px?

Inline FO (LayoutNG / DOM display of serialized markup) paints correctly; `Image.decode()` → `drawImage()` does not. The step is likely **glyph paint origin vs line-box top** inside the FO viewport bitmap, not snapdom capture. Need engine-level isolation (minimal repro + Blink trace / filing), not another CSS matrix.

### 2. What closes **svg↔canvas** (~3 px), not just canvas↔live via blit nudge?

Every “win” so far shifts the **blitted bitmap** (`vDriftFix`, `gbcrFracY`) while svgΔ stays ≈ 0. A real fix must move **serialized FO ink and raster ink together** — or change what FO paints before decode. Until svg↔canvas collapses, product changes are cosmetic draw offsets.

### 3. Why do metrics disagree (+2.797 lab vs −0.91 blackbox) on the same layout class?

Lab `liveVsCanvasTopPx` on stretch-nav links: **+2.797** (dpr=1). Historical bounce-check `paint.canvas.vs-border.top`: **−0.91** on Home/Products. Same BITMAP_ONLY stage, different cap/band/fixture semantics (`root-cause-scope.json`). Without reconciling coordinate systems, we cannot gate a fix on either metric alone.

---

## Next 5 experiments (wave 3 — NOT recipe matrices)

Prior E1–E5 remain valid; wave 3 **rules out src/ flags and flex-only coupling**. Redirect to these five:

### N1 — No-flex path A/B same SVG @ dpr=1

**Goal:** Confirm BITMAP_ONLY on the simplest fixture (typography-no-flex) — same bytes, inline FO vs decode+draw.  
**Runner:** extend `fo-path-ab-probe.mjs` with `--fixture typography-no-flex --dpr 1`.  
**Output:** `path-ab-no-flex-dpr1.json`.  
**Success:** Path Δ ≈ canvasΔ ≈ 3 px with svgΔ ≈ 0 — proves drift is generic FO raster, not flex-nav specific.

### N2 — Handbuilt no-flex minimal repro

**Goal:** Smallest hand-built SVG (inline-block text leaf, no flex) that reproduces ~3 px canvasΔ without snapdom capture.  
**Runner:** extend `fo-minimal-repro.mjs` / handbuilt harness with no-flex variant.  
**Output:** `handbuilt-no-flex-minimal.json`.  
**Success:** Engine-only repro ≤500 bytes markup; filing-grade minimal case.

### N3 — Chromium engine filing pack (BITMAP_ONLY + CONSTANT_SHIFT)

**Goal:** Escalate to upstream bug or documented engine limit — stop flag/recipe churn.  
**Inputs:** wave-3 path-ab + typography-no-flex + `handbuilt-vs-capture.json`, `ink-row-profile-dpr1.json`.  
**Output:** `chromium-bug-filing-draft.md` + repro URL.  
**Success:** Blink confirms FO text raster offset class or names paint code path.

### N4 — FO paint origin autopsy at decode boundary

**Goal:** Pin whether ~3 px is line-box strut / half-leading vs FO viewport paint-origin offset.  
**Runner:** CDP / headed eval at `img.decode()`: text metrics, first dark bitmap row vs inline FO mount — on **no-flex** fixture.  
**Output:** `fo-paint-origin-autopsy.json`.  
**Success:** Measured offset formula or strut hypothesis falsified.

### N5 — Metric reconciliation (lab +2.8 vs blackbox −0.91)

**Goal:** Single headed page, same landmark: `liveVsCanvasTopPx`, `paint.canvas.vs-border.top`, Range top, cap model.  
**Output:** `metric-reconciliation.json`.  
**Success:** Documented transform between lab and blackbox gates before any fix lands.

---

## Deprioritize: `tc-flags-w1` / `tc-flags-w2` matrix churn

**Do not invest in flags-wave recipe matrices.**

Evidence from flags-wave logs (`flags-wave-run-3.log`, `.sandbox-edit/flags-w2-run-1.log`):

- Runs requested `tc-flags-w1-backing-ceil-grid`, `tc-flags-w1-draw-from-backing`, `tc-flags-w2-chromium-text-block`, `tc-flags-w2-flex-row-center` alongside `product-baseline`.
- Matrix output shows **only `product-baseline` at 2.797** — flag recipes did not execute (IDs absent from active corpus; same failure mode as ISS “requested IDs absent from matrix”).
- Even if wired, the approach duplicates already-ruled-out families: backing ceil/grid (device-grid-floor, int-floor shards tied baseline), Chromium text block copy (brain-l02-019 tied baseline), flex-row-center (flex inject shards tied baseline).

**Registry v2** (`issues-found-registry-v2.json`): 72 `recipe-broken`, 55 `canvas_delta_not_baseline` entries — mostly matrix rows that null-ink or regress. More flag permutations add noise, not signal.

**Redirect effort to E1–E5** above. If a structural fix emerges from E2/E4, validate with **one** headed calibrate (`product-baseline` vs candidate), then `npm run test:blackbox` — not another 100-row shard.

---

## Process rules (unchanged)

- Headed Chrome for ink/canvas metrics (`debug-headed-chrome.mdc`).
- FO raster only for promotion decisions (`fo-lab-no-text-bypass.mdc`).
- No `src/` until lab proves svg↔canvas closure (`no-speculative-src-edits.mdc`).
- Do not edit `bounce-check.mjs` to greenwash (`bounce-check-immutable.mdc`).

---

---

## Probe batch — 2026-06-02 (headed, repo `.sandbox-edit/`)

Five targeted probes executed (no matrix). Logs: `.sandbox-edit/_run-*.log`. JSON mirrored to `__localtests__/.sandbox-edit/` where noted.

| Probe | Artifact | Headline |
|-------|----------|----------|
| `fo-typography-no-flex.mjs` | [`typography-no-flex.json`](../../.sandbox-edit/typography-no-flex.json) | **GENERIC_FO_RASTER_BUG** — no-flex text leaf canvasΔ **+3.5px** (|Δ| ≥ 0.5); flex-stretch reference **+3.297px**. Drift is **not** flex-coupling-only. |
| `line-height-decouple.mjs` | [`line-height-decouple.json`](../../.sandbox-edit/line-height-decouple.json) | FO `line-height` inject moves **canvas** ink by **~1px** (21.6px → 4.297 vs 48px → 4.297 canvasΔ on Home/Products); svgΔ stays ≈ live at 21.6px (−0.008). **Raster responds to lh; serialization does not.** |
| `fo-minimal-repro.mjs` | [`minimal-repro.json`](../../.sandbox-edit/minimal-repro.json) | **BITMAP_ONLY** on all hand-built variants (svgΔ 0, canvasΔ ~3.297–3.5). Smallest: `static-inline-flex` (572 B). snapdom capture ≈ hand-built. |
| `vdrift-root-cause-probe.mjs` | [`vdrift-root-cause.json`](../../.sandbox-edit/vdrift-root-cause.json) | **DRAW_NUDGE_ONLY** @ dpr=2: v001/v002 set destY=−0.875 but **canvasΔ unchanged** vs product-baseline (3.297). True FO raster error if nudge removed ≈ **2.42px**. svg↔canvas gap unchanged. |
| `line-box-strut-math.mjs` | [`line-box-strut-math.json`](../../.sandbox-edit/line-box-strut-math.json) | canvas offset **3.297px**; best single metric `(lh−fs)/2` = **2.8px** (|Δ| **0.497px**). **No metric within 0.06px.** Inline SVG ≈ live Range (−0.008). |

### Implications for open questions

1. **Flex decoupling falsified as sole cause** — typography-only control still shows ~3.5px FO→bitmap shift (`typography-no-flex.json`).
2. **Line-height is a raster knob, not an svg fix** — decouple probe shows lh inject perturbs canvas ink without aligning svg↔canvas (`line-height-decouple.json`). Reinforces “close svg↔canvas” requirement from plateau section.
3. **Strut half-leading is close but not exact** — `(lineHeight−fontSize)/2` explains ~85% of canvas offset magnitude; residual ~0.5px + `(contentBox−lh)/2` = 13.2px ruled out as direct match (`line-box-strut-math.json`). Supports **E4 autopsy** (paint origin inside FO viewport) over a single CSS strut pin.
4. **vDrift at dpr=2 on current product** — lab arms with explicit destY nudge did not beat baseline in this run; do not assume matrix “1.797px” wins transfer without re-measuring the active `toCanvas` path (`vdrift-root-cause.json`).

### E4 / E2 priority bump

- Run **fo-paint-origin autopsy** (CDP at decode) before more lh/flags recipes — strut math alone does not close the gap.
- Any **measured-ink-offset** arm must report **svg↔canvas** and **live↔canvas** together; lh decouple shows canvas-only movement.


## Related artifacts

| Doc | Role |
|-----|------|
| [`MASTER-FO-RASTER-RESEARCH.md`](./MASTER-FO-RASTER-RESEARCH.md) | Full ruled-out table + Batch 2 evidence |
| [`RESEARCH-STATUS.md`](./RESEARCH-STATUS.md) | Probe inventory |
| [`PROPOSED-FIXES.md`](../__localtests__/PROPOSED-FIXES.md) | Three proposals (all “not promotable now”) |
| [`WHY-DRIFT-VARIES.md`](./WHY-DRIFT-VARIES.md) | Why +2.797 / −1.727 / −0.91 coexist; per-landmark variance |
| [`RESEARCH-INDEX.md`](./RESEARCH-INDEX.md) | One-line index of all `.sandbox-edit/*.json` artifacts |
| [`issues-found-registry-v2.json`](./issues-found-registry-v2.json) | 262 deduped issues; use for follow-up, not promotion |
