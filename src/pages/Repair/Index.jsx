import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Input from '../../components/Input/Input';
import Switch from '../../styles/GlobalComponents/Switch';

import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import {
  Delete,
  PageContainer,
  PageHeader,
  FormContainer,
} from '../../styles/GlobalStyles';
import Header from '../../components/ClientInfoContainer/Header';
import DeleteRepairModal from '../../Widgets/Modals/DeleteModal/Index';
import history from '../../services/history';
import axios from '../../services/axios';
import Footer from '../../styles/GlobalComponents/Footer';

export default function Repair({ match }) {
  const [deleteModalOnScreen, setDeleteModalOnScreen] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);

  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [pago, setPago] = useState(false);
  const [entregue, setEntregue] = useState(false);

  const id = get(match, 'params.id', '');
  const repairId = get(match, 'params.repairid', '');

  useEffect(() => {
    if (!repairId) return;
    async function request() {
      try {
        const { data } = await axios.get(`/clients/${id}/concerts/${repairId}`);

        setTipo(data.tipo);
        setValor(data.valor);
        // setPago(data.pago);
        // setEntregue(data.entregue);
        setInputBlock(true);
        setEditButton(true);
      } catch (error) {
        history.push('/repairs');
      }
    }
    request();
  }, [repairId, id]);

  const handleDeleteClick = () => {
    async function Request() {
      try {
        await axios.delete(`/clients/${id}/concerts/${repairId}`);
        setDeleteModalOnScreen(false);
        history.push('/repairs');
      } catch (error) {
        history.push('/repairs');
      }
    }
    Request();
  };

  const handleClickCancelButton = () => {
    setEditButton(true);
    setInputBlock(true);
  };
  const handleClickEditButton = () => {
    setInputBlock(false);
    setEditButton(false);
  };

  const handleClickSaveButton = () => {
    async function saveRequest() {
      try {
        if (!repairId) {
          const { data } = await axios.post(`/clients/${id}/new-concert`, {
            tipo,
            valor,
            pago,
            entregue,
          });
          history.push(`/repair/${id}/${data._id}`);
        } else {
          await axios.put(`/clients/${id}/concerts/${repairId}`, {
            tipo,
            valor,
            pago,
            entregue,
          });
        }
        handleClickCancelButton();
      } catch (error) {
        history.push('/repairs');
      }
    }
    saveRequest();
  };

  return (
    <PageContainer>
      <DeleteRepairModal
        deleteText="Ao deletar esse conserto, você perderá todas as informações sobre o mesmo."
        onScreen={deleteModalOnScreen}
        setOnScreen={setDeleteModalOnScreen}
        handleClick={handleDeleteClick}
      />
      <PageHeader>
        <Arrow />
        {repairId ? '' : 'NOVO CONSERTO'}
      </PageHeader>
      <Header id={id} />

      <FormContainer buttonEnd style={{ marginTop: '15px' }}>
        <div className="row--2">
          <Input inputBlock={inputBlock} label="CONSERTO" text={tipo} setText={setTipo} valid type="text" />
          <Input inputBlock={inputBlock} label="VALOR" text={valor} setText={setValor} valid type="number" />
        </div>
        <div className="row--start">
          <Switch block={inputBlock} label="PAGO" isOn={pago} setIsOn={setPago} />
          <Switch block={inputBlock} label="ENTREGUE" isOn={entregue} setIsOn={setEntregue} />
        </div>

        <Footer
          id={repairId}
          noSwitch
          editButton={editButton}
          handleClickCancelButton={handleClickCancelButton}
          handleClickEditButton={handleClickEditButton}
          handleClickSaveButton={handleClickSaveButton}
        />
      </FormContainer>
      {repairId && (
        <Delete
          onClick={() => setDeleteModalOnScreen(true)}
        >
          DELETAR ESSE CONSERTO
        </Delete>
      )}

    </PageContainer>
  );
}

Repair.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
