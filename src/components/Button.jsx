import PropTypes from 'prop-types';
import { StyledButton } from './styled/Common.styled';

function Button({
  // eslint-disable-next-line react/prop-types
  children, version, type, isDisabled, style, onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={isDisabled}
      version={version}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
  style: {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default Button;
