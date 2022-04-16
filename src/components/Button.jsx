import PropTypes from 'prop-types';
import { StyledButton } from './styled/Common.styled';

function Button({
  children, version, type, isDisabled, style,
}) {
  return (
    <StyledButton type={type} disabled={isDisabled} version={version} style={style}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
