import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { LenContainer } from './styled';

export default function Len({
  name, price, type, id, edit, setEdit, setModalOnScreen, setData,
}) {
  const handleClick = () => {
    setData({
      name,
      price,
      type,
      id,
    });
    setEdit(true);
    setModalOnScreen(true);
  };

  return (
    <LenContainer
      onClick={handleClick}
    >
      <div className="info--container">
        <span className="label">LENTE</span>
        <span className="info">{name}</span>
      </div>
      <div className="info--container">
        <span className="label">PREÇO</span>
        <span className="info">
          <CurrencyFormat value={price} displayType="text" thousandSeparator prefix="R$" />
        </span>
      </div>
      <div className="info--container">
        <span className="label">TIPO</span>
        <span className="info">{type}</span>
      </div>
    </LenContainer>
  );
}

Len.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  setEdit: PropTypes.func.isRequired,
  setModalOnScreen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
