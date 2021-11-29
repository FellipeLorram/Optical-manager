import React from 'react';
import PropTypes from 'prop-types';

import { ContainerGrid } from '../../../styles/GlobalStyles';
import LastRepair from '../../../components/Card/ClientCard/LastRepair';

const variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 30,
    opacity: 0,
  },
};

export default function Repairs({ repairs, data }) {
  return (
    <>
      {repairs && (
        <ContainerGrid
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {data.map((repair) => (
            <LastRepair key={repair._id} data={repair} />
          ))}
        </ContainerGrid>
      )}
    </>
  );
}

Repairs.propTypes = {
  data: PropTypes.array.isRequired,
  repairs: PropTypes.bool.isRequired,
};
