import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import history from '../../services/history';
import axios from '../../services/axios';
import { HeaderContainer } from './styled';
import IsLoading from '../Loader/IsLoading';

export default function Header({ id }) {
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/clients/${id}`);
        setClient(data[0]);
        setLoading(false);
      } catch (error) {
        history.push(`/client/${id}`);
      }
    }
    getData();
  }, [id]);
  return (
    <HeaderContainer>
      <IsLoading loading={loading} />
      <div className="row">
        <div className="info--container">
          <span className="info--label">NOME:</span>
          <span>{client.nome}</span>
        </div>
        <div className="info--container">
          <span className="info--label">ENDEREÇO:</span>
          <span>{client.endereço}</span>
        </div>
      </div>
      <div className="row">
        <div className="info--container">
          <span className="info--label">TELEFONE:</span>
          <span>{client.telefone}</span>
        </div>
        <div className="info--container">
          <span className="info--label">CPF:</span>
          <span>{client.cpf}</span>
        </div>
        <div className="info--container">
          <span className="info--label">IDADE:</span>
          <span>{client.idade}</span>
        </div>
      </div>
      <div className="info--container">
        <span className="info--label">OBSERVAÇÕES:</span>
        <span>{client.observacoes}</span>
      </div>
    </HeaderContainer>
  );
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
};
