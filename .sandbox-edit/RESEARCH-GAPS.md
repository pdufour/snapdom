# FO raster research — gaps & next actions

**Updated:** 2026-06-03 (after round 8)

---

## Closed this session

| Gap | Resolution | Artifact |
|-----|------------|----------|
| Bitmap row vs Range at decode | First-ink row **17→14**, range−row **−2.797→+0.203** | `research-round-8-fo-row-dump.json` |
| w7 ceiling mechanism | snapdom = chromium **0 px**; residual = Range subpixel | `research-round-8-w7-ceiling.json` |
| Lab vs blackbox metric bridge | Range/cap/blackbox table + w7 overshoots cap gate | `research-round-8-lab-blackbox-cap.json`, `research-round-8-blackbox-w7.json` |
| DPR sweep freshness | 2.797 @1 · 3.297 @2 · +0.5 slack | `research-round-8-dpr-bridge.json` |
| Chromium-only matrix | 4 pages BITMAP_ONLY class | `chromium-fo-only-probe.json` |
| Round-8 runner missing snapdom | Fixed `fo-research-round-8-probe.html` import | — |

---

## Open — P0 (blocks promotion)

1. **Blackbox metric alignment**  
   - **Action:** Spec whether product gate should use **Range**, **cap-model**, or **integer row** live reference; run headed doc only after spec.  
   - **Evidence:** w7 passes lab Range **−0.203** but checkout cap **−1.91** (worse than baseline **−0.91**).  
   - **Command:** `npm run debug:fo-research-round-8-probe` (includes blackbox section)

2. **Fractional ink gate vs integer gate**  
   - **Action:** Decide if promotion may use fractional-threshold scan where integer fails (autopsy: AA ramp unreliable on stretch nav).  
   - **Evidence:** w7 integer **−0.203**; fractional **~−1.1** on mini-nav.  
   - **Command:** `npm run debug:fo-paint-origin-autopsy`

3. **Blink upstream fix**  
   - **Action:** File Chromium bug with [`chromium-fo-strut-repro.svg`](../__localtests__/chromium-fo-only/chromium-fo-strut-repro.svg) + row dump from round 8.  
   - **Command:** `npm run debug:fo-chromium-class-probe`

---

## Open — P1 (understanding)

4. **Checkout vs mini cap offset**  
   - **Action:** Run round-8 metric sections on **checkout** fixture (not only mini nav) — confirm **4.523 px** Range−cap offset class.  
   - **Hypothesis:** Same cap-model divergence; different absolute cap Δ.

5. **Glyph clip / 48px stretch slack**  
   - **Action:** Re-run `test:fo-glyph-bounds` after capture changes; compare canvas bottom vs Range bottom.  
   - **Command:** `npm run test:fo-glyph-bounds`

6. **Wave-14 matrix artifact**  
   - **Action:** If wave-14 matrix is run, commit JSON to `.sandbox-edit/` with `wave14` in filename; else keep wave-13 spot only.  
   - **Status:** Still **absent** on disk (round 7–8).

---

## Open — P2 (deferred)

7. **Wave-15–19 recipe shards** — **paused** until new mechanism (round 8 synthesis: `pauseFixWaves: true`).  
8. **Product w7 flag default-on** — blocked by blackbox cap overshoot.  
9. **CDP paint-origin autopsy (N4)** — optional deep trace on `minimal-typography-no-flex` (no-flex passes integer gate under w7).

---

## Explicitly ruled out (do not re-open without new evidence)

- Capture lh pin / raster lh re-assert at correct **21.6px**  
- Decode timing, canvas backend, FO floor/ceil geometry alone  
- Snapdom decode layer extra px (0 px vs chromium-only)  
- Flex stretch height as sole cause (48/56/64 invariant)  
- Text bypass / SVG-text for promotion  

---

## Next session entry

See [`CONTINUE.md`](CONTINUE.md).
