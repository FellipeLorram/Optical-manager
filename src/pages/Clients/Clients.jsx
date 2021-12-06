import React, { useEffect, useState } from 'react';

import ClientsCard from '../../components/Card/ClientsCard/ClientsCard';
import axios from '../../services/axios';
import IsLoading from '../../components/Loader/IsLoading';
import {
  ContainerGrid,
  AddButton,
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';

export default function Clients() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/clients');
      setData(response.data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <PageContainer>
      <IsLoading loading={loading} />
      <PageHeader>
        <AddButton to="/new-client">
          NOVO CLIENTE
        </AddButton>
      </PageHeader>
      <ContainerGrid>
        {data.map((clients) => (
          <ClientsCard key={clients._id} data={clients} />
        ))}
      </ContainerGrid>
    </PageContainer>
  );
}
