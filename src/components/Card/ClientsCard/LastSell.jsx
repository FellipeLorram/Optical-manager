import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { InfoContainer } from './styled';
import history from '../../../services/history';

const variants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -50,
    opacity: 0,
  },
};

export default function LastSell({ data, id }) {
  const handleClick = (e) => {
    e.stopPropagation();
    history.push(`/edit-sell/${id}/${data.id}`);
  };
  return (
    <>
      {data ? (
        <InfoContainer
          onClick={(e) => handleClick(e)}
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
        >
          <div className="date--container">
            <span>{data.data}</span>
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
      ) : (
        <InfoContainer
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
        >
          <div className="no-content">
            Não há vendas no sistema.
          </div>
        </InfoContainer>
      )}
    </>
  );
}

LastSell.propTypes = {
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  id: PropTypes.string.isRequired,
};
