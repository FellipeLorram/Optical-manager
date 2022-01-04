import React, { useEffect, useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import Sells from './Sells';
import Exams from './Exams';
import Repairs from './Repairs';
import { Container, CurrentText } from './styled';
import { Button } from '../../../styles/GlobalStyles';
import axios from '../../../services/axios';
import history from '../../../services/history';

export default function SellsExamsRepairs({ data }) {
  const [sells, setSells] = useState(true);
  const [exams, setExams] = useState(false);
  const [repairs, setRepairs] = useState(false);

  const handleClick = (value, set) => {
    setSells(false);
    setExams(false);
    setRepairs(false);
    set(!value);
  };

  async function handleButtonClick(type) {
    switch (type) {
      case 'exam':
        await axios.patch(`/clients/${data.id}/inline`, { emFila: !data.inline });
        data.setInline(!data.inline);
        break;

      case 'sell':
        history.push(`/new-sell/${data.id}`);
        break;

      case 'appointment':
        history.push(`/new-exam/${data.id}`);
        break;

      case 'repair':
        history.push(`/new-repair/${data.id}`);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <div className="header">
        <CurrentText
          onClick={() => handleClick(sells, setSells)}
          current={sells}
        >
          COMPRAS
        </CurrentText>
        <CurrentText
          onClick={() => handleClick(exams, setExams)}
          current={exams}
        >
          EXAMES
        </CurrentText>
        <CurrentText
          onClick={() => handleClick(repairs, setRepairs)}
          current={repairs}
        >
          CONSERTOS
        </CurrentText>
      </div>
      <div className="button--container">
        {sells && (<Button onClick={() => handleButtonClick('sell')}>NOVA COMPRA</Button>)}
        {exams && (
          <>
            <Button
              onClick={() => handleButtonClick('exam')}
            >
              {data.inline ? ('REMOVER DA FILA DE EXAME') : ('ADICIONAR A FILA DE EXAME')}
            </Button>
            <Button
              onClick={() => handleButtonClick('appointment')}
            >
              INICIAR CONSULTA
            </Button>
          </>
        )}
        {repairs && (
          <Button
            onClick={() => handleButtonClick('repair')}
          >
            NOVO CONSERTO

          </Button>
        )}
      </div>
      <AnimatePresence>
        <Sells key={0} sells={sells} id={data.id} data={data.sells} />
        <Exams key={1} exams={exams} id={data.id} data={data.exams} />
        <Repairs key={2} repairs={repairs} id={data.id} data={data.repairs} />
      </AnimatePresence>
    </Container>
  );
}

SellsExamsRepairs.propTypes = {
  data: PropTypes.object.isRequired,
};
