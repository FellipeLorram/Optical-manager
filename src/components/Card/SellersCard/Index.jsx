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

function SellerCardComponent({ data }) {
  return (
    <Container
      jc="flex-start"
      mh="unset"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      onClick={() => history.push(`/officce/seller/${data._id}`)}
    >
      <div className="content">
        <span>Nome</span>
        <span>{data.nome}</span>
      </div>
      <div className="content">
        <span>Endereço</span>
        <span>{data.endereço}</span>
      </div>
      <div className="content">
        Telefone:
        <span>{data.telefone}</span>
      </div>
    </Container>
  );
}

SellerCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

const SellerCard = memo(SellerCardComponent);

export default SellerCard;
