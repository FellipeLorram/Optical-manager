import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CardsContainer, RowContainer } from './styled';
import Card from '../../components/Card/ControlPannelCard/LastSellCard';

export default function LastSellsContainer({ data }) {
  return (
    <>
      <RowContainer>
        <div className="header">
          ULTIMAS VENDAS
        </div>
      </RowContainer>
      <CardsContainer>
        {data.length ? data.map((sells) => (
          <Card key={sells.sell._id} data={sells} />
        )) : (
          <div className="no-data">Não há vendas no sistema</div>
        )}

      </CardsContainer>
    </>
  );
}

LastSellsContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
