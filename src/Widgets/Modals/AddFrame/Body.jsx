import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../../../components/Modal/styled';
import Input from '../../../components/Input/Input';
import SexTypeSelect from '../../../components/Select/Index';

export default function Body({ content }) {
  const [types, setTypes] = useState('');
  const [sexTypes, setSexTypes] = useState([]);

  useEffect(() => {
    setTypes(content.sex);
    if (content.sex === 'Masculino') setSexTypes(['Feminino']);
    else setSexTypes(['Masculino']);
  }, [content.sex]);

  return (
    <BodyContainer>
      <div
        className="column"
      >
        <Input
          label="ARMAÇÃO"
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
        <Input
          label="REFERÊNCIA"
          text={content.refe}
          type="text"
          valid
          setText={content.setRefe}
          inputBlock={content.edit}
        />
        <SexTypeSelect
          level={types}
          setLevels={setTypes}
          currentLevelsArr={sexTypes}
          setCurrentLevelsArr={setSexTypes}
          edit={content.edit}
          setOriginalCurrentText={content.setSex}
        />
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  content: PropTypes.object.isRequired,
};
