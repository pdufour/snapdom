# FO raster research — Round 7 (2026-06-02)

**Status:** NOT FIXED @ **0.06 px** integer gate · **Headed Chrome only**

**Probe:** `node __localtests__/fo-research-round-7-probe.mjs` → [`.sandbox-edit/research-round-7.json`](research-round-7.json)

**Sections:** nav height · wave-14 ingest / wave-13 spot · decode delta · landmark parity · metric reconcile · w7 0.203 residual scan · **cross-browser**

---

## Executive summary

Round 7 closes six open questions from wave-7 / metric-reconciliation work. The **+2.797 px** painted Range plateau is **invariant** to stretch nav height (48/56/64 px), **identical** on Home and Products, and **not amplified** by snapdom decode (0 px vs chromium-only on same SVG). The **w7 −0.203 px** residual is **confirmed** as integer canvas ink row **14** vs live Range **14.203** — not a second FO paint bug. **Wave-14 matrix JSON is absent on disk**; wave-13 spot-check shows **no row ≤ 0.06 px** (best remains w7 **0.203 px**; `tc-fix-w13-rfork-y-w7-minus-range-subpixel` regressed to **+0.797 px**).

---

## Angle 1 — 48 px stretch vs glyph ink (56/64 px variants)

| nav min-height | half layout strut | Range top (border) | canvasΔ | residual vs ½(lh−fs) |
|---------------:|------------------:|-------------------:|--------:|---------------------:|
| **48** | 13.2 px | 14.203 px | **+2.797** | **−0.003** |
| **56** | 17.2 px | 18.203 px | **+2.797** | **−0.003** |
| **64** | 21.2 px | 22.203 px | **+2.797** | **−0.003** |

**Verdict:** `NAV_HEIGHT_INVARIANT` — canvasΔ spread **0 px**.

**Interpretation:** Taller stretch boxes move **live Range ink** with the flex line box, but **Range↔canvas drift stays constant**. The bug tracks **glyph half-leading (2.8 px)**, not `(contentBox−lh)/2` layout strut.

Artifact: [`research-round-7-nav-height.json`](research-round-7-nav-height.json)

---

## Angle 2 — wave-14 matrix ingest

| Check | Result |
|-------|--------|
| `*wave14*` / `*w14*` JSON in `.sandbox-edit/` | **Not found** |
| Fallback spot-check | wave-13 + w7 recipes @ dpr=1 Home |

**Spot matrix (headed):**

| Recipe | \|canvasΔ\| | Gate 0.06 |
|--------|------------:|----------:|
| `product-baseline` | 2.797 | fail |
| `tc-fix-w7-rfork-fo-y-half-leading-meta` | **0.203** | fail |
| `tc-fix-w13-rfork-leaf-translate-y-half-leading` | 0.203 | fail |
| `tc-fix-w13-rfork-y-w7-minus-range-subpixel` | **0.797** | fail (regressed) |
| `tc-fix-w13-rfork-viewbox-y-half-leading` | 5.797 | fail |

Artifact: [`research-round-7-wave-matrix.json`](research-round-7-wave-matrix.json)

---

## Angle 3 — Chromium-only vs snapdom @ decode

Same serialized SVG bytes, baseline and w7-patched:

| Path | baseline canvasΔ | w7 canvasΔ | snapdom − chromium |
|------|-----------------:|-----------:|-------------------:|
| Lab toCanvas vs chromium-only raster | +2.797 | −0.203 | **0 px** (both) |

**Verdict:** `SNAPDOM_ZERO_PX_AT_DECODE` — snapdom adds **no** decode/blit px beyond Chromium FO paint on identical SVG.

Artifact: [`research-round-7-decode-delta.json`](research-round-7-decode-delta.json)

---

## Angle 4 — Products vs Home root cause

| Landmark | canvasΔ | svgΔ | Range top | halfLeadingFs |
|----------|--------:|-----:|----------:|--------------:|
| Home | **+2.797** | −0.008 | 14.203 | 2.8 |
| Products | **+2.797** | −0.008 | 14.203 | 2.8 |

**canvasΔ spread:** **0 px** · layout diffs (width only) · ink metrics identical.

**Root cause:** No FO-raster class difference between nav labels. Any historical Home≠Products blackbox row is **metric / coordinate / cap-model**, not landmark-specific bitmap paint.

Artifact: [`research-round-7-landmark-parity.json`](research-round-7-landmark-parity.json)

---

## Angle 5 — Blackbox vs lab Range reconciliation

Mini Home @ dpr=1 (integer ink scan):

| Metric family | Δ (canvas vs live) | Live reference box |
|---------------|-------------------:|--------------------|
| **Lab Range** (`liveVsCanvasTopPx`) | **+2.797 px** | Range union top **14.203** |
| **Cap-model** (`deltaTopCapModel`) | **−1.727 px** | Cap ink top **18.727** |
| **Blackbox proxy** (`paint.canvas.vs-border.top`) | **−1.727 px** | Same cap-model path |
| **Reconciliation** Range − cap | **4.523 px** | — |

**Formula:**

- Lab: `canvas(integer scan) − live(Range union)`
- Blackbox: `canvas(same integer scan) − live(cap model)` → differs by **Range − cap live offset (−4.523 px)**

