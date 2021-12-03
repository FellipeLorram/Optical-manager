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
import DeleteSellModal from '../../components/Modal/DeleteSell/DeleteSellModal';

export default function NewSell({ match }) {
  const [deleteModalOnScreen, setDeleteModalOnScreen] = useState(false);

  const id = get(match, 'params.id', '');
  const sellId = get(match, 'params.sellid', '');

  return (
    <PageContainer>
      <DeleteSellModal
        onScreen={deleteModalOnScreen}
        setOnScreen={setDeleteModalOnScreen}
        sellId={sellId}
        id={id}
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
