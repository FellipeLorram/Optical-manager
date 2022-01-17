import PropTypes from 'prop-types';
import { get } from 'lodash';

import React, { useEffect, useState } from 'react';
import { Container, LevelSelectContainer } from './styled';
import { ContainerGrid } from '../../../styles/GlobalStyles';
import ClientsCard from '../../../components/Card/ClientsCard/ClientsCard';
import Input from '../../../components/Input/Input';
import history from '../../../services/history';

const variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: -30,
    opacity: 0,
  },
};

export default function Search({ onScreen, data, handleClickFunction }) {
  const [searchType, setSearchType] = useState('CPF');
  const [text, setText] = useState('');
  const [inputType, setInputType] = useState('text');

  useEffect(() => {
    if (searchType === 'NOME') setInputType('text');
    else setInputType('number');
    setText('');
  }, [searchType]);

  const handleSearchClick = () => {
    if (searchType === 'CPF') setSearchType('NOME');
    else setSearchType('CPF');
  };

  return (
    <>
      {onScreen && (
        <>
          <Container
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Input label="BUSCAR CLIENTE" valid text={text} setText={setText} type={inputType} />
            <LevelSelectContainer onClick={handleSearchClick}>
              {searchType}
            </LevelSelectContainer>
          </Container>
          <ContainerGrid noP>
            {data
              .filter((clients) => clients[searchType.toLocaleLowerCase()].toLowerCase()
                .startsWith(text.toLocaleLowerCase()))
              .map((clients) => (
                <ClientsCard
                  key={clients._id}
                  data={clients}
                  handleClickFunction={handleClickFunction}
                />
              ))}
          </ContainerGrid>
        </>
      )}
    </>
  );
}

Search.propTypes = {
  onScreen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  handleClickFunction: PropTypes.func.isRequired,
};
