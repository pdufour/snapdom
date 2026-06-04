# FO raster research — metrics reference

**Purpose:** One place to interpret **lab**, **sandbox**, and **blackbox** numbers without mixing live reference boxes.

---

## Three-way legs (mini Home nav)

| Leg | Measurement | Typical top (border box) | Δ vs live |
|-----|-------------|-------------------------:|----------:|
| **Live** | Painted `Range` union in link border box | **14.203 px** | — |
| **SVG** | Inline / mounted serialized FO | **14.195 px** | **~−0.008 px** |
| **Canvas** | FO after decode + integer ink scan | **17.000 px** @ dpr=1 | **+2.797 px** |

**BITMAP_ONLY:** \|svgΔ\| < 0.15 and \|canvasΔ\| ≫ 0.15 → stage **`raster`**.

Probe: `npm run test:fo-three-way` → [`fo-three-way-consistency.json`](fo-three-way-consistency.json)

---

## Live reference families (same element, different boxes)

| Family | What it uses | Mini Home baseline canvasΔ @ dpr=1 |
|--------|--------------|-------------------------------------:|
| **Range painted top** | `Range.getBoundingClientRect()` in border box | **+2.797 px** |
| **Cap-model top** | Cap-height / root ink box proxy (blackbox path) | **−1.727 px** |
| **Checkout blackbox** | `paint.canvas.vs-border.top` vs cap clone on fixture | **−0.91 px** (Home nav) |

**Reconcile offset (Range − cap live top):** **4.523 px** on mini nav — constant across baseline and w7 (round 7–8).

**Rule:** Never compare lab **+2.797** directly to blackbox **−0.91** without stating the live reference.

---

## Scan modes (lab)

| Mode | Use | w7 @ stretch nav |
|------|-----|------------------|
| **Integer first-ink row** | Matrix promotion default | **−0.203 px** (fails 0.06 gate) |
| **Fractional threshold** | AA ramp / subpixel band | Often **~−1.1 px** — unreliable on gradual ramp |
| **Device row dump** | Mechanism proof | Row **17→14** (Δ3) with Range device **14.203** |

Probe: `npm run debug:fo-paint-origin-autopsy`

---

## w7 residual identity

```
integer canvas top  = floor/device first dark row / dpr
Range top           = 14.203 px (subpixel)
residual |canvasΔ| ≈ Range.subpixel ≈ 0.203 px
```

**Not** missing half-leading formula — **quantization** after strut correction.

---

## DPR scaling

| dpr | Range canvasΔ | Notes |
|-----|--------------:|-------|
| 1 | **2.797** | Residual vs ½(lh−fs): **−0.003** |
| 2 | **3.297** | **+0.5 px** step vs dpr=1 (blit/grid) |

Half-leading **2.8 px** is **not** multiplied by dpr.

Artifact: [`research-round-8-dpr-bridge.json`](research-round-8-dpr-bridge.json)

---

## Blackbox vs w7 (checkout, cap-model)

| Patch | Home cap Δ | Pass 0.06? |
|-------|----------:|:----------:|
| none | **−0.91** | no |
| `fo-y-half-leading-meta` | **−1.91** | no (overshoot **−1 px**) |

w7 shifts cap Δ by **−1 px** on checkout — parallel to **−3 px** Range shift on mini lab, different absolute scale.

Artifact: [`research-round-8-blackbox-w7.json`](research-round-8-blackbox-w7.json)

---

## Chromium-only (no snapdom)

Hand-built FO pages: **svgΔ = 0**, **canvasΔ ≈ 2.797** (stretch nav) / **3.0** (no-flex).

`snapdom − chromium` on same SVG bytes: **0 px** (round 5/7/8).

---

## Sandbox pitfalls (do not gate on)

| ID | Lie |
|----|-----|
| M1 | `svg-fo-proxy` makes canvas ≈ svg |
| M2 | Taint fallback copies svgΔ to canvas |
| M6 | `?patch=` ineffective on product engine |

Details: [`README-FO-RASTER-RESEARCH.md`](../__localtests__/README-FO-RASTER-RESEARCH.md) § Tooling pitfalls
