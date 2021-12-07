import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { Container } from './styled';

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

function RepairCardComponent({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const content = {
    nome: data.nome,
    data: new Date(data.repair.CriadoEm).toLocaleDateString('pt-BR', options),
    tipo: data.repair.tipo || 'N/A',
    valor: data.repair.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0,00',
    pago: data.repair.pago || 'N/A',
    entregue: data.repair.entregue || 'N/A',
  };
  return (
    <Container
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header">
        <span>{content.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="content">
        <span>{content.tipo}</span>
        <CurrencyFormat value={content.valor} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Entregue:</span>
        <span>{content.entregue}</span>
      </div>
      <div className="content">
        <span>Pago:</span>
        <span>{content.pago}</span>
      </div>
    </Container>
  );
}

RepairCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

const RepairCard = memo(RepairCardComponent);

export default RepairCard;
