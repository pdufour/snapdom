# Fix ablation / prune report

Branch: `pdufour/fix/h2-1`  
Base: `main` (`73358a1`)  
Gate: `node __localtests__/assert-email-label-structure.mjs`

## `src/` prune iterations

| # | unit | vs main | assert | action | commit |
|---|------|---------|--------|--------|--------|
| 1 | `src/utils/debugLog.js` (+ `pushDebugLine` hooks in `styles.js`) | delete file, strip debug-only calls | **PASS** | **kept removed** | `2619a0d` 🔑 prune src: drop debugLog capture helper |

### `src/` queue (not yet tested)

| order | path | Δ vs main |
|-------|------|-----------|
| 2 | `src/utils/capture.helpers.js` | +31 −2 |
| 3 | `src/exporters/toCanvas.js` | +35 −1 |
| 4 | `src/core/capture.js` | +31 −21 |
| 5 | `src/modules/styles.js` (remaining) | +36 −4 (after debugLog prune) |
| 6 | `src/utils/preciseLineHeight.js` | +71 (new file) |

## Full-branch prune (non-src)

| # | commit | subject | revert | assert | action |
|---|--------|---------|--------|--------|--------|
| 1 | 09997e7 | mega analyzers, harness perf | clean | PASS | kept removed (`9113073`) |

## Minimal required `src/` (so far)

- **Not required:** `debugLog.js`
- **Still present vs main:** `capture.js`, `toCanvas.js`, `styles.js` (LH pin + placeholder + span/label tags), `capture.helpers.js`, `preciseLineHeight.js`

## Latest state

- HEAD: `2619a0d` (2 prune commits ahead of origin)
- `git diff --stat main...HEAD -- src/`: 5 files, **200 insertions, 28 deletions**
- Latest assert: **PASS** (exit 0)
