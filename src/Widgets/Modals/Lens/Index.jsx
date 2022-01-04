import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Body from './Body';
import ModalContainer from '../../../components/Modal/Index';

export default function Lens({
  onScreen, setOnScreen, setLen, setValueLen,
}) {
  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen} Lg>
      <Body setOnScreen={setOnScreen} setLen={setLen} setValueLen={setValueLen} />
    </ModalContainer>
  );
}

Lens.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setLen: PropTypes.func.isRequired,
  setValueLen: PropTypes.func.isRequired,
};
