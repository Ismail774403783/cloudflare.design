import React from "react"
import styled from "react-emotion"

import {
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const ModuleWrapper = styled.article(
  space,
  width,
  maxWidth,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  fontSize,
  textAlign,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    overflow: "hidden"
  }
)

ModuleWrapper.defaultProps = {
  color: "gray.7",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderLeft: ["0px", "1px solid"],
  borderRight: ["0px", "1px solid"],
  borderColor: "gray.7",
  borderRadius: [0, 2],
  display: "flex",
  flexWrap: "wrap"
}

export default ModuleWrapper
