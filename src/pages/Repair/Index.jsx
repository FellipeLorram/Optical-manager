import React, { useState } from 'react';
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
    function saveRequest() { }
    saveRequest();
  };

  return (
    <PageContainer>
      <DeleteRepairModal
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
          <Input inputBlock={inputBlock} label="CONSERTO" text={tipo} setText={setTipo} valid />
          <Input inputBlock={inputBlock} label="VALOR" text={valor} setText={setValor} valid />
        </div>
        <div className="row--start">
          <Switch label="PAGO" isOn={pago} setIsOn={setPago} />
          <Switch label="ENTREGUE" isOn={entregue} setIsOn={setEntregue} />
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
