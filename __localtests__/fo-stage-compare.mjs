import almostEqual from 'almost-equal'
import { formatStageHigherOnScreenPhrase } from './fo-landmark-layout-metrics.mjs'

export function compareStageLayoutTops(liveTop, svgTop, canvasTop, epsilon = 0.06) {
  const svgVsLive = Number.isFinite(liveTop) && Number.isFinite(svgTop) ? svgTop - liveTop : null
  const canvasVsLive =
    Number.isFinite(liveTop) && Number.isFinite(canvasTop) ? canvasTop - liveTop : null
  const phrase = (label, d) => {
    const h = Number.isFinite(d) ? -d : null
    return formatStageHigherOnScreenPhrase(label, h, epsilon)
  }
  return {
    svgVsLive,
    canvasVsLive,
    svgAligned: Number.isFinite(svgVsLive) && almostEqual(svgVsLive, 0, false, epsilon),
    canvasAligned: Number.isFinite(canvasVsLive) && almostEqual(canvasVsLive, 0, false, epsilon),
    phrases: { svg: phrase('SVG', svgVsLive), canvas: phrase('Canvas', canvasVsLive) },
  }
}
