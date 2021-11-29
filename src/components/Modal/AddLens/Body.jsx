import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import Input from './Input';
import LensTypeSelect from './LensTypeSelect';

export default function Body({ content }) {
  const [types, setTypes] = useState([]);
  const [lensTypes, setLensTypes] = useState('');

  useEffect(() => {
    setLensTypes(content.type);
    if (content.type === 'Multifocal') setTypes(['Visão simples']);
    else setTypes(['Multifocal']);
  }, [content.type]);

  const handleFuncName = () => {
    content.setIsValidName(true);
  };
  const noFuction = () => 1;

  return (
    <BodyContainer>
      <div
        className="column"
      >
        <Input
          label="LENTE"
          text={content.name}
          type="text"
          valid={content.isValidName}
          setText={content.setName}
          func={handleFuncName}
          inputBlock={content.edit}
        />
        <Input
          label="PREÇO"
          text={content.price}
          type="text"
          valid
          setText={content.setPrice}
          func={noFuction}
          inputBlock={content.edit}
        />
        <LensTypeSelect
          types={types}
          setTypes={setTypes}
          lensType={lensTypes}
          setLensType={setLensTypes}
          edit={content.edit}
          setOriginalType={content.setType}
        />
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  content: PropTypes.object.isRequired,
};
