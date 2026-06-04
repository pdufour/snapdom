/**
 * Loop AI batch-10 FO recipe shard (worker 22) — text-fix: vertical-align baseline/middle/sub/text-top on inline text.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const FLEX_BASELINE =
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  'align-items:baseline!important;overflow:visible!important}'

const FLEX_CENTER =
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  'align-items:center!important;overflow:visible!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w22-001',
    label: 'Loop AI b10 w22 #001: FO * inline baseline',
    idea: 'vertical-align:baseline on FO * display:inline — default alphabetic strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-002',
    label: 'Loop AI b10 w22 #002: FO * inline-block baseline',
    idea: 'vertical-align:baseline on FO * display:inline-block — blockified inline strut box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-003',
    label: 'Loop AI b10 w22 #003: FO a inline-block baseline lh',
    idea: 'vertical-align:baseline on FO anchors inline-block + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:baseline!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-004',
    label: 'Loop AI b10 w22 #004: FO span inline baseline lh1',
    idea: 'vertical-align:baseline on FO span inline + line-height:1 unitless strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject span{display:inline!important;vertical-align:baseline!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-005',
    label: 'Loop AI b10 w22 #005: FO * baseline from-font lh',
    idea: 'vertical-align:baseline + line-height:from-font on FO * — font-metrics strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:baseline!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-006',
    label: 'Loop AI b10 w22 #006: FO * baseline calc 1em lh',
    idea: 'vertical-align:baseline + line-height:calc(1em) on FO * — em strut without px',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:baseline!important;line-height:calc(1em)!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-007',
    label: 'Loop AI b10 w22 #007: flex baseline row * baseline',
    idea: 'flex align-items:baseline row + FO * inline vertical-align:baseline',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-008',
    label: 'Loop AI b10 w22 #008: flex baseline a inline-block',
    idea: 'flex baseline row + FO a inline-block vertical-align:baseline',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-009',
    label: 'Loop AI b10 w22 #009: flex baseline a align-self',
    idea: 'flex baseline row + anchor align-self:baseline + vertical-align:baseline',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject a{align-self:baseline!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-010',
    label: 'Loop AI b10 w22 #010: baseline-source alphabetic',
    idea: 'baseline-source:alphabetic + vertical-align:baseline on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{baseline-source:alphabetic!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:baseline; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-011',
    label: 'Loop AI b10 w22 #011: FO * inline-block middle',
    idea: 'vertical-align:middle on FO * display:inline-block — strut centering probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-012',
    label: 'Loop AI b10 w22 #012: FO span inline middle',
    idea: 'vertical-align:middle on FO span display:inline — inline middle strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject span{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-013',
    label: 'Loop AI b10 w22 #013: FO a inline-block middle lh',
    idea: 'vertical-align:middle on FO a inline-block + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:middle!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-014',
    label: 'Loop AI b10 w22 #014: flex baseline span middle',
    idea: 'flex baseline row + FO span inline vertical-align:middle',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject span{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-015',
    label: 'Loop AI b10 w22 #015: flex center * middle',
    idea: 'flex align-items:center row + FO * inline-block vertical-align:middle',
    css:
      FO_BASELINE_CSS +
      FLEX_CENTER + TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-016',
    label: 'Loop AI b10 w22 #016: FO>div * middle inline-block',
    idea: 'vertical-align:middle on foreignObject>div * inline-block — wrapper-scoped strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject>div *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-017',
    label: 'Loop AI b10 w22 #017: FO label inline-block middle',
    idea: 'vertical-align:middle on FO label inline-block — form text leaf strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject label{display:inline-block!important;vertical-align:middle!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-018',
    label: 'Loop AI b10 w22 #018: FO strong inline middle',
    idea: 'vertical-align:middle on FO strong inline + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject strong{display:inline!important;vertical-align:middle!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-019',
    label: 'Loop AI b10 w22 #019: FO * middle lh 1',
    idea: 'vertical-align:middle + line-height:1 on FO * — unitless middle strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:middle!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-020',
    label: 'Loop AI b10 w22 #020: FO * middle from-font lh',
    idea: 'vertical-align:middle + line-height:from-font on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:middle!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:middle; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-021',
    label: 'Loop AI b10 w22 #021: FO * inline sub',
    idea: 'vertical-align:sub on FO * display:inline — subscript strut probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-022',
    label: 'Loop AI b10 w22 #022: FO * inline-block sub',
    idea: 'vertical-align:sub on FO * display:inline-block',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-023',
    label: 'Loop AI b10 w22 #023: FO span inline sub lh',
    idea: 'vertical-align:sub on FO span inline + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject span{display:inline!important;vertical-align:sub!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-024',
    label: 'Loop AI b10 w22 #024: FO a inline-block sub',
    idea: 'vertical-align:sub on FO a inline-block — anchor subscript strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-025',
    label: 'Loop AI b10 w22 #025: FO em inline sub',
    idea: 'vertical-align:sub on FO em inline — emphasis leaf sub strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject em{display:inline!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-026',
    label: 'Loop AI b10 w22 #026: FO * inline sub lh1',
    idea: 'vertical-align:sub + line-height:1 on FO * inline',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:sub!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-027',
    label: 'Loop AI b10 w22 #027: flex baseline * sub',
    idea: 'flex baseline row + FO * inline vertical-align:sub',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-028',
    label: 'Loop AI b10 w22 #028: FO small inline-block sub',
    idea: 'vertical-align:sub on FO small inline-block — small text sub strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject small{display:inline-block!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-029',
    label: 'Loop AI b10 w22 #029: baseline-source first sub',
    idea: 'baseline-source:first + vertical-align:sub on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{baseline-source:first!important;vertical-align:sub!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-030',
    label: 'Loop AI b10 w22 #030: FO code inline-block sub lh',
    idea: 'vertical-align:sub on FO code inline-block + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject code{display:inline-block!important;vertical-align:sub!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:sub; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-031',
    label: 'Loop AI b10 w22 #031: FO * inline text-top',
    idea: 'vertical-align:text-top on FO * display:inline — text-top strut vs cap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-032',
    label: 'Loop AI b10 w22 #032: FO * inline-block text-top',
    idea: 'vertical-align:text-top on FO * display:inline-block',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-033',
    label: 'Loop AI b10 w22 #033: FO a inline-block text-top lh',
    idea: 'vertical-align:text-top on FO a inline-block + line-height:normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:text-top!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-034',
    label: 'Loop AI b10 w22 #034: FO span inline text-top',
    idea: 'vertical-align:text-top on FO span inline',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject span{display:inline!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-035',
    label: 'Loop AI b10 w22 #035: flex center * text-top',
    idea: 'flex align-items:center + FO * inline-block vertical-align:text-top',
    css:
      FO_BASELINE_CSS +
      FLEX_CENTER + TEXT_LEAF + 'foreignObject *{display:inline-block!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-036',
    label: 'Loop AI b10 w22 #036: flex baseline a text-top',
    idea: 'flex baseline row + FO a inline-block vertical-align:text-top',
    css:
      FO_BASELINE_CSS +
      FLEX_BASELINE + TEXT_LEAF + 'foreignObject a{display:inline-block!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-037',
    label: 'Loop AI b10 w22 #037: FO * text-top lh 1',
    idea: 'vertical-align:text-top + line-height:1 on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:text-top!important;line-height:1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-038',
    label: 'Loop AI b10 w22 #038: FO * text-top calc 1em lh',
    idea: 'vertical-align:text-top + line-height:calc(1em) on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:text-top!important;line-height:calc(1em)!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-039',
    label: 'Loop AI b10 w22 #039: FO p inline-block text-top',
    idea: 'vertical-align:text-top on FO p inline-block — paragraph text-top strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject p{display:inline-block!important;vertical-align:text-top!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w22-040',
    label: 'Loop AI b10 w22 #040: text-top trim both stack',
    idea: 'vertical-align:text-top + leading-trim both + text-box-trim on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{vertical-align:text-top!important;leading-trim:both!important;text-box-trim:trim-both!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w22; inline text vertical-align:text-top; FO-raster only — no text bypass.',
  }
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
