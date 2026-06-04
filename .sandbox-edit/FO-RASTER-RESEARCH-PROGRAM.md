# FO raster research program

**Last updated:** 2026-06-03 · **Gate:** ≤ **0.06 px** integer ink (lab matrix) · checkout blackbox uses **cap-model** ink

---

## Program goal

Close **live ↔ canvas** text ink drift for **flex + text-leaf** captures while keeping **real DOM text inside `foreignObject`** (no SVG-text / fillText promotion).

**Confirmed stage:** **BITMAP_ONLY** — capture/serialization ≈ live; FO `Image.decode()` → `drawImage()` bitmap does not.

---

## Rounds (empirical)

| Round | Focus | Doc | Probe |
|-------|--------|-----|-------|
| 4 | Class-wide (MS), FO geometry, strut CSS refuted | [`RESEARCH-ROUND-4`](../__localtests__/README-FO-RASTER-RESEARCH.md#research-round-4-2026-06-02) | `debug:fo-research-round-4` (html+mjs) |
| 5 | Decode timing, canvas backend, 0px snapdom layer | [`RESEARCH-ROUND-5.md`](../__localtests__/RESEARCH-ROUND-5.md) | `debug:fo-research-round-5-probe` |
| 6 | Glyph vs 48px, letter drift, cross-browser | [`RESEARCH-ROUND-6.md`](../__localtests__/RESEARCH-ROUND-6.md) | `fo-glyph-bounds-probe.mjs` |
| 7 | Nav height, wave-14 absent, metric reconcile, w7 0.203 | [`RESEARCH-ROUND-7.md`](RESEARCH-ROUND-7.md) | `debug:fo-research-round-7-probe` |
| **8** | **Bitmap row, metric bridge, blackbox w7, matrix ingest** | [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) | `debug:fo-research-round-8-probe` |

---

## Standing probes (re-run any session)

| ID | Command | Output |
|----|---------|--------|
| P0 | `npm run debug:fo-research-round-8-probe` | `research-round-8*.json` |
| P1 | `npm run debug:fo-root-cause-dpr-sweep` | `root-cause-dpr{1,2}.json` |
| P2 | `npm run debug:fo-paint-origin-autopsy` | `fo-paint-origin-autopsy.json` |
| P3 | `npm run test:fo-three-way` | `fo-three-way-consistency.json` |
| P4 | `npm run debug:chromium-fo-only` | `chromium-fo-only-probe.json` |
| P5 | `npm run debug:fo-chromium-class-probe` | `chromium-fo-class-probe.json` |
| P6 | `npm run test:fo-glyph-bounds` | `research-round-6*.json` |
| P7 | `npm run debug:fo-decode-pipeline-audit` | `decode-pipeline-audit.json` |

**Rules:** Headed Chrome only for ink · FO raster only for promotion (`--no-text-bypass`) · No speculative `src/` without lab proof.

---

## Mechanism (frozen)

- Missing **~½(line-height − font-size)** at FO bitmap paint origin (~**2.8 px** @ 16px / lh 1.35).
- **w7** (`fo-y-half-leading-meta`): FO `y` −2.8px → lab Range **−0.203 px** = **integer row vs Range subpixel**.
- **Not** snapdom-specific · **Not** flex-only · **Not** decode-timing / backing / viewBox alone.

---

## Promotion bar

| Criterion | Threshold |
|-----------|-----------|
| Lab matrix | Beat baseline **2.747 px** \|canvasΔ\| · \|svgΔ\| < **0.15 px** |
| Integer gate | \|canvasΔ\| ≤ **0.06 px** (current best **0.203**) |
| Blackbox | Per-landmark `paint.canvas.vs-border.top` ≤ **0.06 px** (cap-model) |
| Mechanism | Must move **FO bitmap paint**, not blit nudge / text bypass |

---

## Pause list (2026-06-03)

- **Wave-15+ fix recipe shards** unless probe shows new mechanism (round 8: **pauseFixWaves: true**).
- **Matrix churn** beyond active 56-row corpus re-ingest.
- **src/ promotion** of w7 until metric alignment with blackbox is designed.

---

## Index

[`RESEARCH-INDEX.md`](RESEARCH-INDEX.md) · Master README [`README-FO-RASTER-RESEARCH.md`](../__localtests__/README-FO-RASTER-RESEARCH.md) · Gaps [`RESEARCH-GAPS.md`](RESEARCH-GAPS.md) · Metrics [`RESEARCH-METRICS.md`](RESEARCH-METRICS.md)
