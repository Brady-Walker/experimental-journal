import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'

const align = (props) => props.align;
const direction = (props) => props.direction;
const justify = (props) => props.justify;
const wrap = (props) => props.wrap;
const fillParent = (props) =>
  props.fillParent &&
  css`
    position: absolute;
    width: 100%;
    height: 100%;
  `;

const Flex = styled.div`
  display: flex;
  align-items: ${align};
  flex-direction: ${direction};
  justify-content: ${justify};
  flex-wrap: ${wrap};

  ${fillParent};
`;

Flex.PropTypes = {
    align: PropTypes.string,
    direction: PropTypes.string,
    justify: PropTypes.string,
    fillParent: PropTypes.bool,
    wrap: PropTypes.string
  };

export default Flex;
