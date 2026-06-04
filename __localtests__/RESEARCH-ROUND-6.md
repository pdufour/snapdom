# FO research round 6 — glyph bounds & letter drift (2026-06-02)

**Probe:** `node __localtests__/fo-glyph-bounds-probe.mjs` (headed Chrome)  
**Artifact:** [`.sandbox-edit/research-round-6.json`](../.sandbox-edit/research-round-6.json)

Empirical headed lab round (glyph bounds, letter classes, wave-13 spot, cross-browser). For Blink upstream literature from the same round label, see git history before `193a3c7`.

## Angles (new vs rounds 1–5)

| # | Angle | Round 6 result |
|---|--------|----------------|
| 1 | Glyph bounds vs 48px flex stretch | Stretch box **48px**; leaf **lh 21.6px**; **~14.8px slack** below Range union; canvas ink scan **h=48 device px** (full element, not 28px-wide-only) |
| 2 | Letter-level drift (cap / ascender / descender) | **4px spread**: caps **2.797**, ascenders **1.797**, descenders **5.797** @ dpr=1 same flex box |
| 3 | Chromium-only pages + glyph metrics | All **BITMAP_ONLY**; nav **canvasΔ 2.797**; no-flex **3.0** |
| 4 | Wave-13 matrix spot | Shard `recipes-tocanvas-fix-wave13.js`; best **w7 \|canvasΔ\| 0.203**; viewBox w13 **5.797** |
| 5 | Safari / Firefox (Playwright) | **Not Blink-only**: WebKit **3.42**, Firefox **3.5**, Chrome **2.80** on same FO→canvas path |

## Top 5 findings

1. **Ink scan is not missing the 48px band** — `measureCanvasInkBandRegion` uses full anchor height (**48** dev rows) with a horizontal center band only; ruled out “scan too short for descenders” as the Home **2.797** driver.
2. **Home top drift stays the half-leading strut class** — `canvasΔ 2.797` ≈ `½(lh−fs)` (**2.8px**); stretch **48px** is layout context (serialized lh still **21.6px**).
3. **Isolated letters change canvasΔ by shape** — single **p/g → 5.797**, **h/l → 1.797**, **H/HOME → 2.797**; preview “h/p cutoff” on multi-char nav may differ from single-glyph lab rows.
4. **Canvas ink bottom sits ~4px above Range bottom** on Home — FO bitmap painted ink height **~12px** vs Range line box **~19px**; aligns with descender/preview clip reports (FO raster clip, not metric band height).
5. **Wave-13 spot-check** — no recipe passes **0.06** gate; **w7** and **w13 leaf-translate** tie **0.203**; **w13 viewBox** overshoots to **5.797**; full matrix: `--ids 'tc-fix-w13-*'`.

## Commands

```bash
npm run compile
node __localtests__/fo-glyph-bounds-probe.mjs
node __localtests__/fo-glyph-bounds-probe.mjs --skip-cross-browser
node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-fix-w13-*'
```

## Shards

- `research-round-6-glyph-vs48.json`
- `research-round-6-letter-drift.json`
- `research-round-6-wave13-spot.json`
- `research-round-6-chromium-fo-pages.json`
- `research-round-6-cross-browser.json`
- `research-round-6-synthesis.json`
