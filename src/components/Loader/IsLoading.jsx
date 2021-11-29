import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import Loader from '../Svgs/Loader/Loader';
import { Container } from './styled';

const ContainerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function IsLoading({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <Container
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
        >
          <Loader />
        </Container>
      )}
    </AnimatePresence>
  );
}

IsLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
