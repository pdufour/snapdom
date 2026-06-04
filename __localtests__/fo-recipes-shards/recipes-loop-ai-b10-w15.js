/**
 * Loop AI batch-10 FO recipe shard (worker 15) — text-fix: font-feature-settings OpenType (40).
 * kern liga clig calt dlig hlig smcp c2sc onum lnum tnum pnum frac ordn salt ss01 + variant stacks.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w15-001',
    label: 'Loop AI b10 w15 #001: kern 1 explicit',
    idea: 'font-feature-settings:"kern" 1 on FO * — explicit OpenType kerning on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-002',
    label: 'Loop AI b10 w15 #002: kern 0 off',
    idea: 'font-feature-settings:"kern" 0 on FO * — disable kern feature vs live auto',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-003',
    label: 'Loop AI b10 w15 #003: liga 1 on',
    idea: 'font-feature-settings:"liga" 1 on FO * — standard ligatures via feature tag',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"liga" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-004',
    label: 'Loop AI b10 w15 #004: liga 0 off',
    idea: 'font-feature-settings:"liga" 0 on FO * — ligatures off at feature level',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"liga" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-005',
    label: 'Loop AI b10 w15 #005: kern liga both 1',
    idea: 'font-feature-settings:"kern" 1,"liga" 1 — paired kern+liga on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1,"liga" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-006',
    label: 'Loop AI b10 w15 #006: kern liga both 0',
    idea: 'font-feature-settings:"kern" 0,"liga" 0 — paired kern+liga disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 0,"liga" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-007',
    label: 'Loop AI b10 w15 #007: clig 1 on',
    idea: 'font-feature-settings:"clig" 1 — contextual ligatures on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"clig" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-008',
    label: 'Loop AI b10 w15 #008: clig 0 off',
    idea: 'font-feature-settings:"clig" 0 — contextual ligatures disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"clig" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-009',
    label: 'Loop AI b10 w15 #009: calt 1 on',
    idea: 'font-feature-settings:"calt" 1 — contextual alternates on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"calt" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-010',
    label: 'Loop AI b10 w15 #010: calt 0 off',
    idea: 'font-feature-settings:"calt" 0 — contextual alternates disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"calt" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-011',
    label: 'Loop AI b10 w15 #011: kern liga clig calt 1',
    idea: 'font-feature-settings kern/liga/clig/calt all 1 — full contextual typography on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1,"liga" 1,"clig" 1,"calt" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-012',
    label: 'Loop AI b10 w15 #012: kern liga clig calt 0',
    idea: 'font-feature-settings kern/liga/clig/calt all 0 — full contextual typography off',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 0,"liga" 0,"clig" 0,"calt" 0!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-013',
    label: 'Loop AI b10 w15 #013: dlig 1 on',
    idea: 'font-feature-settings:"dlig" 1 — discretionary ligatures on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"dlig" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-014',
    label: 'Loop AI b10 w15 #014: hlig 1 on',
    idea: 'font-feature-settings:"hlig" 1 — historical ligatures on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"hlig" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-015',
    label: 'Loop AI b10 w15 #015: smcp 1 on',
    idea: 'font-feature-settings:"smcp" 1 — small caps via OpenType feature',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"smcp" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-016',
    label: 'Loop AI b10 w15 #016: c2sc 1 on',
    idea: 'font-feature-settings:"c2sc" 1 — small caps from capitals feature',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"c2sc" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-017',
    label: 'Loop AI b10 w15 #017: onum 1 oldstyle',
    idea: 'font-feature-settings:"onum" 1 — oldstyle figures via feature tag',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"onum" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-018',
    label: 'Loop AI b10 w15 #018: lnum 1 lining',
    idea: 'font-feature-settings:"lnum" 1 — lining figures via feature tag',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"lnum" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-019',
    label: 'Loop AI b10 w15 #019: tnum 1 tabular',
    idea: 'font-feature-settings:"tnum" 1 — tabular figures via feature tag',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"tnum" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-020',
    label: 'Loop AI b10 w15 #020: pnum 1 proportional',
    idea: 'font-feature-settings:"pnum" 1 — proportional figures via feature tag',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"pnum" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-021',
    label: 'Loop AI b10 w15 #021: frac 1 on',
    idea: 'font-feature-settings:"frac" 1 — diagonal fractions on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"frac" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-022',
    label: 'Loop AI b10 w15 #022: salt 1 alternates',
    idea: 'font-feature-settings:"salt" 1 — stylistic alternates on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"salt" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-023',
    label: 'Loop AI b10 w15 #023: ss01 1 set',
    idea: 'font-feature-settings:"ss01" 1 — stylistic set 01 on',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"ss01" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-024',
    label: 'Loop AI b10 w15 #024: features normal reset',
    idea: 'font-feature-settings:normal + font-variant:normal on FO * — UA default reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:normal!important;font-variant:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-025',
    label: 'Loop AI b10 w15 #025: kern 1 common-ligatures',
    idea: 'kern 1 + font-variant-ligatures:common-ligatures — feature+variant ligature stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1!important;font-variant-ligatures:common-ligatures!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-026',
    label: 'Loop AI b10 w15 #026: liga 0 ligatures none',
    idea: 'liga 0 + font-variant-ligatures:none — conflicting ligature off probes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"liga" 0!important;font-variant-ligatures:none!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-027',
    label: 'Loop AI b10 w15 #027: kern 1 kerning normal',
    idea: 'kern 1 + font-kerning:normal — OpenType kern + CSS kerning normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1!important;font-kerning:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-028',
    label: 'Loop AI b10 w15 #028: calt clig without kern',
    idea: 'calt 1 + clig 1 without kern/liga — contextual only stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"calt" 1,"clig" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-029',
    label: 'Loop AI b10 w15 #029: kern liga FO root',
    idea: 'font-feature-settings kern/liga on FO root only (not *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-feature-settings:"kern" 1,"liga" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-030',
    label: 'Loop AI b10 w15 #030: kern liga root and star',
    idea: 'font-feature-settings kern/liga on FO root + FO * — double application',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-feature-settings:"kern" 1,"liga" 1!important;}' +
      'foreignObject *{font-feature-settings:"kern" 1,"liga" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-031',
    label: 'Loop AI b10 w15 #031: onum oldstyle-nums variant',
    idea: 'onum 1 + font-variant-numeric:oldstyle-nums — figure feature+variant',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"onum" 1!important;font-variant-numeric:oldstyle-nums!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-032',
    label: 'Loop AI b10 w15 #032: full typography stack',
    idea: 'kern/liga/clig/calt 1 + common-ligatures + kerning normal + numeric normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1,"liga" 1,"clig" 1,"calt" 1!important;font-variant-ligatures:common-ligatures!important;font-kerning:normal!important;font-variant-numeric:normal!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-033',
    label: 'Loop AI b10 w15 #033: tnum tabular-nums variant',
    idea: 'tnum 1 + font-variant-numeric:tabular-nums — tabular figure stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"tnum" 1!important;font-variant-numeric:tabular-nums!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-034',
    label: 'Loop AI b10 w15 #034: optimizeLegibility kern 1',
    idea: 'text-rendering:optimizeLegibility + kern 1 — legibility hint + explicit kern',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"kern" 1!important;text-rendering:optimizeLegibility!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-035',
    label: 'Loop AI b10 w15 #035: chromium copy kern liga',
    idea: 'font-kerning:normal synthesis none + kern/liga 1 — chromium copy + features',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-feature-settings:"kern" 1,"liga" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-036',
    label: 'Loop AI b10 w15 #036: dlig hlig discretionary',
    idea: 'dlig 1 + hlig 1 — discretionary + historical ligature pair',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"dlig" 1,"hlig" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-037',
    label: 'Loop AI b10 w15 #037: pnum proportional-nums',
    idea: 'pnum 1 + font-variant-numeric:proportional-nums',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"pnum" 1!important;font-variant-numeric:proportional-nums!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-038',
    label: 'Loop AI b10 w15 #038: frac ordn pair',
    idea: 'frac 1 + ordn 1 — fractions + ordinals pair on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"frac" 1,"ordn" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-039',
    label: 'Loop AI b10 w15 #039: salt ss01 combo',
    idea: 'salt 1 + ss01 1 — stylistic alternates + set 01',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"salt" 1,"ss01" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w15-040',
    label: 'Loop AI b10 w15 #040: smcp c2sc caps pair',
    idea: 'smcp 1 + c2sc 1 — small caps feature pair',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-feature-settings:"smcp" 1,"c2sc" 1!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w15; OpenType font-feature-settings; FO-raster only — no text bypass.',
  }
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
