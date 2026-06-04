/**
 * Loop AI batch-12 FO recipe shard (worker 14) — text-fix: leading-trim + text-box-trim invisible.
 * 40 recipes: loop-ai-b12-w14-001..040 (8 FO scopes × 5 trim pairs; NO text-emphasis).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** Strip emphasis marks — invisible trim probes must not paint ruby-style dots. */
const EMPHASIS_OFF =
  'text-emphasis-style:none!important;text-emphasis-color:transparent!important;' +
  '-webkit-text-emphasis:none!important'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @param {string} sel */
/** @param {string} decls */
function trimRule(sel, decls) {
  return `${sel}{${EMPHASIS_OFF};${decls}}`
}

/** @type {{ slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  // 001–005: FO * — full trim-pair grid (neutral text-box-edge, no cap ornament)
  {
    slug: 'star lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on FO * — invisible half-leading reset, emphasis off',
    css: trimRule(
      'foreignObject *',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:normal on FO * — dual trim without cap edge',
    css: trimRule(
      'foreignObject *',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start + text-box-edge:normal on FO * — over-edge trim stack',
    css: trimRule(
      'foreignObject *',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end + text-box-edge:normal on FO * — under-edge trim stack',
    css: trimRule(
      'foreignObject *',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO * — engine default trim with emphasis stripped',
    css: trimRule(
      'foreignObject *',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 006–010: FO root
  {
    slug: 'fo-root lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on foreignObject root — wrapper-level invisible trim reset',
    css: trimRule(
      'foreignObject',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'fo-root lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO root — strut trim on wrapper only',
    css: trimRule(
      'foreignObject',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'fo-root lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on FO root — start-edge trim on wrapper',
    css: trimRule(
      'foreignObject',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'fo-root lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on FO root — end-edge trim on wrapper',
    css: trimRule(
      'foreignObject',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'fo-root lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO root — default trim keywords on wrapper',
    css: trimRule(
      'foreignObject',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 011–015: FO>div *
  {
    slug: 'divstar lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on FO>div * — scoped invisible trim under capture wrapper',
    css: trimRule(
      'foreignObject>div *',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'divstar lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO>div * — div-scoped dual trim stack',
    css: trimRule(
      'foreignObject>div *',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'divstar lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on FO>div * — start trim under FO>div',
    css: trimRule(
      'foreignObject>div *',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'divstar lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on FO>div * — end trim under FO>div',
    css: trimRule(
      'foreignObject>div *',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'divstar lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO>div * — normal leading trim under wrapper div',
    css: trimRule(
      'foreignObject>div *',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 016–020: FO a
  {
    slug: 'anchor lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on FO a — nav anchor invisible trim baseline',
    css: trimRule(
      'foreignObject a',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'anchor lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO a — anchor dual trim without cap edge',
    css: trimRule(
      'foreignObject a',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'anchor lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on FO a — anchor over-edge trim',
    css: trimRule(
      'foreignObject a',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'anchor lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on FO a — anchor under-edge trim',
    css: trimRule(
      'foreignObject a',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'anchor lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO a — default trim on nav anchors',
    css: trimRule(
      'foreignObject a',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 021–025: FO span
  {
    slug: 'span lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on FO span — inline leaf invisible trim reset',
    css: trimRule(
      'foreignObject span',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'span lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO span — span dual trim stack',
    css: trimRule(
      'foreignObject span',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'span lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on FO span — span start-edge trim',
    css: trimRule(
      'foreignObject span',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'span lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on FO span — span end-edge trim',
    css: trimRule(
      'foreignObject span',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'span lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO span — default trim on inline spans',
    css: trimRule(
      'foreignObject span',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 026–030: FO nav a
  {
    slug: 'nav lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on FO nav a — checkout nav invisible trim reset',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'nav lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO nav a — nav label dual trim',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'nav lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on FO nav a — nav start-edge trim',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'nav lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on FO nav a — nav end-edge trim',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'nav lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on FO nav a — default trim on nav labels',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  // 031–035: TEXT_CHAIN
  {
    slug: 'chain lt-none tbt-none',
    idea: 'leading-trim:none + text-box-trim:none on text chain — typographic leaves invisible trim reset',
    css:
      TEXT_CHAIN +
      '{leading-trim:none!important;text-box-trim:none!important;text-box-edge:normal!important;' +
      EMPHASIS_OFF +
      '}',
  },
  {
    slug: 'chain lt-both tbt-trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on text chain — chain dual trim without cap',
    css:
      TEXT_CHAIN +
      '{leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important;' +
      EMPHASIS_OFF +
      '}',
  },
  {
    slug: 'chain lt-start tbt-trim-start',
    idea: 'leading-trim:start + text-box-trim:trim-start on text chain — chain start-edge trim',
    css:
      TEXT_CHAIN +
      '{leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:normal!important;' +
      EMPHASIS_OFF +
      '}',
  },
  {
    slug: 'chain lt-end tbt-trim-end',
    idea: 'leading-trim:end + text-box-trim:trim-end on text chain — chain end-edge trim',
    css:
      TEXT_CHAIN +
      '{leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:normal!important;' +
      EMPHASIS_OFF +
      '}',
  },
  {
    slug: 'chain lt-normal tbt-none',
    idea: 'leading-trim:normal + text-box-trim:none on text chain — default trim on typographic leaves',
    css:
      TEXT_CHAIN +
      '{leading-trim:normal!important;text-box-trim:none!important;text-box-edge:normal!important;' +
      EMPHASIS_OFF +
      '}',
  },
  // 036–040: both-edges keyword + lh/strut pairings (still invisible edges, NO emphasis)
  {
    slug: 'star lt-both-edges tbt-trim-both',
    idea: 'leading-trim:both-edges + text-box-trim:trim-both on FO * — both-edges vs both keyword',
    css: trimRule(
      'foreignObject *',
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-both-edges tbt-none',
    idea: 'leading-trim:both-edges + text-box-trim:none on FO * — dual-edge leading with box trim off',
    css: trimRule(
      'foreignObject *',
      'leading-trim:both-edges!important;text-box-trim:none!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'star lt-none tbt-trim-both lh-normal',
    idea: 'leading-trim:none + text-box-trim:trim-both + line-height:normal on FO * — conflicting trim with normal strut',
    css: trimRule(
      'foreignObject *',
      'leading-trim:none!important;text-box-trim:trim-both!important;text-box-edge:normal!important;line-height:normal!important',
    ),
  },
  {
    slug: 'anchor lt-both-edges tbt-trim-start',
    idea: 'leading-trim:both-edges + text-box-trim:trim-start on FO a — anchor both-edges + start box trim',
    css: trimRule(
      'foreignObject a',
      'leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:normal!important',
    ),
  },
  {
    slug: 'nav lt-both tbt-trim-both lh-1',
    idea: 'leading-trim:both + text-box-trim:trim-both + line-height:1 on FO nav a — unitless strut + invisible trim',
    css: trimRule(
      'foreignObject nav a',
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important;line-height:1!important',
    ),
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const num = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b12-w14-${num}`,
    label: `Loop AI b12 w14 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w14; leading-trim + text-box-trim invisible (emphasis off, text-box-edge:normal); FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w14: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
