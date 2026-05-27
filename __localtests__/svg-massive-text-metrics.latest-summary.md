# SVG Massive Text Metrics Summary

Generated: 2026-05-27T05:57:39.085Z

## Runs

- Baseline JSON: __localtests__/svg-massive-text-metrics.baseline-1000.json
- Heavy JSON: __localtests__/svg-massive-text-metrics.heavy-3000.json
- Baseline params: {"repeat":8,"count":1000,"fuzz":false,"seed":1337,"width":2400,"rowHeight":28,"visibleRows":120,"sortBy":"driftBaselineVsCanvas","sortDir":"desc","outlierSigma":2.5}
- Heavy params: {"repeat":8,"count":3000,"fuzz":false,"seed":1337,"width":2400,"rowHeight":28,"visibleRows":120,"sortBy":"driftBaselineVsCanvas","sortDir":"desc","outlierSigma":2.5}
- Baseline payload timestamp: 2026-05-27T05:57:02.768Z
- Heavy payload timestamp: 2026-05-27T05:57:06.387Z
- Baseline runtime (real): 0.40s
- Heavy runtime (real): 0.40s

## Top-level Metrics

### Baseline

- measuredCount: 944
- outlierCount: 208
- driftBaselineVsCanvas: mean=-2.633238711599576, stddev=4.901298427492604, min=-9.52734375, max=17.47265625
- driftWidthSvgVsCanvas: mean=-7.091937566207627, stddev=37.83994957043122, min=-126.5869140625, max=176.921875
- driftAnchorVsCanvas: mean=-9.40334514036017, stddev=65.84779351563655, min=-646.140625, max=0

### Heavy

- measuredCount: 944
- outlierCount: 208
- driftBaselineVsCanvas: mean=-2.633238711599576, stddev=4.901298427492604, min=-9.52734375, max=17.47265625
- driftWidthSvgVsCanvas: mean=-7.091937566207627, stddev=37.83994957043122, min=-126.5869140625, max=176.921875
- driftAnchorVsCanvas: mean=-9.40334514036017, stddev=65.84779351563655, min=-646.140625, max=0

## Worst 10 Cases (baseline topRows)

1. BASELINE-MATRIX-R1-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
2. BASELINE-MATRIX-R2-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
3. BASELINE-MATRIX-R3-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
4. BASELINE-MATRIX-R4-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
5. BASELINE-MATRIX-R5-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
6. BASELINE-MATRIX-R6-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
7. BASELINE-MATRIX-R7-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
8. BASELINE-MATRIX-R8-DB-textnegbeforenegedge__AB-baseline | driftBaselineVsCanvas=17.47265625
9. BASELINE-MATRIX-R1-DB-alphabetic__AB-hanging | driftBaselineVsCanvas=13.06640625
10. BASELINE-MATRIX-R1-DB-textnegbeforenegedge__AB-hanging | driftBaselineVsCanvas=13.06640625

## Rerun Commands

`node __localtests__/run-svg-massive-text-metrics.mjs --count=1000 --seed=1337 --output=__localtests__/svg-massive-text-metrics.baseline-1000.json`

`node __localtests__/run-svg-massive-text-metrics.mjs --count=3000 --seed=1337 --output=__localtests__/svg-massive-text-metrics.heavy-3000.json`
