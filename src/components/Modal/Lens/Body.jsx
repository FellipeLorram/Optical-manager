import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer, Choice, CurrentContentContainer } from '../styled';
import Multifocals from './Multifocals';
import MyLenses from './MyLenses';
import SimpleVision from './SimpleVision';
import OtherLens from './OtherLens';

export default function Body({ setLen, setValueLen, setOnScreen }) {
  const [vsOnScreen, setVsOnScreen] = useState(true);
  const [mtOnScreen, setMtOnScreen] = useState(false);
  const [myLenses, setMyLenses] = useState(false);
  const [Other, setOther] = useState(false);

  const handleChoiceClick = (set) => {
    setVsOnScreen(false);
    setMtOnScreen(false);
    setMyLenses(false);
    setOther(false);
    set(true);
  };
  return (
    <BodyContainer>
      <div className="column">
        <CurrentContentContainer>
          <Choice
            onClick={() => handleChoiceClick(setVsOnScreen)}
            selected={vsOnScreen}
          >
            VISÃO SIMPLES
          </Choice>
          <Choice
            onClick={() => handleChoiceClick(setMtOnScreen)}
            selected={mtOnScreen}
          >
            MULTIFOCAIS
          </Choice>
          <Choice
            onClick={() => handleChoiceClick(setMyLenses)}
            selected={myLenses}
          >
            MINHAS LENTES
          </Choice>
          <Choice
            onClick={() => handleChoiceClick(setOther)}
            selected={Other}
          >
            OUTRA
          </Choice>
        </CurrentContentContainer>
        <SimpleVision setOnScreen={setOnScreen} setLen={setLen} onScreen={vsOnScreen} />
        <Multifocals setOnScreen={setOnScreen} setLen={setLen} onScreen={mtOnScreen} />
        <MyLenses
          setOnScreen={setOnScreen}
          setLen={setLen}
          setValueLen={setValueLen}
          onScreen={myLenses}
        />
        {Other && (
          <OtherLens setLen={setLen} setOnScreen={setOnScreen} />
        )}
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  setLen: PropTypes.func.isRequired,
  setValueLen: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
