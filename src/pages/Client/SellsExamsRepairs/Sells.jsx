import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { ContainerGrid } from '../../../styles/GlobalStyles';
import LastSell from '../../../components/Card/ClientCard/LastSell';

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

export default function Sells({ sells, data, id }) {
  return (
    <>
      {sells && (
        <ContainerGrid
          overflowY
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {data.map((sell) => (
            <LastSell ClientId={id} key={sell._id} data={sell} />
          ))}
        </ContainerGrid>
      )}
    </>
  );
}

Sells.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  sells: PropTypes.bool.isRequired,
};
