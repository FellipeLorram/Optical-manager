import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import Body from './Body';
import axios from '../../../services/axios';
import ModalContainer from '../../../components/Modal/Index';

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
    <ModalContainer onScreen={onScreen} setOnScreen={setOnScreen}>
      <Body
        mensframes={mensframes}
        womensframes={womensframes}
        setFrame={setFrame}
        setValueFrame={setValueFrame}
        setOnScreen={setOnScreen}
      />
    </ModalContainer>
  );
}

Frames.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setFrame: PropTypes.func.isRequired,
  setValueFrame: PropTypes.func.isRequired,
};
