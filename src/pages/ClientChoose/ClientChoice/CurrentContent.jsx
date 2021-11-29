import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import NewClient from './NewClient';
import Search from '../Search/Search';

import { ChoiceContainer, CurrentText } from './styled';

export default function CurrentContent({ data }) {
  const [search, setSearch] = useState(true);
  const [newClient, setNewClient] = useState(false);
  const handleClick = (set, value) => {
    setSearch(false);
    setNewClient(false);
    set(!value);
  };
  return (
    <>
      <ChoiceContainer>
        <CurrentText
          current={search}
          onClick={() => handleClick(setSearch, search)}
        >
          BUSCAR CLIENTE
        </CurrentText>
        <CurrentText
          current={newClient}
          onClick={() => handleClick(setNewClient, newClient)}
        >
          CADASTRAR CLIENTE
        </CurrentText>
      </ChoiceContainer>
      <AnimatePresence>
        <Search key="search" data={data} onScreen={search} />
        <NewClient key="new-client" onScreen={newClient} />
      </AnimatePresence>
    </>
  );
}

CurrentContent.propTypes = {
  data: PropTypes.array.isRequired,
};
