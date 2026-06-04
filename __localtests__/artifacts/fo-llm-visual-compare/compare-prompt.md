# FO lab — LLM visual parity judge (optional helper, block fixture)

Run manually when you want a second opinion. **Main check:** layout tops — `npm run debug:fo-fix-lab -- --verify`.

You are comparing **headed Chrome** captures from the FO fix lab mini fixture: a single nav link showing six full block glyphs (`██████`, landmark `H`).

## Images (left → right within each row)

Each row is one **recipe**. Columns are **live DOM**, **serialized SVG preview**, **FO raster canvas**.

Row 1: **product-baseline** — columns live, svg, canvas (file strip labels).

## Questions (answer for every recipe row, then compare recipes)

1. For **SVG** and **canvas** vs **live**: is the block row painted **HIGHER** (up on screen / smaller Y) or **LOWER** than live?
2. Approximate vertical offset in **CSS px** (integer or 0.5px steps; say "aligned" if within ~0.5px).
3. Is **horizontal** alignment of the block glyphs the same across live / svg / canvas?
4. Does **SVG** match **live** better than **canvas** matches **live**?
5. Between recipes **product-baseline** and **tc-fix-w7-rfork-fo-y-half-leading-meta** (and any others shown): which **canvas** is closest to **live**? Which fix would you promote to `src/` only if headed re-check agrees?

## Constraints

- Do **not** infer pass/fail from ink-scan metrics; use **pixels you see**.
- FO raster only — no text-bypass / manual `fillText` overlays.
- Promotion to `src/` requires this visual judgment **plus** a headed sanity re-run; do not cite bounce-check numbers as the gate.

## Output format

```markdown
### Per recipe
- **{recipeId}**
  - svg vs live: {higher|lower|aligned} ~{N}px
  - canvas vs live: {higher|lower|aligned} ~{N}px
  - notes: …

### Winner
- Best canvas vs live: **{recipeId}** — …
- Promote? {yes|no|needs-more-evidence}
```

