import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import Input from './Input';
import SexTypeSelect from './SexTypeSelect';

export default function Body({ content }) {
  const [types, setTypes] = useState([]);
  const [sexTypes, setSexTypes] = useState('');

  useEffect(() => {
    setSexTypes(content.sex);
    if (content.sex === 'Masculino') setTypes(['Feminino']);
    else setTypes(['Masculino']);
  }, [content.sex]);

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
          label="ARMAÇÃO"
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
        <Input
          label="REFERÊNCIA"
          text={content.refe}
          type="text"
          valid
          setText={content.setRefe}
          func={noFuction}
          inputBlock={content.edit}
        />
        <SexTypeSelect
          types={types}
          setTypes={setTypes}
          sexType={sexTypes}
          setSexType={setSexTypes}
          edit={content.edit}
          setOriginalSex={content.setSex}
        />
      </div>
    </BodyContainer>
  );
}

Body.propTypes = {
  content: PropTypes.object.isRequired,
};
