import React from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import { ButtonContainer } from './styled';

import { Button } from '../../../styles/GlobalStyles';

export default function ButtonsControl({ saveClick }) {
  return (
    <ButtonContainer>
      <Button onClick={saveClick}>ADICIONAR PAGAMENTO</Button>
    </ButtonContainer>
  );
}

ButtonsControl.defaultProps = {
  saveClick: () => 1,
};

ButtonsControl.propTypes = {
  saveClick: PropTypes.func,
};
