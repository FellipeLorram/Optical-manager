import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import Button from '../../Buttons/Index';
import axios from '../../../services/axios';
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
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function InlineCardComponent({ data, position, setData }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const content = {
    id: data._id,
    emFila: data.emFila,
    nome: data.nome,
    data: new Date(data.CriadoEm).toLocaleDateString('pt-BR', options),
    appoitmentNumber: data.exams.length,
  };

  const handleClickInlineRemove = () => {
    async function Request() {
      try {
        await axios.patch(`/clients/${content.id}/inline`, {
          emFila: !content.emFila,
        });
        setData((arr) => arr.splice(position - 1));
      } catch (error) {
        history.push('/exams');
      }
    }

    Request();
  };

  return (
    <Container
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="content">
        <span>{content.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="content">
        <span>Consultas realizadas</span>
        <span>{content.appoitmentNumber}</span>
      </div>
      <div className="content">
        <span>Posição</span>
        <span>
          {position}
          º
        </span>
      </div>
      <div className="footer">
        <Button type="link" to={`/new-exam/${content.id}`}>Iniciar consulta</Button>
        <Button onClick={handleClickInlineRemove}>Remover da fila</Button>
      </div>
    </Container>
  );
}

InlineCardComponent.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

const InlineCard = memo(InlineCardComponent);

export default InlineCard;
