type HexProps = {
  w: number // width
  h: number // height
  x: number // translate X
  y: number // translate Y
  s: number // length of a side (radius of circumcircle)
  m: number // mid point
  a: number // length of tip
  b: number // length of tip + body
}

// 60° degress
const α = Math.PI / 3

export const hexPropsFromInside = ({
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

export const hexPropsFromWidth = ({
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

export const hexPropsFromHeight = ({
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

export const createPath_hexFull = ({
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

export const createPath_hexATip = ({
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

export const createPath_hexBTip = ({
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
