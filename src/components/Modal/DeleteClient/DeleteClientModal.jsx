import React from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from '../styled';
import Header from '../Header';
import Body from './Body';
import Footer from './Footer';

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

export default function DeleteClientModal({ id, onScreen, setOnScreen }) {
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
          >
            <Header setOnScreen={setOnScreen} />
            <Body />
            <Footer id={id} setOnScreen={setOnScreen} />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
}

DeleteClientModal.propTypes = {
  id: PropTypes.string.isRequired,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
