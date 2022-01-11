import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { Container } from './styled';
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

function RepairCardComponent({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const content = {
    data: new Date(data.repair.CriadoEm).toLocaleDateString('pt-BR', options),
    valor: data.repair.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0,00',
  };
  return (
    <Container
      onClick={() => history.push(`repair/${data._id}/${data.repair._id}`)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header">
        <span>{data.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="content">
        <span>{data.repair.tipo}</span>
        <CurrencyFormat value={content.valor} displayType="text" thousandSeparator prefix="R$" />
      </div>
      <div className="content">
        <span>Entregue:</span>
        <span>{data.repair.entregue ? 'Entregue' : 'Não entregue'}</span>
      </div>
      <div className="content">
        <span>Pago:</span>
        <span>{data.repair.pago ? 'Pago' : 'Não pago'}</span>
      </div>
    </Container>
  );
}

RepairCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

const RepairCard = memo(RepairCardComponent);

export default RepairCard;
