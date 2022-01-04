import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import { BodyContainer, Choice, CurrentContentContainer } from '../../../components/Modal/styled';
import { ContainerGrid } from '../../../styles/GlobalStyles';
import { Frame } from './styled';
import OtherFrame from './OtherFrame';

export default function Body({
  mensframes, womensframes, setFrame, setValueFrame, setOnScreen,
}) {
  const [mensframesOnScreen, setMensFramesOnScreen] = useState(true);
  const [WomensframesOnScreen, setWomensFramesOnScreen] = useState(false);
  const [otherOnScreen, setOtherOnScreen] = useState(false);

  const handleChoiceClick = (set) => {
    setMensFramesOnScreen(false);
    setWomensFramesOnScreen(false);
    setOtherOnScreen(false);
    set(true);
  };

  const handleFrameClick = (name, price) => {
    setFrame(name);
    setValueFrame(Number(price));
    setOnScreen(false);
  };

  return (
    <AnimatePresence>
      <BodyContainer>
        <div className="column">
          <CurrentContentContainer>
            <Choice
              onClick={() => handleChoiceClick(setMensFramesOnScreen)}
              selected={mensframesOnScreen}
            >
              MASCULINA
            </Choice>
            <Choice
              onClick={() => handleChoiceClick(setWomensFramesOnScreen)}
              selected={WomensframesOnScreen}
            >
              FEMININA
            </Choice>
            <Choice
              onClick={() => handleChoiceClick(setOtherOnScreen)}
              selected={otherOnScreen}
            >
              OUTRA
            </Choice>
          </CurrentContentContainer>
          {mensframesOnScreen && (
            <ContainerGrid overflowY gap=".5rem" noP>
              {mensframes.length > 0 ? (
                <>
                  {
                    mensframes.map((frame) => (
                      <Frame
                        key={frame._id}
                        onClick={() => handleFrameClick(frame.name, frame.price)}
                      >
                        <span>{frame.name}</span>
                        <span>
                          <CurrencyFormat value={frame.price} displayType="text" thousandSeparator prefix="R$" />
                        </span>
                      </Frame>
                    ))
                  }
                </>
              ) : (
                <div className="no-content">
                  NÃO HÁ ARMAÇÕES MASCULINAS INSERIDAS NO SISTEMA
                </div>
              )}
            </ContainerGrid>

          )}
          {WomensframesOnScreen && (
            <ContainerGrid overflowY gap=".5rem" noP>
              {womensframes.length > 0 ? (
                <>
                  {
                    womensframes.map((frame) => (
                      <Frame
                        key={frame._id}
                        onClick={() => handleFrameClick(frame.name, frame.price)}
                      >
                        <span>{frame.name}</span>
                        <span>
                          <CurrencyFormat value={frame.price} displayType="text" thousandSeparator prefix="R$" />
                        </span>
                      </Frame>
                    ))
                  }
                </>
              ) : (
                <div className="no-content">
                  NÃO HÁ ARMAÇÕES FEMININAS INSERIDAS NO SISTEMA
                </div>
              )}
            </ContainerGrid>
          )}
          {otherOnScreen && (
            <OtherFrame setFrame={setFrame} setOnScreen={setOnScreen} />
          )}
        </div>
      </BodyContainer>
    </AnimatePresence>
  );
}

Body.propTypes = {
  mensframes: PropTypes.array.isRequired,
  womensframes: PropTypes.array.isRequired,
  setFrame: PropTypes.func.isRequired,
  setValueFrame: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
