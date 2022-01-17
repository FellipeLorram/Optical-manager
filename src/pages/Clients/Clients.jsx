import React, { useEffect, useState } from 'react';

import Button from '../../components/Buttons/Index';
import ClientsCard from '../../components/Card/ClientsCard/ClientsCard';
import axios from '../../services/axios';
import history from '../../services/history';
import IsLoading from '../../components/Loader/IsLoading';
import {
  ContainerGrid,
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
        <Button type="link" to="/new-client">
          NOVO CLIENTE
        </Button>
      </PageHeader>
      <ContainerGrid>
        {data.length > 0 ? data.map((clients) => (
          <ClientsCard key={clients._id} data={clients} handleClickFunction={(id) => history.push(`/client/${id}`)} />
        )) : (
          <div className="no-content">
            Não há clientes no sistema.
          </div>
        )}
      </ContainerGrid>
    </PageContainer>
  );
}
