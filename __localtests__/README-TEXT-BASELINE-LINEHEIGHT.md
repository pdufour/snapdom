# Text baseline, line-height, and strut research

**Status: NOT FIXED.** No promotable change closes **svg↔canvas** while keeping real DOM text inside `foreignObject` through FO raster.

**Scope:** FO text raster only — real DOM text in `foreignObject`. **No SVG-text bypass**, no `fillText`, no text-as-path for promotion (see [FO lab: no text bypass](../GEMINI.md#fo-lab-no-text-bypass)).

### Research-win (2026-06-02) — why lh forks tie at 2.797 px

Headed probe: [`fo-research-win-probe.mjs`](fo-research-win-probe.mjs) → [`.sandbox-edit/research-win-latest.json`](../.sandbox-edit/research-win-latest.json). Master write-up: [README-FO-RASTER-RESEARCH.md § Research findings (latest)](README-FO-RASTER-RESEARCH.md#research-findings-latest).

| Question | Answer |
|----------|--------|
| Is lh wrong in SVG? | **No** — serialized **21.6px** (class); FO-internal computed **21.6px** |
| Does decode fork run? | **Yes** — red `background` on text leaf changes **7469** bitmap pixels |
| Does `lh:21.6px!important` fix canvas? | **No** — **0** px diff vs baseline bitmap · canvasΔ stays **2.797** |
| Does wrong lh move raster? | **Yes** — `lh:1` / `normal` @ decode → canvasΔ **3.797** (+1 px) |
| Is stretch the trigger? | **No** — flex-center / stretch / mini-nav all **2.797** @ dpr=1 |
| Minimal repro | Hand-built static FO (no snapdom) → canvasΔ **2.797**, svgΔ **0** |

**Verdict:** recipes tie because Chromium FO **bitmap strut paint** ignores correct lh re-pin; pursue **leading-trim / line-box clip** at decode (`tc-research-w1-*` in master README).

| Doc | Role |
|-----|------|
| [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) | BITMAP_ONLY, **2.797 px** plateau, ruled-out families, sandbox M1–M6 |
| [`.sandbox-edit/WHY-DRIFT-VARIES.md`](../.sandbox-edit/WHY-DRIFT-VARIES.md) | Why metrics/landmarks/dpr disagree |
| [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md) | Stop matrix churn; next experiments |
| [`.sandbox-edit/RESEARCH-INDEX.md`](../.sandbox-edit/RESEARCH-INDEX.md) | Probe JSON index |
| [`PROPOSED-FIXES-FINAL.md`](PROPOSED-FIXES-FINAL.md) | Prioritized fixes |
| [`PROPOSED-FIXES-WAVE3.md`](PROPOSED-FIXES-WAVE3.md) | Wave 3 probes, tc-flags-w3, prune |

---

## Executive summary

| Finding | Detail |
|---------|--------|
| **BITMAP_ONLY** | \|svgΔ\| ≈ **0.008 px**; \|canvasΔ\| ≈ **+2.797** (dpr=1) / **+3.297** (dpr=2) on `product-baseline` |
| **Plateau** | **120+** FO-raster recipes tie **2.797 px** @ dpr=1 — no promotable fix |
| **Half-leading** | `(lineHeight − fontSize) / 2` = **2.8 px** explains ~**85%** of **3.297 px** offset; **0.497 px** residual |
| **Flex vs leaf lh** | Stretch **used** line box **48px** ≠ text **computed lh 21.6px**; flex not required for bug |
| **LH patches** | Capture pin + raster fork **no-op** on svg leg — tie **2.797** ([`lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json)) |
| **tc-blh-w1 wave** | All lh-pin / dual-pin / flex-start tie **2.797**; strut neutralize **3.797**; baseline+inline **−10 to −12 px** (layout break) |
| **NOT FIXED** | lh pin, flags, forks, ink-meta align, vdrift blit — see [Fix attempts](#fix-attempts-text--lh--strut--all-not-fixed) |

### tc-blh-w1 implementation (2026-06-02)

Mechanisms wired in `fo-fix-toCanvas.js` (`rasterOnlySvgPatch` → `src/exporters/rasterOnlySvgPatch.js`) and capture flags (`experimentalFoPinLineHeightOnTextLeaf`, `experimentalFoTextBaselineFix`, `experimentalRasterSvgPatch` enum — all default off):

| Recipe | Mechanism | canvasΔ | svgΔ |
|--------|-----------|--------:|-----:|
| `product-baseline` | none | **2.797** | −0.008 |
| `tc-blh-w1-pin-lh-used-value` | capture pin used lh px | 2.797 | −0.008 |
| `tc-blh-w1-rfork-lh-used` | rfork pin-lh-leaf | 2.797 | −0.008 |
| `tc-blh-w1-combo-capture-rfork-pin-lh` | dual capture+rfork pin | 2.797 | −0.008 |
| `tc-fork-w1-inject-fo-lh-pin` | rfork global fo-lh-pin | 2.797 | −0.008 |
| `tc-blh-w1-rfork-flex-start-fo` | rfork `foreignObject{align-items:flex-start}` | 2.797 | −0.008 |
| `tc-blh-w1-rfork-lh-normal-leaf` | rfork lh:normal | 3.797 | −0.008 |
| `tc-blh-w1-rfork-lh-1-leaf` / `lh-1em-leaf` | strut neutralize | 3.797 | −0.008 |
| `tc-blh-w1-rfork-vertical-align-baseline` | va:baseline + display:inline | −10.203 | −0.008 |
| `tc-blh-w1-rfork-combo-lh-baseline` | pin lh + baseline inline | −12.203 | −0.008 |

Headed matrix @ dpr=1 mini-nav Home. Products nav identical per [`drift-per-landmark.json`](../.sandbox-edit/drift-per-landmark.json).

### tc-blh-w2 meta/linebox (2026-06-02)

Patches in `rasterOnlySvgPatch.js` (`lh-meta-leaf`, `text-leaf-inline-block-linebox`, `combo-meta-lh-flex-start-fo`, `strut-translate-y-meta`, …) use live `lhStrut*` meta from `fo-fix-lab-runner.js` → `fo-fix-toCanvas.js` raster fork.

| Recipe | Mechanism | canvasΔ | svgΔ |
|--------|-----------|--------:|-----:|
| `tc-blh-w2-rfork-lh-meta-leaf` | meta lh pin at decode | **2.797** | −0.008 |
| `tc-blh-w2-rfork-chromium-copy-lh-baseline` | kerning + meta lh + baseline | **2.797** | −0.008 |
| `tc-blh-w2-rfork-strut-translate-y-meta` | half-leading translate from meta | **5.797** | −0.008 |
| `tc-blh-w2-rfork-inline-block-linebox` | inline-block height = lh px | **−11.203** | −0.008 |

**Next:** FO internal paint-origin autopsy at decode (not more lh-pin recipes).


---

## BITMAP_ONLY (text ink)

Three-way ink on mini Home (`product-baseline`, headed Chrome):

| Leg | topInBorder (approx) | Δ vs live |
|-----|---------------------:|----------:|
| Live Range | 14.203 px | — |
| Serialized / inline FO | 14.195 px | **−0.008 px** |
| Canvas bitmap | 17.0 px @ dpr=1 · 17.5 px @ dpr=2 | **+2.797 / +3.297 px** |

**BITMAP_ONLY:** markup and inline FO measurement match live; **`Image.decode()` → `drawImage()`** does not.

Sources: [`raster-vs-svg-ink-probe.json`](../.sandbox-edit/raster-vs-svg-ink-probe.json), [`path-ab-same-svg.json`](../.sandbox-edit/path-ab-same-svg.json), [`text-leaf-probe.json`](../.sandbox-edit/text-leaf-probe.json).

---

## Fixture anatomy (mini nav Home)

Typical **flex stretch** nav text leaf (`<a>` in `display:flex; align-items:stretch`):

| Metric | Value | Notes |
|--------|------:|-------|
| `font-size` | 16 px | |
| `line-height` (computed) | 21.6 px | unitless **1.35** |
| **Flex anchor GBCR height** | 48 px | stretch cross-size |
| **Content box (stretch)** | 48 px | |
| **Half-leading `(lh − fs) / 2`** | **2.8 px** | best correlate to canvas offset |
| **Half-strut `(contentBox − lh) / 2`** | **13.2 px** | stretch slack — **not** canvas Δ |
| Live Range painted top in border | ~14.203 px | |
| Canvas painted top @ dpr=2 | ~17.5 px | |

---

## Parent vs leaf line-height

Two different “line-height” numbers on stretch nav — **do not conflate**:

| Name | Home (mini) | What it is |
|------|-------------|------------|
| **Leaf computed lh** | **21.6px** | CSS line box for 16px text — **serialized correctly** |
| **Used / layout line box** | **48px** | Flex-stretched link height — anchor GBCR |
| **Probe `halfLeadingLhFsPx` in some drift JSON** | **16** | Half of **48px** box in stretch probes — **not** `(lh−fs)/2` (**2.8px**) |

**Parent vs child:** lh is set on the `<a>` (flex item); text leaf inherits **21.6px** used value. Stretch grows the **used line box** to **48px** without changing serialized lh on the text strut that matches live ink.

**Flex-coupling hypothesis — falsified:**

| Fixture | canvasΔ @ dpr=2 | svgΔ | Verdict |
|---------|----------------:|-----:|---------|
| typography-no-flex | **+3.5 px** | 0 | `GENERIC_FO_RASTER_BUG` |
| mini-nav flex-stretch | **+3.297 px** | ≈ 0 | reference |

Source: [`typography-no-flex.json`](../.sandbox-edit/typography-no-flex.json).

---

## Line-height sweep results

Headed sweep on live Home + matching FO inject ([`line-height-sweep.json`](../.sandbox-edit/line-height-sweep.json) @ dpr=1, `product-baseline`):

| lh variant | liveVsCanvas | liveVsSvg | Notes |
|------------|-------------:|----------:|-------|
| **from-live / 21.6px** | **3.297** (dpr=2 class) / **2.797** @ dpr=1 | ≈ 0 | Baseline strut |
| **1.35** (unitless) | same class | ≈ 0 | Equivalent to live |
| **normal** | **3.5** | 0 | Worse canvas, svg still OK |
| **1** | shifts canvas | svg may move | Strut collapse experiment |
| **48px** | **+1 px** vs 21.6 | small svg drift | Stretch-height lh — raster knob |

**Takeaway:** wrong lh can **move canvas ~1 px** or worse; **correct live lh does not close** the ~2.8 px plateau. lh is a **raster sensitivity**, not an svg serialization bug.

Run: `node __localtests__/fo-text-baseline-lh-matrix.mjs` (writes `.sandbox-edit/line-height-sweep.json`).

---

## Flex `align-items` experiments

| Experiment | Mechanism | canvasΔ | Promotable? |
|------------|-----------|--------:|:-----------:|
| `tc-fork-w1-inject-flex-center` | decode-only `align-items:center` | **−12.203** | No — layout break |
| `experimentalFoFlexRowCenter` | capture FO flex center | **13.203** | No — regress |
| `tc-blh-w1-rfork-flex-start-fo` | decode `align-items:flex-start` on FO | **2.797** | No — tie |
| `align-self:flex-start` / baseline bundles | capture + raster | **2.797** | No |

Stretch is a **common** trigger; **counter-stretch at decode** does not fix bitmap strut paint without breaking layout.

Sources: [`raster-fork-wave1.json`](../.sandbox-edit/raster-fork-wave1.json), [`experimental-flags-matrix.json`](../.sandbox-edit/experimental-flags-matrix.json).

---

## Serialized vs computed lh audit

| Check | Result |
|-------|--------|
| Live `getComputedStyle(line-height)` on text leaf | **21.6px** used |
| Serialized inline / FO style | **21.6px** (or equivalent unitless 1.35) |
| SVG painted ink vs live | **−0.008 px** |
| Pin lh capture flag | Redundant — **0 px** svg change |
| Raster fork `inject-fo-lh-pin` | **0/100k** pixels vs baseline ([`raster-fork-pixel-diff.json`](../.sandbox-edit/raster-fork-pixel-diff.json)) |
| Decode-only lh inject | Moves **canvas** ~1 px; svg leg flat at correct lh ([`line-height-decouple.json`](../.sandbox-edit/line-height-decouple.json)) |

**Conclusion:** the ~2.8 px gap is **not** “wrong lh in SVG” — it is **FO decode bitmap paint** vs inline FO / live Range.

Supporting probes: [`text-baseline-lh-probe.json`](../.sandbox-edit/text-baseline-lh-probe.json), [`text-baseline-lh-correlation.json`](../.sandbox-edit/text-baseline-lh-correlation.json), [`fo-computed-style-stages.json`](../.sandbox-edit/fo-computed-style-stages.json) (if present in `.sandbox-edit`).

---

## Half-leading theory

### Definitions

```
halfLeadingLhFs   = (lineHeightPx − fontSizePx) / 2     # e.g. (21.6 − 16) / 2 = 2.8
halfStrutContent  = (contentBoxPx − lineHeightPx) / 2  # e.g. (48 − 21.6) / 2 = 13.2  (stretch)
```

### Correlation vs canvas offset (dpr=2 Home)

| Metric | Value | \|canvasOffset − metric\| |
|--------|------:|----------------------------:|
| **`(lh − fs) / 2`** | **2.8 px** | **0.497 px** ← closest |
| cap-model half-leading | 1.8 px | 1.497 px |
| **`(contentBox − lh) / 2`** | 13.2 px | 9.903 px ← ruled out |

Source: [`line-box-strut-math.json`](../.sandbox-edit/line-box-strut-math.json).

### Fractional truncation — weak

[`text-baseline-lh-correlation.json`](../.sandbox-edit/text-baseline-lh-correlation.json): **r(canvasΔ, truncationError) ≈ 0.008**; **r(canvasΔ, halfLeadingLhFs) ≈ 0.891**.

Harness-only: `debug-half-leading-neutralize` in `fo-recipes-shards/recipes-debug-half-leading-probe.js` — never promote.

---

## Per-landmark variance

| Landmark | Fixture | liveVsCanvasTopPx | liveVsSvgTopPx |
|----------|---------|------------------:|---------------:|
| Home, Products | mini-nav | **2.797** | −0.008 |
| Home, Products | checkout nav | **2.797** | 0 |
| Email, Full name | checkout labels | **2.5** | 0 |

Nav: **constant_offset** spread 0 ([`checkout-landmark-scan.json`](../.sandbox-edit/checkout-landmark-scan.json)). Cap-model metrics **vary** — see [WHY-DRIFT-VARIES.md](../.sandbox-edit/WHY-DRIFT-VARIES.md).

---

## TEXT_ONLY_RASTER

[`text-vs-block-probe.json`](../.sandbox-edit/text-vs-block-probe.json): solid block svgΔ **0**; text leaf canvas≠svg. Drift is **text raster / strut class**, not FO global translate.

---

## Text-only principle

The **+2.797 px** canvas plateau is a **text strut / line-box paint** bug at FO→bitmap. Non-text recipes (decode, backing, GBCR nudge) tie at **2.797** because they do not restack text layout inside FO decode.

| Mechanism | canvasΔ | Fork / notes |
|-----------|--------:|--------------|
| Decode, backing, viewBox | **2.797** | Non-text — ruled out |
| `pin-lh-leaf` / capture lh pin | **2.797** | **No-op** — lh already **21.6px** in SVG |
| `lh-normal-leaf` rfork | **2.797** or worse | CSS inject runs; still no svg↔canvas closure |
| vdrift / GBCR nudge | **1.797** | Blit only — not strut fix |

**Text-only matrix** (fork audit: live lh, fork no-op vs inject):

```bash
node __localtests__/fo-fix-lab.mjs --matrix --text-only --open-browser
```

See [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) § Text-only principle.

---

## Lab recipes: `tc-blh-w1-*` and `tc-fork-w1-*`

**Wave 1 text baseline** (`recipes-tocanvas-text-baseline-wave1.js`):

| Recipe id | Mechanism |
|-----------|-----------|
| `tc-blh-w1-pin-lh-used-value` | Capture: `experimentalFoPinLineHeightOnTextLeaf` |
| `tc-blh-w1-lh-normal-leaf` / `lh-1-leaf` / `lh-fontsize-px` | Capture FO CSS on structural text leaves |
| `tc-blh-w1-vertical-align-baseline` | Capture: va baseline + inline |
| `tc-blh-w1-rfork-*` | Decode-only patches via `rasterOnlySvgPatch` |
| `tc-blh-w1-combo-capture-rfork-*` | Dual capture + raster fork |

**Wave 1 raster fork** (`recipes-tocanvas-raster-fork-wave1.js`):

| Recipe id | Patch slug |
|-----------|------------|
| `tc-fork-w1-inject-fo-lh-pin` | lh pin at decode (no-op vs capture) |
| `tc-fork-w1-inject-flex-center` | flex center — **regress** |
| `tc-fork-w1-viewbox-int-floor` | int viewBox floor |
| `tc-fork-w1-fo-y-nudge` | FO y +1px — worse |
| `tc-fork-w1-root-height-48` | root height experiment |
| `tc-fork-w1-combo-lh-center` | lh + center — **regress** |

```bash
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*'
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-fork-w1-*'
```

Batch lh fix probe: [`lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json) — all FO-raster lh recipes **tie 2.797** except `lh-normal-leaf` **worse (3.797)**.

---

## Preferred edit surface: `fo-fix-toCanvas.js`

**Promote to `src/exporters/toCanvas.js` only after headed matrix proof** ([`no-speculative-src-edits`](../.cursor/rules/no-speculative-src-edits.mdc)).

| Entry | Purpose |
|-------|---------|
| `toCanvas(url, options)` | Lab fork of product raster — opt in via `rasterPatch: 'lab-toCanvas'` |
| `harnessProductToCanvasToLabOpts(harness)` | Maps `experimentalRaster*` product flags → `labToCanvasOpts` |
| `labToCanvasOpts.rasterOnlySvgPatch` | Decode-time SVG string patch (`applyRasterOnlySvgPatch`) |
| `labToCanvasOpts.disableGbcrFracNudge` | Reveal full **2.797** class error |
| `labToCanvasOpts.decodeSettle` / `decodeDouble` | Timing experiments |
| `labToCanvasOpts.inkAlign` / `vDriftFix` | Blit-offset diagnostics (not structural fixes) |
| `buildLabLhFoCss()` / `computeHalfLeadingLhFs()` | lh experiment helpers |
| `attachLabLhDiagnostics()` | `data-*` on canvas for post-mortem |
| `labToCanvasOpts.debugLh` / `--debug-lh` | Fork hash trace, decode timing, ink row profile (`dataset.lab*`) |
| `auditSerializedFoLineHeight()` | Inline vs class-rule lh on FO text leaves |
| `probeFoInternalComputedLhAtDecode()` | Iframe FO mount — computed lh inside serialized FO |
| `scanCanvasInkRowProfile()` | Per-row dark fraction — sharp-step vs gradual-ramp |
| `buildLabRasterForkTrace()` | pre/post/decode SVG hashes |

Product mirror: `src/exporters/rasterOnlySvgPatch.js` for `experimentalRasterSvgPatch` enum values (`pin-lh-leaf`, `fo-lh-pin`, …).

Manual lab URL: `fo-fix-lab.html?labToCanvas=1` when recipe has no other `rasterPatch`.

---

## Fix attempts (text / lh / strut) — all NOT FIXED

| Attempt | canvasΔ @ dpr=1 | Promotable? |
|---------|----------------:|:-----------:|
| `product-baseline` | **2.797** | control |
| All `tc-blh-w1-*` (pin, rfork, combos) | **2.797** | No |
| All `tc-fork-w1-*` lh-related | **2.797** or regress | No |
| `experimentalFoPinLineHeightFromLive` | 2.797 | No |
| Leading-trim / text-box-edge | 2.797 | No |
| ink-meta-align | −2.203 overshoot | No |
| vdrift / `gbcrFracY` | 1.797 partial | No |
| SVG-text / fillText | low canvasΔ | **No — prohibited** |

---

## Experimental flags (default off)

All flags flow through `snapdom(el, opts)` → `createContext` → `captureDOM` / `toCanvas`. **No behavior change when omitted.**

**Text leaf** = structural (`childElementCount === 0`, non-empty trimmed `textContent`). Line-height px from live `getComputedStyle`, not hard-coded nav values.

### Capture (`styles.js` / `capture.js`)

```javascript
await snapdom.toCanvas(navLink, {
  experimentalFoPinLineHeightOnTextLeaf: true,
  experimentalFoTextLineHeightNormal: true,
  experimentalFoTextBaselineFix: true,
  experimentalFoTextLayout: true,
})
```

| Flag | Effect |
|------|--------|
| `experimentalFoPinLineHeightOnTextLeaf` | Serialize `line-height` as live used px on text leaves |
| `experimentalFoTextLineHeightNormal` | Serialize `line-height: normal` on text leaves |
| `experimentalFoTextBaselineFix` | `vertical-align: baseline`, `display: inline`, used px `line-height` |
| `experimentalFoTextLayout` | Global structural FO CSS bundle |

### Raster (`toCanvas.js` / `rasterOnlySvgPatch.js`)

```javascript
await snapdom.toCanvas(navLink, {
  experimentalRasterSvgPatch: 'pin-lh-leaf',
  experimentalRasterBackingCeil: true,
  experimentalRasterDecodeSettle: true,
  experimentalRasterDisableGbcrNudge: true,
  experimentalRasterNaturalDims: true,
})
```

| `experimentalRasterSvgPatch` | Decode-time patch |
|------------------------------|-------------------|
| `pin-lh-leaf` | Re-assert used lh px per text leaf |
| `lh-normal-leaf` | `line-height: normal` on text leaves |
| `baseline-leaf` | `vertical-align: baseline` on text leaves |
| `combo-lh-baseline` | lh + va baseline on text leaves |
| `fo-lh-pin` | Global FO lh pin at decode |

Dual pin example:

```javascript
await snapdom.toCanvas(el, {
  experimentalFoPinLineHeightOnTextLeaf: true,
  experimentalRasterSvgPatch: 'pin-lh-leaf',
})
```

---

## Open questions

1. Where inside Chromium FO bitmap paint does **~3 px** originate — strut top vs glyph origin vs FO viewport clip?
2. Why does **lh inject move canvas ~1 px** without moving svg leg?
3. Can **svg↔canvas** collapse without `drawImage` nudges, ink-meta, or text bypass?
4. How do **lab +2.797** and **blackbox −0.91** relate? (N5)

---

## Deep probe v2 (headed, 2026-06-02)

Runner: [`fo-lh-deep-probe-v2.mjs`](fo-lh-deep-probe-v2.mjs) + [`fo-lh-deep-probe-v2.html`](fo-lh-deep-probe-v2.html). Lab hooks in [`fo-fix-toCanvas.js`](fo-fix-toCanvas.js): `computeHalfLeadingLhFs`, `buildLabLhFoCss`, `attachLabLhDiagnostics` (+ `labToCanvasOpts.lhStrutDiagnostics`).

### Half-leading strut — confirmed at declared lh, not at stretch layout lh

| lh variant | computed lh | ½(lh−fs) | layout box | svgΔ | canvasΔ @ dpr=1 | residual (canvasΔ−½lh) |
|------------|------------:|---------:|-----------:|-----:|----------------:|------------------------:|
| **1.35** | 21.6 px | **2.8** | 48 px | 0 | **2.797** | **−0.003** |
| **21.6px** | 21.6 px | **2.8** | 48 px | 0 | **2.805** | +0.005 |
| inherit / from-live | 21.6 px | **2.8** | 48 px | −0.008 | **2.797** | −0.003 |
| **1** / **1em** | 16 px | 0 | 48 px | 0 | **3.5** | +3.5 |
| **normal** | normal→48 layout | 16† | 48 px | 0 | **3.5** | −12.5 |

†Layout-inflated half-leading; canvas does **not** follow it.

**Verdict:** FO→bitmap offset tracks **computed** `(line-height − font-size) / 2` when lh resolves to **21.6 px** (within **0.01 px**). When lh collapses to 16 px or `normal` under flex stretch, canvasΔ **plateaus ~3.5 px** — weak sweep correlation (r≈0.25) is an artifact of that plateau, not refutation at 1.35.

Source: [`.sandbox-edit/line-height-sweep-v2.json`](../.sandbox-edit/line-height-sweep-v2.json). @ dpr=2, lh=1.35 → canvasΔ **3.297** (+0.5 vs dpr=1) — GBCR/blit layer ([`.sandbox-edit/line-height-sweep-v2-dpr2.json`](../.sandbox-edit/line-height-sweep-v2-dpr2.json)).

### Parent vs leaf lh — who controls FO strut?

| lhOn | lh | parent computed | leaf computed | canvasΔ |
|------|-----|-----------------|---------------|--------:|
| leaf | 1.35 | 21.6 px | 21.6 px | **2.797** |
| parent | 1.35 | 21.6 px | 21.6 px | **2.797** |
| leaf | normal | 21.6 px‡ | normal | **3.5** |
| parent | normal | normal | normal | **3.5** |

‡Parent still 21.6 from fixture `font` shorthand when only leaf set `normal`.

**Verdict:** Parent vs leaf placement **does not change** raster drift when computed lh matches.

Source: [`.sandbox-edit/parent-leaf-lh-v2.json`](../.sandbox-edit/parent-leaf-lh-v2.json).

### Flex `align-items` vs layout box height

| align-items | leaf GBCR h | svgΔ | canvasΔ | residual |
|-------------|------------:|-----:|--------:|---------:|
| stretch | 48 | −0.008 | **2.797** | −0.003 |
| center | 21.6 | 0 | **2.797** | −0.003 |
| flex-start | 21.6 | 0 | **3.0** | +0.2 |
| baseline | 21.6 | 0 | **3.0** | +0.2 |

Source: [`.sandbox-edit/flex-lh-decouple-v2.json`](../.sandbox-edit/flex-lh-decouple-v2.json).

### Serialized FO vs live computed lh

FO `<a>` inline `style` has **no `line-height`** (lh from FO stylesheet). svgΔ ≈ 0; canvasΔ **2.797**. Source: [`.sandbox-edit/fo-lh-serialized-v2.json`](../.sandbox-edit/fo-lh-serialized-v2.json).

### Trim / font metrics

leading-trim and text-box-trim: **no change** ([`.sandbox-edit/trim-dpr-v2.json`](../.sandbox-edit/trim-dpr-v2.json)). `measureText` ascent → ~**2.93 px** vs live top; canvasΔ still **2.797** ([`.sandbox-edit/font-metrics-v2.json`](../.sandbox-edit/font-metrics-v2.json)).

### tc-blh-w1 matrix — still tied

[`lh-fix-results.json`](../.sandbox-edit/lh-fix-results.json): dual capture+raster lh pin **2.797** @ dpr=1.

### Recommended next experiment

FO decode **paint-origin autopsy** (CDP) on non-stretch row (`align-items: center`, 21.6 px leaf) where canvasΔ ≈ half-leading; structural FO clip to line-height box — not magic translate. Wire `labToCanvasOpts.lhStrutDiagnostics` + runner `meta.lhStrutHalfLeadingPx`.

### Wave1 matrix + flex decouple refresh (2026-06-02)

Headed re-run of v1 runners (same conclusions as v2 above; separate JSON for diffing):

| Artifact | Runner |
|----------|--------|
| [`.sandbox-edit/line-height-sweep.json`](../.sandbox-edit/line-height-sweep.json) | [`fo-text-baseline-lh-matrix.mjs`](fo-text-baseline-lh-matrix.mjs) |
| [`.sandbox-edit/line-height-sweep-dpr2.json`](../.sandbox-edit/line-height-sweep-dpr2.json) | same, `--dpr 2` |
| [`.sandbox-edit/flex-lh-decouple.json`](../.sandbox-edit/flex-lh-decouple.json) | [`fo-flex-lh-decouple.mjs`](fo-flex-lh-decouple.mjs) |
| [`.sandbox-edit/flex-align-lh-probe.json`](../.sandbox-edit/flex-align-lh-probe.json) | [`fo-flex-align-lh-probe.mjs`](fo-flex-align-lh-probe.mjs) |
| [`.sandbox-edit/parent-leaf-lh-probe.json`](../.sandbox-edit/parent-leaf-lh-probe.json) | [`fo-parent-leaf-lh-probe.mjs`](fo-parent-leaf-lh-probe.mjs) |
| [`.sandbox-edit/tc-lh-wave1-matrix.json`](../.sandbox-edit/tc-lh-wave1-matrix.json) | [`tc-lh-wave1-matrix.mjs`](tc-lh-wave1-matrix.mjs) (38 recipes via [`tc-lh-wave1-probe.html`](tc-lh-wave1-probe.html)) |

**flex-lh-decouple** (parent 48px stretch constant): leaf lh **16/32/48/normal/1** → canvasΔ **3.5**; **21.6px / 1.35** → **2.797–2.805**. Confirms raster tracks **computed strut lh**, not parent GBCR.

**tc-lh-wave1-matrix:** all capture/rfork **pin-lh** and dual-pin rows tie **2.797**; **lh-normal / lh-1 / lh-1em** → **3.797**; **va-baseline / display:inline** → layout break (−10 to −12 px). **No promotable** row beats `product-baseline`.

---

## Debug lh v3 (2026-06-02)

Headed probes explaining **why lh recipes tie at 2.797 px**:

```bash
npm run compile
node __localtests__/fo-lh-debug-v3-probe.mjs --dpr 1 --compare-checkout
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*' --debug-lh --open-browser
```

Artifacts: [`.sandbox-edit/lh-debug-v3.json`](../.sandbox-edit/lh-debug-v3.json), [`.sandbox-edit/fo-serialized-lh-audit.json`](../.sandbox-edit/fo-serialized-lh-audit.json).

| Probe | Finding (dpr=1 mini Home) |
|-------|---------------------------|
| **Serialized lh audit** | Leaf inline `line-height:normal`; effective **21.6px** from class `.c1` — matches live. `lh-used-leaf` rfork reads inline only → **no-op**. |
| **Raster fork verify** | `inject-fo-lh-pin` changes SVG but **0 bitmap pixel diff** — fork works; lh already correct in FO. |
| **Ink row profile** | **gradual-ramp** across lh variants — anti-aliased glyph top, not one strut row. |
| **Timing sweep** | decode-settle / fonts.ready / wait-200 — **0 px** canvasΔ spread. |
| **Parent chain** | nav stretch 48px; `<a>` flex+center; lh **21.6px** at all levels. |
| **lh-normal recipes** | canvasΔ **3.797** (worse) — breaks class lh without fixing bitmap. |
| **Checkout vs mini** | Both nav **2.797** (`compareCheckout` in lh-debug-v3.json). |

**Best next experiment:** FO clip to line-height box at decode (Round 4 top fix) — see [`README-FO-RASTER-RESEARCH.md`](README-FO-RASTER-RESEARCH.md) § Research Round 4.

---

## Research Round 4 cross-ref (2026-06-02)

Probe: `node __localtests__/fo-research-round-4-probe.mjs` → `.sandbox-edit/research-round-4-*.json`.

| Finding | Detail |
|---------|--------|
| **modern-screenshot** | canvasΔ **2.797 px** — identical to snapdom (Chromium class bug) |
| **FO y+1px** | canvasΔ **+1 px** — 2.797 is internal strut paint, not FO rect alone |
| **font-display / fallback** | 0 px spread |
| **strut CSS** (::first-line, line-box-contain, initial-letter) | 0 px spread |
| **Minimal repro** | bare-span ~**3 px**; exact **2.797** on stretch/center nav link only |

---

## Commands

```bash
npm run compile
node __localtests__/fo-research-win-probe.mjs
node __localtests__/fo-lh-deep-probe-v2.mjs
node __localtests__/fo-text-baseline-lh-matrix.mjs
node __localtests__/fo-text-baseline-lh-matrix.mjs --dpr 2 --json .sandbox-edit/line-height-sweep-dpr2.json
node __localtests__/fo-flex-lh-decouple.mjs
node __localtests__/fo-flex-align-lh-probe.mjs
node __localtests__/fo-parent-leaf-lh-probe.mjs
node __localtests__/fo-text-baseline-lh-probe.mjs
node __localtests__/tc-lh-wave1-matrix.mjs
npm run debug:tc-blh-w1-matrix
npm run debug:tc-flags-w3-matrix
node __localtests__/fo-raster-vs-svg-ink-probe.mjs
node __localtests__/fo-path-ab-probe.mjs
node __localtests__/fo-text-vs-block-probe.mjs
node __localtests__/fo-typography-no-flex.mjs
node __localtests__/line-box-strut-math.mjs
node __localtests__/line-height-decouple.mjs
node __localtests__/fo-drift-per-landmark.mjs
node __localtests__/fo-raster-fork-pixel-diff.mjs
node __localtests__/fo-lh-debug-v3-probe.mjs
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-blh-w1-*,tc-text-w1-*,product-baseline' --debug-lh --open-browser
```

**Never use `HEADLESS=1`** for ink promotion. **Never** rank `--include-text-bypass` for `src/` promotion unless the user explicitly requests bypass diagnostics.
