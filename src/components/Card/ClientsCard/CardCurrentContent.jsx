import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import LastExam from './LastExam';
import LastSell from './LastSell';

export default function CardCurrentContent({ data, current }) {
  return (
    <AnimatePresence onExitComplete>
      {current ? (
        <LastSell data={data.dataSells} id={data.id} />
      ) : (
        <LastExam data={data.dataExams} id={data.id} />
      )}
    </AnimatePresence>
  );
}

CardCurrentContent.propTypes = {
  data: PropTypes.object.isRequired,
  current: PropTypes.bool.isRequired,
};
