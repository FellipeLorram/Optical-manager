import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { OtherOptionContainer } from '../styled';
import Input from '../Input';
import { Button } from '../../../styles/GlobalStyles';

export default function OtherFrame({
  setFrame, setOnScreen,
}) {
  const [frameName, setFrameName] = useState('');
  const [isValidFrame, setIsValidFrame] = useState(true);

  const handleClick = () => {
    if (!frameName) {
      setIsValidFrame(false);
      return;
    }
    setFrame(frameName);
    setOnScreen(false);
  };

  return (
    <OtherOptionContainer>
      <div className="input--container">
        <Input label="ARMAÇÃO" text={frameName} setText={setFrameName} valid={isValidFrame} setValid={setIsValidFrame} />
      </div>
      <div className="btn--container">
        <Button onClick={handleClick}>Adicionar</Button>
      </div>
    </OtherOptionContainer>
  );
}

OtherFrame.propTypes = {
  setFrame: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
