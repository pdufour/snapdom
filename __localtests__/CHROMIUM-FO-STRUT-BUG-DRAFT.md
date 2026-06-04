# Chromium bug draft — SVG `foreignObject` text bitmap omits half-leading strut

**Status:** Ready to file — **no exact open Chromium dup** (upstream search **2026-06-02**, research round 8).  
**Component suggestion:** Blink>Layout>Inline, Blink>Layout>SVG, Blink>Paint>SVG  
**Severity:** Normal (DOM→canvas / FO capture parity for flex+text)  
**Repro engine:** Headed **Google Chrome** or **Chromium** — FO→bitmap ink unreliable headless.

**Verified Chrome build (local):** **148.0.7778.216** (`Google Chrome 148.0.7778.216`) · UA `Chrome/148.0.0.0` in probes.

---

## Summary

When an SVG containing XHTML in `<foreignObject>` is rasterized via `HTMLImageElement` + `Image.decode()` + `CanvasRenderingContext2D.drawImage()`, **text ink is painted ~`(line-height − font-size) / 2` lower** than:

1. The same text measured in live DOM (`Range` painted top in border box), and  
2. The same SVG string measured **inline** (mounted FO / hidden DOMParser, no decode).

**snapdom**, **modern-screenshot**, and a **hand-built static FO SVG** all report the same **canvasΔ** — **not library-specific** (engine class).

---

## Minimal repro files (no snapdom)

**Primary filing attachment** — attach `chromium-fo-strut-repro.svg` from this folder:

| File | Role |
|------|------|
| [`chromium-fo-only/chromium-fo-strut-repro.svg`](chromium-fo-only/chromium-fo-strut-repro.svg) | **572 B** standalone FO+flex+`font:600 16px/1.35` — attach to bug |
| [`chromium-fo-only/chromium-fo-strut-repro.html`](chromium-fo-only/chromium-fo-strut-repro.html) | Filing page: steps, expected/actual table, JSON three-way ink |
| [`chromium-fo-only/minimal-nav-fo-raster.html`](chromium-fo-only/minimal-nav-fo-raster.html) | Interactive raster + canvas preview |
| [`chromium-fo-only/chromium-fo-only-shared.js`](chromium-fo-only/chromium-fo-only-shared.js) | Ink + raster helpers (no product imports) |
| [`fixtures/chromium-fo-strut-repro.svg`](fixtures/chromium-fo-strut-repro.svg) | Mirror copy (same bytes as `chromium-fo-only/`) |
| [`fo-chromium-class-probe.html`](fo-chromium-class-probe.html) | Class compare: hand-built / snapdom / modern-screenshot |

---

## Steps to reproduce (headed)

1. **Chrome version:** open **`chrome://version`** — attach full string (e.g. `148.0.7778.216`).  
2. **Serve repo root:**
   ```bash
   node __localtests__/local-http-server.mjs
   ```
3. **Open filing page** (HTTP required for ES modules):
   ```
   http://127.0.0.1:<port>/__localtests__/chromium-fo-only/chromium-fo-strut-repro.html?dpr=1
   ```
   - Optional: `?svg=file` loads committed `chromium-fo-strut-repro.svg` instead of inline builder.  
   - Page prints JSON: **live / svg / canvas** painted tops and **canvasΔ**.  
4. **Automated class probe** (headed, optional for filing):
   ```bash
   npm run debug:fo-chromium-class-probe
   node __localtests__/fo-chromium-class-probe.mjs --channels chrome,chromium
   ```
   Artifacts: [`.sandbox-edit/chromium-fo-class-probe.json`](../.sandbox-edit/chromium-fo-class-probe.json), [`.sandbox-edit/chromium-fo-only-probe.json`](../.sandbox-edit/chromium-fo-only-probe.json)

**Fixture:** flex row `align-items: stretch`, `min-height: 48px`, link `display:flex; align-items:center`, text **`font: 600 16px/1.35`** → used `line-height` **21.6px**.

---

## Expected vs actual

