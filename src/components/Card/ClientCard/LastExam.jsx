import React from 'react';
import PropTypes from 'prop-types';

import { InfoContainer } from './styled';
import history from '../../../services/history';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  hover: {
    borderColor: 'rgba(228, 228, 228, 0.3)',
    transition: {
      duration: 0.2,
    },
  },
};

export default function LastExam({ id, data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const Data = new Date(data.CriadoEm).toLocaleDateString('pt-BR', options);
  const handleClick = (e) => {
    e.stopPropagation();
    history.push(`/edit-exam/${id}/${data._id}`);
  };

  return (
    <>
      {data && (
        <InfoContainer
          onClick={handleClick}
          variants={variants}
          animate="animate"
          initial="initial"
          whileHover="hover"
          exit="exit"
        >
          <div className="date--container">
            <span>{Data}</span>
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
            <span>{data.rxEsfOd || 'n/a'}</span>
            <span>{data.rxCilOd || 'n/a'}</span>
            <span>{data.rxEixoOd || 'n/a'}</span>
          </div>
          <div className="content">
            <span>OE:</span>
            <span>{data.rxEsfOe || 'n/a'}</span>
            <span>{data.rxCilOe || 'n/a'}</span>
            <span>{data.rxEixoOe || 'n/a'}</span>
          </div>
          <div className="content">
            <span>Adição:</span>
            <span />
            <span>{data.rxAdd || 'n/a'}</span>
            <span />
          </div>

        </InfoContainer>
      )}
    </>
  );
}
LastExam.defaultProps = {
  id: '',
};

LastExam.propTypes = {
  id: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
