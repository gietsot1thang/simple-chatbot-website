import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: ${props => props.background};
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: 0;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(3, 3, 3, 0.75);
  border-color: none;
  ${props => props.position === `absolute` && css`
    z-index: 1000000;
    position: ${props.position};
    top: ${props.top} ${props.positionUnit};
    left: ${props.left} ${props.positionUnit};
    right: ${props.right} ${props.positionUnit};
    bottom: ${props.bottom} ${props.positionUnit};
  `};

`;

Button.propTypes = {
  size: PropTypes.number,
  background: PropTypes.string,
  position: PropTypes.oneOf(['relative', 'absolute']),
  positionUnit: PropTypes.oneOf(['px', '%']),
  top: PropTypes.number,
  left: PropTypes.number,
  bottom: PropTypes.number,
  right: PropTypes.number,
};

Button.defaultProps = {
  size: 50,
  position: 'absolute',
  positionUnit: 'px',
};

export default Button;
