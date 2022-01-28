import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../GlobalStyles';
import Button from '../../components/Buttons/Index';

export default function ButtonsHandle({
  id,
  handleAddSaveClick,
  setInputBlock,
  inputBlock,
  labelTexts,
}) {
  return (
    <Container>
      <div className="container-end">
        {id ? (
          <>
            {inputBlock ? (
              <Button onClick={() => setInputBlock(false)}>EDITAR</Button>
            ) : (
              <>
                <Button cancel onClick={() => setInputBlock(true)}>CANCELAR</Button>
                <Button onClick={() => handleAddSaveClick(false)}>SALVAR ALTERAÇÕES</Button>
              </>
            )}
          </>
        ) : (
          <Button onClick={() => handleAddSaveClick(false)}>{labelTexts.saveLabel || 'FINALIZAR'}</Button>
        )}
      </div>
    </Container>
  );
}

ButtonsHandle.defaultProps = {
  id: '',
  inputBlock: false,
  labelTexts: {},
};

ButtonsHandle.propTypes = {
  handleAddSaveClick: PropTypes.func.isRequired,
  setInputBlock: PropTypes.func.isRequired,
  id: PropTypes.string,
  inputBlock: PropTypes.bool,
  labelTexts: PropTypes.object,
};
