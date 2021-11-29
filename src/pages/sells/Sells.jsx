import React, { useEffect, useState } from 'react';
import LastSellCard from '../../components/Card/ControlPannelCard/LastSellCard';
import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import {
  AddButton,
  ContainerGrid,
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';

export default function Sells() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/clients/sells/all');
      setData(response.data);
      setTimeout(() => setLoading(false), 200);
    }

    getData();
  }, []);
  return (
    <PageContainer
      initial={{ x: 200 }}
      animate={{ x: 0 }}
    >
      <IsLoading loading={loading} />
      <PageHeader>
        <AddButton to="/new-sell">NOVA VENDA</AddButton>
      </PageHeader>
      <ContainerGrid>
        {data.length > 0 ? (
          <>
            {data.map((sell) => (
              <LastSellCard key={sell.sell._id} data={sell} />
            ))}
          </>
        ) : (
          <div className="no-content">NÃO HÁ VENDAS NO SISTEMA</div>
        )}
      </ContainerGrid>
    </PageContainer>
  );
}
