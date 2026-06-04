/**
 * Core control recipes (matrix baseline + runtime monkeypatch probes).
 * Loaded from fo-recipes-shards/ like all other recipe data.
 */
/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = [
  {
    id: 'product-baseline',
    label: 'Product baseline (main)',
    idea: 'Current capture.js foNormalize + product toCanvas (meta half-leading FO y fork)',
    css: '',
    inject: 'capture',
    rasterPatch: 'product-toCanvas',
    notes: 'Control row — mirrors src toCanvas default raster fork from lhStrut meta.',
  },
  {
    id: 'mp-capture-recipe-css',
    label: 'MP: inject recipe CSS at capture (runtime)',
    idea: 'Wrap snapdom toRaw — same CSS as post-capture inject but inside FO style at capture time',
    css:
      'foreignObject *{box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    monkeypatch: 'capture-recipe-css',
    category: 'h2-port',
    notes: 'A/B vs harness-only SVG string inject — no src/ change.',
  },
  {
    id: 'mp-h2-fo-normalize-capture',
    label: 'MP: h2 foNormalize bundle at capture',
    idea: 'Runtime wrap snapdom — h2 portable foNormalize CSS before raster',
    css: '',
    inject: 'raster',
    monkeypatch: 'h2-fo-normalize-full',
    category: 'h2-port',
    notes: 'pdufour/fix/h2 capture.js foNormalize — monkeypatch only.',
  },
  {
    id: 'mp-decode-interval-prototype',
    label: 'MP: Image.decode interval (prototype)',
    idea: 'Patch HTMLImageElement.decode — decode + 100ms + decode (global, lab raster)',
    css: '',
    inject: 'raster',
    monkeypatch: 'decode-interval-prototype',
    rasterPatch: 'direct',
    category: 'decode',
    notes: 'Prototype path vs harness rasterPatch decode-interval wait.',
  },
  {
    id: 'mp-draw-image-pixelated',
    label: 'MP: drawImage smoothing off (prototype)',
    idea: 'Patch CanvasRenderingContext2D.drawImage — force imageSmoothingEnabled false',
    css: '',
    inject: 'raster',
    monkeypatch: 'draw-image-pixelated',
    rasterPatch: 'direct',
    category: 'raster',
    notes: 'Global drawImage hook — complements canvas-pixelated runner flag.',
  },
  {
    id: 'mp-googlefonts-embed',
    label: 'MP: Google Fonts Inter + embedFonts',
    idea:
      'Before capture: inject fonts.googleapis.com Inter and rewrite system-ui stacks on the capture subtree; snapdom embedFonts:true inlines @font-face',
    css: '',
    inject: 'capture',
    monkeypatch: 'googlefonts-embed-capture',
    rasterPatch: 'product-toCanvas',
    category: 'font',
    harnessSnapdom: { embedFonts: true },
    notes:
      'Lab-only font path — system-ui → Inter (Google Fonts link) then product embedFonts fetch/inline; FO text raster intact.',
  },
]
