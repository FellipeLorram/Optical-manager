import React from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from '../styled';
import Header from '../Header';
import DeleteBody from '../DeleteBody';
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

export default function DeleteSellModal({
  sellId, id, onScreen, setOnScreen,
}) {
  const deleteText = 'AO DELETAR ESSA VENDA VOCÊ PERDERÁ TODO OS SEUS DADOS, TAMBÉM DEIXARÁ DE CONSTAR NOS RELATÓRIOS.';
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
            <DeleteBody text={deleteText} />
            <Footer sellId={sellId} id={id} setOnScreen={setOnScreen} />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
}

DeleteSellModal.propTypes = {
  sellId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
