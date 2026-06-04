# Why FO canvas drift varies (and what stays constant)

**Status:** NOT FIXED · **Scope:** FO raster only — no SVG-text / `fillText` bypass for promotion.

**Related:** [`__localtests__/README-FO-RASTER-RESEARCH.md`](../__localtests__/README-FO-RASTER-RESEARCH.md) · [`__localtests__/README-TEXT-BASELINE-LINEHEIGHT.md`](../__localtests__/README-TEXT-BASELINE-LINEHEIGHT.md) · [`RESEARCH-PIVOT.md`](RESEARCH-PIVOT.md)

---

## One-sentence model

**Serialized FO ink tracks live; FO→bitmap does not.** Within a layout class, **painted Range vs canvas** drift is often a **constant +2.5–2.8 px** offset; **cap-model vs canvas** and **blackbox structure metrics** can disagree because they measure different boxes and bands.

---

## What is invariant: BITMAP_ONLY

| Stage | Typical nav link (Home) | Verdict |
|-------|-------------------------|---------|
| live ↔ svg (serialized FO) | **−0.008 px** | Capture OK |
| live ↔ canvas (bitmap) | **+2.797 px** @ dpr=1 · **+3.297 px** @ dpr=2 | Raster gap |
| svg ↔ canvas | **~2.8–3.3 px** | **BITMAP_ONLY** |

**BITMAP_ONLY** means: fixing capture/serialization cannot close the product gap until **inline FO paint** and **`Image.decode()` → `drawImage()`** paint agree.

Evidence: [`raster-vs-svg-ink-probe.json`](raster-vs-svg-ink-probe.json), [`path-ab-same-svg.json`](path-ab-same-svg.json) (same bytes: inline measure **14.195 px** vs decode **17.5 px** → Δ **+3.305 px**), [`minimal-repro.json`](minimal-repro.json) (572 B hand-built SVG, no snapdom).

---

## What varies: metric family

Same landmark, same capture, different probes → different signed Δ:

| Metric | Mini nav Home @ dpr=1 | Checkout Home @ dpr=1 | Meaning |
|--------|----------------------:|----------------------:|---------|
| **Painted Range top** (`liveVsCanvasTopPx`) | **+2.797** | **+2.797** | Lab three-way ink — **constant** across nav labels |
| **Cap-model top** (`deltaTopCapModel`) | **−1.727** | **−0.227** | Structure band vs canvas — **varies** with border/padding/box height |
| **Blackbox** `paint.canvas.vs-border.top` (historical) | ~**−0.91** | (fixture-specific) | Different band + coordinate origin |

**Takeaway:** Do not treat **+2.797**, **−1.727**, and **−0.91** as contradictory “bugs” — they are **different ink definitions** on the same BITMAP_ONLY failure. Reconcile before gating a fix ([`RESEARCH-PIVOT.md`](RESEARCH-PIVOT.md) experiment **N5**).

Source: [`drift-per-landmark.json`](drift-per-landmark.json) buckets `navPaintedCanvasDelta` (spread **0**) vs `navStructureCapDelta` (spread **1.5 px**).

---

## What varies: landmark / element kind

| Landmark | Fixture | Painted canvasΔ | Notes |
|----------|---------|------------------:|-------|
| Home, Products | mini-nav stretch nav | **2.797** | CSS lh **21.6px**, layoutBox **48px**, halfLeadingStrut **2.8px** |
| Home, Products | checkout nav | **2.797** | Border **3px**; layoutBox **52px**, halfLayoutStrut **15.2px** — same paint drift |
| Email, Full name | checkout labels | **2.5** | 15px/22.5px lh, layoutBox **22.5px**, halfLeadingStrut **3.75px** |

Nav links share **identical** painted drift despite different layout boxes and stretch struts. Labels have **higher** halfLeadingStrut but **lower** canvasΔ — drift is not `(lh−fs)/2`.

Source: [`drift-per-landmark.json`](drift-per-landmark.json), [`checkout-landmark-scan.json`](checkout-landmark-scan.json) (`constant_offset`, spread **0**).

---

## What varies: dpr and product path

| Context | Home canvasΔ | Notes |
|---------|-------------:|-------|
| FO fix lab / matrix @ dpr=1, GBCR nudge **off** | **2.797** | Plateau reference |
| Three-way probes @ dpr=2 | **3.297** | ~1 px step consistent with device rounding, not a different root cause |
| Product `toCanvas` @ dpr=1, **gbcrFracY** active | **1.797** | Partial **drawImage** dest nudge — masks, does not fix FO paint |
| Disable GBCR nudge | **2.797** | True FO raster error class |

Source: [`tocanvas-only-flags.json`](tocanvas-only-flags.json), [`vdrift-root-cause.json`](vdrift-root-cause.json), [`text-baseline-flags.json`](text-baseline-flags.json).

---

## What varies: flex vs text-leaf line-height (not the plateau)

Two different “line-height” numbers on stretch nav:

| Concept | Mini nav Home | Role |
|---------|---------------|------|
| **Computed lh** on text | **21.6px** (1.35 × 16px) | CSS strut for glyphs — serialization matches |
| **Used / layout line box** | **48px** (stretch) | Flex cross-size — anchor GBCR height |
| **Half-leading `(lh−fs)/2`** | **2.8px** | Best single correlate to **~3px** canvas offset (0.497 px residual) |
| **`(contentBox−lh)/2`** | **13.2px** | Stretch padding in line box — **not** the canvas offset |

**Flex vs leaf lh:**

