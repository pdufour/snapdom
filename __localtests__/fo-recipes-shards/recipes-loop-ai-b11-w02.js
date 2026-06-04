/**
 * Loop AI batch-11 FO recipe shard (worker 02) — text-fix: vertical-rl on FO anchors only.
 * PRIMARY: writing-mode:vertical-rl scoped to anchor selectors only
 * 100 recipes: loop-ai-b11-w02-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w02-001',
    label: 'Loop AI b11 w02 #001: FO a vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-002',
    label: 'Loop AI b11 w02 #002: FO a vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-003',
    label: 'Loop AI b11 w02 #003: FO a vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-004',
    label: 'Loop AI b11 w02 #004: FO a vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-005',
    label: 'Loop AI b11 w02 #005: FO a vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-006',
    label: 'Loop AI b11 w02 #006: FO a vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-007',
    label: 'Loop AI b11 w02 #007: FO a vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-008',
    label: 'Loop AI b11 w02 #008: FO a vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-009',
    label: 'Loop AI b11 w02 #009: FO a vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-010',
    label: 'Loop AI b11 w02 #010: FO a vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-011',
    label: 'Loop AI b11 w02 #011: FO nav a vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-012',
    label: 'Loop AI b11 w02 #012: FO nav a vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-013',
    label: 'Loop AI b11 w02 #013: FO nav a vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-014',
    label: 'Loop AI b11 w02 #014: FO nav a vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-015',
    label: 'Loop AI b11 w02 #015: FO nav a vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-016',
    label: 'Loop AI b11 w02 #016: FO nav a vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-017',
    label: 'Loop AI b11 w02 #017: FO nav a vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-018',
    label: 'Loop AI b11 w02 #018: FO nav a vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-019',
    label: 'Loop AI b11 w02 #019: FO nav a vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-020',
    label: 'Loop AI b11 w02 #020: FO nav a vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-021',
    label: 'Loop AI b11 w02 #021: FO header a vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-022',
    label: 'Loop AI b11 w02 #022: FO header a vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-023',
    label: 'Loop AI b11 w02 #023: FO header a vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-024',
    label: 'Loop AI b11 w02 #024: FO header a vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-025',
    label: 'Loop AI b11 w02 #025: FO header a vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-026',
    label: 'Loop AI b11 w02 #026: FO header a vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-027',
    label: 'Loop AI b11 w02 #027: FO header a vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-028',
    label: 'Loop AI b11 w02 #028: FO header a vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-029',
    label: 'Loop AI b11 w02 #029: FO header a vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-030',
    label: 'Loop AI b11 w02 #030: FO header a vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header a{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; header-a-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-031',
    label: 'Loop AI b11 w02 #031: FO a[href] vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-032',
    label: 'Loop AI b11 w02 #032: FO a[href] vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-033',
    label: 'Loop AI b11 w02 #033: FO a[href] vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-034',
    label: 'Loop AI b11 w02 #034: FO a[href] vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-035',
    label: 'Loop AI b11 w02 #035: FO a[href] vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-036',
    label: 'Loop AI b11 w02 #036: FO a[href] vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-037',
    label: 'Loop AI b11 w02 #037: FO a[href] vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-038',
    label: 'Loop AI b11 w02 #038: FO a[href] vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-039',
    label: 'Loop AI b11 w02 #039: FO a[href] vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-040',
    label: 'Loop AI b11 w02 #040: FO a[href] vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a[href]{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-href-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-041',
    label: 'Loop AI b11 w02 #041: FO>div a vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-042',
    label: 'Loop AI b11 w02 #042: FO>div a vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-043',
    label: 'Loop AI b11 w02 #043: FO>div a vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-044',
    label: 'Loop AI b11 w02 #044: FO>div a vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-045',
    label: 'Loop AI b11 w02 #045: FO>div a vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-046',
    label: 'Loop AI b11 w02 #046: FO>div a vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-047',
    label: 'Loop AI b11 w02 #047: FO>div a vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-048',
    label: 'Loop AI b11 w02 #048: FO>div a vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-049',
    label: 'Loop AI b11 w02 #049: FO>div a vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-050',
    label: 'Loop AI b11 w02 #050: FO>div a vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; div-a-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-051',
    label: 'Loop AI b11 w02 #051: FO a:first-child vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-052',
    label: 'Loop AI b11 w02 #052: FO a:first-child vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-053',
    label: 'Loop AI b11 w02 #053: FO a:first-child vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-054',
    label: 'Loop AI b11 w02 #054: FO a:first-child vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-055',
    label: 'Loop AI b11 w02 #055: FO a:first-child vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-056',
    label: 'Loop AI b11 w02 #056: FO a:first-child vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-057',
    label: 'Loop AI b11 w02 #057: FO a:first-child vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-058',
    label: 'Loop AI b11 w02 #058: FO a:first-child vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-059',
    label: 'Loop AI b11 w02 #059: FO a:first-child vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-060',
    label: 'Loop AI b11 w02 #060: FO a:first-child vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:first-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-first-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-061',
    label: 'Loop AI b11 w02 #061: FO a:last-child vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-062',
    label: 'Loop AI b11 w02 #062: FO a:last-child vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-063',
    label: 'Loop AI b11 w02 #063: FO a:last-child vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-064',
    label: 'Loop AI b11 w02 #064: FO a:last-child vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-065',
    label: 'Loop AI b11 w02 #065: FO a:last-child vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-066',
    label: 'Loop AI b11 w02 #066: FO a:last-child vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-067',
    label: 'Loop AI b11 w02 #067: FO a:last-child vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-068',
    label: 'Loop AI b11 w02 #068: FO a:last-child vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-069',
    label: 'Loop AI b11 w02 #069: FO a:last-child vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-070',
    label: 'Loop AI b11 w02 #070: FO a:last-child vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a:last-child{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-last-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-071',
    label: 'Loop AI b11 w02 #071: FO a+button vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-072',
    label: 'Loop AI b11 w02 #072: FO a+button vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-073',
    label: 'Loop AI b11 w02 #073: FO a+button vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-074',
    label: 'Loop AI b11 w02 #074: FO a+button vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-075',
    label: 'Loop AI b11 w02 #075: FO a+button vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-076',
    label: 'Loop AI b11 w02 #076: FO a+button vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-077',
    label: 'Loop AI b11 w02 #077: FO a+button vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-078',
    label: 'Loop AI b11 w02 #078: FO a+button vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-079',
    label: 'Loop AI b11 w02 #079: FO a+button vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-080',
    label: 'Loop AI b11 w02 #080: FO a+button vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject button{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-button-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-081',
    label: 'Loop AI b11 w02 #081: FO nav+a vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-082',
    label: 'Loop AI b11 w02 #082: FO nav+a vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-083',
    label: 'Loop AI b11 w02 #083: FO nav+a vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-084',
    label: 'Loop AI b11 w02 #084: FO nav+a vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-085',
    label: 'Loop AI b11 w02 #085: FO nav+a vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-086',
    label: 'Loop AI b11 w02 #086: FO nav+a vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-087',
    label: 'Loop AI b11 w02 #087: FO nav+a vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-088',
    label: 'Loop AI b11 w02 #088: FO nav+a vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-089',
    label: 'Loop AI b11 w02 #089: FO nav+a vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-090',
    label: 'Loop AI b11 w02 #090: FO nav+a vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a,foreignObject a{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; nav-a-a-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-091',
    label: 'Loop AI b11 w02 #091: FO a span vertical-rl mixed',
    idea: 'undefined; vertical-rl + text-orientation:mixed on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-mixed; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-092',
    label: 'Loop AI b11 w02 #092: FO a span vertical-rl inline-block',
    idea: 'undefined; vertical-rl + inline-block baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-inline-block; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-093',
    label: 'Loop AI b11 w02 #093: FO a span vertical-rl max-content',
    idea: 'undefined; vertical-rl + max-content inline size on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-max-content; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-094',
    label: 'Loop AI b11 w02 #094: FO a span vertical-rl lh-normal',
    idea: 'undefined; vertical-rl + line-height:normal strut on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-lh-normal; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-095',
    label: 'Loop AI b11 w02 #095: FO a span vertical-rl upright',
    idea: 'undefined; vertical-rl + text-orientation:upright on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-upright; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-096',
    label: 'Loop AI b11 w02 #096: FO a span vertical-rl ltr',
    idea: 'undefined; vertical-rl + direction:ltr on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-ltr; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-097',
    label: 'Loop AI b11 w02 #097: FO a span vertical-rl rtl',
    idea: 'undefined; vertical-rl + direction:rtl on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-rtl; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-098',
    label: 'Loop AI b11 w02 #098: FO a span vertical-rl isolate',
    idea: 'undefined; vertical-rl + unicode-bidi:isolate on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-isolate; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-099',
    label: 'Loop AI b11 w02 #099: FO a span vertical-rl geometric',
    idea: 'undefined; vertical-rl + geometricPrecision on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-geometric; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w02-100',
    label: 'Loop AI b11 w02 #100: FO a span vertical-rl nowrap',
    idea: 'undefined; vertical-rl + nowrap on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a span{writing-mode:vertical-rl!important;text-orientation:mixed!important;white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w02; a-span-nowrap; writing-mode:vertical-rl scoped to anchor selectors only — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w02: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
