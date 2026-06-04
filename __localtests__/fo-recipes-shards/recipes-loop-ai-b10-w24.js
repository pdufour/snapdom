/**
 * Loop AI batch-10 FO recipe shard (worker 24) — text-fix: align-self stretch/flex-start/baseline on a/span.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'nav a align-self stretch',
    idea: 'align-self:stretch on FO a — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 2,
    slug: 'nav a align-self flex-start',
    idea: 'align-self:flex-start on FO a — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 3,
    slug: 'nav a align-self baseline',
    idea: 'align-self:baseline on FO a — nav flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}',
  },
  {
    n: 4,
    slug: 'nav span align-self stretch',
    idea: 'align-self:stretch on FO span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 5,
    slug: 'nav span align-self flex-start',
    idea: 'align-self:flex-start on FO span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 6,
    slug: 'nav span align-self baseline',
    idea: 'align-self:baseline on FO span — nav flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject nav span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 7,
    slug: 'FO a align-self stretch inline-block',
    idea: 'align-self:stretch on FO a — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 8,
    slug: 'FO a align-self flex-start height auto',
    idea: 'align-self:flex-start on FO a — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;height:auto!important;min-height:auto!important;}',
  },
  {
    n: 9,
    slug: 'FO a align-self baseline valign',
    idea: 'align-self:baseline on FO a — fo flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}',
  },
  {
    n: 10,
    slug: 'FO span align-self stretch inline',
    idea: 'align-self:stretch on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 11,
    slug: 'FO span align-self flex-start height auto',
    idea: 'align-self:flex-start on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;height:auto!important;min-height:auto!important;}',
  },
  {
    n: 12,
    slug: 'FO span align-self baseline valign',
    idea: 'align-self:baseline on FO span — fo flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    n: 13,
    slug: 'nav a stretch + span flex-start',
    idea: 'align-self:stretch on FO a + align-self:flex-start on nav span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}nav span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 14,
    slug: 'nav a flex-start + span stretch',
    idea: 'align-self:flex-start on FO a + align-self:stretch on nav span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}nav span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 15,
    slug: 'nav a baseline + span baseline',
    idea: 'align-self:baseline on FO a + align-self:baseline on nav span — nav flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}nav span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 16,
    slug: 'nav a stretch + span baseline',
    idea: 'align-self:stretch on FO a + align-self:baseline on nav span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}nav span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 17,
    slug: 'FO a stretch + span flex-start',
    idea: 'align-self:stretch on FO a + align-self:flex-start on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}foreignObject span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 18,
    slug: 'FO a flex-start + span stretch',
    idea: 'align-self:flex-start on FO a + align-self:stretch on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}foreignObject span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 19,
    slug: 'FO a baseline + span baseline',
    idea: 'align-self:baseline on FO a + align-self:baseline on FO span — fo flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}foreignObject span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 20,
    slug: 'FO>div a align-self stretch',
    idea: 'align-self:stretch on foreignObject>div a — div flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject>div a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 21,
    slug: 'FO>div a align-self flex-start',
    idea: 'align-self:flex-start on foreignObject>div a — div flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject>div a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 22,
    slug: 'FO>div a align-self baseline',
    idea: 'align-self:baseline on foreignObject>div a — div flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject>div a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}',
  },
  {
    n: 23,
    slug: 'FO>div span align-self stretch',
    idea: 'align-self:stretch on foreignObject>div span — div flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject>div span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 24,
    slug: 'FO>div span align-self flex-start',
    idea: 'align-self:flex-start on foreignObject>div span — div flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject>div span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 25,
    slug: 'FO>div span align-self baseline',
    idea: 'align-self:baseline on foreignObject>div span — div flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject>div span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 26,
    slug: 'stretch leaf nav a stretch',
    idea: 'align-self:stretch on FO a — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
    extra: { radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 27,
    slug: 'stretch leaf nav a flex-start',
    idea: 'align-self:flex-start on FO a — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;height:auto!important;}',
    extra: { radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 28,
    slug: 'stretch leaf nav span stretch',
    idea: 'align-self:stretch on nav span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
    extra: { radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 29,
    slug: 'stretch leaf nav span flex-start',
    idea: 'align-self:flex-start on nav span — nav flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;height:auto!important;}',
    extra: { radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 30,
    slug: 'stretch leaf nav a baseline',
    idea: 'align-self:baseline on FO a — nav flex row baseline cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;vertical-align:baseline!important;}',
    extra: { radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 31,
    slug: 'a inline-flex align-self stretch',
    idea: 'align-self:stretch on FO a — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-flex!important;}',
  },
  {
    n: 32,
    slug: 'a inline-flex align-self flex-start',
    idea: 'align-self:flex-start on FO a — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-flex!important;}',
  },
  {
    n: 33,
    slug: 'span inline-flex align-self stretch',
    idea: 'align-self:stretch on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject span{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-flex!important;}',
  },
  {
    n: 34,
    slug: 'span inline-flex align-self flex-start',
    idea: 'align-self:flex-start on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-flex!important;}',
  },
  {
    n: 35,
    slug: 'nav column a align-self stretch',
    idea: 'align-self:stretch on FO a — nav flex column stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:column!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 36,
    slug: 'nav column a align-self flex-start',
    idea: 'align-self:flex-start on FO a — nav flex column stretch cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:column!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 37,
    slug: 'nav column span align-self baseline',
    idea: 'align-self:baseline on FO span — nav flex column baseline cross-axis probe on text leaves',
    css: 'foreignObject nav{display:flex!important;flex-direction:column!important;align-items:baseline!important;overflow:visible!important}foreignObject nav span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;}',
  },
  {
    n: 38,
    slug: 'FO column a align-self stretch',
    idea: 'align-self:stretch on FO a — fo flex column stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:column!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;}',
  },
  {
    n: 39,
    slug: 'FO column span align-self flex-start',
    idea: 'align-self:flex-start on FO span — fo flex column stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:column!important;align-items:stretch!important;overflow:visible!important}foreignObject span{align-self:flex-start!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;}',
  },
  {
    n: 40,
    slug: 'FO row a stretch span baseline min-h0',
    idea: 'align-self:stretch on FO a + align-self:baseline on FO span — fo flex row stretch cross-axis probe on text leaves',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject a{align-self:stretch!important;box-sizing:border-box!important;min-width:0!important;display:inline-block!important;min-height:0!important;}foreignObject span{align-self:baseline!important;box-sizing:border-box!important;min-width:0!important;display:inline!important;vertical-align:baseline!important;min-height:0!important;}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w24-${num}`,
    label: `Loop AI b10 w24 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b10 w24; align-self stretch/flex-start/baseline on a/span; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