- **Flex-coupling alone** does **not** explain drift — no-flex control still **+3.0–3.5 px** ([`typography-no-flex.json`](typography-no-flex.json)).
- **Stretch-inflated layout box** changes `halfLayoutStrut` (13.2–15.2 px on nav) but **not** painted canvasΔ.
- **FO lh inject** at decode moves **canvas only** ~**1 px** across 21.6px vs 48px variants; svg leg flat at correct lh ([`line-height-decouple.json`](line-height-decouple.json)).

**Half-leading theory (partial):** FO bitmap paint origin is ~**one half-leading strut** below live Range top for 16px/21.6px text, but **no metric matches within 0.06 px** ([`line-box-strut-math.json`](line-box-strut-math.json)). Fractional truncation alone is **weak** (r ≈ 0.008) per [`text-baseline-lh-correlation.json`](text-baseline-lh-correlation.json).

---

## What varies: “wins” that are not fixes

| Row | Reported canvasΔ | Why it varies from 2.797 |
|-----|-----------------:|--------------------------|
| `vdrift-fix` / `gbcrFracY` | **1.797** | Blit destY only |
| `ink-meta-align` (capture+raster) | **−2.203** | Draw offset from measured frac — **overshoots** live |
| Text bypass / SVG-text matrix leaders | **≈ 0** | **Not promotable** — bypasses FO text raster |
| `flex-center` fork | **−14 px** | Layout break, not parity |

Source: [`fix-wave-latest.json`](fix-wave-latest.json), [`ink-meta-align.json`](ink-meta-align.json), [`fix-w6-summary.json`](fix-w6-summary.json).

---

## What does *not* vary (ruled out)

- **120+ FO-raster recipes** @ dpr=1 mini Home: tie **2.797** ([`RESEARCH-PIVOT.md`](RESEARCH-PIVOT.md)).
- **Experimental capture/raster flags** w1–w5: tie **2.797** ([`experimental-flags-matrix.json`](experimental-flags-matrix.json), [`fix-w5-flags.json`](fix-w5-flags.json)).
- **Raster-only forks** w1/w2: tie **2.797** or regress ([`raster-fork-wave1.json`](raster-fork-wave1.json), [`raster-fork-w2.json`](raster-fork-w2.json)).
- **SVG leg** across matrix: **≈ 0** vs live — serialization not the knob.

---

## Decision guide for agents

1. Compare **painted three-way** metrics with same **dpr**, **recipe**, **GBCR nudge on/off**.
2. If **svgΔ ≈ 0** and **canvasΔ ≈ +2.8**, classify **BITMAP_ONLY** — stop capture/CSS matrix churn.
3. If numbers differ by **~1 px**, check **dpr** and **product blit nudge** before claiming a new root cause.
4. If **cap-model** or **blackbox** disagree with lab **+2.797**, read this doc — do not tune to **−0.91** in `src/`.
5. **Never promote** SVG-text / fillText rows; **never** treat sandbox **Canvas vs live ≈ 0** as truth (M1–M6 in master README).

---

## Per-landmark correlation (`fo-drift-per-landmark.mjs`)

Headed probe logs per row: **fontSize**, **lineHeight** (CSS px), **layoutBox** (content box), **halfLeadingStrut** `(lh−fs)/2`, **canvasDelta** (`liveVsCanvasTopPx`). Output: [`drift-per-landmark.json`](drift-per-landmark.json) with `correlation` block.

### Snapshot @ dpr=1

| Landmark | fs | lh | layoutBox | halfLeadingStrut | canvasΔ | svgΔ |
|----------|---:|---:|----------:|-----------------:|--------:|-----:|
| mini Home / Products | 16 | 21.6 | 48 | 2.8 | **2.797** | −0.008 |
| checkout Home / Products | 16 | 21.6 | 52 | 2.8 | **2.797** | 0 |
| Email / Full name | 15 | 22.5 | 22.5 | 3.75 | **2.500** | 0 |

### Correlation verdict: `CONSTANT_CLASS`

| Stat | Value | Meaning |
|------|------:|---------|
| canvasΔ spread | **0.297 px** | Two buckets only: nav **2.797**, labels **2.500** |
| Residual `(canvasΔ − halfLeadingStrut)` spread | **1.247 px** | Labels: 2.5 − 3.75 = **−1.25 px** — not half-leading |
| Pearson r(canvasΔ, halfLeadingStrut) | **−1.000** | **Misleading** — only two canvasΔ clusters; labels break monotonic scaling |
| Pearson r(canvasΔ, halfLayoutStrut) | **+0.993** | Large stretch strut on nav; canvasΔ unchanged |

**Interpretation:** Per-landmark typography explains **layout and serialized FO** (svgΔ ≈ 0). The **residual canvas gap** is a ~**2.5–2.8 px** engine FO→bitmap class, not a continuous function of `(lh−fs)/2` or flex stretch strut. On a **single** mini Home row @ dpr=2, canvas offset **3.297 px** is closest to half-leading **2.8 px** (0.497 px residual) — a magnitude hint, not cross-landmark prediction ([`line-box-strut-math.json`](line-box-strut-math.json)). lh sweeps within a type stay flat ([`drift-vs-half-leading-by-type.json`](drift-vs-half-leading-by-type.json)).

---

## Commands

```bash
npm run compile
node __localtests__/fo-drift-per-landmark.mjs      # → drift-per-landmark.json
node __localtests__/fo-raster-vs-svg-ink-probe.mjs
node __localtests__/line-box-strut-math.mjs
```
