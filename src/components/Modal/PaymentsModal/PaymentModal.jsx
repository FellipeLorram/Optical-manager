import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from '../styled';
import Header from '../Header';
import axios from '../../../services/axios';
import Body from './Body';

const BgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ContainerVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};

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
    <>
      {onScreen && (
        <Background
          variants={BgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Container
            Lg
            variants={ContainerVariants}
          >
            <Header setOnScreen={setOnScreen} />
            <Body
              total={total}
              remains={resta}
              setOnScreen={setOnScreen}
              sellId={sellId}
              clientId={clientId}
              setPayments={setPayments}
              dataPayment={dataPayment}
            />
          </Container>
        </Background>
      )}
    </>
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
