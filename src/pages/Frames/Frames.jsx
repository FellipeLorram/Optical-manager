import React, { useEffect, useState } from 'react';

import AddFrame from '../../Widgets/Modals/AddFrame/Index';
import IsLoading from '../../components/Loader/IsLoading';
import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import axios from '../../services/axios';
import history from '../../services/history';
import Button from '../../components/Buttons/Index';
import {
  ContainerGrid, PageContainer, PageHeader,
} from '../../styles/GlobalStyles';
import Frame from './Frame';

export default function Frames() {
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({ name: '', price: '', refe: '' });
  const [modalOnScreen, setModalOnScreen] = useState(false);
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/frames');
        setFrames(response.data.frames);
        setLoading(false);
      } catch (error) {
        history.push('/office');
      }
    }
    getData();
  }, [modalOnScreen]);

  const handleClickButton = () => {
    setData({
      name: '',
      price: '',
      refe: '',
      sexo: 'Feminino',
      id: '',
    });
    setEdit(false);
    setModalOnScreen(true);
  };

  return (
    <PageContainer
      initial={{ x: '100' }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
    >
      <IsLoading loading={loading} />
      <AddFrame
        setEdit={setEdit}
        edit={edit}
        data={data}
        onScreen={modalOnScreen}
        setOnScreen={setModalOnScreen}
      />
      <PageHeader>
        <Arrow />
        ARMAÇÕES
      </PageHeader>
      <PageHeader>
        <Button onClick={handleClickButton}>ADICIONAR</Button>
      </PageHeader>
      {frames.length > 0 ? (
        <>
          <ContainerGrid>
            {frames.map((frame) => (
              <Frame
                key={frame.name}
                setModalOnScreen={setModalOnScreen}
                setData={setData}
                id={frame._id}
                name={frame.name}
                price={frame.price}
                refe={frame.ref}
                sexo={frame.sexo}
                setEdit={setEdit}
              />
            ))}
          </ContainerGrid>
        </>
      )
        : (<div className="no-content">NÃO POSSUI ARMAÇÕES NO SISTEMA</div>)}
    </PageContainer>
  );
}
