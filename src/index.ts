export * from './abstract'
export * from './common'
export * from './vector'

// This is for backwards compatibility

import {
  verticalHexagonConstrained,
  verticalHexagonFromWidth,
  verticalHexagonFromHeight,
} from './abstract'
import {
  createPathVerticalHexagonFull,
  createPathVerticalHexagonTipTop,
  createPathVerticalHexagonTipBottom,
  // createPathVerticalHexagonBevelLeft,
  // createPathVerticalHexagonBevelRight,
} from './vector'

//
export const hexPropsFromInside = verticalHexagonConstrained
export const hexPropsFromWidth = verticalHexagonFromWidth
export const hexPropsFromHeight = verticalHexagonFromHeight

export const createPath_hexFull = createPathVerticalHexagonFull
export const createPath_hexATip = createPathVerticalHexagonTipTop
export const createPath_hexBTip = createPathVerticalHexagonTipBottom
