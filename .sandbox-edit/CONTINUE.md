# FO raster research — continue next session

- **Metric decision first:** Write whether blackbox should gate on **Range**, **cap-model**, or **integer row** live ink — round 8 shows w7 helps Range (**−0.203**) but **worsens** checkout cap (**−0.91 → −1.91**). Re-run `npm run debug:fo-research-round-8-probe` after any gate change.
- **Upstream path:** Package Chromium repro (`chromium-fo-only` + round-8 row dump JSON) and file Blink bug — do **not** promote w7 to `src/` on lab matrix alone.
- **No new fix waves** until a probe shows a mechanism beyond FO `y` −½(lh−fs) + integer subpixel ceiling (`pauseFixWaves` in `research-round-8-synthesis.json`).
