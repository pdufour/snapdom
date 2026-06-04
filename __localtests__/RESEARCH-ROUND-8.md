# FO raster research — Round 8 (2026-06-02)

**Status:** NOT FIXED @ **0.06 px** integer gate · **Headed Chrome only**

**Focus:** measurement reconciliation only — no product fixes.

**Probe:** `node __localtests__/fo-metric-bridge-probe.mjs` → [`.sandbox-edit/metric-bridge-probe.json`](../.sandbox-edit/metric-bridge-probe.json)

**Deep dive:** [`RESEARCH-METRICS.md`](RESEARCH-METRICS.md)

---

## Angle — Measurement reconciliation (lab Range vs integer row vs blackbox)

### Question

Why does lab report **+2.797 px** on stretch-nav Home while blackbox `paint.canvas.vs-border.top` reports **~−0.91 px** on the same nav class (checkout document rulers)?

### Answer (one paragraph)

Same **integer canvas ink row**, three **live reference boxes**. Lab matrix uses **Range union** top (14.203 px) → canvas sits **lower** → **+2.797**. Blackbox uses **cap-model** top (font metrics, ~4.5 px lower in border box on mini nav) → **−1.727** on mini @ dpr=1; checkout @ dpr=2 product path → **−0.91**. The **4.523 px** gap between Range and cap deltas is **by design**, not measurement error. w7 closes Range Δ to **−0.203** (subpixel residual) but pushes cap Δ to **−4.727** because cap live reference is unchanged.

### Headline numbers (probe 2026-06-03, headed)

| Context | Range Δ | Cap Δ | Blackbox row |
|---------|--------:|------:|--------------|
| mini-nav dpr=1 baseline | **+2.797** | **−1.727** | — |
| mini-nav dpr=1 w7 | **−0.203** | **−4.727** | — |
| mini-nav dpr=2 baseline | **+3.297** | **−1.227** | — |
| checkout dpr=2 product | (same class ~+2.8 Range) | — | **−0.91** |

### w7 on each metric

| | Range gate | Cap / blackbox gate |
|---|------------|---------------------|
| Baseline | +2.797 | −1.727 |
| w7 | **−0.203** (strut closed; subpixel residual) | **−4.727** (canvas moved; cap live fixed) |
| Mechanism | FO `y` −2.8 px → row 17→14 | Same canvas shift; wrong live box for promotion |

### Verdict

`METRIC_FAMILIES_RECONCILED` — gate lab on **Range + integer scan**; treat blackbox cap Δ as a **different coordinate system**. Full formulas, rulers, and dpr tables: [`RESEARCH-METRICS.md`](RESEARCH-METRICS.md).

---

## Related rounds

| Round | Topic |
|-------|-------|
| [RESEARCH-ROUND-7](../.sandbox-edit/RESEARCH-ROUND-7.md) | Nav height invariant, wave-14 ingest, decode delta, landmark parity |
| [RESEARCH-ROUND-6](RESEARCH-ROUND-6.md) | 48px stretch vs glyph ink, letter drift |
| [RESEARCH-ROUND-5](RESEARCH-ROUND-5.md) | Decode layer 0 px, timing spread |

```bash
npm run debug:fo-metric-bridge-probe
```
