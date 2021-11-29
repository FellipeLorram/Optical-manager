import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { Background, Container } from '../styled';
import Body from './Body';
import Header from '../Header';
import axios from '../../../services/axios';

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

export default function Frames({
  onScreen, setOnScreen, setFrame, setValueFrame,
}) {
  const [mensframes, setMensFrames] = useState([]);
  const [womensframes, setWomensFrames] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/frames');
      setMensFrames(data.frames.filter((frame) => frame.sexo === 'Masculino'));
      setWomensFrames(data.frames.filter((frame) => frame.sexo === 'Feminino'));
    }
    getData();
  }, []);

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
            Lg
            variants={ContainerVariants}
          >
            <Header setOnScreen={setOnScreen} />
            <Body
              mensframes={mensframes}
              womensframes={womensframes}
              setFrame={setFrame}
              setValueFrame={setValueFrame}
              setOnScreen={setOnScreen}
            />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
}

Frames.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setFrame: PropTypes.func.isRequired,
  setValueFrame: PropTypes.func.isRequired,
};
