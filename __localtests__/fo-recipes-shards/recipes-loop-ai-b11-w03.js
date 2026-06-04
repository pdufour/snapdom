/**
 * Loop AI batch-11 FO recipe shard (worker 03) — text-fix: vertical-lr on FO text leaves.
 * PRIMARY: writing-mode:vertical-lr on scoped text-leaf selectors
 * 100 recipes: loop-ai-b11-w03-001..100
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
    id: 'loop-ai-b11-w03-001',
    label: 'Loop AI b11 w03 #001: FO * vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on star with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-002',
    label: 'Loop AI b11 w03 #002: FO * vertical-lr upright',
    idea: 'writing-mode:vertical-lr on star with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-003',
    label: 'Loop AI b11 w03 #003: FO * vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on star with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-004',
    label: 'Loop AI b11 w03 #004: FO * vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on star with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-005',
    label: 'Loop AI b11 w03 #005: FO * vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on star with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-006',
    label: 'Loop AI b11 w03 #006: FO * vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on star with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-007',
    label: 'Loop AI b11 w03 #007: FO * vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on star with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-008',
    label: 'Loop AI b11 w03 #008: FO * vertical-lr embed',
    idea: 'writing-mode:vertical-lr on star with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-009',
    label: 'Loop AI b11 w03 #009: FO * vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on star with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-010',
    label: 'Loop AI b11 w03 #010: FO * vertical-lr strut',
    idea: 'writing-mode:vertical-lr on star with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; star-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-011',
    label: 'Loop AI b11 w03 #011: FO span vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on span with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-012',
    label: 'Loop AI b11 w03 #012: FO span vertical-lr upright',
    idea: 'writing-mode:vertical-lr on span with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-013',
    label: 'Loop AI b11 w03 #013: FO span vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on span with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-014',
    label: 'Loop AI b11 w03 #014: FO span vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on span with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-015',
    label: 'Loop AI b11 w03 #015: FO span vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on span with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-016',
    label: 'Loop AI b11 w03 #016: FO span vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on span with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-017',
    label: 'Loop AI b11 w03 #017: FO span vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on span with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-018',
    label: 'Loop AI b11 w03 #018: FO span vertical-lr embed',
    idea: 'writing-mode:vertical-lr on span with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-019',
    label: 'Loop AI b11 w03 #019: FO span vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on span with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-020',
    label: 'Loop AI b11 w03 #020: FO span vertical-lr strut',
    idea: 'writing-mode:vertical-lr on span with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; span-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-021',
    label: 'Loop AI b11 w03 #021: text chain vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on text-chain with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-022',
    label: 'Loop AI b11 w03 #022: text chain vertical-lr upright',
    idea: 'writing-mode:vertical-lr on text-chain with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-023',
    label: 'Loop AI b11 w03 #023: text chain vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on text-chain with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-024',
    label: 'Loop AI b11 w03 #024: text chain vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on text-chain with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-025',
    label: 'Loop AI b11 w03 #025: text chain vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on text-chain with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-026',
    label: 'Loop AI b11 w03 #026: text chain vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on text-chain with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-027',
    label: 'Loop AI b11 w03 #027: text chain vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on text-chain with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-028',
    label: 'Loop AI b11 w03 #028: text chain vertical-lr embed',
    idea: 'writing-mode:vertical-lr on text-chain with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-029',
    label: 'Loop AI b11 w03 #029: text chain vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on text-chain with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-030',
    label: 'Loop AI b11 w03 #030: text chain vertical-lr strut',
    idea: 'writing-mode:vertical-lr on text-chain with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; text-chain-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-031',
    label: 'Loop AI b11 w03 #031: FO p vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on p with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-032',
    label: 'Loop AI b11 w03 #032: FO p vertical-lr upright',
    idea: 'writing-mode:vertical-lr on p with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-033',
    label: 'Loop AI b11 w03 #033: FO p vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on p with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-034',
    label: 'Loop AI b11 w03 #034: FO p vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on p with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-035',
    label: 'Loop AI b11 w03 #035: FO p vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on p with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-036',
    label: 'Loop AI b11 w03 #036: FO p vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on p with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-037',
    label: 'Loop AI b11 w03 #037: FO p vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on p with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-038',
    label: 'Loop AI b11 w03 #038: FO p vertical-lr embed',
    idea: 'writing-mode:vertical-lr on p with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-039',
    label: 'Loop AI b11 w03 #039: FO p vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on p with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-040',
    label: 'Loop AI b11 w03 #040: FO p vertical-lr strut',
    idea: 'writing-mode:vertical-lr on p with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; p-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-041',
    label: 'Loop AI b11 w03 #041: FO label vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on label with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-042',
    label: 'Loop AI b11 w03 #042: FO label vertical-lr upright',
    idea: 'writing-mode:vertical-lr on label with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-043',
    label: 'Loop AI b11 w03 #043: FO label vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on label with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-044',
    label: 'Loop AI b11 w03 #044: FO label vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on label with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-045',
    label: 'Loop AI b11 w03 #045: FO label vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on label with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-046',
    label: 'Loop AI b11 w03 #046: FO label vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on label with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-047',
    label: 'Loop AI b11 w03 #047: FO label vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on label with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-048',
    label: 'Loop AI b11 w03 #048: FO label vertical-lr embed',
    idea: 'writing-mode:vertical-lr on label with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-049',
    label: 'Loop AI b11 w03 #049: FO label vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on label with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-050',
    label: 'Loop AI b11 w03 #050: FO label vertical-lr strut',
    idea: 'writing-mode:vertical-lr on label with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; label-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-051',
    label: 'Loop AI b11 w03 #051: FO button vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on button with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-052',
    label: 'Loop AI b11 w03 #052: FO button vertical-lr upright',
    idea: 'writing-mode:vertical-lr on button with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-053',
    label: 'Loop AI b11 w03 #053: FO button vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on button with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-054',
    label: 'Loop AI b11 w03 #054: FO button vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on button with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-055',
    label: 'Loop AI b11 w03 #055: FO button vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on button with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-056',
    label: 'Loop AI b11 w03 #056: FO button vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on button with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-057',
    label: 'Loop AI b11 w03 #057: FO button vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on button with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-058',
    label: 'Loop AI b11 w03 #058: FO button vertical-lr embed',
    idea: 'writing-mode:vertical-lr on button with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-059',
    label: 'Loop AI b11 w03 #059: FO button vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on button with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-060',
    label: 'Loop AI b11 w03 #060: FO button vertical-lr strut',
    idea: 'writing-mode:vertical-lr on button with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; button-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-061',
    label: 'Loop AI b11 w03 #061: FO li vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on li with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-062',
    label: 'Loop AI b11 w03 #062: FO li vertical-lr upright',
    idea: 'writing-mode:vertical-lr on li with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-063',
    label: 'Loop AI b11 w03 #063: FO li vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on li with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-064',
    label: 'Loop AI b11 w03 #064: FO li vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on li with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-065',
    label: 'Loop AI b11 w03 #065: FO li vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on li with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-066',
    label: 'Loop AI b11 w03 #066: FO li vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on li with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-067',
    label: 'Loop AI b11 w03 #067: FO li vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on li with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-068',
    label: 'Loop AI b11 w03 #068: FO li vertical-lr embed',
    idea: 'writing-mode:vertical-lr on li with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-069',
    label: 'Loop AI b11 w03 #069: FO li vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on li with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-070',
    label: 'Loop AI b11 w03 #070: FO li vertical-lr strut',
    idea: 'writing-mode:vertical-lr on li with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; li-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-071',
    label: 'Loop AI b11 w03 #071: strong+em vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on strong-em with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-072',
    label: 'Loop AI b11 w03 #072: strong+em vertical-lr upright',
    idea: 'writing-mode:vertical-lr on strong-em with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-073',
    label: 'Loop AI b11 w03 #073: strong+em vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on strong-em with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-074',
    label: 'Loop AI b11 w03 #074: strong+em vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on strong-em with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-075',
    label: 'Loop AI b11 w03 #075: strong+em vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on strong-em with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-076',
    label: 'Loop AI b11 w03 #076: strong+em vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on strong-em with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-077',
    label: 'Loop AI b11 w03 #077: strong+em vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on strong-em with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-078',
    label: 'Loop AI b11 w03 #078: strong+em vertical-lr embed',
    idea: 'writing-mode:vertical-lr on strong-em with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-079',
    label: 'Loop AI b11 w03 #079: strong+em vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on strong-em with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-080',
    label: 'Loop AI b11 w03 #080: strong+em vertical-lr strut',
    idea: 'writing-mode:vertical-lr on strong-em with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; strong-em-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-081',
    label: 'Loop AI b11 w03 #081: small+code vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on small-code with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-082',
    label: 'Loop AI b11 w03 #082: small+code vertical-lr upright',
    idea: 'writing-mode:vertical-lr on small-code with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-083',
    label: 'Loop AI b11 w03 #083: small+code vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on small-code with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-084',
    label: 'Loop AI b11 w03 #084: small+code vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on small-code with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-085',
    label: 'Loop AI b11 w03 #085: small+code vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on small-code with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-086',
    label: 'Loop AI b11 w03 #086: small+code vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on small-code with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-087',
    label: 'Loop AI b11 w03 #087: small+code vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on small-code with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-088',
    label: 'Loop AI b11 w03 #088: small+code vertical-lr embed',
    idea: 'writing-mode:vertical-lr on small-code with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-089',
    label: 'Loop AI b11 w03 #089: small+code vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on small-code with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-090',
    label: 'Loop AI b11 w03 #090: small+code vertical-lr strut',
    idea: 'writing-mode:vertical-lr on small-code with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject small,foreignObject code{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; small-code-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-091',
    label: 'Loop AI b11 w03 #091: headings vertical-lr mixed',
    idea: 'writing-mode:vertical-lr on headings with mixed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-mixed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-092',
    label: 'Loop AI b11 w03 #092: headings vertical-lr upright',
    idea: 'writing-mode:vertical-lr on headings with upright stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-upright; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-093',
    label: 'Loop AI b11 w03 #093: headings vertical-lr max-content',
    idea: 'writing-mode:vertical-lr on headings with max-content stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-max-content; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-094',
    label: 'Loop AI b11 w03 #094: headings vertical-lr lh-normal',
    idea: 'writing-mode:vertical-lr on headings with lh-normal stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-lh-normal; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-095',
    label: 'Loop AI b11 w03 #095: headings vertical-lr block-auto',
    idea: 'writing-mode:vertical-lr on headings with block-auto stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-block-auto; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-096',
    label: 'Loop AI b11 w03 #096: headings vertical-lr inline-block',
    idea: 'writing-mode:vertical-lr on headings with inline-block stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-inline-block; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-097',
    label: 'Loop AI b11 w03 #097: headings vertical-lr ltr',
    idea: 'writing-mode:vertical-lr on headings with ltr stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-ltr; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-098',
    label: 'Loop AI b11 w03 #098: headings vertical-lr embed',
    idea: 'writing-mode:vertical-lr on headings with embed stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;unicode-bidi:embed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-embed; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-099',
    label: 'Loop AI b11 w03 #099: headings vertical-lr sideways-lr-to',
    idea: 'writing-mode:vertical-lr on headings with sideways-lr-to stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:sideways!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-sideways-lr-to; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w03-100',
    label: 'Loop AI b11 w03 #100: headings vertical-lr strut',
    idea: 'writing-mode:vertical-lr on headings with strut stack — text leaf axis probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:vertical-lr!important;text-orientation:mixed!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w03; headings-strut; writing-mode:vertical-lr on scoped text-leaf selectors — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w03: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
