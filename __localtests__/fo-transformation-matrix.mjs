/**
 * `transformation-matrix@3.1.0` (devDependency) for FO lab preview affine maps.
 *
 * Chosen over `dommatrix` / hand-rolled scaleY: compose + inverse keeps stretch-slot forward
 * mapping and bitmap-scan inverse identical. Node probes and headed lab share the same API.
 *
 * Browser: `fo-fix-lab.html` import map → `/node_modules/transformation-matrix/src/index.js`.
 * Node: resolves `transformation-matrix` from package.json.
 */
import {
  applyToPoint,
  compose as composeOp,
  inverse,
  scale,
  translate,
  transform,
} from 'transformation-matrix'

export const compose = composeOp ?? transform
export { applyToPoint, inverse, scale, translate }
