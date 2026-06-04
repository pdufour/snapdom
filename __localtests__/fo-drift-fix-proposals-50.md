# FO drift fix proposals — 50 parallel ideas (file-only)

**Status:** Proposals only — not wired in `fo-recipes-shards/` unless promoted after lab matrix.  
**Gate context:** Baseline |canvasΔ| ≈ 2.797 px (half-leading strut); w7 `fo-y-half-leading-meta` → 0.203 px (integer Range artifact).  
**Rules:** FO raster only, no text bypass, no magic px from gate rows.

Generated: 2026-06-02 · Count: **50** entries (`tc-fix-drift-001` … `tc-fix-drift-050`).

---

## Index (id → mechanism)

| # | id | mechanism |
|---:|---|---|
| 1 | tc-fix-drift-001-capture-fo-height-linepx | Set each text-leaf FO `height` from measured line box (contentH), not stretch parent box. |
| 2 | tc-fix-drift-002-capture-fo-y-content-origin | Position FO `y` at leaf content-box top from layout APIs, not border-box top under flex stretch. |
| 3 | tc-fix-drift-003-rfork-fo-y-half-leading-dpr-scale | Apply w7-class FO `y` half-leading using caller `dpr` on SVG root before raster (no extra multiplier). |
| 4 | tc-fix-drift-004-rfork-leaf-translate-y-half-leading | Leaf `transform: translateY(½(lh−linePx))` from measured half-leading at decode. |
| 5 | tc-fix-drift-005-capture-leading-trim-both-edges | Inject `leading-trim: both` on text leaves at capture so FO serializes trimmed line box. |
| 6 | tc-fix-drift-006-rfork-trim-text-box-leaf-decode | Mirror capture trim on text leaves inside FO via decode CSS (`text-box-trim: trim-both`). |
| 7 | tc-fix-drift-007-capture-inline-block-linebox-leaf | Force text leaves `display:inline-block` with intrinsic width/height from line metrics at capture. |
| 8 | tc-fix-drift-008-rfork-inline-block-linebox-decode | Same inline-block linebox rule at raster decode for FO inner HTML only. |
| 9 | tc-fix-drift-009-capture-flex-item-min-width-zero | `min-width:0` on flex/grid FO parents so FO width matches used text width. |
| 10 | tc-fix-drift-010-rfork-fo-overflow-hidden-linebox | `foreignObject{overflow:hidden}` clipped to linebox height from meta, not stretch height. |
| 11 | tc-fix-drift-011-capture-align-self-flex-start-leaf | Pin stretched flex children to `align-self:flex-start` on text-leaf FO wrappers only. |
| 12 | tc-fix-drift-012-rfork-fo-align-items-flex-start | Inner FO flex containers use `align-items:flex-start` so bitmap origin is top-aligned strut. |
| 13 | tc-fix-drift-013-capture-lh-used-pin-leaf | Pin `line-height` to used px from Typed OM on text leaves before FO serialization. |
| 14 | tc-fix-drift-014-rfork-lh-meta-leaf-decode | Inject meta-derived `line-height` on FO text leaves at decode (Chromium copy block). |
| 15 | tc-fix-drift-015-capture-vertical-align-baseline-leaf | Set `vertical-align:baseline` on inline text inside FO to match inline baseline table. |
| 16 | tc-fix-drift-016-rfork-strut-translate-y-meta | `transform: translateY(strutPx)` from `(lh−fontSize)/2` meta on FO root bitmap layer. |
| 17 | tc-fix-drift-017-rfork-fo-y-strut-range-meta | FO `y` += Range union top minus cap top from live probe meta (structural delta, not gate constant). |
| 18 | tc-fix-drift-018-rfork-viewbox-y-half-leading-meta | Shift SVG `viewBox` min-y by half-leading meta so raster viewport matches text ink. |
| 19 | tc-fix-drift-019-rfork-combo-fo-y-linebox-height | w7 FO `y` + FO `height` locked to linePx only (combo patch, FO raster). |
| 20 | tc-fix-drift-020-rfork-combo-fo-y-leading-trim | w7 FO `y` + `leading-trim:both` on leaves at decode. |
| 21 | tc-fix-drift-021-capture-fo-clip-path-linebox | Add `clip-path:inset(...)` from linebox insets on FO at capture. |
| 22 | tc-fix-drift-022-rfork-fo-clip-inset-zero-linebox | Clip FO content to linebox with zero inset after half-leading adjust. |
| 23 | tc-fix-drift-023-capture-nested-fo-inner-linebox | Outer FO full size; inner FO per text run sized to linebox (double-FO pattern). |
| 24 | tc-fix-drift-024-rfork-double-fo-outer-inner-linebox | Decode patch: outer stretch FO + inner linebox FO for paint origin isolation. |
| 25 | tc-fix-drift-025-capture-remove-flex-on-fo-parent | Serialize FO parent without `display:flex` when only text leaf (blockify wrapper). |
| 26 | tc-fix-drift-026-rfork-remove-flex-display-a-decode | Strip flex from FO subtree at decode to match typography-no-flex repro. |
| 27 | tc-fix-drift-027-capture-white-space-nowrap-leaf | `white-space:nowrap` on nav text leaves to stabilize line count during FO raster. |
| 28 | tc-fix-drift-028-rfork-font-kerning-normal-chromium | Inject `font-kerning:normal` on FO `*` (modern-screenshot Chromium copy). |
| 29 | tc-fix-drift-029-capture-box-sizing-border-box-fo | `foreignObject *{box-sizing:border-box}` at capture (global structural normalize). |
| 30 | tc-fix-drift-030-rfork-box-sizing-border-box-decode | Same border-box rule at decode for FO descendants. |
| 31 | tc-fix-drift-031-capture-svg-root-hidpi-dpr-only | Scale SVG root `width`/`height` by caller `dpr` only — align FO backing store to canvas. |
| 32 | tc-fix-drift-032-rfork-draw-image-interval-100ms | Use upstream `drawImageInterval:100` in decode loop (no timing tuning to gate). |
| 33 | tc-fix-drift-033-rfork-fix-svg-xml-decode-retry | Multi-pass `fixSvgXmlDecode` until FO fonts ready (structural decode robustness). |
| 34 | tc-fix-drift-034-capture-fo-normalize-min-size | Extend `foNormalize` with `min-height:0` / `min-width:0` on all FO elements. |
| 35 | tc-fix-drift-035-rfork-fo-height-unset-overflow-visible | FO `height:unset` + `overflow:visible` so strut not clipped by stretch box. |
| 36 | tc-fix-drift-036-rfork-combo-height-unset-w7-y | w7 half-leading FO `y` + height unset combo at decode. |
| 37 | tc-fix-drift-037-capture-text-box-edge-cap-alphabetic | `text-box-edge: cap alphabetic` on leaves to align ink box to alphabetic cap height. |
| 38 | tc-fix-drift-038-rfork-glyph-padding-leaf-meta | Padding-top/bottom from `actualBoundingBoxAscent/Descent` vs half-leading meta on leaves. |
| 39 | tc-fix-drift-039-capture-line-height-normal-important | `line-height:normal!important` on FO text leaves when used lh differs from normal algorithm. |
| 40 | tc-fix-drift-040-rfork-lh-normal-leaf-decode | Decode-only `line-height:normal` on FO leaves to force normal strut recompute at raster. |
| 41 | tc-fix-drift-041-rfork-fo-y-fontbox-meta | FO `y` shift from font bounding box top vs content box (CanvasTextMetrics-driven meta). |
| 42 | tc-fix-drift-042-rfork-fo-y-used-line-height-meta | FO `y` from used line-height strut meta instead of computed lh string. |
| 43 | tc-fix-drift-043-capture-paint-order-isolation-fo | `isolation:isolate` on FO wrapper to avoid group opacity affecting text raster position. |
| 44 | tc-fix-drift-044-rfork-crisp-edges-text-rendering | `text-rendering:geometricPrecision` + `image-rendering` on FO for subpixel stability (no nudge). |
| 45 | tc-fix-drift-045-rfork-root-fo-only-half-leading | Apply w7 FO `y` only on outermost FO per subtree (skip nested duplicates). |
| 46 | tc-fix-drift-046-capture-landmark-agnostic-meta-bridge | Attach linebox/half-leading meta from layout read once; raster forks consume meta only. |
| 47 | tc-fix-drift-047-rfork-range-union-scan-align | Post-raster ink compare uses Range union band same as lab probe (metric alignment, not paint). |
| 48 | tc-fix-drift-048-rfork-checkout-mini-same-patch | Single patch id for checkout + mini fixtures — detect nesting depth and branch structurally. |
| 49 | tc-fix-drift-049-capture-flex-cross-stretch-decouple | On `align-items:stretch` rows, FO height = linePx not cross-size of flex line. |
| 50 | tc-fix-drift-050-promote-w7-default-off-flag | Product: default-off `experimentalRasterSvgPatch:'fo-y-half-leading-meta'` + blackbox re-baseline after metric policy. |

---

## Verification

```bash
grep -c '^| [0-9]' __localtests__/fo-drift-fix-proposals-50.md   # expect 50
grep -oE 'tc-fix-drift-[0-9]{3}-[a-z0-9-]+' __localtests__/fo-drift-fix-proposals-50.md | sort -u | wc -l
```

## Lab wiring (when ready)

Headed batches of **30** (one Chrome session; do not run multiple matrix runners in parallel):

```bash
# Batch 1 (recipes 0–29)
npm run debug:tc-fix-drift-matrix-batch

# Batch 2 (recipes 30–49)
node __localtests__/fo-drift-matrix-batch.mjs --include-inactive --limit 30 --offset 30

# Equivalent fo-fix-lab slice (requires --open-browser)
node __localtests__/fo-fix-lab.mjs --matrix --open-browser --no-text-bypass --landmark Blocks \
  --ids 'product-baseline,tc-fix-drift-*' --include-inactive --limit 30 --offset 0
```

Artifacts: `__localtests__/artifacts/fo-drift-matrix-batch-o{offset}-l{limit}.json`
