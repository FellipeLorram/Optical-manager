import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import axios from '../../services/axios';
import InlineCard from '../../components/Card/InlineCard/InlineCard';
import {
  ContainerGrid,
  RowContainer,
} from '../../styles/GlobalStyles';

export default function InLine() {
  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/clients/inline');
      setData(response.data);
      if (response.data.length > 0) setHasData(true);
    }
    getData();
  }, []);

  let position = 0;

  return (
    <AnimatePresence>
      <RowContainer key="row">
        <div className="header">
          FILA DE ATENDIMENTO
        </div>
      </RowContainer>
      {data.length > 0 ? (
        <>
          <ContainerGrid>
            {data.map((client) => {
              position += 1;
              return (
                <InlineCard
                  setData={setData}
                  key={position}
                  data={client}
                  position={position}
                />
              );
            })}
          </ContainerGrid>
        </>
      ) : (
        <div className="no-content">Não há clientes na fila de exame</div>
      )}
    </AnimatePresence>
  );
}
