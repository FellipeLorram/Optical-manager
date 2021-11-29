import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { InfoContainer } from './styled';
import history from '../../../services/history';

const variants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
};

export default function LastExam({ data, id }) {
  const handleClick = (e) => {
    e.stopPropagation();
    history.push(`/edit-exam/${id}/${data.id}`);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {data ? (
        <InfoContainer
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          onClick={(e) => handleClick(e)}
        >
          <div className="date--container">
            <span>{data.data}</span>
          </div>
          <div className="content">
            <span className="material-icons-outlined">
              visibility
            </span>
            <span>Esf</span>
            <span>Cil</span>
            <span>Ex</span>
          </div>
          <div className="content">
            <span>OD:</span>
            <span>{data.esfOlhoDireito}</span>
            <span>{data.cilOlhoDireito}</span>
            <span>{data.eixoOlhoDireito}</span>
          </div>
          <div className="content">
            <span>OE:</span>
            <span>{data.esfOlhoEsquerdo}</span>
            <span>{data.cilOlhoEsquerdo}</span>
            <span>{data.eixoOlhoEsquerdo}</span>
          </div>
          <div className="content">
            <span>Adição:</span>
            <span />
            <span>{data.add}</span>
            <span />
          </div>

        </InfoContainer>
      ) : (
        <InfoContainer
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
        >
          <div className="no-content">
            Não há exames no sistema.
          </div>
        </InfoContainer>
      )}
    </AnimatePresence>
  );
}

LastExam.propTypes = {
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  id: PropTypes.string.isRequired,
};
