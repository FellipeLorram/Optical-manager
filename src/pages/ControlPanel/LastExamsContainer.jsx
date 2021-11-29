import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardsContainer, RowContainer } from './styled';
import Card from '../../components/Card/ControlPannelCard/LastExamCard';

export default function LastExamsContainer({ data }) {
  return (
    <>
      <RowContainer>
        <div className="header">
          ULTIMOS EXAMES
        </div>
      </RowContainer>
      <CardsContainer>
        {data.length > 0 ? data.map((exams) => (
          <Card key={exams.exam._id} data={exams} />
        )) : (
          <div className="no-data">Não há exames no sistema</div>
        )}
      </CardsContainer>
    </>
  );
}

LastExamsContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
