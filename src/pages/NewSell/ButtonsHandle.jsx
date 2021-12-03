import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../styles/GlobalStyles';

export default function ButtonsHandle({
  sellId, handleAddSaveClick, setInputBlock, inputBlock,
}) {
  return (
    <div className="container-end">
      {sellId ? (
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
        <Button onClick={() => handleAddSaveClick(false)}>FINALIZAR</Button>
      )}
    </div>
  );
}

ButtonsHandle.defaultProps = {
  sellId: '',
  inputBlock: false,
};

ButtonsHandle.propTypes = {
  handleAddSaveClick: PropTypes.func.isRequired,
  setInputBlock: PropTypes.func.isRequired,
  sellId: PropTypes.string,
  inputBlock: PropTypes.bool,
};
