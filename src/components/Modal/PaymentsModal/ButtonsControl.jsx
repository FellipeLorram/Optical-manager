import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from '../styled';
import { ButtonContainer } from './styled';

import { Button } from '../../../styles/GlobalStyles';

export default function ButtonsControl({
  edit, saveClick, setEdit, handleDeleteClick,
}) {
  const [cancelButton, setCancelButton] = useState(false);

  const handleEditCancelClick = () => {
    setCancelButton(!cancelButton);
    setEdit((currentEdit) => !currentEdit);
  };

  return (
    <ButtonContainer>
      {edit ? (
        <>
          <Button cancel onClick={handleDeleteClick}>DELETAR</Button>
          <Button onClick={handleEditCancelClick}>EDITAR</Button>
        </>
      ) : (
        <>
          {cancelButton && (
            <Button cancel onClick={handleEditCancelClick}>CANCELAR</Button>
          )}
          <Button onClick={saveClick}>
            {cancelButton ? 'SALVAR EDIÇÕES' : 'ADICIONAR PAGAMENTO'}
          </Button>
        </>
      )}

    </ButtonContainer>
  );
}

ButtonsControl.defaultProps = {
  handleDeleteClick: () => 1,
  setEdit: () => 1,
  saveClick: () => 1,
  edit: false,
};

ButtonsControl.propTypes = {
  edit: PropTypes.bool,
  saveClick: PropTypes.func,
  setEdit: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};
