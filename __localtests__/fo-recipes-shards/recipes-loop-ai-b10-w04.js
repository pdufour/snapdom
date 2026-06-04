/**
 * Loop AI batch-10 FO recipe shard (worker 4) — text-fix: h2 pin line-height × selector/wrapper CSS matrix.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w04-001',
    label: 'Loop AI b10 w04 #001: FO root text-size-adjust',
    idea: 'h2-pin-line-height-from-live + FO root text-size-adjust 100% — wrapper root shrink vs measured strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO root wrapper; text-size-adjust chain — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-002',
    label: 'Loop AI b10 w04 #002: FO>div block wrapper',
    idea: 'h2-pin-line-height-from-live + FO>div display:block margin/padding zero — direct FO wrapper strut box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{display:block!important;margin:0!important;padding:0!important;border:none!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div block wrapper; structural box reset — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-003',
    label: 'Loop AI b10 w04 #003: FO>div * baseline valign',
    idea: 'h2-pin-line-height-from-live + FO>div * vertical-align:baseline — inline strut anchor under wrapper leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div * baseline valign; inline strut — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-004',
    label: 'Loop AI b10 w04 #004: FO a inline baseline',
    idea: 'h2-pin-line-height-from-live + FO a display:inline vertical-align:baseline — nav anchor wrapper strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{display:inline!important;vertical-align:baseline!important;text-decoration:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO anchor wrapper; nav inline strut — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-005',
    label: 'Loop AI b10 w04 #005: FO span inline-block',
    idea: 'h2-pin-line-height-from-live + FO span inline-block + baseline — text leaf wrapper vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO span wrapper; inline-block strut — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-006',
    label: 'Loop AI b10 w04 #006: FO p block margin-zero',
    idea: 'h2-pin-line-height-from-live + FO p display:block margin:0 — paragraph wrapper collapse vs strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{display:block!important;margin:0!important;padding:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO p block wrapper; margin collapse — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-007',
    label: 'Loop AI b10 w04 #007: FO li list-outside',
    idea: 'h2-pin-line-height-from-live + FO li list-style-position:outside — list-item wrapper vs text strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{display:list-item!important;list-style-position:outside!important;list-style-type:disc!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO li list wrapper; marker outside — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-008',
    label: 'Loop AI b10 w04 #008: FO strong weight-inherit',
    idea: 'h2-pin-line-height-from-live + FO strong font-weight:inherit — emphasis wrapper inherits strut metrics',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{font-weight:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO strong wrapper; weight inherit — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-009',
    label: 'Loop AI b10 w04 #009: FO em style-inherit',
    idea: 'h2-pin-line-height-from-live + FO em font-style:inherit — italic wrapper inherits pinned line box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{font-style:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO em wrapper; style inherit — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-010',
    label: 'Loop AI b10 w04 #10: FO button font-inherit',
    idea: 'h2-pin-line-height-from-live + FO button font:inherit — control chrome wrapper vs text strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{font:inherit!important;line-height:inherit!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO button wrapper; font inherit — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-011',
    label: 'Loop AI b10 w04 #11: FO label inline-block',
    idea: 'h2-pin-line-height-from-live + FO label inline-block + baseline — form label wrapper strut alignment',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO label wrapper; form text strut — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-012',
    label: 'Loop AI b10 w04 #12: FO h2 heading margin-zero',
    idea: 'h2-pin-line-height-from-live + FO h2 margin:0 display:block — heading wrapper vs live strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{display:block!important;margin:0!important;padding:0!important;font-size:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO h2 heading wrapper; margin zero — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-013',
    label: 'Loop AI b10 w04 #13: FO nav flex row',
    idea: 'h2-pin-line-height-from-live + FO nav display:flex flex-direction:row — nav row wrapper before leaf strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO nav flex wrapper; row stretch — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-014',
    label: 'Loop AI b10 w04 #14: FO>div>a chain',
    idea: 'h2-pin-line-height-from-live + FO>div>a display:inline baseline — nested anchor chain under FO wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>a{display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div>a chain; nested anchor — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-015',
    label: 'Loop AI b10 w04 #15: FO>div>span chain',
    idea: 'h2-pin-line-height-from-live + FO>div>span inline baseline — nested span chain under FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>span{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div>span chain; nested span — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-016',
    label: 'Loop AI b10 w04 #16: FO * font-kerning normal',
    idea: 'h2-pin-line-height-from-live + FO * font-kerning:normal — kerning wrapper on all leaves vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * kerning; Chromium copy alignment — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-017',
    label: 'Loop AI b10 w04 #17: FO * text-rendering geometric',
    idea: 'h2-pin-line-height-from-live + FO * text-rendering:geometricPrecision — glyph hinting wrapper vs strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * text-rendering; geometric precision — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-018',
    label: 'Loop AI b10 w04 #18: FO * font-smoothing antialiased',
    idea: 'h2-pin-line-height-from-live + FO * -webkit-font-smoothing:antialiased — smoothing on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{-webkit-font-smoothing:antialiased!important;font-smooth:always!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * font smoothing; antialiased chain — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-019',
    label: 'Loop AI b10 w04 #19: FO * text-box-edge auto',
    idea: 'h2-pin-line-height-from-live + FO * text-box-edge:auto — line box edge model vs measured strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-edge:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * text-box-edge auto; edge model — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-020',
    label: 'Loop AI b10 w04 #20: FO contain layout style',
    idea: 'h2-pin-line-height-from-live + FO contain:layout style — wrapper containment vs FO text strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{contain:layout style!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO root contain; layout+style — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-021',
    label: 'Loop AI b10 w04 #21: FO overflow visible',
    idea: 'h2-pin-line-height-from-live + FO overflow:visible + isolation:isolate — paint wrapper vs strut clip',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{overflow:visible!important;isolation:isolate!important;position:relative!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO overflow visible; isolation — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-022',
    label: 'Loop AI b10 w04 #22: FO>div min-height zero',
    idea: 'h2-pin-line-height-from-live + FO>div min-height:0 — flex/grid child wrapper shrink vs strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{min-height:0!important;min-width:0!important;display:block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div min-height 0; flex child — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-023',
    label: 'Loop AI b10 w04 #23: FO * min-height zero',
    idea: 'h2-pin-line-height-from-live + FO * min-height:0 min-width:0 — all leaves shrink wrapper vs strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * min dimensions; shrink leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-024',
    label: 'Loop AI b10 w04 #24: FO * display inline',
    idea: 'h2-pin-line-height-from-live + FO * display:inline — force inline formatting on leaves under pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * display inline; inline fmt — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-025',
    label: 'Loop AI b10 w04 #25: FO * white-space normal',
    idea: 'h2-pin-line-height-from-live + FO * white-space:normal — wrap model on leaves vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * white-space normal; wrap — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-026',
    label: 'Loop AI b10 w04 #26: FO * word-break normal',
    idea: 'h2-pin-line-height-from-live + FO * word-break:normal overflow-wrap:normal — break rules on wrapper leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * word-break; break rules — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-027',
    label: 'Loop AI b10 w04 #27: FO * hyphens none',
    idea: 'h2-pin-line-height-from-live + FO * hyphens:none — hyphenation off on text leaves before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * hyphens none; no hyphenation — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-028',
    label: 'Loop AI b10 w04 #28: FO * letter-spacing normal',
    idea: 'h2-pin-line-height-from-live + FO * letter-spacing:normal word-spacing:normal — tracking reset on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{letter-spacing:normal!important;word-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * letter-spacing; tracking reset — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-029',
    label: 'Loop AI b10 w04 #29: FO * ligatures normal',
    idea: 'h2-pin-line-height-from-live + FO * font-variant-ligatures:normal — ligature wrapper vs strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-ligatures:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * ligatures normal; OpenType — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-030',
    label: 'Loop AI b10 w04 #30: FO * font-synthesis none',
    idea: 'h2-pin-line-height-from-live + FO * font-synthesis:none — no synthetic bold/italic on FO leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-synthesis:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * font-synthesis none; no synth — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-031',
    label: 'Loop AI b10 w04 #31: FO>div text-size-adjust',
    idea: 'h2-pin-line-height-from-live + FO>div text-size-adjust 100% — mid-wrapper mobile shrink vs strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div text-size-adjust; mid wrapper — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-032',
    label: 'Loop AI b10 w04 #32: FO * box-decoration clone',
    idea: 'h2-pin-line-height-from-live + FO * box-decoration-break:clone — inline box break model on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{box-decoration-break:clone!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * box-decoration-break; clone — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-033',
    label: 'Loop AI b10 w04 #33: FO * mix-blend normal',
    idea: 'h2-pin-line-height-from-live + FO * mix-blend-mode:normal isolation:auto — blend wrapper on text chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{mix-blend-mode:normal!important;isolation:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * mix-blend normal; paint — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-034',
    label: 'Loop AI b10 w04 #34: FO * opacity full',
    idea: 'h2-pin-line-height-from-live + FO * opacity:1 visibility:visible — alpha wrapper does not hide strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{opacity:1!important;visibility:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * opacity 1; visibility — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-035',
    label: 'Loop AI b10 w04 #35: FO * transform none',
    idea: 'h2-pin-line-height-from-live + FO * transform:none — no 2D transform on leaves vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{transform:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * transform none; no 2D xform — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-036',
    label: 'Loop AI b10 w04 #36: FO * writing-mode horizontal',
    idea: 'h2-pin-line-height-from-live + FO * writing-mode:horizontal-tb text-orientation:mixed — axis on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * writing-mode horizontal; axis — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-037',
    label: 'Loop AI b10 w04 #37: FO * direction ltr bidi',
    idea: 'h2-pin-line-height-from-live + FO * direction:ltr unicode-bidi:isolate — bidi wrapper on text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO * direction ltr; bidi isolate — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-038',
    label: 'Loop AI b10 w04 #38: FO>div>div nested block',
    idea: 'h2-pin-line-height-from-live + FO>div>div nested display:block — double wrapper chain vs strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>div{display:block!important;margin:0!important;padding:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO>div>div nested; double wrapper — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-039',
    label: 'Loop AI b10 w04 #39: FO code monospace inherit',
    idea: 'h2-pin-line-height-from-live + FO code font-family:inherit white-space:pre-wrap — mono wrapper strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{font-family:inherit!important;white-space:pre-wrap!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO code wrapper; mono inherit — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w04-040',
    label: 'Loop AI b10 w04 #40: FO small font-size smaller',
    idea: 'h2-pin-line-height-from-live + FO small font-size:smaller line-height:inherit — smaller text wrapper strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{font-size:smaller!important;line-height:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w04; FO small wrapper; smaller size — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
