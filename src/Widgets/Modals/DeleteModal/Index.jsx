import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../components/Modal/Index';
import Body from './Body';
import Footer from './Footer';

export default function DeleteModal({
  onScreen, setOnScreen, deleteText, handleClick,
}) {
  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen}>
      <Body text={deleteText} />
      <Footer handleClick={handleClick} setOnScreen={setOnScreen} />
    </ModalContainer>
  );
}

DeleteModal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  deleteText: PropTypes.string.isRequired,
};
