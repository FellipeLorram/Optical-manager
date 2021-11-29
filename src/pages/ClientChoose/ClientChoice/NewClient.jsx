import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { LinkButton } from '../../../styles/GlobalStyles';

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

export default function NewClient({ onScreen }) {
  return (
    <>
      {onScreen && (
        <LinkButton to="/new-client">
          NOVO CLIENTE
        </LinkButton>
      )}
    </>
  );
}

NewClient.propTypes = {
  onScreen: PropTypes.bool.isRequired,
};
