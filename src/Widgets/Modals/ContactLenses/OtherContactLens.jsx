import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../components/Input/Input';
import { OtherOptionContainer } from '../../../styles/GlobalStyles';
import Button from '../../../components/Buttons/Index';

export default function OtherContactLens({
  setLen, setOnScreen,
}) {
  const [lenName, setlenName] = useState('');
  const [isValidLenName, setIsValidLenName] = useState(true);

  const handleClick = () => {
    if (!lenName) {
      setIsValidLenName(false);
      return;
    }
    setLen(lenName);
    setOnScreen(false);
  };

  return (
    <OtherOptionContainer>
      <div className="input--container">
        <Input label="LENTE" text={lenName} setText={setlenName} valid={isValidLenName} setValid={setIsValidLenName} />
      </div>
      <div className="btn--container">
        <Button onClick={handleClick}>Adicionar</Button>
      </div>
    </OtherOptionContainer>
  );
}

OtherContactLens.propTypes = {
  setLen: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
