import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Arrow from '../../../components/Svgs/ArrowBack/ArrowLeft';
import history from '../../../services/history';
import axios from '../../../services/axios';
import { PageContainer, PageHeader } from '../../../styles/GlobalStyles';
import CurrentContent from './CurrentContent';
import { Container } from './styled';

export default function ClientChoice({ match }) {
  const [text, setText] = useState({ headerText: '', askQuestion: '' });
  const [data, setData] = useState([]);
  const location = get(match, 'path', '');

  useEffect(() => {
    async function getData() {
      try {
        const responseData = await axios.get('/clients');
        setData(responseData.data);
      } catch (error) {
        history.goBack();
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (location === '/new-sell') {
      setText({ headerText: 'NOVA VENDA', askQuestion: 'Quem está fazendo está compra?' });
      return;
    }
    if (location === '/new-exam') {
      setText({ headerText: 'NOVO EXAME', askQuestion: 'Quem está fazendo este exame?' });
      return;
    }
    setText({ headerText: 'NOVO CONSERTO', askQuestion: 'Quem está fazendo este conserto?' });
  }, [location]);

  return (
    <PageContainer>
      <PageHeader>
        <div
          onKeyUp={() => history.goBack()}
          onClick={() => history.goBack()}
          role="button"
          tabIndex={0}
        >
          <Arrow />
        </div>
        {text.headerText}
      </PageHeader>
      <Container>
        <div className="header">
          {text.askQuestion}
        </div>
        <CurrentContent data={data} />
      </Container>
    </PageContainer>
  );
}

ClientChoice.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
