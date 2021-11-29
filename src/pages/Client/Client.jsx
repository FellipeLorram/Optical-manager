import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import IsLoading from '../../components/Loader/IsLoading';
import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import { PageContainer, PageHeader, Delete } from '../../styles/GlobalStyles';
import Input from './Input';
import { Container } from './styled';
import TextArea from './TextArea';
import axios from '../../services/axios';
import history from '../../services/history';
import Footer from './Footer';
import SellsExamsRepairs from './SellsExamsRepairs/SellsExamsRepairs';
import DeleteClientModal from '../../components/Modal/DeleteClient/DeleteClientModal';

export default function Client({ match }) {
  const [inline, setInline] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);
  const [editButton, setEditButton] = useState(false);

  const [sells, setSells] = useState([]);
  const [exams, setExams] = useState([]);
  const [repairs, setRepairs] = useState([]);

  const [nome, setNome] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const [endereco, setEndereco] = useState('');
  const [isValidEndereco, setIsValidEndereco] = useState(true);

  const [telefone, setTelefone] = useState('');
  const [isValidTelefone, setIsValidTelefone] = useState(true);

  const [idade, setIdade] = useState('');
  const [isValidIdade, setIsValidIdade] = useState(true);

  const [CPF, setCPF] = useState('');
  const [isValidCPF, setIsValidCPF] = useState(true);

  const [Observacoes, setObservacoes] = useState('');

  const [isOn, setIsOn] = useState(false);

  const id = get(match, 'params.id', '');

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/clients/${id}`);
        setNome(data[0].nome);
        setIdade(data[0].idade);
        setEndereco(data[0].endereço);
        setCPF(data[0].cpf);
        setTelefone(data[0].telefone);
        setObservacoes(data[0].observacoes);
        setInputBlock(true);
        setEditButton(true);
        setSells(data[0].sells);
        setExams(data[0].exams);
        setRepairs(data[0].concerts);
        setInline(data[0].emFila);
        setLoading(false);
      } catch (error) {
        history.push('/clients');
      }
    }
    getData();
  }, [id]);

  const handleClickEditButton = () => {
    setEditButton(false);
    setInputBlock(false);
  };

  const handleClickSaveButton = () => {
    if (!nome) {
      setIsValidName(false);
      return;
    }
    async function request() {
      if (id) {
        try {
          setLoading(true);
          await axios.put(`/clients/${id}`, {
            nome,
            endereço: endereco,
            telefone,
            idade,
            cpf: CPF,
            observacoes: Observacoes,
            emFila: isOn,
          });
          setEditButton(true);
          setLoading(false);
          history.push(`/client/${id}`);
        } catch (error) {
          history.push('/');
        }
      } else {
        try {
          setLoading(true);
          const response = await axios.post('/clients/new-client', {
            nome,
            endereço: endereco,
            telefone,
            idade,
            cpf: CPF,
            observacoes: Observacoes,
            emFila: isOn,
          });
          setLoading(false);
          history.push('/clients');
        } catch (error) {
          history.push('/clients');
        }
      }
    }
    request();
  };

  const handleClickCancelButton = () => {
    setInputBlock(true);
    setEditButton(true);
    history.push(`/client/${id}`);
  };

  return (
    <PageContainer
      initial={{ x: 50 }}
      animate={{ x: 0 }}
    >
      <DeleteClientModal id={id} setOnScreen={setModal} onScreen={modal} />
      <IsLoading loading={loading} />
      <PageHeader>
        <Arrow />
        {id ? ('') : (
          'NOVO CLIENTE'
        )}

      </PageHeader>
      <Container buttonEnd={id}>
        <div className="row--2">
          <Input inputBlock={inputBlock} setValidText={setIsValidName} type="text" label="NOME" setText={setNome} valid={isValidName} text={nome} />
          <Input inputBlock={inputBlock} setValidText={setIsValidEndereco} type="text" label="ENDEREÇO" setText={setEndereco} valid={isValidEndereco} text={endereco} />
        </div>
        <div className="row--2">
          <Input inputBlock={inputBlock} setValidText={setIsValidTelefone} type="tel" label="TELEFONE" setText={setTelefone} valid={isValidTelefone} text={telefone} />
          <Input inputBlock={inputBlock} setValidText={setIsValidIdade} type="number" label="IDADE" setText={setIdade} valid={isValidIdade} text={idade} />
          <Input inputBlock={inputBlock} setValidText={setIsValidCPF} type="text" label="CPF" setText={setCPF} valid={isValidCPF} text={CPF} />
        </div>
        <TextArea inputBlock={inputBlock} type="text" label="OBSERVAÇÕES" setText={setObservacoes} valid text={Observacoes} />
        <Footer
          editButton={editButton}
          isOn={isOn}
          setIsOn={setIsOn}
          id={id}
          handleClickCancelButton={handleClickCancelButton}
          handleClickEditButton={handleClickEditButton}
          handleClickSaveButton={handleClickSaveButton}
        />
      </Container>
      {
        id && (
          <>
            <SellsExamsRepairs data={{
              id, sells, exams, repairs, inline, setInline,
            }}
            />
            <Delete
              onClick={() => setModal(true)}
            >
              DELETAR CLIENTE
            </Delete>
          </>
        )
      }
    </PageContainer>
  );
}

Client.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
