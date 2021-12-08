import React, { memo, useEffect, useState } from 'react';
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

function PdfModalComponent({
  onScreen,
  setOnScreen,
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
            <Body />
          </Container>
        </Background>
      )}
    </>
  );
}

PdfModalComponent.defaultProps = {
};

PdfModalComponent.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};

const PdfModal = memo(PdfModalComponent);

export default PdfModal;