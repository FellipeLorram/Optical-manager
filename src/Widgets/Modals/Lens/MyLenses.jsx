import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import axios from '../../../services/axios';
import history from '../../../services/history';
import { ContainerGrid } from '../../../styles/GlobalStyles';
import { Choice, CurrentContentContainer } from '../../../components/Modal/styled';
import { Lenses } from './styled';

export default function MyLenses({
  onScreen, setLen, setOnScreen, setValueLen,
}) {
  const [multOnScreen, setMultOnScreen] = useState(false);
  const [vsOnScreen, setVsOnScreen] = useState(true);
  const [mySimpleVisionlenses, setMySimpleVisionLenses] = useState([]);
  const [myMultfocalslenses, setMyMultfocalsLenses] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const responseSimpleVision = await axios.get('/lens/simple-vision');
        const responseMultifocals = await axios.get('/lens/mult');
        setMyMultfocalsLenses(responseMultifocals.data);
        setMySimpleVisionLenses(responseSimpleVision.data);
      } catch (error) {
        return 0;
      }
      return 0;
    }
    getData();
  }, []);

  const handleClickChoice = (set) => {
    setMultOnScreen(false);
    setVsOnScreen(false);
    set(true);
  };

  const handleClickLen = (text, price) => {
    setLen(text);
    setValueLen(price);
    setOnScreen(false);
  };

  return (
    <>
      {onScreen && (
        <CurrentContentContainer>
          <Choice
            selected={vsOnScreen}
            onClick={() => handleClickChoice(setVsOnScreen)}
          >
            Visão simples
          </Choice>
          <Choice
            selected={multOnScreen}
            onClick={() => handleClickChoice(setMultOnScreen)}
          >
            Multifocais
          </Choice>
        </CurrentContentContainer>
      )}
      {onScreen && multOnScreen && (
        <ContainerGrid noP overflowY gap=".5rem">
          {myMultfocalslenses.map((lens) => (
            <Lenses onClick={() => handleClickLen(lens.name, lens.price)} key={lens._id}>
              {lens.name}
            </Lenses>
          ))}
        </ContainerGrid>
      )}
      {onScreen && vsOnScreen && (
        <ContainerGrid noP overflowY gap=".5rem">
          {mySimpleVisionlenses.map((lens) => (
            <Lenses onClick={() => handleClickLen(lens.name, lens.price)} key={lens._id}>
              {lens.name}
            </Lenses>
          ))}
        </ContainerGrid>
      )}
    </>
  );
}

MyLenses.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setLen: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
  setValueLen: PropTypes.func.isRequired,
};
