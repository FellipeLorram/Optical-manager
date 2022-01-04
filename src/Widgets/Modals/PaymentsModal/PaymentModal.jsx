import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../../../components/Modal/Index';
import Body from './Body';

export default function PaymentModal({
  onScreen,
  setOnScreen,
  sellId,
  clientId,
  total,
  resta,
  setPayments,
  dataPayment,
}) {
  return (
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen} Lg>
      <Body
        total={total}
        remains={resta}
        setOnScreen={setOnScreen}
        sellId={sellId}
        clientId={clientId}
        setPayments={setPayments}
        dataPayment={dataPayment}
      />
    </ModalContainer>
  );
}

PaymentModal.defaultProps = {
  sellId: '',
  clientId: '',
  total: 0,
  resta: 0,
  dataPayment: {
    data: false,
  },
};

PaymentModal.propTypes = {
  dataPayment: PropTypes.object,
  total: PropTypes.number,
  resta: PropTypes.number,
  clientId: PropTypes.string,
  sellId: PropTypes.string,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setPayments: PropTypes.func.isRequired,
};
