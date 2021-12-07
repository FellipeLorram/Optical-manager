import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BlockLetters, PaperComponentContainer } from './styled';

export default function Paper({ switchs }) {
  return (
    <PaperComponentContainer>
      <div className="paper">
        {switchs.storeSwitch && (
          <>
            <BlockLetters />
            <BlockLetters large />
            <BlockLetters />
          </>
        )}
        {switchs.labSwitch && (
          <>
            <BlockLetters />
            <BlockLetters large />
            <BlockLetters />
          </>
        )}
        {switchs.clientSwitch && (
          <>
            <BlockLetters />
            <BlockLetters />
          </>
        )}
        {switchs.paymentSwitch && (
          <>
            <BlockLetters />
            <BlockLetters large />
          </>
        )}
      </div>
    </PaperComponentContainer>
  );
}

Paper.propTypes = {
  switchs: PropTypes.object.isRequired,
};
