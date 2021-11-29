import React, { useEffect, useState } from 'react';

import IsLoading from '../../components/Loader/IsLoading';
import AddLens from '../../components/Modal/AddLens/AddLens';
import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import axios from '../../services/axios';
import history from '../../services/history';
import {
  Button, ContainerGrid, PageContainer, PageHeader,
} from '../../styles/GlobalStyles';
import Len from './len';

export default function Lens() {
  const [onScreen, setOnScreen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lens, setLens] = useState([]);
  const [dataModal, setDataModal] = useState({
    name: '',
    price: '',
    type: 'Visão simples',
    id: '',
  });
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('/lens');
        setLens(data.lens);
        setLoading(false);
      } catch (error) {
        history.push('/officce');
      }
    }
    getData();
  }, [onScreen]);

  const handleClickButton = () => {
    setDataModal({
      name: '',
      price: '',
      type: 'Visão simples',
      id: '',
    });
    setEdit(false);
    setOnScreen(true);
  };
  return (
    <PageContainer
      initial={{ x: '100' }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
    >
      <AddLens
        setEdit={setEdit}
        edit={edit}
        data={dataModal}
        onScreen={onScreen}
        setOnScreen={setOnScreen}
      />
      <IsLoading loading={loading} />
      <PageHeader>
        <Arrow />
        LENTES
      </PageHeader>
      <PageHeader>
        <Button onClick={handleClickButton}>ADICIONAR</Button>
      </PageHeader>
      {lens.length > 0 ? (
        <>
          <ContainerGrid>
            {lens.map((len) => (
              <Len
                key={len.name}
                id={len._id}
                name={len.name}
                price={len.price}
                type={len.type}
                setData={setDataModal}
                edit={edit}
                setEdit={setEdit}
                setModalOnScreen={setOnScreen}
              />
            ))}
          </ContainerGrid>
        </>
      )
        : (<div className="no-content">NÃO POSSUI LENTES NO SISTEMA</div>)}

    </PageContainer>
  );
}
