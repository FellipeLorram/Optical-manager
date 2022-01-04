import React from 'react';
import PropTypes from 'prop-types';

import { BodyContainer } from './styled';
import Alert from '../../../components/Svgs/Alert/Alert';

export default function DeleteBody({ text }) {
  return (
    <BodyContainer>
      <div
        className="alert--card"
      >
        <Alert />
        <span>
          {text}
        </span>
      </div>
    </BodyContainer>
  );
}

DeleteBody.propTypes = {
  text: PropTypes.string.isRequired,
};