| Stage | Expected | Actual (headed Chrome 148 @ dpr=1) |
|-------|----------|-------------------------------------|
| Serialized / inline FO vs live | Sub-pixel match | **svgΔ ≈ 0 px** ✓ |
| FO decode bitmap vs live | Same as inline FO | **canvasΔ ≈ +2.797 px** ✗ |
| FO decode bitmap vs inline FO | ~0 px | **svg↔canvas ≈ +2.805 px** ✗ |
| Half-leading `(lh−fs)/2` | Explains offset | **2.8 px**; residual **−0.003 px** |

**Classification:** **BITMAP_ONLY** — markup/layout in FO match live; error is **FO→bitmap paint origin** (top half-leading strut missing above glyphs).

---

## Evidence table (not snapdom-specific)

Headed probes @ mini flex nav landmark **Home**, **dpr=1**, **16px / lh 1.35**, Chrome **148**:

| Reproducer | canvasΔ (px) | svgΔ (px) | Notes |
|------------|-------------:|----------:|-------|
| Hand-built static FO | **2.797** | **0** | No capture library |
| snapdom `product-baseline` | **2.797** | **−0.008** | Serialization OK |
| modern-screenshot `domToCanvas` | **2.797** | — | Same Chromium class |
| w7 `fo-y-half-leading-meta` (FO `y` −2.8) | **~0.203** | **0** | Workaround only — documents mechanism |
| Typography no-flex bare span | **~3.0** | ≈ 0 | Flex not required |
| Path A/B (one SVG string) | **+2.805** svg↔canvas | — | Drift at decode only |
| snapdom lab toCanvas vs chromium-only raster (same SVG bytes) | **0 px** ΔcanvasΔ | — | Round 5 — snapdom adds no decode offset |

Sources: `.sandbox-edit/chromium-fo-class-probe.json`, `.sandbox-edit/chromium-fo-only-probe.json`, `research-round-5-decode-layer.json`, `research-round-4-modern-screenshot.json`, `minimal-repro.json`, `root-cause-dpr1.json`.

---

## Chrome vs Chromium channel

```bash
node __localtests__/fo-chromium-class-probe.mjs --channels chrome,chromium
```

**Expected for filing:** identical **hand-built canvasΔ** within **< 0.08 px** on both channels → **Blink engine bug**, not Chrome-packaging-only.

If spread ≥ 0.08 px, note both `chrome://version` strings in the bug.

---

## CSS / DOM factors (Chromium docs + round-4)

Decode-time CSS injected on `foreignObject *` @ dpr=1 — **canvasΔ spread** from baseline:

| Factor | canvasΔ spread @ dpr=1 | Verdict |
|--------|------------------------|---------|
| `text-rendering`: geometricPrecision / optimizeLegibility / optimizeSpeed | **0 px** | Not root cause |
| `direction: rtl` | **0 px** | Not root cause |
| `writing-mode: vertical-lr` | **0 px** (when ink readable) | Not root cause |
| `leading-trim` / `text-box-trim` / `::first-line` / `line-box-contain` | **0 px** | Does not fix FO bitmap strut paint |
| FO `x`/`y`/`width`/`height` floor/ceil | **0 px** | Subpixel FO attrs not sole cause |
| `font-display` / `fonts.ready` timing | **0 px** | Decode context invariant |

Probe: `fo-chromium-class-probe` → `cssDomFactorsSummary`; round-4: `research-round-4-full.json` § `strutCss`, `writingMode`.

