import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import NewClient from './NewClient';
import Search from '../Search/Search';

import { ChoiceContainer, CurrentText } from './styled';
import history from '../../../services/history';

export default function CurrentContent({ data, location }) {
  const [search, setSearch] = useState(true);
  const [newClient, setNewClient] = useState(false);
  const handleClick = (set, value) => {
    setSearch(false);
    setNewClient(false);
    set(!value);
  };

  const handleClickFunction = (id) => {
    if (location === '/new-sell') {
      history.push(`/new-sell/${id}`);
      return;
    }
    if (location === '/new-exam') {
      history.push(`/new-exam/${id}`);
      return;
    }
    history.push(`/new-repair/${id}`);
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
        <Search key="search" data={data} onScreen={search} handleClickFunction={handleClickFunction} />
        <NewClient key="new-client" onScreen={newClient} />
      </AnimatePresence>
    </>
  );
}

CurrentContent.propTypes = {
  data: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};
