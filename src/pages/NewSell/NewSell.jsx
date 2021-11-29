import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Arrow from '../../components/Svgs/ArrowBack/ArrowLeft';
import {
  PageContainer,
  PageHeader,
} from '../../styles/GlobalStyles';
import Header from '../../components/ClientInfoContainer/Header';
import Body from './Body';

export default function NewSell({ match }) {
  const id = get(match, 'params.id', '');

  return (
    <PageContainer>
      <PageHeader>
        <Arrow />
        NOVA VENDA
      </PageHeader>
      <Header id={id} />
      <Body id={id} />
    </PageContainer>
  );
}

NewSell.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
