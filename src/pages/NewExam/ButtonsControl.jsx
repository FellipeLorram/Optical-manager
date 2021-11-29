import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../styles/GlobalStyles';
import { ButtonsControlContainer } from './styled';

export default function ButtonsControl({ examId, handleClickSaveButton, setInputBlock }) {
  const [edit, setEdit] = useState(false);

  const handleEditClick = (value) => {
    setInputBlock(value);
    setEdit(!value);
  };

  return (
    <ButtonsControlContainer>
      {examId ? (
        <>
          {edit ? (
            <>
              <Button cancel onClick={() => handleEditClick(true)}>CANCELAR</Button>
              <Button onClick={handleClickSaveButton}>SALVAR ALTERAÇÕES</Button>
            </>
          ) : (
            <Button onClick={() => handleEditClick(false)}>EDITAR CONSULTA</Button>
          )}
        </>
      ) : (
        <Button onClick={handleClickSaveButton}>FINALIZAR ATENDIMENTO</Button>
      )}

    </ButtonsControlContainer>
  );
}

ButtonsControl.defaultProps = {
  examId: '',
};

ButtonsControl.propTypes = {
  examId: PropTypes.string,
  handleClickSaveButton: PropTypes.func.isRequired,
  setInputBlock: PropTypes.func.isRequired,
};
