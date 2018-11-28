import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
} from 'styled-system'

const Pre = styled.pre(
  space,
  width,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
    fontFamily: 'monaco, monospace',
  },
)

Pre.defaultProps = {}

export default Pre
