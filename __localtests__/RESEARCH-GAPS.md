# FO raster — ranked research gaps (2026-06-03, post round 8)

**Fix waves paused.** Best structural lab row: `tc-fix-w7-rfork-fo-y-half-leading-meta` @ **|−0.203 px|** (integer Range scan). Gate: **0.06 px**.

Probe: [`RESEARCH-ROUND-8.md`](RESEARCH-ROUND-8.md) · JSON: [`.sandbox-edit/research-round-8.json`](../.sandbox-edit/research-round-8.json)

---

## Ranked gaps (what to do next)

| Rank | Gap | Category | Rationale |
|------|-----|----------|-----------|
| **1** | **Dual metric gates** — lab Range **−0.203** vs blackbox cap **−1.91** with w7 on checkout | **Metric reconciliation** | w7 closes mini Range gap but **regresses** blackbox; promotion on one gate breaks the other. Round 8 empirical: Home **−0.91 → −1.91**. |
| **2** | **Checkout w7 canvas shift ~1 px vs mini ~3 px** — same FO y patch | **Research** | Suggests fixture-specific FO nesting/scale; blocks blind FO-y recipe tuning on checkout. |
| **3** | **Chromium Blink FO strut paint** — upstream fix vs product opt-in | **File Chromium** | Class-wide BITMAP_ONLY; hand-built repro; w7 is lab workaround only. No exact open dup — see [`CHROMIUM-FO-STRUT-BUG-DRAFT.md`](CHROMIUM-FO-STRUT-BUG-DRAFT.md). |
| **4** | **Integer vs fractional ink scan as promotion gate** | **Metric reconciliation** | w7 residual **= Range subpixel 0.203**; fractional-threshold scan **−1.091** (AA ramp). Changing gate ≠ fixing paint. |
| **5** | **w15/w16 / wave-20 recipe signal** | **Defer fix waves** | Active 56-recipe matrix: **0 pass**; best **−0.203**. No w15/w16 JSON on disk. |

---

## Category guide

### File Chromium (rank 3)

- **When:** Structural strut bug confirmed; snapdom decode **0 px**; cross-browser BITMAP_ONLY.
- **Deliverable:** crbug with [`fixtures/chromium-fo-strut-repro.svg`](fixtures/chromium-fo-strut-repro.svg), three-way ink, row dump from round 8.
- **Not:** FO `y` nudge as proposed engine fix.

### Metric reconciliation (ranks 1, 4)

- **When:** Before any `src/` promotion or blackbox-driven FO-y tweaks.
- **Open questions:**
  - Authoritative reference: painted **Range union** vs **cap model** live top?
  - Should blackbox adopt Range-aligned scan or lab document cap-only gate?
- **Round 8 fact:** Range−cap live offset **4.523 px** on mini; invariant under w7; absolute cap Δ **−4.727** at w7 vs Range **−0.203**.

### New decode mechanism (deferred)

- **Not ranked top-5** — round 5/7/8 show **0 px** snapdom vs chromium-only on same SVG.
- Further decode forks (`tc-fix-w11+`) tie plateau unless they restack FO **paint origin** (w7 class only).

### Fix waves (explicitly deprioritized)

- **Do not run** wave-20 `tc-fix-w*` until ranks **1–2** resolved.
- w13 `y-w7-minus-range-subpixel` already **regressed +0.797** (round 7).
- Subpixel FO-y tuning chases integer scan artifact, not blackbox cap.

---

## Closed this session (2026-06-03)

- Chromium lh/align/FO-y matrix @ dpr=1 — `research-round-8-chromium-matrix.json` (fo-y-28 → **−0.203**; lh-135 **2.797**)
- Round-8 probe boot (`snapdom` import) + full section JSON on disk
- DPR sweep refreshed — `root-cause-dpr1.json` / `root-cause-dpr2.json`
- Three-way consistency PASS — `fo-three-way-consistency.json`

## Closed this round (no longer top gaps)

| Gap | Round 8 answer |
|-----|----------------|
| Why w7 stops at **−0.203** | Integer device row **14** vs Range **14.203**; Chromium = snapdom |
| Blackbox cap agrees with lab Range if w7? | **No** — checkout cap **regresses** |
| Active matrix leader | w7 **−0.203**; **0/56 pass** |
| FO row dump vs Range | Baseline row **17**, w7 row **14**, residual **+0.203** device-normalized |

---

## Recommended sequence

1. **Metric reconciliation doc + gate policy** (rank 1) — 1 headed session, no new recipes.
2. **Checkout vs mini w7 shift autopsy** (rank 2) — extend round 8 probe or paint-origin autopsy on checkout fixture.
3. **Chromium filing** (rank 3) — parallel, no product default.
4. Re-evaluate blackbox only after (1) — **not** before more `tc-fix-w*`.

```bash
npm run debug:fo-research-round-8-probe
npm run test:blackbox:w7
```
