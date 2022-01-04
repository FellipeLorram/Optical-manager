import React, { useEffect, useState } from 'react';
import RepairCard from '../../components/Card/RepairCard/RepairCard';
import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import {
  AddButton,
  ContainerGrid,
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';

export default function Repairs() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/clients/concerts/all');
      setData(response.data);
      setTimeout(() => setLoading(false), 200);
    }

    getData();
  }, []);
  return (
    <PageContainer>
      <IsLoading loading={loading} />
      <PageHeader>
        <AddButton to="/new-repair">NOVO CONSERTO</AddButton>
      </PageHeader>
      {data.length > 0 ? (

        <ContainerGrid>
          {data.map((Exam) => (
            <RepairCard key={Exam.nome} data={Exam} />
          ))}
        </ContainerGrid>

      ) : (
        <div className="no-content">Não há consertos no sistema</div>
      )}
    </PageContainer>
  );
}
