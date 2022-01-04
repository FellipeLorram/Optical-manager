import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../../../components/Modal/styled';
import Input from '../../../components/Input/Input';
import LensTypeSelect from '../../../components/Select/Index';

export default function Body({ content }) {
  const [types, setTypes] = useState('');
  const [lensTypes, setLensTypes] = useState([]);

  useEffect(() => {
    setTypes(content.type);
    if (content.type === 'Multifocal') setLensTypes(['Visão simples']);
    else setLensTypes(['Multifocal']);
  }, [content.type]);

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
          inputBlock={content.edit}
        />
        <Input
          label="PREÇO"
          text={content.price}
          type="text"
          valid
          setText={content.setPrice}
          inputBlock={content.edit}
        />
        <LensTypeSelect
          level={types}
          setLevels={setTypes}
          currentLevelsArr={lensTypes}
          setCurrentLevelsArr={setLensTypes}
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
