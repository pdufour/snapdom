/**
 * Loop AI batch-11 FO recipe shard (worker 05) — text-fix: sideways-rl scoped selectors.
 * PRIMARY: writing-mode:sideways-rl on scoped selectors (never FO *)
 * 100 recipes: loop-ai-b11-w05-001..100
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
    id: 'loop-ai-b11-w05-001',
    label: 'Loop AI b11 w05 #001: sideways-rl span mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; span-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-002',
    label: 'Loop AI b11 w05 #002: sideways-rl span lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; span-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-003',
    label: 'Loop AI b11 w05 #003: sideways-rl span max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; span-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-004',
    label: 'Loop AI b11 w05 #004: sideways-rl span baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; span-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-005',
    label: 'Loop AI b11 w05 #005: sideways-rl span ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; span-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-006',
    label: 'Loop AI b11 w05 #006: sideways-rl a mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; a-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-007',
    label: 'Loop AI b11 w05 #007: sideways-rl a lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; a-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-008',
    label: 'Loop AI b11 w05 #008: sideways-rl a max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; a-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-009',
    label: 'Loop AI b11 w05 #009: sideways-rl a baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; a-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-010',
    label: 'Loop AI b11 w05 #010: sideways-rl a ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; a-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-011',
    label: 'Loop AI b11 w05 #011: sideways-rl nav-a mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject nav a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; nav-a-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-012',
    label: 'Loop AI b11 w05 #012: sideways-rl nav-a lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject nav a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; nav-a-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-013',
    label: 'Loop AI b11 w05 #013: sideways-rl nav-a max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject nav a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; nav-a-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-014',
    label: 'Loop AI b11 w05 #014: sideways-rl nav-a baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject nav a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; nav-a-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-015',
    label: 'Loop AI b11 w05 #015: sideways-rl nav-a ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject nav a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; nav-a-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-016',
    label: 'Loop AI b11 w05 #016: sideways-rl p mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject p — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; p-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-017',
    label: 'Loop AI b11 w05 #017: sideways-rl p lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject p — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; p-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-018',
    label: 'Loop AI b11 w05 #018: sideways-rl p max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject p — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; p-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-019',
    label: 'Loop AI b11 w05 #019: sideways-rl p baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject p — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; p-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-020',
    label: 'Loop AI b11 w05 #020: sideways-rl p ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject p — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; p-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-021',
    label: 'Loop AI b11 w05 #021: sideways-rl label mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject label — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; label-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-022',
    label: 'Loop AI b11 w05 #022: sideways-rl label lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject label — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; label-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-023',
    label: 'Loop AI b11 w05 #023: sideways-rl label max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject label — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; label-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-024',
    label: 'Loop AI b11 w05 #024: sideways-rl label baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject label — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; label-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-025',
    label: 'Loop AI b11 w05 #025: sideways-rl label ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject label — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; label-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-026',
    label: 'Loop AI b11 w05 #026: sideways-rl button mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject button — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; button-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-027',
    label: 'Loop AI b11 w05 #027: sideways-rl button lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject button — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; button-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-028',
    label: 'Loop AI b11 w05 #028: sideways-rl button max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject button — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; button-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-029',
    label: 'Loop AI b11 w05 #029: sideways-rl button baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject button — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; button-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-030',
    label: 'Loop AI b11 w05 #030: sideways-rl button ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject button — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; button-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-031',
    label: 'Loop AI b11 w05 #031: sideways-rl li mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject li — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; li-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-032',
    label: 'Loop AI b11 w05 #032: sideways-rl li lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject li — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; li-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-033',
    label: 'Loop AI b11 w05 #033: sideways-rl li max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject li — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; li-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-034',
    label: 'Loop AI b11 w05 #034: sideways-rl li baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject li — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; li-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-035',
    label: 'Loop AI b11 w05 #035: sideways-rl li ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject li — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; li-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-036',
    label: 'Loop AI b11 w05 #036: sideways-rl h1 mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h1 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h1-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-037',
    label: 'Loop AI b11 w05 #037: sideways-rl h1 lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h1 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h1-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-038',
    label: 'Loop AI b11 w05 #038: sideways-rl h1 max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h1 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h1-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-039',
    label: 'Loop AI b11 w05 #039: sideways-rl h1 baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h1 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h1-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-040',
    label: 'Loop AI b11 w05 #040: sideways-rl h1 ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h1 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h1-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-041',
    label: 'Loop AI b11 w05 #041: sideways-rl h2 mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h2 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h2-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-042',
    label: 'Loop AI b11 w05 #042: sideways-rl h2 lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h2 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h2-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-043',
    label: 'Loop AI b11 w05 #043: sideways-rl h2 max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h2 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h2-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-044',
    label: 'Loop AI b11 w05 #044: sideways-rl h2 baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h2 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h2-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-045',
    label: 'Loop AI b11 w05 #045: sideways-rl h2 ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h2 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h2{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h2-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-046',
    label: 'Loop AI b11 w05 #046: sideways-rl h3 mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h3 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h3{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h3-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-047',
    label: 'Loop AI b11 w05 #047: sideways-rl h3 lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h3 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h3{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h3-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-048',
    label: 'Loop AI b11 w05 #048: sideways-rl h3 max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h3 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h3{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h3-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-049',
    label: 'Loop AI b11 w05 #049: sideways-rl h3 baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h3 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h3{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h3-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-050',
    label: 'Loop AI b11 w05 #050: sideways-rl h3 ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h3 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h3{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h3-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-051',
    label: 'Loop AI b11 w05 #051: sideways-rl h4 mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h4 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h4{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h4-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-052',
    label: 'Loop AI b11 w05 #052: sideways-rl h4 lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h4 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h4{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h4-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-053',
    label: 'Loop AI b11 w05 #053: sideways-rl h4 max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h4 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h4{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h4-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-054',
    label: 'Loop AI b11 w05 #054: sideways-rl h4 baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h4 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h4{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h4-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-055',
    label: 'Loop AI b11 w05 #055: sideways-rl h4 ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject h4 — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h4{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; h4-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-056',
    label: 'Loop AI b11 w05 #056: sideways-rl div mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-057',
    label: 'Loop AI b11 w05 #057: sideways-rl div lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-058',
    label: 'Loop AI b11 w05 #058: sideways-rl div max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-059',
    label: 'Loop AI b11 w05 #059: sideways-rl div baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-060',
    label: 'Loop AI b11 w05 #060: sideways-rl div ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-061',
    label: 'Loop AI b11 w05 #061: sideways-rl div-span mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div span{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-span-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-062',
    label: 'Loop AI b11 w05 #062: sideways-rl div-span lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div span{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-span-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-063',
    label: 'Loop AI b11 w05 #063: sideways-rl div-span max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div span{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-span-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-064',
    label: 'Loop AI b11 w05 #064: sideways-rl div-span baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div span{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-span-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-065',
    label: 'Loop AI b11 w05 #065: sideways-rl div-span ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div span — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div span{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-span-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-066',
    label: 'Loop AI b11 w05 #066: sideways-rl div-a mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-a-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-067',
    label: 'Loop AI b11 w05 #067: sideways-rl div-a lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-a-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-068',
    label: 'Loop AI b11 w05 #068: sideways-rl div-a max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-a-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-069',
    label: 'Loop AI b11 w05 #069: sideways-rl div-a baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-a-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-070',
    label: 'Loop AI b11 w05 #070: sideways-rl div-a ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject>div a — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; div-a-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-071',
    label: 'Loop AI b11 w05 #071: sideways-rl strong mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject strong — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; strong-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-072',
    label: 'Loop AI b11 w05 #072: sideways-rl strong lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject strong — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; strong-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-073',
    label: 'Loop AI b11 w05 #073: sideways-rl strong max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject strong — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; strong-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-074',
    label: 'Loop AI b11 w05 #074: sideways-rl strong baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject strong — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; strong-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-075',
    label: 'Loop AI b11 w05 #075: sideways-rl strong ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject strong — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; strong-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-076',
    label: 'Loop AI b11 w05 #076: sideways-rl em mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject em — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; em-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-077',
    label: 'Loop AI b11 w05 #077: sideways-rl em lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject em — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; em-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-078',
    label: 'Loop AI b11 w05 #078: sideways-rl em max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject em — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; em-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-079',
    label: 'Loop AI b11 w05 #079: sideways-rl em baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject em — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; em-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-080',
    label: 'Loop AI b11 w05 #080: sideways-rl em ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject em — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject em{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; em-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-081',
    label: 'Loop AI b11 w05 #081: sideways-rl small mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject small — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; small-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-082',
    label: 'Loop AI b11 w05 #082: sideways-rl small lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject small — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; small-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-083',
    label: 'Loop AI b11 w05 #083: sideways-rl small max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject small — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; small-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-084',
    label: 'Loop AI b11 w05 #084: sideways-rl small baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject small — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; small-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-085',
    label: 'Loop AI b11 w05 #085: sideways-rl small ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject small — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; small-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-086',
    label: 'Loop AI b11 w05 #086: sideways-rl code mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject code — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; code-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-087',
    label: 'Loop AI b11 w05 #087: sideways-rl code lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject code — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; code-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-088',
    label: 'Loop AI b11 w05 #088: sideways-rl code max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject code — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; code-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-089',
    label: 'Loop AI b11 w05 #089: sideways-rl code baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject code — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; code-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-090',
    label: 'Loop AI b11 w05 #090: sideways-rl code ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject code — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject code{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; code-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-091',
    label: 'Loop AI b11 w05 #091: sideways-rl td mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject td — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject td{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; td-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-092',
    label: 'Loop AI b11 w05 #092: sideways-rl td lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject td — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject td{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; td-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-093',
    label: 'Loop AI b11 w05 #093: sideways-rl td max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject td — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject td{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; td-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-094',
    label: 'Loop AI b11 w05 #094: sideways-rl td baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject td — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject td{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; td-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-095',
    label: 'Loop AI b11 w05 #095: sideways-rl td ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject td — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject td{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; td-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-096',
    label: 'Loop AI b11 w05 #096: sideways-rl th mixed',
    idea: 'writing-mode:sideways-rl scoped to foreignObject th — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject th{writing-mode:sideways-rl!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; th-mixed; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-097',
    label: 'Loop AI b11 w05 #097: sideways-rl th lh-normal',
    idea: 'writing-mode:sideways-rl scoped to foreignObject th — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject th{writing-mode:sideways-rl!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; th-lh-normal; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-098',
    label: 'Loop AI b11 w05 #098: sideways-rl th max-content',
    idea: 'writing-mode:sideways-rl scoped to foreignObject th — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject th{writing-mode:sideways-rl!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; th-max-content; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-099',
    label: 'Loop AI b11 w05 #099: sideways-rl th baseline',
    idea: 'writing-mode:sideways-rl scoped to foreignObject th — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject th{writing-mode:sideways-rl!important;text-orientation:mixed!important;vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; th-baseline; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w05-100',
    label: 'Loop AI b11 w05 #100: sideways-rl th ltr',
    idea: 'writing-mode:sideways-rl scoped to foreignObject th — not global FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject th{writing-mode:sideways-rl!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w05; th-ltr; writing-mode:sideways-rl on scoped selectors (never FO *) — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w05: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
