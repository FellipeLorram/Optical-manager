import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { ContainerGrid } from '../../../styles/GlobalStyles';
import LastExam from '../../../components/Card/ClientCard/LastExam';

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

export default function Exams({ exams, data, id }) {
  return (
    <>
      {exams && (
        <ContainerGrid
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {data.map((exam) => (
            <LastExam key={exam._id} id={id} data={exam} />
          ))}
        </ContainerGrid>
      )}
    </>
  );
}

Exams.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  exams: PropTypes.bool.isRequired,
};
