import styled from 'react-emotion'
import {
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Div = styled.div(
  space,
  width,
  height,
  maxWidth,
  position,
  display,
  flex,
  alignItems,
  justifyContent,
  fontSize,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Div.defaultProps = {
  width: 1,
}

export default Div
