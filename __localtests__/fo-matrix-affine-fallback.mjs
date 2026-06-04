/**
 * Node-only 2D affine helpers matching `transformation-matrix@3` matrix shape `{a,b,c,d,e,f}`.
 * Used when `npm install` / HTTPS ESM imports are unavailable (see fo-transformation-matrix.mjs).
 */

/** @param {number} tx @param {number} ty */
export function translate(tx, ty) {
  return { a: 1, b: 0, c: 0, d: 1, e: tx, f: ty }
}

/** @param {number} sx @param {number} [sy] */
export function scale(sx, sy = sx) {
  return { a: sx, b: 0, c: 0, d: sy, e: 0, f: 0 }
}

/** @param {{ a: number, b: number, c: number, d: number, e: number, f: number }} m1 @param {...typeof m1} rest */
export function compose(m1, ...rest) {
  let out = m1
  for (const m2 of rest) {
    out = {
      a: out.a * m2.a + out.c * m2.b,
      b: out.b * m2.a + out.d * m2.b,
      c: out.a * m2.c + out.c * m2.d,
      d: out.b * m2.c + out.d * m2.d,
      e: out.a * m2.e + out.c * m2.f + out.e,
      f: out.b * m2.e + out.d * m2.f + out.f,
    }
  }
  return out
}

/** @param {{ a: number, b: number, c: number, d: number, e: number, f: number }} m */
export function inverse(m) {
  const det = m.a * m.d - m.b * m.c
  if (!Number.isFinite(det) || Math.abs(det) < 1e-12) {
    throw new Error('fo-matrix-affine-fallback: singular matrix')
  }
  const invDet = 1 / det
  const a = m.d * invDet
  const b = -m.b * invDet
  const c = -m.c * invDet
  const d = m.a * invDet
  const e = -(a * m.e + c * m.f)
  const f = -(b * m.e + d * m.f)
  return { a, b, c, d, e, f }
}

/** @param {{ a: number, b: number, c: number, d: number, e: number, f: number }} m @param {{ x: number, y: number }} p */
export function applyToPoint(m, p) {
  return {
    x: m.a * p.x + m.c * p.y + m.e,
    y: m.b * p.x + m.d * p.y + m.f,
  }
}