Do **not** expect lab **+2.797** and blackbox **~−0.91** (checkout fixture) to match numerically.

Artifact: [`research-round-7-metric-reconcile.json`](research-round-7-metric-reconcile.json)

---

## Angle 6 — w7 residual **0.203 px** (integer scan vs Range subpixel)

| Quantity | Value |
|----------|------:|
| Baseline integer canvasΔ | +2.797 |
| w7 FO y nudge | −2.8 px |
| w7 integer canvasΔ | **−0.203** |
| Live Range top (border) | **14.203** |
| Canvas integer ink top | **14.000** |
| Range subpixel fraction | **0.203** |
| `w7ResidualMatchesRangeSubpixel` | **true** |

**Verdict:** `W7_RESIDUAL_IS_INTEGER_SCAN_VS_RANGE_SUBPIXEL` — w7 closes the **2.8 px strut class**; remaining **0.203** is **quantization** (integer device row vs subpixel Range), not missing paint.

Fractional-threshold scan on w7: **−1.091 px** (does **not** pass 0.06 gate either — anti-aliased band complicates subpixel scan).

Artifact: [`research-round-7-w7-residual-scan.json`](research-round-7-w7-residual-scan.json)

---

## Cross-browser — is the bug Chromium-only?

**Probe:** `node __localtests__/fo-cross-browser-fo-probe.mjs` (headed Playwright)  
**Page:** `__localtests__/fo-cross-browser-fo-probe.html`  
**Artifact:** [`fo-cross-browser-probe.json`](fo-cross-browser-probe.json)

Same **hand-built minimal nav FO** (`buildStaticMinimalNavFoSvg`) → `data:image/svg+xml` + decode + drawImage. **dpr=1**, landmark **Home**. No snapdom.

| Engine | canvasΔ | svgΔ | Verdict |
|--------|--------:|-----:|---------|
| chromium | **2.797** | **0** | BITMAP_ONLY |
| chrome | **2.797** | **0** | BITMAP_ONLY |
| firefox | **3.500** | **0** | BITMAP_ONLY |
| webkit | **3.422** | **0** | BITMAP_ONLY |

- **½(lh−fs) ≈ 2.8 px** on every engine; **svgΔ ≈ 0** → inline FO matches live on all engines; drift is **FO→bitmap only**.
- Chromium vs chrome: **0 px** spread (same build here). Gecko/WebKit **larger** canvasΔ (~+0.7 px vs Blink).
- **Synthesis:** `CLASS_WIDE_BITMAP_ONLY` · `isBugChromiumOnly`: **false**.

**Answer: No.** The half-leading strut gap is **not Chromium-exclusive**; Firefox and WebKit show the same BITMAP_ONLY signature with engine-specific magnitude. Blink filing remains valid for the **2.797 px** product plateau; fixes must not assume other engines are unaffected.

```bash
node __localtests__/fo-cross-browser-fo-probe.mjs
npx playwright install firefox webkit   # if engines skipped
```

---

## Top findings

1. **Stretch height ruled out** — 48/56/64 px nav: **0 px** canvasΔ spread; drift is glyph strut class.
2. **Snapdom decode clean** — **0 px** added vs chromium-only on same SVG (baseline + w7).
3. **Home = Products** — identical **+2.797** painted drift; blackbox nav parity issues are metric-level.
4. **Metrics reconciled** — Range **+2.797** vs cap/blackbox **−1.727** differ by **4.523 px** by design.
5. **w7 0.203 confirmed** — equals Range subpixel **0.203**; integer scan lands row 14 vs live 14.203.
6. **wave-14 absent** — wave-13 spot: w7 best; range-subpixel fork **regressed** (+0.797).
7. **Cross-browser** — BITMAP_ONLY on chromium, chrome, firefox, webkit; **not Chromium-only** (FF/WK ~3.4–3.5 px vs Blink **2.797**).

---

## Next 3 fix hypotheses

| Rank | Hypothesis | Mechanism | Expected |
|------|------------|-----------|----------|
| 1 | **Refine w7 nudge to `halfLeading − rangeSubpixel`** | FO y −**2.597** px (not −2.8) — current w13 recipe overshoots (+0.797); calibrate meta subtract | **0.203 → ≤0.06** integer |
| 2 | **Gate on Range-aligned scan** | Document matrix promotion using Range reference + subpixel-aware canvas row (not cap-model blackbox path) | Align lab gate with live ground truth |
| 3 | **viewBox-y half-leading (w13)** | Only if FO `y` attr couples to stretch side effects on checkout — spot **5.797** on mini; re-test on checkout flex | Structural without FO height shrink |

---

## Refuted (round 7)

- Stretch nav **48→64 px** as cause of **+2.797**
- Snapdom decode layer adding px beyond Chromium
- Products vs Home FO raster class divergence

---

## Commands

```bash
npm run compile
node __localtests__/fo-research-round-7-probe.mjs
node __localtests__/fo-research-round-7-probe.mjs --section w7Residual --landmark Home
node __localtests__/fo-fix-lab.mjs --calibrate --ids 'tc-fix-w7-*,tc-fix-w13-*' --landmarks Home,Products
```

**Never use `HEADLESS=1`** for ink decisions.
