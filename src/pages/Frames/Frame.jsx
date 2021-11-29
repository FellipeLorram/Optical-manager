import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { FrameContainer } from './styled';

export default function Frame({
  sexo, name, price, refe, setData, setModalOnScreen, setEdit, id,
}) {
  const handleClick = () => {
    setData({
      name,
      price,
      refe,
      sexo,
      id,
    });
    setEdit(true);
    setModalOnScreen(true);
  };
  return (
    <FrameContainer
      onClick={handleClick}
    >
      <div className="info--container">
        <span className="label">ARMAÇÃO</span>
        <span className="info">{name}</span>
      </div>
      <div className="info--container">
        <span className="label">PREÇO</span>
        <span className="info">
          <CurrencyFormat value={price} displayType="text" thousandSeparator prefix="R$" />
        </span>
      </div>
      <div className="info--container">
        <span className="label">REFERÊNCIA</span>
        <span className="info">{refe}</span>
      </div>
    </FrameContainer>
  );
}

Frame.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sexo: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  refe: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  setModalOnScreen: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
};
