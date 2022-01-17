import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LinkButton, LinkButtonSvg, NormalButton } from './styled';

function ButtonComponent({
  children,
  to,
  onMouseOver,
  onMouseLeave,
  type,
  onClick,
}) {
  switch (type) {
    case 'link':
      return (
        <LinkButton to={to}>
          {children}
        </LinkButton>
      );

    case 'svg-link':
      return (
        <LinkButtonSvg
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          to={to}
        >
          {children}
        </LinkButtonSvg>
      );

    default:
      return (
        <NormalButton onClick={onClick}>
          {children}
        </NormalButton>
      );
  }
}

ButtonComponent.defaultProps = {
  onMouseOver: () => 1,
  onMouseLeave: () => 1,
  onClick: () => 1,
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
};

const Button = memo(ButtonComponent);

export default Button;
