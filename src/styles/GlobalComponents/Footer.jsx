import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Buttons/Index';
import Switch from './Switch';

export default function Footer({
  id,
  isOn,
  setIsOn,
  editButton,
  handleClickCancelButton,
  handleClickEditButton,
  handleClickSaveButton,
  noSwitch,
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="footer">
        {!id && !noSwitch && (
          <>
            <Switch isOn={isOn} setIsOn={setIsOn} label="ADICIONAR A FILA DE ATENDIMENTO" />
          </>
        )}
        {editButton ? (
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickEditButton}
          >
            EDITAR
          </Button>
        ) : (
          <>
            {id && (
              <Button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                cancel
                onClick={handleClickCancelButton}
              >
                CANCELAR
              </Button>
            )}

            <Button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClickSaveButton}
            >
              SALVAR
            </Button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

Footer.defaultProps = {
  id: '',
  noSwitch: false,
  isOn: false,
  setIsOn: () => 1,
};

Footer.propTypes = {
  id: PropTypes.string,
  noSwitch: PropTypes.bool,
  isOn: PropTypes.bool,
  editButton: PropTypes.bool.isRequired,
  setIsOn: PropTypes.func,
  handleClickSaveButton: PropTypes.func.isRequired,
  handleClickEditButton: PropTypes.func.isRequired,
  handleClickCancelButton: PropTypes.func.isRequired,
};
