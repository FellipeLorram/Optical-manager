import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Buttons/Index';
import { FooterContainer } from '../../../components/Modal/styled';

export default function Footer({ handleClick, setOnScreen }) {
  return (
    <FooterContainer>
      <Button onClick={() => setOnScreen(false)}>CANCELAR</Button>
      <Button onClick={handleClick} cancel>DELETAR</Button>
    </FooterContainer>
  );
}

Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
