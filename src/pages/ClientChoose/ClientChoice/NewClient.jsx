import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Buttons/Index';

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
        <Button type="link" to="/new-client">
          NOVO CLIENTE
        </Button>
      )}
    </>
  );
}

NewClient.propTypes = {
  onScreen: PropTypes.bool.isRequired,
};
