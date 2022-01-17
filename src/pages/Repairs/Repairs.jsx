import React, { useEffect, useState } from 'react';
import RepairCard from '../../components/Card/RepairCard/RepairCard';
import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import Button from '../../components/Buttons/Index';
import {
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
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <PageContainer>
      <IsLoading loading={loading} />
      <PageHeader>
        <Button type="link" to="/new-repair">NOVO CONSERTO</Button>
      </PageHeader>
      {data.length > 0 ? (

        <ContainerGrid>
          {data.map((repair) => (
            <RepairCard key={repair.repair._id} data={repair} />
          ))}
        </ContainerGrid>

      ) : (
        <div className="no-content">Não há consertos no sistema</div>
      )}
    </PageContainer>
  );
}
