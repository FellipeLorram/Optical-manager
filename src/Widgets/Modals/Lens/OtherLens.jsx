import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { OtherOptionContainer } from '../../../components/Modal/styled';
import Input from '../../../components/Input/Input';
import { Button } from '../../../styles/GlobalStyles';

export default function OtherLens({
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

OtherLens.propTypes = {
  setLen: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
