# Hexagonal Architecture

## Theory

It's not trivial to build interfaces using hexagonal (triangular) grids. Our digital world is build on rectangles.

This project is the beginning of something much bigger, an entire system for building hexagonal interfaces.

I know it could/should be organized better, but I'm letting expand organically as I use it to build my hexagonal things.

## Capapibilites

### `HexProps`

- `w` → width
- `h` → height
- `x` → translate X
- `y` → translate Y
- `s` → length of a side (radius of circumcircle)
- `m` → mid point
- `a` → length of tip
- `b` → length of tip + body

### Property builders

- `verticalHexagonConstrained(...)`
- `verticalHexagonFromWidth(...)`
- `verticalHexagonFromHeight(...)`

### Path builders

- `createPathVerticalHexagonFull(hexProps)`
- `createPathVerticalHexagonTipTop(hexProps)`
- `createPathVerticalHexagonTipBottom(hexProps)`
- `createPathVerticalHexagonBevelLeft(hexProps, bevelWidth)`
- `createPathVerticalHexagonBevelRight(hexProps, bevelWidth)`

## Development

`yarn start`
`yarn build`
`yarn publish`

## Changelog

### v0.2 bevelled hexagons

- create hexagonal bevels for a neat look
- reorganize code

### v0.1 vertical hexagons

- create the properties of vertical hexagons constrained by width, height, or both
- using those properties create the SVG paths for a full hexagon, or just the tips (top & bottom)
