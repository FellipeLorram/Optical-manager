import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { OtherOptionContainer } from '../../../components/Modal/styled';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Buttons/Index';

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
