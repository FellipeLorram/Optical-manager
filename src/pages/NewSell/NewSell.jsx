import React, { useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import {
  Delete,
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';
import Header from '../../components/ClientInfoContainer/Header';
import Body from './Body';
import DeleteSellModal from '../../Widgets/Modals/DeleteModal/Index';
import history from '../../services/history';
import axios from '../../services/axios';

export default function NewSell({ match }) {
  const [deleteModalOnScreen, setDeleteModalOnScreen] = useState(false);

  const id = get(match, 'params.id', '');
  const sellId = get(match, 'params.sellid', '');

  const handleDeleteClick = () => {
    async function Request() {
      try {
        await axios.delete(`/clients/${id}/${sellId}`);
        setDeleteModalOnScreen(false);
        history.goBack();
      } catch (error) {
        history.push('/clients');
      }
    }
    Request();
  };

  return (
    <PageContainer>
      <DeleteSellModal
        onScreen={deleteModalOnScreen}
        setOnScreen={setDeleteModalOnScreen}
        handleClick={handleDeleteClick}
        deleteText="Você realmente deseja deletar essa venda? (Não contará mais no relatório)"
      />
      <PageHeader>
        <Arrow />
        {sellId ? '' : 'NOVA VENDA'}
      </PageHeader>
      <Header id={id} />
      <Body id={id} sellid={sellId} />
      {sellId && (
        <Delete
          onClick={() => setDeleteModalOnScreen(true)}
        >
          DELETAR ESSA VENDA
        </Delete>
      )}

    </PageContainer>
  );
}

NewSell.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
