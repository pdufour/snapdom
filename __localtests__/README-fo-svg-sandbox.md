# FO SVG sandbox

Minimal harness to **capture SVG to a repo file**, edit in **Cursor/VS Code**, and see **auto-reloaded canvas raster**. Harness-only — no `src/` changes.

## Quick start

```bash
npm run compile
npm run debug:fo-svg-sandbox
```

Opens **headed Chrome** at `http://127.0.0.1:8765/__localtests__/fo-svg-sandbox.html` (port override: `SNAPDOM_LOCAL_PORT`).

## Workflow

1. **Capture** — runs `snapdom(#capture-target)` and writes `__localtests__/.sandbox-edit/capture.svg`.
2. **Edit in IDE** — open that file in Cursor or VS Code, change the SVG, save.
3. **Auto-reload** — the browser polls the watch API every 300ms; on mtime change it re-rasters and shows **Reloaded from disk**.
4. **Compare** using the one-line metrics: **Live top · SVG vs live · Canvas vs live** (landmark Home).

Right column layout:

- **Live** — real DOM in `#live-fixture-root` (mini nav by default).
- **Canvas** — single preview on checkerboard in `#canvas-wrap`.

Left column:

- Prominent path: **Editing: `__localtests__/.sandbox-edit/capture.svg`**
- Capture status (bytes written / reloaded from disk)
- Collapsed **View file contents** (read-only preview)

Toolbar: Capture, fixture (mini / checkout), recipe (`product-baseline` + capture recipes), raster patch (`none` / `decode-interval`), dpr, scale.

**Advanced** (collapsed): **Product toCanvas** — product draw path instead of lab raster.

## API (local server)

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/__localtests__/api/sandbox-svg` | Write raw SVG body → `capture.svg` |
| GET | `/__localtests__/api/sandbox-svg` | `{ mtime, svg, path }` for browser polling |

The capture file is gitignored (`__localtests__/.sandbox-edit/`).

## URL params

| Param | Default | Effect |
|-------|---------|--------|
| `fixture` | `mini` | `checkout` loads checkout iframe |
| `autoCapture=1` | off | Capture on load |
| `recipe` | `product-baseline` | Recipe dropdown (active recipes only; `includeInactive=1` for archived) |
| `patch` | `decode-interval` | `none` or `decode-interval` |
| `svgApi` | `/__localtests__/api/sandbox-svg` | Watch/write API (set by launcher) |
| `capturePath` | `__localtests__/.sandbox-edit/capture.svg` | Display path |
| `captureAbsPath` | (launcher) | Absolute path for errors and IDE open |

Examples:

- Mini + auto capture: `?autoCapture=1`
- Checkout: `?fixture=checkout&autoCapture=1`
- Blank FO probe recipe: `?autoCapture=1&recipe=fo-translate-z-0`

## CLI probes

```bash
node __localtests__/fo-svg-sandbox.mjs --probe-mini-display
node __localtests__/fo-svg-sandbox.mjs --probe-translate-z
node __localtests__/fo-svg-sandbox.mjs --keep-open
```

## Files

| File | Role |
|------|------|
| `fo-svg-sandbox.html` | Two-column UI: file path + live/canvas preview |
| `fo-svg-sandbox.mjs` | Playwright headed launcher (passes watch API URL) |
| `local-http-server.mjs` | Static server + sandbox SVG write/watch API |
| `.sandbox-edit/capture.svg` | Editable capture output (gitignored) |
| `fo-fix-lab-runner.js` | Shared raster, metrics, recipe helpers |

Use **headed Chrome** for FO→canvas ink (same as bounce-check and FO fix lab). `HEADLESS=1` is opt-in smoke only.

## Removed (vs textarea + inspector)

- Left-pane SVG textarea hot-reload
- **Advanced: inspector** inline SVG mount
- `#inline-svg-host` DevTools editing
- MutationObserver sync between inspector and textarea