**Note:** `text-box-trim` / `text-box-edge` ([crbug/1411581](https://issues.chromium.org/issues/1411581)) trim **used** line boxes in layout; they do **not** realign FO **bitmap** paint with inline FO in our decode tests.

---

## Workaround (lab only — documents mechanism)

Lab raster fork **`fo-y-half-leading-meta`** (product `experimentalRasterSvgPatch: 'fo-y-half-leading-meta'`, default **off**):

- Shifts `<foreignObject>` **`y` by −½(lh−fs)** from live text-leaf meta before decode.  
- canvasΔ **2.797 → ~0.203 px** on flex mini-nav (integer ink scan); **0.000 px** on typography-no-flex.  
- Confirms missing strut is **FO element paint origin**, not wrong `line-height` in serialized CSS (lh re-pin changes **0** bitmap bytes).

---

## DPR

| dpr | canvasΔ (baseline) |
|----:|-------------------:|
| 1 | **2.797 px** |
| 2 | **3.297 px** (+0.5 px device slack) |

Probe: `node __localtests__/fo-dpr-sweep-probe.mjs` → `.sandbox-edit/fo-dpr-sweep-probe.json`

---

## Blink LayoutNG strut / half-leading (conceptual)

LayoutNG places each inline line in a **line box** whose height equals the used **line-height**. Content is vertically centered within that box via **half-leading** struts above and below the font content area:

```
┌──────────────── line box (lh = 21.6px) ────────────────┐
│  half-leading top  (lh−fs)/2 ≈ 2.8px                 │
│  ┌──────────── font content (fs = 16px) ──────────┐  │
│  │  glyphs (Range ink band)                        │  │
│  └────────────────────────────────────────────────┘  │
│  half-leading bottom                                   │
└────────────────────────────────────────────────────────┘
```

- Live `Range.getBoundingClientRect()` and **inline FO** (no Image decode) agree — svgΔ ≈ 0.
- **FO decode bitmap** shifts ink down by ~**(lh−fs)/2** — consistent with compositing that uses a paint origin **without** the top half-leading strut (content-box top vs line-box top).
- w7 lab fork shifts FO `y` by −½(lh−fs) → canvasΔ **2.797 → 0.203** — confirms **paint origin**, not wrong serialized `line-height`.

**Spec / explainer:** [CSS Inline Layout — line box](https://www.w3.org/TR/css-inline-3/#line-box) · [Smashing Magazine — half-leading in CSS](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/) · [MDN alignment-baseline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/alignment-baseline)

---

## Upstream references

### Chromium source (LayoutNG / paint bridge)

| Area | Path (chromium/src) |
|------|---------------------|
| FO layout (LayoutNG) | `third_party/blink/renderer/core/layout/ng/svg/layout_ng_svg_foreign_object.cc` |
| FO layout (legacy header) | `third_party/blink/renderer/core/layout/svg/layout_svg_foreign_object.h` |
| FO paint bridge | `third_party/blink/renderer/core/paint/svg_foreign_object_painter.cc` |
| Inline line box / strut | `third_party/blink/renderer/core/layout/ng/inline/` (line box, half-leading) |

Overview: [Grida — Chromium SVG foreignObject](https://grida.co/docs/wg/research/chromium/svg/use-and-foreign-object).

### modern-screenshot (same FO path)

| Resource | URL |
|----------|-----|
| Repo | https://github.com/qq15725/modern-screenshot |
| FO conversion | https://github.com/qq15725/modern-screenshot/blob/master/src/converts/dom-to-foreign-object-svg.ts |
| Float precision (wrap, not strut) | https://github.com/qq15725/modern-screenshot/issues/104 |
| Flex wrap | https://github.com/qq15725/modern-screenshot/issues/134 |

No open issue found for “FO decode bitmap missing half-leading strut” — this draft is the filing starting point.

---

## Closest Chromium issues (round-8 upstream search)

Searched **bugs.chromium.org** / **issues.chromium.org** themes: `foreignObject` + text / line-height / canvas raster / paint offset / inline strut. **No exact dup** for “FO **decode** bitmap text paint origin missing half-leading strut while **inline FO** matches live.”

| Rank | ID | Title (summary) | Relation to this bug |
|-----:|----|-----------------|----------------------|
| 1 | [771852](https://bugs.chromium.org/p/chromium/issues/detail?id=771852) | Self-painting PaintLayers under `<foreignObject>` do not position/size correctly | **Fixed** systemic FO paint/position class; Blink ack FO “quite broken in many ways” |
| 2 | [1218383](https://bugs.chromium.org/p/chromium/issues/detail?id=1218383) | clip-path on `<foreignObject>` with non-zero `x`/`y` renders incorrectly | FO **paint offset** at SVG→bitmap bridge (geometry, not text strut) |
| 3 | [1411581](https://bugs.chromium.org/p/chromium/issues/detail?id=1411581) | Implement CSS `text-box-trim` / `text-box-edge` | Inline **line-box / strut trimming** — layout path; does not fix our FO decode drift |
| 4 | [842668](https://bugs.chromium.org/p/chromium/issues/detail?id=842668) | `<foreignObject>` stacking-context paint order regression | FO paints during **foreground phase** — paint-tree timing, not lh strut |
| 5 | [467484](https://bugs.chromium.org/p/chromium/issues/detail?id=467484) | `<canvas>` inside `<foreignObject>` has incorrect transform | FO **+ raster content** mismatch — different symptom, same decode pipeline |

**Also related (not top-5):**

| ID | URL | Topic |
|----|-----|-------|
| 41041505 | https://issues.chromium.org/issues/41041505 | FO taints canvas (security / origin-clean) |
| 41096530 | https://issues.chromium.org/issues/41096530 | FO children escape SVG mask |
| 327606 | https://bugs.chromium.org/p/chromium/issues/detail?id=327606 | Native SVG `text` placement — different paint path |
| 71819 | https://bugs.webkit.org/show_bug.cgi?id=71819 | WebKit FO absolute positioning wrong global coords |
| 23113 | https://bugs.webkit.org/show_bug.cgi?id=23113 | WebKit layer content in FO wrong place |
| 23963 | https://bugs.webkit.org/show_bug.cgi?id=23963 | WebKit margin collapse at FO boundary |
| twbs/bootstrap#35553 | https://github.com/twbs/bootstrap/issues/35553 | lh subpixel in Chromium 94+ — container height |
| psd2svg#273 | https://github.com/CyberAgent/psd2svg/issues/273 | FO inline strut expands line box (CSS) |
| modern-screenshot#104 | https://github.com/qq15725/modern-screenshot/issues/104 | FO float precision (wrap) |
| modern-screenshot#134 | https://github.com/qq15725/modern-screenshot/issues/134 | Flex wrap in FO capture |
| Stack Overflow 48469586 | https://stackoverflow.com/questions/48469586/how-do-i-align-svg-foreignobject-with-a-text-element | FO top vs SVG text baseline mismatch |

**Dup candidates:** None for decode-time **half-leading strut** missing at FO bitmap paint while inline FO matches live.

---

## Suggested filing text

**Title:** `foreignObject` text rasterized to canvas paints ~½(line-height − font-size) too low vs inline FO / live DOM

**Steps:** Attach `chromium-fo-only/chromium-fo-strut-repro.svg` + headed steps above + `chrome://version` (148.0.7778.216 observed).

**Expected:** Bitmap ink top matches inline FO and live DOM within sub-pixel tolerance.

**Actual:** Bitmap ink shifts down by ~`(line-height − font-size) / 2` (e.g. **+2.797 px** for 16px/1.35 flex nav @ dpr=1).

**Also reproduces:** modern-screenshot, snapdom, hand-built SVG — same delta → Chromium FO raster class.

**Regression:** Unknown — FO capture workflows widely used; issue visible once ink is compared inline vs decode.

---

## Filing checklist

- [x] Headed repro (not headless) with `chrome://version` string  
- [x] Attach [`chromium-fo-only/chromium-fo-strut-repro.svg`](chromium-fo-only/chromium-fo-strut-repro.svg)  
- [x] Filing HTML with three-way ink table @ **dpr=1**  
- [x] Note **BITMAP_ONLY** (svgΔ ≈ 0, canvasΔ ≈ half-leading)  
- [x] State **snapdom + modern-screenshot + hand-built** same canvasΔ  
- [ ] Optional: `--channels chrome,chromium` spread from probe JSON  
- [x] List related issues above; mark **no exact dup**  
- [x] Point to Blink FO paint bridge + inline line box (upstream table)  
- [x] Do **not** claim w7 FO `y` nudge as engine fix (lab workaround only)

---

## References (snapdom repo)

- [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) — round-8 bug filing package  
- [`FO-RASTER-RESEARCH-PROGRAM.md`](FO-RASTER-RESEARCH-PROGRAM.md) — program master (rounds 1–8, ledger, decision tree)
- [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) — ranked open gaps v2  
- [`DEBUGGING-CHROMIUM-FO-ONLY.md`](DEBUGGING-CHROMIUM-FO-ONLY.md) — chromium-fo-only pages  
- [`SOLUTION-PROXIMITY.md`](SOLUTION-PROXIMITY.md) — w7 proximity  
- `npm run debug:chromium-fo-only` → `.sandbox-edit/chromium-fo-only-probe.json`  
- `npm run debug:fo-minimal-repro` — `.sandbox-edit/chromium-bug-pack/`  
- `node __localtests__/fo-research-round-4-probe.mjs` — class-wide + CSS refutations
