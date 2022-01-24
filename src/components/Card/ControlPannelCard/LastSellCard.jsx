import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { Container } from '../styled';
import history from '../../../services/history';

const cardVariants = {
  initial: {
    opacity: 0,
    x: 220,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.15, type: 'tween', stiffness: 100 },
  },
};

function LastSellCardComponent({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const format = {
    id: data._id,
    nome: data.nome,
    data: new Date(data.sell.CriadoEm).toLocaleDateString('pt-BR', options),
    valorArm: data.sell.valorArm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0,00',
    lente: data.sell.lente || 'N/A',
    valorLen: data.sell.valorLen.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
    pago: data.sell.pago.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
    resta: data.sell.resta.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
  };

  return (
    <Container
      variants={cardVariants}
      initial="initial"
      animate="animate"
      onClick={() => history.push(`/edit-sell/${data._id}/${data.sell._id}`)}
    >
      <div className="content">
        <span>{data.nome}</span>
        <span>{format.data}</span>
      </div>
      <div className="content">
        <span>{data.sell.armacao || 'N/A'}</span>
        <CurrencyFormat value={format.valorArm} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>{format.lente}</span>
        <CurrencyFormat value={data.sell.valorLen || 'N/A'} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Total</span>
        <CurrencyFormat value={data.sell.total || '0,00'} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Valor pago:</span>
        <CurrencyFormat value={format.pago} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Valor restante:</span>
        <CurrencyFormat value={format.resta} displayType="text" thousandSeparator prefix="R$" />
      </div>
    </Container>
  );
}

LastSellCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

const LastSellCard = memo(LastSellCardComponent);

export default LastSellCard;
