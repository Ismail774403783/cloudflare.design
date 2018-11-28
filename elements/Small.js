import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
} from 'styled-system'

const Small = styled.small(
  space,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  {},
)

Small.defaultProps = {}

export default Small
