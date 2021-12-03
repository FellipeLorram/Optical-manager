import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../styles/GlobalStyles';
import { FooterContainer } from '../styled';
import axios from '../../../services/axios';
import history from '../../../services/history';

export default function Footer({ sellId, id, setOnScreen }) {
  const handleClick = () => {
    async function Request() {
      try {
        await axios.delete(`/clients/${id}/${sellId}`);
        setOnScreen(false);
        history.goBack();
      } catch (error) {
        history.push('/clients');
      }
    }
    Request();
  };
  return (
    <FooterContainer>
      <Button onClick={() => setOnScreen(false)}>CANCELAR</Button>
      <Button onClick={handleClick} cancel>DELETAR</Button>
    </FooterContainer>
  );
}

Footer.propTypes = {
  sellId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
