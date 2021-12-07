import React, { useEffect, useState } from 'react';

import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import { PageContainer, PageHeader } from '../../styles/GlobalStyles';
import ActionsContainer from './ActionsContainer';
import LastExamsContainer from './LastExamsContainer';
import LastSellsContainer from './LastSellsContainer';

export default function ControlPanel() {
  const [loading, setLoading] = useState(true);
  const [lastExams, setLastExams] = useState([]);
  const [lastSells, setLastSells] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataSells = await axios.get('/clients/sells/last');
      const dataExams = await axios.get('/clients/exams/last');
      setLastSells(dataSells.data);
      setLastExams(dataExams.data);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <PageContainer>
      <IsLoading loading={loading} />
      <ActionsContainer />
      <LastSellsContainer data={lastSells} />
      <LastExamsContainer data={lastExams} />
    </PageContainer>
  );
}
