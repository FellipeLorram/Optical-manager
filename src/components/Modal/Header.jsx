import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer } from './styled';

export default function Header({ setOnScreen }) {
  return (
    <HeaderContainer>
      <div
        role="button"
        tabIndex={0}
        onKeyUp={() => setOnScreen(false)}
        onClick={() => setOnScreen(false)}
        className="close"
      >
        <span className="material-icons-outlined">
          close
        </span>
      </div>
    </HeaderContainer>
  );
}

Header.propTypes = {
  setOnScreen: PropTypes.func.isRequired,
};
