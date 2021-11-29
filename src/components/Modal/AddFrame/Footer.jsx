import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../../../styles/GlobalStyles';
import { FooterContainer } from '../styled';
import history from '../../../services/history';
import axios from '../../../services/axios';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export default function Footer({
  setEdit, edit, handleSaveClick, id, setOnScreen,
}) {
  async function handleClickDelete() {
    try {
      await axios.delete(`/frames/${id}`);
      setOnScreen(false);
    } catch (error) {
      history.push('/officce');
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>

      <FooterContainer
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {edit && id && (
          <div className="delete--frame">
            <span
              role="button"
              tabIndex={0}
              onKeyUp={handleClickDelete}
              onClick={handleClickDelete}
            >
              DELETAR ARMAÇÃO
            </span>
          </div>
        )}
        {edit ? (
          <Button
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setEdit(false)}
          >
            EDITAR
          </Button>
        ) : (
          <>
            {id && (
              <Button
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                cancel
                onClick={() => setEdit(true)}
              >
                CANCELAR
              </Button>
            )}
            <Button variants={variants} onClick={handleSaveClick}>SALVAR</Button>
          </>
        )}
      </FooterContainer>
    </AnimatePresence>
  );
}

Footer.defaultProps = {
  id: '',
};

Footer.propTypes = {
  id: PropTypes.string,
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  setOnScreen: PropTypes.func.isRequired,
};
