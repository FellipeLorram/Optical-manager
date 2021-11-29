import React from 'react';
import PropTypes from 'prop-types';

import { InfoContainer } from './styled';

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

export default function LastRepair({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const Data = new Date(data.CriadoEm).toLocaleDateString('pt-BR', options);

  return (
    <>
      {data && (
        <InfoContainer
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
            <span>{data.tipo}</span>
            <span>{data.valor || 'N/A'}</span>
          </div>
          <div className="content">
            <span>Entregue</span>
            <span>{data.entregue || 'N/A'}</span>
          </div>
          <div className="content">
            <span>Pago</span>
            <span>{data.pago || 'N/A'}</span>
          </div>

        </InfoContainer>
      )}
    </>
  );
}

LastRepair.propTypes = {
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
