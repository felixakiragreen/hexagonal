import { HexProps, α } from './common'
import { verticalHexagonFromHeight } from './abstract'

// Create the SVG path `d` for a full ⬢ hexagon
export const createPathVerticalHexagonFull = ({
  x,
  y,
  // w,
  // h,
  // s,
  m,
  a,
  b,
}: HexProps): string => `
  M ${x + m} ${y}
  L ${x + m * 2} ${y + a}
  L ${x + m * 2} ${y + b}
  L ${x + m} ${y + a + b}
  L ${x} ${y + b}
  L ${x} ${y + a}
  Z
`

// Create the SVG path `d` for the top "tip" (or triangle) of a ⬢ hexagon
export const createPathVerticalHexagonTipTop = ({
  x,
  y,
  // w,
  // h,
  // s,
  m,
  a,
}: // b,
HexProps): string => `
  M ${x} ${y + a}
  L ${x + m} ${y}
  L ${x + m * 2} ${y + a}
  Z
`

// Create the SVG path `d` for the bottom "tip" (or triangle) of a ⬢ hexagon
export const createPathVerticalHexagonTipBottom = ({
  x,
  y,
  // w,
  // h,
  // s,
  m,
  a,
}: // b,
HexProps): string => `
  M ${x} ${y}
  L ${x + m * 2} ${y}
  L ${x + m} ${y + a}
  Z
`

// Create the SVG path `d` for the left "bevel" (or inset/outset/edge/border) of a ⬢ hexagon
export const createPathVerticalHexagonBevelLeft = (
  {
    x,
    y,
    // w,
    h,
    // s,
    m,
    a,
    b,
  }: HexProps,
  bevelWidth: number
): string => {
  // bevelWidth and bevelOffset are different:
  // width is the smaller, don't know how to describe it with just words
  const bevelOffset = bevelWidth / Math.sin(α)
  const insetHex = verticalHexagonFromHeight({
    height: h - bevelOffset * 2,
    offsetX: x + bevelWidth,
    offsetY: y + bevelOffset,
  })

  return `
  M ${x + m} ${y}
  L ${x + m} ${insetHex.y}
  L ${insetHex.x} ${insetHex.y + insetHex.a}
  L ${insetHex.x} ${insetHex.y + insetHex.b}
  L ${x + m} ${insetHex.y + insetHex.a + insetHex.b}
  L ${x + m} ${y + a + b}
  L ${x} ${y + b}
  L ${x} ${y + a}
  Z
`
}

// Create the SVG path `d` for the right "bevel" (or inset/outset/edge/border) of a ⬢ hexagon
export const createPathVerticalHexagonBevelRight = (
  {
    x,
    y,
    // w,
    h,
    // s,
    m,
    a,
    b,
  }: HexProps,
  bevelWidth: number
): string => {
  // bevelWidth and bevelOffset are different:
  // width is the smaller, don't know how to describe it with just words
  const bevelOffset = bevelWidth / Math.sin(α)
  const insetHex = verticalHexagonFromHeight({
    height: h - bevelOffset * 2,
    offsetX: x + bevelWidth,
    offsetY: y + bevelOffset,
  })

  return `
  M ${x + m} ${y}
  L ${x + m} ${insetHex.y}
  L ${insetHex.x + insetHex.m * 2} ${insetHex.y + insetHex.a}
  L ${insetHex.x + insetHex.m * 2} ${insetHex.y + insetHex.b}
  L ${x + m} ${insetHex.y + insetHex.a + insetHex.b}
  L ${x + m} ${y + a + b}
  L ${x + m * 2} ${y + b}
  L ${x + m * 2} ${y + a}
  Z
`
}
