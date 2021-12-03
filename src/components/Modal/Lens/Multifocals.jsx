import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { ContainerGrid } from '../../../styles/GlobalStyles';
import { Choice, CurrentContentContainer } from '../styled';
import Lens from './Lens';
import { Lenses } from './styled';

export default function Multifocals({ onScreen, setLen, setOnScreen }) {
  const [resinaOnScreen, setResinaOnScreen] = useState(true);
  const [resina161OnScreen, setResina161OnScreen] = useState(false);
  const [resina167OnScreen, setResina167OnScreen] = useState(false);
  const [resina170OnScreen, setResina170OnScreen] = useState(false);
  const [poliOnScreen, setPoliOnScreen] = useState(false);
  const [trivex, setTrivexOnScreen] = useState(false);
  const [cristal, setCristalOnScreen] = useState(false);

  const handleClickChoice = (set) => {
    setResinaOnScreen(false);
    setResina161OnScreen(false);
    setResina167OnScreen(false);
    setResina170OnScreen(false);
    setPoliOnScreen(false);
    setTrivexOnScreen(false);
    setCristalOnScreen(false);
    set(true);
  };

  const handleClickLen = (text) => {
    setLen(text);
    setOnScreen(false);
  };

  return (
    <>
      {onScreen && (
        <CurrentContentContainer>
          <Choice
            selected={resinaOnScreen}
            onClick={() => handleClickChoice(setResinaOnScreen)}
          >
            Resina
          </Choice>
          <Choice
            selected={resina161OnScreen}
            onClick={() => handleClickChoice(setResina161OnScreen)}
          >
            Resina 1.61
          </Choice>
          <Choice
            selected={resina167OnScreen}
            onClick={() => handleClickChoice(setResina167OnScreen)}
          >
            Resina 1.67
          </Choice>
          <Choice
            selected={resina170OnScreen}
            onClick={() => handleClickChoice(setResina170OnScreen)}
          >
            Resina 1.70
          </Choice>
          <Choice
            selected={poliOnScreen}
            onClick={() => handleClickChoice(setPoliOnScreen)}
          >
            Policarbonato
          </Choice>
          <Choice
            selected={trivex}
            onClick={() => handleClickChoice(setTrivexOnScreen)}
          >
            Trivex
          </Choice>
          <Choice
            selected={cristal}
            onClick={() => handleClickChoice(setCristalOnScreen)}
          >
            Cristal
          </Choice>
        </CurrentContentContainer>
      )}
      {resinaOnScreen && onScreen && (
        <ContainerGrid noP overflowY gap=".5rem">
          {Lens.multResina.map((len) => (
            <Lenses onClick={() => handleClickLen(len)} key={len}>
              {len}
            </Lenses>
          ))}
        </ContainerGrid>
      )}

    </>
  );
}

Multifocals.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  setLen: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
