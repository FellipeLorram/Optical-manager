import React from 'react';
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

export default function LastExamCard({ data }) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const content = {
    clientId: data._id,
    examId: data.exam._id,
    nome: data.nome,
    data: new Date(data.exam.CriadoEm).toLocaleDateString('pt-BR', options),
    esfOlhoDireito: data.exam.rxEsfOd,
    cilOlhoDireito: data.exam.rxCilOd,
    eixoOlhoDireito: data.exam.rxEixoOd,
    esfOlhoEsquerdo: data.exam.rxEsfOe,
    cilOlhoEsquerdo: data.exam.rxCilOe,
    eixoOlhoEsquerdo: data.exam.rxEixoOe,
    add: data.exam.rxAdd || 'Sem Adição',
  };
  return (
    <Container
      variants={cardVariants}
      initial="initial"
      animate="animate"
      onClick={() => history.push(`/edit-exam/${content.clientId}/${content.examId}`)}
    >
      <div className="content">
        <span>{content.nome}</span>
        <span>{content.data}</span>
      </div>
      <div className="content">
        <span className="material-icons-outlined">
          visibility
        </span>
        <span>Esf</span>
        <span>Cil</span>
        <span>Ex</span>
      </div>
      <div className="content">
        <span>OD:</span>
        <span>{content.esfOlhoDireito}</span>
        <span>{content.cilOlhoDireito}</span>
        <span>{content.eixoOlhoDireito}</span>
      </div>
      <div className="content">
        <span>OE:</span>
        <span>{content.esfOlhoEsquerdo}</span>
        <span>{content.cilOlhoEsquerdo}</span>
        <span>{content.eixoOlhoEsquerdo}</span>
      </div>
      <div className="content">
        <span>Adição:</span>
        <span />
        <span>{content.add}</span>
        <span />
      </div>
    </Container>
  );
}

LastExamCard.propTypes = {
  data: PropTypes.object.isRequired,
};
