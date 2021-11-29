import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import { ContainerGrid, InputWrapper } from '../../../styles/GlobalStyles';
import SearchTypeSelect from './SearchTypeSelect';
import ClientsCard from '../../../components/Card/ClientsCard/ClientsCard';

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

export default function Search({ onScreen, data }) {
  const [types, setTypes] = useState(['NOME']);
  const [searchType, setSearchType] = useState('CPF');
  const [text, setText] = useState('');
  const [animateLabel, setAnimateLabel] = useState(false);
  const [inputType, setInputType] = useState('text');

  useEffect(() => {
    if (searchType === 'NOME') setInputType('text');
    else setInputType('number');
    setText('');
  }, [searchType]);

  useEffect(() => {
    if (text) setAnimateLabel(true);
  }, [text]);

  const handleBlur = () => {
    if (!text) setAnimateLabel(false);
  };

  const handleChange = (value) => {
    setText(value);
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
            <InputWrapper
              valid
              animateLabel={animateLabel}
            >
              <div className="label">
                <span>BUSCAR CLIENTE</span>
              </div>
              <input
                value={text}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                onFocus={() => setAnimateLabel(true)}
                type={inputType}
              />
            </InputWrapper>
            <SearchTypeSelect
              types={types}
              setTypes={setTypes}
              searchType={searchType}
              setSearchType={setSearchType}
            />
          </Container>
          <ContainerGrid noP>
            {data.map((clients) => (
              <ClientsCard key={clients._id} data={clients} />
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
};
