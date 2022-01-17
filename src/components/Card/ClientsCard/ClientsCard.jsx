import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import { Choice, Container } from './styled';
import CardCurrentContent from './CardCurrentContent';
import { setContent, setDataExam, setDataSell } from '../../../functions/clientsPage/setData';

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

function ClientsCardComponent({ data, handleClickFunction }) {
  const [current, setCurrent] = useState(true);
  const [sellSelect, setSellSelect] = useState(true);
  const [examSelect, setExamSelect] = useState(false);

  const lastSell = data.sells.slice(-1)[0];
  const lastExam = data.exams.slice(-1)[0];
  const content = setContent(data);
  const dataSells = setDataSell(lastSell);
  const dataExams = setDataExam(lastExam);

  const handleChoiceClick = (e, value) => {
    e.stopPropagation();
    setSellSelect(!sellSelect);
    setExamSelect(!examSelect);
    setCurrent(value);
  };

  return (
    <Container
      onClick={(e) => handleClickFunction(data._id)}
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header">
        <span>{content.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="choice--container">
        <Choice
          selected={sellSelect}
          onClick={(e) => handleChoiceClick(e, true)}
        >
          ULTIMA COMPRA
        </Choice>
        <Choice
          onClick={(e) => handleChoiceClick(e, false)}
          selected={examSelect}
        >
          ULTIMO EXAME
        </Choice>
      </div>
      <CardCurrentContent data={{ dataSells, dataExams, id: data._id }} current={current} />
    </Container>
  );
}

ClientsCardComponent.defaultProps = {
  handleClickFunction: () => false,
};

ClientsCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
  handleClickFunction: PropTypes.func,
};

const ClientsCard = memo(ClientsCardComponent);

export default ClientsCard;
