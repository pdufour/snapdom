/**
 * Loop AI batch-11 FO recipe shard (worker 10) — text-fix: unicode-bidi embed/isolate matrix.
 * PRIMARY: unicode-bidi embed/isolate/isolate-override matrix × scope × direction
 * 100 recipes: loop-ai-b11-w10-001..100
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
    id: 'loop-ai-b11-w10-001',
    label: 'Loop AI b11 w10 #001: span embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-002',
    label: 'Loop AI b11 w10 #002: span embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-003',
    label: 'Loop AI b11 w10 #003: span isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-004',
    label: 'Loop AI b11 w10 #004: span isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-005',
    label: 'Loop AI b11 w10 #005: span iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-006',
    label: 'Loop AI b11 w10 #006: span iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-007',
    label: 'Loop AI b11 w10 #007: span plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-008',
    label: 'Loop AI b11 w10 #008: span plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-009',
    label: 'Loop AI b11 w10 #009: span bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-010',
    label: 'Loop AI b11 w10 #010: span normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on span — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; span-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-011',
    label: 'Loop AI b11 w10 #011: a embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-012',
    label: 'Loop AI b11 w10 #012: a embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-013',
    label: 'Loop AI b11 w10 #013: a isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-014',
    label: 'Loop AI b11 w10 #014: a isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-015',
    label: 'Loop AI b11 w10 #015: a iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-016',
    label: 'Loop AI b11 w10 #016: a iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-017',
    label: 'Loop AI b11 w10 #017: a plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-018',
    label: 'Loop AI b11 w10 #018: a plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-019',
    label: 'Loop AI b11 w10 #019: a bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-020',
    label: 'Loop AI b11 w10 #020: a normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; a-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-021',
    label: 'Loop AI b11 w10 #021: nav-a embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-022',
    label: 'Loop AI b11 w10 #022: nav-a embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-023',
    label: 'Loop AI b11 w10 #023: nav-a isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-024',
    label: 'Loop AI b11 w10 #024: nav-a isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-025',
    label: 'Loop AI b11 w10 #025: nav-a iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-026',
    label: 'Loop AI b11 w10 #026: nav-a iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-027',
    label: 'Loop AI b11 w10 #027: nav-a plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-028',
    label: 'Loop AI b11 w10 #028: nav-a plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-029',
    label: 'Loop AI b11 w10 #029: nav-a bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-030',
    label: 'Loop AI b11 w10 #030: nav-a normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on nav-a — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; nav-a-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-031',
    label: 'Loop AI b11 w10 #031: star embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-032',
    label: 'Loop AI b11 w10 #032: star embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-033',
    label: 'Loop AI b11 w10 #033: star isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-034',
    label: 'Loop AI b11 w10 #034: star isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-035',
    label: 'Loop AI b11 w10 #035: star iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-036',
    label: 'Loop AI b11 w10 #036: star iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-037',
    label: 'Loop AI b11 w10 #037: star plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-038',
    label: 'Loop AI b11 w10 #038: star plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-039',
    label: 'Loop AI b11 w10 #039: star bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-040',
    label: 'Loop AI b11 w10 #040: star normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on star — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; star-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-041',
    label: 'Loop AI b11 w10 #041: chain embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-042',
    label: 'Loop AI b11 w10 #042: chain embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-043',
    label: 'Loop AI b11 w10 #043: chain isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-044',
    label: 'Loop AI b11 w10 #044: chain isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-045',
    label: 'Loop AI b11 w10 #045: chain iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-046',
    label: 'Loop AI b11 w10 #046: chain iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-047',
    label: 'Loop AI b11 w10 #047: chain plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-048',
    label: 'Loop AI b11 w10 #048: chain plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-049',
    label: 'Loop AI b11 w10 #049: chain bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-050',
    label: 'Loop AI b11 w10 #050: chain normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on chain — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; chain-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-051',
    label: 'Loop AI b11 w10 #051: fo-root embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-052',
    label: 'Loop AI b11 w10 #052: fo-root embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-053',
    label: 'Loop AI b11 w10 #053: fo-root isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-054',
    label: 'Loop AI b11 w10 #054: fo-root isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-055',
    label: 'Loop AI b11 w10 #055: fo-root iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-056',
    label: 'Loop AI b11 w10 #056: fo-root iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-057',
    label: 'Loop AI b11 w10 #057: fo-root plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-058',
    label: 'Loop AI b11 w10 #058: fo-root plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-059',
    label: 'Loop AI b11 w10 #059: fo-root bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-060',
    label: 'Loop AI b11 w10 #060: fo-root normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on fo-root — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-root-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-061',
    label: 'Loop AI b11 w10 #061: fo-div embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-062',
    label: 'Loop AI b11 w10 #062: fo-div embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-063',
    label: 'Loop AI b11 w10 #063: fo-div isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-064',
    label: 'Loop AI b11 w10 #064: fo-div isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-065',
    label: 'Loop AI b11 w10 #065: fo-div iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-066',
    label: 'Loop AI b11 w10 #066: fo-div iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-067',
    label: 'Loop AI b11 w10 #067: fo-div plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-068',
    label: 'Loop AI b11 w10 #068: fo-div plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-069',
    label: 'Loop AI b11 w10 #069: fo-div bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-070',
    label: 'Loop AI b11 w10 #070: fo-div normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on fo-div — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; fo-div-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-071',
    label: 'Loop AI b11 w10 #071: label embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-072',
    label: 'Loop AI b11 w10 #072: label embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-073',
    label: 'Loop AI b11 w10 #073: label isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-074',
    label: 'Loop AI b11 w10 #074: label isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-075',
    label: 'Loop AI b11 w10 #075: label iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-076',
    label: 'Loop AI b11 w10 #076: label iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-077',
    label: 'Loop AI b11 w10 #077: label plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-078',
    label: 'Loop AI b11 w10 #078: label plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-079',
    label: 'Loop AI b11 w10 #079: label bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-080',
    label: 'Loop AI b11 w10 #080: label normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on label — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; label-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-081',
    label: 'Loop AI b11 w10 #081: button embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-082',
    label: 'Loop AI b11 w10 #082: button embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-083',
    label: 'Loop AI b11 w10 #083: button isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-084',
    label: 'Loop AI b11 w10 #084: button isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-085',
    label: 'Loop AI b11 w10 #085: button iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-086',
    label: 'Loop AI b11 w10 #086: button iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-087',
    label: 'Loop AI b11 w10 #087: button plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-088',
    label: 'Loop AI b11 w10 #088: button plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-089',
    label: 'Loop AI b11 w10 #089: button bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-090',
    label: 'Loop AI b11 w10 #090: button normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on button — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; button-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-091',
    label: 'Loop AI b11 w10 #091: p embed-ltr',
    idea: 'unicode-bidi:embed + direction:ltr on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:embed!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-embed-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-092',
    label: 'Loop AI b11 w10 #092: p embed-rtl',
    idea: 'unicode-bidi:embed + direction:rtl on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:embed!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-embed-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-093',
    label: 'Loop AI b11 w10 #093: p isolate-ltr',
    idea: 'unicode-bidi:isolate + direction:ltr on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:isolate!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-isolate-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-094',
    label: 'Loop AI b11 w10 #094: p isolate-rtl',
    idea: 'unicode-bidi:isolate + direction:rtl on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:isolate!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-isolate-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-095',
    label: 'Loop AI b11 w10 #095: p iso-override-ltr',
    idea: 'unicode-bidi:isolate-override + direction:ltr on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:isolate-override!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-iso-override-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-096',
    label: 'Loop AI b11 w10 #096: p iso-override-rtl',
    idea: 'unicode-bidi:isolate-override + direction:rtl on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:isolate-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-iso-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-097',
    label: 'Loop AI b11 w10 #097: p plaintext-ltr',
    idea: 'unicode-bidi:plaintext + direction:ltr on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:plaintext!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-plaintext-ltr; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-098',
    label: 'Loop AI b11 w10 #098: p plaintext-rtl',
    idea: 'unicode-bidi:plaintext + direction:rtl on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:plaintext!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-plaintext-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-099',
    label: 'Loop AI b11 w10 #099: p bidi-override-rtl',
    idea: 'unicode-bidi:bidi-override + direction:rtl on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:bidi-override!important;direction:rtl!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-bidi-override-rtl; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w10-100',
    label: 'Loop AI b11 w10 #100: p normal-ltr-control',
    idea: 'unicode-bidi:normal + direction:ltr on p — embed/isolate matrix cell',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{unicode-bidi:normal!important;direction:ltr!important;writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w10; p-normal-ltr-control; unicode-bidi embed/isolate/isolate-override matrix × scope × direction — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w10: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
