import React, { memo, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from './styled';
import Header from './Header';

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

function ModalComponent({
  children, onScreen, setOnScreen, Lg,
}) {
  return (
    <AnimatePresence>
      {onScreen && (
        <Background
          variants={BgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Container
            variants={ContainerVariants}
            Lg={Lg}
          >
            <Header setOnScreen={setOnScreen} />
            {children}

          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
}

ModalComponent.defaultProps = {
  Lg: false,
};

ModalComponent.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  Lg: PropTypes.bool,
};

const Modal = memo(ModalComponent);

export default Modal;
