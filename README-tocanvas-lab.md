# toCanvas lab (tc-lab*)

The toCanvas lab runs `tc-lab*` recipes (harness-only) through the FO fix matrix runner. These experiments modify `__localtests__/fo-fix-toCanvas*.js` and `__localtests__/fo-recipes-shards/recipes-tocanvas-lab*.js` only, never `src/`.

## Run the active tc-lab matrix (chunked)

```bash
npm run debug:tc-lab-matrix

# optional
npm run debug:tc-lab-matrix -- --chunk 25
npm run debug:tc-lab-matrix -- --chunk 25 --out __localtests__/.matrix-tc-lab-active.log
```

This uses headed Chrome (same constraint as `debug:fo-fix-lab`) and only includes **active** `tc-lab*` recipes.

## Find duplicate tc-lab recipes (ids + knob hashes)

```bash
npm run debug:tc-lab-dupes
npm run debug:tc-lab-dupes -- --json
```

## Count tc-lab recipes by wave/prefix

```bash
node __localtests__/list-tocanvas-recipes.mjs
node __localtests__/list-tocanvas-recipes.mjs --json
```

