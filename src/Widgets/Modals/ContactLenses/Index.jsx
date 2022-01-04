import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../components/Modal/Index';
import Body from './Body';

export default function ContactLenses({
  onScreen, setOnScreen, setLenContactLenses,
}) {
  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen}>
      <Body
        onScreen={onScreen}
        setOnScreen={setOnScreen}
        setLenContactLenses={setLenContactLenses}
      />
    </ModalContainer>
  );
}

ContactLenses.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setLenContactLenses: PropTypes.func.isRequired,
};
