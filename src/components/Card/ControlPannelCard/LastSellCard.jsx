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
  const content = {
    id: data._id,
    nome: data.nome,
    data: new Date(data.sell.CriadoEm).toLocaleDateString('pt-BR', options),
    armacao: data.sell.armacao || 'N/A',
    valorArm: data.sell.valorArm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0,00',
    lente: data.sell.lente || 'N/A',
    valorLen: data.sell.valorLen.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
    total: data.sell.total || '0,00',
    pago: data.sell.pago.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
    resta: data.sell.resta.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || '0,00',
    sellId: data.sell._id,
  };
  return (
    <Container
      variants={cardVariants}
      initial="initial"
      animate="animate"
      onClick={() => history.push(`/edit-sell/${content.id}/${content.sellId}`)}
    >
      <div className="content">
        <span>{content.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="content">
        <span>{content.armacao}</span>
        <CurrencyFormat value={content.valorArm} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>{content.lente}</span>
        <CurrencyFormat value={content.valorLen} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Total</span>
        <CurrencyFormat value={content.total} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>{content.pago}</span>
        <CurrencyFormat value={content.resta} displayType="text" thousandSeparator prefix="R$" />
      </div>
    </Container>
  );
}

LastSellCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

const LastSellCard = memo(LastSellCardComponent);

export default LastSellCard;
