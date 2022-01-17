import React, { useEffect, useState } from 'react';
import LastExamCard from '../../components/Card/ControlPannelCard/LastExamCard';
import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import Button from '../../components/Buttons/Index';

import {
  ContainerGrid,
  PageContainer,
  PageHeader,
  RowContainer,
} from '../../styles/GlobalStyles';
import InLine from './InLine';

export default function Exams() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/clients/exams/all');
      setData(response.data);
      setTimeout(() => setLoading(false), 200);
    }
    getData();
  }, []);
  return (
    <PageContainer
      initial={{ x: '100' }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
    >
      <IsLoading loading={loading} />
      <PageHeader>
        <Button type="link" to="/new-exam">NOVO EXAME</Button>
      </PageHeader>
      <InLine />
      {data.length > 0 ? (
        <>
          <RowContainer>
            <div className="header">
              EXAMES
            </div>
          </RowContainer>
          <ContainerGrid>
            {data.map((Exam) => (
              <LastExamCard key={Exam.exam._id} data={Exam} />
            ))}
          </ContainerGrid>
        </>
      ) : (
        <div className="no-content">Não há exames no sistema</div>
      )}
    </PageContainer>
  );
}
