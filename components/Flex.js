import React from "react"

import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  height,
  size,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  order,
  flexBasis,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  position
} from "styled-system"

const Div = styled.div(
  space,
  width,
  maxWidth,
  height,
  size,
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  order,
  flexBasis,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  position,
  {
    boxSizing: "border-box"
  }
)

const Flex = ({ ...props }) => {
  return <Div {...props}>{props.children}</Div>
}

Flex.defaultProps = {
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center"
}

export default Flex
