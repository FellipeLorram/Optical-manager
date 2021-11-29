import React from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import Alert from '../../Svgs/Alert/Alert';

export default function Body() {
  return (
    <BodyContainer>
      <div
        className="alert--card"
      >
        <Alert />
        <span>
          AO DELETAR ESSE CLIENTE,
          VOCÊ PERDERÁ TODA OS SEUS DADOS,
          INCLUSIVE SUAS COMPRAS,
          CONSERTOS E EXAMES.
        </span>
      </div>
    </BodyContainer>
  );
}
