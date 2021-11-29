import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { InfoContainer } from './styled';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
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

export default function LastSell({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const Data = new Date(data.CriadoEm).toLocaleDateString('pt-BR', options);
  return (
    <>
      {data && (
        <InfoContainer
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          whileHover="hover"
        >
          <div className="date--container">
            <span>{Data}</span>
          </div>
          <div className="content">
            <span>{data.armacao}</span>
            <CurrencyFormat value={data.valorArm} displayType="text" thousandSeparator prefix="R$" />
          </div>
          <div className="content">
            <span>{data.lente}</span>
            <CurrencyFormat value={data.valorLen} displayType="text" thousandSeparator prefix="R$" />
          </div>
          <div className="content">
            <span>Total</span>
            <CurrencyFormat value={data.total} displayType="text" thousandSeparator prefix="R$" />
          </div>
          <div className="content">
            <span>{data.pago}</span>
            <CurrencyFormat value={data.resta} displayType="text" thousandSeparator prefix="R$" />
          </div>

        </InfoContainer>
      )}
    </>
  );
}

LastSell.propTypes = {
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};
