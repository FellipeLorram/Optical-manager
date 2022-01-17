import React, { useEffect, useState } from 'react';
import SellerCard from '../../components/Card/SellersCard/Index';
import IsLoading from '../../components/Loader/IsLoading';
import axios from '../../services/axios';
import history from '../../services/history';
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
      try {
        const response = await axios.get('/sellers');
        if (response.data) setData(response.data);
      } catch (error) {
        history.push('/officce');
      }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <PageContainer>
      <IsLoading loading={loading} />
      <PageHeader>
        <Button type="link" to="/officce/new-seller">CADASTRAR VENDEDOR</Button>
      </PageHeader>
      {data.length > 0 ? (

        <ContainerGrid>
          {data.map((seller) => (
            <SellerCard data={seller} key={seller._id} />
          ))}
        </ContainerGrid>

      ) : (
        <div className="no-content">Não há vendedores no sistema</div>
      )}
    </PageContainer>
  );
}
