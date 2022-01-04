import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import IsLoading from '../../components/Loader/IsLoading';
import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import {
  Delete, FormContainer, PageContainer, PageHeader,
} from '../../styles/GlobalStyles';
import Input from '../../components/Input/Input';
import axios from '../../services/axios';
import history from '../../services/history';
import TextArea from '../../styles/GlobalComponents/TextArea';
import Footer from '../../styles/GlobalComponents/Footer';
import DeleteSellerModal from '../../Widgets/Modals/DeleteModal/Index';

export default function Client({ match }) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);
  const [editButton, setEditButton] = useState(false);

  const [nome, setNome] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const [endereço, setEndereco] = useState('');
  const [isValidEndereco, setIsValidEndereco] = useState(true);

  const [telefone, setTelefone] = useState('');
  const [isValidTelefone, setIsValidTelefone] = useState(true);

  const [idade, setIdade] = useState('');
  const [isValidIdade, setIsValidIdade] = useState(true);

  const [cpf, setCPF] = useState('');
  const [isValidCPF, setIsValidCPF] = useState(true);

  const [observacoes, setObservacoes] = useState('');

  const id = get(match, 'params.id', '');

  useEffect(() => {
    if (!id) return;
    async function request() {
      try {
        const { data } = await axios.get(`/sellers/${id}`);
        setNome(data.nome);
        setIdade(data.idade);
        setEndereco(data.endereço);
        setTelefone(data.telefone);
        setCPF(data.cpf);
        setObservacoes(data.observacoes);
        setEditButton(true);
        setInputBlock(true);
      } catch (error) {
        history.push('/officce/sellers');
      }
    }
    request();
  }, [id]);

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
        if (!id) {
          const { data } = await axios.post('/sellers/new-seller', {
            nome,
            endereço,
            telefone,
            cpf,
            observacoes,
            idade,
          });
          history.push(`/officce/seller/${data._id}`);
        } else {
          await axios.put(`/sellers/${id}`, {
            nome,
            endereço,
            telefone,
            cpf,
            observacoes,
            idade,
          });
          history.go(0);
        }
      } catch (error) {
        history.push('/officce/sellers');
      }
    }
    saveRequest();
  };

  const handleDeleteClick = () => {
    async function Request() {
      try {
        await axios.delete(`/sellers/${id}`);
        setModal(false);
        history.push('/officce/sellers');
      } catch (error) {
        history.push('/officce/sellers');
      }
    }
    Request();
  };

  return (
    <PageContainer
      initial={{ x: 50 }}
      animate={{ x: 0 }}
    >
      <IsLoading loading={loading} />
      <DeleteSellerModal handleClick={handleDeleteClick} onScreen={modal} setOnScreen={setModal} />
      <PageHeader>
        <Arrow />
        {id ? ('') : (
          'NOVO VENDEDOR'
        )}
      </PageHeader>
      <FormContainer buttonEnd>
        <div className="row--2">
          <Input inputBlock={inputBlock} setValidText={setIsValidName} type="text" label="NOME" setText={setNome} valid={isValidName} text={nome} />
          <Input inputBlock={inputBlock} setValidText={setIsValidEndereco} type="text" label="ENDEREÇO" setText={setEndereco} valid={isValidEndereco} text={endereço} />
        </div>
        <div className="row--2">
          <Input inputBlock={inputBlock} setValidText={setIsValidTelefone} type="tel" label="TELEFONE" setText={setTelefone} valid={isValidTelefone} text={telefone} />
          <Input inputBlock={inputBlock} setValidText={setIsValidIdade} type="number" label="IDADE" setText={setIdade} valid={isValidIdade} text={idade} />
          <Input inputBlock={inputBlock} setValidText={setIsValidCPF} type="text" label="CPF" setText={setCPF} valid={isValidCPF} text={cpf} />
        </div>
        <TextArea inputBlock={inputBlock} type="text" label="OBSERVAÇÕES" setText={setObservacoes} valid text={observacoes} />
        <Footer
          id={id}
          noSwitch
          editButton={editButton}
          handleClickCancelButton={handleClickCancelButton}
          handleClickEditButton={handleClickEditButton}
          handleClickSaveButton={handleClickSaveButton}
        />
      </FormContainer>
      {id && (
        <Delete
          onClick={() => setModal(true)}
        >
          DELETAR VENDEDOR
        </Delete>
      )}
    </PageContainer>
  );
}

Client.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
