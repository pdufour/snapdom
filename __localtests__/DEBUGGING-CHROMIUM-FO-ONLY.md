# Debugging Chromium FO→bitmap (no snapdom)

Prove **BITMAP_ONLY** drift in headed Chrome **before** touching snapdom capture, `modern-screenshot`, or `capture.js`. If `canvasΔ ≈ 2.797 px` here with `svgΔ ≈ 0`, the bug is Chromium FO raster — not library serialization.

## Quick start

```bash
# Headed probe (writes JSON, expects BITMAP_ONLY on nav raster page)
npm run debug:chromium-fo-only

# Manual pages (local server required for module imports)
node __localtests__/local-http-server.mjs   # or any static server rooted at repo
# Open:
#   http://127.0.0.1:<port>/__localtests__/chromium-fo-only/minimal-nav-fo-raster.html?dpr=1
```

**Do not use `HEADLESS=1`** for ink gates — FO→canvas ink differs in headless.

## Pages (`__localtests__/chromium-fo-only/`)

| File | Purpose |
|------|---------|
| `chromium-fo-strut-repro.svg` | **572 B filing attachment** — attach to Chromium bug |
| `chromium-fo-strut-repro.html` | Filing page: steps, expected/actual, JSON three-way ink |
| `minimal-nav-fo.html` | Live DOM vs inline hand-built FO SVG (Range ink only) |
| `minimal-nav-fo-raster.html` | + **Raster to canvas** via `data:image/svg+xml` → `Image.decode` → `drawImage` (toggle `createImageBitmap`) |
| `minimal-typography-no-flex.html` | Bare `<span>`, no flex — typography-only drift class |
| `minimal-nav-fo-y-nudge.html` | w7 workaround: `foreignObject y="-½(lh−fs)"` in SVG string before decode (no snapdom) |
| `chromium-fo-only-shared.js` | Ink + raster helpers (no product imports) |

## Probe output

- **JSON:** `.sandbox-edit/chromium-fo-only-probe.json`
- **Runner:** `__localtests__/chromium-fo-only-probe.mjs`

Expected @ `dpr=1` on **minimal-nav-fo-raster** (headed):

| Metric | Typical |
|--------|--------:|
| `liveVsSvgTopPx` (svgΔ) | ≈ **0** |
| `liveVsCanvasTopPx` (canvasΔ) | ≈ **+2.797** |
| `verdict` | **BITMAP_ONLY** |

@ `dpr=2`, canvasΔ is often ~**3.297** px (device-pixel scan); same stage, different cap scale.

## DevTools workflow

1. Open `minimal-nav-fo-raster.html` in **headed** Chrome (via local HTTP, not `file://` for ES modules).
2. **Elements:** expand `#fixture` → text “Home”; note flex `align-items: stretch`, `line-height: 1.35`.
3. Click **Raster to canvas** — compare live link ink vs canvas output visually.
4. **Console** (optional CDP / Runtime.evaluate):

```javascript
const root = document.getElementById('fixture');
const a = root.querySelector('a');
const r = document.createRange();
r.selectNodeContents(a);
const rect = r.getClientRects()[0];
const box = a.getBoundingClientRect();
({
  rangeTopInBorder: rect.top - box.top,
  gbcr: a.getBoundingClientRect(),
  lineHeight: getComputedStyle(a).lineHeight,
  fontSize: getComputedStyle(a).fontSize,
});
```

5. On canvas: zoom pixels — first dark row should sit ~2.8px lower than live Range ink top inside the link border box.

## When canvasΔ ≈ 2.797 without any library

File a **Chromium FO→bitmap** class bug: inline FO layout matches live; only the **Image/SVG decode raster** shifts glyph ink by ~½(line-height − font-size) on flex-stretched text leaves.

Half-leading check: `(16 × 1.35 − 16) / 2 = 2.8 px`.

## w7 nudge (Chromium-only proof)

`minimal-nav-fo-y-nudge.html` applies `foreignObject y="-2.8"` (computed ½(lh−fs)) **in the SVG string** before decode — same mechanism as lab `fo-y-half-leading-meta`, **without** snapdom. Baseline canvasΔ ~2.797 → nudge canvasΔ ~−0.2 (integer scan residual).

## Contrast with snapdom path

After Chromium-only proof, compare library stack:

```bash
npm run compile
npm run debug:fo-minimal-repro
```

If hand-built + snapdom rows match **same canvasΔ** (see `minimal-repro.json`), fixes belong in **FO raster / structural strut**, not capture serialization.

## Related docs

- [`DEBUGGING-FO-LAB.md`](./DEBUGGING-FO-LAB.md) — recipe lab, matrix promotion
- [`.sandbox-edit/RESEARCH-PIVOT.md`](../.sandbox-edit/RESEARCH-PIVOT.md) — plateau 2.797, BITMAP_ONLY criteria
