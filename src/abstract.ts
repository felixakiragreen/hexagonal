import { HexProps, α } from './common'

// Create a ⬢ hexagon proportionally constrained by width or height (whichever is shorter)
export const verticalHexagonConstrained = ({
  height,
  width,
  offsetX = 0,
  offsetY = 0,
  aTip,
  bBodyTip,
}: {
  height: number
  width: number
  offsetX?: number
  offsetY?: number
  aTip?: number
  bBodyTip?: number
}): HexProps => {
  let w,
    h,
    insideWidthFromHeight,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip

  insideWidthFromHeight = height * Math.sin(α)

  if (width < insideWidthFromHeight) {
    w = width
    h = w / Math.sin(α)
  } else {
    h = height
    w = h * Math.sin(α)
  }

  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }
  if (!b) {
    b = a + s
  }

  return {
    x, // translate X
    y, // translate Y
    w, // width
    h, // height
    s, // length of a side (hexCircumRadius - radius of circumcircle)
    m, // mid point (hexInRadius)
    a, // length of tip
    b, // length of tip + body
  }
}

// Create a ⬢ hexagon proportionally constrained by width
export const verticalHexagonFromWidth = ({
  width,
  offsetX = 0,
  offsetY = 0,
  aTip,
  bBodyTip,
}: {
  width: number
  offsetX?: number
  offsetY?: number
  aTip?: number
  bBodyTip?: number
}): HexProps => {
  let w = width,
    h,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip

  h = w / Math.sin(α)
  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }
  if (!b) {
    b = a + s
  }

  return {
    x, // translate X
    y, // translate Y
    w, // width
    h, // height
    s, // length of a side (hexCircumRadius - radius of circumcircle)
    m, // mid point (hexInRadius)
    a, // length of tip
    b, // length of tip + body
  }
}

// Create a ⬢ hexagon proportionally constrained by height
export const verticalHexagonFromHeight = ({
  height,
  offsetX = 0,
  offsetY = 0,
  aTip,
  bBodyTip,
}: {
  height: number
  offsetX?: number
  offsetY?: number
  aTip?: number
  bBodyTip?: number
}): HexProps => {
  let w,
    h = height,
    x = offsetX,
    y = offsetY,
    m,
    s,
    a = aTip,
    b = bBodyTip

  w = h * Math.sin(α)
  m = w / 2
  s = m / Math.sin(α)

  if (!a) {
    a = s / 2
  }
  if (!b) {
    b = a + s
  }

  return {
    x, // translate X
    y, // translate Y
    w, // width
    h, // height
    s, // length of a side (hexCircumRadius - radius of circumcircle)
    m, // mid point (hexInRadius)
    a, // length of tip
    b, // length of tip + body
  }
}
